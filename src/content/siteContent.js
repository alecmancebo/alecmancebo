// MARK: HOME - GLOBAL NAVIGATION / LABELS
const homeTranslations = {
	en: {
		work: 'WORK',
		about: 'ABOUT',
		playground: 'PLAYGROUND',
		menu: 'MENU',
		close: 'CLOSE',
		indexView: '[INDEX VIEW]',
		gridView: '[GRID VIEW]',
		filter: 'FILTER',
		all: 'ALL',
		web: 'WEB',
		gameDev: 'GAME-DEV',
		uxui: 'UX/UI',
		threed: '3D',
		graphic: 'GRAPHIC',
		bioLine1: 'MULTIDISCIPLINARY DESIGNER',
		bioLine2: 'AND VISUAL ARTIST BASED',
		bioLine3: 'IN MADRID, SPAIN.',
		links: 'LINKS',
	},
	es: {
		work: 'TRABAJO',
		about: 'PERFIL',
		playground: 'PLAYGROUND',
		menu: 'MENÚ',
		close: 'CERRAR',
		indexView: '[VISTA ÍNDICE]',
		gridView: '[VISTA CUADRÍCULA]',
		filter: 'FILTRAR',
		all: 'TODO',
		web: 'WEB',
		gameDev: 'GAME-DEV',
		uxui: 'UX/UI',
		threed: '3D',
		graphic: 'GRÁFICO',
		bioLine1: 'DISEÑADOR MULTIDISCIPLINAR',
		bioLine2: 'Y ARTISTA VISUAL BASADO',
		bioLine3: 'EN MADRID, ESPAÑA.',
		links: 'ENLACES',
	}
}

// MARK: ABOUT - ABOUT PAGE CONTENT
const aboutContent = {
	en: {
		aboutCopyright: 'A. R. MANCEBO ©2026',
		aboutBio: 'My multidisciplinary background allows me to create complex designs with a holistic perspective, connecting different areas and tools. My work ranges from motion graphics to ux/ui, video editing, photography and 3d modelling.',
		aboutEula: 'READ CV',
		aboutPdf: 'PORTFOLIO PDF -->',
		aboutTitleStack: 'STACK',
		aboutTitleSoftware: 'SOFTWARE',
		aboutTitleStudies: 'STUDIES',
		aboutTitleDesign: 'CONTACT',
		aboutTitleUxuiWeb: 'UX/UI AND WEB DESIGN',
		aboutTitleVisualDesign: 'VISUAL DESIGN',
		aboutTitleMotion3d: '3D AND MOTION',
		aboutTitleAiWorkflow: 'AI WORKFLOW AND OPTIMIZATION',
		aboutListStack: ['HTML & CSS', 'JavaScript', 'React & Next.js', 'Node.js & Express', 'MongoDB'],
		aboutListUxuiWeb: ['Figma', 'Webflow', 'Framer'],
		aboutListVisualDesign: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Affinity', 'Canva'],
		aboutListMotion3d: ['After Effects', 'Premiere', 'Blender', 'Unity'],
		aboutListAiWorkflow: ['Miro', 'Notion', 'Copilot', 'ChatGPT', 'Claude'],
		aboutListStudies: ['Fullstack Web Development', 'UX/UI Design', 'Integral Design'],
		aboutListCredits: ['alek.rmancebo@gmail.com']
	},
	es: {
		aboutCopyright: 'A. R. MANCEBO ©2026',
		aboutBio: 'Mi formación multidisciplinar me permite crear diseños complejos con una perspectiva holística, conectando diferentes áreas y herramientas. Mi trabajo varía desde motion graphic hasta ux/ui, fotografía, edición de video y modelización 3D.',
		aboutEula: 'LEER CV',
		aboutPdf: 'PORTFOLIO PDF -->',
		aboutTitleStack: 'STACK',
		aboutTitleSoftware: 'SOFTWARE',
		aboutTitleStudies: 'ESTUDIOS',
		aboutTitleDesign: 'CONTACTO',
		aboutTitleUxuiWeb: 'UX/UI Y DISENO WEB',
		aboutTitleVisualDesign: 'DISENO VISUAL',
		aboutTitleMotion3d: '3D Y MOTION',
		aboutTitleAiWorkflow: 'WORKFLOW Y OPTIMIZACION IA',
		aboutListStack: ['HTML & CSS', 'JavaScript', 'React & Next.js', 'Node.js & Express', 'MongoDB'],
		aboutListUxuiWeb: ['Figma', 'Webflow', 'Framer'],
		aboutListVisualDesign: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Affinity', 'Canva', 'Procreate'],
		aboutListMotion3d: ['After Effects', 'Premiere', 'Blender', 'Unity'],
		aboutListAiWorkflow: ['Miro', 'Notion', 'Copilot', 'ChatGPT', 'Claude'],
		aboutListStudies: ['Desarrollo Web Fullstack', 'Diseño UX/UI', 'Diseño Integral'],
		aboutListCredits: ['alek.rmancebo@gmail.com']
	}
}

