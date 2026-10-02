
export class languageList {
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