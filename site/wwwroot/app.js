function Testing123() {
    
    var command = $("#CommandLine").val();
    var validCommand = false;
    
    if (command.toLowerCase() === "gather food") {
        document.getElementById("status").innerHTML = "Gathering Food...";
        validCommand = true;        
    }
    
    if (command.toLowerCase() === "gather wood") {
        document.getElementById("status").innerHTML = "Gathering Wood...";
        validCommand = true;
    }
    
    
    
    $("#CommandLine").val("");
    
    if (validCommand === false) {
        document.getElementById("errorMsg").innerHTML = "Invalid command";
    }
    else {
        document.getElementById("errorMsg").innerHTML = "";
    }
    
    
};



