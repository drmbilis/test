import type { NextPage } from "next";
import styles from "./component-6.module.css";

const Component1: NextPage = ({ className = "" }) => {
  return (
    <div className={[styles.component6, className].join(" ")}>
      <section className={styles.image} />
      <div className={styles.header}>
        <div className={styles.kurumsal}>KURUMSAL</div>
        <div className={styles.terms}>
          <div className={styles.gizlilikSzlemesi}>Gizlilik Sözleşmesi</div>
          <div className={styles.hizmetArtlar}>Hizmet Şartları</div>
          <div className={styles.ptalVeAde}>İptal ve İade Şartları</div>
          <div className={styles.mteriDestek}>Müşteri Destek</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentChild} />
      </div>
      <div className={styles.contactInfo}>
        <a className={styles.letm}>İLETİŞİM</a>
        <div className={styles.email}>
          <div className={styles.emailAddress}>+90 (224) 450 00 03</div>
          <div className={styles.infodrmbilisimcom}>info@drmbilisim.com</div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.contentItem} />
      </div>
      <div className={styles.addressInfo}>
        <div className={styles.adres}>ADRES</div>
        <div className={styles.cumhuriyetMahallesiNo}>
          Cumhuriyet Mahallesi, No K4 D4, Nilüfer Hatun Cd. No:140, 16140
          Nilüfer/Bursa
        </div>
      </div>
      <div className={styles.separator}>
        <div className={styles.separatorChild} />
      </div>
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <img
            className={styles.copyrightChild}
            loading="lazy"
            alt=""
            src="/group-55.svg"
          />
          <div className={styles.tmHaklarSakldr}>
            ©2007-2021 Tüm Hakları Saklıdır.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
