export class GameDetails {
  constructor() {
    this.data;
  }

  async getDetails(id) {
    const url =
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b528e445d8mshebfc6d87288ab6ep162738jsn72862d30230f",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    this.data = await response.json();
  }
}
