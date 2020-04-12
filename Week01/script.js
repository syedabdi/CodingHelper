function addHeading() {

    var origionalHeading = document.getElementById("heading").innerHTML;
    var additionalHeading = " this is additional";
    document.getElementById("heading").innerHTML = origionalHeading + additionalHeading;

}

function showAlert() {
    alert('this is my alert');
}