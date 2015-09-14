var validator = (function() {
    var CONSTANTS = {
        MAX_USERNAME_LENGTH: 30,
        MIN_USERNAME_LENGTH: 6,
        MAX_PASSWORD_LENGTH: 30,
        MIN_PASSWORD_LENGTH: 6,
        MIN_COOKIE_TEXT_AND_CATEGORY_LENGTH: 6,
        MAX_COOKIE_TEXT_AND_CATEGORY_LENGTH: 30,
        USERNAME_REGEX: /^[a-zA-Z0-9_.]{6,30}$/,
        PASSWORD_REGEX: /^[a-zA-Z0-9_.]{6,30}$/,
        TEXT_REGEX: /^[\s\S]{6,30}$/,
        URL_REGEX: /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi,
        IS_VALID: {
            isValid: true,
            message: ''
        }
    };

    var validator = {
        validateUsername: function(username) {
            if (!CONSTANTS.USERNAME_REGEX.test(username)) {
                return {
                    isValid: false,
                    message: 'The username must be between ' +
                    CONSTANTS.MIN_USERNAME_LENGTH + ' and ' +
                    CONSTANTS.MAX_USERNAME_LENGTH + ' symbols long and can contain only letters, numbers, underscores, or dots!'
                };
            } else {
                return CONSTANTS.IS_VALID;
            }
        },
        validatePassword: function(password) {
            if (!CONSTANTS.PASSWORD_REGEX.test(password)) {
                return {
                    isValid: false,
                    message: 'The password must be between ' +
                    CONSTANTS.MIN_PASSWORD_LENGTH + ' and ' +
                    CONSTANTS.MAX_PASSWORD_LENGTH + ' symbols long and can contain only letters, numbers, underscores, or dots!'
                };
            } else {
                return CONSTANTS.IS_VALID;
            }
        },
        validateMatchingPasswords: function(passwordOne, passwordTwo) {
            if (passwordOne == passwordTwo) {
                return CONSTANTS.IS_VALID;
            } else {
                return {
                    isValid: false,
                    message: 'The passwords do not match!'
                };
            }
        },

        validateCookieTextOrCategory: function(text) {
            if (!CONSTANTS.TEXT_REGEX.test(text)) {
                return {
                    isValid: false,
                    message: 'The text or the category must be between ' +
                    CONSTANTS.MIN_COOKIE_TEXT_AND_CATEGORY_LENGTH + ' and ' +
                    CONSTANTS.MAX_COOKIE_TEXT_AND_CATEGORY_LENGTH + ' symbols!'
                };
            } else {
                return CONSTANTS.IS_VALID;
            }
        },

        validateUrl: function(url) {
            if (!CONSTANTS.URL_REGEX.test(url)) {
                return {
                    isValid: false,
                    message: 'The image URL must be valid!'
                };
            } else {
                return CONSTANTS.IS_VALID;
            }
        },

        validateRegistrationInfo: function() {
            var username = $('#username-reg').val();
            var password = $('#password-reg').val();
            var passwordConfirm = $('#confirm-password-reg').val();

            var usernameValidationResult = validator.validateUsername(username);
            var passwordValidationResult = validator.validatePassword(password);
            var passwordMatchValidationResult = validator.validateMatchingPasswords(password, passwordConfirm);

            var usernameIsValid = usernameValidationResult.isValid;
            var passwordIsValid = passwordValidationResult.isValid;
            var passwordsMatch = passwordMatchValidationResult.isValid;

            if (usernameIsValid && passwordIsValid && passwordsMatch) {
                return {
                    isValid: true,
                    userInfo: {
                        username: username,
                        password: password,
                        email: email
                    }
                };
            } else if (!usernameIsValid) {
                return usernameValidationResult;
            } else if (!passwordIsValid) {
                return passwordValidationResult;
            } else  {
                return passwordMatchValidationResult;
            }
        },
        userIsLoggedIn: function() {
            if (localStorage.getItem('SPECIAL-AUTHENTICATION-KEY') !== "") {
                return true;
            } else {
                return false;
            }
        }
    };

    return validator;
}());