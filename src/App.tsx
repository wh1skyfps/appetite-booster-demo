import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RestaurantePremium from "./pages/RestaurantePremium";
import Lanchonete from "./pages/Lanchonete";
import HamburgueriaArtesanal from "./pages/HamburgueriaArtesanal";
import Pizzaria from "./pages/Pizzaria";
import Sorveteria from "./pages/Sorveteria";
import AcaiDelivery from "./pages/AcaiDelivery";
import Cafeteria from "./pages/Cafeteria";
import PastelariaSnacks from "./pages/PastelariaSnacks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/restaurante-premium" element={<RestaurantePremium />} />
          <Route path="/lanchonete" element={<Lanchonete />} />
          <Route path="/hamburgueria-artesanal" element={<HamburgueriaArtesanal />} />
          <Route path="/pizzaria" element={<Pizzaria />} />
          <Route path="/sorveteria" element={<Sorveteria />} />
          <Route path="/acai-delivery" element={<AcaiDelivery />} />
          <Route path="/cafeteria" element={<Cafeteria />} />
          <Route path="/pastelaria-snacks" element={<PastelariaSnacks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
