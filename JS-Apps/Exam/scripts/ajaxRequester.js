'use strict';

var ajaxRequester = (function (){
    var baseUrl = "https://api.parse.com/1/";

    var headers =
    {
        "X-Parse-Application-Id": "NtMLzU6yHnoV4PYbXR4t0mZZM8M77OFPuJxJL2HB",
        "X-Parse-REST-API-Key": "JLO5KP1NnTa7C7ea1978GuaZBU7cloXmw7kwlKlP"
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
            data: JSON.stringify({'username':username,'password':password}),
            success: success,
            error: error
        });
    }

    function getHeadersWithSessionToken(sessionToken) {
        var headersWithTokens = JSON.parse(JSON.stringify(headers));
        headersWithTokens["X-Parse-Session-Token"] = sessionToken;
        return headersWithTokens;
    }

    function getProducts(sessionToken, success, error) {
        var headersWithTokens = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "GET",
            headers: headersWithTokens,
            url: baseUrl + "classes/Product",
            success: success,
            error: error
        });
    }

    function addProduct(name, category, price, userId, success, error) {
        var product = {
            name: name,
            category: category,
            price: parseFloat(price),
            ACL: {}};
        product.ACL[userId] = {"write":true,"read":true};
        product.ACL['*'] = {"read": true};
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "classes/Product",
            data:JSON.stringify(product),
            success: success,
            error: error
        });
    }

    function updateProduct(name, category, price, userId, productId, success, error) {
        var product = {
            name: name,
            category: category,
            price: parseFloat(price),
            ACL: {}};
        product.ACL[userId] = {"write":true,"read":true};
        product.ACL['*'] = {"read": true};
        jQuery.ajax({
            method: "PUT",
            headers: headers,
            url: baseUrl + "classes/Product/" + productId,
            data:JSON.stringify(product),
            success: success,
            error: error
        });
    }

    function deleteProduct(sessionToken, productId, success, error) {
        var headersWithTokens = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "DELETE",
            headers: headersWithTokens,
            url: baseUrl + "classes/Product/" + productId,
            success: success,
            error: error
        });
    }

    return {
        login: login,
        register: register,
        getProducts: getProducts,
        addProduct: addProduct,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct
    }
})();