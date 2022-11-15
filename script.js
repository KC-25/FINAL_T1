console.log("Hello World.");

let btn = document.createElement("button");
btn.innerHTML = " Start Game ";
btn.onclick = function () {

    // ****************************** NAME and/or SWITCH STORIES ******************************

    const SecretWord = prompt("Please enter secret word to switch stories. If you do not know. Put anything in.");

    if (SecretWord === "SECRETSTORY"){

        alert("WARNING! If you haven't played normal mode, please refresh and play that. It isn't recomended you play secret story mode, unless you have already played normal story mode first.");
        alert("Secret story mode.");
        const UserNameMurder = prompt("Please enter the name of your murder.");
        alert("Hello detective " +UserNameMurder+ "!");
        alert("Your objective is to kill everyone. (Ammount of kills in total is 7)");
        alert("Starting story...");
    
        // ****************************** START OF MURDER STORY ******************************


        // ****************************** CHOICE SET 1 (Murder) ******************************

    }

        else {
        alert("Normal story mode.")
        const UserNameDetective = prompt("Please enter the name of your detective.")
        alert("Hello detective " +UserNameDetective+ "!");
        alert("Your objective is to catch the murder and find the eco chip.");
        alert("Starting story...");
        }
        
        // ****************************** START OF DETECTIVE STORY ******************************

        // ****************************** CHOICE SET 1 (Detective) ******************************

        alert("You walk into the mansion where the cyber equinox party is being held. You open the big double doors.");
        alert("''PROFESSOR MUMM IS DEAD!!!'' Yells the Pizza Guy. Professor Mumm's dead body layes a couple of feet in front of where you stand at the doors. You were right to assume that the Professor would be the next target. But you should have done something that might have prevented this from happaning.");
        let CS1D = prompt("''You examine the dead body and see that the Professor was killed by a poisoned dart. You look around and you see a dart trap that the Professor must have triggered when he came in. (a)Investigate the trap. (b)Go to the Professor's office. (c)Ask the people around questions. (d)Go investigate outside.");
    
    if(CS1D === "a"){
        alert("You go over to where the dart trap is set up. Under close examination. You see that there is bread flour on it. The only place that has flour would be the kitchin. You run to the kitchin to see if there are clues there.");
        alert("You walk into the kitchin. The kitchen is filled with the smell of pizza. You start looking around.")
        alert("You start looking around and you walk into the pantry. You gag at the revolting smell. You start looking for the sorce of the revolting smell.")
         
        // ****************************** CHOICE SET 2 (Detective) ******************************

        let CS2D = prompt("The longer you stay in the room the worse the smell gets. What should you do? (a) Look through the spices. (b) Look through the cooking liquids.")

        // ******************************  ENDING 2 (Detective) ******************************

        if(CS2D === "a"){
            alert("You fratically go through the spices. But you knock some down and they shatter on the ground. The overwelming smell of spices and the horrible smell make you sufficate. You first passout before you die from lack of oxygen.")
            alert("Wrong Mixes Ending.                                                                         Ending 2 out of 20. Who knew that a bad smell could kill you. I guess the more you know.")
        }

        else if(CS2D === "b"){
            alert("You take one glance at the liquids and see a weird glowing one. You grab it and see that the lid isn't on it. Also strong waves of the revolting smell go through your nose. You take the top off of one of the cooking liquids and put it on the glowing one. You walk out of the pantry and take big gulps of fresh air.")
       
            // ****************************** CHOICE SET 3 (Detective) ******************************

        let CS3D = prompt("YOu look at the glowing substance in the bottle. There is only one place where something like this could have came from. Professor Mumm's office. Should you... (a) Go to Professor Mumm's office. (b) Continue looking in the kitchin.")

        if (CS3D === "a") {
            alert("You run to Professor Mumm's office. Once you get in there you see shelves filled with all sorts of things. You see glowing things, moving things, chunky things, all sorts of odds and whatnots.")
            
            // ****************************** CHOICE SET 4 (Detective) ******************************
        let CS4D = prompt("You look on Professor Mumm's desk and see a white furby You can see the glowing eyes of it from where you are standing. There is also a box of Italian Four Cheese Cheese It's. That so happends to be your favorite flavor of Cheese it's. Should you... (a) Look for the weird liqid amungst the many shelves of stuff. (b) Investigate the furby. (c) Eat the Cheese it's.")
        
        if(CS4D === "a"){
            alert("You look carefully look through the viles and containers of things on the shelves. In hope that there is a copy of what you had found in the kitchin pantry.")
            alert("After a long time of searching. You find the matching liquid. You read the lable and it's a poison. On the lable it says, ''ONLY ACTIVE FOR AN HOUR UPONE EXPOSUE TO AIR''")
        
            // ****************************** CHOICE SET 5 (Detective) ******************************

            let CS5D = prompt("That means that the trap was set up about an hour before Professor Mumm's arival to the party. You try to think of who would know exactly when the Professor would come to the party. You can only think of two people who would have known. Who should you ask? (a)Cheese it Murchant. (b)Jr. ")
            if(CS5D === "a"){
            // ******************************  ENDING 4 (Detective) ******************************
                alert("You start looking for the Cheese it Murchant and find him at the crime sean. Before you're able to talk to him he starts walking away. You fallow him and he arrives at the library. He looks around as if he's hiding something. He pulls a book and a secret door opens. He goes into it and it closes behind him.")
                alert("You start grabbing books trying to find the one that opened the secret entrance and eventually you do. The passage opens and you go through. You walk down the staries and you arive in a room full to the ceilling with Cheese it's. The Cheese it Murchant is standing in the middle of the room.")
                alert("You start walking towards him. ''")
                alert("Food Poisoning.                                                                         Ending 4 out of 20. It's rude to eat Cheese it's that aren't yours. But I guess you died happy.")
            }
        }
        else if(CS4D === "b"){

        }
        else if(CS4D === "c"){

        // ******************************  ENDING 3 (Detective) ******************************
        alert("You start eating the Cheese it's. You eat about half when you drop dead.")
        alert("Food Poisoning.                                                                         Ending 3 out of 20. It's rude to eat Cheese it's that aren't yours. But I guess you died happy. ")
        }
    }
        }
    }
   
        // ******************************  ENDING 1 (Detective) ******************************
    else if(CS1D === "b"){
        alert("You run towards Professor Mumm's office. But unaware of you surounding. You trip over his dead body and it your head killing yourself.");
        alert("Clumsy Smurf Ending.                                                                         Ending 1 out of 20. You just started playing and you already died?! I guess you're clumsy. Your clumsyness probably would've gotten you at some point if it hadn't here. ");
    }
    
    else if(CS1D === "c"){

        // ****************************** CHOICE SET 2 (Detective) ******************************

        let CS2D = prompt("More people have arived sense Professor Mumm was murdered. Who should you ask first? (a) Pizza Guy. (b) Cheese it Murchant. (c) Josh. (d) Jr.");
        if(CS2D === "a"){
            alert("You walk over to the Pizza Guy sense he was the one that discovered the body")

        // ****************************** CHOICE SET 3 (Detective) ******************************
        let 

        }
        else if(CS2D === "b"){

        }
        else if(CS2D === "c"){

        }
        else if(CS2D === "d"){

        }
        else{
            alert("You didn't put the correct variable.");
        }
    }
    else if(CS1D === "d"){

            // ****************************** CHOICE SET # (Detective) ******************************

    let CS = prompt("You walk around outide and walk around the house several times. Unable to find anything you go back inside. (a)Investigate the trap. (b)Go to the Professor's office. (c)Ask the people around questions.")
     
    if(CS === ""){

    }

    else{
        alert("You didn't put the correct variable.");
    }

    }
}
document.body.appendChild(btn);