import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import HomePage from "./pages/Index";
import ResearchPage from "./pages/Research";
import PeoplePage from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import PublicationsPage from "./pages/Publications";
import NewsPage from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import JoinUsPage from "./pages/JoinUs";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/people/:slug" element={<PersonDetail />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/join" element={<JoinUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