// MARK: PROJECT TEXTS - CASE STUDIES / DETAIL PAGES
const textDatabase = {

	/*MARK: TRANSPAPELADES - CASE STUDY / DETAIL PAGE */
	TRANSPAPELADES: {
		en: [
			{
				tag: 'WEB DESIGN & DEVELOPMENT',
                subtitle: 'A trans guide for administrative survival',
                col2: 'The transition process affects all areas of a person\'s life, and being a visible trans* person often causes added psychological stress due to the widespread transphobia and ignorance present in society. This project stems from the lack of information and the difficulty in accessing different legal and medical resources for trans transition processes.',
                col3: 'This led to the idea of creating a digital guide aimed at adult trans people living in Madrid to facilitate their legal and administrative transition processes. The goal was to create an accessible and easy-to-consult document compiling as much information as possible.'
            },
			{
                tag: 'RESEARCH AND USERS',
                subtitle: 'Defining the objectives',
                col2: 'The user research phase focused on identifying the real barriers faced by trans* people in the Community of Madrid. To achieve this, an ethnographic study and a survey were conducted to gather direct personal experiences regarding medical and administrative procedures.',
                col3: 'Based on the analysis of this data, specific stakeholder maps and user personas—such as Ale, a non-binary person, and Olivia, a trans woman—were created to represent the diversity of identities, goals, and frustrations within the community. This foundation provided the structure for an empathy-centered project.'
            },
            {
                tag: 'IDEATION AND PROTOTYPING',
                subtitle: 'Contemplating the future',
                col2: 'In this phase, solutions were explored through agile methodologies like Lean UX to define the functional structure of the platform. Initially, the Futures Cone tool was used to conceive the project strategically, proposing a scalable ecosystem that integrates the information guide, a community forum, and additional resources.',
                col3: 'Based on this analysis, the information architecture was designed using a hierarchical silo structure, and navigation flowcharts were mapped to ensure intuitive and frictionless user journeys.'
            },
            {
                tag: 'VISUAL IDENTITY',
                subtitle: 'Transitioning identity',
                col2: 'The visual identity was designed to convey modernity, professionalism, and warmth, starting from the colors of the trans flag adapted for a digital environment. The color palette relies on a vibrant fuchsia pink as the primary color for energy, a light pink that communicates empathy and care, and black to ensure visual contrast and the seriousness required for institutional content.',
                col3: 'For typography, Museo Moderno was chosen for the logo and main headings, providing the project with a contemporary, fresh, and approachable look. Inter, a typeface specifically optimized for digital interfaces, was implemented for subtitles and body text. This entire system is brought together through a vector illustration style that combines flat color blocks with fine lines, conceptualizing the transition journey to provide a more human and accessible tone against the dryness of bureaucratic information.'
            },
            {
                tag: 'WEB DESIGN',
                subtitle: 'The website',
                col2: 'A scalable and documented component system was created, ready for future code implementation. An adaptive base grid of twelve, eight, and four columns was established to ensure fully responsive behavior tailored to specific desktop, tablet, and mobile breakpoints.',
                col3: 'Based on this modular structure, spacing rules, variable typographic scales, and a set of custom icons were defined to visually unify navigation throughout the platform.'
            },
            {
                col2: 'The high-fidelity prototype developed in Figma integrated detailed technical specifications for the handoff, defining the behavior of dropdown menus and documenting exact animation and transition guidelines to ensure a smooth experience across all devices.',
                col3: 'The interactive prototype was validated through usability testing to evaluate navigation and content comprehension. Based on the results, the design was refined by adjusting the visual hierarchy, the mobile typographic scale, and the distribution of whitespace. Finally, the copy was rewritten with a more empathetic tone, and visual markers were added to highlight key medical and legal concepts.'
            },
            {
                tag: 'SOCIAL MEDIA',
                subtitle: 'Not just a website',
                col2: 'To encourage the creation of a support network, a community forum structured by themes and tags was integrated, designed as a safe space where users can share experiences, resolve administrative doubts, and support each other during their transition.',
                col3: 'In parallel, a social media communication strategy was designed by adapting the visual identity for interactive formats such as posts, reels, and stories on Instagram and TikTok. This cross-platform extension helps diversify the project\'s reach, capture attention dynamically, and educate users about trans* bureaucracy beyond the web environment.'
            }
		],
		es: [
			{
				tag: 'DISEÑO Y DESARROLLO WEB',
				subtitle: 'Una guía trans para la supervivencia administrativa',
				col2: 'El proceso de transición afecta a todos los ámbitos de la vida de una persona, y a menudo ser una persona trans* visible provoca un estrés psicológico añadido a causa de la transfobia y desconocimiento generalizado presente en la sociedad. Este proyecto parte de la falta y dificultad de acceso a la información sobre los diferentes recursos legales y médicos para los procesos de transición de personas trans.',
				col3: 'De esta forma, surge la idea de realizar una guía digital, dirigida a personas trans adultas que viven en Madrid, para facilitar sus procesos de transición legales y administrativos, con el fin de generar un documento que recopile la mayor información posible de forma accesible y pueda ser de fácil consulta.'
			},
			{
				tag: 'INVESTIGACIÓN Y USUARIOS',
				subtitle: 'El quid del problema',
				col2: 'Para este proyecto, se utilizó la metodología del doble diamante. Las fases de descubrimiento y definición se centraron en identificar las barreras reales a las que se enfrentan las personas trans* en la Comunidad de Madrid. Para ello, se realizó tanto una etnografía como una encuesta orientada a recopilar experiencias personales directas sobre los trámites médicos y administrativos.',
				col3: 'A partir del análisis de estos datos, se construyeron mapas de actores y user personas específicos para representar la diversidad de identidades, objetivos y frustraciones dentro de la comunidad. Esta base permitió definir de manera más precisa el proyecto, ccon el foco en la empatía y la comprensión de las necesidades de los usuarios.'
			},
            {
				tag: 'IDEACIÓN Y PROTOTIPADO',
				subtitle: 'Contemplando el futuro',
				col2: 'En esta fase se exploraron las soluciones mediante metodologías ágiles como Lean UX para definir la estructura funcional de la plataforma. Inicialmente, se utilizó la herramienta del Cono de Futuros para concebir el proyecto de forma estratégica, planteando un ecosistema escalable que integra la guía informativa, un foro comunitario y recursos adicionales.',
				col3: 'A partir de este análisis, se diseñó la arquitectura de la información con una organización jerárquica en formato SILO y se mapearon los diagramas de flujo de navegación para asegurar rutas de usuario intuitivas y sin fricciones.'
			},
            {
				tag: 'IDENTIDAD VISUAL',
				subtitle: 'Transitando la identidad',
				col2: 'La identidad visual se diseñó para transmitir contemporaneidad, profesionalidad y cercanía, partiendo de los colores de la bandera trans adaptados a un entorno digital. La paleta cromática se apoya en un rosa fucsia vibrante como color principal para aportar energía, un rosa claro que comunica empatía y cuidados, y el negro para asegurar el contraste visual y la seriedad que requiere el contenido institucional.',
				col3: 'En cuanto a la tipografía, para el logotipo, títulos y encabezados principales se escogió Museo Moderno, una fuente geométrica que aporta un aspecto contemporáneo, fresco y cercano al proyecto. Por otro lado, para los subtítulos y los bloques de texto se implementó Inter, una tipografía optimizada específicamente para interfaces digitales. Todo este sistema se consolida mediante un estilo de ilustración vectorial propio, que combina bloques de color plano con líneas finas conceptualizando el recorrido de la transición, lo que pretende aportar un tono más humano y accesible frente a la aridez de la información burocrática.'
			},
            {
				tag: 'LA WEB',
				subtitle: 'Contemplando el futuro',
				col2: 'Se creó un sistema de componentes escalable y documentado, preparado para su futura implementación en código. Se estableció una retícula base adaptativa de doce, ocho y cuatro columnas para garantizar un comportamiento completamente responsive ajustado a los breakpoints específicos de ordenador, tablet y móvil.',
				col3: 'A partir de esta estructura modular, se definieron reglas de espaciado, escalas tipográficas variables y un conjunto de iconos personalizados que unifican visualmente la navegación por la plataforma.'
			},
            {
				col2: 'El prototipado de alta fidelidad desarrollado en Figma integró especificaciones técnicas detalladas para el handoff, definiendo el comportamiento de los menús desplegables y documentando las directrices exactas de animación y transición para asegurar una experiencia fluida en todos los dispositivos.',
				col3: 'Se validó el prototipo interactivo mediante testeos de usabilidad con usuarios para evaluar la navegación y comprensión del contenido. A partir de los resultados, se iteró el diseño ajustando la jerarquía visual, la escala tipográfica en versión móvil y la distribución de los espacios en blanco. Finalmente, se reescribieron los textos con un tono más empático y se añadieron marcadores visuales para destacar conceptos médicos y legales clave.'
			},
            {
				tag: 'LAS RRSS',
				subtitle: 'No solo una web',
				col2: 'Para fomentar la creación de una red de apoyo, se integró un foro comunitario estructurado por temáticas y etiquetas, concebido como un espacio seguro donde los usuarios pueden compartir experiencias, resolver dudas administrativas y acompañarse durante su transición.',
				col3: 'Paralelamente, se diseñó una estrategia de comunicación para redes sociales mediante la adaptación de la identidad visual a formatos interactivos como posts, reels e historias para Instagram y TikTok. Esta extensión multiplataforma permite diversificar el alcance del proyecto, captar la atención de manera dinámica y educar sobre la burocracia trans* más allá del entorno web.'
			}
		]
	},

	/*MARK: ECHAR RAÍCES - CASE STUDY / DETAIL PAGE */

	"ECHAR RAÍCES": {
        en: [
            {
                tag: 'THE STORY',
                subtitle: 'Taking root or taking flight: an uninvited metamorphosis',
                col2: 'After swallowing a mysterious seed, your body slowly begins to transform into a plant, plunging you into a downward spiral of confusion where you can\'t quite grasp what\'s happening to you or how to stop it. Will you find the courage to uproot yourself and move forward, or will you let the fear of change wither you away until you become part of the scenery forever?',
                col3: 'The narrative core of Echar Raíces (Taking Root) is built upon the somatization of repressed emotions, drawing inspiration from literary tropes like hanahaki (a physical affliction triggered by silenced feelings).'
            },
            {
                col2: "The plant growth inside the protagonist acts as a visual metaphor for what is struggling to break free, illustrating the vertigo and fear that comes with accepting our true nature. In this context, resisting the plant invasion symbolizes an agonizing struggle against one's own destiny and identity.",
                col3: "This game explores the psychological anguish of losing control over your own body against your will. The player is faced with the duality of desperately fighting the transformation or accepting physical assimilation with their surroundings."
            },
            {
                tag: 'VISUAL IDENTITY',
                subtitle: 'Pixel art to talk about nature',
                col2: 'By combining the rigid and artificial format of pixels with the organic elements of nature, a visual discomfort is generated that reflects the protagonist\'s internal conflict: the orderly structure of the human being is invaded by an uncontrollable plant growth that eventually assimilates them.',
                col3: 'Inspired by metamorphic tales like The Fly or Annihilation, and following the typical structure of point-and-click adventure games, the restricted palette of green tones and the pixel typography (Micro 5) reinforce the retro and handcrafted feel.'
            },
            {
                tag: 'THE CODE',
                subtitle: 'The game engine',
                col2: 'The backend system was structured by developing a RESTful API using Node.js and Express. This API connects to a MongoDB database that stores player data, game states, items, and interactions. The server logic enables continuous tracking of narrative branching, ensuring that player choices can be retrieved in future sessions.',
                col3: 'The frontend was developed with React, using a component-based approach to create an interactive and responsive user interface. Additionally, security measures and data validation have been implemented to guarantee the integrity and consistency of the information stored in the database. The Canvas API was used to render the game graphics, optimizing performance and ensuring a smooth experience.'
            }, 
            {
                tag: 'NARRATIVE FLOW',
                subtitle: 'The branching story',
                col2: 'Depending on the player\'s choices, the story can branch into three different endings. Every decision made by the player has consequences that affect the unfolding narrative, creating a sense of agency and active participation in the story.',
                col3: 'A flowchart was developed where each choice adds invisible "rooting points" in the backend (MongoDB), ultimately determining the outcome of the story. Every player decision is logged in the database, allowing the game to remember past choices and impact the future narrative.' 
            },
            {
                tag: 'UX/UI',
                subtitle: 'The user experience',
                col2: 'The decision-making UI was integrated minimalistically to avoid breaking the pixel art immersion. Clear and accessible menus and buttons were designed, featuring visual feedback to indicate player choices. Navigation is intuitive, allowing players to focus entirely on the story without distractions.',
                col3: 'Keyboard movement and interaction have been implemented, with future plans to add mouse and touch screen controls to ensure player accessibility and comfort across different devices.'
            }

        ],

        es: [ 
            {
				tag: 'LA HISTORIA',
				subtitle: 'Echar raíces o echar a volar: una metamorfosis no solicitada',
				col2: 'Tras ingerir una misteriosa semilla, tu cuerpo comienza a transformarse lentamente en una planta, sumiéndote en una espiral de confusión donde no logras comprender qué te está ocurriendo ni cómo detenerlo. ¿Encontrarás el valor para arrancarte del suelo y avanzar, o dejarás que el miedo al cambio te marchite hasta convertirte en parte del paisaje para siempre?',
				col3: 'El núcleo narrativo de Echar Raíces se construye sobre la somatización de las emociones reprimidas, tomando inspiración de tropos literarios como el hanahaki (la aflicción física desencadenada por sentimientos silenciados). '
			},
            {
                col2: "El crecimiento vegetal en el interior del protagonista actúa como una metáfora visual de aquello que pugna por liberarse, ilustrando el vértigo y el miedo que produce aceptar nuestra verdadera naturaleza. En este contexto, resistirse a la invasión de las plantas simboliza una lucha agónica contra el propio destino y la identidad.",
                col3: "Este juego explora la angustia psicológica de perder el control sobre el propio cuerpo contra tu voluntad. El jugador se enfrenta a la dualidad de luchar desesperadamente contra la transformación o aceptar la asimilación física con el entorno."
            },
            {
				tag: 'LA IDENTIDAD VISUAL',
				subtitle: 'Pixel art para hablar de lo natural',
				col2: 'Al combinar el formato rígido y artificial del píxel con los elementos orgánicos de la naturaleza, se genera una incomodidad visual que refleja el conflicto interno del protagonista: la estructura ordenada del ser humano se ve invadida por un crecimiento vegetal incontrolable que termina asimilándolo.',
				col3: 'Inspirado en relatos metamórficos como La Mosca o Aniquilación, y siguiendo la estructura típica de los videojuegos point and click, la paleta reducida de tonos verdes  y la tipografía pixel (Micro 5) refuerzan el aire retro y artesanal.'
			},
            {
                tag: 'EL CÓDIGO',
				subtitle: 'El motor del juego',
				col2: 'El sistema de backend se ha estructurado mediante el desarrollo de una API RESTful utilizando Node.js y Express. Esta API se conecta a una base de datos MongoDB, que almacena la información, estados de los jugadores, objetos e interacciones. La lógica del servidor permite un registro continuo de las ramificaciones narrativas, asegurando que las decisiones del jugador puedan recuperarse en futuras sesiones.',
				col3: 'El frontend se ha desarrollado con React, utilizando un enfoque de componentes para crear una interfaz de usuario interactiva y reactiva. Además, se han implementado medidas de seguridad y validación de datos para garantizar la integridad y consistencia de la información almacenada en la base de datos. Se ha utilizado la API Canvas para renderizar los gráficos del juego, optimizando el rendimiento y asegurando una experiencia fluida.'
            }, 
            {
                tag: 'EL FLUJO NARRATIVO',
				subtitle: 'Las ramas de la historia',
				col2: 'Dependiendo de las elecciones del jugador, la historia puede ramificarse en tres finales diferentes. Cada decisión tomada por el jugador tiene consecuencias que afectan el desarrollo de la narrativa, creando un sentido de agencia y participación activa en la historia.',
				col3: 'Se desarrolló un diagrama de flujo donde cada elección suma "puntos de enraizamiento" invisibles en el backend (MongoDB), y determina el final de la historia. Cada decisión del jugador se registra en la base de datos, lo que permite que el juego recuerde las elecciones pasadas y afecte la narrativa futura.' 
            },
            {
                tag: 'UX/UI',
				subtitle: 'La experiencia del usuario',
				col2: 'La interfaz de usuario para las decisiones se integró de forma minimalista para no romper la inmersión del pixel art. Se diseñaron menús y botones claros y accesibles, con retroalimentación visual para indicar las elecciones del jugador. La navegación es intuitiva, permitiendo a los jugadores centrarse en la historia sin distracciones.',
				col3: 'Se ha implementado el movimiento e interacción por teclado, con el planteamiento futuro de implementación de controles también por ratón y pantalla táctil, para garantizar la accesibilidad y comodidad del jugador en diferentes dispositivos.'
            }
        ]
    },

	/*MARK: ENTRELINEAS - CASE STUDY / DETAIL PAGE */
    "ENTRELÍNEAS": {
		en: [
			{
                tag: 'UX/UI AND APP DESIGN',
                subtitle: 'Stories changing hands',
                col2: 'The current model for book exchanges in Madrid\'s public and cultural spaces isn\'t quite working due to anonymity, lack of civic responsibility, and poor maintenance. How can we intervene in this ecosystem to restore the lost value of physical books?',
                col3: 'Entrelíneas is a web platform that seeks to revitalize book exchanges in the city of Madrid, fostering citizen participation and building a community around physical books. The proposal centers on a geolocation system that allows users to discover, log, and share books at different locations across the city, creating an interactive map of urban literature.'
            },
            {
                tag: 'RESEARCH AND USERS',
                subtitle: 'Defining the objectives',
                col2: 'To tackle this problem, the initial research focused on mapping the current state of initiatives like Metrotecas or Bookcrossing. Through surveys, interviews, and netnography, the system\'s structural flaws were identified.',
                col3: 'These findings were synthesized into User Personas to narrow down the problems to be solved: from the "caretaker" profile, who feels powerless against the vandalism of their neighborhood\'s cultural fabric, to the digitally fatigued youth seeking direct, filtered stimulation.'
            },
            {
                tag: 'IDEATION',
                subtitle: 'Transforming frustration into opportunity',
                col2: 'Using prioritization tools like the MoSCoW matrix, the product\'s value proposition was defined. The following must-have features were conceptualized:',
                col3: [
                    'Interactive map with real-time locations of exchange points.',
                    'A digitized and updated catalog for each physical location.',
                    'A logging system via QR code scanning and ISBN reading.',
                    'A community-driven reporting module to alert users of empty or vandalized points.'
                ]
            },
            {
                tag: 'FLOWCHARTS AND ARCHITECTURE',
                subtitle: 'Defining the structure',
                col2: 'The prototyping process materialized the app\'s information architecture. The three most critical app processes were mapped out to avoid friction points and guarantee a seamless user experience: logging a book, searching for a book, and locating an exchange point.',
                col3: [
                    "A flat and simplified navigation structure was designed, based on four pillars in the bottom tab bar (Home/Map, Discover, Scan, and Profile). This drastically reduces cognitive load and ensures that any critical feature is a maximum of two clicks away."
                ]
            },
            {
                tag: 'VISUAL IDENTITY',
                subtitle: 'A clean visual system that prioritizes content',
                col2: 'The color palette combines a scale of blues that evokes the transparency and solidity of public services, drawing inspiration from Madrid\'s identity, with a vibrant red accent that pays tribute to the Community of Madrid and guides the primary calls to action. Typographically, Archivo was selected to give titles a robust geometric structure, complemented by Inter as the backbone to ensure flawless technical readability and prevent visual fatigue in any environment.',
                col3: 'All app icons follow a clean, uniform stroke, reinforcing the sense of lightness and minimalism. Book covers and profile pictures act as the main graphic elements; the interface yields visual prominence to the cultural content generated by users, making every screen unique and dynamic.'
            },
            {
                tag: 'APP DESIGN',
                subtitle: 'Frictionless interactivity',
                col2: 'Critical flows were prototyped with high-fidelity interactions to simulate real-world usage conditions: the speed of scanning a QR code with the phone\'s camera, or the immediacy of checking the map for nearby points. The UI Kit, developed using Atomic Design principles, allows each prototype component to inherit standardized properties. Primary actions were deliberately placed in the lower area of the screen, easily within thumb\'s reach.',
                col3: 'Usability testing yielded a 100% success rate on key tasks, along with highly positive feedback regarding intuitiveness. However, heatmaps and metrics helped identify minor areas for improvement, such as the need to reduce unnecessary clicks, minimize visual noise, and refine micro-interactions, laying the groundwork to optimize the app\'s fluidity in future iterations.'
            },
            {
                tag: 'ACCESSIBILITY',
                subtitle: 'Clarity, contrast and ergonomics',
                col2: [
                    'A 4.5:1 contrast ratio (AA level) was applied between text and background to ensure users with low vision can read without difficulty.',
                    'States, labels, and errors are not communicated through color alone; they are accompanied by distinct icons or text for color-blind users.',
                    'Error and validation messages use clear, simple, and jargon-free language.'
                ],
                col3:  [
                    'Standard font sizes are maintained, and clear, distinguishable hierarchies are established.',
                    'All interactive elements feature alt-text tags so that screen readers can correctly describe the action of each button.',
                    'Standard design patterns were implemented, and primary navigation was reduced to just 4 tabs, limiting options to decrease cognitive load and make the app easier to learn.'
                ]
            },
            {
                tag: 'THE WEBSITE',
                subtitle: 'From the platform to the screen',
                col2: 'For the promotion and hypothetical launch of the project, a corporate landing page was designed to directly communicate the service\'s purpose under the slogan "Madrid is your library." The web platform acts as a showcase to highlight the impact metrics of the neighborhood network, explain how the exchange works, and facilitate direct downloads of the mobile app.',
                col3: 'The plan includes creating content focused on combating book abandonment and encouraging the role of the "neighborhood caretaker" by showcasing real stories of books that have changed hands throughout Madrid\'s transport network and cultural centers. Capitalizing on the rise of youth reading communities, "book hunting" is promoted in subway stations.'
            }
		],
		es: [
			{
				tag: 'UX/UI & DISEÑO DE APLICACIONES',
                subtitle: 'Historias que pasan de mano en mano',
                col2: 'El modelo actual de intercambio de libros en los espacios públicos y culturales de Madrid no termina de funcionar debido al anonimato, la falta de civismo y la ausencia de mantenimiento. ¿Cómo podemos intervenir este ecosistema para devolverle al libro físico el valor que ha perdido?',
                col3: 'Entrelíneas es una plataforma web que busca revitalizar el intercambio de libros en la ciudad de Madrid, fomentando la participación ciudadana y la creación de una comunidad alrededor del libro físico. La propuesta se centra en un sistema de geolocalización que permite a los usuarios descubrir, registrar y compartir libros en diferentes puntos de la ciudad, creando un mapa interactivo de la literatura urbana.'
            },
			{
                tag: 'INVESTIGACIÓN Y USUARIOS',
                subtitle: 'Definiendo los objetivos',
                col2: 'Para abordar el problema, la investigación inicial se centró en mapear el estado actual de iniciativas como las Metrotecas o el Bookcrossing. A través de encuestas, entrevistas y netnografía, se detectaron los fallos estructurales del sistema.',
                col3: 'Se sintetizaron los hallazgos en perfiles de usuario (User Personas) para acotar los problemas a resolver: desde el perfil "cuidador" que sufre impotencia ante el vandalismo del tejido cultural de su barrio, hasta el perfil joven con fatiga digital que busca estímulos directos y filtrados.'
            },
            {
                tag: 'IDEACIÓN',
                subtitle: 'Transformando la frustración en oportunidad',
                col2: 'Utilizando herramientas de priorización como la matriz MoSCoW, se definió la propuesta de valor del producto. Se conceptualizaron las siguientes funcionalidades Must-Have:',
				col3: [
					'Mapa interactivo con localización de puntos de intercambio en tiempo real.',
					'Catálogo digitalizado y actualizado por cada punto físico.',
					'Sistema de registro mediante escaneo de códigos QR y lectura de ISBN.',
					'Módulo de reportes impulsado por la comunidad para alertar sobre puntos vacíos o vandalizados.'
				]
            },
            {
                tag: 'DIAGRAMAS DE FLUJO Y ARQUITECTURA',
                subtitle: 'Definiendo la estructura',
                col2: 'El proceso de prototipado materializó la arquitectura de información de la app. Se mapearon los tres procesos más críticos de la aplicación para evitar puntos de fricción y garantizar la fluidez de la experiencia de usuario: el registro de un libro, la búsqueda de un libro y la localización de un punto de intercambio.',
				col3: [
					"Se diseñó una estructura de navegación plana y simplificada basada en cuatro pilares en la barra inferior (Home/Mapa, Descubrir, Escaneo y Perfil). Esto reduce drásticamente la fatiga mental del usuario y permite que cualquier funcionalidad crítica esté a un máximo de dos clics de distancia."
				]
            },
            {
                tag: 'IDENTIDAD VISUAL',
                subtitle: 'Un sistema visual limpio que prioriza el contenido',
                col2: 'La identidad cromática combina una escala de azules que evoca la transparencia y solidez de los servicios públicos, inspirándose en la identidad madrileña, con un acento en rojo vibrante que rinde homenaje a la Comunidad de Madrid y guía las llamadas a la acción principales. A nivel tipográfico, se ha seleccionado Archivo para dotar a los títulos de una estructura geométrica robusta, complementada por Inter como columna vertebral para garantizar una legibilidad técnica impecable y sin fatiga visual en cualquier entorno.',
                col3: 'Todos los iconos de la aplicación siguen un trazo limpio y uniforme, reforzando la sensación de ligereza y minimalismo. Las portadas de los libros y las fotos de perfil actúan como los elementos gráficos principales; la interfaz cede el protagonismo visual al propio contenido cultural generado por los usuarios, logrando que cada pantalla sea única y dinámica.'
            },
            {
                tag: 'DISEÑO DE LA APP',
                subtitle: 'Interactividad sin fricciones',
                col2: 'Se prototiparon los flujos críticos con interacciones de alta fidelidad para simular las condiciones reales de uso: la rapidez al escanear un código QR con la cámara del móvil o la inmediatez al consultar el mapa de puntos cercanos. El UI Kit desarrollado en base al Atomic Design permite que cada componente del prototipo herede propiedades estandarizadas. Las acciones principales se ubicaron deliberadamente en la zona inferior de la pantalla, donde el dedo pulgar llega sin esfuerzo.',
                col3: 'Las pruebas de usabilidad realizadas con usuarios arrojaron una tasa de éxito del 100% en las tareas principales y valoraciones muy positivas sobre su intuición. No obstante, los mapas de calor y métricas permitieron detectar pequeñas áreas de mejora, como la necesidad de reducir clics innecesarios, minimizar el ruido visual y refinar micro-interacciones, sentando las bases para optimizar la fluidez de la app en futuras iteraciones.'
            },
			{
                tag: 'ACCESIBILIDAD',
                subtitle: 'Claridad, contraste y ergonomía',
                col2: [
					'Se ha aplicado el ratio 4.5:1 (nivel AA) entre el texto y el fondo para garantizar que las personas con visión reducida puedan leer sin dificultad.',
					'Los estados, etiquetas y errores no se comunican únicamente a través del color, sino que van acompañados de iconos distintivos o texto para usuarios con daltonismo.',
					'Los mensajes de error y validación utilizan un lenguaje claro, sencillo y libre de tecnicismos.',
				],
                col3:  [
					'Se respeta el estándar de tamaño de fuente y se establecen jerarquías claras y distinguibles.',
					'Todos los elementos interactivos cuentan con etiquetas de texto (alt-text) para que los sistemas de voz describan correctamente la acción de cada botón.',
					'Se han implementado patrones de diseño estándar y se ha reducido la navegación principal a solo 4 pestañas, limitando las opciones para disminuir la fatiga mental y facilitar el aprendizaje de la app.',
				],
            },
            {
                tag: 'LA WEB',
                subtitle: 'Del andén a la pantalla',
                col2: 'Para la promoción e hipotético lanzamiento del proyecto, se ha diseñado una landing page corporativa que comunica de forma directa el propósito del servicio bajo el lema "Madrid es tu biblioteca". La plataforma web actúa como escaparate para dar a conocer las cifras de impacto de la red vecinal, explicar el funcionamiento del intercambio y facilitar la descarga directa de la aplicación móvil.',
                col3: 'Se plantea la creación de un contenido enfocado en combatir el abandono de libros y fomentar el rol de "cuidador vecinal", mostrando historias reales de libros que han viajado de mano en mano por la red de transporte y centros culturales de Madrid. Y aprovechando el auge de las comunidades de lectura juvenil, se promociona la "caza de libros" en las estaciones de metro.'
            }
		]
	},

	/*MARK : ERMES OLEA PORFOLIO - CASE STUDY / DETAIL PAGE */

	 "ERMES OLEA PORFOLIO": {
		en: [
			{
                tag: 'FRONT-END DEVELOPMENT AND WEB DESIGN',
                subtitle: 'A digital portfolio for a multidisciplinary artist',
                col2: 'A multidisciplinary artist and designer who needed their own digital space to showcase their work, stepping away from traditional corporate templates. The challenge of this project was translating a complex creative identity into a functional web interface. The main objective was to build an immersive experience without losing sight of usability, organizing the client\'s content under a minimalist design with a strong personality.',
                col3: 'The process began with an initial meeting to align the client\'s artistic vision with the actual possibilities of web development, setting clear expectations. A workflow was developed based on partial deliveries, regular meetings, and visual prototypes to integrate client feedback at key moments in the design process.'
            },
            {
                tag: 'THE CREATIVE CONCEPT',
                subtitle: 'Tactility in a digital space',
                col2: 'The art direction for this project not only seeks physical materiality but also incorporates the spirit of fanzines and photocopies, embracing asymmetry, intentional misalignment, and imperfect strokes. There is an overlapping of elements, analog textures, and blur effects that imitate a studio desk or a creative workshop where tools, sketches, and notes are scattered spontaneously.',
                col3: 'It deliberately breaks with the classic rules of the digital grid through overlays and graphic elements that simulate physical cutouts, reflecting an underground and countercultural aesthetic adapted to the web medium. This accurately represents Ermes\'s artistic identity without sacrificing functionality.'
            },
            {
                tag: 'VISUAL IDENTITY',
                subtitle: '',
                col2: 'The color palette relies on a selection of raw tones, harsh contrasts, and faded ink colors reminiscent of printing, which helps the content stand out. The use of layers with blurs and transparencies allows the visual elements to be structured without losing the illusion of stacking real sheets of paper.',
                col3: 'Fonts evoking the cutout letters of classic fanzines and rudimentary printing typography are integrated. Additionally, granular paper textures, irregular edges, and a low-fidelity photocopy aesthetic are incorporated to provide a handmade, artisanal character.'
            },
            {
                tag: 'FRONT-END DEVELOPMENT',
                subtitle: 'Controlled chaos',
                col2: 'Instead of using the typical grids found on corporate websites, grid configurations utilizing custom fractional units are employed. This allows for defining flexible tracks that adapt to the screen size. To achieve that feeling of overlapping papers, cutouts, and intersecting notes, the grid is combined with absolute positioning, creating the organic effect of a collage without breaking the overall layout.',
                col3: 'The front-end is developed using HTML, CSS, and JavaScript. Everything is calculated through media queries and relative units so that, when changing screen sizes, the chaos rearranges itself coherently without visually collapsing. The landing page features two versions—an orderly version and a chaotic version—letting the user choose their preference.'
            },
            {
                tag: 'CONTENT MANAGEMENT',
                subtitle: 'Autonomy and scalability',
                col2: 'To ensure the project had a life beyond its launch, a lightweight content management flow connected to Netlify was integrated. This allows the artist to add new projects, update their archive, or modify text completely autonomously through a clean and simplified interface.',
                col3: 'By restricting the input fields through an external interface, it prevents the client from accidentally breaking the layout, CSS styles, or the portfolio\'s grid. The artist can upload new projects without depending on a developer or needing to know how to write code.'
            },
            {
                tag: 'CONCLUSIONS',
                subtitle: 'A tailor-made design',
                col2: 'The true methodological challenge of the project was balancing the expressive freedom of the design with development engineering. While maintaining the personal and handcrafted character of the project, technical criteria for web optimization, responsiveness, and performance were applied, delivering a final product that is functional, autonomous, and production-ready.',
                col3: 'Beyond serving as a simple static image repository, the interactivity and the "workbench" concept ensure that visitors remember the experience, setting the artist apart in a market saturated with flat and predictable digital portfolios.'
            }
		],
		es: [
			{
                tag: 'DESARROLLO FRONTEND Y DISEÑO WEB',
                subtitle: 'Un portfolio digital para un artista multidisciplinar',
                col2: 'Un artista y diseñador multidisciplinar que necesitaba un espacio digital propio para exhibir su trabajo, alejado de las plantillas corporativas tradicionales. El reto de este proyecto se trataba de traducir una identidad creativa compleja a una interfaz web funcional. El objetivo principal era construir una experiencia inmersiva que no perdiera de vista la usabilidad, organizando el contenido del cliente bajo un diseño minimalista pero con mucha personalidad.',
                col3: 'El proceso comenzó con una reunión inicial con el cliente para alinear su visión artística  con las posibilidades reales de desarrollo web, estableciendo expectativas claras. Se desarrolló un flujo de trabajo basado en entregas parciales, reuniones periódicas y prototipos visuales, para integrar el feedback del cliente en momentos clave del proceso de diseño.'
            },
            {
                tag: 'EL CONCEPTO CREATIVO',
                subtitle: 'Lo táctil en lo digital',
                col2: 'La dirección de arte de este proyecto no solo busca la materialidad física, sino que incorpora el espíritu del fanzine y el fotocopiado, abraza la asimetría, el desalineamiento intencionado y el trazo imperfecto. Hay superposición de elementos, texturas analógicas y efectos de desenfoque, que imitan una mesa de estudio o un taller creativo donde hay herramientas, bocetos y notas colocadas de forma espontánea.',
                col3: 'Rompe deliberadamente con las reglas clásicas de la retícula digital mediante superposiciones y elementos gráficos que simulan recortes físicos, reflejando una estética underground y contracultural adaptada al soporte web que representa la identidad artística de Ermes sin perder la funcionalidad.'
            },
            {
                tag: 'LA IDENTIDAD VISUAL',
                subtitle: '',
                col2: 'La paleta cromática se apoya en una selección de tonos crudos, contrastes duros y colores de tintas desgastadas que recuerdan a la impresión, ayudando a destacar el contenido. El uso de capas con desenfoques y transparencias permite estructurar los elementos visuales sin perder la ilusión de estar apilando papeles reales.',
                col3: 'Se integran fuentes que evocan el recorte de letras de los fanzines clásicos y la tipografía de imprenta rudimentaria, y se incorporan texturas de papel granulado, bordes irregulares y la estética de la fotocopia de baja fidelidad que aportan un carácter manual y artesanal.'
            },
            {
                tag: 'EL DESARROLLO FRONT-END',
                subtitle: 'Un caos controlado',
                col2: 'En lugar de usar las típicas cuadrículas de las webs corporativas, se emplean configuraciones de grid utilizando unidades fraccionales personalizadas. Esto permite definir pistas flexibles que se adaptan al tamaño de la pantalla. Para lograr esa sensación de papeles superpuestos, recortes y notas que se cruzan entre sí, se combina la cuadrícula con elementos en posicionamiento absoluto, logrando el efecto orgánico de un collage sin romper el diseño general.',
                col3: 'El frontend está desarrollado en html, css y javascript.Todo está calculado mediante media queries y unidades relativas para que, al cambiar de pantalla, el caos se reorganice con coherencia y no colapse visualmente. La landing page tiene dos versiones, la versión ordenada y la versión caótica, dejando al usuario elegir cuál prefiere.'
            },
            {
                tag: 'GESTIÓN DE CONTENIDOS',
                subtitle: 'Autonomía y escalabilidad',
                col2: 'Para garantizar que el proyecto tuviera vida más allá del lanzamiento, se integró un flujo de gestión de contenidos ligero conectado a Netlify. Esto le permite al artista añadir nuevos proyectos, actualizar su archivo o modificar textos de forma totalmente autónoma a través de una interfaz limpia y simplificada.',
                col3: 'Al restringir los campos de entrada mediante una interfaz externa, se evita que el cliente rompa accidentalmente el layout, los estilos CSS o la retícula del porfolio, y el artista puede subir nuevos proyectos sin depender del desarrollador ni necesidad de saber escribir código.'
            },
            {
                tag: 'CONCLUSIONES',
                subtitle: 'Un diseño a medida',
                col2: 'El verdadero reto metodológico del proyecto consistió en equilibrar la libertad expresiva del diseño con la ingeniería de desarrollo. Mientras se mantenía el carácter personal y artesanal del proyecto, se aplicaron criterios técnicos de optimización web, adaptabilidad y rendimiento, entregando un producto final funcional, autónomo y preparado para producción.',
                col3: 'Más allá de servir como un simple repositorio estático de imágenes, la interactividad y el concepto de "mesa de trabajo" logran que los visitantes retengan la experiencia, diferenciando al artista en un mercado saturado de portfolios digitales planos y predecibles.'
            },
		]
	},

	/*MARK : FADE - CASE STUDY / DETAIL PAGE */
	"FADE": {
		en: [
			{
                tag: 'INTERACTIVE EXPERIENCE DEVELOPMENT',
                subtitle: 'Everyday life devoured by nature',
                col2: 'What happens to a dream when you wake up? Explore a world suspended between memory and imagination, where every step erases the last. Move through a surreal landscape of nature and everyday objects as the scenery fragments and disappears behind you. Only the present exists; the past can no longer be recovered.',
                col3: 'Fade is an interactive piece that immerses the user in a dreamlike universe where fantasy landscapes and fragments of everyday life converge. The journey is structured through a fragmented space composed of memories that progressively disintegrate as the player regains lucidity and approaches waking up.'
            },
            {
                tag: 'VISUAL IDENTITY',
                subtitle: 'Floating islands suspended in the void',
                col2: 'FADE presents an aesthetic model meticulously focused on audiovisual and evocative exploration over any complex narrative structure. The visual proposal combines artificial and everyday household elements with a surreal natural environment that defies the laws of gravity. In this space, we encounter elements such as upside-down trees and rock formations floating in suspension.',
                col3: 'The arrangement of objects simulates a scenario where nature has reclaimed the place after a long period of time, leaving behind buried furniture, crooked lamps, and scattered drawers. Furthermore, the scale of all elements is calculated to make the player feel small and isolated, stripping away any sense of control over the environment. The graphic design and color palette transport the user to a dreamlike atmosphere.'
            },
            {
                tag: 'SYMBOLISM AND MEANING',
                subtitle: 'The architecture of dreams',
                col2: 'The piece explores concepts such as dreaming, the mechanisms of memory, and the imagination triggered while asleep. The conceptual premise stems from the experience of waking up, seeking to reflect how the human brain can merge everyday experiences with entirely imagined and distorted spaces.',
                col3: 'The progression of the experience alludes to the ephemeral nature of how we experience dreams in real life. Just as we are unable to retain all of our dream memories upon waking, the game conveys that same sense of loss and melancholy. This concept materializes in an environment where the destruction of the path traveled symbolizes the human inability to hold onto a fading dream, thereby evoking emotions and reflections on the fleeting nature of consciousness.'
            },
            {
                tag: 'CORE MECHANICS',
                subtitle: 'Moving forward to destroy the path',
                col2: 'The actions available to the user within the experience are intentionally limited to walking, jumping, and running freely throughout the available space. The truly significant and transformative action of the piece is the inexorable forward movement through the designed environment. If the player accidentally falls or intentionally jumps off the edges of the path, the system will automatically relocate them. This fall penalty instantly returns the character to the established starting point to restart their journey.',
                col3: 'This mandatory movement automatically triggers the explosion and subsequent destruction of the objects and elements in the space just left behind. The experience prioritizes restful contemplation over urgency, allowing the user to stop and observe the landscape without anything happening until they decide to take the next step.'
            },
            {
                tag: 'UNITY DEVELOPMENT',
                subtitle: 'Simple logic for a complex world',
                col2: 'The elements used in the game were downloaded from free asset repositories and modified to fit the aesthetic and concept of the piece. Unity was used as the development engine, leveraging its capability to render 3D environments and manage complex physics. Unity\'s third-person character controller package was used to manage the camera and the player\'s interaction with the environment.',
                col3: 'The project was programmed in C#, and scripts were implemented to control the player\'s interaction with the environment, as well as to manage the progressive destruction of elements as the user moves forward.'
            },
            {
                tag: 'CONCLUSIONS',
                subtitle: 'The value proposition',
                col2: 'Despite its gameplay simplicity and tight mechanical depth, the piece manages to generate an atmosphere with a strong identity of its own. This work consolidates a value proposition based on visual exploration and atmospheric care rather than superfluous technical complexity.',
                col3: 'It is available for free download on itch.io. The project is in constant development and improvement, with the intention of adding new features and optimizing performance.'
            }
		],
		es: [
			{
                tag: 'DESARROLLO DE EXPERIENCIA INTERACTIVA',
                subtitle: 'La cotidianeidad devorada por la naturaleza',
                col2: '¿Qué ocurre con un sueño cuando despiertas? Explora un mundo suspendido entre la memoria y la imaginación, donde cada paso borra el anterior. Avanza por un paisaje surrealista de naturaleza y objetos cotidianos mientras el escenario se fragmenta y desaparece tras de ti. Solo existe el presente; el pasado ya no puede recuperarse.',
                col3: 'Fade es una pieza interactiva que sumerge al usuario en un universo de ensueño donde convergen paisajes de fantasía y fragmentos de la vida cotidiana. El recorrido se estructura a través de un espacio fragmentado compuesto por recuerdos que se desintegran de forma progresiva a medida que el jugador recupera la lucidez y se aproxima al despertar.'
            },
            {
                tag: 'IDENTIDAD VISUAL',
                subtitle: 'Islas flotantes suspendidas en el vacío',
                col2: 'FADE presenta un modelo estético minuciosamente enfocado en la exploración audiovisual y evocativa por encima de cualquier estructura narrativa compleja. La propuesta visual combina  elementos artificiales y cotidianos propios de un hogar con un entorno natural surrealista que desafía las leyes de la gravedad. En este espacio nos encontramos con elementos como árboles dispuestos boca abajo y formaciones de rocas y piedras flotando en suspensión.',
                col3: 'La disposición de los objetos simula un escenario donde la naturaleza ha reconquistado el lugar tras un largo periodo de tiempo, dejando atrás muebles enterrados, lámparas torcidas y cajones tirados. Además, la escala de todos los elementos está calculada para hacer sentir pequeño y aislado al jugador, despojándolo de cualquier sensación de control sobre el entorno. El diseño gráfico y la paleta de colores transportan al usuario a una atmósfera onírica.'
            },
            {
                tag: 'SIMBOLISMO Y SIGNIFICADO',
                subtitle: 'La arquitectura de los sueños',
                col2: 'La obra explora conceptos como el sueño, los mecanismos de la memoria y la imaginación que se activan al soñar. La premisa conceptual parte de la vivencia de un despertar, y busca reflejar cómo el cerebro humano es capaz de fusionar las experiencias cotidianas con espacios totalmente imaginados y distorsionados.',
                col3: 'La progresión de la experiencia alude a la naturaleza efímera con la que experimentamos los sueños en la vida real. Del mismo modo que al despertar somos incapaces de retener la totalidad de los recuerdos oníricos, el juego transmite esa misma sensación de pérdida y melancolía. El concepto se materializa en un entorno donde la destrucción del camino recorrido simboliza la imposibilidad humana de aferrarse al sueño que se desvanece, y el juego evoca así emociones y reflexiones sobre la fugacidad de la conciencia.'
            },
            {
                tag: 'MECÁNICA PRINCIPAL',
                subtitle: 'Avanzar para destruir el camino',
                col2: 'Las acciones realizables por el usuario dentro de la experiencia se limitan de manera intencionada a andar, saltar y correr libremente por todo el espacio disponible. La acción verdaderamente significativa y transformadora de la obra es el avance inexorable a través del entorno diseñado. Si el jugador sufre una caída accidental o se precipita intencionadamente por los bordes del camino, el sistema lo reubicará automáticamente. Esta penalización por caída devuelve al personaje de manera instantánea al punto de inicio establecido para relanzar su recorrido.',
                col3: 'Este desplazamiento obligatorio detona de forma automática la explosión y la destrucción subsiguiente de los objetos y elementos del espacio anterior que se acaba de dejar atrás. La experiencia prioriza la contemplación reposada frente a la urgencia, permitiendo que el usuario se detenga a observar el paisaje sin que nada ocurra hasta decidir dar el siguiente paso.'
            },
            {
                tag: 'DESARROLLO EN UNITY',
                subtitle: 'Lógicas simples para un mundo complejo',
                col2: 'Los elementos utilizados en el juego se descargaron de repositorios de assets gratuitos y se modificaron para adaptarlos a la estética y el concepto de la obra. Se empleó Unity como motor de desarrollo, aprovechando su capacidad para renderizar entornos 3D y gestionar físicas complejas. Se utilizó el paquete de personaje en tercera persona de Unity para controlar la cámara y la interacción del jugador con el entorno.',
                col3: ' El proyecto se programó en C# y se implementaron scripts para controlar la interacción del jugador con el entorno, así como para gestionar la destrucción progresiva de los elementos a medida que el usuario avanza.'
            },
            {
                tag: 'CONCLUSIONES',
                subtitle: 'La propuesta de valor',
                col2: 'A pesar de su sencillez lúdica y su ajustada profundidad de mecánicas, la obra consigue generar una atmósfera dotada de una fuerte identidad propia. Este trabajo consolida una propuesta de valor basada en la exploración visual y el cuidado atmosférico por encima de la complejidad técnica superflua.',
                col3: 'Está disponible para descargar gratuitamente en itch.io. El proyecto se encuentra en constante desarrollo y mejora, con la intención de añadir nuevas funcionalidades y optimizar el rendimiento.'
            }
		]
	},

	/*MARK: HUDDLE - CASE STUDY / DETAIL PAGE */
	"MICROSOFT HUDDLE": {
		en: [
			{
                tag: 'STRATEGIC DESIGN',
                subtitle: 'The Microsoft ecosystem in a gamified experience',
                col2: 'This project was part of a hackathon organized by Minsait Xtudio at the Complutense University of Madrid. Working in pairs, designers developed innovative strategic design solutions. The challenge consisted of analyzing different established corporate brands to propose a comprehensive strategic design capable of modernizing them and bringing them closer to new generations.',
                col3: 'Taking Microsoft as the case study, the project addresses the need to transform a brand traditionally perceived as a purely rigid or productivity-focused environment into an aspirational, culturally relevant, and creative platform that connects with Generation Z and Millennials.'
            },
            {
                tag: 'RESEARCH AND USERS',
                subtitle: 'Transforming friction into opportunities',
                col2: 'Microsoft\'s current market position was analyzed against competitors across multiple sectors, such as operating systems, cloud computing, productivity software, hardware, and video games. Key user profiles were defined to understand their needs and friction points.',
                col3: 'A SWOT analysis was structured, identifying that the brand is perceived as reliable and strong in productivity, but with a rigid corporate culture disconnected from newer generations. Subsequently, the foundations for a new communication strategy were established, aimed at a more relatable, human, and conversational language on social media, incorporating humor, memes, and a refreshed aesthetic.'
            },
            {
                tag: 'IDEATION',
                subtitle: 'Redefining the relationship with the brand',
                col2: 'A brainstorming and categorization process of strategic proposals was conducted to modernize the brand. Various disruptive solutions were conceptualized in the realms of entertainment, the metaverse, product design, and software.',
                col3: "From there, the most interesting and viable features for the brand were established, such as creating a virtual space for social interaction and entertainment, integrating an AI assistant with its own personality, and implementing a gamification system to encourage user participation and engagement."
            },
            {
                tag: 'FLOWCHARTS AND ARCHITECTURE',
                subtitle: 'A collaborative metaverse',
                col2: 'The architecture is structured as a lightweight, modular metaverse focused on education and youth. The flow begins with the user entering a customizable initial blank space that distributes access to different thematic zones and buildings.',
                col3: "It features a top navigation bar and floating menus that allow users to switch between profile management, navigation maps, and productivity tools. It seamlessly integrates the use of Microsoft 365 applications like OneDrive, Loop, Teams, Word, and Excel within the immersive environment itself. It connects traditional office software with touch surfaces, video calls, and real-time collaborative digital whiteboards."
            },
            {
                tag: 'VISUAL IDENTITY',
                subtitle: 'Lo-fi aesthetics applied to corporate design',
                col2: 'The visual identity of Microsoft Huddle draws directly from productivity lo-fi aesthetics, cozy video games (like Animal Crossing or Loftia), and the recent visual guidelines of Microsoft Design and Copilot. It is based on primary tones of purple, blue, and pink, complemented by soft gradients and a fluid color palette that breaks away from the brand\'s classic corporate rigidity.',
                col3: 'It uses Segoe UI, Microsoft\'s corporate typeface and distinctive identity, ensuring readability and a direct link to the company\'s ecosystem. It opts for a style based on fluid lines, blurred transitions, formal simplicity without heavy shadows, and clean three-dimensional elements that convey warmth, modernity, and dynamism.'
            },
            {
                tag: 'THE VIRTUAL SPACE',
                subtitle: 'Customizable avatars and adapted environments',
                col2: 'It is conceived as an immersive digital environment divided into specific rooms or spaces for high schools, universities, or study groups. Each zone of the virtual space hosts the different applications, documents, and projects being collaborated on in a distributed manner.',
                col3: 'It integrates leisure areas, virtual cafeterias, and coworking spaces with gamified networking dynamics. By using the map or exploring the different rooms of the metaverse, users can select the specific workspace or study area they need.'
            },
            {
                tag: 'COPILOT',
                subtitle: 'Your smart virtual companion',
                col2: 'Copilot transforms into an interactive avatar integrated within the metaverse (a virtual companion or pilot) accessible from the corners of the interface. It offers advanced assistance through text summaries, information searches, direct feedback on documents, and the creation of outlines or concept maps.',
                col3: 'It acts proactively by leaving notifications and comments on documents, such as reminding users of upcoming exams or deadlines. Furthermore, it allows for the customization of its appearance and behavior, adapting to the user\'s preferences and fostering interaction and engagement.'
            },
            {
                col2: 'Users can configure personalized avatars with a visual style similar to social simulation video games. It offers options to modify interface colors, typographic sizes, and adapt the environmental lighting according to the study theme.',
                col3: 'It includes the ability to add background music to optimize concentration and productivity during work sessions.'
            },
            {
                tag: 'COMMUNICATION STRATEGY',
                subtitle: 'Reconnecting with Generation Z',
                col2: "It aims to transform Microsoft\'s perception through a more relatable, human, conversational, and engaging language on social media. It uses dynamic campaigns on platforms like TikTok, Instagram, and Twitch, relying on content creators, streamers, and tech reviewers.",
                col3:  "It incorporates digital culture, memes, and youth entertainment dynamics. The goal is to generate engagement and virality, reinforcing the perception of Microsoft as a modern, creative brand that is close to new generations."
            },
            {
                tag: 'THE PROTOTYPE',
                subtitle: 'An interactive 3D prototype',
                col2: 'On a technical level, the functional prototype covered a basic navigation flow and the implementation of the initial onboarding process guided by the assistant, helping to visualize the user experience. A basic 3D model of a couple of rooms was built as a visual interactive mockup, simulating the aesthetic of the virtual space without featuring actual execution logic.',
                col3: 'The development also encompassed the visual identity design, the avatar customization system, the user interface of the integrated applications, and the production of an explanatory introductory trailer and website.'
            }
		],
		es: [
			{
                tag: 'DISEÑO ESTRATÉGICO',
                subtitle: 'El ecosistema de Microsoft en una experiencia gamificada',
                col2: 'Este proyecto formó parte del hackaton propuesto por Minsait Xtudio en la Universidad Complutense de Madrid, donde se trabajó en parejas de diseñadores para desarrollar soluciones innovadoras de diseño estratégico. El reto consistió en analizar diferentes marcas corporativas consolidadas para plantear una propuesta integral de diseño estratégico capaz de modernizarlas y acercarlas a las nuevas generaciones. ',
                col3: 'Tomando a Microsoft como objeto de estudio, el proyecto aborda la necesidad de transformar una marca tradicionalmente percibida como un entorno puramente rígido o de productividad en una plataforma aspiracional, culturalmente relevante, creativa y cercana a la Generación Z y Millennials.'
            },
            {
                tag: 'INVESTIGACIÓN Y USUARIOS',
                subtitle: 'Transformar las fricciones en oportunidades',
                col2: 'Se analizó la posición actual de Microsoft en el mercado frente a la competencia en múltiples sectores, como sistemas operativos, computación en nube, software de productividad, hardware y videojuegos.  Se definieron perfiles de usuario clave para entender sus necesidades y fricciones.',
                col3: 'Se estructuró un análisis DAFO para identificar que la marca es percibida como confiable y con fuerte presencia en productividad, pero con una cultura corporativa rígida y desconectada de las nuevas generaciones. Posteriormente, se establecieron los cimientos de la nueva estrategia de comunicación orientada a un lenguaje más cercano, humano y conversacional en redes sociales, incorporando humor, memes y una estética renovada.'
            },
            {
                tag: 'IDEACIÓN',
                subtitle: 'Redefinir la relación con la marca',
                col2: 'Se realizó un proceso de brainstorming y categorización de propuestas estratégicas para modernizar la marca. Se idearon diferentes soluciones disruptivas en el ámbito del entretenimiento y el metaverso y en producto y software.',
                col3: "A partir de aquí, se establecieron las funcionalidades más interesantes y viables para la marca, como la creación de un espacio virtual de interacción social y entretenimiento, la integración de un asistente de inteligencia artificial con personalidad propia, y la implementación de un sistema de gamificación para fomentar la participación y el compromiso del usuario."
            },
            {
                tag: 'DIAGRAMAS DE FLUJO Y ARQUITECTURA',
                subtitle: 'Un metaverso colaborativo',
                col2: 'La arquitectura se estructura como un metaverso ligero y modular enfocado al ámbito educativo y juvenil. El flujo comienza con la entrada del usuario a un espacio blanco inicial personalizable que distribuye el acceso a diferentes zonas y edificios temáticos.',
                col3: "Cuenta con una barra superior de navegación y menús flotantes que permiten alternar entre la gestión de perfiles, mapas de navegación y herramientas de productividad. Integra de manera fluida el uso de aplicaciones de Microsoft 365 como OneDrive, Loop, Teams, Word y Excel dentro del propio entorno inmersivo. Conecta la ofimática tradicional con superficies táctiles, videollamadas y pizarras digitales colaborativas en tiempo real."
            },
            {
                tag: 'IDENTIDAD VISUAL',
                subtitle: 'Estética lo-fi aplicada al diseño corporativo',
                col2: 'La identidad visual de Microsoft Huddle bebe directamente de la estética lo-fi de productividad, los videojuegos de estilo acogedor (cozy games como Animal Crossing o Loftia) y las líneas visuales recientes de Microsoft Design y Copilot. Se fundamenta en tonos principales morados, azules y rosas, complementados por degradados suaves y una gama cromática fluida que rompe con la rigidez corporativa clásica de la marca.',
                col3: 'Utiliza Segoe UI, la tipografía corporativa e identidad distintiva de Microsoft, asegurando legibilidad y un vínculo directo con el ecosistema de la compañía. Apuesta por un estilo basado en líneas fluidas, transiciones difuminadas, simplicidad formal sin sombras pesadas y elementos tridimensionales limpios que transmiten cercanía, modernidad y dinamismo.'
            },
            {
                tag: 'EL ESPACIO VIRTUAL',
                subtitle: 'Avatares customizables y entornos adaptados',
                col2: 'Se concibe como un entorno digital inmersivo dividido en salas, habitaciones o rooms específicas para institutos, universidades o grupos de estudio. Cada zona del espacio virtual aloja de forma distribuida las diferentes aplicaciones, documentos y proyectos en los que se esté trabajando de forma conjunta.',
                col3: 'Integra áreas de ocio, cafeterías virtuales y espacios de coworking con dinámicas de networking gamificadas. A través del mapa o explorando las diferentes salas del metaverso, el usuario selecciona el espacio de trabajo o estudio específico que necesita.'
            },
			{
                tag: 'COPILOT',
                subtitle: 'Tu compañero virtual inteligente',
                col2: 'Copilot se transforma en un avatar interactivo integrado dentro del metaverso (un compañero o piloto virtual) accesible desde las esquinas de la interfaz. Ofrece asistencia avanzada mediante resúmenes de textos, búsqueda de información, feedback directo en documentos y creación de esquemas o mapas conceptuales.  ',
                col3: 'Actúa de forma proactiva dejando notificaciones y comentarios en los documentos, como avisar de exámenes pendientes o plazos de entrega. Además, permite la personalización de su apariencia y comportamiento, adaptándose a las preferencias del usuario y fomentando la interacción y el compromiso.'
            },
			{
                col2: 'Se permite a los usuarios configurar avatares personalizados con un estilo visual cercano al de los videojuegos de simulación social. Ofrece opciones para modificar los colores de la interfaz, tamaños tipográficos y adaptar las luces del entorno según la temática de estudio. ',
                col3: 'Incluye la posibilidad de añadir música de fondo para optimizar la concentración y la productividad durante las sesiones de trabajo.  '
            },
            {
                tag: 'ESTRATEGIA DE COMUNICACIÓN',
                subtitle: 'Reconectar con la Generación Z',
                col2: "Se orienta a transformar la percepción de Microsoft mediante un lenguaje más cercano, humano, conversacional y relatable en redes sociales. Utiliza campañas dinámicas en plataformas como TikTok, Instagram y Twitch apoyándose en creadores de contenido, streamers y tech reviewers. ",
                col3:  "Incorpora la cultura digital, los memes y dinámicas de entretenimiento juvenil. Se busca generar engagement y viralidad, reforzando la percepción de Microsoft como una marca moderna, creativa y cercana las nuevas generaciones."
            },
            {
                tag: 'EL PROTOTIPO',
                subtitle: 'Un prototipo interactivo en 3D',
                col2: 'A nivel técnico, el prototipo funcional abarcó un recorrido básico de navegación y la implementación del flujo de onboarding inicial guiado por el asistente, para ayudar a visualizar la experiencia del usuario. Se construyó un modelo básico de un par de salas en 3D a modo de mockup interactivo visual, simulando la estética del espacio virtual sin llegar a contar con lógica de ejecución real.',
                col3: 'El desarrollo abarcó además el diseño de la identidad visual, el sistema de personalización de avatares, la interfaz de usuario de las aplicaciones integradas y la producción de un tráiler y web de introducción explicativos.'
            }
		]
	},

    
	DEFAULT: {
		en: [
			{
				tag: 'CASE STUDY',
				subtitle: 'Project details under construction.',
				col2: 'We are documenting the design process, challenges encountered, and solutions implemented for this project. Check back soon for the full case study.',
				col3: 'The documentation will include wireframes, brand strategy, color palette, and the final product development.'
			}
		],
		es: [
			{
				tag: 'CASO DE ESTUDIO',
				subtitle: 'Detalles del proyecto en construcción.',
				col2: 'Estamos documentando el proceso de diseño, los retos encontrados y las soluciones implementadas para este proyecto. Vuelve pronto para leer el caso de estudio completo.',
				col3: 'La documentación incluirá wireframes, estrategia de marca, paleta de colores y el desarrollo del producto final.'
			}
		]
	}
}

