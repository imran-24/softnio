import "./App.css";
import Contact from "./components/contact";
import Description from "./components/description";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Popular from "./components/popular";
import Review from "./components/review";

function App() {
  return (
    <div className='max-w-screen'>
      <Navbar />
      <div className="h-full">
        <Hero />
        <Description />
        <Popular />
        <Contact />
        <Review />
        <Footer />
      </div>
    </div>
  );
}

export default App;
