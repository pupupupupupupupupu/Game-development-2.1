const boxes = document.getElementsByClassName("box");
const reset = document.getElementById("reset-game");
const player = document.getElementById("player");
const result = document.getElementById("result");
const overlay = document.getElementById("overlay");

let a = new Array(9);

let o = true;

const winCond = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let cc = 0;

for (let i = 0; i < 9; i++) {
  boxes[i].onclick = () => {
    if (a[i] != undefined) {
      alert("Already marked");
      return;
    }
    a[i] = o;
    if (o) {
        boxes[i].innerText = "O";
    } else {
        boxes[i].innerText = "X";
    }
    o=!o;
    cc++;
    defWinner()
  };
}

function defWinner() {
    winCond.forEach((el)=>{
        let n1 = a[el[0]];
        let n2 = a[el[1]];
        let n3 = a[el[2]];
        if (n1 == n2 && n2 == n3 && a[el[0]]!=undefined) {
          end(a[el[1]]?'O':'X')
          return;
        } else if (cc==9){  
            end("draw")
            return;
        }
    })
}

function end(status) {
    if(status=="draw") {
        result.innerText="It's a Draw!"
    } else {
        player.innerText=status;
    }
    overlay.classList.add('active')
}

reset.onclick=()=>{
    window.location.reload()
}