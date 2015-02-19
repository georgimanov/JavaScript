'use strict';

(function() {
    $(function(){
        registerEventHandlers();
        var currentUser = userSession.getCurrentUser();

        if (currentUser) {
            showWelcomeViewUser();
        } else {
            showHomeView();
        }
    });

    function registerEventHandlers() {
        $("#btn-nav-guest-home").click(showWelcomeView);
        $("#btn-nav-guest-login").click(showLoginView);
        $("#btn-nav-guest-register").click(showRegisterView);
        $("#btn-register-from").click(showRegisterView);
        $(".btn-login-from").click(showLoginView);
        $("#login-button").click(loginClicked);
        $("#register-button").click(registerClicked);

        $("#btn-nav-user-home").click(showWelcomeViewUser);
        $("#btn-nav-user-products").click(showProductsView);
        $("#btn-nav-user-add-product").click(showAddProductView);
        $("#btn-nav-user-logout").click(logoutClicked);
        $("#btn-nav-user-add-product").click(showAddProductView);
        $("#add-product-button").click(addProductClick);
        $("#add-product-button-cancel").click(addProductCancelClick);

        $( '.products-edit-button' ).click(showEditProductView);
        //$( "button" ).click(showDeleteProductView);
        //$("#btnShowLoginView").click(showLoginView);
        //$("#btnLoginRegister").click(showRegisterView);
        //$("#btnShowRegisterView").click(showRegisterView);
        //$("#btnRegisterRegister").click(registerClicked);
        //$("#btnLogout ").click(logoutClicked);
        //$("#btnLoginLogin").click(loginClicked);
        //$("#btnAddBookmark").click(addBookmarkClicked);
    }



    function showHomeView() {
        $("#menu-user").hide();
        $("#menu-guest").show();

        var currentUser = userSession.getCurrentUser();
        if (! currentUser) {
            showWelcomeView();
            //$("#header span").text('');
            //$("#header a").hide();
        } else {
            $("#menu-user").show();
            $("#menu-guest").hide();
        }
    }

    function showWelcomeView() {
        $("#main > *").hide();
        $("#section-welcome-guest").show();
    }

    function showLoginView() {
        $("#main > *").hide();
        $("#section-login-guest").show();
        $("#username-login").val('');
        $("#password-login").val('');
    }

    function loginClicked() {
        var username = $("#username-login").val();
        var password = $("#password-login").val();
        ajaxRequester.login(username, password, authSuccess, loginError);
    }

    function authSuccess(data) {
        userSession.login(data);
        showInfoMessage('successful login');
        showWelcomeViewUser();
    }

    function loginError(error) {
        showErrorMessage('Incorrect username/password');
    }

    function showRegisterView() {
        $("#main > *").hide();
        $("#section-register-guest").show();
        $("#username-register").val('');
        $("#password-register").val('');
        $("#confirm-password-register").val('');
    }

    function showHomeViewClicked() {
        $("main > *").hide();
        $("#homeView").show();
    }

    function logoutClicked () {
        userSession.logout();
        showHomeView();
        showInfoMessage('successfully logged out');
    }

    function registerClicked() {
        var username = $("#username-register").val();
        var password = $("#password-register").val();
        var passwordConfirmation = $("#confirm-password-register").val();

        if ( password !== passwordConfirmation) {
            showErrorMessage("Passwords must be identical");
        } else {
            ajaxRequester.register(username, password,
                function(data) {
                    data.username = username;
                    showInfoMessage('successful registration');
                    showWelcomeView();
                },
                registerError);
        }
    }

    function registerError(error) {
        showAjaxError('Register failed', error);
    }

    function showWelcomeViewUser() {

        var currentUser = userSession.getCurrentUser();

        if (currentUser) {
            $("#menu-user").show();
            $("#menu-guest").hide();
            $("#main > *").hide();
            $("#section-welcome-user").show();
            $("#header-welcome-user span").text(currentUser.username);
        } else {
            showWelcomeView();
        }

    }

    function showProductsView(){
        var currentUser = userSession.getCurrentUser();
        if (currentUser) {
            $("#main > *").hide();
            $("#products").show();
            var sessionToken = currentUser.sessionToken;
            ajaxRequester.getProducts(sessionToken, loadProductsSuccess, loadProductsError);
        } else {
            showWelcomeView();
        }
    }


    function loadProductsSuccess(data) {

        var $productsUl =  $("#products ul");
        $productsUl.html('');
        for (var p in data.results) {
            var product = data.results[p];
            var $productLi = $("<li class='product'>");
            $productLi.data("product", product);
            $productLi.attr("id",product.objectId);

            var $name = $("<p  class='item-name'>");
            $name.text(product.name);
            $productLi.append($name);

            var $category = $("<p  class='category'>");
            $productLi.append('<span class="pre">Category:</span>');
            $category.text(product.category);
            $productLi.append($category);

            var $price = $("<p  class='price'>");
            $productLi.append('<span class="pre">Price:</span>');
            $price.text("$" + product.price);
            $productLi.append($price);

            var currentUser = userSession.getCurrentUser();
            var userId = currentUser.objectId;
            for( var key in product.ACL){
                if (key !== '*') {
                    if( key == userId) {
                        var $edit = $('<a href="#" class="products-edit-button">');
                        $edit.text('Edit');
                        $edit.attr("id",product.objectId );
                        $edit.click( showEditProductView);

                        $productLi.append($edit);

                        var $delete = $('<a href="#" class="products-delete-button">');
                        $delete.text('Delete');
                        $delete.attr("id",product.objectId);
                        $delete.click( showDeleteProductView);
                        $productLi.append($delete);
                    }
                }
            }

            $productsUl.append($productLi);
        }
        $("#products").show(); // section
    }

    function loadProductsError(error) {
        showErrorMessage('Products load failed');
    }

    function addProductCancelClick() {
        $("#add-product-name").val('');
        $("#add-product-category").val('');
        $("#add-product-price").val('');
    }

    function showAddProductView() {

       $("#add-product-name").val('');
       $("#add-product-category").val('');
       $("#add-product-price").val('');

        var currentUser = userSession.getCurrentUser();

        if (currentUser) {
            $("#menu-user").show();
            $("#menu-guest").hide();
            $("#main > *").hide();
            $("#section-add-product").show();
            $("#products").hide();

        } else {
            showWelcomeView();
        }
    }

    function addProductClick() {
        var name =     $("#add-product-name").val();
        var category = $("#add-product-category").val();
        var price =    $("#add-product-price").val();

        if(name == '') {
            showErrorMessage('Enter name');
        }
        if(category == '') {
            showErrorMessage('Enter category');
        }
        if(price == '') {
            showErrorMessage('Enter price');
        }

        if ( name != '' && category != '' && price != '') {
            var currentUser = userSession.getCurrentUser();
            ajaxRequester.addProduct(name, category, price, currentUser.objectId,
                addProductSuccess, addProductsError );
        }
    }

    function addProductSuccess() {
        showInfoMessage('successfully added new product');
        showProductsView();
    }

    function addProductsError(error) {
        showAjaxError('Product cannot be created', error);
        showErrorMessage('Product creation failed');
    }

    function showEditProductView() {
        var product = $(this).parent().data("product");
        var currentUser = userSession.getCurrentUser();
        $("#product-edit-section-name").val(product.name);
        $("#product-edit-section-category").val(product.category);
        $("#product-edit-section-price").val(product.price);

        if (currentUser) {
            $("#main > *").hide();
            $("#section-edit-product").show();
            $("#products").hide();



        } else {
            showWelcomeView();
        }

        $("#product-section-button-edit").click(updateProduct);
    }

    function showDeleteProductView() {
        var product = $(this).parent().data("product");
        var currentUser = userSession.getCurrentUser();
        if (currentUser) {
            $("#main > *").hide();
            $("#section-delete-product").show();
            $("#products").hide();
        } else {
            showWelcomeView();
        }
    }

    function deleteProductButtonClicked() {
        var product = $(this).parent().data("product");
        var currentUser = userSession.getCurrentUser();
        var sessionToken = currentUser.sessionToken;

        noty({
            text: "Delete this product?",
            type: 'confirm',
            layout: 'center',
            buttons: [
                {
                    text: "Yes",
                    onClick: function($noty) {
                        deleteBookmark(sessionToken, product);
                        $noty.close();
                    }
                },
                {
                    text: "Cancel",
                    onClick: function($noty) {
                        $noty.close();
                    }
                }
            ]
        })
    }

    function deleteProduct(sessionToken, bookmark) {
        ajaxRequester.deleteBookmarks(sessionToken , product.objectId, showProductsView, deleteProductError);
    }

    function deleteProductError(error) {
        showErrorMessage('Product delete failed');
    }

    function showAjaxError(msg, error) {
        var errMsg = error.responseJSON;
        if (errMsg && errMsg.error) {
            showErrorMessage(msg + " : " + errMsg.error);
        } else {
            showErrorMessage(msg + ".");
        }
    }

    function showInfoMessage(msg) {
        noty({
                text: msg,
                type: 'info',
                layout: 'bottomCenter',
                timeout: 2000}
        );
    }

    function showErrorMessage(msg) {
        noty({
                text: msg,
                type: 'error',
                layout: 'bottomCenter',
                timeout: 5000}
        );
    }

})();