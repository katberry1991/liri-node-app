/*Twitter
process.argv[2] (2=user input) set to "my-tweets" is saying 
that "if" user enters "my-tweets," function run and pull 
user's tweets*/ 
if (process.argv[2] === "my-tweets") {
/*"require" function in node.js is easiest way to access 
modules (modules=other files that will be accessing 
eachother's content). "require" basically reads a js file,
executes the file, and then returns or displays the exports
object to the user*/ 
//./keys.js allows this file to access the keys.js file.

/*"new" indicates that this is a constructor function. "Twitter
is capitalized for convention", but it isn't required for 
function to work properly, per class mini-lecture.*/ 
/*var user is unecessary, used to hide keys, can just enter info
from keys.js file.*/
var user = new Twitter({
  consumer_key: key,
  consumer_secret: secret,
  access_token_key: accessKey,
  access_token_secret: accessToken
});


};


//var process.argv = [node(0), liri.js(1), kathyrn(2), Arron(3)] items in array are indexed. in this case 3=Aaron
var spotify = require('spotify');
var songName = process.argv[2];
//Search spotify for a track named (query) 
spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
    console.log(data.tracks.items[0]);
});