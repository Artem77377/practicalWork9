  let correct = false;
  let person;
  count = 0;
  do {
    person= prompt("Будь ласка, введіть своє ім'я", "Артем");
    if(person === null || person.trim() ==="" ){
    }
    else correct = true; 
  }
  while(!correct);
  const text = document.getElementById("text");
  text.innerHTML = "Зіграємо, "+ person+ '?';

  let computer = 0;
  let player = 0;
  let playerCard;
  let compCard;
  const score = document.getElementById("score");
  score.innerHTML = "Спроба: 0 з 3";

  const div = document.createElement("container");

  const user = document.getElementById("user");

  const button = document.getElementById("button");

  const comp = document.getElementById("comp");

  user.innerHTML = "Твоя<br>карта:";
  comp.innerHTML = "Карта комп'ютера:";

  score.style.cssText = 'color: red'

  button.onclick = () => calculate();
  function calculate() {
    user.classList.remove("anim");
    comp.classList.remove("anim");
    if(count == 3){
      computer = 0;
      player = 0;
      count = 0;
    }
    playerCard ;
    compCard ;
    setTimeout(() => {
    comp.classList.add("anim");
    user.classList.add("anim");
    }, 10);
switch (Math.floor((Math.random() * 9) + 1)) {
case 1: user.style.cssText = `background-image: url("img/6${Math.floor((Math.random() * 4) + 1)}.png")`; player+=6; playerCard = 6; break;
case 2: user.style.cssText = `background-image: url("img/7${Math.floor((Math.random() * 4) + 1)}.png")`; player+=7;playerCard = 7; break;
case 3: user.style.cssText = `background-image: url("img/8${Math.floor((Math.random() * 4) + 1)}.png")`; player+=8;playerCard = 8; break;
case 4: user.style.cssText = `background-image: url("img/9${Math.floor((Math.random() * 4) + 1)}.png")`; player+=9;playerCard = 9; break;
case 5: user.style.cssText = `background-image: url("img/10${Math.floor((Math.random() * 4) + 1)}.png")`; player+=10; playerCard = 10; break;
case 6: user.style.cssText = `background-image: url("img/J${Math.floor((Math.random() * 4) + 1)}.png")`; player+=2; playerCard = 2; break;
case 7: user.style.cssText = `background-image: url("img/Q${Math.floor((Math.random() * 4) + 1)}.png")`; player+=3; playerCard = 3; break;
case 8: user.style.cssText = `background-image: url("img/K${Math.floor((Math.random() * 4) + 1)}.png")`; player+=4; playerCard = 4; break;
case 9: user.style.cssText = `background-image: url("img/A${Math.floor((Math.random() * 4) + 1)}.png")`; player+=11; playerCard = 11; break;
}

switch (Math.floor((Math.random() * 9) + 1)) {
case 1: comp.style.cssText = `background-image: url("img/6${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 6; compCard = 6; break;
case 2: comp.style.cssText = `background-image: url("img/7${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 7; compCard = 7; break;
case 3: comp.style.cssText = `background-image: url("img/8${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 8; compCard = 8; break;
case 4: comp.style.cssText = `background-image: url("img/9${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 9; compCard = 9; break;
case 5: comp.style.cssText = `background-image: url("img/10${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 10; compCard = 10; break;
case 6: comp.style.cssText = `background-image: url("img/J${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 2; compCard = 2; break;
case 7: comp.style.cssText = `background-image: url("img/Q${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 3; compCard = 3; break;
case 8: comp.style.cssText = `background-image: url("img/K${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 4; compCard = 4; break;
case 9: comp.style.cssText = `background-image: url("img/A${Math.floor((Math.random() * 4) + 1)}.png")`; computer+= 11; compCard = 11; break;
}
    if(playerCard>compCard){
      user.style.backgroundColor = "rgb(144, 238, 144)";
      comp.style.backgroundColor = "rgba(214, 61, 59, 1)";
    }
    else if(playerCard<compCard){
      user.style.backgroundColor = "rgba(214, 61, 59, 1)";
      comp.style.backgroundColor = "rgb(144, 238, 144)";
    } 
    else {
      user.style.backgroundColor = "rgb(255, 213, 128)";
      comp.style.backgroundColor = "rgb(255, 213, 128)";
    }
    count++;
    score.innerHTML = "Спроба "+ count + " з 3<br>Рахунок: "+player+" – "+computer;
    if(count == 3 && computer> player) score.innerHTML += "<br>На жаль, Ви програли(";
    else if(count == 3 && player> computer) score.innerHTML += "<br>Вітаю, Ви перемогли!";
    else if(count ==3 && player == computer) score.innerHTML += "<br>Нічия!";
  }