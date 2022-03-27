import Header from "../header";
import Hero from "../hero";
import Footer from "../footer";

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
