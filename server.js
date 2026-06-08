const express = require("express");
const { exec } = require("child_process");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/convert", (req, res) => {

    const value = req.body.value;
    const conversion = req.body.conversion;

    exec(
        `py converter.py ${value} ${conversion}`,
        (error, stdout, stderr) => {

            if (error) {
                return res.status(500).json({
                    error: "Conversion failed"
                });
            }

            res.json({
                result: stdout.trim()
            });
        }
    );
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});