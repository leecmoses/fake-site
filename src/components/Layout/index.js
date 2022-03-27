import Header from "../Header.js";
import Hero from "../Hero.js";
import Footer from "../Footer.js";

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
