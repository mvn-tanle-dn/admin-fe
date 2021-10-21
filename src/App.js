import "./assets/scss/styles.scss";
import 'antd/dist/antd.css';
import { ProviderAuth } from "./context/auth";
import { BrowserRouter as Router } from 'react-router-dom';

import Login from "./pages/Auth/Login";
import LayoutDefault from "./pages/features/LayoutDefault";

function App() {
  return (
    <div className="App">
      <Router>
        <LayoutDefault/>
      </Router>
      <ProviderAuth>
        <Login />
      </ProviderAuth>
    </div>
  );
}

export default App;
