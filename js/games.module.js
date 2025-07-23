export class GamesData {
  constructor() {
    this.data;
  }

  async getData(category= 'mmorpg') {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
