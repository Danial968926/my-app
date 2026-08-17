import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ShopLocation from "@/components/contact/ShopLocation";
import Customizable from "@/components/testimonials/Customizable";

export const metadata = {
    title: "Contact Us | OSOZ Medical Billing Services",
    description:
        "Get in touch with OSOZ Medical Billing Services. Contact us for medical billing, coding, credentialing, revenue cycle management, and healthcare outsourcing services.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <ContactHero />

            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />

            {/* Map & Office Location */}
            <section className="mb-15">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">

                    {/* Office Information */}
                    <div className="lg:col-span-2">
                        <ShopLocation />
                    </div>

                    {/* Google Map */}
                    <div className="lg:col-span-3">
                        <ContactMap />
                    </div>

                </div>
            </section>
            {/* CTA Section */}
            <Customizable />
        </>
    );
}