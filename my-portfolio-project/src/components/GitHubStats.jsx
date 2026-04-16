import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import "./GitHubStats.css";

export default function GitHubStats() {
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = "vivek1702";

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const githubResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
        );
        if (!githubResponse.ok) {
          throw new Error("Failed to fetch GitHub stats");
        }

        const data = await githubResponse.json();
        console.log("GITHUB RESPONSE:", data);
        setGithubStats(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return <div className="stats-loading">Loading...</div>;
  }

  if (error || !githubStats) {
    return (
      <div className="stats-card-error">
        <p>Unable to load GitHub stats</p>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="stats-fallback-link"
        >
          View on GitHub →
        </a>
      </div>
    );
  }

  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className="stats-card-icon github-icon">
          <SiGithub />
        </div>
        <div className="stats-card-title">
          <h3>{githubStats.login}</h3>
          <p>{githubStats.company || "Developer"}</p>
        </div>
      </div>

      <div className="stats-card-content">
        <div className="stat-item">
          <div className="stat-number">{githubStats.public_repos || 0}</div>
          <div className="stat-name">Repositories</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{githubStats.followers || 0}</div>
          <div className="stat-name">Followers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{githubStats.following || 0}</div>
          <div className="stat-name">Following</div>
        </div>
      </div>

      {githubStats.bio && <p className="stats-card-bio">{githubStats.bio}</p>}

      <a
        href={githubStats.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="stats-card-button"
      >
        View Profile →
      </a>
    </div>
  );
}
