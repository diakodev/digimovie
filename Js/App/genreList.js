
export class genreList {
  constructor() {
    this.genresMap = {};
    this.dataPromise = this.gitData();
  }

  async gitData() {
    try {
      const { data: keyAPI } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
      );

      this.genres(keyAPI.genres);
      this.genresLists(keyAPI.genres);
    } catch (error) {
      console.error(error);
    }
  }
  genres(value) {
    const selectGener = document.querySelector("#select-gener");
    value.forEach((names) => {
      const elements = document.createElement("option");
      elements.value = names.id;
      elements.innerText = names.name;
      selectGener.append(elements);
    });
  }

  genresLists(list) {
    list.forEach((genreId) => {
      this.genresMap[genreId.id] = genreId.name;
    });
  }
}