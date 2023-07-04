function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarlight.png", "alt", "foto Nicolas sorrindo de óculos")
  } else {
    img.setAttribute("src", "./assets/Avatar.png", "foto Nicolas sorrindo")
  }
}
