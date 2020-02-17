// framework imports - 1st party
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useState, useEffect } from "react";

const Results = () => {
  const data = useStaticQuery(graphql`
    {
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

  const matches = data.matchups.nodes;
  const videos = data.videos.nodes;

  const [rankings, setRankings] = useState(
    videos.map(video => ({
      videoId: video.videoId,
      title: video.title,
      elo: 1400
    }))
  );

  useEffect(() => {
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

    setRankings(initial_rankings);
  }, [matches]);

  return rankings.map((ranking, i) => (
    <div key={i}>
      <a
        href={
          "https://www.youtube.com/embed/" +
          ranking.videoId +
          "?rel=0&autoplay=1&mute=0"
        }
      >
        {ranking.title}:{" "}
      </a>
      {ranking.elo}
    </div>
  ));
};

export default Results;
