import HeroSection from "@/components/about/HeroSection";
import StatsSection from "@/components/about/StatsSection";
import SolutionsSection from "@/components/about/SolutionsSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Specializations from "@/components/about/Specializations";
import CTASection from "@/components/about/CTASection";

export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <SolutionsSection />
            <WhyChooseUs />
            <Specializations />
            <CTASection />
        </>
    );
}