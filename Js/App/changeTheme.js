

export class changeTheme {
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