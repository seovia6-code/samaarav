import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";

export default function OraclePage() {
  const data = servicesData["oracle"];
  
  if (!data) {
    notFound();
  }
  
  return <ServiceTemplate data={data} />;
}
