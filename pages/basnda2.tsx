import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component3 from "../components/component3";
import PortalPopup from "../components/portal-popup";
import WEB from "./w-e-b";
import Component2 from "../components/component2";
import styles from "./basnda2.module.css";

const Basnda2: NextPage = () => {
  const [isComponent2Open, setComponent2Open] = useState(false);

  const openComponent2 = useCallback(() => {
    setComponent2Open(true);
  }, []);

  const closeComponent2 = useCallback(() => {
    setComponent2Open(false);
  }, []);

  return (
    <>
      <div className={styles.basnda}>
        <img className={styles.groupIcon} alt="" src="/group15@2x.png" />
        <img
          className={styles.coyslm4uiaaecsh1Icon}
          alt=""
          src="/coyslm4uiaaecsh-1@2x.png"
        />
        <img
          className={styles.sofinf2605202231Icon}
          alt=""
          src="/sofinf-26-05-2022-3-1@2x.png"
        />
        <div className={styles.kemerleriBalaynGoogle}>
          Kemerleri Bağlayın Google Arama sonuçlarından düşebilirsiniz!
        </div>
        <div className={styles.googleAramaSonular}>
          Google Arama Sonuçları Başlıkları nasıl oluşturulur?
        </div>
        <div className={styles.lgiliDierYazlar}>İlgili diğer yazılar</div>
        <div className={styles.bunuPayla}>Bunu paylaş:</div>
        <div className={styles.basndaChild} />
        <div className={styles.basndaItem} />
        <img
          className={styles.basndaInner}
          alt=""
          src="/rectangle-1175@2x.png"
        />
        <div className={styles.au}>25 AĞU</div>
        <WEB />
        <Component2
          propAlignSelf="unset"
          propRowGap="unset"
          propWidth="1920px"
          propHeight="235px"
          propOverflowX="unset"
        />
        <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
        <div className={styles.dannySullivanSearchContainer}>
          <p className={styles.dannySullivanSearch}>
            Danny Sullivan, Search Liaison tarafından twitter’da paylaşımından
            yola çıkarak;
          </p>
          <p className={styles.googleAramaMotoru}>
            Google arama motoru tarafında title alanında değişiklikler
            yapılacağının sinyalini verdi.
          </p>
          <p className={styles.webSitelerindeBu}>
            Web sitelerinde bu güncelleme sonrası bütün başlığınız değilde
          </p>
          <p className={styles.sadeceAramaSonularna}>
            sadece arama sonuçlarına uygun anlamlara göre parçalar halinde
            getirme ihtimali doğmaktadır.
          </p>
          <p className={styles.aslndaBuYakn}>
            Aslında bu yakın zamanda web dünyasının zemininde bir kayma
            oluşacağı anlamına da gelmektedir. Sıralamalar değişecek anlamı da
            çıkarılabilir.
          </p>
          <p className={styles.googleAramaMotoru1}>
            Google arama motoru yaptığı açıklamada değişikliklerin köklü olmasa
            bile etki gösterebileceğinin sinyallerini verdi.
          </p>
          <p className={styles.buTaraftaOlacaklar}>
            Bu tarafta olacakları tahmin ederek hareket eden basmakalıp
          </p>
          <p className={styles.ieriklerdenKaanAnlaml}>
            içeriklerden kaçan anlamlı dizeleri herşeyin önünde olmaya devam
            edeceğinden bahisle üst frekanstan haber vermeye başladı.
          </p>
          <p className={styles.seoVeBalk}>
            Seo ve başlık ve içeriklerine etiketlerine anlam veremediğimiz ama
            iyi sıralarda olduğunu gördüğümüz
          </p>
          <p className={styles.sitelerinTepetaklakOlma}>
            sitelerin tepetaklak olma riski yüksek diyebiliriz bu haberden
            sonra!
          </p>
          <p className={styles.kemerleriBalaynGoogledan}>
            Kemerleri bağlayın Google’dan düşebilirsiniz!
          </p>
          <p className={styles.webSayfasBalklarn}>
            Web sayfası başlıklarını nasıl oluşturduğumuza dair bir güncelleme
          </p>
          <p className={styles.austos2021Sal}>24 Ağustos 2021 Salı</p>
          <p className={styles.nsanlarnHangiArama}>
            İnsanların hangi arama sonuçlarının sorgularıyla alakalı
            olabileceğini belirlemelerinin birincil yollarından biri, listelenen
            web sayfalarının başlıklarını incelemektir. Bu nedenle Google Arama,
            arama yapanları içerik oluşturucuların, yayıncıların, işletmelerin
            ve diğerlerinin ürettiği içerikle buluşturmak için sonuçlarımızdaki
            dokümanlar için en iyi başlıkları sağlamak için çok çalışmaktadır.
          </p>
        </div>
        <div className={styles.geenHaftaWebContainer}>
          <p className={styles.geenHaftaWeb}>
            Geçen hafta, web sayfaları için yeni bir başlık oluşturma sistemini
            tanıttık. Bundan önce, başlıklar verilen sorguya göre değişebilir.
            Bu genellikle yeni sistemimizde artık olmayacak. Bunun nedeni, yeni
            sistemimizin, belirli bir sorgudan bağımsız olarak, ne hakkında
            olduklarını açıklamak için genel olarak belgeler için daha iyi
            çalışan başlıklar ürettiğini düşünmemizdir.
          </p>
          <p className={styles.ayrcaOnYlAknBirSre}>
            {`Ayrıca, `}
            <a
              className={styles.onYlAknBirSredir}
              href="https://developers.google.com/search/blog/2012/01/better-page-titles-in-search-results"
              target="_blank"
            >
              <span
                className={styles.onYlAkn}
              >{`on yılı aşkın bir süredir `}</span>
            </a>
            <a
              className={styles.balkOluturmak}
              href="https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets"
              target="_blank"
            >
              <span className={styles.balkOluturmak1}>başlık oluşturmak</span>
            </a>
            {` için `}
            <a
              className={styles.htmlMetnininTesine}
              href="https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets"
              target="_blank"
            >
              <span className={styles.htmlMetnininTesine1}>
                HTML metninin ötesine
              </span>
            </a>
            {` geçmiş olsak da, yeni sistemimiz bu tür metinlerden daha da fazla yararlanıyor. Özellikle, insanların bir web sayfasına ulaştıklarında görsel olarak görebilecekleri metinleri kullanıyoruz. Bir sayfada gösterilen ana görsel başlığı veya başlığı, site sahiplerinin genellikle etiketlerin içine, diğer başlık etiketlerinin içine yerleştirdiği veya stil uygulamaları kullanılarak büyük ve belirgin hale getirilen içeriği dikkate alıyoruz . <H1>`}
          </p>
          <p className={styles.sayfadaYerAlan}>
            Sayfada yer alan diğer metinler, sayfaları işaret eden bağlantılar
            içindeki metinler gibi düşünülebilir.
          </p>
          <p className={styles.nedenHtmlBalk}>
            Neden HTML başlık etiketlerinden daha fazlası kullanılıyor?
          </p>
          <p className={styles.nedenHerZamanHtmlBalkEt}>
            {`Neden her zaman HTML başlık etiketini kullanmıyorsunuz? 2012’de etiketin ötesine geçmeye başladığımızda `}
            <a
              className={styles.akladmz}
              href="https://developers.google.com/search/blog/2012/01/better-page-titles-in-search-results"
              target="_blank"
            >
              <span className={styles.akladmz1}>açıkladığımız</span>
            </a>{" "}
            nedenlerle aynı nedenlerle . HTML başlık etiketleri her zaman bir
            sayfayı iyi tanımlamaz. Özellikle başlık etiketleri bazen şunlar
            olabilir:
          </p>
          <ul className={styles.okUzunAnahtarKelimelerle}>
            <li className={styles.okUzun}>Çok uzun.</li>
            <li className={styles.anahtarKelimelerleDoldurulm}>
              Anahtar kelimelerle “doldurulmuş”, çünkü içerik oluşturucular
              yanlışlıkla bir grup kelime eklemenin bir sayfanın daha iyi
              sıralanma şansını artıracağını düşünüyor.
            </li>
            <li className={styles.balkEtiketlerininTamamenO}>
              Başlık etiketlerinin tamamen olmaması veya tekrarlayan
              “boilerplate” dili içermesi. Örneğin, ana sayfalar basitçe “Ana
              Sayfa” olarak adlandırılabilir. Diğer durumlarda, bir sitedeki tüm
              sayfalar “Adsız” olarak adlandırılabilir veya yalnızca sitenin
              adını içerebilir.
            </li>
          </ul>
          <p className={styles.genelOlarakGncellememiz}>
            Genel olarak güncellememiz, sayfalar için daha okunabilir ve
            erişilebilir başlıklar üretmek üzere tasarlanmıştır. Bazı
            durumlarda, yararlı olduğu düşünülen site adları ekleyebiliriz.
            Diğer durumlarda, son derece uzun bir başlıkla karşılaştığımızda,
            baştan başlayıp daha yararlı kısımları kesmek yerine en alakalı
            kısmı seçebiliriz.
          </p>
          <p className={styles.yiHtmlBalk}>
            İyi HTML başlık etiketlerine odaklanmak geçerliliğini korur
          </p>
          <p className={styles.googleAramaSonular1}>
            Google Arama Sonuçları hangi kriterlere göre sıralama yapar?
          </p>
          <p className={styles.balklarlaIlgiliUzunSredi}>
            <a
              className={styles.balklarlaIlgili}
              href="https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets"
              target="_blank"
            >
              <span className={styles.balklarlaIlgili1}>
                Başlıklarla ilgili
              </span>
            </a>{" "}
            uzun süredir devam eden yardım sayfamızı bu son değişikliği
            yansıtacak şekilde yakında güncelleyeceğiz . Ancak, o sayfadaki site
            sahiplerine ana tavsiyemiz aynı kalır. Harika HTML başlık etiketleri
            oluşturmaya odaklanın. Başlık oluşturma yöntemlerimiz arasında, HTML
            başlık etiketlerinden gelen içerik, zamanın %80’inden fazlasında,
            hala açık ara farkla en çok kullanılanıdır.
          </p>
          <p className={styles.herhangiBirSistemde}>
            Herhangi bir sistemde olduğu gibi, ürettiğimiz başlıklar her zaman
            mükemmel olmayacaktır. Forumlarımızda her türlü geri bildirimi
            memnuniyetle karşılıyoruz . Geri bildirimlere dayalı olarak yeni
            sistemimizde zaten iyileştirmeler yapıyoruz ve zaman içinde daha da
            iyi hale getirmek için çalışmaya devam edeceğiz. Testlerimiz,
            sunduğumuz değişikliğin, eski sistemimize kıyasla daha okunaklı ve
            arama yapanlar tarafından tercih edilen başlıklar ürettiğini
            gösteriyor.
          </p>
          <p className={styles.yorumBuAklamalar}>
            Yorum: Bu açıklamalar gösteriyor ki Google Arama Sonuçları SEO
            kuralları, daha akıllı bir yapıya ,yapay zeka yetenekleri gelişerek
            çok daha doğru sonuçlara hızlı ulaşım sağlayacak gibi görünüyor.
          </p>
          <p className={styles.yllarIerisindeArama}>
            Yıllar içerisinde arama motoru optimizasyonları kurallar
            güncellendikçe geçerliliklerini yitirir. Güncel kurallara uyumlu
            içerikleri teknik ayrıntılarla desteklendiğinde arama sonuçlarında
            görünme ihtimaliniz artsın istiyorsanız. Güncel ve Özgün web
            sitelerinizle sizde sıralamalarda yer bulun sitenizde arama
            sonuçlarından gelen ziyaretçilerinizi artırın.
          </p>
          <p className={styles.yazanDannySullivan}>
            Yazan Danny Sullivan, Search Liason
          </p>
          <p className={styles.googleAramaSonularnda}>
            Google Arama Sonuçlarında üst sıralarda olabilmek için diğer araç ve
            yöntemler hakkında profesyonel destek almak için bize ulaşın.
          </p>
        </div>
        <img className={styles.groupIcon1} alt="" src="/group16.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector9.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector10.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.basndaChild1} />
        <div className={styles.basndaChild2} />
        <div className={styles.basndaChild3} />
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

export default Basnda2;
