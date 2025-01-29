import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Private from "./private";
import AppContainer from "../Components/AppContainer";

const Layout = () => {
  const location = useLocation();

  const hiddenRoutes = ["/", "/register"];

  const shouldHideHeaderFooter = hiddenRoutes.includes(location.pathname);

  return (
    <>
      <Private>
        {!shouldHideHeaderFooter && <Header />}

        <main>
          <AppContainer>
            <Outlet />
          </AppContainer>
        </main>

        {!shouldHideHeaderFooter && <Footer />}
      </Private>
    </>
  );
};

export default Layout;
