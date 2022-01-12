const express = require("express")
const path = require("path")
const http = require("http")

const app = express()

const server = http.createServer(app)

// serve static files
app.use(express.static(path.join(__dirname, "public")))

const port = process.env.PORT || 8000
server.listen(port, () => console.log(`server is running on port ${port}`))
