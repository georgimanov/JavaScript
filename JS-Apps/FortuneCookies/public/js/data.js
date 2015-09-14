var data = function(){
    const STORAGE_AUTH_KEY = 'SPECIAL-AUTHENTICATION-KEY';

    /* USERS */
    function register(user){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/users';

            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.password).toString()
            };

            $.ajax(url, {
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
                success: function(res){
                    resolve(res);
                },error: function(err){
                    reject(err);
                    toastr.error(err.responseText);
                }
            })
        });

        return promise;
    }

    function login(user){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/auth';

            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.password).toString()
            };

            $.ajax(url, {
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
                success: function(res){
                    localStorage.setItem(STORAGE_AUTH_KEY, res.result.authKey);
                    resolve(res);
                }, error: function(err){
                    toastr.error(err.responseText);
                    }
            })
        });

        return promise;
    }

    /* Cookies */

    function cookiesGet(){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/cookies';
            $.ajax(url, {
                method: 'GET',
                contentType: 'application/json',
                success: function(res){
                    resolve(res);
                },
                error: function(err){
                    reject(err);
                }
            });
        });
        return promise;
    }

    function myCookieGet(){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/my-cookie';
            $.ajax(url, {
                method: 'GET',
                contentType: 'application/json',
                headers: {
                    'x-auth-key': localStorage.getItem(STORAGE_AUTH_KEY)
                },
                success: function(res){
                    resolve(res);
                },
                error: function(err){
                    reject(err);
                    toastr.error(err.responseText);
                }
            });
        });
        return promise;
    }

    function like(id, type){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/cookies/' + id;
            $.ajax(url, {
                method: 'PUT',
                contentType: 'application/json',
                headers: {
                    'x-auth-key': localStorage.getItem(STORAGE_AUTH_KEY)
                },
                data: JSON.stringify({type: type}),
                success: function(res){
                    resolve(res);
                },
                error: function(err){
                    reject(err);
                    toastr.error(err.responseText);
                }
            });
        });
        return promise;
    }

    function share(cookie){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/cookies';
            $.ajax(url, {
                method: 'POST',
                contentType: 'application/json',
                headers: {
                    'x-auth-key': localStorage.getItem(STORAGE_AUTH_KEY)
                },
                data: JSON.stringify(cookie),
                success: function(res){
                    resolve(res);
                },
                error: function(err){
                    reject(err);
                    toastr.error(err.responseText);
                }
            });
        });
        return promise;
    }

    /*CATEGOREIS*/
    function categoriesGet(todo){
        var promise = new Promise(function(resolve, reject){
            var url = 'api/categories';
            $.ajax(url, {
                method: 'GET',
                contentType: 'application/json',
                headers: {
                    'x-auth-key': localStorage.getItem(STORAGE_AUTH_KEY)
                },
                success: function(res){
                    resolve(res);
                },
                error: function(err){
                    reject(err);
                }
            });
        });
        return promise;
    }

    return{
        users:{
            register: register,
            login: login
        },
        cookies:{
            get: cookiesGet,
            getMyCookie: myCookieGet,
            like:like,
            share: share
        },
        categories:{
            get: categoriesGet
        }
    }
}();