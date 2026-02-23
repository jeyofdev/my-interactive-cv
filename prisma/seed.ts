import { resumeData } from "@/data/resume-data";
import { PrismaClient } from "./generated/prisma/client";

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
			name: resumeData.name,
			title: resumeData.title,
			summary: resumeData.summary,
			email: resumeData.email,
			phone: resumeData.phone,
			location: resumeData.location,
			birthDate: resumeData.birthDate,
			vehicle: resumeData.vehicle,
			website: resumeData.website,
			social: resumeData.social,
			skills: {
				create: resumeData.skills.map((skill) => ({
					category: skill.category,
					items: skill.items,
				})),
			},
			languages: {
				create: resumeData.languages.map((lang) => ({
					label: lang.label,
					level: lang.level,
				})),
			},
			hobbies: {
				create: resumeData.hobbies.map((hobby) => ({
					label: hobby.label,
					detail: hobby.detail,
					duration: hobby.duration,
				})),
			},
			experiences: {
				create: resumeData.experiences.map((exp) => ({
					company: exp.company,
					role: exp.role,
					period: exp.period,
					type: exp.type,
					description: exp.description,
					details: exp.details,
					formations: exp.formations,
					technologies: exp.technologies,
				})),
			},
			projects: {
				create: resumeData.projects.map((project) => ({
					title: project.title,
					description: project.description,
					image: project.image,
					tags: project.tags,
					links: project.links,
				})),
			},
			education: {
				create: resumeData.education.map((edu) => ({
					school: edu.school,
					degree: edu.degree,
					year: edu.year,
					specialization: edu.specialization,
				})),
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
		console.error("❌ Erreur lors du seeding:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
