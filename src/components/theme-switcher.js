// src/components/theme-switcher.js
import React from "react"

const onThemeToggle = () => {
  // получить тему из data-theme
  const root = document.getElementsByTagName("body")[0]
  const theme = root.getAttribute("data-theme")

  // изменить атрибут
  // если была светлая тема, поставить тёмную и наоборот
  const uiTheme = theme === "dark" ? "light" : "dark"

  try {
    root.setAttribute("data-theme", uiTheme)
    // запомнить выбор
    localStorage.setItem("theme-ui-color-mode", uiTheme)
  } catch (error) {
    return false
  }
}

export default function ThemeSwitcher() {
  return (
    <button onClick={onThemeToggle} type="button">
      Change Theme
    </button>
  )
}
