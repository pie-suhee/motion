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
                start: "top top",      // 트리거 상단이 화면 상단에 닿을 때 시작
                end: "+=3500",         // 3500px만큼 스크롤 하는 동안 진행
                scrub: 1,              // 스크롤 속도에 동기화
                pin: true,             // 부모 컨테이너만 고정!!
                anticipatePin: 1,
            }
        });
        
        // 동시에 실행될 애니메이션들
        tl.to(boxRef.current, { width: "100%", height: "100%", ease: "none", duration: 0.7 })
            .to({}, { duration: 0.3 });

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