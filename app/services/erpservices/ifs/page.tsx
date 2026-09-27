import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function IFSStaffingPage() {
  return <ServiceTemplate data={servicesData["ifs"]} />;
}
