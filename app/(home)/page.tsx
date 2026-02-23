import { Home } from "@/components/page/home";
import { getAllResumes } from "@/lib/fetch/getAllResumes";

const HomePage = async () => {
	try {
		const data = await getAllResumes();
		return <Home data={data} />;
	} catch (error) {
		throw error;
	}
};

export default HomePage;
