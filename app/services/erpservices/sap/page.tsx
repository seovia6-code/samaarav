import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function SapStaffingPage() {
  return <ServiceTemplate data={servicesData["sap"]} />;
}
