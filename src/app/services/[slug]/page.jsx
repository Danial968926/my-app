import { notFound } from "next/navigation";
import { services } from "../data";
import ServiceCard from "@/components/services/ServiceCard";

export default async function Page({ params }) {
    const { slug } = await params;

    const service = services.find(
        (item) => item.slug === slug
    );

    if (!service) {
        notFound();
    }

    return (
        <ServiceCard
            icon={service.icon}
            header={service.title}
            para={service.para}
            p={service.p}
            paragraph={service.paragraph}
        />
    );
}