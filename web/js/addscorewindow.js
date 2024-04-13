function showAddScoreWindow(name){
    console.log("showAddScoreWindow: " + name);
    selectedPlayer = name;
    //Find name of person that was clicked on 
    $("#addScoreTitle").html("Add Score for " + name);
    $(".addScoreWindow").fadeIn();

    addScoreWindowOpened = true;
}

function closeAddScoreWindow(){
    console.log("closeAddScoreWindow");
    selectedPlayer = "";
    $(".addScoreWindow").fadeOut();
    addScoreWindowOpened = false;
}

function appendToScoreDisplay(value) {
    console.log('appendToScoreDisplay: ' + value);
    $('#addScoreDisplay').val($('#addScoreDisplay').val() + value);
}

function clearScoreDisplay() {
    console.log("clearScoreDisplay");
    $('#addScoreDisplay').val(''); //document.getElementById('display').value = '';
}



