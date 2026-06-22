import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Outlet } from "react-router";
import { useTheme } from "@/context/ThemeContext";

function Layout() {
  useTheme()
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;