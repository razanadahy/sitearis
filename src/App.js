import React, {useEffect} from "react";
import Acceuil from "./Page/Acceuil";
import {Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import ServicePage from "./Page/ServicePage";
import ContactPage from "./Page/ContactPage";
import PostulerPage from "./Page/PostulerPage";
import './Config/i18n.js'
import ErrorNotFound from "./Component/Error/ErrorNotFound";
import LanguageGuard from "./Page/LanguageGuard";
import Apropos from "./Page/Apropos";
import NosAnvantage from "./Page/NosAnvantage";
import DetailService from "./Page/DetailService";
import EbookDowload from "./Page/EbookDowload";

function App() {
    useEffect(() => {
        const handleWheel = (event) => {
            if (event.ctrlKey) {
                event.preventDefault();
            }
        };

        const handleKeyDown = (event) => {
            if (event.ctrlKey && (event.key === '+' || event.key === '-')) {
                event.preventDefault();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/fr/" />} />
                    <Route path="/:lang" element={<LanguageGuard><Acceuil /></LanguageGuard>} />
                    <Route path="/:lang/service" element={<LanguageGuard><ServicePage /></LanguageGuard>} />
                    <Route path="/:lang/contact" element={<LanguageGuard><ContactPage /></LanguageGuard>} />
                    <Route path="/:lang/carrier" element={<LanguageGuard><PostulerPage /></LanguageGuard>} />
                    <Route path="/:lang/apropos" element={<LanguageGuard><Apropos /></LanguageGuard>} />
                    <Route path="/:lang/avantages" element={<LanguageGuard><NosAnvantage /></LanguageGuard>} />
                    <Route path="/:lang/ebook" element={<LanguageGuard><EbookDowload /></LanguageGuard>} />
                    <Route path="/:lang/service/:domaine/:service" element={<LanguageGuard><DetailService /></LanguageGuard>} />
                    <Route path="/notfound" element={<ErrorNotFound />} />
                    <Route path="/*" element={<Navigate to="/notfound" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
