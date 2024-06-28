import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component3 from "../components/component3";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./component-5.module.css";

const WEB: NextPage = ({ className = "" }) => {
  const [isComponent2Open, setComponent2Open] = useState(false);
  const router = useRouter();

  const openComponent2 = useCallback(() => {
    setComponent2Open(true);
  }, []);

  const closeComponent2 = useCallback(() => {
    setComponent2Open(false);
  }, []);

  const onHakkmzdaTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onReferanslarmzTextClick = useCallback(() => {
    router.push("/referanslar");
  }, [router]);

  const onEitimlerTextClick = useCallback(() => {
    router.push("/eitimler");
  }, [router]);

  const onBasndaTextClick = useCallback(() => {
    router.push("/basnda");
  }, [router]);

  const onBlogTextClick = useCallback(() => {
    router.push("/blog");
  }, [router]);

  const onLetiimTextClick = useCallback(() => {
    router.push("/iletiim");
  }, [router]);

  return (
    <>
      <div className={[styles.component5, className].join(" ")}>
        <div className={styles.header}>
          <div className={styles.navbar}>
            <a className={styles.hakkmzda} onClick={onHakkmzdaTextClick}>
              Hakkımızda
            </a>
            <div className={styles.logoContainer}>
              <div
                className={styles.hizmetlerimizParent}
                onClick={openComponent2}
              >
                <a className={styles.hizmetlerimiz}>Hizmetlerimiz</a>
                <div className={styles.servicesIcon}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
            <a
              className={styles.referanslarmz}
              onClick={onReferanslarmzTextClick}
            >
              Referanslarımız
            </a>
            <a className={styles.eitimler} onClick={onEitimlerTextClick}>
              Eğitimler
            </a>
            <a className={styles.basnda} onClick={onBasndaTextClick}>
              Basında
            </a>
            <a className={styles.blog} onClick={onBlogTextClick}>
              Blog
            </a>
            <a className={styles.letiim} onClick={onLetiimTextClick}>
              İletişim
            </a>
          </div>
          <div className={styles.action}>
            <div className={styles.actionButton}>
              <div className={styles.buttonLabel}>
                <a className={styles.teklifAl} onClick={onLetiimTextClick}>
                  Teklif Al
                </a>
              </div>
              <a className={styles.tr}>TR</a>
            </div>
          </div>
        </div>
        <section className={styles.footer}>
          <div className={styles.footerColumns} />
          <div className={styles.footerColumns1} />
          <div className={styles.footerColumnOne} />
          <div className={styles.footerColumnTwo} />
          <img
            className={styles.footerChild}
            loading="lazy"
            alt=""
            src="/group-54.svg"
          />
          <div className={styles.footerCopyright} />
        </section>
        <div className={styles.languageSwitcher}>
          <a className={styles.en}>EN</a>
        </div>
      </div>
      {isComponent2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeComponent2}
        >
          <Component3 onClose={closeComponent2} />
        </PortalPopup>
      )}
    </>
  );
};

export default WEB;
