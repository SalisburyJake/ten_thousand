let gameTable;          //Game Table
let playerRow;          //Row where Player Names are Stored
let playerScore;        //Row Where Scores are kept
let playerScoreList;
let players = [];
let selectedPlayer = '';

//$.ajaxSetup({ cache: false });

$(document).ready(function () {
    //Set Global Variables (check if this should be up top when we actually init global vars)  
    gameTable = $('#10000Table');
    playerRow = gameTable.find('#player_name_row');
    playerScore = gameTable.find('#player_score_row');
    playerScoreList = gameTable.find('#player_score_list_row');

    //Add popup windows
    $(".newGameWindow").load('html/newgamewindow.html');
    $(".addScoreWindow").load('html/addscorewindow.html');
    $(".gameOverWindow").load('html/gameoverwindow.html');
    
    //Events
    //TODO: Add event to close out of popup when clicked away from popup

    //Testing Only.  Remove later
    testGameTable();
});

//Run when the new game button is pressed
function startNewGame() { 
    //Show new game window
    showNewGameWindow();
};

//When starting a new game, clear the old game board
function clearGameTable() {
    $("#10000Table td").remove();
}

//Remove later
function testGameTable(){
    //Add names to the 10000 table
    let playerNames = ["Jacob", "Kim", "Mom", "Dad"];
    let numPlayers = count(playerNames);
    for(let i=0; i<numPlayers; i++)
    {
        addPlayer(playerNames[i]);
    }
}

//This function needed since there is no length defined for objects
function count(object){
    let c = 0;
    for(i in object)
        if(object[i] != undefined)
            c++;
    return c;
}

function navigateToCell(row, column) {
    var targetCell = gameTable.find('tr').eq(row).find('td').eq(column);
    return targetCell;
}

function addPlayer(name){
    //Only add player if name is not empty
    if (name.trim()){
        //Add player to object array and set score to zero    
        let player = {name:"", totalscore: 0, scoreHistory:[]};
        player.name = name;
        players.push(player);

        //Add Player to Game Table
        playerRow.append('<td id='+ player.name +'>' + player.name + '</td>');
        playerScore.append('<td>' + player.totalscore + '</td>');
        playerScoreList.append('<td>-</td>');

        //Add Event to allow you to add a score when button is clicked
        $('#' + name).click(function() {showAddScoreWindow(name)});
    }
}

function addScore(name, score){
    console.log("addScore: " + score);
    let score_int = parseInt(score);
    let scoringPlayerIndex;

    //Add Score to Player
    for(let i=0; i<players.length; i++){
        if(name == players[i].name)
        {   
            scoringPlayerIndex = i;
            //Score must be > 500 to get out OR player score must be > 500 already
            if((score_int >= 500) || (parseInt(players[i].totalscore) >= 500) ){
                //Score must be > 50 and in multiples of 50  
                if(score_int % 50 === 0)
                {
                    //Add Score
                    players[i].totalscore = parseInt(players[i].totalscore) + parseInt(score);
                    //Display Score
                    let playerScoreCell = navigateToCell(1,i);
                    playerScoreCell.html(players[i].totalscore);
                    //Add Score to list of player scores in the table
                    addScoreToPlayerList(i, score);
                    break;
                }
                else{
                    //TODO: Add pop up to yell at player
                    console.log("Something doesn't seem right.  The score you input is not possible");
                }
            }
            else{
                //TODO: Add pop up to yell at player
                console.log(name + " is not out yet.  They need at least 500 to get out");
            }
        }
    }

    //Remove Selected Player
    selectedPlayer = "";

    //Clean up and close Window
    clearScoreDisplay();
    closeAddScoreWindow();

    //Check if player won the game
    if(parseInt(players[scoringPlayerIndex].totalscore) >= 10000){
        //Player Wins!! Show Game Over Screen
        addWinnerToGameOverScreen(name);
        showGameOverWindow();
    }
                        
}

function addScoreToPlayerList(nameIndex, score){
    console.log("addScoreToPlayerList: " + score);
     players[i].scoreHistory.push(score);

    //Add Score to score list on game table
    let playerScoreListCell = navigateToCell(2,nameIndex);
    let oldHtml = playerScoreListCell.html();
    if(oldHtml == "-")
    {
        playerScoreListCell.html(score);
    }
    else{
        playerScoreListCell.html(oldHtml + "</br>" + score);
    } 
}