// MARK: PROJECTS - INDEX / GRID BASE LIST
const projects = [
	{ id: '01', title: 'TRANSPAPELADES', category: 'web', seed: 'transpapelades', projectUrl: 'https://www.figma.com/proto/3DFEMbsYkkBTMtyLTK1JZm/Transpapelades?node-id=909-23563&viewport=328%2C554%2C0.02&t=Rcr2OJrNfdRrTgkx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=909%3A23563&show-proto-sidebar=1&page-id=97%3A2' },
	{ id: '02', title: 'ECHAR RAÍCES', category: 'web, gameDev', seed: 'echar-raices', projectUrl: 'https://alec-rodriguez.itch.io/echar-raices' },
	{ id: '03', title: 'ENTRELÍNEAS', category: 'uxui', seed: 'entrelineas', projectUrl: 'https://www.figma.com/design/1OCW04zQOmjOtNLwMURRsw/Entrel%C3%ADneas---AlecRodr%C3%ADguez?node-id=12-2&t=I4y2LlIt64Dla7Gi-1' },
	{ id: '04', title: 'ERMES OLEA PORFOLIO', category: 'web', seed: 'ermes-olea-porfolio', projectUrl: 'https://ermes-olea.netlify.app/' },
	{ id: '05', title: 'FADE', category: 'gameDev, threed', seed: 'fade', projectUrl: 'https://alec-rodriguez.itch.io/fade' },
	{ id: '06', title: 'MICROSOFT HUDDLE', category: 'gameDev, web, threed', seed: 'microsoft-huddle', projectUrl: 'https://microsofthuddle.framer.website/' },
]

