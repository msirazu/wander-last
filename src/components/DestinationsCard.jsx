import Image from "next/image";

const DestinationsCard = ({ destination }) => {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination;
    return (
        <div className="">
                <Image src={imageUrl} height={231} width={411} alt={destinationName} loading="eager" className="h-auto w-auto"/>
                <div className="flex justify-between">
                    <h2>
                    {destinationName}
                    </h2>
                    <p>{price}</p>
                </div>
        </div>
    );
};

export default DestinationsCard;