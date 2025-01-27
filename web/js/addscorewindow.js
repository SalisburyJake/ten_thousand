function showAddScoreWindow(name){
    console.log("showAddScoreWindow: " + name);
    selectedPlayer = name;
    //Find name of person that was clicked on 
    $("#addScoreTitle").html("Add Score for " + name);
    $(".addScoreWindow").fadeIn();
    document.getElementById('addScoreDisplay').focus();
    document.getElementById('addScoreDisplay').click();
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


//Not working for some reason.  TODO: Fix this
/*
function handleEnterPress(event) {
    if (event.key === 'Enter') {
        console.log("Enter key pressed");
        //Submit score when enter key is pressed
        console.log("Score submitted for player: " + selectedPlayer);
        addScore(selectedPlayer, $('#addScoreDisplay').val())
        closeAddScoreWindow();
    }
}

document.getElementById('#addScoreWindow').addEventListener('keydown', handleEnterPress);
*/
