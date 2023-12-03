import { createContext, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Donate from "./components/Donate";
import Home from "./components/Home";
import QRPage from "./components/QRPage";
import Success from "./components/Success";

export const store = createContext();

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <store.Provider
      value={{
        name,
        handleName,
        mail,
        handleMail,
        mobile,
        handleMobile,
        address,
        handleAddress,
        amount,
        handleAmount,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/qrpage" element={<QRPage />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </Router>
    </store.Provider>
  );
}

export default App;
