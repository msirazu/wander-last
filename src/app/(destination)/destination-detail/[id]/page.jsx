import { getDestinationById } from "@/lib/allFetchAPI";
import { Calendar, MapPin } from "@gravity-ui/icons";
import Image from "next/image";

const DestinationDetailPage = async({params}) => {
    const { id } = await params;
    const destination = await getDestinationById(id);
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination;
    return (
        <div className="py-5 space-y-5">
            <section className="h-100 relative">
                <Image className="object-cover" src={imageUrl} fill alt={destinationName}/>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 space-y-2">
                <div className="col-span-10 space-y-2">
                    <div className="flex gap-1 items-center">
                    <MapPin width={15} height={15}/>
                    <p className="text-[12px]">{country}</p>
                    </div>
                    <h1 className="font-bold text-3xl">{destinationName}</h1>
                    <div className="flex gap-1 items-center">
                    <Calendar/>
                    <p className="text-sm">{duration}</p>
                    </div>
                    <p className="text-sm">{description}</p>
                </div>
                <div className="col-span-2">

                </div>
            </section>
        </div>
    );
};

export default DestinationDetailPage;