const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.use(express.static("public")) // loads static files in the public dir (index.js, styles.css, and images)

app.listen(port, () => {
    console.log("server running on " + port)
})

