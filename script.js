console.log("Hello World.");

let btn = document.createElement("button");
btn.innerHTML = " Start Game ";
btn.onclick = function () {

    // ***NAME and/or SWITCH STORIES***

    if(userName != "SECRETSTORY") {
        
        const userName = prompt("Please enter the name of your detective.");
        alert("Hello detective " +userName+ "!")
    };

    if(userName === "SECRETSTORY"){

        alert("Switched to secret story.");
        const UserNameMurder = prompt("Please enter the name of your murder.");
        prompt("Please enter the name of your detective.");
        alert("Hello detective " +UserNameMurder+ "!")
        alert("Your objective is to kill everyone.")

    };

};
document.body.appendChild(btn);