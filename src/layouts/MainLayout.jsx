import Header from "../components/Header";
import Footer from "../components/Footer";
import LightDarkmodel from "../components/LightDarkmodel";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Header>
        <LightDarkmodel />
      </Header>
      <main>
        <div className="main-wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
