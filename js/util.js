/**
 * File Name: COUtil.js
 * Final Project for programming mobile apps
 * Revision History:
 *       Catherine Olejarczyk
 */
function frmAddGuest(){
    var form = $("#COAddGuest");
    form.validate({
        rules: {
            AddFullName: {
                required: true,
                rangelength: [2, 30]
            },
            AddEmail: {
                required: true,
                emailcheck: true
            },
            AddPhone: {
                required: true,
                phonecheck: true
            },
            AddDate: {
                required: true
            }
        },
        messages: {
            AddFullName: {
                required: "Must specify Name",
                rangelength: "Length must be 2-30 characters long"
            },
            AddEmail: {
                required: "Email is required",
                emailcheck: "Please enter a valid email address"
            },
            AddPhone: {
                required: "Phone number is required",
                phonecheck: "Phone number must conatin digits"
            },
            AddDate: {
                required: "Date of registry is required"
            }
        }
    });
    return form.valid();
};

function frmEditGuest(){
    var form = $("#COEditGuest");
    form.validate({
        rules: {
            EditFullName: {
                required: true,
                rangelength: [2, 30]
            },
            EditEmail: {
                required: true,
                emailcheck: true
            },
            EditPhone: {
                required: true,
                phonecheck: true
            },
            EditDate: {
                required: true
            }
        },
        messages: {
            EditFullName: {
                required: "Must specify Name",
                rangelength: "Length must be 2-30 characters long"
            },
            EditEmail: {
                required: "Email is required",
                emailcheck: "Please enter a valid email address"
            },
            EditPhone: {
                required: "Phone number is required",
                phonecheck: "Phone number must conatin digits"
            },
            EditDate: {
                required: "Date of registry is required"
            }
        }
    });
    return form.valid();
};

jQuery.validator.addMethod("emailcheck",
    function (value, element) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return this.optional(element) || regex.test(value);
    });
jQuery.validator.addMethod("phonecheck",
    function (value, element) {
        var regex = (/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
        return this.optional(element) || regex.test(value);
    },
    "Phone number must be valid");