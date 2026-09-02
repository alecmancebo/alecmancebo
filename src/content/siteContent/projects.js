export const projects = [
	{ id: '01', title: 'TRANSPAPELADES', category: 'web', seed: 'transpapelades', projectUrl: 'https://www.figma.com/proto/3DFEMbsYkkBTMtyLTK1JZm/Transpapelades?node-id=909-23563&viewport=328%2C554%2C0.02&t=Rcr2OJrNfdRrTgkx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=909%3A23563&show-proto-sidebar=1&page-id=97%3A2' },
	{ id: '02', title: 'ECHAR RAÍCES', category: 'web, gameDev', seed: 'echar-raices', projectUrl: 'https://alec-rodriguez.itch.io/echar-raices' },
	{ id: '03', title: 'ENTRELÍNEAS', category: 'uxui', seed: 'entrelineas', projectUrl: 'https://www.figma.com/proto/1OCW04zQOmjOtNLwMURRsw/Entrel%C3%ADneas---AlecRodr%C3%ADguez?node-id=44-675&p=f&t=nhPQUKLodyw6IDig-1&scaling=scale-down&content-scaling=fixed&page-id=12%3A6&starting-point-node-id=44%3A591&show-proto-sidebar=1' },
	{ id: '04', title: 'ERMES OLEA PORFOLIO', category: 'web', seed: 'ermes-olea-porfolio', projectUrl: 'https://ermes-olea.netlify.app/' },
	{ id: '05', title: 'FADE', category: 'gameDev, 3d', seed: 'fade', projectUrl: 'https://alec-rodriguez.itch.io/fade' },
	{ id: '06', title: 'MICROSOFT HUDDLE', category: 'gameDev, web, 3d', seed: 'microsoft-huddle', projectUrl: 'https://microsofthuddle.framer.website/' },
];

// Tarjetas para la Vista Cuadrícula (solo del g-1 al g-6)

export const gridProjectsByLanguage = {
	en: [
		{ id: 'g-1', category: 'web', title: 'TRANSPAPELADES', year: '2025', disciplines: 'WEB', images: ['/trabajos/transpapelades-1.png'] },
		{ id: 'g-2', category: 'web, gameDev', title: 'ECHAR RAICES', year: '2026', disciplines: 'WEB / GAME-DEV', images: ['/trabajos/Echar-raices 03.png', '/trabajos/Echar-raices 05.png', '/trabajos/Echar-raices 01.png'] },
		{ id: 'g-3', category: 'uxui', title: 'ENTRELINEAS', year: '2026', disciplines: 'UX/UI', images: ['/trabajos/Entrelineas 01.png', '/trabajos/Entrelineas 04.png'] },
		{ id: 'g-4', category: 'web', title: 'ERMES OLEA PORFOLIO', year: '2026', disciplines: 'WEB', images: ['/trabajos/E-porfolio-1.png',  '/trabajos/E-porfolio-3.png', '/trabajos/E-porfolio.png'] },
		{ id: 'g-5', category: 'gameDev, threed', title: 'FADE', year: '2024', disciplines: 'GAME-DEV / 3D', images: ['/trabajos/Fade04.png', '/trabajos/Fade02.png'] },
		{ id: 'g-6', category: 'gameDev, web, threed', title: 'MICROSOFT HUDDLE', year: '2025', disciplines: 'GAME-DEV / WEB / 3D', images: ['/trabajos/Huddle 01.png', '/trabajos/Huddle 03.png', '/trabajos/Huddle 02.png'] },
	],
	es: [
		{ id: 'g-1', category: 'web', title: 'TRANSPAPELADES', year: '2025', disciplines: 'WEB', images: ['/trabajos/transpapelades-1.png'] },
		{ id: 'g-2', category: 'web, gameDev', title: 'ECHAR RAICES', year: '2026', disciplines: 'WEB / GAME-DEV', images: ['/trabajos/Echar-raices 01.png', '/trabajos/Echar-raices 02.png', '/trabajos/Echar-raices 03.png'] },
		{ id: 'g-3', category: 'uxui', title: 'ENTRELINEAS', year: '2026', disciplines: 'UX/UI', images: ['/trabajos/Entrelineas 01.png', '/trabajos/Entrelineas 02.png'] },
		{ id: 'g-4', category: 'web', title: 'ERMES OLEA PORFOLIO', year: '2026', disciplines: 'WEB', images: ['/trabajos/E-porfolio-1.png', '/trabajos/E-porfolio-2.png', '/trabajos/E-porfolio-3.png'] },
		{ id: 'g-5', category: 'gameDev, threed', title: 'FADE', year: '2024', disciplines: 'GAME-DEV / 3D', images: ['/trabajos/Fade01.png', '/trabajos/Fade02.png'] },
		{ id: 'g-6', category: 'gameDev, web, threed', title: 'MICROSOFT HUDDLE', year: '2025', disciplines: 'GAME-DEV / WEB / 3D', images: ['/trabajos/Huddle 01.png', '/trabajos/Huddle 02.png'] },
	]
};

