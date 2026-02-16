import { useParams } from "react-router-dom";
import { doctors } from "../../../data/doctors";
import Hero from "./hero";


export default function DoctorProfilePage() {
    const { id } = useParams<{ id: string }>();
    const doctor = doctors.find(d => d.id === String(id));

    if (!doctor) {
        return <div className="p-10 text-center">Doctor not found.</div>;
    }

    return (
        <div>
            <Hero doctor={doctor} />
            
        </div>
    );
}
