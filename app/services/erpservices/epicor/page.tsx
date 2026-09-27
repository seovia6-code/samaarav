import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function EpicorStaffingPage() {
  return <ServiceTemplate data={servicesData["epicor"]} />;
}
