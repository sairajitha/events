import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  // check if URL contains "president"
  const isPresidentRoute = location.pathname.includes("president");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Header (hidden for president routes) */}
      {!isPresidentRoute && <Header />}

      {/* Main Content */}
      <main className={`flex-1 ${!isPresidentRoute ? "pt-16" : ""}`}>
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>

      {/* Footer (hidden for president routes) */}
      {!isPresidentRoute && <Footer />}

    </div>
  );
}

export default Layout;