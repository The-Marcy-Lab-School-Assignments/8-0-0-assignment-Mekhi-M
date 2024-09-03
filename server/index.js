/** @format */

const express = require("express");
const expApp = express();

const serveIndex = (req, res, next) => {
	res.sendFile(__dirname + "/index.html");
};
const serveAbout = (req, res, next) => {
	res.send("<h1>About</h1>");
};
const serveHello = (req, res, next) => {
	const name = req.query.name || "stranger";
	res.send(`Hello ${name}`);
};
const serveData = (req, res, next) => {
	const data = [{ name: "ben" }, { name: "zo" }, { name: "carmen" }];
	res.send(data);
};

expApp.get("/", serveIndex);
expApp.get("/about", serveAbout);
expApp.get("/api/hello", serveHello);
expApp.get("/api/data", serveData);

const port = 8080;
expApp.listen(port, () => console.log(`listening at http://localhost:${port}`));
