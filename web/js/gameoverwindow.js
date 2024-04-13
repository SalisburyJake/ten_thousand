function showGameOverWindow(){
    console.log("showGameOverWindow");
    $(".gameOverWindow").fadeIn();
}

function closeGameOverWindow(){
    console.log("closeGameOverWindow");
    $(".gameOverWindow").fadeOut();
}

function addWinnerToGameOverScreen(name){
    $("#gameOverTitle").html("Game Over. " + name + " wins!");
}

function startNewGameFromGameOver(){
    closeGameOverWindow();
    startNewGame();
}