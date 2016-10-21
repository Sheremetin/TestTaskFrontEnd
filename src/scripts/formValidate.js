document.addEventListener('DOMContentLoaded', function () {

    //var elm = document.body.querySelector("input[type=text]");

    var elm1 = document.getElementById("loginField");
    var elm2 = document.getElementById("passwordField");
    function createValidator() {


        elm1.addEventListener('keyup', createValidator);
        elm2.addEventListener('keyup', createValidator);

        console.log(1);
        var userLogin = document.getElementById("loginField");
        var userPassword = document.getElementById("passwordField");

        if(userLogin.value <= 1){
            userLogin.style.border = '1px solid red';
            return false;
        } else {
            userLogin.style.border = '1px solid #a3b0c2';
        }

        if (userPassword.value <= 1 ) {
            userPassword.style.border = '1px solid red';
            return false;
        } else {
            userPassword.style.border = '1px solid #a3b0c2';
        }

        elm1.removeEventListener('keyup', createValidator);
        elm2.removeEventListener('keyup', createValidator);

        return true;
    }
        /**
         * Add event listeners
         */
        document.getElementById('login-form').addEventListener('submit', validate);

        /**
         * Validate input field
         * @param e
         * @returns {boolean}
         */
        function validate(e) {
            e.preventDefault();

            if(!createValidator(elm1)) return false;
            if(!createValidator(elm2)) return false;



            document.forms['login-form'].reset();

            //var userLogin = document.getElementById("loginField");
            //var userPassword = document.getElementById("passwordField");
            //
            //if(userLogin.value <= 1){
            //    userLogin.style.border = '1px solid red';
            //    return false;
            //} else {
            //    userLogin.style.border = '1px solid #a3b0c2';
            //}
            //
            //if (userPassword.value <= 1 ) {
            //    userPassword.style.border = '1px solid red';
            //    return false;
            //} else {
            //    userPassword.style.border = '1px solid #a3b0c2';
            //}
            //document.forms['login-form'].reset();
            return true;
        }

        /**
         * Open login-form
         * @param e
         */

        document.getElementById('login-btn').onclick = function(e){
            e.preventDefault();
            document.getElementById('login-popup').style.display = 'block';
        };


        /**
         * Close login-form
         * @param e
         */

        document.querySelector('.login-popup-close').onclick = function (e) {
            e.preventDefault();
            document.querySelector('.login-popup').style.display = 'none';
        };

        /**
         * Open reserve-form
         * @param e
         */

        document.getElementById('reserve-btn').onclick = function (e) {
            e.preventDefault();
            document.getElementById('reserve-popup').style.display = 'block';
        };


        /**
         * Close reserve-form
         * @param e
         */

        document.querySelector('.reserve-popup-close').onclick = function (e) {
            e.preventDefault();
            document.querySelector('.reserve-popup').style.display = 'none';
            document.forms['reserve-form'].reset()
        };
    }
);