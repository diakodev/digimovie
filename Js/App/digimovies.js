import {search} from "./search.js"
import {getAPI} from "./getAPI.js"
import {changeTheme} from './changeTheme.js'

export class digimovies {
  constructor() {
    this.search = new search();
    this.getAPI = new getAPI();
    this.changeTheme = new changeTheme();
  }
}