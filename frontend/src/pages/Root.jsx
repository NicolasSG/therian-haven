import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import WinnerPopup from "@/components/WinnerPopup";

export default function Root() {
  return (
    <>
      <WinnerPopup />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
