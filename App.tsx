
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';
import TruckingService from './pages/TruckingService';
import WarehouseService from './pages/WarehouseService';
import SupplyChainService from './pages/SupplyChainService';
import FactoryLogisticsService from './pages/FactoryLogisticsService';
import BusinessDeliveryService from './pages/BusinessDeliveryService';
import PackingMovingService from './pages/PackingMovingService';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#f39223] selection:text-white">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/trucking" element={<TruckingService />} />
          <Route path="/services/warehousing" element={<WarehouseService />} />
          <Route path="/services/supply-chain" element={<SupplyChainService />} />
          <Route path="/services/factory-logistics" element={<FactoryLogisticsService />} />
          <Route path="/services/business-delivery" element={<BusinessDeliveryService />} />
          <Route path="/services/packing-moving" element={<PackingMovingService />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
