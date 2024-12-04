const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

function crypt() {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
  });

// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
  // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
  // result == false
});

};
/*
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
*/
run();