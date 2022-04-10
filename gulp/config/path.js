// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		html: `${srcFolder}/*.pug`,
		scss: `${srcFolder}/scss/style.scss`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.pug`,
		scss: `${srcFolder}/scss/**/*.scss`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}