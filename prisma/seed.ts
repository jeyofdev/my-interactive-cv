import { PrismaClient } from "./generated/prisma/client";
import { ObjectId } from "bson";

const prisma = new PrismaClient();

async function main() {
	console.log("🧹 clean database...");
	await prisma.education.deleteMany();
	await prisma.project.deleteMany();
	await prisma.experience.deleteMany();
	await prisma.hobby.deleteMany();
	await prisma.language.deleteMany();
	await prisma.skill.deleteMany();
	await prisma.resume.deleteMany();

	console.log("📝 create resume...");
	const resume = await prisma.resume.create({
		data: {
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
			skills: {
				create: [
					{
						category: "Frontend",
						items: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Typescript" },
							{ id: new ObjectId().toString(), label: "Tailwind CSS" },
							{ id: new ObjectId().toString(), label: "Next.js" },
						],
					},
					{
						category: "Backend",
						items: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "Redis" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
						],
					},
					{
						category: "Tools",
						items: [
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "AWS" },
							{ id: new ObjectId().toString(), label: "GitLab CI" },
						],
					},
				],
			},
			languages: {
				create: [
					{ label: "Français", level: "Maternel" },
					{ label: "Anglais", level: "Professionnel" },
					{ label: "Espagnol", level: "Intermédiaire" },
				],
			},
			hobbies: {
				create: [
					{ label: "Photographie", detail: "Photo de rue", duration: "5 ans" },
					{ label: "Randonnée", detail: "Sentiers de montagne" },
					{ label: "Open Source" },
					{ label: "Guitare", duration: "3 ans" },
				],
			},
			experiences: {
				create: [
					{
						company: "TechCorp",
						role: "Développeuse Fullstack Senior",
						period: "2022 – Présent",
						type: "CDI",
						description:
							"Direction du développement d'une plateforme SaaS utilisée par 10k+ utilisateurs. Architecture microservices et frontend React.",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Conception et implémentation de l'architecture frontend (monorepo, bibliothèque de composants partagés)",
							},
							{
								id: new ObjectId().toString(),
								body: "Création d'un système de notifications temps réel via WebSockets et Redis pub/sub",
							},
							{
								id: new ObjectId().toString(),
								body: "Migration du code legacy de JavaScript vers TypeScript (200+ fichiers)",
							},
							{
								id: new ObjectId().toString(),
								body: "Implémentation d'un contrôle d'accès basé sur les rôles (RBAC) sur toute la plateforme",
							},
							{
								id: new ObjectId().toString(),
								body: "Mise en place de tests automatisés avec 85% de couverture (unitaires, intégration, E2E)",
							},
							{
								id: new ObjectId().toString(),
								body: "Pilotage de la migration de REST vers GraphQL pour l'API principale",
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: "Certifications AWS Solutions Architect & Docker Certified Associate",
							},
							{ id: new ObjectId().toString(), label: "Conférencière régulière à React Europe et Node Summit" },
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
							{ id: new ObjectId().toString(), label: "Redis" },
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "AWS" },
						],
					},
					{
						company: "Global Web Agency",
						role: "Fullstack Engineer",
						period: "Aug 2018 – Dec 2020",
						type: "CDI",
						description:
							"Équipe de 8 développeurs au sein d'une société produit de 50 personnes. Méthodologie Agile/Scrum.",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Développement de fonctionnalités critiques pour des clients internationaux",
							},
							{ id: new ObjectId().toString(), body: "Optimisation des performances de rendu côté client" },
							{ id: new ObjectId().toString(), body: "Mise en place de pipelines CI/CD" },
							{ id: new ObjectId().toString(), body: "Support technique et maintenance évolutive" },
						],
						formations: [],
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
							{ id: new ObjectId().toString(), label: "Docker" },
						],
					},
				],
			},
			projects: {
				create: [
					{
						title: "OmniTask AI",
						description:
							"A comprehensive project management tool with AI-assisted task prioritization and automatic documentation generation.",
						image: "https://picsum.photos/seed/omnitask/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "Next.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "Tailwind CSS" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://omnitask.ai" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/omnitask" },
						],
					},
					{
						title: "PulseCommerce",
						description:
							"A high-performance headless e-commerce engine built for extreme scalability and 100ms response times.",
						image: "https://picsum.photos/seed/pulse/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://pulsecommerce.com" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/pulsecommerce" },
						],
					},
					{
						title: "WeatherApp",
						description: "Un tableau de bord météo en temps réel construit avec React et l'API OpenWeather.",
						image: "https://picsum.photos/seed/weather/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://weatherapp.com" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/weatherapp" },
						],
					},
				],
			},
			education: {
				create: [
					{
						school: "EPITA - Graduate School of Computer Science",
						degree: "Master's in Computer Science",
						year: "2016 – 2018",
						specialization: "Software Engineering",
					},
					{
						school: "Professional Certification",
						degree: "AWS Certified Solutions Architect",
						year: "Earned 2022",
						specialization: "Cloud Architecture",
					},
				],
			},
		},
		include: {
			skills: true,
			languages: true,
			hobbies: true,
			experiences: true,
			projects: true,
			education: true,
		},
	});

	console.log("✅ successfully completed!");
}

main()
	.catch((e) => {
		console.error("❌ Error seeding:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
