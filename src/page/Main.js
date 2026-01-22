import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Main.module.scss';

const Main = () => {
    return (
        <main class={styles.main}>
            <section class={styles.layout}>
                <h1>MOTION</h1>

                <Link to="/scrollevent" class={styles.link}>
                    스크롤 이벤트
                </Link>
                <Link to="/scrollevent2" class={styles.link}>
                    스크롤 이벤트 2
                </Link>
                <Link to="/hoverevent" class={styles.link}>
                    호버 이벤트
                </Link>
            </section>
        </main>
    );
};

export default Main;