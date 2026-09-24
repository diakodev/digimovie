class search {
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

class languageList {
  constructor() {
    this.languagesMap = {};
    this.gitData();
  }

  async gitData() {
    try {
      const { data: keyAPI } = await axios.get(
        " https://api.themoviedb.org/3/configuration/languages",
      );
      this.languages(keyAPI);

      this.gitArryLanguage(keyAPI);
    } catch (error) {
      console.log(error);
    }
  }

  gitArryLanguage(listsLan) {
    listsLan.forEach((itmes) => {
      this.languagesMap[itmes.iso_639_1] = itmes.english_name;
    });
  }

  languages(value) {
    const selectGener = document.querySelector("#filter-country");
    value.sort((a, b) => a.english_name.localeCompare(b.english_name));
    value.forEach((country) => {
      const elements = document.createElement("option");
      elements.value = country.iso_639_1;
      elements.innerText = country.english_name;

      selectGener.append(elements);
    });
  }
}

class genreList {
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

class getAPI {
  constructor() {
    this.content = document.querySelector(".content");
    this.curentPage = 1;
    this.curentSearchPage = 1;
    this.isLoading = false;
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
    this.gitData();
  }

  async gitData(page = 1) {
    try {
      this.search = true;
      this.isLoading = true;
      App.showLoading();
      const { data: keyAPI } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?page=${page}`,
      );

      this.totalPages = keyAPI.total_pages;
      this.curentPage = page;
      this.showItems = new showItems(keyAPI);
      App.hiddenLoading();
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      App.hiddenLoading();
      App.handleError();
      this.isLoading = false;
    }
  }

  async gitSearchAPI(mach, pageSearch = 1, key = "search") {
    try {
      this.key = key;
      this.mach = mach;
      this.isSerach = true;
      this.isLoading = true;
      App.showLoading();

      let url = "";
      if (key == "search") {
        // console.log(App.this.digimovies.this.search.this.searchWord.value);
        url = `https://api.themoviedb.org/3/discover/movie?page=${pageSearch}&${mach}`;
      } else if (key == "word") {
        url = `https://api.themoviedb.org/3/search/movie?query=${mach}&page=${pageSearch}`;
      }

      const { data: keyAPI } = await axios.get(`${url}`);
      console.log(keyAPI);

      if (keyAPI.results.length === 0) {
        this.content.innerHTML = `
        <div class="no-result">
          <span>No results found.</span>
          <p>Please try another search.</p>
        </div>
      `;
      }
      this.curentSearchPage = pageSearch;
      this.showItems = new showItems(keyAPI);
      this.isLoading = false;
      App.hiddenLoading();
    } catch (error) {
      App.hiddenLoading();
      this.isLoading = false;
    }
  }

  async handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      clientHeight + scrollTop >= scrollHeight - 1 &&
      !this.isLoading &&
      this.curentPage <= this.totalPages
    ) {
      this.isLoading = true;
      if (this.isSerach && this.curentSearchPage <= this.totalPages) {
        await this.gitSearchAPI(this.mach, this.curentSearchPage + 1, this.key);
      } else {
        await this.gitData(this.curentPage + 1);
      }
    }
  }
}

class showItems {
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

class changeTheme {
  constructor() {
    this.circle = document.querySelector(".header__item-circle");
    this.themes();
    this.getLocalStorage();
  }

  themes() {
    const itmes = document.querySelectorAll(".header__item");
    itmes.forEach((item) => {
      item.addEventListener("click", () => {
        const styles = item.getAttribute("data-right");
        this.circle.style.right = styles;
        document.body.classList.toggle("light-mode");
        localStorage.setItem(
          "theme",
          document.body.classList.contains("light-mode") ? "light" : "dark",
        );
      });
    });
  }

  getLocalStorage() {
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme) {
      document.body.classList.add(saveTheme + "-mode");

      this.circle.style.right = saveTheme === "light" ? "-50%" : "50%";
    }
  }
}

class digimovies {
  constructor() {
    this.search = new search();
    this.getAPI = new getAPI();
    this.changeTheme = new changeTheme();
  }
}

class App {
  static init() {
    axios.defaults.headers.common["accept"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2ZkYzRiYWYxNDg0OGJhZWM0YTJlZDhhZmNjNjM3OSIsIm5iZiI6MTcxOTIyMzI1NS42OTIyOTQsInN1YiI6IjY2NmQzNjI3MzFjMWI5ODhlMmM2ZWNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtylcLXhbhXLshQeCyWoNqnv-TCaqsy3D9i0VmCZf0I";
    this.digimovies = new digimovies();
  }

  static showLoading() {
    this.loadingContainer = document.querySelector(".loading-container");
    this.loadingContainer.style.display = "flex";
  }

  static hiddenLoading() {
    this.loadingContainer = document.querySelector(".loading-container");
    this.loadingContainer.style.display = "none";
  }

  static handleError() {
    const showError = document.querySelector(".handle-error");
    showError.style.display = "flex";
  }
}

App.init();
