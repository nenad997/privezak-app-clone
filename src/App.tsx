import { useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

import MainLayout from "./components/shared/MainLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PrivacyPoliticsPage from "./pages/PrivacyPolitics";
import TermsOfUsePage from "./pages/TermsOfUse";
import DeliveryPage from "./pages/Delivery";
import { generateTitle } from "./util/helpers";

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    generateTitle(pathname);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" Component={MainLayout}>
        <Route index={true} Component={HomePage} />
        <Route path="/o-nama" Component={AboutPage} />
        <Route path="/kontakt" Component={ContactPage} />
        <Route path="/politika-privatnosti" Component={PrivacyPoliticsPage} />
        <Route path="/uslovi-koriscenja" Component={TermsOfUsePage} />
        <Route path="/dostava" Component={DeliveryPage} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
