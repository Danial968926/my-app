import Hero1 from "@/components/Hero1";
import TestimonialCards from "@/components/testimonials/TestimonialCards";
import Customizable from "@/components/testimonials/Customizable";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";

export const metadata = {
    title: "Testimonials | OSOZ MBS",
    description:
        "See what healthcare providers and medical practices say about our medical billing and revenue cycle management services.",
};

export default function TestimonialsPage() {
    return (
        <>

            {/* Intro / Hero */}
            <Hero1 />

            {/* Client Testimonials Grid */}
            <TestimonialCards />

            {/* Pricing CTA */}
            <Customizable />

            {/* Reviews Slider */}
            <TestimonialSlider />
        </>
    );
}