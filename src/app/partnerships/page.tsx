

import React from "react";
import HeroPartnership from "@/src/components/Partnership/HeroPartnership";
import PartnershipsList from "@/src/components/Partnership/PartnershipsList";
import PartnershipTestimonials from "@/src/components/Partnership/PartnershipTestimonials";






const Partnership = () => {
    return (
        <div className="partnerships-page">
            <HeroPartnership/>
            <PartnershipsList/>
            <PartnershipTestimonials/>
        </div>
    )
}
export default Partnership;