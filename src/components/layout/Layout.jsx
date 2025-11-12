import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
