// Run locally to generate the value for ADMIN_PASSWORD_HASH.
// Usage: node scripts/hash-password.mjs "your-chosen-password"
import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "your-chosen-password"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 12);
console.log("\nAdd this to your Vercel project's environment variables as ADMIN_PASSWORD_HASH:\n");
console.log(hash);
console.log("");
