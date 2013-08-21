topsy-wrapper
=============

A wrapper for the Topsy API

##Example

To use the included example do the following:

    node example.js API_key

****

##Usage Examples

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

    topsy.getPopularTrackbacks({"url": "http://www.cnn.com}, function(error, result) {
        console.log(result);
    });

    topsy.getSearch({"q": "Elon Musk"}, function(error, result) {
        console.log(result);
    });

    topsy.getSearchCount({"q": "Elon Musk"}, function(error, result) {
        console.log(result);
    });

    topsy.getSearchHistogram({"q": "iphone"}, function(error, result) {
        console.log(result);
    });

    topsy.getSearchDate({"q": "Elon Musk"}, function(error, result) {
        console.log(result);
    });

    topsy.getStats({"url": "http://instagram.com}, function(error, result) {
        console.log(result);
    });

    topsy.getTags({"url": "http://instagram.com"}, function(error, result) {
        console.log(result);
    });

    topsy.getTop({"thresh": "top100"}, function(error, result) {
        console.log(result);
    });

    topsy.getTrackbacks({"url": "http://apple.com"}, function(error, result) {
        console.log(result);
    });

    topsy.getTrending({}, function(error, result) {
        console.log(result);
    });

    topsy.getUrlInfo({"url": "http://apple.com"}, function(error, result) {
        console.log(result);
    });


****


#License
(Mit License)