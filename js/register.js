/* function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        // Sjekker om brukaren er pålogga
        .then((userCredentials) => {
            // Oppretter ein sessionStorage variabel i nettlesaren. Denne brukes for å sjå om bruker er pålogga.
            sessionStorage.setItem("uid", userCredentials.user.uid)
            // Tilbake til index.html 
            window.location.href = "./index.html"
        })
        .catch((error) => {
            console.error("Feila: " + error.message);
        })
}

*/

function login() {
  console.log("Test1")
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");
  const successMessage = document.getElementById("success-message");
  const userpfp = document.getElementById("userimg");
  console.log("Test2")

  // Tøm tidligere meldinger
  errorMessage.innerText = '';
  successMessage.innerText = '';

  // Les inn JSON-data (brukere)
  fetch('user.json')
    .then(response => response.json())
    .then(users => {
      // Sjekk om brukernavnet og passordet stemmer
      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = "user.html";
        sessionStorage.setItem('userPfp', user.pfp);
        updateElement(userpfp, pfp, "Ingen bilete tilgjengelig");
        console.log("Test3")
      } else {
        // Feilmelding hvis innloggingen er feil
        errorMessage.textContent = 'Feil brukernavn eller passord!';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      errorMessage.textContent = 'Kunne ikke hente brukerinformasjon!';
    });

}


  
    