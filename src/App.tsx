// src/App.tsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import SubscribePage from "./pages/subscribe";
import PaymentPage from "./pages/payment";
import SignInPage from "./pages/signin";
import { Layout } from "./components/layouts/main";

function App() {
  // State to hold the selected plan
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);
  // TODO: just changing this to see if it will build
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route
            path="/subscribe"
            element={<SubscribePage setSelectedPlan={setSelectedPlan} />}
          />
          {selectedPlan && (
            <Route
              path="/payment"
              element={
                <PaymentPage
                  selectedPlan={selectedPlan}
                  onBack={() => setSelectedPlan(null)}
                />
              }
            />
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
