const path = require(`path`);
const slash = require(`slash`);

var AWS = require("aws-sdk");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const options = {
    typeName: "VideoRanking",
    accessKeyId: process.env.GATSBY_DYNAMO_DB_ID,
    secretAccessKey: process.env.GATSBY_DYNAMO_DB_KEY,
    region: "us-east-1",
    params: { TableName: "nysi-votes-backedup" }
  };

  return new Promise((resolve, reject) => {
    const { createNode } = actions;
    delete options.plugins;

    var docClient = new AWS.DynamoDB.DocumentClient({
      region: "us-east-1",
      accessKeyId: options.accessKeyId,
      secretAccessKey: options.secretAccessKey
    });

    const processData = item => {
      const nodeId = createNodeId(`dynamodb-${item.id}`);
      const nodeContentDigest = createContentDigest(item);

      const nodeData = Object.assign({}, item, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          mediaType: `text/html`,
          contentDigest: nodeContentDigest,
          type: options.typeName,
          content: JSON.stringify(item)
        }
      });
      return nodeData;
    };

    const onScan = (err, data) => {
      if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        reject(err);
      } else {
        console.log("Query succeeded.");
        data.Items.forEach(item => {
          const nodeData = processData(item);
          createNode(nodeData);
        });

        if (typeof data.LastEvaluatedKey != "undefined") {
          options.params.ExclusiveStartKey = data.LastEvaluatedKey;
          docClient.scan(options.params, onScan);
        } else {
          resolve();
        }
      }
    };
    docClient.scan(options.params, onScan);
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      matchups: allVideoRanking(sort: { fields: timestamp }) {
        nodes {
          winner
          loser
        }
      }
      videos: allYoutubeVideo {
        nodes {
          videoId
          title
        }
      }
    }
  `);

  const matches = result.data.matchups.nodes;
  const videos = result.data.videos.nodes;

  const initial_rankings = videos.map(video => ({
    videoId: video.videoId,
    title: video.title,
    elo: 1400
  }));
  matches.forEach(match => {
    // KEITH: ignore this just math stuff
    const winner = initial_rankings.find(
      rankings => rankings.videoId === match.winner
    );
    const loser = initial_rankings.find(
      rankings => rankings.videoId === match.loser
    );

    const k_factor = 32; // Rating for newcomers
    const winner_expected =
      1 / (1 + Math.pow(10, (loser.elo - winner.elo) / 400));
    const loser_expected =
      1 / (1 + Math.pow(10, (winner.elo - loser.elo) / 400));

    const new_winner_elo = Math.round(
      winner.elo + k_factor * (1 - winner_expected)
    );
    const new_loser_elo = Math.round(
      loser.elo + k_factor * (0 - loser_expected)
    );

    winner.elo = new_winner_elo;
    loser.elo = new_loser_elo;
  });

  initial_rankings.sort((a, b) => b.elo - a.elo);

  const resultsTemplate = path.resolve(
    `./src/templates/youtube-mash/Results.js`
  );

  const individualVideoTemplate = path.resolve(
    `./src/templates/youtube-mash/IndividualVideo.js`
  );

  initial_rankings.forEach((rank, i) => {
    createPage({
      // will be the url for the page
      path: "/youtube-mash/video/" + (i + 1) + "/",
      // specify the component template of your choice
      component: slash(individualVideoTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        videoId: rank.videoId,
        rank: i + 1,
        totalVideos: initial_rankings.length
      }
    });
  });

  createPage({
    // will be the url for the page
    path: "/youtube-mash/results/",
    // specify the component template of your choice
    component: slash(resultsTemplate),
    // In the ^template's GraphQL query, 'id' will be available
    // as a GraphQL variable to query for this posts's data.
    context: {
      rankings: initial_rankings
    }
  });
};
