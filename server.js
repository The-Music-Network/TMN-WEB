const express = require("express");
const fs = require("fs");
const path = require("path");
const bundle = require("./client/server.bundle.js");

const app = express();
const renderer = require("vue-server-renderer").createRenderer({
    template: fs.readFileSync("./public/index.template.html", "utf-8")
});

app.use("./dist", express.static(path.join(__dirname, "./dist")));
app.use("./client", express.static(path.join(__dirname, "./client")));

app.get("*", (req, res) => {
    bundle
        .default(req.url)
        .then(app => {
            const context = {
                title: "The Music Network",
                meta: `
                <meta charset="UTF-8">
            `
            };

            renderer
                .renderToString(app, context)
                .then(html => {
                    res.end(html);
                })
                .catch(err => {
                    console.error("Render Error: ", err);
                    if (err.code === 404) {
                        res.status(404).end("Page not found");
                    } else {
                        res.status(500).end("Internal Server Error");
                    }
                });
        })
        .catch(err => {
            console.error("Bundle Error: ", err);
        });
});

app.listen(8080);