// Layout del Collage de imágenes flotantes (solo del 01 al 06)

export const projectMontageLayout = {
	'01': [
		{ src: '/trabajos/transpapelades-1.png', x: 22, y: 65, w: 34, z: 2 },
		{ src: '/trabajos/transpapelades-2.png', x: 60, y: 60, w: 14, z: 1, tablet: { x: 60, y: 60, w: 14} },
		{ src: '/trabajos/transpapelades-4.png', x: 50, y: 44, w: 14, z: 4, tablet: { x: 40, y: 38, w: 20 } },
		{ src: '/trabajos/transpapelades-3.jpg', x: 82, y: 34, w: 24, z: 3, tablet: { y: 30} },
	],
	'02': [
		{ src: '/trabajos/Echar-raices 04.png', x: 19, y: 52, w: 13, z: 5, tablet: { x: 16,y: 45, w: 16} },
		{ src: '/trabajos/Echar-raices 02.png', x: 46, y: 48, w: 24, z: 2, tablet: { y: 40, w: 25} },
		{ src: '/trabajos/Echar-raices 03.png', x: 76, y: 45, w: 24, z: 3, tablet: { x: 78, y: 30, w: 26} },
		{ src: '/trabajos/Echar-raices 01.png', x: 88, y: 61, w: 14, z: 4, tablet: { x: 86, y: 60, w: 20} },
		{ src: '/trabajos/Echar-raices 05.png', x: 32, y: 78, w: 22, z: 4, tablet: { x: 30, y: 78, w: 28} },
	],
	'03': [
		{ src: '/trabajos/Entrelineas 04.png', x: 35, y: 44, w: 38, z: 2, tablet: { x: 34, y: 44, w: 40} },
		{ src: '/trabajos/Entrelineas 02.png', x: 32, y: 68, w: 9, z: 5, tablet: { x: 30, y: 68, w: 12} },
		{ src: '/trabajos/Entrelineas 01.png', x: 70, y: 64, w: 23, z: 5, tablet: { x: 72, y: 60, w: 26 } },
		{ src: '/trabajos/Entrelineas 03.png', x: 82, y: 40, w: 16, z: 4, tablet: { x: 84, y: 36, w: 16 } },
        { src: '/trabajos/Entrelineas 05.png', x: 17, y: 78, w: 8, z: 4, tablet: { x: 66, y: 20, w: 8 } },
	],
	'04': [
		{ src: '/trabajos/E-porfolio.png', x: 21, y: 66, w: 32, z: 2, tablet: { x: 28, y: 70, w: 38 } },
		{ src: '/trabajos/E-porfolio-2.png', x: 38, y: 38, w: 12, z: 4, tablet: { x: 36, y: 34, w: 14 } },
		{ src: '/trabajos/E-porfolio-1.png', x: 78, y: 40, w: 22, z: 3, tablet: { x: 82, y: 34, w: 24 } },
		{ src: '/trabajos/E-porfolio-3.png', x: 58, y: 62, w: 11, z: 5, tablet: { x: 60, y: 60, w: 13 } },
        { src: '/trabajos/E-porfolio-4.png', x: 58, y: 24, w: 8, z: 5, tablet: { x: 56, y: 18, w: 10 } },
	],
	'05': [
		{ src: '/trabajos/Fade04.png', x: 27, y: 62, w: 32, z: 2, tablet: { x: 27, y: 58, w: 38 } },
		{ src: '/trabajos/Fade02.png', x: 40, y: 27, w: 20, z: 4, tablet: { x: 40, y: 27, w: 26 } },
		{ src: '/trabajos/Fade03.png', x: 80, y: 38, w: 25, z: 3, tablet: { x: 80, y: 38, w: 29 } },
		{ src: '/trabajos/Fade01.png', x: 63, y: 74, w: 18, z: 5, tablet: { x: 63, y: 74, w: 22 } },
	],
	'06': [
		{ src: '/trabajos/Huddle 02.png', x: 40, y: 42, w: 35, z: 4, tablet: { x: 40, y: 38, w: 38 } },
		{ src: '/trabajos/Huddle 03.png', x: 20, y: 68, w: 30, z: 2, tablet: { x: 20, y: 68, w: 32 } },
		{ src: '/trabajos/Huddle 01.png', x: 65, y: 76, w: 16, z: 3, tablet: { x: 65, y: 74, w: 19 } },
		{ src: '/trabajos/Huddle 04.png', x: 84, y: 39, w: 14, z: 5, tablet: { x: 84, y: 32, w: 17 } },
	],
};


// ==========================================================================
// 3. MARK: ARCHIVE (PROYECTOS EXCLUSIVOS DEL ARCHIVO)
// ==========================================================================
