import React from "react";
import ServiceHeroSection from "@/src/components/Services/ServiceHero";
import serviceData from "../../../data/serviceData";
import { Service, ServiceKey } from "../../../data/serviceData";
import CardSection from "@/src/components/Services/CardSection";
import ServiceContent from "@/src/components/Services/ServiceContent";



interface ServicePageProps {
  params: {
    service: string; // Dynamic parameter
  };
}

const ServiceDynamicPage = ({ params }: ServicePageProps) => {
  const { service } = params;

  // Type-guard and fetch the service data
  const isValidServiceKey = (key: string): key is ServiceKey => {
    return key in serviceData;
  };

  const currentService: Service | undefined = isValidServiceKey(service)
    ? serviceData[service]
    : undefined;

  if (!currentService) {
    return <p>Service not found!</p>;
  }

  return (
    <div className="services">
      <ServiceHeroSection data={currentService.heroSection}/>
      <CardSection data={currentService} />
      <ServiceContent data={currentService}/>
    </div>
  );
};

export default ServiceDynamicPage;