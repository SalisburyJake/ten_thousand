let gameTable;          //Game Table
let playerRow;          //Row where Player Names are Stored
let playerScore;        //Row Where Scores are kept
let playerScoreList;
let players = [];
let selectedPlayer = '';

$.ajaxSetup({ cache: false });

$(document).ready(function () {
    //Set Global Variables (check if this should be up top when we actually init global vars)  
    gameTable = $('#10000Table');
    playerRow = gameTable.find('#player_name_row');
    playerScore = gameTable.find('#player_score_row');
    playerScoreList = gameTable.find('#player_score_list_row');

    //Hide help description
    $("#helpDescription").hide();

    //Add popup windows
    $(".newGameWindow").load('html/newgamewindow.html');
    $(".addScoreWindow").load('html/addscorewindow.html');
    $(".gameOverWindow").load('html/gameoverwindow.html');
    
    //Events
    //TODO: Add event to close out of popup when clicked away from popup
    document.querySelector('#nameform')?.addEventListener('submit', e => {
        e.preventDefault();
        alert(e.currentTarget.myText.value);
      });

    // Load cookie if it exists
    const playersCookie = getCookie('players');
    if (playersCookie) {
        cookie_players = JSON.parse(playersCookie);
        console.log('Loaded players from cookie:', cookie_players);
        // Use the loaded players array as needed
        for (let i = 0; i < cookie_players.length; i++) {
            loadPlayer(cookie_players[i].name, cookie_players[i].htmlName, cookie_players[i].totalscore, cookie_players[i].scoreHistory);
        }
    }
    else{
        //Testing Only.  Remove later
        //testGameTable();
        startNewGame();
        
    }
});

//Run when the new game button is pressed
function startNewGame() { 
    //Show new game window
    showNewGameWindow();
};

//Run when the new game button is pressed
function loadPlayer(f_name, f_htmlName, f_totalScore, f_scoreHistory) { 
    //Add player to object array and set score to zero    
    let player = {name:"", htmlName:"", totalscore:0, scoreHistory:[]};
    player.name = f_name;
    player.htmlName = f_htmlName;
    player.totalscore = f_totalScore;
    player.scoreHistory = f_scoreHistory;
    players.push(player);

    //Add Player to Game Table
    playerRow.append('<td id='+ player.htmlName +'>' + player.name + '</td>');
    playerScore.append('<td>' + player.totalscore + '</td>');
    playerScoreList.append('<td>-</td>');
    for(let i=0; i<f_scoreHistory.length; i++){
        index = findPlayerIndexByName(player.name);
        //Add Score to score list on game table
        let playerScoreListCell = navigateToCell(2,index);
        let oldHtml = playerScoreListCell.html();
        if(oldHtml == "-" || oldHtml == "" || oldHtml == null)
        {
            playerScoreListCell.html(f_scoreHistory[i]);
        }
        else{
            playerScoreListCell.html(oldHtml + "</br>" + f_scoreHistory[i]);
        } 
    }

    //Add Event to allow you to add a score when button is clicked
    $('#' + player.htmlName).click(function() {showAddScoreWindow(player.name)});
    
    //Show Help Description
    $("#helpDescription").show();
};

//When starting a new game, clear the old game board
function clearGameTable() {
    $("#10000Table td").remove();
}

//Remove later
function testGameTable(){
    //Add names to the 10000 table
    let playerNames = ["Player1", "Player2", "Player3", "Player4", "Player2", "Player3", "Player4", "Player2", "Player3", "Player4"];
    //let numPlayers = count(playerNames);
    for(let i=0; i<count(playerNames); i++)
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
        let player = {name:"", htmlName:"", totalscore:0, scoreHistory:[]};
        player.name = name;
        player.htmlName = name.replace(/\s+/g, '_');
        players.push(player);

        //Add Player to Game Table
        playerRow.append('<td id='+ player.htmlName +'>' + player.name + '</td>');
        playerScore.append('<td>' + player.totalscore + '</td>');
        playerScoreList.append('<td>-</td>');

        //Add Event to allow you to add a score when button is clicked
        $('#' + player.htmlName).click(function() {showAddScoreWindow(player.name)});
    }
    setArrayCookie("players", players, 1);
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
            //Score must be > 50 and in multiples of 50  
            if(score_int % 50 === 0)
            {
                //Score must be > 500 to get out OR player score must be > 500 already
                if((score_int >= 500) || (parseInt(players[i].totalscore) >= 500) ){
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
                    Swal.fire({
                        icon: 'warning',
                        title: 'Not Out Yet',
                        text: name + ' is not out yet. You need at least 500 to get out',
                    });
                    console.log(name + " is not out yet.  You need at least 500 to get out");
                }
            }
            else{
                //TODO: Add pop up to yell at player
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something doesn\'t seem right. The score you input is not possible',
                });
                console.log("Something doesn't seem right.  The score you input is not possible");
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
        $("#helpDescription").hide();
    }

    setArrayCookie("players", players, 1);                    
}

function addScoreToPlayerList(nameIndex, score){
    console.log("addScoreToPlayerList: " + score);
     players[nameIndex].scoreHistory.push(score);

    //Add Score to score list on game table
    let playerScoreListCell = navigateToCell(2,nameIndex);
    let oldHtml = playerScoreListCell.html();
    if(oldHtml == "-" || oldHtml == "")
    {
        playerScoreListCell.html(score);
    }
    else{
        playerScoreListCell.html(oldHtml + "</br>" + score);
    } 
}

function submitScore(event, selectedPlayer, score) {
    console.log("submitScore");
    if (event.key == "Enter") {
        // do something
        addScore(selectedPlayer, score);
    }
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function setArrayCookie(name, array, days) {
    const jsonString = JSON.stringify(array);
    setCookie(name, jsonString, days);
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function getArrayCookie(name) {
    const jsonString = getCookie(name);
    return jsonString ? JSON.parse(jsonString) : null;
}

function findPlayerIndexByName(name) {
    return players.findIndex(player => player.name === name);
}