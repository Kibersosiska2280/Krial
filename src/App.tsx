
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";

import MainLayout from "./layouts/MainLayout";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contacts from "./pages/Contacts";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// B2B Service pages
import LdspEgger from "./pages/services/LdspEgger";
import CustomFurniture from "./pages/services/CustomFurniture";
import ContractProduction from "./pages/services/ContractProduction";
import TenderProduction from "./pages/services/TenderProduction";
import FurnitureDesign from "./pages/services/FurnitureDesign";

// Materials pages
import MdfFacades from "./pages/services/MdfFacades";


// Legal pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Offer from "./pages/Offer";
import Cookies from "./pages/Cookies";

// Cutting pages
import LdspCutting from "./pages/cutting/LdspCutting";
import LdspEggerCutting from "./pages/cutting/LdspEggerCutting";
import EdgeBanding from "./pages/cutting/EdgeBanding";
import Drilling from "./pages/cutting/Drilling";
import FurnitureCutting from "./pages/cutting/FurnitureCutting";
import MdfCutting from "./pages/cutting/MdfCutting";
import DspMilling from "./pages/cutting/DspMilling";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ldsp-egger" element={<LdspEgger />} />
          <Route path="/services/custom-furniture" element={<CustomFurniture />} />
          <Route path="/services/contract" element={<ContractProduction />} />
          <Route path="/services/tenders" element={<TenderProduction />} />
          <Route path="/services/design" element={<FurnitureDesign />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/catalog" element={<Navigate to="/services" replace />} />
          <Route path="/catalog/:id" element={<Navigate to="/services" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/materials/mdf-facades" element={<MdfFacades />} />
          
          <Route path="/cutting/ldsp" element={<LdspCutting />} />
          <Route path="/cutting/ldsp-egger" element={<LdspEggerCutting />} />
          <Route path="/cutting/edge-banding" element={<EdgeBanding />} />
          <Route path="/cutting/drilling" element={<Drilling />} />
          <Route path="/cutting/furniture-cutting" element={<FurnitureCutting />} />
          <Route path="/cutting/mdf" element={<MdfCutting />} />
          <Route path="/cutting/milling" element={<DspMilling />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <ScrollToTop />
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
