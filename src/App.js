import "./App.css";
import { ProviderAuth } from "./context/auth";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <ProviderAuth>
        <Login />
      </ProviderAuth>
    </div>
  );
}

export default App;
