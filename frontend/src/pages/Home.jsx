import Adoption from "@/components/Adoption";
import Main from "@/components/Main";
import Service from "@/components/Services";
import Cta from "../../src/components/Cta/index";
export default function Home() {
  return (
    <>
      <Main />
      <Service />
      <Adoption preview />
      <Cta />
    </>
  );
}
