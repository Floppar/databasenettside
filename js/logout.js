function logout() {
    console.log("outTest1")
    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");
  
    // Tøm tidligere meldinger
    errorMessage.innerText = '';
    successMessage.innerText = '';
  
    // Les inn JSON-data (brukere)
    fetch('user.json')
      .then(response => response.json())
      .then(users => {
        // Sjekk om brukernavnet og passordet stemmer
        const user = users.find(user => user.username === username && user.password === password);
      console.log("Fetching...")
  
        if (user) {
          sessionStorage.removeItem('isLoggedIn', 'true');
          window.location.href = "index.html";
          console.log("Logg ut")
        } else {
          // Feilmelding hvis innloggingen er feil
          errorMessage.textContent = 'Feil brukernavn eller passord!';
          console.log("Uh oh...")
        }
      })
      .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'Kunne ikke hente brukerinformasjon!';
        console.log("Error!")
      });
      if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        console.log("Logg!")
    } 
  }