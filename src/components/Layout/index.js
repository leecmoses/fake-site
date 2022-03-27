import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";

function Layout({ children }) {
  return (
    <div className="main">
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
