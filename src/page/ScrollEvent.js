import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../css/ScrollEvent.module.scss';

gsap.registerPlugin(ScrollTrigger);

const ScrollEvent = () => {
    const rightSectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        // GSAP 애니메이션 설정
        // 타임라인 생성: 스크롤에 묶인 애니메이션 묶음
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",      // 트리거 상단이 화면 상단에 닿을 때 시작
                end: "+=3500",         // 3500px만큼 스크롤 하는 동안 진행
                scrub: 1,              // 스크롤 속도에 동기화
                pin: true,             // 부모 컨테이너만 고정!!
                anticipatePin: 1,
            }
        });
        
        // 동시에 실행될 애니메이션들
        tl.to(rightSectionRef.current, { width: "100%", ease: "none", duration: 0.7 })
            .to({}, { duration: 0.3 });

        return () => {
            // 모든 ScrollTrigger 제거
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            {/* 고정될 영역을 감싸는 컨테이너 */}
            <div ref={triggerRef} className={styles.scrollWrapper}>
                <div className={styles.pinSection}>
                    <div className={styles.leftSection}></div>
                    <div ref={rightSectionRef} className={styles.rightSection}></div>
                </div>
            </div>

            <div className={styles.bottomSpace}>끝났습니다!</div>
        </div>
    );
};

export default ScrollEvent;