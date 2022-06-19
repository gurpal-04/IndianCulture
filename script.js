function sidebar() {
    document.getElementById("hiddenBar").style.display= "inline-block";
    document.getElementById("navBar").innerHTML="&#x2613;";
}

function content(){
    document.getElementById("navBar").innerHTML="&#x2630;";
    document.getElementById("hiddenBar").style.display= "none";
}
