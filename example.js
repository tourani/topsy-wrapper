var Topsy = require('./lib/client');

var topsy = new Topsy(process.argv[2]);

topsy.getAuthorInfo({"url": "http://twitter.com/justinbieber"}, function(error, result) {
    console.log(result);
});

topsy.getExperts({"q": "Javascript"}, function(error, result) {
    console.log(result);
});

topsy.getStats({"url": "http://topsy.com"}, function(error, result) {
    console.log(result);
});
	