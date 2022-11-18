
let btn = document.createElement("button");
btn.innerHTML = " Start Game ";
btn.onclick = function (){

    // ******************************************** NAME ********************************************

const UserNameDetective = prompt("Please enter the name of your detective.")
alert("Hello detective " +UserNameDetective+ "!");
alert("Your objective is to catch the murder and find the eco chip.");
alert("Starting story...");

// *** Red 1 (Start) ***
const RedOne = prompt("PROFESSER MUMM IS DEAD!!!'' Yells the Pizza Guy. You examin the dead body and see that the cause of death was a poison dart. Should you... (a) Investigate the trap. (b) Go to the Professor Mumm's Office. (c) Go investigate outside.")

    // *** Red 2 ***
    if(RedOne === "a"){
        const RedTwo = prompt("You examine the trap and see that it is covered in flour. You go to the kitchen because that is the only place that has flour. You go into the pantry looking for the flour thinking that is a good place to start. When you walk in, your nose is attacked by a horrible smell. Should you... (a) Look through spices. (b) Look through cooking liquids.") 
    
        // *** Red 5 ***
        if(RedTwo === "a"){
        alert =("You fratically go through the spices. But you knock down some spices and they shatter on the ground. The overwelming smell of spices and the bad smell causes you to passout. You sufficate from the overwelming smells.")
        alert =("Bad Smell Ending. This is ending 3 out of 10. Who knew that a bad smell could kill you? I guess the more you know.")
        }
   
            // *** Red 6 ***
            // *** Red 7 ***
        else if(RedTwo === "b"){
            const RedSeven = prompt("You find a weird glowing one that also is the sorce of the bad smell. You put a lid on it. There is only one place that would have something like this. You walk into the Office. You look on Professor Mumm's desk and see a white furby You can see the glowing eyes of it from where you are standing. There is also a box of Italian Four Cheese Cheese It's. That so happends to be your favorite flavor of Cheese it's. Should you... (a) Look for the weird liqid amungst the many shelves of stuff. (b) Eat the Cheese it's. (c) Investigate the furby.")
        
            // *** Red 8 ***
            if(RedSeven === "a"){
                const RedEight = prompt("After a long time of searching carefully through the viles. You find the matching liquid. You read the lable and it's a poison. On the lable it says, ONLY ACTIVE FOR AN HOUR UPONE EXPOSUE TO AIR. There are only two people who knew the exact time that Professor Mumm was going to arrive. Other than yourself. Who should you talk too? (a)Cheese it Merchant. (b) Party Planner.")
            
                // *** Red 11 ***
                if(RedEight === "a"){
                    alert("You walk down the hall going to the Lobby to try and find the Cheese it Murchant. You see a suspicously opened closet. You walk towards it and trip and fall into it. It's pich black. YOu look up and get jumpscared by a Furby. You have a heart attack and die.")
                    alert("Furby Ending. This is ending 6 out of 10. If they can the bravest of men. They can certainly kill you.")
                }

                // *** Red 12 ***
                else if(RedEight === "b"){
                    const RedTwelve = prompt("You walk to the Lobby where the Party Planner is. You talk to him and he says that he and the Cheese It Murchant were in the kitchen trying to make desert cheese it's during the time it would have taken the murder to set up the trap. Should you... (a) Look around in closets to see if the murder is hiding in one of them. (b) Look in Professor Mumm's Office again.")
                
                    // *** Red 16 ***
                    if(RedTwelve === "a"){
                        alert("You start going through the closests and eventually you find one that has a teddy bear on a stool with a note attached. You walk in and pick up the bear. Only to realize that there was nothing on the note. You hear a weird hissing befire you blow up.")
                        alert("Huggy Teddy Ending. This is ending 7 out of 10. I guess you ran out of time to think of what to do. But the bear was cute though.")
                    }

                    // *** Red 17 ***
                    else if(RedTwelve === "b"){
                        const RedSeventeen = prompt("You go back to Professor Mumm's office. You look on his desk and see papers. One is a ripped out page of a cook book. The other is a note. Which should you investigate? (a) Cook book page. (b) Go back and ask the Party Planner more questions. (c) Note.")
                    
                        // *** Red 23 ***
                        if(RedSeventeen === "a"){
                            alert("You look at the cook book page. It's a resipy for ice cream. You go to the kitchen and into the freezer. You fall through a trap door and it closes above you. You feel water start to flood into the space you're in. How would the murder know that you would go here? How would the murder know when Professor Mumm would arive at the party. Only you, the Party Planner, and the Cheese it Murchant would know. Could it be the Pizza Guy? No he was the one who found the body.")
                            alert("As the water rises relization hits you. You know who the murder is... It's the absoloot last person you would have expected. It's... You passout from lack of oxygen and you drown.")
                            alert("Bad Ending. This is one of the three main endings. Ending 8 out of 10. Kind of sucks that it didn't tell you who the murderer is.")
                        }

                        // *** Red 24 ***
                        else if(RedSeventeen === "b"){
                            alert("You go back to the Lobby. But trip on a rug and hit your head and die.")
                            alert("No Backies Ending. This is ending 5 out of 10. No going back. The only way is forward. Also tripping over a rug is a sad way to go.")
                        }

                        // *** Red 25 ***
                        else if(RedSeventeen === "c"){
                            alert("You read the note and instantly know who it is. You pick up the phone and call the polies.")
                            alert("You walk to the Lobby and the poliese are already there. Along with every one. The Party Planner, Cheese it Murchant, The Furby, and Professor Mumm, still dead on the ground. Did you catch the Murderer, Detective " +UserNameDetective+ "? The Police Cheef asks. You nod and hold out your hands for them to arrest you. You figured it out by how the hand writing is on the note. You write in a spacific way and no one else does. Also Only YOU and two other people knew when the Professor would arrive. So that leaves only you.")
                            alert("You are placed in your jail cell happy that you caught the murder. You must have some split personality disorder or something. You look around you cell and see a Furby.")
                            alert("Good Ending. This is one of the three main endings. Ending 10 out of 10. Didn't see that coming? Also I wonder why there is a Furby in your cell? Well congrats on solving the murder.")
                        }

                    }
                }
            }

            // *** Red 9 ***
            else if(RedSeven === "b"){
                alert("You start eating the Cheese it's. You eat about half when you drop dead.")
                alert("Cheese it Tragity Ending. This is ending 4 out of 10. It's rude to eat Cheese it's that aren't yours. But I guess you died happy. ") 
            }

            // *** Red 10 ***
            else if(RedSeven === "c"){
                const RedTen = prompt("You pick of the Furby and set it down because it creeps you out. You see there was a note under it and you read it. There is a map of the house on the back with two rooms circled. What should you do? (a) Go to circle one. (b) Go to circle two. ")
            
                // *** Red 13 ***
                if(RedTen === "a"){
                    alert("You go to the first room circled. It leads to a closet in the Library. You go inside and see a Teddy Bear with a note attached. You grab the bear and your hands are stuck to it. The note says Gotcha! And then you explode.")
                    alert("Huggy Teddy Ending. This is ending 7 out of 10. I guess you ran out of time to think of what to do. But the bear was cute though.")
                }

                // *** Red 15 ***
                else if(RedTen === "b"){
                    const RedFifteen = prompt("You go to the second room circled. It leads you to a random closet. You open the door and get scared by the Furby that is sitting on a stool in the middle of the room. You see that there is a note under it. On the nate it says that the eco chip is in this location. When the other leads back to the Office and doesn't say why. Where should you go? (a) Eco chip. (b) Office.")

                        // *** Red 21 ***
                        if(RedFifteen === "a"){
                            alert("You go to where it says the eco chip is. It leads you to the Library. The note says to take down a certain book. You open it and out falls the eco chip. For most of the investigations you weren't really looking for the eco chip. But for the murder.")
                            alert("Meh Ending. This is one of the three main endings. this is ending 9 out of 10. You found the eco chip. But not the murder. Any guesses on who?")
                        }

                        // Red 22
                        else if(RedFifteen === "b"){
                            alert("You back to the Office again. The Furby is back on the deck with another note under it. You carefully grab it from under the Furby.")
                            alert("You read the note and instantly know who it is. You pick up the phone and call the polies.")
                            alert("You walk to the Lobby and the poliese are already there. Along with every one. The Party Planner, Cheese it Murchant, The Furby, and Professor Mumm, still dead on the ground. Did you catch the Murderer, Detective " +UserNameDetective+ "? The Police Cheef asks. You nod and hold out your hands for them to arrest you. You figured it out by how the hand writing is on the note. You write in a spacific way and no one else does. Also Only YOU and two other people knew when the Professor would arrive. So that leaves only you.")
                            alert("You are placed in your jail cell happy that you caught the murder. You must have some split personality disorder or something. You look around you cell and see a Furby.")
                            alert("Good Ending. This is one of the three main endings. Ending 10 out of 10. Didn't see that coming? Also I wonder why there is a Furby in your cell? Well congrats on solving the murder.")
                        }
                }
            }
        }
    }

    // *** Red 3 ***
    else if(RedOne === "b"){
        alert("You start to run towards Professor Mumm's office. But you trip over his dead body and hit your head and die.")
        alert("Clumsy Smerf Ending. This is ending 1 out of 10. You just started playing and you already died? I guess you're clumsy. Your clumsyness probably would've gotten you at some point if it hadn't here.")
    }

    // *** Red 4 ***
    else if(RedOne === "c"){
        alert("You turn around to go outside. You slip on the doormatt and fall down the stairs and die.")
        alert("Slippery Steps Ending. This is ending 2 out of 10. If you haven't gotten ending 1. Also you suck at walking. Are you blind?")
    }
}
document.body.appendChild(btn);