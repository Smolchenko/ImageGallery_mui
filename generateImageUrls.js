const fs = require("fs");

const imagesFolder = "./src/assets/images"; // This is the folder where your images are located.

const files = fs.readdirSync(imagesFolder); // This reads the files in the images folder synchronously.

const images = files.map((file) => ({
  name: file,
  url: `${imagesFolder}/${file}`,
})); // This creates an array of objects, where each object represents an image and contains its URL.

fs.writeFileSync("./src/assets/images.json", JSON.stringify(images)); // This writes the array of objects to a JSON file.

console.log(`Wrote ${images.length} image URLs to images.json`); // This logs a message indicating how many image URLs were written to the file.
