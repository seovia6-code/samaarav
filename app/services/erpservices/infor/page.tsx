import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";

export default function InforPage() {
  const data = servicesData["infor"];
  
  if (!data) {
    notFound();
  }
  
  return <ServiceTemplate data={data} />;
}
