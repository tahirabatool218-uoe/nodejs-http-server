# Node.js HTTP Server

A Node.js fundamentals project that demonstrates how to build a basic HTTP server using Node.js core modules without Express.

The project includes HTTP routing, request handling, asynchronous file operations, request logging, error handling, and an interactive browser-based dashboard.

## Project Links

* **Live Demo:** Coming Soon
* **GitHub Repository:** Coming Soon

## Overview

This project was built as part of a Node.js Fundamentals task to practice the core concepts of Node.js by building an HTTP server from scratch.

The server is built using Node.js built-in modules and does not use Express.

It also includes a simple interactive dashboard that allows users to explore the server functionality directly from the browser without manually changing routes in the address bar.

## Features

* Basic HTTP server using Node.js `http` module
* Interactive dashboard
* Dynamic server status
* Dynamic server port
* URL-based routing
* HTTP method handling
* About Server page
* File Manager
* Read file functionality
* Write file functionality
* Request logging
* HTTP status codes
* HTTP response headers
* JSON responses
* Basic error handling
* 404 route handling
* `npm start` script

## Technologies Used

* Node.js
* JavaScript
* HTML
* CSS
* HTTP Module
* File System (`fs`) Module
* npm

## Node.js Concepts Demonstrated

### HTTP Server

The project uses Node.js's built-in `http` module to create a server without Express.

```js
const http = require("http");

const server = http.createServer((req, res) => {
    // Server logic
});
```

### Routing

The server handles different routes using the request method and URL.

| Method | Route         | Description            |
| ------ | ------------- | ---------------------- |
| GET    | `/`           | Dashboard              |
| GET    | `/about`      | About Server           |
| GET    | `/file`       | File Manager           |
| GET    | `/api/status` | Server status and port |
| GET    | `/api/file`   | Read file              |
| POST   | `/api/file`   | Write to file          |

### File System

The Node.js `fs` module is used for file operations.

The project demonstrates:

* `fs.readFile()`
* `fs.writeFile()`
* `fs.appendFile()`

File operations are performed asynchronously using callback functions.

### Request Data and Streams

POST request data is received in chunks using the request stream.

```js
req.on("data", (chunk) => {
    body += chunk;
});

req.on("end", () => {
    // Process complete request data
});
```

This demonstrates how Node.js can receive request data progressively instead of assuming that the complete data is available immediately.

### HTTP Status Codes

The server uses different HTTP status codes depending on the request result.

* `200` - Successful request
* `201` - File successfully updated
* `400` - Invalid request
* `404` - Route not found
* `500` - Internal server error

### HTTP Headers

The server sets response headers according to the response type.

Example for HTML responses:

```js
res.setHeader("Content-Type", "text/html");
```

Example for JSON responses:

```js
res.setHeader("Content-Type", "application/json");
```

### Request Logging

Every incoming request is recorded with its timestamp, HTTP method, and URL.

Example:

```text
2026-08-30T05:23:12.486Z - GET /
```

Logs are stored in:

```text
data/logs.txt
```

## Interactive Dashboard

The project provides a browser-based dashboard as the main entry point.

The dashboard displays the current server status and port dynamically by requesting:

```text
GET /api/status
```

Example response:

```json
{
    "status": "Running",
    "port": 3000
}
```

The dashboard also provides navigation to:

* About Server
* File Manager
* Read File
* Write to File
* Back to Dashboard

## File Manager

The File Manager demonstrates practical use of the Node.js File System module.

### Read File

The server reads the contents of:

```text
data/message.txt
```

using `fs.readFile()` and displays the content in the browser.

### Write File

The File Manager allows the user to enter new content and save it to:

```text
data/message.txt
```

using `fs.writeFile()`.

## Request Logging

Incoming requests are logged automatically in:

```text
data/logs.txt
```

For example:

```text
2026-08-30T05:23:12.486Z - GET /
2026-08-30T05:23:18.102Z - GET /about
2026-08-30T05:23:25.761Z - GET /file
2026-08-30T05:23:31.452Z - GET /api/file
```

This makes it possible to observe the requests received by the server.

## Project Structure

```text
nodejs-http-server/
│
├── data/
│   ├── logs.txt
│   └── message.txt
│
├── public/
│   ├── about.html
│   ├── file.html
│   └── index.html
│
├── index.js
├── package.json
└── README.md
```

### File Description

| File / Folder       | Purpose                               |
| ------------------- | ------------------------------------- |
| `index.js`          | Main Node.js HTTP server              |
| `package.json`      | Project configuration and npm scripts |
| `public/index.html` | Main dashboard                        |
| `public/about.html` | About Server page                     |
| `public/file.html`  | File Manager interface                |
| `data/message.txt`  | File used for read/write operations   |
| `data/logs.txt`     | Stores incoming request logs          |
| `README.md`         | Project documentation                 |

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed.

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

### Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd nodejs-http-server
```

### Install Dependencies

This project uses Node.js core modules and does not require external dependencies.

Run:

```bash
npm install
```

### Start the Server

```bash
npm start
```

The server will start on:

```text
http://localhost:3000
```

Open the URL in your browser to access the dashboard.

## How to Use

1. Start the server using `npm start`.
2. Open `http://localhost:3000` in your browser.
3. Check the dynamic server status and port.
4. Open **About Server** to explore the concepts demonstrated.
5. Open **File Manager**.
6. Use **Read File** to view `message.txt`.
7. Enter new content and use **Write to File** to update the file.
8. Return to the dashboard.
9. Request activity will be recorded in `data/logs.txt`.

## Error Handling

The server handles common errors such as:

* Missing files
* Invalid file operations
* Empty file content
* Unknown routes

An unknown route returns a `404` response.

File-related errors return an appropriate `500` response.

## npm Script

The project uses the following npm script:

```json
{
    "scripts": {
        "start": "node index.js"
    }
}
```

This allows the server to be started with:

```bash
npm start
```

## Task Requirements

This project fulfills the main requirements of the Node.js Fundamentals task:

* [x] Built a basic HTTP server using the `http` module
* [x] Implemented URL routing
* [x] Practiced Node.js event-driven architecture
* [x] Used the `fs` module for file reading
* [x] Used the `fs` module for file writing
* [x] Used asynchronous file operations
* [x] Implemented request logging
* [x] Used HTTP methods
* [x] Used HTTP status codes and headers
* [x] Used npm and `package.json` scripts
* [x] Created an interactive browser interface
* [x] Added basic error handling

## Learning Outcomes

Through this project, I practiced:

* Understanding the Node.js runtime
* Creating an HTTP server without Express
* Understanding request and response objects
* Handling HTTP methods
* Implementing basic routing
* Working with the File System module
* Understanding asynchronous operations
* Working with callbacks
* Handling request streams
* Setting HTTP status codes
* Setting HTTP response headers
* Handling server errors
* Using npm and `package.json` scripts
* Implementing basic request logging

## Author

**Tahira Batool**

BSCS Student | Full Stack Web Developer
