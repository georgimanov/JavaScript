var usersController = function(){

    function login(context) {
        templates.get('login')
            .then(function(template){
                context.$element().html(template);

                $('#btn-login').on('click', function(){
                    var user = {
                        username : $('#tb-username').val(),
                        password : $('#tb-password').val()
                    };

                    data.users.login(user)
                        .then(function(){
                            toastr.success('User logged in');
                            context.redirect('#/');
                        })
                });
            });
    }

    function logout(context){

        localStorage.setItem('SPECIAL-AUTHENTICATION-KEY', "");
        toastr.info('User logged out!');
        context.redirect('#/');

    }

    function register(context){
        templates.get('register')
            .then(function(template){
                context.$element().html(template);

                $('#btn-register').on('click', function(){
                    var user = {
                        username : $('#tb-username').val(),
                        password : $('#tb-password').val()
                    };

                    if(!validator.validateUsername(user.username).isValid){
                        toastr.warning(validator.validateUsername(user.username).message);
                    } else {
                        data.users.register(user)
                            .then(function(){
                                toastr.success('Successful registration!');
                                context.redirect('#/login');
                            })
                    }
                });

                $('#btn-login').on('click', function(){
                    var user = {
                        username : $('#tb-username').val(),
                        password : $('#tb-password').val()
                    };

                    data.users.login(user)
                        .then(function(){
                            toastr.success('User logged in');
                            context.redirect('#/');
                        })
                });
            });
    }

    return {
        login : login,
        register: register,
        logout : logout
    }
}();