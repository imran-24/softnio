import "./App.css";
import About from "./components/about";
import Description from "./components/description";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Popular from "./components/popular";
import Review from "./components/review";

function App() {
  return (
    <div className='max-w-screen'>
      <Navbar>
        <Hero />
      </Navbar>
      <Description />
      <Popular />
      <About />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
