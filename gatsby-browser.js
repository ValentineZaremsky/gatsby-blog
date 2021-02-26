// gatsby-browser.js
// подключаем глобальные стили
require("./src/assets/styles/base.css")

exports.onClientEntry = () => {
  enableTheme()
}

// Если тема не установлена, применить тему по-умолчанию.
// Если установлена пользователем, сохранить его выбор в localStorage,
// чтобы не заставлять человека выбирать её снова и снова при переходе на другие страницы
function enableTheme() {
  const root = document.getElementsByTagName("body")[0]
  try {
    const uiTheme = localStorage.getItem("theme-ui-color-mode")
    const theme = uiTheme ? uiTheme : "light"
    // выставить data-атрибут темы для элемента body
    root.setAttribute("data-theme", theme)
  } catch (error) {
    console.error('localStorage error', error);
  }
}
