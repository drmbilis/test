import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component3 from "../components/component3";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import WEB from "./w-e-b";
import Component2 from "../components/component2";
import styles from "./blog.module.css";

const Blog: NextPage = () => {
  const [isComponent2Open, setComponent2Open] = useState(false);
  const router = useRouter();

  const openComponent2 = useCallback(() => {
    setComponent2Open(true);
  }, []);

  const closeComponent2 = useCallback(() => {
    setComponent2Open(false);
  }, []);

  const onDevamnOkuTextClick = useCallback(() => {
    router.push("/basnda2");
  }, [router]);

  const onSosyalMedyaTextClick = useCallback(() => {
    router.push("/blog1");
  }, [router]);

  const onGoogleTextClick = useCallback(() => {
    router.push("/blog2");
  }, [router]);

  return (
    <>
      <div className={styles.blog}>
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
        <img
          className={styles.coyslm4uiaaecsh1Icon}
          alt=""
          src="/coyslm4uiaaecsh-1@2x.png"
        />
        <div className={styles.blogChild} />
        <div className={styles.blogItem} />
        <div className={styles.blogInner} />
        <div className={styles.rectangleDiv} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-1175@2x.png"
        />
        <div className={styles.dannySullivanSearch}>
          Danny Sullivan, Search Liaison tarafından twitter’da paylaşımından
          yola çıkarak; Google arama motoru tarafında title alanında
          değişiklikler yapılacağının sinyalini verdi. Web sitelerinde bu
          güncelleme sonrası bütün başlığınız değilde sadece arama sonuçlarına
          uygun anlamlara göre parçalar halinde getirme ihtimali doğmaktadır.
          Aslında bu yakın zamanda web dünyasının zemininde bir kayma oluşacağı
          anlamına da gelmektedir. Sıralamalar değişecek anlamı da […]
        </div>
        <div className={styles.kemerleriBalaynGoogle}>
          Kemerleri Bağlayın Google Arama sonuçlarından düşebilirsiniz!
        </div>
        <div className={styles.devamnOku} onClick={onDevamnOkuTextClick}>
          Devamını Oku
        </div>
        <div className={styles.blogChild1} />
        <div className={styles.au}>25 AĞU</div>
        <div className={styles.blogChild2} />
        <div className={styles.sosyalMedyaStratejiniz}>
          Sosyal medya stratejiniz istenen sonuçları veremiyor mu? Sosyal medya
          çalışmalarınızın markanıza daha fazla zarar vermesinden endişe duyuyor
          musunuz? Bu infografikte kaçınmanız gereken yedi genel sosyal medya
          hatasını paylaşıyoruz. İşte hızlı bir özeti: Her sosyal medya ağını
          kullanmaya çalışmak Hedef kitle tanımlanmaması Net bir strateji
          olmadan yayınlama Çok fazla yayınlamak ya da eksik yayınlamak Sosyal
          medyayı tek […]
        </div>
        <div className={styles.sosyalMedyaPazarlama}>
          Sosyal Medya Pazarlama Stratejinizi dağıtan 7 acemilik
        </div>
        <div className={styles.devamnOku1} onClick={onDevamnOkuTextClick}>
          Devamını Oku
        </div>
        <div className={styles.blogChild3} />
        <div className={styles.ns}>30 NİS</div>
        <div className={styles.googleAdsKullanclarna}>
          Google Ads, kullanıcılarına ek ücret yansıtmaya başlayacak Google
          reklamcılık hizmeti Google Ads, yeni alınan kararla 1 Ekim 2021
          tarihinden itibaren yeni bir sürece giriyor. 1 Ekim tarihinden
          itibaren, hizmet aracılığıyla reklam veren müşteriler, faturalarında
          ekstra bir ücret ile karşılaşacak. Ajansların reklam maliyetleri
          dolayısıyla da reklamverenlerin reklam maliyetlerine yeni bir artış
          anlamına da gelmektedir. Google, konuyu […]
        </div>
        <div className={styles.ekim2021Den}>
          1 Ekim 2021 ‘den itibaren Google Reklamlarına Yasal İşletim Maliyeti
          ekleniyor
        </div>
        <div className={styles.devamnOku2} onClick={onDevamnOkuTextClick}>
          Devamını Oku
        </div>
        <div className={styles.au1}>7 AĞU</div>
        <div className={styles.blogChild4} />
        <img
          className={styles.sofinf2605202231Icon}
          alt=""
          src="/sofinf-26-05-2022-3-1@2x.png"
        />
        <div className={styles.sosyalMedyaEtkileim}>
          Sosyal Medya Etkileşim Arttırma ve Paylaşım Saatlerine Genel Bir bakış
          Sprout Social, platformu çevrimiçi planlamak ve yayınlamak için
          kullanan şirketin 20.000’den fazla müşteri tabanına dayanan büyük
          sosyal medya platformlarının her birine gönderilecek en iyi zamanların
          en son listesini yayınladı . Sprout, bu verileri analiz ederek, bu
          içeriğin en yüksek katılım oranlarını ne Bu, Sprout’un raporunu en iyi
          etkileşim […]
        </div>
        <div className={styles.blogChild5} />
        <div className={styles.sosyalMedyadaPaylam}>
          Sosyal Medyada Paylaşım Yapmak İçin En İyi Gün ve Saatler 2022 Klavuzu
        </div>
        <div className={styles.devamnOku3} onClick={onDevamnOkuTextClick}>
          Devamını Oku
        </div>
        <div className={styles.may}>19 MAY</div>
        <div className={styles.blog1}>Blog</div>
        <div className={styles.sosyalMedya} onClick={onSosyalMedyaTextClick}>
          Sosyal Medya
        </div>
        <div className={styles.google} onClick={onGoogleTextClick}>
          Google
        </div>
        <div className={styles.tm}>Tümü</div>
        <div className={styles.blogChild6} />
        <div className={styles.blogChild7} />
        <img
          className={styles.blogChild8}
          alt=""
          src="/rectangle-1177@2x.png"
        />
        <img
          className={styles.blogChild9}
          alt=""
          src="/rectangle-1180@2x.png"
        />
        <div className={styles.blogChild10} />
        <div className={styles.blogChild11} />
        <img
          className={styles.blogChild12}
          alt=""
          src="/rectangle-1183@2x.png"
        />
        <div className={styles.blogChild13} />
        <WEB />
        <Component2
          propAlignSelf="unset"
          propRowGap="unset"
          propWidth="1920px"
          propHeight="235px"
          propOverflowX="unset"
        />
        <div className={styles.blogChild14} />
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

export default Blog;
