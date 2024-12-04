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