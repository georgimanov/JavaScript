(function(){
    var sammyApp = Sammy('#content', function(){


        /**
         * `#/`
         * Redirects to `#/home`
        */
         this.get('#/', function(){
            this.redirect('#/home');
        });


        /*
         * `#/home`
         * Shows all fortune cookies
         * Available to all users, logged-in or not
         * Provides a way to sort the cookies by `likes` or `shareDate`
         * Provides a way to filter fortune cookies by `category`

         * `#/home?category=CCCC`
         * Shows only the fortune cookies in category **CCC**

         */


        this.get('#/home', cookiesController.allByCategory);

        this.get('#/home/sort/category', cookiesController.allByCategory);

        this.get('#/home/sort/likes', cookiesController.allByLikes);

        this.get('#/home/sort/date', cookiesController.allByDate);

        this.get('#/login', usersController.login);

        this.get('#/register', usersController.register);

        this.get('#/logout', usersController.logout);

        /*
        * `#/my-cookie`
        * Shows the current hourly fortune cookie for the logged-in user
        */

        this.get('#/my-cookie', cookiesController.cookie);
    });

    $(function(){
        sammyApp.run('#/');

        $.ajax('api/categories',{
            contentType: 'application/json',
            headers:{
                'x-auth-key':localStorage.getItem('SPECIAL-AUTHENTICATION-KEY')
            },
            success: function(categories){
                //toastr.info(JSON.stringify(categories));
            }
        })
    });
}());