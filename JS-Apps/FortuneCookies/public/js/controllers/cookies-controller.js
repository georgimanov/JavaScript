var cookiesController = function(){

    function all(context){
        var cookies;
        data.cookies.get()
            .then(function(responseCookies){
                cookies = responseCookies.result;
                return templates.get('cookies-all');
            })
            .then(function(template) {

                context.$element().html(template(cookies));

                $('.btn-cookie-like').click( function(){
                    //var id = $(this).attr('data-id');
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'like';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie liked!");
                            context.redirect('#/');
                        });
                });

                $('.btn-cookie-dislike').on('click', function(){
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'dislike';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie disliked!");
                            context.redirect('#/');
                        });
                });

            });
    }

    function allByCategory(context){
        var category = context.params.category;
        if(category){
            category = category.toLowerCase();
        }
        var cookies;
        data.cookies.get()
            .then(function(responseCookies){
                cookies = responseCookies.result;
                return templates.get('cookies');
            })
            .then(function(template) {
                var groups = _.chain(cookies)
                    .groupBy('category')
                    .map(function(cookies, categoryName){
                        return {
                            category:categoryName,
                            cookies:cookies
                        };
                    })
                    .filter(function(group){
                        return !category || group.category.toLowerCase() === category;
                    })
                    .value();

                var userLogged = validator.userIsLoggedIn();
                groups.userLogged = userLogged;
                context.$element().html(template(groups));

                $('.btn-cookie-like').click( function(){
                    //var id = $(this).attr('data-id');
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'like';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie liked!");
                            context.redirect('#/');
                        });
                });

                $('.btn-cookie-dislike').on('click', function(){
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'dislike';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie disliked!");
                            context.redirect('#/');
                        });
                });

                $('.btn-cookie-share').on('click', function(){
                    var id = $(this).parents('.share-cookie-item-category').attr('data-id');
                    var parent = $(this).parents().parents().parents().parents().parents('.share-cookie-item');

                    var category = parent.find('h3').text();
                    var text = parent.find('p').text();
                    var img = parent.find('img').attr('src');

                    var cookie = {
                        text : text,
                        category : category,
                        img : img
                    }

                    //if(!validator.validateCookieTextOrCategory(cookie.text).isValid ||
                    //    !validator.validateCookieTextOrCategory(cookie.category).isValid){
                    //    toastr.warning(validator.validateCookieTextOrCategory(cookie.text).message);
                    //} else {

                        //console.log(validator.validateCookieTextOrCategory(cookie.text).isValid);
                        //console.log(validator.validateCookieTextOrCategory(cookie.text).isValid);

                        data.cookies.share(cookie)
                            .then(function(){
                                toastr.success("Cookie shared!");
                                context.redirect('#/');
                            });
                    //}

                });

            });
    }

    function allByLikes(context){
        var category = context.params.category;
        if(category){
            category = category.toLowerCase();
        }
        var cookies;
        data.cookies.get()
            .then(function(responseCookies){
                cookies = responseCookies.result;
                return templates.get('cookies');
            })
            .then(function(template) {
                var groups = _.chain(cookies)
                    .groupBy('likes')
                    .map(function(cookies, categoryName){
                        return {
                            category:categoryName,
                            cookies:cookies
                        };
                    })
                    .filter(function(group){
                        return !category || group.category.toLowerCase() === category;
                    })
                    .value();

                context.$element().html(template(groups));

                $('.btn-cookie-like').click( function(){
                    //var id = $(this).attr('data-id');
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'like';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie liked!");
                            context.redirect('#/');
                        });
                });

                $('.btn-cookie-dislike').on('click', function(){
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'dislike';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie disliked!");
                            context.redirect('#/');
                        });
                });

            });
    }

    function allByDate(context){
        var category = context.params.category;
        if(category){
            category = category.toLowerCase();
        }
        var cookies;
        data.cookies.get()
            .then(function(responseCookies){
                cookies = responseCookies.result;
                return templates.get('cookies');
            })
            .then(function(template) {
                var groups = _.chain(cookies)
                    .groupBy('shareDate')
                    .map(function(cookies, categoryName){
                        return {
                            category:categoryName,
                            cookies:cookies
                        };
                    })
                    .filter(function(group){
                        return !category || group.category.toLowerCase() === category;
                    })
                    .value();

                context.$element().html(template(groups));

                $('.btn-cookie-like').click( function(){
                    //var id = $(this).attr('data-id');
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'like';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie liked!");
                            context.redirect('#/');
                        });
                });

                $('.btn-cookie-dislike').on('click', function(){
                    var id = $(this).parents('.cookie-item').attr('data-id');
                    var state = 'dislike';

                    data.cookies.like(id,state)
                        .then(function(){
                            toastr.success("Cookie disliked!");
                            context.redirect('#/');
                        });
                });

            });
    }

    function cookie(context){
        var cookie;
        data.cookies.getMyCookie()
            .then(function(responseCookie){
                cookie = responseCookie.result;
                return templates.get('my-cookie');
            })
            .then(function(template) {
                context.$element().html(template(cookie));

                $('#btn-cookie-share').click(function(){
                    //var id = $(this).attr('data-id');

                    var cookie ={
                        text: $('#cookie-text').text(),
                        category: $('#cookie-category').text()
                    };

                    if($('#cookie-img').val()){
                        var imageUrl = $('#cookie-img').val()

                        if(validator.validateUrl(imageUrl).isValid){
                            cookie.img = imageUrl;
                        } else {
                            toastr.warning(validator.validateUrl(imageUrl).message);
                        }
                    }

                    data.cookies.share(cookie)
                        .then(function(){
                            toastr.success("Cookie shared!");
                            context.redirect('#/');
                        });
                });
            });
    }

    //function myCookie(context){
    //    templates.get('my-cookie')
    //        .then(function(template){
    //            context.$element().html(template());
    //
    //            // share
    //            $('#btn-cookie-share').on('click', function(){
    //                var cookie ={
    //                    text: $('#tb-todo-text').val(),
    //                    category: $('#tb-todo-category').val()
    //                };
    //                data.cookies.share(cookie)
    //                    .then(function(cookie){
    //                            toastr.success("Cookie " + cookie.text + ' shared!');
    //                        context.redirect('#/home');
    //                    });
    //            });
    //
    //            return data.categories.get();
    //        }).then(function(categories){
    //            $('#tb-cookie-category').autocomplete({
    //                source:categories.result
    //            });
    //        });
    //}


    return {
        all:all,
        allByCategory:allByCategory,
        allByLikes:allByLikes,
        allByDate:allByDate,
        cookie: cookie
    };
}();