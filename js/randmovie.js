async function getRandomFilm() {
    try {
        const response = await fetch("./info.json");
        if (!response.ok) {
            throw new Error('Nettverksresponsen var ikkje OK');
        }
        const json = await response.json();

        // Generer et tilfeldig indeks mellom 0 og lengden på json-arrayet  
        const randomIndex = Math.floor(Math.random() * json.length);
        const randomMovie = json[randomIndex]; // Velg den tilfeldige filmen

        // Hent elementene ved klasse og oppdater innholdet  
        const nameElements = document.getElementsByClassName("name");
        const yrElements = document.getElementsByClassName("yr");
        const rate10Elements = document.getElementsByClassName("rate10");
        const catgryElements = document.getElementsByClassName("catgry");
        const minutesElements = document.getElementsByClassName("minutes");
        const tagElements = document.getElementsByClassName("tag");
        const movieposterElements = document.getElementsByClassName("movieposter");

        // Oppdater innholdet for den tilfeldige filmen  
        updateElement(nameElements, 0, randomMovie.moviename, "Ingen navn tilgjengelig");
        updateElement(yrElements, 0, "Publisert i året: " + randomMovie.year, "Ingen år tilgjengelig");
        updateElement(rate10Elements, 0, "Ratings: " + randomMovie.rateof10 + " av 10", "Ingen vurdering tilgjengelig");
        updateElement(catgryElements, 0, "Kategorier: " + randomMovie.category, "Ingen kategori tilgjengelig");
        updateElement(minutesElements, 0, "Lengde i minutt: " + randomMovie.lenghtmovie, "Ingen lengde tilgjengelig");
        updateElement(tagElements, 0, "Tags: " + randomMovie.tags, "Ingen tagger tilgjengelig");

        if (movieposterElements[0]) {
            movieposterElements[0].src = randomMovie.poster || "Ingen plakat tilgjengelig";
        }
    } catch (error) {
        console.error('Det oppstod en feil:', error);
        // Vis en melding til brukeren om at dataene ikke kunne hentes  
    }
}

function updateElement(elements, index, content, defaultMessage) {
    if (elements[index]) {
        elements[index].innerText = content || defaultMessage;
    }
}

getRandomFilm();

// Eg har ei JS fil som hentar ei tilfeldeg film frå ei json fil og den verker.