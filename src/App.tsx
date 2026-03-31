import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GlobalHub from "./pages/GlobalHub";
import BrasilHub from "./pages/BrasilHub";
import MedSpa from "./pages/global/MedSpa";
import HairSalon from "./pages/global/HairSalon";
import DentalClinic from "./pages/global/DentalClinic";
import AutoDetailing from "./pages/global/AutoDetailing";
import LawFirm from "./pages/global/LawFirm";
import RealEstate from "./pages/global/RealEstate";
import HomeServices from "./pages/global/HomeServices";
import ClinicaEstetica from "./pages/brasil/ClinicaEstetica";
import SalaoCabeleireiro from "./pages/brasil/SalaoCabeleireiro";
import Dentista from "./pages/brasil/Dentista";
import EsteticaAutomotiva from "./pages/brasil/EsteticaAutomotiva";
import Advogado from "./pages/brasil/Advogado";
import Imobiliaria from "./pages/brasil/Imobiliaria";
import ClinicaPremium from "./pages/brasil/ClinicaPremium";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/global" element={<GlobalHub />} />
          <Route path="/brasil" element={<BrasilHub />} />
          <Route path="/global/med-spa" element={<MedSpa />} />
          <Route path="/global/hair-salon" element={<HairSalon />} />
          <Route path="/global/dental-clinic" element={<DentalClinic />} />
          <Route path="/global/auto-detailing" element={<AutoDetailing />} />
          <Route path="/global/law-firm" element={<LawFirm />} />
          <Route path="/global/real-estate" element={<RealEstate />} />
          <Route path="/global/home-services" element={<HomeServices />} />
          <Route path="/brasil/clinica-estetica" element={<ClinicaEstetica />} />
          <Route path="/brasil/salao-cabeleireiro" element={<SalaoCabeleireiro />} />
          <Route path="/brasil/dentista" element={<Dentista />} />
          <Route path="/brasil/estetica-automotiva" element={<EsteticaAutomotiva />} />
          <Route path="/brasil/advogado" element={<Advogado />} />
          <Route path="/brasil/imobiliaria" element={<Imobiliaria />} />
          <Route path="/brasil/clinica-premium" element={<ClinicaPremium />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
