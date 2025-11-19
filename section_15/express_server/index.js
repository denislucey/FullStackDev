// Steps to create an express server
// 1. create directory
// 2. Create index.js
// 3. initialize npm
// 4. Install express package
// 5. write server application
// 6. start server

// import express from the express package
import express from "express";

// create an app
const app = express()

// Set up a listener on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});