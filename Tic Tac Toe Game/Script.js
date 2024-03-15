let btnRef = document.querySelectorAll(".Button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// winning pattern 

let winningPattern = [ 
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
  

//player x plays first

let xTurn = true;
let count = 0;

const winChecker = () => {
    for(let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ]  
    }
}
if(element1!= "" && (element2 != "") & (element3 != 
    "")) {
        if ((element1 == element2) == element3) {

        }
    }

/*display x/o on click*/
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;

            element.innerText = "X";
            element.disable = true;
        } else {
            xTurn = true;
            element.innerText = "0";
            element.disable = true;
        }

        count += 1;
        if(count === 9) {
            
        }

    })
})
