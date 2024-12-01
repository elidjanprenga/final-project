import CsSpecialists from "@/src/components/AboutUS/CsSpecialists";
import HeroSection from "@/src/components/AboutUS/Hero";
import OurCertefications from "@/src/components/AboutUS/OurCertefications";
import OurFounders from "@/src/components/AboutUS/OurFounders";
import OurLocations from "@/src/components/AboutUS/OurLocations";
import SaAdvisors from "@/src/components/AboutUS/SaAdvisors";
import WhyUs from "@/src/components/AboutUS/WhyUS";

const About = () => {
    return(
        <div>
            <HeroSection />
            <OurLocations />
            <OurFounders />
            <CsSpecialists/>
            <SaAdvisors />
            <OurCertefications/>
            <WhyUs/>
        </div>
    )
}

export default About;