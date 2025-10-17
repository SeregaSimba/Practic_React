import "./Section.css";
import { Route, Routes } from "react-router-dom";
import TuDu from "../../pages/tuDu/tuDu";
import Registration from "../../pages/registration/registration";
import About from "../../pages/about/About";

export default function Section() {
  return (
    <>
      <section className="global-section">
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/TuDu" element={<TuDu />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </section>
    </>
  );
}
