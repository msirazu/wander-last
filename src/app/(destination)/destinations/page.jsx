import AddDestinationForm from "@/components/AddDestinationForm";
import DestinationsCard from "@/components/DestinationsCard";
import { createDestination } from "@/lib/actions";
import { getDestinationsData } from "@/lib/allFetchAPI";

const DestinationPage = async () => {
  const destinations = await getDestinationsData();
  return (
    <div className="py-5 space-y-5">
      <section className="flex justify-center">
        <AddDestinationForm createDestinationAction={createDestination}/>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {destinations.map((destination) => (
          <DestinationsCard key={destination._id} destination={destination} />
        ))}
      </section>
    </div>
  );
};

export default DestinationPage;
