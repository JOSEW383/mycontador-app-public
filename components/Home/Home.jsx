import Landing from "./Landing";
import HeaderLanding from "./HeaderLanding";
import Features from "./Features";
import FooterCentered from "./FooterCentered";
import Carousel from "./CarouselLanding";
import DownloadAppLanding from "./DownloadAppLanding";

export default function Login() {
  return (
    <>
      <HeaderLanding>
        <Landing />
        <Features />
        <DownloadAppLanding />
        <Carousel />
        <FooterCentered />
      </HeaderLanding>
    </>
  );
}
