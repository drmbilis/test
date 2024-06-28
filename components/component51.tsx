import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Anasayfa from "./anasayfa";
import PortalPopup from "./portal-popup";
import Anasayfa from "../pages/anasayfa";
import styles from "./component51.module.css";

export type Component5Type = {
  className?: string;
};

const Component5: NextPage<Component5Type> = ({ className = "" }) => {
  const [isAnasayfaOpen, setAnasayfaOpen] = useState(false);

  const openAnasayfa = useCallback(() => {
    setAnasayfaOpen(true);
  }, []);

  const closeAnasayfa = useCallback(() => {
    setAnasayfaOpen(false);
  }, []);

  const onHakkmzdaTextClick = useCallback(() => {
    // Please sync "Hakkımızda" to the project
  }, []);

  const onReferanslarmzTextClick = useCallback(() => {
    // Please sync "Referanslar" to the project
  }, []);

  const onEitimlerTextClick = useCallback(() => {
    // Please sync "Eğitimler" to the project
  }, []);

  const onBasndaTextClick = useCallback(() => {
    // Please sync "Basında" to the project
  }, []);

  const onBlogTextClick = useCallback(() => {
    // Please sync "Blog" to the project
  }, []);

  const onLetiimTextClick = useCallback(() => {
    // Please sync "iletişim" to the project
  }, []);

  const onHizmetlerimizTextClick = useCallback(() => {
    // Please sync "Component 10" to the project
  }, []);

  return (
    <>
      <div className={[styles.component9, className].join(" ")}>
        <Anasayfa />
        <div className={styles.component9Child} />
        <div className={styles.hakkmzda} onClick={onHakkmzdaTextClick}>
          Hakkımızda
        </div>
        <div
          className={styles.referanslarmz}
          onClick={onReferanslarmzTextClick}
        >
          Referanslarımız
        </div>
        <div className={styles.eitimler} onClick={onEitimlerTextClick}>
          Eğitimler
        </div>
        <div className={styles.basnda} onClick={onBasndaTextClick}>
          Basında
        </div>
        <div className={styles.blog} onClick={onBlogTextClick}>
          Blog
        </div>
        <div className={styles.letiim} onClick={onLetiimTextClick}>
          İletişim
        </div>
        <div className={styles.component9Item} />
        <div className={styles.component9Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.component9Child1} />
        <div className={styles.component9Child2} />
        <div className={styles.component9Child3} />
        <div className={styles.component9Child4} />
        <div className={styles.hizmetlerimizParent}>
          <div
            className={styles.hizmetlerimiz}
            onClick={onHizmetlerimizTextClick}
          >
            Hizmetlerimiz
          </div>
          <div
            className={styles.vectorParent}
            onClick={onHizmetlerimizTextClick}
          >
            <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
            <div className={styles.groupChild} />
          </div>
        </div>
        <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
        <img className={styles.groupIcon} alt="" src="/group1.svg" />
        <img className={styles.groupIcon1} alt="" src="/group2.svg" />
        <img className={styles.groupIcon2} alt="" src="/group3.svg" />
        <img className={styles.groupIcon3} alt="" src="/group4.svg" />
        <img className={styles.groupIcon4} alt="" src="/group5.svg" />
        <img className={styles.groupIcon5} alt="" src="/group6.svg" />
      </div>
      {isAnasayfaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAnasayfa}
        >
          <Anasayfa onClose={closeAnasayfa} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component5;
