document.addEventListener('DOMContentLoaded', function () {

        /**
         * Open login-form
         * @param e
         */

        document.getElementById('login-btn').onclick = (e) => {
            e.preventDefault();
            document.getElementById('login-popup').style.display = 'block';
        };


        /**
         * Close login-form
         * @param e
         */

        document.querySelector('.login-popup-close').onclick = (e) => {
            e.preventDefault();
            document.querySelector('.login-popup').style.display = 'none';
        };

        /**
         * Open reserve-form
         * @param e
         */

        document.getElementById('reserve-btn').onclick = (e) => {
            e.preventDefault();
            document.getElementById('reserve-popup').style.display = 'block';
        };


        /**
         * Close reserve-form
         * @param e
         */

        document.querySelector('.reserve-popup-close').onclick = (e) => {
            e.preventDefault();
            document.querySelector('.reserve-popup').style.display = 'none';
            document.forms['reserve-form'].reset()
        };
    }
);
