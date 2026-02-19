type ResumeData = {
	name: string;
	title: string;
	summary: string;
	email: string;
	phone: string;
	location: string;
	birthDate: string;
	vehicle: Vehicle;
	website: Link;
	social: {
		linkedin: Link;
		github: Link;
	};
	skills: Skill[];
	languages: Language[];
	hobbies: Hobby[];
	experiences: Experience[];
	projects: Project[];
	education: Education[];
};

type Education = {
	id: number;
	school: string;
	degree: string;
	year: string;
	specialization: string;
};

type Project = {
	id: number;
	title: string;
	description: string;
	link?: string;
	github?: string;
	tags: Tag[];
	image: string;
};

type Experience = {
	id: number;
	company: string;
	role: string;
	period: string;
	type: string;
	description: string;
	details: ExperienceDetails[];
	technologies: Technology[];
	formations: Formation[];
};

type ExperienceDetails = {
	id: number;
	body: string;
};

export type Hobby = {
	id: number;
	label: string;
	detail?: string;
	duration?: string;
};

type Language = {
	id: number;
	label: string;
	level: string;
};

type Vehicle = {
	carLicense: boolean;
	vehicule: boolean;
};

type Skill = {
	id: number;
	category: string;
	items: SkillItem[];
};

export type Technology = Pick<SkillItem, "id" | "label">;
type Formation = Pick<Technology, "id" | "label">;
type Tag = Pick<Technology, "id" | "label">;

export type SkillItem = {
	id: number;
	label: string;
};

type Link = {
	label: string;
	url: string;
};

