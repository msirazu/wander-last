import { Calendar, MapPin } from "@gravity-ui/icons";
import { Separator } from "@heroui/react";
import Image from "next/image";

const DestinationDetail = ({ destination }) => {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination;
    return (
        <div className="space-y-5">
            <section className="h-100 relative">
                <Image className="object-cover" src={imageUrl} fill alt={destinationName}/>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-12 space-y-2 gap-5">
                <div className="col-span-12 md:col-span-9 space-y-2">
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
                <div className="col-span-12 md:col-span-3 border p-2">
                    <div className="space-y-2">
                        <p className="text-sm">Starting from</p>
                        <p className="font-bold text-2xl">$ {price}</p>
                        <p className="text-sm">per person</p>
                        <Separator className="my-2"/>
                        <p className="text-sm">{departureDate}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DestinationDetail;