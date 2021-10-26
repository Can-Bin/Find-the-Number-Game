// let userNumber = document.getElementById("number").value
// var congrat = document.getElementById("congrat");
// var attempt = document.getElementById("attempt");

var num = Math.floor(Math.random() * 100 + 1);
let guess = 0;

document.getElementById("check").onclick = function findNumber(){

let userNumber = document.getElementById("number").value;
if(userNumber < 1 || userNumber > 100){
    document.getElementById("congrat").innerHTML = "Please Enter a number between 1 and 100"
}

else{
    if(userNumber == num){
        document.getElementById("congrat").innerHTML = "Congratulations !!"
        document.getElementById("attempt").innerHTML = "Number of attempt is " + guess
        
    }
    
    else if(userNumber > num){
        document.getElementById("congrat").innerHTML = "Please try smaller number"
        guess+=1;
        document.getElementById("attempt").innerHTML = `Number of attempt is ${guess} `

    }
    
    else{
        document.getElementById("congrat").innerHTML = "Please try greater number"
        guess+=1;
        document.getElementById("attempt").innerHTML = `Number of attempt is ${guess} `
    }

    
}



}
