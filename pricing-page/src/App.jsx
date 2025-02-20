import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import PricingCards from "./components/PricingCards";
import ComparePlansTable from "./components/ComparePlansTable";
import Footer from "./components/Footer";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <Container>
      <NavigationBar />
      <Header />
      <PricingCards />
      <ComparePlansTable />
      <hr className="my-4" /> 
      <Footer/>
    </Container>
  );
}

export default App;
