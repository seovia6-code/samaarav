import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";

export default function ContractToHirePage() {
  const data = servicesData["contract-to-hire"];
  
  if (!data) {
    notFound();
  }
  
  return <ServiceTemplate data={data} />;
}
