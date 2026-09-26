import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesData } from "@/data/servicesData";

export default function OdooStaffingPage() {
  return <ServiceTemplate data={servicesData["odoo"]} />;
}
