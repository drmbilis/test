import type { NextPage } from "next";
import Component from "../components/component";
import Component2 from "../components/component2";
import styles from "./eitimler.module.css";

const Eitimler: NextPage = () => {
  return (
    <div className={styles.eitimler}>
      <img className={styles.groupIcon} alt="" src="/group13@2x.png" />
      <img
        className={styles.coyslm4uiaaecsh1Icon}
        alt=""
        src="/coyslm4uiaaecsh-1@2x.png"
      />
      <img className={styles.mobil11Icon} alt="" src="/mobil-1-1@2x.png" />
      <div className={styles.alirzaDurmazKimdir}>Alirıza Durmaz Kimdir?</div>
      <div className={styles.eitimlerChild} />
      <div className={styles.yandaLkVeContainer}>
        <ul className={styles.yandaLkVeOrtaRenimimi}>
          <li className={styles.yandaLkVe}>
            35 Yaşında İlk ve Orta Öğrenimimi hazırla Esenevler İlkokulu,
            Erdoğan Şahinoğlu İlköğretim Okulu ve Çelebi Mehmet Lisesinde (2001)
            tamamladı.
          </li>
          <li className={styles.eskiehirAnadoluNiversitesi}>
            Eskişehir Anadolu Üniversitesi İktisadi İdari Bilimler Fakültesi
            Kamu Yönetimi Anadolu Üniversitesi Bilgisayar Araştırma Uygulama
            Merkezinde bir yıl oldu.
          </li>
          <li className={styles.deBursadaKendi}>
            2007 de Bursa’da kendi işletmesini kurdu. HTML ve Flash web siteleri
            ile web tasarımı ve geliştiricileri web sitemizdeki sitelerinde
            devam etti. Sonrasında Google Adwords, şimdiki 2009-2010 Yıllarında
            yeni ad Google Reklam ve Analytics olan Google’da ilk kampanyalarını
            gerçekleştirdi.
          </li>
          <li className={styles.yllarndaFacebookIle}>
            2009-2010 Yıllarında Facebook ile gruplarla tanışarak kampanyalar
            hazırladı.
          </li>
          <li className={styles.googleReklamlarFacebook}>
            Google Reklamları, Facebook, İnstagram, Analytics raporlama gibi
            çeşitli düzeylerde 100 ünitede projede yer aldı.
          </li>
          <li className={styles.wordpressTemaTasarmlar}>
            WordPress tema tasarımları, optimizasyonları, özel eklenti
            yazılımları üretimi gibi süreçlerde ekip liderliği yaparak yer aldı.
            Satışı direkt olarak randevu, rezervasyon, satış gibi performans
            analizi, raporlama ve sonuç analiz entegrasyonlu crm sistemleri
            yazılımları oluşturdu.
          </li>
          <li className={styles.firmasnaAitIletmesinde}>
            Firmasına ait işletmesinde kullandığı 2019 Aralık’ta yayına girecek
            olan, ofis iletişim hedefi odaklı hiyerarşik iletişim için online
            yazılım planın tamamladı.
          </li>
          <li className={styles.yurtiiVeYurtdnda}>
            Yurtiçi ve Yurtdışında 300’e yakın projenin danışmanlık, web, satış
            ve dijital pazarlama süreçlerini yönetti.
          </li>
          <li className={styles.haberSiteleriOptimizasyonlar}>
            Haber siteleri optimizasyonları süreçleri, kullanıcı odaklılık
            seçenekleri tasarımların üretimi ve yazılım süreçleri gibi bir çok
            alanda hizmet verdi.
          </li>
          <li className={styles.trkiyeninVeBursann}>
            Türkiye’nin ve Bursa’nın markalarında uzun süreler danışmanlık
            yaptı.
          </li>
          <li className={styles.uygulanmasSektrelOlarak}>
            Uygulanması. Sektörel olarak uzmanlaştığı pazarlama yolu ile araç
            kullanımı ileri raporlama sistemleri yazılımları üretti.
          </li>
          <li className={styles.birOkFirmada}>
            Bir çok firmada kurum içi eğitimler ve seminerler verdi.
          </li>
          <li>
            Kurucusu olduğu firma DRM Dijital Pazarlama Ajansında danışmanlık
            yapıyor…
          </li>
        </ul>
      </div>
      <div className={styles.eitimlerItem} />
      <div className={styles.eitimlerInner} />
      <img className={styles.eitimlerChild1} alt="" src="/group-431.svg" />
      <img className={styles.eitimlerChild2} alt="" src="/group-44.svg" />
      <Component frameDivAlignSelf="unset" frameDivFlex="unset" />
      <Component2
        propAlignSelf="unset"
        propRowGap="unset"
        propWidth="1920px"
        propHeight="235px"
        propOverflowX="unset"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.kurumsalEitimTeklifi}>
        Kurumsal Eğitim Teklifi Al
      </div>
    </div>
  );
};

export default Eitimler;
