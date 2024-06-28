import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./component3.module.css";

export type Component3Type = {
  className?: string;
};

const Component3: NextPage<Component3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onWebTasarmTextClick = useCallback(() => {
    router.push("/web-tasarm");
  }, [router]);

  const onWebYazlmGelitirmeClick = useCallback(() => {
    router.push("/web-yazlm-gelitirme");
  }, [router]);

  const onMobilUygulamalarTextClick = useCallback(() => {
    router.push("/mobil-uygulamalar");
  }, [router]);

  const onZelYazlmZmleriClick = useCallback(() => {
    router.push("/zel-yazlm-zmleri");
  }, [router]);

  const onSEOTextClick = useCallback(() => {
    router.push("/seo");
  }, [router]);

  const onSosyalMedyaDanmanlClick = useCallback(() => {
    router.push("/sosyal-medya-danmanl");
  }, [router]);

  const onEmailPazarlamaTextClick = useCallback(() => {
    router.push("/email-pazarlama");
  }, [router]);

  return (
    <div className={[styles.component2, className].join(" ")}>
      <div className={styles.component2Child} />
      <div className={styles.webMobl}>WEB / MOBİL GELİŞTİRME</div>
      <div className={styles.webTasarm} onClick={onWebTasarmTextClick}>
        Web Tasarım
      </div>
      <div
        className={styles.webYazlmGelitirme}
        onClick={onWebYazlmGelitirmeClick}
      >
        Web Yazılım Geliştirme
      </div>
      <div
        className={styles.mobilUygulamalar}
        onClick={onMobilUygulamalarTextClick}
      >
        Mobil Uygulamalar
      </div>
      <div className={styles.zelYazlmZmleri} onClick={onZelYazlmZmleriClick}>
        Özel Yazılım Çözümleri
      </div>
      <div className={styles.eTicaretYazlmlar} onClick={onZelYazlmZmleriClick}>
        E-Ticaret Yazılımları
      </div>
      <div className={styles.eTicaretZmleri} onClick={onZelYazlmZmleriClick}>
        E-Ticaret Çözümleri
      </div>
      <div className={styles.seo} onClick={onSEOTextClick}>
        SEO
      </div>
      <div
        className={styles.sosyalMedyaDanmanl}
        onClick={onSosyalMedyaDanmanlClick}
      >
        Sosyal Medya Danışmanlığı
      </div>
      <div
        className={styles.emailPazarlama}
        onClick={onEmailPazarlamaTextClick}
      >
        Email Pazarlama
      </div>
      <div className={styles.domainHizmetleri}>Domain Hizmetleri</div>
      <div className={styles.hostingHizmetleri}>Hosting Hizmetleri</div>
      <div className={styles.sunucuHizmetleri}>Sunucu Hizmetleri</div>
      <div className={styles.googleHaritalaraKayt}>Google Haritalara Kayıt</div>
      <div className={styles.tantmFilmleri}>Tanıtım Filmleri</div>
      <div className={styles.ekimleri}>360° Çekimleri</div>
      <div className={styles.droneEkimleri}>Drone Çekimleri</div>
      <div className={styles.postProdksiyon}>Post Prodüksiyon</div>
      <div className={styles.kurguMontaj}>Kurgu Montaj</div>
      <div className={styles.grafikAnimasyon}>{`Grafik & Animasyon`}</div>
      <div className={styles.yandexHaritalaraKayt}>Yandex Haritalara Kayıt</div>
      <div className={styles.dierHaritalar}>Diğer Haritalar</div>
      <div className={styles.googleReklamlar}>Google Reklamları</div>
      <div className={styles.smsPazarlama}>Sms Pazarlama</div>
      <div className={styles.erikPazarlama}>İçerik Pazarlama</div>
      <div className={styles.djtalPazarlama}>DİJİTAL PAZARLAMA</div>
      <div className={styles.domanHostng}>{`DOMAİN & HOSTİNG`}</div>
      <div className={styles.hartalaraKayit}>HARİTALARA KAYIT</div>
      <div className={styles.multmedyaProdksyon}>MULTİMEDYA PRODÜKSİYON</div>
      <div className={styles.component2Item} />
      <div className={styles.component2Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.component2Child1} />
      <img className={styles.groupIcon} alt="" src="/group-18.svg" />
      <img className={styles.component2Child2} alt="" src="/group-19.svg" />
      <img className={styles.component2Child3} alt="" src="/group-20.svg" />
      <img className={styles.component2Child4} alt="" src="/group-21.svg" />
      <img className={styles.component2Child5} alt="" src="/group-22.svg" />
      <img className={styles.component2Child6} alt="" src="/group-23.svg" />
      <img className={styles.component2Child7} alt="" src="/group-24.svg" />
      <img className={styles.component2Child8} alt="" src="/group-25.svg" />
      <img className={styles.component2Child9} alt="" src="/group-26.svg" />
      <img className={styles.component2Child10} alt="" src="/group-27.svg" />
      <img className={styles.component2Child11} alt="" src="/group-28.svg" />
      <img className={styles.component2Child12} alt="" src="/group-29.svg" />
      <img className={styles.component2Child13} alt="" src="/group-30.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <img className={styles.component2Child14} alt="" src="/group-31.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles.component2Child15} alt="" src="/group-32.svg" />
      <img className={styles.component2Child16} alt="" src="/group-33.svg" />
      <img className={styles.component2Child17} alt="" src="/group-34.svg" />
      <img className={styles.component2Child18} alt="" src="/group-35.svg" />
      <img className={styles.component2Child19} alt="" src="/group-36.svg" />
      <img className={styles.component2Child20} alt="" src="/group-37.svg" />
      <img className={styles.groupIcon1} alt="" src="/group.svg" />
      <img className={styles.component2Child21} alt="" src="/group-66.svg" />
    </div>
  );
};

export default Component3;
