# QR Code Generator

## Install

`npm install` to install dependencies.

## Run

`npm start` to start the server.

## Info

- Gets the Parameter for the string (`value`) and size (`size`) from the URL.
- Uses [qrcode](https://www.npmjs.com/package/qrcode) for the QR code generation.
- Creates a Buffer with the QR code data url.
- Sends the Buffer image with `res.writeHead()`

## Example
- In the development server load this URL to get the QR Code
[`localhost:3003/?value=meowman&size=100`](localhost:3003/?value=meowman&size=100)

## Enjoy!