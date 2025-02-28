import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useLoaderContext } from "../context/LoaderContext";

export default function DefaultLayout() {
  const { isLoading } = useLoaderContext();

  return (
    <>
      <Header />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <Footer />
    </>
  );
}
