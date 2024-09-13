import express from "express";
import cors from "cors";
import data from "./data.json" assert { type: "json" };

const app = express();
const port = 4001;
app.use(cors());
app.get("/me", (req, res) => {
	res.json(data.user);
});

app.post("/login", (req, res) => {
	res.json(data.user);
});

app.listen(port, () => {
	// console.log(`Server is running on port ${port}`);
});
