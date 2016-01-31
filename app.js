const 
	VIDEO_IMAGE_URL = "http://192.168.43.1:8056/photo.jpg",
	SERVER_URL = 'http://192.168.43.65:8080',
	UUID = 'hackcambridge';

// api/manage/views/Campaign_ID/Youruuid
// api/manage/campaignId/uuid/UUID
var express = require('express'),
	request = require('request'),
	path = require('path'),
	fs = require('fs'),
	app = express();

var campaignId = 1;

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
app.all('/', function (req, res) {
	// render UI + send UUID
});

/**
- Image Uploading Part
- if campaignId == null 
**/
var n = 0;
setInterval(function () {
	if (campaignId == null) { n=0; return;}
	n++;
	request.get(SERVER_URL+'/api/manage/campaignId/uuid/UUID', function (error, response, body){
		if(error) {return console.error(error); }
	});
	request.get(VIDEO_IMAGE_URL, {encoding: 'binary'}, function (error, response, body) {
		if (error) { return console.error(error); }
		var fileName = path.join(__dirname, 'tmp', n + '.jpg');
		fs.writeFileSync(fileName, body, 'binary');
		// upload to server then delete
		var formData = {
  			file: fs.createReadStream(fileName),
		};
			request.put({
			url: SERVER_URL +'/api/manage/view/'+campaignId+'/' + UUID,
				formData: formData
			},
			function optionalCallback(err, httpResponse, body) {
		  if (err) {
		    return console.error('upload failed:', err);
		  }
		  console.log('Upload successful!  Server responded with:', body);
		  fs.unlinkSync(fileName);
		});
	});
}, 5 * 1000);