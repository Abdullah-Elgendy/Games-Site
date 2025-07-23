import { GamesData } from "./games.module.js";
import { GamesList } from "./UI.module.js";
import { GameDetails } from "./details.js";

let games = new GamesList();
let gamesData = new GamesData();
let gameDetails = new GameDetails();

//function to add event listener to game cards.
function setCards() {
  let gamesCards = document.querySelectorAll(".game-card");
  //iterate over each card and add an event listener to send ID to getDetails() then call displayDetails()
  gamesCards.forEach((gameElem) => {
    gameElem.addEventListener("click", async () => {
      await gameDetails
        .getDetails(gameElem.getAttribute("data-id"))
        .catch((error) => {
          console.log(error);
        });
      games.displayDetails(gameDetails.data);
    });
  });
}

//get games and display at website start, default category is "mmorpg"
await gamesData.getData().catch((error) => {
  console.log(error);
});
games.displayList(gamesData.data);
setCards();

//select navlinks and add event listener to switch active class on clicked link
//and to display games based on category in data-cat
let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", async () => {
    document.querySelector(".active")?.classList.remove("active");
    link.classList.add("active");
    //send category and get data then display
    await gamesData.getData(link.getAttribute("data-cat")).catch((error) => {
      console.log(error);
    });
    games.displayList(gamesData.data);
    setCards();
  });
});

