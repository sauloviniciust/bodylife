import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";

export default function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
