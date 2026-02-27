export type ContactItem = {
	id: string;
	label: string;
	value: string;
};

export const contactData: ContactItem[] = [
	{
		id: "1",
		label: "Email",
		value: "jane.doe@tech-portfolio.com",
	},
	{
		id: "2",
		label: "Phone",
		value: "+1 (555) 000-1234",
	},
	{
		id: "3",
		label: "Address",
		value: "San Francisco, CA",
	},
];
