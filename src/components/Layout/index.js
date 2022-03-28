import Header from "../Header/index.js";
import Hero from "../Hero/index.js";
import Footer from "../Footer/index.js";

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
