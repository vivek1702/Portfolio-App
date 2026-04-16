import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import "./LeetCodeStats.css";

export default function LeetCodeStats() {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const LEETCODE_USERNAME = "viveksingh17";

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const leetcodeResponse = await fetch("http://localhost:5000/leetcode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: LEETCODE_USERNAME }),
        });

        if (!leetcodeResponse.ok) {
          throw new Error("Failed to fetch LeetCode stats");
        }

        const data = await leetcodeResponse.json();
        console.log("LEETCODE RESPONSE:", data);
        const userData = data?.data?.matchedUser;

        if (!userData) {
          throw new Error("User not found");
        }

        setLeetcodeStats(userData);
        setError(null);
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return <div className="stats-loading">Loading...</div>;
  }

  if (error || !leetcodeStats) {
    return (
      <div className="stats-card-error">
        <p>Unable to load LeetCode stats</p>
        <a
          href={`https://leetcode.com/${LEETCODE_USERNAME}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="stats-fallback-link"
        >
          View on LeetCode →
        </a>
      </div>
    );
  }

  // LeetCode data processing
  const acStats = leetcodeStats.submitStats?.acSubmissionNum || [];
  console.log("acStats:", acStats);

  const easyProblems =
    acStats.find((stat) => stat.difficulty === "Easy")?.count || 0;
  const mediumProblems =
    acStats.find((stat) => stat.difficulty === "Medium")?.count || 0;
  const hardProblems =
    acStats.find((stat) => stat.difficulty === "Hard")?.count || 0;

  // Total should be sum of all difficulties, not all counts
  const totalProblems = easyProblems + mediumProblems + hardProblems;

  console.log(
    "Easy:",
    easyProblems,
    "Medium:",
    mediumProblems,
    "Hard:",
    hardProblems,
    "Total:",
    totalProblems,
  );

  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className="stats-card-icon leetcode-icon">
          <SiLeetcode />
        </div>
        <div className="stats-card-title">
          <h3>{leetcodeStats.username}</h3>
          <p>
            Rank: #{leetcodeStats.profile?.ranking?.toLocaleString() || "N/A"}
          </p>
        </div>
      </div>

      <div className="stats-card-content">
        <div className="stat-item">
          <div className="stat-number">{totalProblems}</div>
          <div className="stat-name">Total Solved</div>
        </div>
        <div className="stat-item easy">
          <div className="stat-number">{easyProblems}</div>
          <div className="stat-name">Easy</div>
        </div>
        <div className="stat-item medium">
          <div className="stat-number">{mediumProblems}</div>
          <div className="stat-name">Medium</div>
        </div>
        <div className="stat-item hard">
          <div className="stat-number">{hardProblems}</div>
          <div className="stat-name">Hard</div>
        </div>
      </div>

      <a
        href={`https://leetcode.com/${LEETCODE_USERNAME}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="stats-card-button"
      >
        View Profile →
      </a>
    </div>
  );
}
