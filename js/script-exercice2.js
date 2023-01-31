/**
 * @author N'ZO LAGOU
 * @description DI-Bootcamp  Validate The Email
 */

/*
We will create a form that ask the user for their email. 
Then, using a function we will check the validity of the user’s input.

1- Add an input that has a type="email" to your form.
2- Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
3- On “submit”, the validation function should run and validate the email address.
Try to do this exercise twice : with and without regex.
*/

let form = document.forms[0];
let input = document.getElementById("email");
let validationMsg = document.getElementById("validationMsg");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let inputValue = input.value.trim();
    //validateEmailByScript(inputValue);
    validateEmailByRegex(inputValue);
});

/**
 * Validation de l'email par regex
 * 
 */
function validateEmailByRegex(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) {
        afficheMessage("Email correcte", true);
    } else {
        afficheMessage("Email Incorrecte, format: xxxx@xxx.xxx");
    }
}

/**
 * Validation de l'email sans regex
 * 
 */
function validateEmailByScript(email) {
    if (cheickArobase(email)) {
        if (cheickPoint(email)) {
            let arobaseSPlit = email.split("@"); //jon|@|gmail.com
            let pointSplit = arobaseSPlit[1].split("."); //gmail|.|com
            if (arobaseSPlit[0].trim() == "") {
                afficheMessage("Email incorrecte, ajoutez du texte avant @", false);
            } else if (pointSplit[0].trim() == "") {
                afficheMessage("Email incorrecte, '@' et '.' doivent etre séparés par un ou plusieurs caractères", false);
            } else {
                validationMsg.style.color = "green";
                afficheMessage("Email correcte.", true)
            }
        }
    }
}

/**
 * Verifie si le caractere '@' existe dans la chaine
 * @param value 
 * @returns 
 */
function cheickArobase(value) {
    let valueSplit = value.split("@");
    if (valueSplit.length < 2) {
        afficheMessage("Email incorrecte, '@' non trouvé!", false);
        return false;
    }
    return true;
}

/**
 * Verifie si le caractere '.' existe dans la chaine
 * @param value 
 * @returns 
 */
function cheickPoint(value) {
    let valueSplit = value.split(".");
    if (valueSplit.length < 2) {
        afficheMessage("Email incorrecte, '.' non trouvé!", false);
        return false;
    }
    return true;
}

/**
 * Affiche le message correspondant
 * @param  message 
 * @param  isCorrect 
 */
function afficheMessage(message, isCorrect) {
    isCorrect ? validationMsg.style.color = "green" : validationMsg.style.color = "red";
    validationMsg.innerHTML = message;
}
