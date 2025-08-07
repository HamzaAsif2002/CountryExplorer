import { Outlet } from "react-router";
import { Footer } from "./UI/Footer";
import { Header } from "./UI/Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
