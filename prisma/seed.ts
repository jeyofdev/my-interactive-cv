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

	// Données communes pour tous les CV
	const commonData = {
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
	};

	// ========== RESUME 1: Fullstack Developer ==========
	console.log("📝 Creating Resume 1: Fullstack Developer...");
	const resume1 = await prisma.resume.create({
		data: {
			name: "jeyofdev",
			title: "Fullstack Developer",
			summary:
				"Développeur Fullstack passionné avec 6+ ans d'expérience dans la création d'applications web modernes et scalables. Expertise en React, Node.js et architecture cloud. Spécialisé dans la transformation digitale et l'optimisation des performances.",
			...commonData,
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
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: "Certifications AWS Solutions Architect & Docker Certified Associate",
							},
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
						period: "2018 – 2021",
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
						],
						formations: [],
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
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
							"Outil de gestion de projet avec IA pour la priorisation des tâches et génération automatique de documentation.",
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
							"Moteur e-commerce headless haute performance conçu pour une scalabilité extrême et des temps de réponse de 100ms.",
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

	// ========== RESUME 2: Frontend Specialist ==========
	console.log("📝 Creating Resume 2: Frontend Specialist...");
	const resume2 = await prisma.resume.create({
		data: {
			name: "jeyofdev",
			title: "Frontend Specialist & UI/UX Developer",
			summary:
				"Spécialiste Frontend avec une forte sensibilité design et 5 ans d'expérience dans la création d'interfaces utilisateur modernes et accessibles. Expert en React, animations web et design systems. Passionné par l'expérience utilisateur et les performances frontend.",
			...commonData,
			skills: {
				create: [
					{
						category: "Frontend",
						items: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Vue.js" },
							{ id: new ObjectId().toString(), label: "Typescript" },
							{ id: new ObjectId().toString(), label: "Next.js" },
							{ id: new ObjectId().toString(), label: "Tailwind CSS" },
							{ id: new ObjectId().toString(), label: "SASS/SCSS" },
						],
					},
					{
						category: "Design & Animation",
						items: [
							{ id: new ObjectId().toString(), label: "Figma" },
							{ id: new ObjectId().toString(), label: "Framer Motion" },
							{ id: new ObjectId().toString(), label: "GSAP" },
							{ id: new ObjectId().toString(), label: "Three.js" },
						],
					},
					{
						category: "Testing & Tools",
						items: [
							{ id: new ObjectId().toString(), label: "Jest" },
							{ id: new ObjectId().toString(), label: "Cypress" },
							{ id: new ObjectId().toString(), label: "Storybook" },
							{ id: new ObjectId().toString(), label: "Webpack" },
						],
					},
				],
			},
			experiences: {
				create: [
					{
						company: "DesignTech Studio",
						role: "Lead Frontend Developer",
						period: "2021 – Présent",
						type: "CDI",
						description:
							"Responsable de l'architecture frontend et du design system pour une suite de produits B2B utilisée par 50k+ utilisateurs.",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Création d'un design system complet avec 80+ composants réutilisables et documentation interactive",
							},
							{
								id: new ObjectId().toString(),
								body: "Amélioration des performances web : réduction du temps de chargement de 60% (3.2s → 1.3s)",
							},
							{
								id: new ObjectId().toString(),
								body: "Mise en place de l'accessibilité WCAG 2.1 AA sur l'ensemble de la plateforme",
							},
							{
								id: new ObjectId().toString(),
								body: "Développement d'animations micro-interactions augmentant l'engagement utilisateur de 35%",
							},
							{
								id: new ObjectId().toString(),
								body: "Mentorat de 5 développeurs juniors sur les best practices React et architecture frontend",
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: "Certification Advanced React Patterns & Performance Optimization",
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
							{ id: new ObjectId().toString(), label: "Next.js" },
							{ id: new ObjectId().toString(), label: "Tailwind CSS" },
							{ id: new ObjectId().toString(), label: "Framer Motion" },
							{ id: new ObjectId().toString(), label: "Storybook" },
						],
					},
					{
						company: "Creative Digital Agency",
						role: "Frontend Developer",
						period: "2019 – 2021",
						type: "CDI",
						description: "Développement de sites web sur mesure pour des clients prestigieux dans le luxe et la mode.",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Création de landing pages haute conversion avec animations sophistiquées",
							},
							{ id: new ObjectId().toString(), body: "Intégration pixel-perfect de maquettes Figma complexes" },
							{
								id: new ObjectId().toString(),
								body: "Optimisation SEO et performances (score Lighthouse > 95)",
							},
						],
						formations: [],
						technologies: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "Vue.js" },
							{ id: new ObjectId().toString(), label: "SASS" },
							{ id: new ObjectId().toString(), label: "GSAP" },
						],
					},
				],
			},
			projects: {
				create: [
					{
						title: "Aurora Design System",
						description:
							"Design system open-source avec 100+ composants React accessibles, thème personnalisable et documentation interactive.",
						image: "https://picsum.photos/seed/aurora/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "React" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
							{ id: new ObjectId().toString(), label: "Storybook" },
							{ id: new ObjectId().toString(), label: "Tailwind CSS" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://aurora-ds.dev" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/aurora-ds" },
						],
					},
					{
						title: "PixelPerfect Portfolio",
						description:
							"Portfolio interactif avec animations 3D et transitions fluides, présentant des projets de design et développement.",
						image: "https://picsum.photos/seed/pixel/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "Next.js" },
							{ id: new ObjectId().toString(), label: "Three.js" },
							{ id: new ObjectId().toString(), label: "Framer Motion" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://pixelperfect.art" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/portfolio-3d" },
						],
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

	// ========== RESUME 3: Backend & DevOps Engineer ==========
	console.log("📝 Creating Resume 3: Backend & DevOps Engineer...");
	const resume3 = await prisma.resume.create({
		data: {
			name: "jeyofdev",
			title: "Backend & DevOps Engineer",
			summary:
				"Ingénieur Backend et DevOps avec 7 ans d'expérience dans la conception d'architectures distribuées scalables et la mise en place d'infrastructures cloud. Expert en microservices, conteneurisation et automatisation. Spécialisé dans l'optimisation des performances et la fiabilité des systèmes.",
			...commonData,
			skills: {
				create: [
					{
						category: "Backend",
						items: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "Python" },
							{ id: new ObjectId().toString(), label: "Go" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "MongoDB" },
							{ id: new ObjectId().toString(), label: "Redis" },
						],
					},
					{
						category: "DevOps & Cloud",
						items: [
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "Kubernetes" },
							{ id: new ObjectId().toString(), label: "AWS" },
							{ id: new ObjectId().toString(), label: "Terraform" },
							{ id: new ObjectId().toString(), label: "Jenkins" },
							{ id: new ObjectId().toString(), label: "GitHub Actions" },
						],
					},
					{
						category: "Architecture & API",
						items: [
							{ id: new ObjectId().toString(), label: "Microservices" },
							{ id: new ObjectId().toString(), label: "REST API" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
							{ id: new ObjectId().toString(), label: "gRPC" },
						],
					},
				],
			},
			experiences: {
				create: [
					{
						company: "CloudScale Systems",
						role: "Senior Backend & DevOps Engineer",
						period: "2020 – Présent",
						type: "CDI",
						description:
							"Conception et maintenance d'une infrastructure cloud multi-régionale supportant 1M+ requêtes/jour avec 99.99% de disponibilité.",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Migration complète vers une architecture microservices (15 services) réduisant les coûts de 40%",
							},
							{
								id: new ObjectId().toString(),
								body: "Mise en place d'une infrastructure Kubernetes avec auto-scaling et self-healing",
							},
							{
								id: new ObjectId().toString(),
								body: "Création d'une pipeline CI/CD automatisée permettant 50+ déploiements/jour sans downtime",
							},
							{
								id: new ObjectId().toString(),
								body: "Implémentation d'un système de monitoring et alerting avec Prometheus, Grafana et PagerDuty",
							},
							{
								id: new ObjectId().toString(),
								body: "Optimisation des requêtes database réduisant les temps de réponse de 75%",
							},
							{
								id: new ObjectId().toString(),
								body: "Infrastructure as Code avec Terraform pour environnements multi-cloud (AWS, GCP)",
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: "Kubernetes Certified Administrator (CKA) & AWS DevOps Professional",
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "Python" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "Redis" },
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "Kubernetes" },
							{ id: new ObjectId().toString(), label: "AWS" },
							{ id: new ObjectId().toString(), label: "Terraform" },
						],
					},
					{
						company: "DataFlow Technologies",
						role: "Backend Developer",
						period: "2017 – 2020",
						type: "CDI",
						description: "Développement d'APIs REST et GraphQL pour une plateforme de data analytics en temps réel.",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Conception d'APIs REST performantes traitant 100k+ requêtes/jour",
							},
							{ id: new ObjectId().toString(), body: "Optimisation des performances database avec indexes et caching" },
							{
								id: new ObjectId().toString(),
								body: "Mise en place de tests automatisés (unitaires, intégration, load testing)",
							},
						],
						formations: [],
						technologies: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "PostgreSQL" },
							{ id: new ObjectId().toString(), label: "MongoDB" },
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
						],
					},
				],
			},
			projects: {
				create: [
					{
						title: "MicroK8s Starter",
						description:
							"Template open-source pour démarrer rapidement avec Kubernetes : configuration optimisée, monitoring intégré et CI/CD.",
						image: "https://picsum.photos/seed/k8s/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "Kubernetes" },
							{ id: new ObjectId().toString(), label: "Docker" },
							{ id: new ObjectId().toString(), label: "Terraform" },
							{ id: new ObjectId().toString(), label: "Prometheus" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://microk8s-starter.dev" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/microk8s-starter" },
						],
					},
					{
						title: "APIGuard",
						description:
							"Service de rate limiting et protection DDoS pour APIs, gérant 10M+ requêtes/jour avec latence < 5ms.",
						image: "https://picsum.photos/seed/apiguard/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "Go" },
							{ id: new ObjectId().toString(), label: "Redis" },
							{ id: new ObjectId().toString(), label: "Docker" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://apiguard.io" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/apiguard" },
						],
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

	// ========== RESUME 4: Mobile & Cross-Platform Developer ==========
	console.log("📝 Creating Resume 4: Mobile & Cross-Platform Developer...");
	const resume4 = await prisma.resume.create({
		data: {
			name: "jeyofdev",
			title: "Mobile & Cross-Platform Developer",
			summary:
				"Développeur mobile passionné avec 5 ans d'expérience dans la création d'applications iOS et Android natives et cross-platform. Expert en React Native, Flutter et optimisation des performances mobile. Spécialisé dans la création d'expériences utilisateur fluides et l'intégration de fonctionnalités natives.",
			...commonData,
			skills: {
				create: [
					{
						category: "Mobile Development",
						items: [
							{ id: new ObjectId().toString(), label: "React Native" },
							{ id: new ObjectId().toString(), label: "Flutter" },
							{ id: new ObjectId().toString(), label: "Swift" },
							{ id: new ObjectId().toString(), label: "Kotlin" },
							{ id: new ObjectId().toString(), label: "Expo" },
						],
					},
					{
						category: "Backend & Services",
						items: [
							{ id: new ObjectId().toString(), label: "Node.js" },
							{ id: new ObjectId().toString(), label: "Firebase" },
							{ id: new ObjectId().toString(), label: "REST API" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
							{ id: new ObjectId().toString(), label: "SQLite" },
						],
					},
					{
						category: "Tools & CI/CD",
						items: [
							{ id: new ObjectId().toString(), label: "Fastlane" },
							{ id: new ObjectId().toString(), label: "TestFlight" },
							{ id: new ObjectId().toString(), label: "App Center" },
							{ id: new ObjectId().toString(), label: "Jest" },
							{ id: new ObjectId().toString(), label: "Detox" },
						],
					},
				],
			},
			experiences: {
				create: [
					{
						company: "MobileFirst Solutions",
						role: "Senior Mobile Developer",
						period: "2021 – Présent",
						type: "CDI",
						description:
							"Lead du développement mobile pour une application de fitness utilisée par 500k+ utilisateurs actifs sur iOS et Android.",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Développement d'une application React Native avec synchronisation offline-first et performance optimale",
							},
							{
								id: new ObjectId().toString(),
								body: "Intégration de fonctionnalités natives : HealthKit, Google Fit, notifications push, géolocalisation",
							},
							{
								id: new ObjectId().toString(),
								body: "Amélioration des performances : réduction du temps de démarrage de 60% et de la taille de l'app de 35%",
							},
							{
								id: new ObjectId().toString(),
								body: "Mise en place d'une architecture modulaire facilitant le partage de code entre iOS et Android (90%)",
							},
							{
								id: new ObjectId().toString(),
								body: "Automatisation des releases avec Fastlane : déploiements automatiques sur App Store et Play Store",
							},
						],
						formations: [
							{
								id: new ObjectId().toString(),
								label: "React Native Advanced Patterns & iOS/Android Native Modules",
							},
						],
						technologies: [
							{ id: new ObjectId().toString(), label: "React Native" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
							{ id: new ObjectId().toString(), label: "Swift" },
							{ id: new ObjectId().toString(), label: "Kotlin" },
							{ id: new ObjectId().toString(), label: "Firebase" },
							{ id: new ObjectId().toString(), label: "GraphQL" },
						],
					},
					{
						company: "AppInnovate Studio",
						role: "Mobile Developer",
						period: "2019 – 2021",
						type: "CDI",
						description:
							"Développement d'applications mobiles sur mesure pour divers clients (e-commerce, services, médias).",
						details: [
							{
								id: new ObjectId().toString(),
								body: "Création de 8 applications React Native publiées sur les stores avec 4.5+ étoiles de moyenne",
							},
							{
								id: new ObjectId().toString(),
								body: "Développement d'un système de paiement in-app intégrant Stripe et Apple/Google Pay",
							},
							{
								id: new ObjectId().toString(),
								body: "Implémentation d'analytics et A/B testing pour optimiser l'engagement utilisateur",
							},
						],
						formations: [],
						technologies: [
							{ id: new ObjectId().toString(), label: "React Native" },
							{ id: new ObjectId().toString(), label: "Expo" },
							{ id: new ObjectId().toString(), label: "Firebase" },
							{ id: new ObjectId().toString(), label: "REST API" },
						],
					},
				],
			},
			projects: {
				create: [
					{
						title: "FitTracker Pro",
						description:
							"Application de suivi fitness avec plans d'entraînement personnalisés, tracking nutrition et intégration wearables.",
						image: "https://picsum.photos/seed/fittrack/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "React Native" },
							{ id: new ObjectId().toString(), label: "TypeScript" },
							{ id: new ObjectId().toString(), label: "Firebase" },
							{ id: new ObjectId().toString(), label: "HealthKit" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://fittracker.app" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/fittracker" },
						],
					},
					{
						title: "ChatWave",
						description:
							"Messagerie instantanée chiffrée de bout en bout avec appels audio/vidéo, compatible iOS, Android et Web.",
						image: "https://picsum.photos/seed/chatwave/600/400",
						tags: [
							{ id: new ObjectId().toString(), label: "Flutter" },
							{ id: new ObjectId().toString(), label: "WebRTC" },
							{ id: new ObjectId().toString(), label: "Node.js" },
						],
						links: [
							{ id: new ObjectId().toString(), label: "website", url: "https://chatwave.io" },
							{ id: new ObjectId().toString(), label: "gitHub", url: "https://github.com/jeyofdev/chatwave" },
						],
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

	console.log("✅ Successfully created 4 resumes!");
}

main()
	.catch((e) => {
		console.error("❌ Error seeding:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
