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

// Generate random color gradient
// taking an initial hue to help 
// bias the next color in the gradient
export function getRandomGradient(initialHue=0) {
    let hue = 0;
    if (initialHue === 0) {
        hue = Math.floor(Math.random() * 360);
    } else {
        hue = initialHue + 60 + Math.floor(Math.random() * 10);
    }
    const color1 = `hsl(${hue}, 100%, 50%)`;
    const color2 = `hsl(${(hue + 60) % 360}, 100%, 50%)`;
    return [color1, color2, hue];
}

