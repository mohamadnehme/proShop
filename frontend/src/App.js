import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
