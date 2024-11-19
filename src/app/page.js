import About from "./components/pages/home/About";
import NavBar from "./components/pages/home/NavBar";
import Service from "./components/pages/home/Service";

export default function Home() {
  return (
    <div>
      <NavBar />
      <About />
      <Service />
    </div>
  );
}
