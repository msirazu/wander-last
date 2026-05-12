import DestinationDeleteAlert from "@/components/DestinationDeleteAlert";
import DestinationDetail from "@/components/DestinationDetail";
import { deleteDestination } from "@/lib/actions";
import { getDestinationById } from "@/lib/allFetchAPI";
import { ArrowLeft, PencilToSquare } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";

const DestinationDetailPage = async({params}) => {
    const { id } = await params;
    const destination = await getDestinationById(id);
    return (
        <div className="py-5 space-y-5">
            <section className="flex justify-between items-center flex-col md:flex-row gap-2">
                <Button variant="outline"><ArrowLeft/><Link href={'/destinations'}>Back to Destinations</Link></Button>
                <div className="flex gap-2">
                    <Button variant="outline"><PencilToSquare/><Link href={'/destinations'}>Edit</Link></Button>
                    <DestinationDeleteAlert destination={destination} deleteDestinationAction={deleteDestination}/>
                </div>
            </section>
            <section>
               <DestinationDetail destination={destination}/>
            </section>
        </div>
    );
};

export default DestinationDetailPage;