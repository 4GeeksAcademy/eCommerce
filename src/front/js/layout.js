import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./pages/characters.jsx";
import { CharactersDetails } from "./pages/charactersDetails.jsx";
import { Planets } from "./pages/planets.jsx";
import { PlanetDetails } from "./pages/planetsDetails.jsx";
import { Starships } from "./pages/starships.jsx";
import { StarshipsDetails } from "./pages/starshipsDetails.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Characters />} path="/characters"/>
                        <Route element={<CharactersDetails />} path="/charactersDetails/:id" />
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<PlanetDetails />} path="/planetsdetails/:uid" />
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<StarshipsDetails />} path="/starshipsdetails/:id" />

                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
