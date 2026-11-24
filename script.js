* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --dark: #101827;
    --blue: #2674e8;
    --light: #f4f7fc;
    --text: #64748b;
    --white: #ffffff;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: var(--white);
    color: var(--dark);
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}

.navbar {
    height: 76px;
    padding: 0 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 2px 15px #00000008;
    position: sticky;
    top: 0;
    z-index: 10;
}

.logo {
    font-size: 25px;
    font-weight: bold;
}

.logo span {
    color: var(--blue);
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-links a {
    font-size: 14px;
    font-weight: bold;
}

.nav-links a:hover {
    color: var(--blue);
}

.lang-btn {
    border: 1px solid var(--blue);
    background: white;
    color: var(--blue);
    padding: 9px 16px;
    border-radius: 7px;
    cursor: pointer;
}

.hero {
    min-height: 570px;
    padding: 80px 9%;
    background: linear-gradient(120deg, #101827, #192f50);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 45px;
}

.hero-content {
    max-width: 570px;
}

.tag {
    color: var(--blue);
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
}

.hero .tag {
    color: #69a8ff;
}

.hero h1 {
    font-size: clamp(32px, 5vw, 49px);
    line-height: 1.35;
    margin: 20px 0;
}

.hero-content p {
    color: #c3cede;
    font-size: 17px;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    padding: 12px 23px;
    border-radius: 7px;
    font-weight: bold;
    transition: .3s;
}

.primary {
    background: var(--blue);
    color: white;
}

.primary:hover {
    background: #155bc2;
}

.secondary {
    border: 1px solid #ffffff70;
    color: white;
}

.hero-card {
    background: #ffffff12;
    border: 1px solid #ffffff25;
    border-radius: 20px;
    padding: 45px 30px;
    width: 300px;
    text-align: center;
}

.tech-icon {
    font-size: 75px;
    color: #68a6ff;
}

.hero-card h2 {
    font-size: 23px;
    margin: 15px 0;
}

.hero-card p {
    color: #b7c7dd;
    font-size: 13px;
}

.status {
    margin-top: 25px;
    color: #67e3ae;
    font-size: 12px;
}

.section {
    padding: 85px 8%;
}

.section-heading {
    text-align: center;
    margin-bottom: 40px;
}

.section-heading h2,
.about h2,
.contact h2 {
    font-size: 32px;
    margin: 10px 0;
}

.section-heading p,
.about p,
.contact p {
    color: var(--text);
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.service-card,
.product-card {
    padding: 28px 22px;
    border: 1px solid #e7edf5;
    border-radius: 13px;
    background: white;
    transition: .3s;
}

.service-card:hover,
.product-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 12px 35px #162b4a12;
}

.card-icon,
.product-icon {
    font-size: 35px;
    margin-bottom: 15px;
}

.service-card h3,
.product-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.service-card p,
.product-card p {
    color: var(--text);
    font-size: 14px;
}

.products {
    background: var(--light);
}

.products .cards {
    grid-template-columns: repeat(3, 1fr);
}

.product-card {
    text-align: center;
}

.product-icon {
    font-size: 55px;
}

.about {
    text-align: center;
    background: #101827;
    color: white;
}

.about p {
    color: #c1cddd;
    max-width: 650px;
    margin: 15px auto;
}

.contact {
    text-align: center;
}

.contact p {
    margin: 12px 0 25px;
}

footer {
    padding: 22px;
    background: #0a1120;
    color: #c1cddd;
    text-align: center;
    font-size: 13px;
}

@media (max-width: 900px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero-buttons {
        justify-content: center;
    }

    .nav-links {
        gap: 12px;
    }
}

@media (max-width: 600px) {
    .navbar {
        height: auto;
        padding: 15px 5%;
        flex-wrap: wrap;
        gap: 15px;
    }

    .nav-links {
        order: 3;
        width: 100%;
        overflow-x: auto;
        padding: 8px 0;
    }

    .nav-links a {
        white-space: nowrap;
        font-size: 12px;
    }

    .hero {
        padding: 65px 6%;
    }

    .hero-card {
        width: 100%;
    }

    .cards,
    .products .cards {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 60px 6%;
    }
}const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "ar";

languageBtn.addEventListener("click", function () {

    currentLanguage = currentLanguage === "ar" ? "en" : "ar";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar]").forEach(element => {
        element.textContent =
            element.getAttribute(`data-${currentLanguage}`);
    });

    languageBtn.textContent =
        currentLanguage === "ar" ? "English" : "العربية";

});