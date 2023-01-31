/**
 * @author N'ZO LAGOU
 * @description DI-Bootcamp  Get The User’s Geolocation Coordinates
 */


/*
Hint/tip

Use HTML5 and Javascript for this exercise.
Use everything we learned in class, and use all the resources linked in the course.
This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
*/

let isPositionData = document.getElementById("isPositionData");
function getPosition() {
    console.log(navigator);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        isPositionData.innerHTML = "Geolocation non prise en charge par ce navigateur";
    }
}

function showPosition(position) {
    isPositionData.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            isPositionData.innerHTML = "localisation non autorisée par l'utilisateur."
            break;
        case error.POSITION_UNAVAILABLE:
            isPositionData.innerHTML = "L'information sur la localisation et indisponible."
            break;
        case error.TIMEOUT:
            isPositionData.innerHTML = "le temps de réponse est dépasé."
            break;
        case error.UNKNOWN_ERROR:
            isPositionData.innerHTML = "Une erreur inconu a été rencontrée."
            break;
    }
}