import { App } from "../App.js";
import {showItems} from "./showItems.js"

export class getAPI {
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