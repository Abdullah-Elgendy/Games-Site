export class GamesList {
  displayList(games) {
    let container = "";
    //iterate over each game that we retrieved from the API
    //and create a card that contains game data and add it to container.
    games.forEach((game) => {
      container += `<div data-id="${
        game.id
      }" class="game-card col-md-6 col-lg-3">
                        <div class="card bg-primary h-100">
                            <img src="${
                              game.thumbnail
                            }" class="card-img-top" alt="...">
                            <div class="card-body d-flex flex-column flex-wrap justify-content-between">
                                <div class="game-title mb-3 d-flex flex-row justify-content-between align-items-center">
                                    <h5 class="card-title m-0">${
                                      game.title
                                    }</h5>
                                    <span class="badge bg-secondary">Free</span>
                                </div>
                                <p class="card-text text-center">
                                    ${game.short_description
                                      .split(" ")
                                      .slice(0, 10)
                                      .join(" ")}
                                </p>
                                <div class="card-footer p-0 pt-2 text-white d-flex flex-row flex-wrap justify-content-between">
                                    <span class="badge rounded-pill bg-secondary">${
                                      game.genre
                                    }</span>
                                    <span class="badge rounded-pill bg-secondary">${
                                      game.platform
                                    }</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });

    //display the cards that we added in container
    let gamesList = document.querySelector("#gamesList");
    gamesList.innerHTML = container;
  }

  displayDetails(game) {
    let mainUI = document.querySelector("#mainUI");
    let detailsUI = document.querySelector("#detailsUI");
    let closeBtn = document.querySelector(".fa-xmark");

    mainUI.classList.add("d-none");
    detailsUI.classList.remove("d-none");

    closeBtn.addEventListener("click", () => {
      mainUI.classList.remove("d-none");
      detailsUI.classList.add("d-none");
    });

    document.querySelector("#detailsCard").innerHTML = `  
                <div class="col-md-3">
                    <div class="inner d-flex flex-column">
                        <img class="w-100" src="${game.thumbnail}" alt="game thumbnail">
                        <a class="btn btn-outline-warning rounded-1 rounded-top-0" target="_blank" href="${game.game_url}">Show Game</a>
                    </div>
                </div>
                <div class="col-md-9">
                    <h2>Title: ${game.title}</h2>
                    <p>Category: <span class="badge rounded-pill bg-secondary">${game.genre}</span></p>
                    <p>Platform: <span class="badge rounded-pill bg-secondary">${game.platform}</span></p>
                    <p>Status: <span class="badge rounded-pill bg-secondary">${game.status}</span></p>
                    <p>${game.description}</p>
                </div>`;
  }
}
