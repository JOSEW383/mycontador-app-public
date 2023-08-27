import FooterCentered from "@/components/Home/FooterCentered";
import AppNavBar from "@/components/app/AppNavBar";

export default function AppLayout({ children }) {
  return (
    <>
      <AppNavBar />
      <section style={{ minHeight: '100vh' }} >{children}</section>
      <FooterCentered />
    </>
  );
}
