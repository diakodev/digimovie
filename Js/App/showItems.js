
import {languageList} from "./languageList.js"
import { genreList } from "./genreList.js";

export class showItems {
  constructor(items) {
    this.content = document.querySelector(".content");
    this.template = document.querySelector("#movie-list-item");
    this.movie = items.results;
    this.languageList = new languageList();
    this.genreList = new genreList();
    this.init();
  }

  async init() {
    await this.genreList.dataPromise;
    this.showMovie(this.movie);
  }

  showMovie(movies) {
    movies.forEach((key) => {
      const items = document.importNode(this.template.content, true);

      items
        .querySelector("#movie-image")
        .setAttribute(
          "src",
          `https://image.tmdb.org/t/p/w500${key.poster_path}`,
        );

      items.querySelector("#movie-name").innerText = key.title;
      items.querySelector("#movie-rate").innerText =
        key.vote_average.toFixed(1);
      items.querySelector("#movie-vote").innerText = `${key.vote_count}k`;
      items.querySelector("#movie-create").innerText = key.release_date;
      items.querySelector("#movie-rate-user").innerText =
        key.popularity.toFixed(0);
      items.querySelector("#movie-description").innerText = key.overview;
      const genreName = key.genre_ids.map((id) => this.genreList.genresMap[id]);
      items.querySelector("#movie-gener").innerText = genreName.join(" , ");
      const languages = this.languageList.languagesMap[key.original_language];
      items.querySelector("#movie-country").innerText = languages;

      this.content.append(items);
    });
  }
}