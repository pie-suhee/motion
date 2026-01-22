import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from '../css/HoverEvent.module.scss';

const HoverEvent = () => {
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });

    const handleItem1Enter = contextSafe(() => {
        gsap.to(`.${styles.item2}`, { height: '20%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item3}`, { height: '15%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item4}`, { height: '10%', duration: 0.5, ease: 'power2.out' });
    });

    const handleItem2Enter = contextSafe(() => {
        gsap.to(`.${styles.item2}`, { height: '95%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item3}`, { height: '15%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item4}`, { height: '10%', duration: 0.5, ease: 'power2.out' });
    });

    const handleItem3Enter = contextSafe(() => {
        gsap.to(`.${styles.item2}`, { height: '95%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item3}`, { height: '90%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item4}`, { height: '10%', duration: 0.5, ease: 'power2.out' });
    });

    const handleItem4Enter = contextSafe(() => {
        gsap.to(`.${styles.item2}`, { height: '95%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item3}`, { height: '90%', duration: 0.5, ease: 'power2.out' });
        gsap.to(`.${styles.item4}`, { height: '85%', duration: 0.5, ease: 'power2.out' });
    });

    // --- 공통: 마우스가 나가면 원래대로 (75, 50, 25) ---
    const resetHeights = contextSafe(() => {
        gsap.to(`.${styles.item2}`, { height: '75%', duration: 0.5, ease: 'power2.inOut' });
        gsap.to(`.${styles.item3}`, { height: '50%', duration: 0.5, ease: 'power2.inOut' });
        gsap.to(`.${styles.item4}`, { height: '25%', duration: 0.5, ease: 'power2.inOut' });
    });

    return (
        <div className={styles.wrapper} ref={container}>
            <section className={styles.hoverSection} onMouseLeave={resetHeights}>
                <article className={`${styles.item} ${styles.item1}`} onMouseEnter={handleItem1Enter}>
                    <div className={styles.bar}></div>
                    <div className={styles.ti_box}>
                        <div className={styles.text_box}>
                           <p className={styles.tit}></p> 
                           <p className={styles.desc}></p> 
                        </div>
                        <div className={styles.icon_box}></div>
                    </div>
                </article>
                <article className={`${styles.item} ${styles.item2}`} onMouseEnter={handleItem2Enter}>
                    <div className={styles.bar}></div>
                    <div className={styles.ti_box}>
                        <div className={styles.text_box}>
                           <p className={styles.tit}></p> 
                           <p className={styles.desc}></p> 
                        </div>
                        <div className={styles.icon_box}></div>
                    </div>
                </article>
                <article className={`${styles.item} ${styles.item3}`} onMouseEnter={handleItem3Enter}>
                    <div className={styles.bar}></div>
                    <div className={styles.ti_box}>
                        <div className={styles.text_box}>
                           <p className={styles.tit}></p> 
                           <p className={styles.desc}></p> 
                        </div>
                        <div className={styles.icon_box}></div>
                    </div>
                </article>
                <article className={`${styles.item} ${styles.item4}`} onMouseEnter={handleItem4Enter}>
                    <div className={styles.bar}></div>
                    <div className={styles.ti_box}>
                        <div className={styles.text_box}>
                           <p className={styles.tit}></p> 
                           <p className={styles.desc}></p> 
                        </div>
                        <div className={styles.icon_box}></div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default HoverEvent;