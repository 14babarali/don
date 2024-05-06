import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Auth/Login";
import ChatHisroty from "./components/ChatHisroty";
import Order from "./components/order";
import Phramcy from "./components/phramcy";
import Patint from "./components/patint";
import Request from "./components/request";
import Contact from "./components/contact";
import Adminhome from "./pages/Adminhome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Adminhome />} />
      <Route path="/chat" element={<ChatHisroty />} />
      <Route path="/order" element={<Order />} />
      <Route path="/user" element={<Patint />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/phr" element={<Phramcy />} />
      <Route path="*" element={<Pagenotfound />} />
        <Route path="/req" element={<Request />} />
    </Routes>
  );
}

export default App;