export const resumeData: ResumeData = {
	name: "jeyofdev",
	title: "Fullstack Developer",
	summary:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem quam, dictum sed condimentum quis, condimentum sit amet tortor. Maecenas blandit tellus ex. Maecenas orci nibh, suscipit et pellentesque a, sodales quis ante. Ut at lacus hendrerit, aliquam dui cursus, euismod erat. Aliquam ac ipsum finibus, suscipit lacus vel, luctus lorem. Sed ipsum nibh, aliquet consequat dignissim eget, efficitur vitae est. Praesent interdum quam arcu, eu faucibus libero hendrerit et. Aliquam viverra semper lacus et pretium. Nam at molestie quam, eget imperdiet magna. Nunc non nibh in augue tristique molestie eu at erat. Vivamus erat arcu, bibendum id facilisis at, semper ultrices lacus.",
	email: "jeyofdev@tech.io",
	phone: "+33 6 12 34 56 78",
	location: "Paris, France",
	birthDate: "15 May 1994",
	vehicle: {
		carLicense: true,
		vehicule: true,
	},
	website: {
		label: "jeyofdev.dev",
		url: "http://jeyofdev.dev",
	},
	social: {
		linkedin: {
			label: "jeyofdev",
			url: "linkedin.com/in/jeyofdev",
		},
		github: {
			label: "jeyofdev",
			url: "github.com/jeyofdev",
		},
	},

	skills: [
		{
			id: 1,
			category: "Frontend",
			items: [
				{ id: 1, label: "React" },
				{ id: 2, label: "Typescript" },
				{ id: 3, label: "Tailwind CSS" },
				{ id: 4, label: "Next.js" },
			],
		},
		{
			id: 2,
			category: "Backend",
			items: [
				{ id: 1, label: "Node.js" },
				{ id: 2, label: "PostgreSQL" },
				{ id: 3, label: "Redis" },
				{ id: 4, label: "GraphQL" },
			],
		},
		{
			id: 3,
			category: "Tools",
			items: [
				{ id: 1, label: "Docker" },
				{ id: 2, label: "AWS" },
				{ id: 3, label: "GitLab CI" },
			],
		},
	],
	languages: [
		{ id: 1, label: "Français", level: "Maternel" },
		{ id: 2, label: "Anglais", level: "Professionnel" },
		{ id: 3, label: "Espagnol", level: "Intermédiaire" },
	],
	hobbies: [
		{ id: 1, label: "Photographie", detail: "Photo de rue", duration: "5 ans" },
		{ id: 2, label: "Randonnée", detail: "Sentiers de montagne" },
		{ id: 3, label: "Open Source" },
		{ id: 4, label: "Guitare", duration: "3 ans" },
	],
	experiences: [
		{
			id: 1,
			company: "TechCorp",
			role: "Développeuse Fullstack Senior",
			period: "2022 – Présent",
			type: "CDI",
			description:
				"Direction du développement d'une plateforme SaaS utilisée par 10k+ utilisateurs. Architecture microservices et frontend React.",
			details: [
				{
					id: 1,
					body: "Conception et implémentation de l'architecture frontend (monorepo, bibliothèque de composants partagés)",
				},
				{ id: 2, body: "Création d'un système de notifications temps réel via WebSockets et Redis pub/sub" },
				{ id: 3, body: "Migration du code legacy de JavaScript vers TypeScript (200+ fichiers)" },
				{ id: 4, body: "Implémentation d'un contrôle d'accès basé sur les rôles (RBAC) sur toute la plateforme" },
				{ id: 5, body: "Mise en place de tests automatisés avec 85% de couverture (unitaires, intégration, E2E)" },
				{ id: 6, body: "Pilotage de la migration de REST vers GraphQL pour l'API principale" },
			],
			formations: [
				{ id: 1, label: "Certifications AWS Solutions Architect & Docker Certified Associate" },
				{ id: 2, label: "Conférencière régulière à React Europe et Node Summit" },
			],
			technologies: [
				{ id: 1, label: "React" },
				{ id: 2, label: "TypeScript" },
				{ id: 3, label: "Node.js" },
				{ id: 4, label: "PostgreSQL" },
				{ id: 5, label: "GraphQL" },
				{ id: 6, label: "Redis" },
				{ id: 7, label: "Docker" },
				{ id: 8, label: "AWS" },
			],
		},
		{
			id: 2,
			company: "Global Web Agency",
			role: "Fullstack Engineer",
			period: "Aug 2018 – Dec 2020",
			type: "CDI",
			description: "Équipe de 8 développeurs au sein d'une société produit de 50 personnes. Méthodologie Agile/Scrum.",
			details: [
				{ id: 1, body: "Développement de fonctionnalités critiques pour des clients internationaux" },
				{ id: 2, body: "Optimisation des performances de rendu côté client" },
				{ id: 3, body: "Mise en place de pipelines CI/CD" },
				{ id: 4, body: "Support technique et maintenance évolutive" },
			],
			formations: [],
			technologies: [
				{ id: 1, label: "React" },
				{ id: 2, label: "TypeScript" },
				{ id: 3, label: "Node.js" },
				{ id: 4, label: "PostgreSQL" },
				{ id: 5, label: "GraphQL" },
				{ id: 6, label: "Docker" },
			],
		},
	],
	projects: [
		{
			id: 1,
			title: "OmniTask AI",
			description:
				"A comprehensive project management tool with AI-assisted task prioritization and automatic documentation generation.",
			tags: [
				{ id: 1, label: "Next.js" },
				{ id: 2, label: "PostgreSQL" },
				{ id: 3, label: "Tailwind CSS" },
			],
			image: "https://picsum.photos/seed/omnitask/600/400",
			github: "#",
		},
		{
			id: 2,
			title: "PulseCommerce",
			description:
				"A high-performance headless e-commerce engine built for extreme scalability and 100ms response times.",
			tags: [
				{ id: 1, label: "React" },
				{ id: 2, label: "Node.js" },
				{ id: 3, label: "GraphQL" },
			],
			image: "https://picsum.photos/seed/pulse/600/400",
			github: "#",
		},
		{
			id: 3,
			title: "WeatherApp",
			description: "Un tableau de bord météo en temps réel construit avec React et l'API OpenWeather.",
			tags: [
				{ id: 1, label: "React" },
				{ id: 2, label: "TypeScript" },
			],
			image: "https://picsum.photos/seed/weather/600/400",
			github: "#",
		},
	],
	education: [
		{
			id: 1,
			school: "EPITA - Graduate School of Computer Science",
			degree: "Master's in Computer Science",
			year: "2016 – 2018",
			specialization: "Software Engineering",
		},
		{
			id: 2,
			school: "Professional Certification",
			degree: "AWS Certified Solutions Architect",
			year: "Earned 2022",
			specialization: "Cloud Architecture",
		},
	],
};
