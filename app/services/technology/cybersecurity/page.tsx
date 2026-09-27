import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function CybersecurityStaffingPage() {
  return <ServiceTemplate data={servicesData["cybersecurity"]} />;
}
