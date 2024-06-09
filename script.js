var defaultTitle = "DevLinks - Henrique Souza"

function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const isLightMode = html.classList.contains("light")

  if (isLightMode) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Profile image light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Profile image")
  }

  localStorage.setItem("isLightMode", isLightMode)
}

document.addEventListener("DOMContentLoaded", function () {
  var deviceLanguage = getDeviceLanguage()
  if (!deviceLanguage.includes("pt-")) loadTranslations("en-US")

  if (localStorage.getItem("isLightMode") === "true") {
    const html = document.documentElement
    html.classList.add("light")
  }
})

function getDeviceLanguage() {
  return navigator.language
}

function loadTranslations(language) {
  fetch("translations.json")
    .then((response) => response.json())
    .then((data) => {
      const translations = data[language]
      const aboutMeElement = document.getElementById("about_me")
      const viewPortfolioElement = document.getElementById("view_portfolio")
      const madeByElement = document.getElementById("made_by")
      const aboutMeTextElement = document.getElementById("about_me_text")

      if (aboutMeElement) aboutMeElement.textContent = translations.about_me

      if (viewPortfolioElement)
        viewPortfolioElement.textContent = translations.view_portfolio

      if (madeByElement) madeByElement.textContent = translations.made_by

      if (aboutMeTextElement)
        aboutMeTextElement.textContent = translations.about_me_text
    })
    .catch((error) => console.error("Error loading translations:", error))
}
