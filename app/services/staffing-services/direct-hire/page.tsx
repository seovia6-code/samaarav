import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";

export default function DirectHirePage() {
  const data = servicesData["direct-hire"];
  
  if (!data) {
    notFound();
  }
  
  return <ServiceTemplate data={data} />;
}
