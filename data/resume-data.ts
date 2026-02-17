type ResumeData = {
	name: string;
	title: string;
	summary: string;
	email: string;
	phone: string;
	location: string;
	birthDate: string;
	vehicle: Vehicule;
	website: Link;
	social: {
		linkedin: Link;
		github: Link;
	};
	skills: Skill[];
	languages: { name: string; level: string }[];
	hobbies: { name: string; detail?: string; duration?: string }[];
};

type Vehicule = {
	carLicense: boolean;
	vehicule: boolean;
};

type Skill = {
	category: string;
	items: string[];
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
			category: "Frontend",
			items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
		},
		{
			category: "Backend",
			items: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
		},
		{
			category: "Tools",
			items: ["Docker", "AWS", "GitLab CI"],
		},
	],
	languages: [
		{ name: "Français", level: "Maternel" },
		{ name: "Anglais", level: "Professionnel" },
		{ name: "Espagnol", level: "Intermédiaire" },
	],
	hobbies: [
		{ name: "Photographie", detail: "Photo de rue", duration: "5 ans" },
		{ name: "Randonnée", detail: "Sentiers de montagne" },
		{ name: "Open Source" },
		{ name: "Guitare", duration: "3 ans" },
	],
};
