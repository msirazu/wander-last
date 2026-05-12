import DestinationsCard from "@/components/DestinationsCard";
import { getDestinationsData } from "@/lib/allFetchAPI";
import GlobalLoading from "../loading";

const DestinationPage = async() => {
    const destinations = await getDestinationsData();
    if (!destinations) return <GlobalLoading/>
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
            {destinations.map(destination => <DestinationsCard key={destination._id} destination={destination}/>)}
            </section>
        </div>
    );
};

export default DestinationPage;