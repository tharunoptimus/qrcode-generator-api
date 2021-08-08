const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

const QRCode = require('qrcode')

const server = app.listen(port, () => console.log("Server Listening on " + port));  // Start the Server at port

app.get("/", async (req, res, next) => {

    let string = req.query.data;  // Get the value of the string from the GET request

    if(string === undefined || string == null || string == "") { return res.sendStatus(400); }  // Bad Request if string not mentioned

    let width = req.query.size || 200;  // Get the value of the width from the GET request. Value = 200 if not defined.

    let errorCorrectionLevel = req.query.ec || 'L';  // Get the value of the errorCorrectionLevel from the GET request. Value = 'L' if not defined.

    await QRCode.toDataURL(string , { width: width, margin: '2', errorCorrectionLevel: errorCorrectionLevel }, function (err, url) {  // Creates the data url of the generated QR
        
        var img = Buffer.from(url.split(',')[1], 'base64');  // Creates a buffer of the data url

        res.writeHead(200, {  // 200 OK. Start writing the buffer to the response
            'Content-Type': 'image/png',
            'Content-Length': img.length 
        });

        res.end(img); // Ends the response with the buffer

    })

})