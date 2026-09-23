import { Routes, Route } from "react-router-dom";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { FooterSection } from "@/components/ui/footer-section";
import { ScrollToHash } from "@/components/ScrollToHash";
import { Home } from "@/pages/Home";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHash />
      <TubelightNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
