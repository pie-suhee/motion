import { Route, Routes, useLocation } from "react-router-dom";

import Main from "./page/Main";
import ScrollEvent from "./page/ScrollEvent"
import ScrollEvent2 from "./page/ScrollEvent2"

const App = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />}/>
            <Route path="/scrollevent" element={<ScrollEvent />}/>
            <Route path="/scrollevent2" element={<ScrollEvent2 />}/>
        </Routes>
    );
};

export default App;