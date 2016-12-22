"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.password = function (c) {
        var PASSWORD_REGEXP = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[a-zA-Z0-9_@#$%]*$");
        return PASSWORD_REGEXP.test(c.value) ? null : {
            regexPassword: {
                valid: false
            }
        };
    };
    CustomValidators.emailAddress = function (c) {
        var EMAIL_REGEXP = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        return EMAIL_REGEXP.test(c.value) ? null : {
            emailAddress: {
                valid: false
            }
        };
    };
    CustomValidators.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ passwordsNotEquivalent: true });
            }
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=validators.js.map