import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
  const location = useLocation();

  const hiddenRoutes = ["/login", "/register"];
  const shouldHideHeaderFooter = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}

      <main>
        <Outlet />
      </main>

      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
