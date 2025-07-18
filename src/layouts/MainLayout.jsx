import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <div className="main-wrapper">
          <Outlet />
           <Footer />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
