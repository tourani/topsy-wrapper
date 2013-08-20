var request = require('request');

var client = function(apiKey) {
    if (apiKey === undefined || apiKey === null)
    {
        throw new Error("You must provide an API key.");
    }

    this._baseUrl = 'http://otter.topsy.com';
    this._apiFormat = 'json';
    this._apiKey = apiKey;
};

client.prototype.getAuthorInfo = function(parameters, callback)
{
    this._get('authorinfo', this._apiFormat, parameters, callback);
};

client.prototype.getExperts = function(parameters, callback)
{
    this._get('experts', this._apiFormat, parameters, callback);
};

client.prototype.getLinkPosts = function(parameters, callback)
{
    this._get('linkposts', this._apiFormat, parameters, callback);
};

client.prototype.getLinkPostCount = function(parameters, callback)
{
    this._get('linkpostcount', this._apiFormat, parameters, callback);
};

client.prototype.getSearch = function(parameters, callback)
{
	this._get('search', this._apiFormat, parameters, callback);
};

client.prototype.getSearchCount = function(parameters, callback)
{
	this._get('searchCount', this._apiFormat, parameters, callback);
}

client.prototype.getSearchHistogram = function(parameters, callback)
{
    this._get('searchhistogram', this._apiFormat, parameters, callback);
};

client.prototype.getSearchDate = function(parameters, callback)
{
    this._get('searchdate', this._apiFormat, parameters, callback);
};

client.prototype.getStats = function(parameters, callback)
{
	this._get('stats', this._apiFormat, parameters, callback);
};

client.prototype.getTop = function(parameters, callback)
{
    this._get('top', this._apiFormat, parameters, callback);
};

client.prototype.getTrackbacks = function(parameters, callback)
{
    this._get('trackbacks', this._apiFormat, parameters, callback);
};

client.prototype.getUrlInfo = function(parameters, callback)
{
    this._get('urlinfo', this._apiFormat, parameters, callback);
};


client.prototype._get = function(resource, format, parameters, callback)
{
    var self = this;

    var requestUrlString = this._baseUrl + '/' + resource + '.' + format
        + '?'
        + 'apikey=' + this._apiKey;

    for (var key in parameters)
    {
        var value = parameters[key];
        if (value instanceof Array)
        {
            value = value.join(',');
        }

        requestUrlString = requestUrlString + '&' + key + '=' + escape(value);
    }

    request(requestUrlString, function (error, response, body) {
        if (error)
        {
            callback(error, undefined);

            return;
        }

 //Error Handling

        var errorMessage = null;
        switch(response.statusCode)
        {
            case 400:
                errorMessage = 'Parameter check failed.';
                break;
            case 403:
                errorMessage = 'Forbidden';
                break;
            case 404:
                errorMessage = 'Action not supported.';
                break;
            case 500:
                errorMessage = 'Unexpected internal error.';
                break;
            case 503:
                errorMessage = 'Temporarily unavailable';
                break;
        }

      	if (errorMessage !== null)
      	{
      		 callback(new Error(errorMessage), undefined);

             return;
      	}

      	var result = JSON.parse(body);
      	   if (result.response !== undefined)
        {
            callback(undefined, result.response);

            return;
        }

        if (result.response !== undefined)
        {
            callback(undefined, result.response);

            return;
        }
    });
};

module.exports = client;
