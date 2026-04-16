import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "https://portfolio-app-sigma-steel.vercel.app/",
  }),
);
app.use(express.json());

const PORT = 5000;

app.post("/leetcode", async (req, res) => {
  try {
    const { username } = req.body;

    const query = {
      query: `query {
        matchedUser(username: "${username}") {
          username
          profile {
            realName
            userAvatar
            reputation
            ranking
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }`,
    };

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
