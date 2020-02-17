const path = require(`path`);
const slash = require(`slash`);

/// Creating all Service Hub Offerings
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // query content for WordPress posts
  const result = await graphql(`
    query {
      matchups: allVideoRanking {
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

    const k_factor = 24; // Federation factor
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

  const resultsTemplate = path.resolve(`./src/templates/results.js`);

  createPage({
    // will be the url for the page
    path: "/youtube-mash/results",
    // specify the component template of your choice
    component: slash(resultsTemplate),
    // In the ^template's GraphQL query, 'id' will be available
    // as a GraphQL variable to query for this posts's data.
    context: {
      rankings: initial_rankings
    }
  });
};