// MARK: HOME - INDEX COLLAGE LAYOUT
// Each item can optionally define breakpoint-specific overrides:
// mobile: { x, y, w, scale }
// tablet: { x, y, w, scale }
const projectMontageLayout = {
	'01': [
		{ src: '/trabajos/transpapelades-1.png', x: 22, y: 65, w: 34, z: 2 },
		{ src: '/trabajos/transpapelades-2.png', x: 60, y: 60, w: 14, z: 1 },
		{ src: '/trabajos/transpapelades-4.png', x: 50, y: 44, w: 14, z: 4 },
		{ src: '/trabajos/transpapelades-3.jpg', x: 82, y: 34, w: 24, z: 3 },
	],
	'02': [
		{ src: '/trabajos/Echar-raices 04.png', x: 19, y: 52, w: 13, z: 5 },
		{ src: '/trabajos/Echar-raices 02.png', x: 46, y: 48, w: 24, z: 2 },
		{ src: '/trabajos/Echar-raices 03.png', x: 76, y: 45, w: 24, z: 3 },
		{ src: '/trabajos/Echar-raices 01.png', x: 88, y: 61, w: 14, z: 4 },
		{ src: '/trabajos/Echar-raices 05.png', x: 32, y: 78, w: 22, z: 4 },
	],
	'03': [
		{ src: '/trabajos/Entrelineas 04.png', x: 35, y: 44, w: 38, z: 2 },
		{ src: '/trabajos/Entrelineas 02.png', x: 32, y: 68, w: 9, z: 5 },
		{ src: '/trabajos/Entrelineas 01.png', x: 70, y: 64, w: 23, z: 5 },
		{ src: '/trabajos/Entrelineas 03.png', x: 82, y: 40, w: 16, z: 4 },
        { src: '/trabajos/Entrelineas 05.png', x: 17, y: 78, w: 8, z: 4 },
	],
	'04': [
		{ src: '/trabajos/E-porfolio.png', x: 21, y: 66, w: 32, z: 2 },
		{ src: '/trabajos/E-porfolio-2.png', x: 38, y: 38, w: 12, z: 4 },
		{ src: '/trabajos/E-porfolio-1.png', x: 78, y: 40, w: 22, z: 3 },
		{ src: '/trabajos/E-porfolio-3.png', x: 58, y: 62, w: 11, z: 5 },
        { src: '/trabajos/E-porfolio-4.png', x: 58, y: 24, w: 8, z: 5 },
	],
	'05': [
		{ src: '/trabajos/Fade04.png', x: 27, y: 62, w: 32, z: 2 },
		{ src: '/trabajos/Fade02.png', x: 40, y: 27, w: 20, z: 4 },
		{ src: '/trabajos/Fade03.png', x: 80, y: 38, w: 25, z: 3 },
		{ src: '/trabajos/Fade01.png', x: 63, y: 74, w: 18, z: 5 },
	],
	'06': [
		{ src: '/trabajos/Huddle 02.png', x: 40, y: 42, w: 35, z: 4 },
		{ src: '/trabajos/Huddle 03.png', x: 20, y: 68, w: 30, z: 2 },
		{ src: '/trabajos/Huddle 01.png', x: 65, y: 76, w: 16, z: 3 },
		{ src: '/trabajos/Huddle 04.png', x: 84, y: 39, w: 14, z: 5 },
	],
}

