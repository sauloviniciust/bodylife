import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}
export { App };
