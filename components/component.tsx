import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import Component3 from "./component3";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./component.module.css";

export type ComponentType = {
  className?: string;

  /** Style props */
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivFlex?: CSSProperties["flex"];
};

const Component: NextPage<ComponentType> = ({
  className = "",
  frameDivAlignSelf,
  frameDivFlex,
}) => {
  const [isComponent2Open, setComponent2Open] = useState(false);
  const component5Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
    };
  }, [frameDivAlignSelf, frameDivFlex]);

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
      <div
        className={[styles.component5, className].join(" ")}
        style={component5Style}
      >
        <div className={styles.component5Child} />
        <div className={styles.component5Item} />
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
        <div className={styles.component5Inner} />
        <div className={styles.rectangleDiv} />
        <img className={styles.groupIcon} alt="" src="/group-54.svg" />
        <div className={styles.tr}>TR</div>
        <div className={styles.en}>EN</div>
        <div className={styles.hizmetlerimizParent} onClick={openComponent2}>
          <div className={styles.hizmetlerimiz}>Hizmetlerimiz</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.component5Child1} />
        <div className={styles.teklifAl} onClick={onLetiimTextClick}>
          Teklif Al
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

export default Component;
