import { PrismaClient } from "./generated/prisma/client";
import { ObjectId } from "bson";

const prisma = new PrismaClient();

const i18n = (fr: string, en?: string) => ({
	fr,
	en: en ?? fr,
});

async function main() {
	console.log("🧹 clean database...");
	await prisma.education.deleteMany();
	await prisma.project.deleteMany();
	await prisma.experience.deleteMany();
	await prisma.hobby.deleteMany();
	await prisma.language.deleteMany();
	await prisma.skill.deleteMany();
	await prisma.resume.deleteMany();
	await prisma.profile.deleteMany();

	console.log("👤 Creating Profile...");
	const profile = await prisma.profile.create({
		data: {
			name: "jeyofdev",
			email: "jeyofdev@tech.io",
			phone: "+33 6 12 34 56 78",
			location: "Paris, France",
			birthDate: "15 May 1994",
			vehicle: { carLicense: true, vehicule: true },
			website: { label: "jeyofdev.dev", url: "http://jeyofdev.dev" },
			social: {
				linkedin: { label: "jeyofdev", url: "linkedin.com/in/jeyofdev" },
				github: { label: "jeyofdev", url: "github.com/jeyofdev" },
			},
		},
	});

	// Common data for all resumes
	const commonDatas = () => ({
		languages: {
			create: [
				{ label: i18n("Français", "French"), level: i18n("Maternel", "Native") },
				{ label: i18n("Anglais", "English"), level: i18n("Professionnel", "Professional") },
				{ label: i18n("Espagnol", "Spanish"), level: i18n("Intermédiaire", "Intermediate") },
			],
		},
		hobbies: {
			create: [
				{
					label: i18n("Photographie", "Photography"),
					detail: i18n("Photo de rue", "Street Photography"),
					duration: i18n("5 ans", "5 years"),
				},
				{ label: i18n("Randonnée", "Hiking"), detail: i18n("Sentiers de montagne", "Mountain Trails") },
				{ label: i18n("Open Source", "Open Source") },
				{ label: i18n("Guitare", "Guitar"), duration: i18n("5 ans", "5 years") },
			],
		},
		education: {
			create: [
				{
					school: i18n("EPITA - École d'ingénieurs en informatique", "EPITA - Graduate School of Computer Science"),
					degree: i18n("Master en informatique", "Master's in Computer Science"),
					year: "2016 – 2018",
					specialization: i18n("Génie logiciel", "Software Engineering"),
				},
				{
					school: i18n("Certification Professionnelle", "Professional Certification"),
					degree: i18n("Architecte Solutions AWS certifié", "AWS Certified Solutions Architect"),
					year: "Earned 2022",
					specialization: i18n("Architecture Cloud", "Cloud Architecture"),
				},
			],
		},
	});

	// ========== RESUME 1 ==========
	console.log("📝 Creating Resume 1: Fullstack Developer...");
	await prisma.resume.create({
		data: {
			title: i18n("Développeur Fullstack", "Fullstack Developer"),
			summary: i18n(
				"Développeur Fullstack passionné avec 6+ ans d'expérience dans la création d'applications web modernes et scalables.",
				"Passionate Fullstack Developer with 6+ years of experience building modern and scalable web applications.",
			),
			profileId: profile.id,
			...commonDatas(),
			skills: {
				create: [
					{
						category: i18n("Frontend", "Frontend"),
						items: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Typescript" },
							{ id: new ObjectId().toString(), label: "Tailwind CSS" },
							{ id: new ObjectId().toString(), label: "Next.js" },
						],
					},
					{
						category: i18n("Backend", "Backend"),
						items: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "Redis" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
						],
					},
					{
						category: i18n("Outils", "Tools"),
						items: [
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "AWS" },
							{ id: new ObjectId().toString(), label: "GitLab CI" },
						],
					},
				],
			},
			experiences: {
				create: [
					{
						company: "TechCorp",
						role: i18n("Développeuse Fullstack Senior", "Senior Fullstack Developer"),
						period: "2022 – Présent",
						type: i18n("CDI", "Permanent"),
						description: i18n(
							"Direction du développement d'une plateforme SaaS utilisée par 10k+ utilisateurs. Architecture microservices et frontend React.",
							"Led development of a SaaS platform with 10k+ users. Microservices architecture and React frontend.",
						),
						details: [
							{
								id: new ObjectId().toString(),
								body: i18n("Conception et implémentation frontend", "Designed and implemented frontend architecture"),
							},
							{
								id: new ObjectId().toString(),
								body: i18n(
									"Système de notifications temps réel via WebSockets",
									"Real-time notification system via WebSockets",
								),
							},
							{
								id: new ObjectId().toString(),
								body: i18n(
									"Migration JavaScript → TypeScript (200+ fichiers)",
									"Migrated JS to TypeScript (200+ files)",
								),
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: i18n("Certifications AWS & Docker", "AWS Solutions Architect & Docker Certified Associate"),
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
						],
					},
					{
						company: "Global Web Agency",
						role: i18n("Développeur Fullstack", "Fullstack Developer"),
						period: "2019 – 2022",
						type: i18n("CDI", "Permanent"),
						description: i18n(
							"Travail sur des projets web pour des clients internationaux. Méthodologie Agile/Scrum.",
							"Worked on web projects for international clients. Agile/Scrum methodology.",
						),
						details: [
							{
								id: new ObjectId().toString(),
								body: i18n("Développement de fonctionnalités critiques", "Developed critical features"),
							},
							{
								id: new ObjectId().toString(),
								body: i18n("Optimisation des performances côté client", "Optimized client-side performance"),
							},
						],
						formations: [], // expérience avec formation vide
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "Docker" },
						],
					},
					{
						company: "TechStartup X",
						role: i18n("Ingénieur Backend", "Backend Engineer"),
						period: "2017 – 2019",
						type: i18n("CDI", "Permanent"),
						description: i18n(
							"Développement et maintenance d'APIs pour une plateforme SaaS en pleine croissance.",
							"Developed and maintained APIs for a fast-growing SaaS platform.",
						),
						details: [
							{
								id: new ObjectId().toString(),
								body: i18n("Conception d'APIs REST performantes", "Designed high-performance REST APIs"),
							},
							{
								id: new ObjectId().toString(),
								body: i18n("Mise en place de tests automatisés", "Implemented automated tests"),
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: i18n("Formation interne Node.js avancée", "Internal Advanced Node.js Training"),
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "MongoDB" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
							{ id: new ObjectId().toString(), label: "Docker" },
						],
					},
				],
			},

			projects: {
				create: [
					{
						title: i18n("OmniTask AI", "OmniTask AI"),
						description: i18n(
							"Outil de gestion de projet avec IA pour prioriser les tâches.",
							"AI-powered project management tool for task prioritization.",
						),
						image: "https://picsum.photos/seed/omnitask/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "Next.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://omnitask.ai" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/omnitask" },
						],
					},
					{
						title: i18n("PulseCommerce", "PulseCommerce"),
						description: i18n(
							"Moteur e-commerce headless haute performance avec temps de réponse ultra-rapide.",
							"High-performance headless e-commerce engine with ultra-fast response times.",
						),
						image: "https://picsum.photos/seed/pulse/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Node.js" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://pulsecommerce.com" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/pulsecommerce" },
						],
					},
					{
						title: i18n("OmniBlog", "OmniBlog"),
						description: i18n(
							"Plateforme de blogging avec éditeur WYSIWYG et analytics intégrés.",
							"Blogging platform with WYSIWYG editor and integrated analytics.",
						),
						image: "https://picsum.photos/seed/omniblog/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://omniblog.io" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/omniblog" },
						],
					},
				],
			},
		},
		include: { skills: true, languages: true, hobbies: true, experiences: true, projects: true, education: true },
	});

	// ========== RESUME 2 ==========
	console.log("📝 Creating Resume 2...");
	await prisma.resume.create({
		data: {
			title: i18n("Spécialiste Frontend & UI/UX", "Frontend Specialist & UI/UX Developer"),
			summary: i18n(
				"Frontend specialist avec forte sensibilité design et 5 ans d'expérience.",
				"Frontend specialist with strong design sense and 5 years of experience.",
			),
			profileId: profile.id,
			...commonDatas(),
			skills: {
				create: [
					{
						category: i18n("Frontend", "Frontend"),
						items: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Vue.js" },
						],
					},
				],
			},
			experiences: {
				create: [
					{
						company: "DesignTech Studio",
						role: i18n("Lead Frontend Developer", "Lead Frontend Developer"),
						period: "2021 – Présent",
						type: i18n("CDI", "Permanent"),
						description: i18n(
							"Responsable architecture frontend et design system.",
							"In charge of frontend architecture and design system.",
						),
						details: [
							{
								id: new ObjectId().toString(),
								body: i18n("Création d'un design system complet", "Created full design system"),
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: i18n("Certif React avancé", "Advanced React Patterns Certification"),
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
						],
					},
				],
			},
			projects: {
				create: [
					{
						title: i18n("Aurora Design System", "Aurora Design System"),
						description: i18n(
							"Design system open-source 100+ composants.",
							"Open-source design system with 100+ components.",
						),
						image: "https://picsum.photos/seed/aurora/600/400",
						tags: [{ id: new ObjectId().toString(), label: "React" }],
						links: [{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/aurora-ds" }],
					},
				],
			},
		},
		include: { skills: true, languages: true, hobbies: true, experiences: true, projects: true, education: true },
	});

	// ========== RESUME 3 ==========
	console.log("📝 Creating Resume 3...");
	await prisma.resume.create({
		data: {
			title: i18n("Ingénieur Backend & DevOps", "Backend & DevOps Engineer"),
			summary: i18n(
				"Ingénieur Backend et DevOps avec 7 ans d'expérience dans les architectures distribuées.",
				"Backend & DevOps engineer with 7 years of experience in distributed architectures.",
			),
			profileId: profile.id,
			...commonDatas(),
			skills: {
				create: [
					{
						category: i18n("Backend", "Backend"),
						items: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "Python" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
						],
					},
					{
						category: i18n("DevOps & Cloud", "DevOps & Cloud"),
						items: [
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "Kubernetes" },
							{ id: new ObjectId().toString(), label: "AWS" },
						],
					},
				],
			},
			experiences: {
				create: [
					{
						company: "CloudScale Systems",
						role: i18n("Senior Backend & DevOps Engineer", "Senior Backend & DevOps Engineer"),
						period: "2020 – Présent",
						type: i18n("CDI", "Permanent"),
						description: i18n(
							"Conception et maintenance d'une infrastructure cloud multi-régionale.",
							"Designed and maintained multi-region cloud infrastructure.",
						),
						details: [
							{
								id: new ObjectId().toString(),
								body: i18n("Migration vers microservices", "Migrated to microservices"),
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: i18n("Kubernetes CKA & AWS DevOps", "Kubernetes Certified Administrator & AWS DevOps"),
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "Docker" },
						],
					},
				],
			},
			projects: {
				create: [
					{
						title: i18n("MicroK8s Starter", "MicroK8s Starter"),
						description: i18n("Template Kubernetes open-source.", "Open-source Kubernetes starter template."),
						image: "https://picsum.photos/seed/k8s/600/400",
						tags: [{ id: new ObjectId().toString(), label: "Kubernetes" }],
						links: [
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/microk8s-starter" },
						],
					},
				],
			},
		},
		include: { skills: true, languages: true, hobbies: true, experiences: true, projects: true, education: true },
	});

	// ========== RESUME 4 ==========
	console.log("📝 Creating Resume 4...");
	await prisma.resume.create({
		data: {
			title: i18n("Développeur Mobile & Cross-Platform", "Mobile & Cross-Platform Developer"),
			summary: i18n(
				"Développeur mobile avec 5 ans d'expérience sur iOS, Android et cross-platform.",
				"Mobile developer with 5 years of experience on iOS, Android and cross-platform.",
			),
			profileId: profile.id,
			...commonDatas(),
			skills: {
				create: [
					{
						category: i18n("Mobile Development", "Mobile Development"),
						items: [
							{ id: new ObjectId().toString(), label: "React Native" },
							{ id: new ObjectId().toString(), label: "Flutter" },
						],
					},
				],
			},
			experiences: {
				create: [
					{
						company: "MobileFirst Solutions",
						role: i18n("Senior Mobile Developer", "Senior Mobile Developer"),
						period: "2021 – Présent",
						type: i18n("CDI", "Permanent"),
						description: i18n(
							"Lead développement mobile pour une app fitness 500k+ utilisateurs.",
							"Lead mobile developer for fitness app with 500k+ users.",
						),
						details: [
							{
								id: new ObjectId().toString(),
								body: i18n("Développement React Native offline-first", "Developed offline-first React Native app"),
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: i18n("React Native Advanced Patterns", "React Native Advanced Patterns"),
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "React Native" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
						],
					},
				],
			},
			projects: {
				create: [
					{
						title: i18n("FitTracker Pro", "FitTracker Pro"),
						description: i18n(
							"App fitness avec tracking nutrition et wearable.",
							"Fitness app with nutrition tracking and wearable integration.",
						),
						image: "https://picsum.photos/seed/fittrack/600/400",
						tags: [{ id: new ObjectId().toString(), label: "React Native" }],
						links: [{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/fittracker" }],
					},
				],
			},
		},
		include: { skills: true, languages: true, hobbies: true, experiences: true, projects: true, education: true },
	});

	console.log("✅ Successfully created 1 profile and 4 resumes!");
}

main()
	.catch((e) => {
		console.error("❌ Error seeding:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
