import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component5 from "./component5";
import PortalPopup from "./portal-popup";
import styles from "./anasayfa.module.css";

const Anasayfa: NextPage = ({ className = "" }) => {
  const [isComponent9Open, setComponent9Open] = useState(false);

  const openComponent9 = useCallback(() => {
    setComponent9Open(true);
  }, []);

  const closeComponent9 = useCallback(() => {
    setComponent9Open(false);
  }, []);

  const onEllipseClick = useCallback(() => {
    // Please sync "Anasayfa" to the project
  }, []);

  return (
    <>
      <div className={[styles.anasayfa, className].join(" ")}>
        <img className={styles.groupIcon} alt="" src="/group8@2x.png" />
        <img className={styles.balksz11Icon} alt="" src="/balksz1-1@2x.png" />
        <div className={styles.component7}>
          <div className={styles.component7Child} />
          <div className={styles.component7Item} />
          <img className={styles.component7Inner} alt="" src="/group-541.svg" />
          <div className={styles.rectangleDiv} />
          <div className={styles.teklifAl}>Teklif Al</div>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector3.svg"
            onClick={openComponent9}
          />
          <div className={styles.div}>0224 450 00 03</div>
          <div className={styles.component7Child1} />
          <div className={styles.tr}>TR</div>
          <div className={styles.en}>EN</div>
        </div>
        <div className={styles.googleAdsReklamlarylaContainer}>
          <p
            className={styles.googleAdsReklamlaryla}
          >{`Google ADS reklamlarıyla `}</p>
          <p className={styles.iinizleIlgili}>{`işinizle ilgili `}</p>
          <p className={styles.aramaYapan}>{`arama yapan `}</p>
          <p className={styles.kullanclarn}>{`kullanıcıların `}</p>
          <p className={styles.karsnaKn}>karşısına çıkın!</p>
        </div>
        <div className={styles.anasayfaChild} />
        <div className={styles.detaylBilgiAl}>Detaylı Bilgi Al</div>
        <div className={styles.anasayfaItem} />
        <div className={styles.anasayfaInner} />
        <div className={styles.anasayfaChild1} />
        <div className={styles.balcaHizmetlerimiz}>
          <p className={styles.balca}>{`Başlıca `}</p>
          <p className={styles.hizmetlerimiz}>Hizmetlerimiz</p>
        </div>
        <img className={styles.anasayfaChild2} alt="" src="/group-9.svg" />
        <div className={styles.gncelTasarmTrendlerine}>
          Güncel tasarım trendlerine ve dünya standartlarına uygun,
          geliştirilebilir altyapılara sahip büyüleyici website tasarımları.
        </div>
        <div className={styles.webTasarm}>Web Tasarım</div>
        <div className={styles.webMobilGelitirme}>Web/ Mobil Geliştirme</div>
        <div
          className={styles.mterilerimizinPotansiyeller}
        >{`Müşterilerimizin potansiyellerine tam olarak ulaşmalarına yardımcı olmak için web geliştirmenin her alanında deneyim sahibiyiz. `}</div>
        <img className={styles.anasayfaChild3} alt="" src="/group-5.svg" />
        <div className={styles.mobilUygulamalar}>Mobil Uygulamalar</div>
        <div
          className={styles.mterilerimizinPotansiyeller1}
        >{`Müşterilerimizin potansiyellerine tam olarak ulaşmalarına yardımcı olmak için web geliştirmenin her alanında deneyim sahibiyiz. `}</div>
        <img className={styles.anasayfaChild4} alt="" src="/group-5.svg" />
        <div className={styles.anasayfaChild5} />
        <div className={styles.anasayfaChild6} />
        <div className={styles.seoGrnrlVeSunduuEtkParent}>
          <div className={styles.seoGrnrlVe}>
            SEO görünürlüğü ve sunduğu etkin arama varlığı ile önemli bir
            liderdir. Müşterilerimiz için doğal arama sonuçları ve Satış,
            bilinirlik, karlılık ve maliyet verimliliği artışı sağlar.
          </div>
          <div className={styles.haritalaraKayt}>Haritalara Kayıt</div>
          <img className={styles.groupChild} alt="" src="/group-6.svg" />
        </div>
        <div className={styles.anasayfaChild7} />
        <div className={styles.anasayfaChild8} />
        <div className={styles.anasayfaChild9} />
        <div className={styles.anasayfaChild10} />
        <div className={styles.anasayfaChild11} />
        <div className={styles.anasayfaChild12} />
        <div className={styles.anasayfaChild13} />
        <div className={styles.anasayfaChild14} />
        <div className={styles.mterilerinizleEnSalklIParent}>
          <div className={styles.mterilerinizleEnSalkl}>
            Müşterilerinizle en sağlıklı iletişim kurmanın yolu doğru yönetilen
            sosyal medya hesaplarıdır. Daha fazlası için bize ulaşın!
          </div>
          <div className={styles.sosyalMedyaYnetimi}>Sosyal Medya Yönetimi</div>
          <img className={styles.groupItem} alt="" src="/group-11.svg" />
        </div>
        <div className={styles.tantmVideolarnzdanKampanParent}>
          <div className={styles.tantmVideolarnzdanKampan}>
            Tanıtım videolarınızdan kampanya görsellerinize kadar geniş bir
            yelpazede sizler için daima en iyi hizmeti DRM Dijital veriyor.
          </div>
          <div className={styles.erikPazarlama}>İçerik Pazarlama</div>
          <img className={styles.groupInner} alt="" src="/group-13.svg" />
        </div>
        <div className={styles.yaptnzIiInternetteArayParent}>
          <div className={styles.yaptnzIiInternette}>
            Yaptığınız işi internette arayan kişiler ilk sırada websitenizi
            görsün! Dijital görünürlüğünüzü artırmak için bize ulaşın.
          </div>
          <div className={styles.seo}>SEO</div>
          <img className={styles.groupChild1} alt="" src="/group-12.svg" />
        </div>
        <div className={styles.aylkVeyaKampanyalarnzaVeParent}>
          <div className={styles.aylkVeyaKampanyalarnza}>
            Aylık veya kampanyalarınıza ve duyurularınıza özel toplu email
            gönderimi ile dilediğiniz müşteri grubunuzla iletişime geçin.
          </div>
          <div className={styles.emailMarketing}>Email Marketing</div>
          <img className={styles.groupChild2} alt="" src="/group-14.svg" />
        </div>
        <div className={styles.htiyacnzOlanTmSunucuDoParent}>
          <div className={styles.htiyacnzOlanTm}>
            İhtiyacınız olan tüm Sunucu ,domain ve hosting hizmetleri DRM
            Digital’de. Lütfen detaylı bilgi için bizimle iletişime geçiniz.
          </div>
          <div className={styles.smsPazarlama}>SMS Pazarlama</div>
          <img className={styles.groupChild3} alt="" src="/group-15.svg" />
        </div>
        <div className={styles.seoGrnrlVeSunduuEtkGroup}>
          <div className={styles.seoGrnrlVe1}>
            SEO görünürlüğü ve sunduğu etkin arama varlığı ile önemli bir
            liderdir. Müşterilerimiz için doğal arama sonuçları ve Satış,
            bilinirlik, karlılık ve maliyet verimliliği artışı sağlar.
          </div>
          <div className={styles.dijitalPazarlama}>Dijital Pazarlama</div>
          <img className={styles.groupChild4} alt="" src="/group-8.svg" />
        </div>
        <div className={styles.markaBilinirliiniziArtrmakParent}>
          <div className={styles.markaBilinirliiniziArtrmak}>
            Marka bilinirliğinizi artırmak için, tüm dijital platformlarda DRM
            tarafından üretilen Google Reklamları ile bir adım öne çıkın!
          </div>
          <div className={styles.googleAdsReklamlar}>Google Ads Reklamları</div>
          <img className={styles.groupChild5} alt="" src="/group-10.svg" />
        </div>
        <div className={styles.htiyacnzOlanTmSunucuDoGroup}>
          <div className={styles.htiyacnzOlanTm1}>
            İhtiyacınız olan tüm Sunucu ,domain ve hosting hizmetleri DRM
            Digital’de. Lütfen detaylı bilgi için bizimle iletişime geçiniz.
          </div>
          <div
            className={styles.sunucuDomain}
          >{`Sunucu & Domain & Hosting`}</div>
          <img className={styles.groupChild6} alt="" src="/group-17.svg" />
        </div>
        <div className={styles.uzmanmzdanDestekAlContainer}>
          <p className={styles.uzmanmzdan}>{`Uzmanımızdan `}</p>
          <p className={styles.destekAl}>destek al!</p>
        </div>
        <div className={styles.anasayfaChild15} />
        <div className={styles.anasayfaChild16} />
        <div className={styles.anasayfaChild17} />
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
        <img className={styles.anasayfaChild18} alt="" src="/group-1.svg" />
        <img className={styles.anasayfaChild19} alt="" src="/group-2.svg" />
        <div className={styles.anasayfaChild20} />
        <div className={styles.ekAklamaVeya}>
          Ek açıklama veya farklı bir konuda da destek isterseniz bu kısımda
          belirtebilirsiniz.
        </div>
        <div className={styles.adnzVeSoyadnz}>Adınız ve Soyadınız</div>
        <div className={styles.irketinizinAd}>Şirketinizin Adı</div>
        <div className={styles.emailAdresiniz}>Email Adresiniz</div>
        <div className={styles.telefonNumaranz}>Telefon Numaranız</div>
        <div className={styles.gnder}>GÖNDER</div>
        <div className={styles.anasayfaChild21} />
        <div className={styles.anasayfaChild22} />
        <div className={styles.anasayfaChild23} />
        <div className={styles.anasayfaChild24} />
        <div className={styles.anasayfaChild25} />
        <img className={styles.anasayfaChild26} alt="" src="/group-3.svg" />
        <div className={styles.component8}>
          <div className={styles.component8Child} />
          <div className={styles.kurumsal}>KURUMSAL</div>
          <div className={styles.gizlilikSzlemesi}>Gizlilik Sözleşmesi</div>
          <div className={styles.hizmetArtlar}>Hizmet Şartları</div>
          <div className={styles.ptalVeAde}>İptal ve İade Şartları</div>
          <div className={styles.mteriDestek}>Müşteri Destek</div>
          <div className={styles.component8Item} />
          <div className={styles.letm}>İLETİŞİM</div>
          <div className={styles.div1}>+90 (224) 450 00 03</div>
          <div className={styles.infodrmbilisimcom}>info@drmbilisim.com</div>
          <div className={styles.cumhuriyetMahallesiNo}>
            Cumhuriyet Mahallesi, No K4 D4, Nilüfer Hatun Cd. No:140, 16140
            Nilüfer/Bursa
          </div>
          <div className={styles.adres}>ADRES</div>
          <div className={styles.tmHaklarSakldr}>
            ©2007-2021 Tüm Hakları Saklıdır.
          </div>
          <img className={styles.component8Inner} alt="" src="/group-55.svg" />
        </div>
        <div className={styles.anasayfaChild27} />
        <div className={styles.ellipseDiv} />
        <div className={styles.anasayfaChild28} />
        <div className={styles.anasayfaChild29} onClick={onEllipseClick} />
        <div className={styles.anasayfaChild30} onClick={onEllipseClick} />
        <div className={styles.anasayfaChild31} onClick={onEllipseClick} />
        <div className={styles.anasayfaChild32} />
        <div className={styles.anasayfaChild33} />
        <div className={styles.anasayfaChild34} />
        <div className={styles.anasayfaChild35} />
        <div className={styles.anasayfaChild36} />
        <div className={styles.anasayfaChild37} />
        <div className={styles.anasayfaChild38} />
        <div className={styles.anasayfaChild39} />
        <div className={styles.webTasarm1}>Web Tasarım</div>
        <div className={styles.sosyalMedya}>Sosyal Medya</div>
        <div className={styles.dijitalPazarlamaEitimiContainer}>
          <p className={styles.dijitalPazarlama1}>{`Dijital Pazarlama `}</p>
          <p className={styles.eitimi}>Eğitimi</p>
        </div>
        <div className={styles.emailPazarlama}>Email Pazarlama</div>
        <div className={styles.dier}>Diğer</div>
        <div className={styles.seo1}>SEO</div>
        <div className={styles.googleAds}>Google ADS</div>
        <div className={styles.mobilUygulama}>Mobil Uygulama</div>
      </div>
      {isComponent9Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeComponent9}
        >
          <Component5 onClose={closeComponent9} />
        </PortalPopup>
      )}
    </>
  );
};

export default Anasayfa;
