async function getRandomFilms(numberOfFilms) {
    try {
        const response = await fetch("./info.json");
        if (!response.ok) {
            throw new Error('Nettverksresponsen var ikkje OK');
        }
        const json = await response.json();

        // Oppdater hver blokk med en tilfeldig film  
        for (let i = 0; i < numberOfFilms; i++) {
            const randomIndex = Math.floor(Math.random() * json.length);
            const randomMovie = json[randomIndex];

            // Hent elementene i den i-te blokken  
            const nameElement = document.getElementsByClassName("name")[i];
            const yrElement = document.getElementsByClassName("yr")[i];
            const rate10Element = document.getElementsByClassName("rate10")[i];
            const catgryElement = document.getElementsByClassName("catgry")[i];
            const minutesElement = document.getElementsByClassName("minutes")[i];
            const tagElement = document.getElementsByClassName("tag")[i];
            const movieposterElement = document.getElementsByClassName("movieposter")[i];

            // Oppdater innholdet for den tilfeldige filmen  
            nameElement.innerText = randomMovie.moviename || "Ingen navn tilgjengelig";
            yrElement.innerText = "Publisert i året: " + (randomMovie.year || "Ingen år tilgjengelig");
            rate10Element.innerText = "Ratings: " + (randomMovie.rateof10 || "Ingen vurdering tilgjengelig") + " av 10";
            catgryElement.innerText = "Kategorier: " + (randomMovie.category || "Ingen kategori tilgjengelig");
            minutesElement.innerText = "Lengde i minutt: " + (randomMovie.lenghtmovie || "Ingen lengde tilgjengelig");
            tagElement.innerText = "Tags: " + (randomMovie.tags || "Ingen tagger tilgjengelig");

            if (movieposterElement) {
                movieposterElement.src = randomMovie.poster || "Ingen plakat tilgjengelig";
            }
        }
    } catch (error) {
        console.error('Det oppstod en feil:', error);
        // Vis en melding til brukeren om at dataene ikke kunne hentes  
    }
}

// Kall funksjonen med antall blokker du har (her er det 4)
getRandomFilms(4);