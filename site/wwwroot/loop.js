(function () {
    
    var status = document.getElementById("status").innerHTML
    
    if (status === "Gathering Food...") {
        var inv = Number(document.getElementById("food").innerHTML);
        inv = inv + 1;
        document.getElementById("food").innerHTML = inv;
    };
    
    if (status === "Gathering Wood...") {
        var inv = Number(document.getElementById("wood").innerHTML);
        inv = inv + 1;
        document.getElementById("wood").innerHTML = inv;
    };
    
    setTimeout(arguments.callee, 3000);
    
})();