import React from "react";
import Acceuil from "./Page/Acceuil";
import {Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import ServicePage from "./Page/ServicePage";
import ContactPage from "./Page/ContactPage";
import PostulerPage from "./Page/PostulerPage";
import './Config/i18n.js'
import ErrorNotFound from "./Component/Error/ErrorNotFound";
import LanguageGuard from "./Page/LanguageGuard";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/fr/" />} />
                    <Route path="/:lang" element={<LanguageGuard><Acceuil /></LanguageGuard>} />
                    <Route path="/:lang/service" element={<LanguageGuard><ServicePage /></LanguageGuard>} />
                    <Route path="/:lang/contact" element={<LanguageGuard><ContactPage /></LanguageGuard>} />
                    <Route path="/:lang/postule-employe" element={<LanguageGuard><PostulerPage /></LanguageGuard>} />
                    <Route path="/notfound" element={<ErrorNotFound />} />
                    <Route path="/*" element={<Navigate to="/notfound" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
