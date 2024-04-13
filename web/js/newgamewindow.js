function showNewGameWindow(){
    console.log("showNewGameWindow");

    //Remove Form Data
    $("#name_form_data").empty();
    
    //Add in form
    fillInNewGameWindow();

    //Show Window
    $(".newGameWindow").show();
}

function closeNewGameWindow(){
    console.log("closeWindow");
    $(".newGameWindow").fadeOut();
}

function addNameInput() {
    console.log("addNameInput");
    const newLine = $('</br>');
    const newInput = $('<input type="text" id="nameInput" placeholder="Enter a name">');
    //Remove the "Remove Entry Button"
    $("#removeEntryButton").remove();
    //Add name input
    $('#name_form_data').append(newInput);
    //Add the "Remove Entry Button"
    $('#name_form_data').append('<button type="button" id="removeEntryButton" onclick="removeLastInput()">Remove Entry</button>');
    //Add New Line
    $('#name_form_data').append(newLine);
}

function startGame() {
    console.log("startGame");
    let playerNames = [];
    let numPlayers = 0;

    //Clear Game Table first
    clearGameTable();

    //Clear Players List
    players = []

    //Get all names
    playerNames = getListOfNamesFromNewGame();
    numPlayers = count(playerNames);
    console.log("playerNames length:" + numPlayers);
    
    for(let i=0; i<numPlayers; i++){
        addPlayer(playerNames[i]);
    }
    
    //Close Window
    closeNewGameWindow();
};

function getListOfNamesFromNewGame(){
    //Get Name Form Inputs
    const nameFormInputs = $('#nameForm :input');
    let names = {};
    let i = 0;  
    //Add names to local 
    nameFormInputs.each(function() {
        names[i] = $(this).val();
        i++;
    });

    return names;
}

function loadFreshNewGameWindow(){
    $(".newGameWindow").load('html/newgamewindow.html');
}

function fillInNewGameWindow(){
    console.log("fillInNewGameWindowWithOldPlayers");
    let oldPlayers = players;
    let numOldPlayers = count(oldPlayers);

    //If game has started before, add populate new game window with previous players
    if(numOldPlayers != 0){
        //Add inputs for the rest
        for(let i=0; i<numOldPlayers; i++){       
            $('#name_form_data').append('<input type="text" id="nameInput" placeholder="Enter a name" value="'+ oldPlayers[i].name + '">');
            $('#name_form_data').append('</br>');
        }
        //Finally, add in button to remove the last form entry
        $("#name_form_data input:last").after('<button type="button" id="removeEntryButton" onclick="removeLastInput()">Remove Entry</button>');
    }
    //Else add a Single input to since this is a brand new game
    else{
        //Add a single blank input
        $('#name_form_data').append('<input type="text" id="nameInputFirst" placeholder="Enter a name">');
    }
    
}

function removeLastInput(){
    //Remove Last Name Entry
    $("#name_form_data input:last").remove();
    //Remove last line break
    $("#name_form_data br:last").remove();
    //Remove the "Remove Entry Button"
    $("#removeEntryButton").remove();

    //Add the "Remove Entry Button" to the last name entry
    //ONLY IF there is more than 1 entry left
    var inputCount = $("#name_form_data input").length;
    if(inputCount > 1){
        $("#name_form_data input:last").after('<button type="button" id="removeEntryButton" onclick="removeLastInput()">Remove Entry</button>');
    }
}