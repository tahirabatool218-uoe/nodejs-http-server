const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    // Log every incoming request
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

    fs.appendFile("data/logs.txt", log, (err) => {
        if (err) {
            console.log("Error writing log:", err);
        }
    });

    // Home Page
    if (req.method === "GET" && req.url === "/") {

        fs.readFile("public/index.html", "utf8", (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end("Internal Server Error");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }

    // Server Status
    else if (req.method === "GET" && req.url === "/api/status") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
            status: "Running",
            port: PORT
        }));
    }

    // About Page
    else if (req.method === "GET" && req.url === "/about") {

        fs.readFile("public/about.html", "utf8", (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end("Internal Server Error");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }

    // File Manager Page
    else if (req.method === "GET" && req.url === "/file") {

        fs.readFile("public/file.html", "utf8", (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end("Internal Server Error");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }

    // Read message.txt
    else if (req.method === "GET" && req.url === "/api/file") {

        fs.readFile("data/message.txt", "utf8", (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify({
                    success: false,
                    message: "Unable to read file"
                }));

                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                success: true,
                content: data
            }));
        });
    }

    // Write to message.txt
    else if (req.method === "POST" && req.url === "/api/file") {

        let body = "";

        // Receive request data in chunks
        req.on("data", (chunk) => {
            body += chunk;
        });

        // When complete request data is received
        req.on("end", () => {

            const data = JSON.parse(body);

            if (!data.content || data.content.trim() === "") {

                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify({
                    success: false,
                    message: "Content cannot be empty"
                }));

                return;
            }

            fs.writeFile(
                "data/message.txt",
                data.content,
                "utf8",
                (err) => {

                    if (err) {
                        res.statusCode = 500;
                        res.setHeader("Content-Type", "application/json");

                        res.end(JSON.stringify({
                            success: false,
                            message: "Unable to write file"
                        }));

                        return;
                    }

                    res.statusCode = 201;
                    res.setHeader("Content-Type", "application/json");

                    res.end(JSON.stringify({
                        success: true,
                        message: "File updated successfully"
                    }));
                }
            );
        });
    }

    // Unknown Route
    else {

        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The requested route does not exist.</p>
            <a href="/">Back to Dashboard</a>
        `);
    }
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});