 

 //alien color 3: turn your if-else chain from excersise 25-26 into an if-else chzin
// . write 3 versions of this program, making sure messege is printed for the appropriate color alien.

 let alienColors: string = "green";

 // . if the alien is green, print a messege that the player earned 5 points.
 // . if the alien is yellow, print a messege that the player earned 10 points.
 // . if the alien is red, print a messege that the player earned 15 points.

// version 1 of program
 if(alienColors === "green"){
    console.log("Version 1:  player earned 5 points.");
 }
 else if(alienColors === "yelow"){
    console.log("player earned 10 points.");
 }
else if(alienColors === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right color")
}

// version 2 of the program
alienColors = "yellow";

if(alienColors === "green"){
    console.log("player earned 5 points.");
 }
 else if(alienColors === "yellow"){
    console.log("Version 2:  player earned 10 points.");
 }
else if(alienColors === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right color")
}

// version 3 of the program
alienColors = "red";

if(alienColors === "green"){
    console.log("player earned 5 points.");
 }
 else if(alienColors === "yelow"){
    console.log("player earned 10 points.");
 }
else if(alienColors === "red"){
    console.log("Version 3:  player earned 15 points.");
}
else{
    console.log("please select right color")
}