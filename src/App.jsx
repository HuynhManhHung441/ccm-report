import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/routes";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
