import GlobalLoading from "@/app/loading";
import DestinationsCard from "@/components/DestinationsCard";
import { getDestinationsData } from "@/lib/allFetchAPI";

const DestinationPage = async() => {
    const destinations = await getDestinationsData();
    if (!destinations) return <GlobalLoading/>
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
            {destinations.map(destination => <DestinationsCard key={destination._id} destination={destination}/>)}
            </section>
        </div>
    );
};

export default DestinationPage;