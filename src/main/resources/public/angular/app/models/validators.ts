import {FormControl, FormGroup} from "@angular/forms";

export class CustomValidators {
    static password(c:FormControl) {
        let PASSWORD_REGEXP = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[a-zA-Z0-9_@#$%]*$");

        return PASSWORD_REGEXP.test(c.value) ? null : {
            regexPassword: {
                valid: false
            }
        };
    }

    static emailAddress(c:FormControl) {
        let EMAIL_REGEXP = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

        return EMAIL_REGEXP.test(c.value) ? null : {
            emailAddress: {
                valid: false
            }
        };
    }

    static matchingPasswords(passwordKey:string, passwordConfirmationKey:string) {
        return (group:FormGroup) => {
            let passwordInput = group.controls[passwordKey];
            let passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({passwordsNotEquivalent: true})
            }
        }
    }
}