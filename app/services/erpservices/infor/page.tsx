import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function InforStaffingPage() {
  return <ServiceTemplate data={servicesData["infor"]} />;
}
