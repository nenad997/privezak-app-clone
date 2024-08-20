import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainLayout from "./components/shared/MainLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PrivacyPoliticsPage from "./pages/PrivacyPolitics";
import TermsOfUsePage from "./pages/TermsOfUse";
import DeliveryPage from "./pages/Delivery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" Component={HomePage} />
          <Route path="/o-nama" Component={AboutPage} />
          <Route path="/kontakt" Component={ContactPage} />
          <Route path="/politika-privatnosti" Component={PrivacyPoliticsPage} />
          <Route path="/uslovi-koriscenja" Component={TermsOfUsePage} />
          <Route path="/dostava" Component={DeliveryPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
