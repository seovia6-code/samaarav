import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function AiMlStaffingPage() {
  return <ServiceTemplate data={servicesData["ai-ml"]} />;
}
