import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component2.module.css";

export type Component2Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propRowGap?: CSSProperties["rowGap"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propOverflowX?: CSSProperties["overflowX"];
};

const Component2: NextPage<Component2Type> = ({
  className = "",
  propAlignSelf,
  propRowGap,
  propWidth,
  propHeight,
  propOverflowX,
}) => {
  const component6Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      rowGap: propRowGap,
      width: propWidth,
      height: propHeight,
      overflowX: propOverflowX,
    };
  }, [propAlignSelf, propRowGap, propWidth, propHeight, propOverflowX]);

  return (
    <div
      className={[styles.component6, className].join(" ")}
      style={component6Style}
    >
      <div className={styles.component6Child} />
      <div className={styles.cumhuriyetMahallesiNo}>
        Cumhuriyet Mahallesi, No K4 D4, Nilüfer Hatun Cd. No:140, 16140
        Nilüfer/Bursa
      </div>
      <div className={styles.kurumsal}>KURUMSAL</div>
      <div className={styles.letm}>İLETİŞİM</div>
      <div className={styles.adres}>ADRES</div>
      <div className={styles.gizlilikSzlemesi}>Gizlilik Sözleşmesi</div>
      <div className={styles.div}>+90 (224) 450 00 03</div>
      <div className={styles.hizmetArtlar}>Hizmet Şartları</div>
      <div className={styles.ptalVeAde}>İptal ve İade Şartları</div>
      <div className={styles.mteriDestek}>Müşteri Destek</div>
      <div className={styles.infodrmbilisimcom}>info@drmbilisim.com</div>
      <div className={styles.tmHaklarSakldr}>
        ©2007-2021 Tüm Hakları Saklıdır.
      </div>
      <img className={styles.component6Item} alt="" src="/group-55.svg" />
      <div className={styles.component6Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.component6Child1} />
    </div>
  );
};

export default Component2;
