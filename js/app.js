let listButtons = document.getElementsByTagName("button");
console.log(listButtons);

for (let i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener('click', function() {
       // console.log('clicked');
       let buttonText = this.innerHTML;
       makesound(buttonText);
    });
}
// KEYPRESS

document.addEventListener('keypress', function(e) {
    console.log("key pressed");
    let keyPressed = e.key;
    makesound(keyPressed);
});
function makesound(letterClickedOrPressed) {
    switch (letterClickedOrPressed) {
        case "w":
            let tom1 = new Audio('sounds/w.mp3');
            tom1.play();
            
            break;
        
        case "a":
            let tom2 = new Audio('sounds/a.mp3');
            tom2.play();
            
            break;
        case "s":
            let tom3 = new Audio('sounds/s.mp3');
            tom3.play();
            
            break;
        case "d":
            let tom4 = new Audio('sounds/d.mp3');
            tom4.play();
            
            break;
        case "j":
            let tom5 = new Audio('sounds/j.mp3');
            tom5.play();
            
            break;
        case "k":
            let tom6 = new Audio('sounds/k.mp3');
            tom6.play();
            
            break;
        case "l":
            let tom7 = new Audio('sounds/l.mp3');
            tom7.play();
            
            break;
    
        default:
            break;
    }
    buttonAnimation(letterClickedOrPressed);
}



function buttonAnimation(letterClickedOrPressed) {
    let button = document.getElementsByClassName(letterClickedOrPressed)[0];
    button.classList.add("pressed");

    setTimeout(function () {
        button.classList.remove("pressed");
    }, 200);
}