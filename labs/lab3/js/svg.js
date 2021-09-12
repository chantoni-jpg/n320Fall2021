//containg game logic
class Game {
  //class properties
  foundCircles = 0;
  totalCircles = 0;
  searchColors = "#99FF00";
  normalColors = "#7700AA";
  gameZone = document.getElementById("gameZone");
  foundBar = new FoundBar();

  constructor() {
    //make the circles
    for (var i = 0; i < 25; i++) {
      let newCircle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      //circle style class
      newCircle.classList.add("gameCircle");
      newCircle.setAttribute("cx", Math.random() * 400);
      newCircle.setAttribute("cy", Math.random() * 400);

      //randomly choose what reveal color the circle is
      if (Math.random() < 0.3) {
        newCircle.dataset.hiddenColor = this.searchColors;
        this.totalCircles++;
      } else {
        newCircle.dataset.hiddenColor = this.normalColors;
      }

      //mouse events
      //on mouse over, show hidden color
      newCircle.addEventListener("mouseover", (event) => {
        event.target.style.fill = event.target.dataset.hiddenColor;
      });
      newCircle.addEventListener("mouseout", (event) => {
        event.target.style.fill = "#000";
      });

      newCircle.addEventListener("click", (event) => {
        //if the user clicked on something with
        if (event.target.dataset.hiddenColor == this.searchColors)
          event.target.remove();
        {
          //stores how many have been clicked on
          this.foundCircles++;
          //update the found UI
          this.foundBar.setPercent(this.foundCircles / this.totalCircles);
        }
      });

      //add circle to screen
      this.gameZone.appendChild(newCircle);
    }
  }
}

class FoundBar {
  element = document.getElementById("foundBar");
  maxSize = 130;
  percent = 0;
  setPercent(percent) {
    this.percent = percent;
    this.element.setAttribute("width", this.percent * this.maxSize);
  }
}

let g = new Game();
