import ServicePage from "../components/ui/service";
import Homepage from "../components/ui/home";
import Acheivement from "@/components/ui/acheivement";
import Courses from "@/components/ui/courses";
import Team from "@/components/ui/team";
import Testimonials from "@/components/ui/testimonials";
import CompniesLogo from "@/components/ui/compnieslogo";
export default function Home() {
  return (
    <>
      <Homepage />
      <CompniesLogo />
      <ServicePage />
      <Acheivement />
      <Courses />
      <Team />
      <Testimonials />
    </>
  );
}
