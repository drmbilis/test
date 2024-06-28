import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component3 from "./component3";
import PortalPopup from "./portal-popup";
import WEB from "../pages/w-e-b";
import Component2 from "./component2";
import styles from "./iletiim.module.css";

export type IletiimType = {
  className?: string;
};

const Iletiim: NextPage<IletiimType> = ({ className = "" }) => {
  const [isComponent2Open, setComponent2Open] = useState(false);

  const openComponent2 = useCallback(() => {
    setComponent2Open(true);
  }, []);

  const closeComponent2 = useCallback(() => {
    setComponent2Open(false);
  }, []);

  return (
    <>
      <div className={[styles.iletiim, className].join(" ")}>
        <img className={styles.groupIcon} alt="" src="/group18@2x.png" />
        <img
          className={styles.coyslm4uiaaecsh1Icon}
          alt=""
          src="/coyslm4uiaaecsh-1@2x.png"
        />
        <img className={styles.maps1Icon} alt="" src="/maps-2@2x.png" />
        <div className={styles.bizeUlan}>Bize Ulaşın</div>
        <div className={styles.iletiimChild} />
        <div className={styles.bizimleLetiimeGein}>
          Bizimle İletişime Geçin...
        </div>
        <div className={styles.iletiimItem} />
        <div className={styles.cumhuriyetMahallesiNilfer}>
          Cumhuriyet Mahallesi, Nilüfer Hatun Caddesi 140 K4 D4, 16140
          Nilüfer/Bursa
        </div>
        <div className={styles.adres}>Adres</div>
        <div className={styles.maps}>Maps</div>
        <div className={styles.div}>0224 450 00 03</div>
        <div className={styles.telefon}>Telefon</div>
        <div className={styles.infodrmbilisimcom}>info@drmbilisim.com</div>
        <div className={styles.email}>Email</div>
        <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector12.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector13.svg" />
        <WEB />
        <Component2
          propAlignSelf="unset"
          propRowGap="unset"
          propWidth="1920px"
          propHeight="235px"
          propOverflowX="unset"
        />
        <div className={styles.uzmanmzdanDestekAl}>Uzmanımızdan destek al!</div>
        <div className={styles.iletiimInner} />
        <div className={styles.ekAklamaVeya}>
          Ek açıklama veya farklı bir konuda da destek isterseniz bu kısımda
          belirtebilirsiniz.
        </div>
        <div className={styles.adnzVeSoyadnz}>Adınız ve Soyadınız</div>
        <div className={styles.irketinizinAd}>Şirketinizin Adı</div>
        <div className={styles.emailAdresiniz}>Email Adresiniz</div>
        <div className={styles.telefonNumaranz}>Telefon Numaranız</div>
        <div className={styles.gnder}>GÖNDER</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.iletiimChild1} />
        <div className={styles.iletiimChild2} />
        <div className={styles.iletiimChild3} />
        <div className={styles.iletiimChild4} />
        <div className={styles.iletiimChild5} />
        <div className={styles.iletiimChild6} />
        <div className={styles.iletiimChild7} />
        <div className={styles.iletiimChild8} />
        <div className={styles.iletiimChild9} />
        <div className={styles.iletiimChild10} />
        <div className={styles.iletiimChild11} />
        <div className={styles.iletiimChild12} />
        <div className={styles.webTasarm}>Web Tasarım</div>
        <div className={styles.sosyalMedya}>Sosyal Medya</div>
        <div className={styles.dijitalPazarlamaEitimi}>
          Dijital Pazarlama Eğitimi
        </div>
        <div className={styles.emailPazarlama}>Email Pazarlama</div>
        <div className={styles.dier}>Diğer</div>
        <div className={styles.seo}>SEO</div>
        <div className={styles.googleAds}>Google ADS</div>
        <div className={styles.mobilUygulama}>Mobil Uygulama</div>
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

export default Iletiim;
