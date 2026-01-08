import { Route, Routes, useLocation } from "react-router-dom";

import Main from "./page/Main";
import ScrollEvent from "./page/ScrollEvent"

const App = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />}/>
            <Route path="/scrollevent" element={<ScrollEvent />}/>
        </Routes>
    );
};

export default App;