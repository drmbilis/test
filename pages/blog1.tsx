import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component3 from "../components/component3";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import WEB from "./w-e-b";
import styles from "./blog1.module.css";

const Blog1: NextPage = () => {
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

  const onGoogleTextClick = useCallback(() => {
    router.push("/blog2");
  }, [router]);

  const onTmTextClick = useCallback(() => {
    router.push("/blog");
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
        <div className={styles.devamnOku} onClick={onDevamnOkuTextClick}>
          Devamını Oku
        </div>
        <div className={styles.ns}>30 NİS</div>
        <div className={styles.rectangleDiv} />
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
        <div className={styles.sosyalMedyadaPaylam}>
          Sosyal Medyada Paylaşım Yapmak İçin En İyi Gün ve Saatler 2022 Klavuzu
        </div>
        <div className={styles.devamnOku1} onClick={onDevamnOkuTextClick}>
          Devamını Oku
        </div>
        <div className={styles.may}>19 MAY</div>
        <div className={styles.blog1}>Blog</div>
        <div className={styles.sosyalMedya}>Sosyal Medya</div>
        <div className={styles.google} onClick={onGoogleTextClick}>
          Google
        </div>
        <div className={styles.tm} onClick={onTmTextClick}>
          Tümü
        </div>
        <div className={styles.blogChild1} />
        <div className={styles.blogChild2} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-1180@2x.png"
        />
        <div className={styles.blogChild3} />
        <img
          className={styles.blogChild4}
          alt=""
          src="/rectangle-1183@2x.png"
        />
        <div className={styles.blogChild5} />
        <WEB />
        <Component3 propTop="1788px" />
        <div className={styles.blogChild6} />
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

export default Blog1;
