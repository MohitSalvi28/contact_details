import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import { Button } from "bootstrap";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
