import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../css/ScrollEvent2.module.scss';

gsap.registerPlugin(ScrollTrigger);

const ScrollEvent2 = () => {
    const boxRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // GSAP 애니메이션 설정
        // 타임라인 생성: 스크롤에 묶인 애니메이션 묶음
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=1500",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                // markers: true,
            }
        });
        
        // 동시에 실행될 애니메이션들
        tl.to(boxRef.current, { width: "100%", ease: "none", duration: 1 });

        return () => {
            // 모든 ScrollTrigger 제거
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <section ref={containerRef} className={styles.section}>
                <div className={styles.container}>
                    <div ref={boxRef} className={styles.box}></div>
                </div>
            </section>
            <section className={styles.bottomSpace}>끝났습니다!</section>
        </div>
    );
};

export default ScrollEvent2;