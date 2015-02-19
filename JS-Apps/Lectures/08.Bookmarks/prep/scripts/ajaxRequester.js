'use strict';

var ajaxRequester = (function (){
    var baseUrl = "https://api.parse.com/1/";

    var headers =
    {
        "X-Parse-Application-Id": "bc4SveKs0IlDIbYjlVHnG1rLqXc8TfCMkUnsLVY0",
        "X-Parse-REST-API-Key": "OF7Mxdsu6R5WAE5rx3Bwa2i8eDbbA7Whk6ieuZme"
    };

    function login(username, password, success, error) {
        jQuery.ajax({
            method: "GET",
            headers: headers,
            url: baseUrl + "login",
            data:{"username":username,"password":password},
            success: success,
            error: error
        });
    }

    function register(username, password, success, error) {
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "users",
            data:JSON.stringify({'username':username,'password':password}),
            success: success,
            error: error
        });
    }

    function getHeadersWithSessionToken(sessionToken) {
        var headersWithTokens = JSON.parse(JSON.stringify(headers));
        headersWithTokens["X-Parse-Session-Token"] = sessionToken;
        return headersWithTokens;
    }

    function getBookmarks(sessionToken, success, error) {
        var headersWithTokens = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "GET",
            headers: headersWithTokens,
            url: baseUrl + "classes/Bookmark",
            success: success,
            error: error
        });
    }

    function createBookmarks(title, url, userId, success, error) {
        var bookmark = {
            title: title,
            url: url,
            ACL: {}};
        bookmark.ACL[userId] = {"write":true,"read":true};
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "classes/Bookmark",
            data:JSON.stringify(bookmark),
            success: success,
            error: error
        });
    }

    function deleteBookmarks(sessionToken, bookmarkId, success, error) {
        var headersWithTokens = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "DELETE",
            headers: headersWithTokens,
            url: baseUrl + "classes/Bookmark/" + bookmarkId,
            success: success,
            error: error
        });
    }

    return {
        login: login,
        register: register,
        getBookmarks: getBookmarks,
        createBookmarks: createBookmarks,
        deleteBookmarks: deleteBookmarks
    }
})();