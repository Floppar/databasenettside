
    //let movieposter;
    //const movie = [
        
    //]
    //array.forEach(valuenum < 3)
    //{
    //};
    async function getFilm() {
    
    let name;
    let yr;
    let rate10;
    let catgry;
    let minutes;
    let tag;
    const data = await fetch("./info.json");
    const json = await data.json();
    name            = json[0].moviename;
    yr              = json[0].year;
    rate10          = json[0].rateof10;
    catgry          = json[0].category;
    minutes         = json[0].lenghtmovie;
    tag             = json[0].tags;
    movieposter     = json[0].poster;
    for (let index = 0; index < json.length; index++) {
        const movie = json[index];

        // Hent elementene ved klasse og oppdater innholdet  
        const nameElements          = document.getElementsByClassName("name");
        const yrElements            = document.getElementsByClassName("yr");
        const rate10Elements        = document.getElementsByClassName("rate10");
        const catgryElements        = document.getElementsByClassName("catgry");
        const minutesElements       = document.getElementsByClassName("minutes");
        const tagElements           = document.getElementsByClassName("tag");
        const movieposterElements   = document.getElementsByClassName("movieposter");

        // Oppdater innholdet for den aktuelle filmen  
        if (nameElements[index]) {
            nameElements[index].innerText = movie.moviename || "Ingen navn tilgjengelig";
        }
        if (yrElements[index]) {
            yrElements[index].innerText = "Publisert i året: " + movie.year || "Ingen år tilgjengelig";
        }
        if (rate10Elements[index]) {
            rate10Elements[index].innerText = "Ratings frå IMDb: " + movie.rateof10 + " av 10" || "Ingen vurdering tilgjengelig";
        }
        if (catgryElements[index]) {
            catgryElements[index].innerText = "Kategorier: " + movie.category || "Ingen kategori tilgjengelig";
        }
        if (minutesElements[index]) {
            minutesElements[index].innerText = "Lengde i minutt: " + movie.lenghtmovie || "Ingen lengde tilgjengelig";
        }
        if (tagElements[index]) {
            tagElements[index].innerText = "Tags: " + movie.tags || "Ingen tagger tilgjengelig";
        }
        if (movieposterElements[index]) {
            movieposterElements[index].src = movie.poster || "Ingen plakat tilgjengelig";
        }
    }
}

getFilm();