// MARK: PROJECT DETAIL - DISTINCT IMAGES FROM COVER
const projectDetailImages = {
	'01': ['/trabajos/transpapelades-1.png', '/trabajos/transpapelades-1.png', '/trabajos/transpapelades-2.png', '/trabajos/transpapelades-4.png'],
	'02': ['/trabajos/Echar-raices 02.png', '/trabajos/Echar-raices 04.png', '/trabajos/Echar-raices 01.png', '/trabajos/Echar-raices 03.png'],
	'03': ['/trabajos/Entrelineas 04.png', '/trabajos/Entrelineas 01.png', '/trabajos/Entrelineas 03.png', '/trabajos/Entrelineas 02.png'],
	'04': ['/trabajos/E-porfolio.png', '/trabajos/E-porfolio-2.png', '/trabajos/E-porfolio-3.png', '/trabajos/E-porfolio-1.png'],
	'05': ['/trabajos/Fade03.png', '/trabajos/Fade04.png', '/trabajos/Fade01.png', '/trabajos/Fade02.png'],
	'06': ['/trabajos/Huddle 03.png', '/trabajos/Huddle 01.png', '/trabajos/Huddle 04.png', '/trabajos/Huddle 02.png'],
}

// MARK: PROJECT DETAIL PAGE - SEPARATE IMAGES FROM GRID
const projectPageImages = {
	'01': ['/trabajos/transpapelades-1.png', '/trabajos/Transpapelades 13.mp4',  "/trabajos/Transpapelades 14.png", '/trabajos/Transpapelades 09.mp4', '/trabajos/Transpapelades 10.png', '/trabajos/Transpapelades 12.png', '/trabajos/Transpapelades 11.png', '/trabajos/Transpapelades - user 1.png', '/trabajos/Transpapelades - user 3.png', '/trabajos/Transpapelades - ideacion 1.png', '/trabajos/Transpapelades - ideacion 2.png','/trabajos/Transpapelades - identidad 5.mp4', '/trabajos/Transpapelades - identidad 1.png', '/trabajos/Transpapelades - identidad 2.png', '/trabajos/Transpapelades - identidad 3.png', '/trabajos/Transpapelades - identidad 4.png', '/trabajos/Transpapelades 15.mp4', '/trabajos/Transpapelades - web  1.png', '/trabajos/Transpapelades - web  2.png', '/trabajos/Transpapelades - web  3.png', '/trabajos/Transpapelades - web  4.png', '/trabajos/Transpapelades - web  5.mp4', '/trabajos/Transpapelades - rrss 2.png', '/trabajos/Transpapelades - rrss 1.png', '/trabajos/Transpapelades - rrss 6.png','/trabajos/Transpapelades - rrss 4.mp4', '/trabajos/Transpapelades - rrss 5.mp4', '/trabajos/Transpapelades - rrss 3.png',],

	'02': ['/trabajos/Echar-raices 05.png', '/trabajos/Echar - raices historia - 1.mp4', '/trabajos/Echar - raices historia - 2.png', '/trabajos/Echar - raices historia - 3.mp4', '/trabajos/Echar - raices visual - 1.png', '/trabajos/Echar-raices 01.png', '/trabajos/Echar-raices 03.png', '/trabajos/Echar-raices 02.png', "/trabajos/Echar - raices visual - 4.gif", "/trabajos/Echar - raices codigo - 1.mp4", "/trabajos/Echar - raices codigo - 2.png", "/trabajos/Echar - raices codigo - 3.png", "/trabajos/Echar - raices flujo - 1.png", "/trabajos/Echar - raices flujo - 2.gif", "/trabajos/Echar - raices visual - 4.gif","/trabajos/Echar - raices flujo - 3.gif", "/trabajos/Echar - raices flujo - 4.png", "/trabajos/Echar - raices uxui - 1.png", "/trabajos/Echar - raices uxui - 2.png", "/trabajos/Echar - raices uxui - 3.png"],

	'03': ['/trabajos/Entrelineas inicio - 1.mp4', '/trabajos/Entrelineas inicio - 2.mp4', '/trabajos/Entrelineas inicio - 3.mp4', '/trabajos/Entrelineas inicio - 4.png', '/trabajos/Entrelineas research - 1.png', '/trabajos/Entrelineas ideation - 1.png', '/trabajos/Entrelineas ideation - 2.png', '/trabajos/Entrelineas ideation - 3.png', '/trabajos/Entrelineas ideation - 4.png', '/trabajos/Entrelineas ideation - 5.png', '/trabajos/Entrelineas ideation - 6.png', '/trabajos/Entrelineas ideation - 7.png',],

	'04': ['/trabajos/E-porfolio.png', '/trabajos/E-porfolio-2.png', '/trabajos/E-porfolio-3.png', '/trabajos/E-porfolio-1.png'],
	'05': ['/trabajos/Fade03.png', '/trabajos/Fade04.png', '/trabajos/Fade01.png', '/trabajos/Fade02.png'],
	'06': ['/trabajos/Huddle 03.png', '/trabajos/Huddle 01.png', '/trabajos/Huddle 04.png', '/trabajos/Huddle 02.png'],
}

