import { Calendar, MapPin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DestinationsCard = ({ destination }) => {
    const { _id, destinationName, country, price, duration, imageUrl} = destination;
    return (
        <div className="space-y-2 border border-gray-200 hover:border-gray-300 cursor-pointer hover:shadow-xl transition-all delay-200 flex flex-col h-full hover:bg-gray-50">
                <div className="relative w-full h-50">
                <Image src={imageUrl} alt={destinationName} className="object-cover" fill/>
                </div>
                <section className="p-5 space-y-2 flex flex-col flex-1">
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
                <div className="grow"></div>
                <Button fullWidth variant={'outline'} className={'mt-5'}><Link href={`/destination-detail/${_id}`}>Book Now</Link></Button>
                </section>
        </div>
    );
};

export default DestinationsCard;