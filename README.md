topsy-wrapper
=============

A wrapper for the Topsy API

##Example

To use the included example do the following:

    node example.js API_key

****

##Usage/Sample Requests

    topsy.getAuthorInfo({"url": "http://twitter.com/justinbieber"}, function(error, result) {
        console.log(result);
    });

    topsy.getExperts({"q": "javascript"}, function(error, result) {
        console.log(result);
    });

    topsy.getLinkPosts({"url": "http://twitter.com/javascript"}, function(error, result) {
        console.log(result);
    });

    topsy.getLinkPostCount({"url": "http://twitter.com/instagram"}, function(error, result) {
        console.log(result);
    });

    topsy.getTop({"thresh": "top100"}, function(error, result) {
        console.log(result);
    });
 
    topsy.getUrlInfo({"url": "http://apple.com"}, function(error, result) {
        console.log(result);
    });

****

##Documentation

Check out Topsy API documentation (https://code.google.com/p/otterapi/wiki/Resources) for a list of all the possible requests

****


#License
(Mit License)