import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Link to="/scrollevent">
                <button>스크롤 이벤트</button>
            </Link>
        </div>
    );
};

export default Main;