// MARK: PROJECT DETAIL PAGE - IMAGE SPANS (1, 2, OR 4)
const projectPageImageSpans = {
	'01': [4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 4, 2, 2, 4, 1, 1, 2],
	'02': [ 4, 2, 2, 4, 2, 2, 4, 1, 3, 4, 2, 2, 4, 2, 2, 2, 2, 4, 2, 2],
	'03': [4, 2, 2, 4, 4, 1, 1, 2, 1, 1, 1, 1],
	'04': [3, 2, 1, 1],
	'05': [2, 1, 1, 2],
	'06': [4, 2, 1, 1],
}

// MARK: PROJECT DETAIL PAGE - TEXT EVERY N IMAGES (number or pattern array)
const projectPageTextEveryImages = {
	'01': [6, 2, 2, 6, 0, 5, 5],
	'02': [0, 3, 5, 3, 5, 3],
	'03': [3, 1, 8],
	'04': 1,
	'05': 2,
	'06': 1,
}

// MARK: GRID VIEW - PER LANGUAGE PROJECT CARDS
const gridProjectsByLanguage = {
	en: [
		{ id: 'g-1', category: 'web', title: 'TRANSPAPELADES', year: '2024', disciplines: 'WEB', images: ['/trabajos/transpapelades-1.png'] },
		{ id: 'g-2', category: 'web, gameDev', title: 'ECHAR RAICES', year: '2024', disciplines: 'WEB / GAME-DEV', images: ['/trabajos/Echar-raices 03.png', '/trabajos/Echar-raices 05.png', '/trabajos/Echar-raices 01.png'] },
		{ id: 'g-3', category: 'uxui', title: 'ENTRELINEAS', year: '2024', disciplines: 'UX/UI', images: ['/trabajos/Entrelineas 01.png', '/trabajos/Entrelineas 04.png'] },
		{ id: 'g-4', category: 'web', title: 'ERMES OLEA PORFOLIO', year: '2024', disciplines: 'WEB', images: ['/trabajos/E-porfolio-1.png',  '/trabajos/E-porfolio-3.png', '/trabajos/E-porfolio.png'] },
		{ id: 'g-5', category: 'gameDev, threed', title: 'FADE', year: '2024', disciplines: 'GAME-DEV / 3D', images: ['/trabajos/Fade04.png', '/trabajos/Fade02.png'] },
		{ id: 'g-6', category: 'gameDev, web, threed', title: 'MICROSOFT HUDDLE', year: '2024', disciplines: 'GAME-DEV / WEB / 3D', images: ['/trabajos/Huddle 01.png', '/trabajos/Huddle 03.png', '/trabajos/Huddle 02.png'] },
	],
	es: [
		{ id: 'g-1', category: 'web', title: 'TRANSPAPELADES', year: '2024', disciplines: 'WEB', images: ['/trabajos/transpapelades-1.png'] },
		{ id: 'g-2', category: 'web, gameDev', title: 'ECHAR RAICES', year: '2024', disciplines: 'WEB / GAME-DEV', images: ['/trabajos/Echar-raices 01.png', '/trabajos/Echar-raices 02.png', '/trabajos/Echar-raices 03.png'] },
		{ id: 'g-3', category: 'uxui', title: 'ENTRELINEAS', year: '2024', disciplines: 'UX/UI', images: ['/trabajos/Entrelineas 01.png', '/trabajos/Entrelineas 02.png'] },
		{ id: 'g-4', category: 'web', title: 'ERMES OLEA PORFOLIO', year: '2024', disciplines: 'WEB', images: ['/trabajos/E-porfolio-1.png', '/trabajos/E-porfolio-2.png', '/trabajos/E-porfolio-3.png'] },
		{ id: 'g-5', category: 'gameDev, threed', title: 'FADE', year: '2024', disciplines: 'GAME-DEV / 3D', images: ['/trabajos/Fade01.png', '/trabajos/Fade02.png'] },
		{ id: 'g-6', category: 'gameDev, web, threed', title: 'MICROSOFT HUDDLE', year: '2024', disciplines: 'GAME-DEV / WEB / 3D', images: ['/trabajos/Huddle 01.png', '/trabajos/Huddle 02.png'] },
	]
}

// MARK: PUBLIC API - SINGLE OBJECT FOR THE APP
export const siteContent = {
	translations: homeTranslations,
	aboutContent,
	textDatabase,
	projects,
	projectMontageLayout,
	projectDetailImages,
	projectPageImages,
	projectPageImageSpans,
	projectPageTextEveryImages,
	gridProjectsByLanguage,
}
