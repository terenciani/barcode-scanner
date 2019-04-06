/*server.js*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});

let getDevices = require('usb-barcode-scanner').getDevices;

console.log(getDevices());

let UsbScanner = require('usb-barcode-scanner').UsbScanner;

let scanner = new UsbScanner({
    vendorId: 325,
    productId: 18
});

var controller = true
scanner.on('data', (data) => {
  console.log("Read " + data);
  if(controller && data == '7897049700403'){
    controller=false
    const player = require('play-sound')();
    audio = player.play('./foo.mp3', (err) => {
        if (err) console.log(`Could not play sound: ${err}`);
    })
      controller=true
  }else{
    console.log("Não Marcelo " + data)
  }
});

scanner.startScanning();