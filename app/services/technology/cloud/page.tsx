import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function CloudStaffingPage() {
  return <ServiceTemplate data={servicesData["cloud"]} />;
}
