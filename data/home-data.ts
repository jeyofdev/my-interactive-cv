import { SkillItem } from "@/data/resume-data";

type Resume = {
	id: number;
	title: string;
	description: string;
	skills: Skill[];
};

type HomeData = {
	resumeItems: Resume[];
};

export type Skill = Pick<SkillItem, "id" | "label">;

export const homeData: HomeData = {
	resumeItems: [
		{
			id: 1,
			title: "CV Interactif - Mode Sombre",
			description:
				"Style épuré en liste pour une lecture rapide et une navigation structurée, idéal pour les écrans OLED.",
			skills: [
				{ id: 1, label: "React" },
				{ id: 2, label: "Typescript" },
				{ id: 3, label: "Tailwind CSS" },
				{ id: 4, label: "Next.js" },
			],
		},
		{
			id: 2,
			title: "CV Interactif - Mode Clair",
			description:
				"Interface lumineuse et aérée, pensée pour une lisibilité optimale et une impression professionnelle.",
			skills: [
				{ id: 1, label: "Node.js" },
				{ id: 2, label: "PostgreSQL" },
				{ id: 3, label: "Redis" },
				{ id: 4, label: "GraphQL" },
			],
		},
		{
			id: 3,
			title: "Portfolio Développeur",
			description: "Mise en avant des projets, compétences et technologies avec une navigation fluide et moderne.",
			skills: [
				{ id: 1, label: "Docker" },
				{ id: 2, label: "AWS" },
				{ id: 3, label: "GitLab CI" },
			],
		},
		{
			id: 4,
			title: "Profil Créatif",
			description: "Présentation originale et visuelle, idéale pour les profils orientés design et création digitale.",
			skills: [
				{ id: 1, label: "React" },
				{ id: 2, label: "Angular" },
				{ id: 4, label: "Next.js" },
			],
		},
	],
};
