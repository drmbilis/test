import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component3 from "./component3";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./w-e-b.module.css";

const WEB: NextPage = ({ className = "" }) => {
  const [isComponent2Open, setComponent2Open] = useState(false);
  const router = useRouter();

  const openComponent2 = useCallback(() => {
    setComponent2Open(true);
  }, []);

  const closeComponent2 = useCallback(() => {
    setComponent2Open(false);
  }, []);

  const onEllipseClick = useCallback(() => {
    router.push("/w-e-b1");
  }, [router]);

  const onEllipseClick1 = useCallback(() => {
    router.push("/w-e-b2");
  }, [router]);

  const onEllipseClick2 = useCallback(() => {
    router.push("/w-e-b3");
  }, [router]);

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
      <div className={[styles.web, className].join(" ")}>
        <img className={styles.groupIcon} alt="" src="/group9@2x.png" />
        <img
          className={styles.coyslm4uiaaecsh1Icon}
          alt=""
          src="/coyslm4uiaaecsh-1@2x.png"
        />
        <img className={styles.balksz11Icon} alt="" src="/balksz1-1@2x.png" />
        <div className={styles.googleAdsReklamlarylaContainer}>
          <p
            className={styles.googleAdsReklamlaryla}
          >{`Google ADS reklamlarıyla `}</p>
          <p
            className={styles.iinizleIlgiliArama}
          >{`işinizle ilgili arama yapan `}</p>
          <p className={styles.kullanclarnKarsnaKn}>
            kullanıcıların karşısına çıkın!
          </p>
        </div>
        <div className={styles.webChild} />
        <div className={styles.webItem} />
        <div className={styles.webInner} />
        <div className={styles.ellipseDiv} onClick={onEllipseClick} />
        <div className={styles.webChild1} onClick={onEllipseClick1} />
        <div className={styles.webChild2} onClick={onEllipseClick2} />
        <div className={styles.rectangleDiv} />
        <div className={styles.detaylBilgiAl}>Detaylı Bilgi Al</div>
        <div className={styles.uzmanmzdanDestekAl}>Uzmanımızdan destek al!</div>
        <div className={styles.webChild3} />
        <div className={styles.webChild4} />
        <div className={styles.webChild5} />
        <div className={styles.onlineTibarYnetimi}>Online İtibar Yönetimi</div>
        <div className={styles.markanzHakkndaDijital}>
          Markanız hakkında dijital pazarlama ve sosyal medya danışmanlığı
          alanlarınızdaki imajınızı yönetiyoruz.
        </div>
        <div className={styles.uzmanEkibimizIle}>
          Uzman ekibimiz ile site veya sosyal medya ziyaretçilerinizi müşteriye
          dönüştürün . Biz web sitenizi analiz ederek ve uygun bir dönüşüm hızı
          ile strateji geliştireceğiz. Dijital Pazarlama ve Sosyal Medya
          Danışmanlığı ile yapılan tüm işlemleri en verimli kampanyalara
          dönüştürürüz.
        </div>
        <div className={styles.bizDijitalPazarlamadaContainer}>
          <p className={styles.bizDijitalPazarlamada}>
            Biz dijital pazarlamada belirli alanlarda işinize yardımcı olabilir
            ısmarlama raporlar ve teknik denetimler üretiriz
          </p>
          <p className={styles.canlRaporlarlaAnlk}>
            Canlı raporlarla anlık trafiği yüksek sitelerinize anında
            değişikliklerle sonuçlarınızı geliştiririz.
          </p>
        </div>
        <div className={styles.dnmOptimizasyonu}>Dönüşüm Optimizasyonu</div>
        <div className={styles.gerekZamanlStatistikler}>
          Gerçek Zamanlı İstatistikler
        </div>
        <img className={styles.webChild6} alt="" src="/group-16.svg" />
        <img className={styles.webChild7} alt="" src="/group-210.svg" />
        <div className={styles.webChild8} />
        <div className={styles.ekAklamaVeya}>
          Ek açıklama veya farklı bir konuda da destek isterseniz bu kısımda
          belirtebilirsiniz.
        </div>
        <div className={styles.adnzVeSoyadnz}>Adınız ve Soyadınız</div>
        <div className={styles.irketinizinAd}>Şirketinizin Adı</div>
        <div className={styles.emailAdresiniz}>Email Adresiniz</div>
        <div className={styles.telefonNumaranz}>Telefon Numaranız</div>
        <div className={styles.gnder}>GÖNDER</div>
        <div className={styles.webChild9} />
        <div className={styles.webChild10} />
        <div className={styles.webChild11} />
        <div className={styles.webChild12} />
        <div className={styles.webChild13} />
        <div className={styles.webChild14} />
        <div className={styles.webChild15} />
        <div className={styles.webChild16} />
        <div className={styles.webChild17} />
        <div className={styles.webChild18} />
        <div className={styles.webChild19} />
        <div className={styles.webChild20} />
        <div className={styles.webChild21} />
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
        <img className={styles.webChild22} alt="" src="/group-38.svg" />
        <div className={styles.webChild23} />
        <div className={styles.webChild24} />
        <div className={styles.webChild25} />
        <div className={styles.webChild26} />
        <div className={styles.webChild27} />
        <div className={styles.webChild28} />
        <div className={styles.webChild29} />
        <div className={styles.webChild30} />
        <div className={styles.webChild31} />
        <div className={styles.webChild32} />
        <div className={styles.webChild33} />
        <div className={styles.mterilerinizleEnSalkl}>
          Müşterilerinizle en sağlıklı iletişim kurmanın yolu doğru yönetilen
          sosyal medya hesaplarıdır. Daha fazlası için bize ulaşın!
        </div>
        <div className={styles.sosyalMedyaYnetimi}>Sosyal Medya Yönetimi</div>
        <div className={styles.tantmVideolarnzdanKampan}>
          Tanıtım videolarınızdan kampanya görsellerinize kadar geniş bir
          yelpazede sizler için daima en iyi hizmeti DRM Dijital veriyor.
        </div>
        <div className={styles.erikPazarlama}>İçerik Pazarlama</div>
        <div className={styles.seoGrnrlVe}>
          SEO görünürlüğü ve sunduğu etkin arama varlığı ile önemli bir
          liderdir. Müşterilerimiz için doğal arama sonuçları ve Satış,
          bilinirlik, karlılık ve maliyet verimliliği artışı sağlar.
        </div>
        <div className={styles.haritalaraKayt}>Haritalara Kayıt</div>
        <img className={styles.webChild34} alt="" src="/group-6.svg" />
        <img className={styles.webChild35} alt="" src="/group-111.svg" />
        <img className={styles.webChild36} alt="" src="/group-13.svg" />
        <div className={styles.yaptnzIiInternette}>
          Yaptığınız işi internette arayan kişiler ilk sırada websitenizi
          görsün! Dijital görünürlüğünüzü artırmak için bize ulaşın.
        </div>
        <div className={styles.seo1}>SEO</div>
        <div className={styles.aylkVeyaKampanyalarnza}>
          Aylık veya kampanyalarınıza ve duyurularınıza özel toplu email
          gönderimi ile dilediğiniz müşteri grubunuzla iletişime geçin.
        </div>
        <div className={styles.emailMarketing}>Email Marketing</div>
        <img className={styles.webChild37} alt="" src="/group-121.svg" />
        <img className={styles.webChild38} alt="" src="/group-14.svg" />
        <div className={styles.seoGrnrlVe1}>
          SEO görünürlüğü ve sunduğu etkin arama varlığı ile önemli bir
          liderdir. Müşterilerimiz için doğal arama sonuçları ve Satış,
          bilinirlik, karlılık ve maliyet verimliliği artışı sağlar.
        </div>
        <div className={styles.markaBilinirliiniziArtrmak}>
          Marka bilinirliğinizi artırmak için, tüm dijital platformlarda DRM
          tarafından üretilen Google Reklamları ile bir adım öne çıkın!
        </div>
        <div className={styles.googleAdsReklamlar}>Google Ads Reklamları</div>
        <div className={styles.htiyacnzOlanTm}>
          İhtiyacınız olan tüm Sunucu ,domain ve hosting hizmetleri DRM
          Digital’de. Lütfen detaylı bilgi için bizimle iletişime geçiniz.
        </div>
        <div className={styles.sunucuDomain}>{`Sunucu & Domain & Hosting`}</div>
        <div className={styles.htiyacnzOlanTm1}>
          İhtiyacınız olan tüm Sunucu ,domain ve hosting hizmetleri DRM
          Digital’de. Lütfen detaylı bilgi için bizimle iletişime geçiniz.
        </div>
        <div className={styles.smsPazarlama}>SMS Pazarlama</div>
        <div className={styles.dijitalPazarlama}>Dijital Pazarlama</div>
        <img className={styles.webChild39} alt="" src="/group-15.svg" />
        <img className={styles.webChild40} alt="" src="/group-8.svg" />
        <img className={styles.webChild41} alt="" src="/group-10.svg" />
        <img className={styles.webChild42} alt="" src="/group-17.svg" />
        <div className={styles.webChild43} />
        <div className={styles.webChild44} />
        <div className={styles.webChild45} />
        <img className={styles.webChild46} alt="" src="/group-9.svg" />
        <div className={styles.gncelTasarmTrendlerine}>
          Güncel tasarım trendlerine ve dünya standartlarına uygun,
          geliştirilebilir altyapılara sahip büyüleyici website tasarımları.
        </div>
        <div className={styles.webTasarm1}>Web Tasarım</div>
        <div className={styles.webMobilGelitirme}>Web/ Mobil Geliştirme</div>
        <div
          className={styles.mterilerimizinPotansiyeller}
        >{`Müşterilerimizin potansiyellerine tam olarak ulaşmalarına yardımcı olmak için web geliştirmenin her alanında deneyim sahibiyiz. `}</div>
        <img className={styles.webChild47} alt="" src="/group-5.svg" />
        <div className={styles.mobilUygulamalar}>Mobil Uygulamalar</div>
        <div
          className={styles.mterilerimizinPotansiyeller1}
        >{`Müşterilerimizin potansiyellerine tam olarak ulaşmalarına yardımcı olmak için web geliştirmenin her alanında deneyim sahibiyiz. `}</div>
        <img className={styles.webChild48} alt="" src="/group-5.svg" />
        <div className={styles.balcaHizmetlerimiz}>
          <p className={styles.balca}>{`Başlıca `}</p>
          <p className={styles.hizmetlerimiz}>Hizmetlerimiz</p>
        </div>
        <div className={styles.component5}>
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
          <div className={styles.component5Child1} />
          <img className={styles.component5Child2} alt="" src="/group-54.svg" />
          <div className={styles.tr}>TR</div>
          <div className={styles.en}>EN</div>
          <div className={styles.hizmetlerimizParent} onClick={openComponent2}>
            <div className={styles.hizmetlerimiz1}>Hizmetlerimiz</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.component5Child3} />
          <div className={styles.teklifAl} onClick={onLetiimTextClick}>
            Teklif Al
          </div>
        </div>
        <div className={styles.component6}>
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
          <div className={styles.component6Child1} />
          <div className={styles.component6Child2} />
        </div>
        <img className={styles.webChild49} alt="" src="/vector-1.svg" />
        <img className={styles.webChild50} alt="" src="/vector-2.svg" />
        <img className={styles.webChild51} alt="" src="/vector-7.svg" />
        <img className={styles.webChild52} alt="" src="/vector-8.svg" />
        <img className={styles.webChild53} alt="" src="/vector-13.svg" />
        <img className={styles.webChild54} alt="" src="/vector-14.svg" />
        <img className={styles.webChild55} alt="" src="/vector-15.svg" />
        <img className={styles.webChild56} alt="" src="/vector-16.svg" />
        <img className={styles.webChild57} alt="" src="/vector-17.svg" />
        <img className={styles.webChild58} alt="" src="/vector-18.svg" />
        <img className={styles.webChild59} alt="" src="/vector-9.svg" />
        <img className={styles.webChild60} alt="" src="/vector-10.svg" />
        <img className={styles.webChild61} alt="" src="/vector-13.svg" />
        <img className={styles.webChild62} alt="" src="/vector-14.svg" />
        <img className={styles.webChild63} alt="" src="/vector-3.svg" />
        <img className={styles.webChild64} alt="" src="/vector-4.svg" />
        <img className={styles.webChild65} alt="" src="/vector-15.svg" />
        <img className={styles.webChild66} alt="" src="/vector-16.svg" />
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
