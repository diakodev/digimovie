 import { App } from "../App.js";
export class search {
  constructor() {
    this.searchWord = document.querySelector(".header__search ");
    this.btn = document.querySelector("#filter-btn");
    this.timeOut = 0;
    this.selectActive();
    this.handelFilterSearch();
  }

  handelFilterSearch() {
    this.btn.addEventListener("click", this.gitFilter.bind(this));
    this.searchWord.addEventListener("keyup", this.debounceKeyWord.bind(this));
  }

  debounceKeyWord() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }

    this.timeOut = setTimeout(this.inputSearch.bind(this), 2000);
  }

  async inputSearch() {
    let keyWords = this.searchWord.value;
    if (keyWords === "") {
      this.gitFilter();
      return;
    }
    App.digimovies.getAPI.content.innerHTML = "";
    App.digimovies.getAPI.gitSearchAPI(keyWords, undefined, "word");
  }

  gitFilter() {
    const filterPostType = document.querySelector("#filter-postType").value;
    const crews = document.querySelector("#crews").value;
    const actors = document.querySelector("#actors").value;
    const filterAge = document.querySelector("#filter-age").value;
    const filterCountry = document.querySelector("#filter-country").value;
    const selectGener = document.querySelector("#select-gener").value;
    const filterSort = document.querySelector("#filter-sort").value;
    const minYear = document.querySelector("#min-year").value;
    const maxYear = document.querySelector("#max-year").value;
    const minValue = document.querySelector("#min-value").value;
    const maxValue = document.querySelector("#max-value").value;
    this.gitData(
      filterPostType,
      crews,
      actors,
      filterAge,
      filterCountry,
      selectGener,
      filterSort,
      minYear,
      maxYear,
      minValue,
      maxValue,
    );
  }

  async gitData(
    filterPostType,
    crews,
    actors,
    filterAge,
    filterCountry,
    selectGener,
    filterSort,
    minYear,
    maxYear,
    minValue,
    maxValue,
  ) {
    const primes = [
      {
        names: "include_adult",
        value: filterAge,
      },
      {
        names: "include_video",
        value: filterPostType,
      },
      {
        names: "with_original_language",
        value: filterCountry,
      },

      {
        names: "with_genres",
        value: selectGener,
      },
      {
        names: "sort_by",
        value: filterSort,
      },
      {
        names: "with_crew",
        value: crews,
      },
      {
        names: "with_cast",
        value: actors,
      },
      {
        names: "primary_release_date.gte",
        value: `${minYear}-01-01`,
      },
      {
        names: "primary_release_date.lte",
        value: `${maxYear}-12-31`,
      },
      {
        names: "vote_average.gte",
        value: minValue,
      },
      {
        names: "vote_average.lte",
        value: maxValue,
      },
    ];

    const mapFilter = primes.map((itmes) => {
      return `${itmes.names}=${itmes.value}`;
    });

    const mach = mapFilter.join("&");
    App.digimovies.getAPI.content.innerHTML = "";
    App.digimovies.getAPI.gitSearchAPI(mach, undefined, "search");
  }

  selectActive() {
    const elements = document.querySelectorAll(".filter__post");
    const inputfilter = document.querySelector("#filter-postType");
    elements.forEach((event) => {
      event.addEventListener("click", () => {
        elements.forEach((a) => a.classList.remove("active"));
        event.classList.add("active");
        inputfilter.value = event.dataset.posttype;
      });
    });
  }
}