import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Component from "./component";
import Component2 from "./component2";
import styles from "./w-e-b1.module.css";

export type WEB1Type = {
  className?: string;
};

const WEB1: NextPage<WEB1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onEllipseClick = useCallback(() => {
    router.push("/w-e-b");
  }, [router]);

  const onEllipseClick1 = useCallback(() => {
    router.push("/w-e-b2");
  }, [router]);

  const onEllipseClick2 = useCallback(() => {
    router.push("/w-e-b3");
  }, [router]);

  return (
    <div className={[styles.web, className].join(" ")}>
      <img className={styles.groupIcon} alt="" src="/group9@2x.png" />
      <div className={styles.uzmanmzdanDestekAl}>Uzmanımızdan destek al!</div>
      <div className={styles.webChild} />
      <div className={styles.webItem} />
      <div className={styles.webInner} />
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
      <img className={styles.webChild1} alt="" src="/group-110.svg" />
      <img className={styles.webChild2} alt="" src="/group-212.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.ekAklamaVeya}>
        Ek açıklama veya farklı bir konuda da destek isterseniz bu kısımda
        belirtebilirsiniz.
      </div>
      <div className={styles.adnzVeSoyadnz}>Adınız ve Soyadınız</div>
      <div className={styles.irketinizinAd}>Şirketinizin Adı</div>
      <div className={styles.emailAdresiniz}>Email Adresiniz</div>
      <div className={styles.telefonNumaranz}>Telefon Numaranız</div>
      <div className={styles.gnder}>GÖNDER</div>
      <div className={styles.webChild3} />
      <div className={styles.webChild4} />
      <div className={styles.webChild5} />
      <div className={styles.webChild6} />
      <div className={styles.webChild7} />
      <div className={styles.webChild8} />
      <div className={styles.webChild9} />
      <div className={styles.webChild10} />
      <div className={styles.webChild11} />
      <div className={styles.webChild12} />
      <div className={styles.webChild13} />
      <div className={styles.webChild14} />
      <div className={styles.webChild15} />
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
      <img className={styles.webChild16} alt="" src="/group-39.svg" />
      <div className={styles.webChild17} />
      <div className={styles.webChild18} />
      <div className={styles.webChild19} />
      <div className={styles.webChild20} />
      <div className={styles.webChild21} />
      <div className={styles.webChild22} />
      <div className={styles.webChild23} />
      <div className={styles.webChild24} />
      <div className={styles.webChild25} />
      <div className={styles.webChild26} />
      <div className={styles.seoGrnrlVe}>
        SEO görünürlüğü ve sunduğu etkin arama varlığı ile önemli bir liderdir.
        Müşterilerimiz için doğal arama sonuçları ve Satış, bilinirlik, karlılık
        ve maliyet verimliliği artışı sağlar.
      </div>
      <div className={styles.haritalaraKayt}>Haritalara Kayıt</div>
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
      <img className={styles.webChild27} alt="" src="/group-6.svg" />
      <img className={styles.webChild28} alt="" src="/group-112.svg" />
      <img className={styles.webChild29} alt="" src="/group-131.svg" />
      <div className={styles.yaptnzIiInternette}>
        Yaptığınız işi internette arayan kişiler ilk sırada websitenizi görsün!
        Dijital görünürlüğünüzü artırmak için bize ulaşın.
      </div>
      <div className={styles.seo1}>SEO</div>
      <div className={styles.aylkVeyaKampanyalarnza}>
        Aylık veya kampanyalarınıza ve duyurularınıza özel toplu email gönderimi
        ile dilediğiniz müşteri grubunuzla iletişime geçin.
      </div>
      <div className={styles.emailMarketing}>Email Marketing</div>
      <img className={styles.webChild30} alt="" src="/group-122.svg" />
      <img className={styles.webChild31} alt="" src="/group-14.svg" />
      <div className={styles.seoGrnrlVe1}>
        SEO görünürlüğü ve sunduğu etkin arama varlığı ile önemli bir liderdir.
        Müşterilerimiz için doğal arama sonuçları ve Satış, bilinirlik, karlılık
        ve maliyet verimliliği artışı sağlar.
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
      <img className={styles.webChild32} alt="" src="/group-15.svg" />
      <img className={styles.webChild33} alt="" src="/group-8.svg" />
      <img className={styles.webChild34} alt="" src="/group-10.svg" />
      <img className={styles.webChild35} alt="" src="/group-17.svg" />
      <div className={styles.webChild36} />
      <div className={styles.webChild37} />
      <div className={styles.webChild38} />
      <img className={styles.webChild39} alt="" src="/group-91.svg" />
      <div className={styles.gncelTasarmTrendlerine}>
        Güncel tasarım trendlerine ve dünya standartlarına uygun,
        geliştirilebilir altyapılara sahip büyüleyici website tasarımları.
      </div>
      <div className={styles.webTasarm1}>Web Tasarım</div>
      <div className={styles.webMobilGelitirme}>Web/ Mobil Geliştirme</div>
      <div
        className={styles.mterilerimizinPotansiyeller}
      >{`Müşterilerimizin potansiyellerine tam olarak ulaşmalarına yardımcı olmak için web geliştirmenin her alanında deneyim sahibiyiz. `}</div>
      <img className={styles.webChild40} alt="" src="/group-52.svg" />
      <div className={styles.mobilUygulamalar}>Mobil Uygulamalar</div>
      <div
        className={styles.mterilerimizinPotansiyeller1}
      >{`Müşterilerimizin potansiyellerine tam olarak ulaşmalarına yardımcı olmak için web geliştirmenin her alanında deneyim sahibiyiz. `}</div>
      <img className={styles.webChild41} alt="" src="/group-52.svg" />
      <div className={styles.balcaHizmetlerimiz}>
        <p className={styles.balca}>{`Başlıca `}</p>
        <p className={styles.hizmetlerimiz}>Hizmetlerimiz</p>
      </div>
      <img
        className={styles.coyslm4uiaaecsh1Icon}
        alt=""
        src="/coyslm4uiaaecsh-1@2x.png"
      />
      <img
        className={styles.iletisim11Icon}
        alt=""
        src="/iletisim-1-1@2x.png"
      />
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
      <div className={styles.webChild42} />
      <div className={styles.ellipseDiv} onClick={onEllipseClick} />
      <div className={styles.webChild43} />
      <div className={styles.webChild44} onClick={onEllipseClick1} />
      <div className={styles.webChild45} onClick={onEllipseClick2} />
      <div className={styles.webChild46} />
      <div className={styles.component4} />
      <Component frameDivAlignSelf="unset" frameDivFlex="unset" />
      <Component2
        propAlignSelf="unset"
        propRowGap="unset"
        propWidth="1920px"
        propHeight="235px"
        propOverflowX="unset"
      />
    </div>
  );
};

export default WEB1;
