import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";
import LocationTemplate from "./pages/LocationTemplate";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/locations/template" element={<LocationTemplate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
