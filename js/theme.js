const colorThemesContainer = document.querySelector("#colorContainer");

colorThemesContainer.addEventListener("click", (e) => {
    const targetElement = e.target;
    const navBar = document.querySelector("nav");
    const body = document.querySelector("body");
    const aboutElements = document.querySelectorAll(".about");
    const projectButtons = document.querySelectorAll(".projectBtn");
    const mainContainer = document.querySelector("#main-container");
    const educationCards = document.querySelectorAll(".educationItem");
    const otherCoursesCards = document.querySelectorAll(".otherCoursesItem");
    const projectCards = document.querySelectorAll(".projectItem");

    const themes = {
        blackTheme: {
            navBarBg: "#363434",
            bodyBg: "#000",
            aboutBg: "#000",
            projectBtnBg: "#000",
            mainContainerBg: "#363434",
            mainContainerColor: "#fff",
            cardBg: "#FFF",
            cardColor: "#000"
        },
        blueTheme: {
            navBarBg: "#5086c1",
            bodyBg: "#e5e5e6",
            aboutBg: "#c18b50",
            projectBtnBg: "#c18b50",
            mainContainerBg: "#fff",
            mainContainerColor: "#000",
            cardBg: "#fff",
            cardColor: "#000"
        }
    };

    const applyTheme = (theme) => {
        navBar.style.backgroundColor = theme.navBarBg;
        body.style.backgroundColor = theme.bodyBg;
        
        aboutElements.forEach(about => {
            about.style.backgroundColor = theme.aboutBg;
        });
        projectButtons.forEach(projectBtn => {
            projectBtn.style.backgroundColor = theme.projectBtnBg;
        });

        mainContainer.style.backgroundColor = theme.mainContainerBg;
        mainContainer.style.color = theme.mainContainerColor;

        educationCards.forEach(card => {
            card.style.backgroundColor = theme.cardBg;
            card.style.color = theme.cardColor;
        });

        otherCoursesCards.forEach(card => {
            card.style.backgroundColor = theme.cardBg;
            card.style.color = theme.cardColor;
        });

        projectCards.forEach(card => {
            card.style.backgroundColor = theme.cardBg;
            card.style.color = theme.cardColor;
        });
    };

    if (themes[targetElement.id]) {
        applyTheme(themes[targetElement.id]);
    }
});
