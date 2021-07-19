import './App.css';
import { Helmet } from 'react-helmet';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Description text" />
        <meta name="author" content="Author text" />
        <title>Portfolio::Marvel Template</title>
      </Helmet>

      <Nav />

      <About />

      <Projects />

      <Features />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
