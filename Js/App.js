import { digimovies } from "./App/digimovies.js";

export class App {
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
