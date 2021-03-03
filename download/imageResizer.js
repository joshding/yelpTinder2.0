/* RESIZE OPTIMIZE IMAGES */
const Jimp = require('jimp');

/**
 * Resize + optimize images.
 *
 * @param Array images An array of images paths.
 * @param Number width A number value of width e.g. 1920.
 * @param Number height Optional number value of height e.g. 1080.
 * @param Number quality Optional number value of quality of the image e.g. 90.
 */
async function resizeImages(images, width, height = Jimp.AUTO, quality){
	await Promise.all(
		images.map(async imgPath => {
			const image = await Jimp.read(imgPath);
			await image.resize(width, height);
			await image.quality(quality);
			await image.writeAsync(imgPath);
		})
	);
};
let images = [];
for(let i =3; i <= 50; i++) {
    images.push(`download/businessImages/image${i}.jpg`);
}
let width = 350;
let quality = 100
resizeImages(images, width, undefined, quality);
module.exports = resizeImages;