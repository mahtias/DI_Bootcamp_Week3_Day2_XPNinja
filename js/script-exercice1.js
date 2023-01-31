/**
 * @author N'ZO LAGOU
 * @description DI-Bootcamp  Calculate The Tip
 */

/*
First Part :
    1- Create a js file name main.js.

    2- Create a function called calculateTip() that takes no parameter.

        1- Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.

        2- Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.

        3- Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.

        4- Create a condition :
            °If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.

        5- Create another condition after the first one :
            °If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).

        6- Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)

        7- Use the toFixed method to round total to two decimal points.

        8- Add the CSS property “display:block” to the tag which id is totalTip.

        9- Display the variable total in the tag which id is tip.


Second Part:
    1- To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
    2- Call the function calculateTip() when the tag which id is calculate is clicked.
    Hint : use the method onclick.
*/
let billamtInput = document.getElementById("billamt");
let qualityServiceInput = document.getElementById("serviceQual");
let numberOfPeopleInput = document.getElementById("peopleamt");
let each = document.getElementById("each");
let totalTip = document.getElementById("totalTip");
totalTip.style.display = "none";
let tip = document.getElementById("tip");
let calculate = document.getElementById("calculate");
calculate.onclick = calculateTip;

function calculateTip() {
    let billAmount = billamtInput.value.trim();
    let serviceQuality = qualityServiceInput.value;
    let numberOfPeople = numberOfPeopleInput.value.trim();

    if (billAmount == '') {
        alert("Please, insert bill amount !");
        billamtInput.focus();
    } else {
        if (serviceQuality == 0) {
            alert("Please, select service!");
        } else {
            if (numberOfPeople == '' || numberOfPeople < 1) {
                numberOfPeople = 1;
                each.style.display = "none";
            }

            let total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2);
            totalTip.style.display = "block";

            tip.innerHTML = total;
        }
    }
}