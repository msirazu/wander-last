import { Calendar, MapPin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DestinationsCard = ({ destination }) => {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination;
    return (
        <div className="space-y-2 border border-gray-200 hover:border-gray-300 cursor-pointer hover:shadow-xl transition-all delay-200">
                <Image src={imageUrl} height={231} width={411} alt={destinationName} loading="eager" className="h-auto w-auto"/>
                <section className="p-5 space-y-2">
                <div className="flex gap-1 items-center">
                    <MapPin width={15} height={15}/>
                    <p className="text-[12px]">{country}</p>
                </div>
                <div className="flex justify-between">
                    <h2 className="font-bold">
                    {destinationName}
                    </h2>
                    <p><span className="font-bold">$ {price}</span>/Person</p>
                </div>
                <div className="flex gap-1 items-center">
                    <Calendar/>
                    <p className="text-sm">{duration}</p>
                </div>
                <Button><Link href={`/destination-detail/${_id}`}>Book Now</Link></Button>
                </section>
        </div>
    );
};

export default DestinationsCard;