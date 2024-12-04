function login() {
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

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const uname = document.getElementById("uname").value;

    // Oppretter brukar som kan logge seg og få tilgang til nettstaden
    auth.createUserWithEmailAndPassword(email, password)
        // Lagrar også brukaren i collection "users"
        .then((userCredentials) => {
            sessionStorage.setItem("uid", userCredentials.user.uid)
            db.collection("users").doc().set({
                username: uname,
                email: email,
                userId: userCredentials.user.uid
            })
        })

        .catch((err) => {
            alert(err.message)
            console.log(err.code);
            console.log(err.message);
        });
}

const bcrypt = require('bcrypt');

const saltRounds = 10;  // The number of rounds to salt the password

// Hash the password
async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Verify a password
async function verifyPassword(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

async function run() {
  const password = 'mySecretPassword';
  
  // Hashing the password
  const hashedPassword = await hashPassword(password);
  console.log('Hashed Password:', hashedPassword);
  
  // Verifying the password
  const isMatch = await verifyPassword(password, hashedPassword);
  console.log('Password match:', isMatch);
}

run();