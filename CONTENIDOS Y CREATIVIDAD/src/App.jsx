import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Instructions from "./pages/Instructions";
import Result from "./pages/Result";
import { Link } from "react-router-dom";
import "./App.css";
function Layout() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); document.querySelector('main')?.focus(); }, [location.pathname]);
  return <><a className="skip-link" href="#main">Saltar al contenido</a><Header /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/instructions" element={<Instructions />} />
    <Route path="/game" element={<Game key={location.key} />} />
    <Route path="/game/:tripId" element={<Game key={location.key} />} />
    <Route path="/result" element={<Result />} />
    <Route path="*" element={<main id="main" tabIndex={-1}><h1>Este destino no existe.</h1><Link to="/">Volver al inicio</Link></main>} />
  </Routes><Footer /></>;
}
export default function App() { return <BrowserRouter><Layout /></BrowserRouter>; }
