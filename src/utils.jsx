// Utility functions used throughout the app

// Import componenets
import sha256 from 'js-sha256';

// Trim ws & convert to lower for correct hash string
// Create a SHA256 hash of the final string
function hashEmail(email) {
    const address = String(email).trim().toLowerCase();
    return sha256(address);
}

// Get URL for a user's Gravatar
export function getGravatarUrl(email) {
    const hash = hashEmail(email);
    return `https://www.gravatar.com/avatar/${hash}?size=800&d=mp`;
}