document.addEventListener('DOMContentLoaded', function () {

    //let elm1 = document.getElementById("loginField");
    //let elm2 = document.getElementById("passwordField");
    //let elm3 = document.getElementById("nameField");
    //let elm4 = document.getElementById("secondNameField");

        //function createValidator(el) {
        //
        //    el.onkeyup = function(){
        //        if (el.value.length <= 1) {
        //            el.style.border = '1px solid red';
        //            return false;
        //        } else {
        //            el.style.border = '1px solid #a3b0c2';
        //        }
        //    };
        //    document.forms['login-form'].reset();
        //    return true;
        //}
        /**
         * Add event listeners to login form submit event
         */
        document.getElementById('login-form').addEventListener('submit', validateLoginForm);

        /**
         * Add event listeners to reserve form submit event
         */
        document.getElementById('reserve-form').addEventListener('submit', validateReserveForm);

        /**
         * Validate input field for Login Form
         * @param e
         * @returns {boolean}
         */
        function validateLoginForm(e) {
            e.preventDefault();

            var userLogin = document.getElementById("loginField");
            var userPassword = document.getElementById("passwordField");

            if(userLogin.value.length <= 1 || userLogin.value.length >= 10){
                userLogin.style.border = '1px solid red';
                return false;
            } else {
                userLogin.style.border = '1px solid #a3b0c2';
            }

            if (userPassword.value.length <= 1 || userPassword.value.length >= 10) {
                userPassword.style.border = '1px solid red';
                return false;
            } else {
                userPassword.style.border = '1px solid #a3b0c2';
            }

            document.forms['login-form'].reset();
            return true;
        }

    /**
     * Validate input field for Reservation Form
     * @param e
     * @returns {boolean}
     */
    function validateReserveForm(e) {
        e.preventDefault();

        var nameField = document.getElementById("nameField");
        var secondNameField = document.getElementById("secondNameField");

        if (nameField.value.length <= 1 || nameField.value.length >= 10) {
            nameField.style.border = '1px solid red';
            return false;
        } else {
            nameField.style.border = '1px solid #a3b0c2';
        }

        if (secondNameField.value.length <= 1 || secondNameField.value.length >= 10) {
            secondNameField.style.border = '1px solid red';
            return false;
        } else {
            secondNameField.style.border = '1px solid #a3b0c2';
        }
        document.forms['reserve-form'].reset();
        return true;
    }

    }
);
