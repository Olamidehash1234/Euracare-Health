import { useParams } from "react-router-dom";
import { services } from "../../../../data/services";
import Hero from "./hero";
import Button from "./button"
import Overview from './overview'
import Doctor from './doctors'
import Test from './test';
import Conditions from './conditions';
import Faq from './faq'
// import Details from "./details"; // Add more sections as needed

export default function ServiceDynamicPage() {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return <div className="p-10 text-center">Service not found.</div>;
    }

    return (
        <div>
            <Hero service={service} />
            <Button />
            <Overview service={service} />
            <Doctor service={service} />
            <Test service={service} />
            <Conditions service={service} />
            <Faq service={service} />
            {/* <Details service={service} /> */}
            {/* Add more sections here */}
        </div>
    );
}
