import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Component3 from "../components/component3";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import WEB from "./w-e-b";
import Component2 from "../components/component2";
import styles from "./basnda.module.css";

const Basnda: NextPage = () => {
  const [isComponent2Open, setComponent2Open] = useState(false);
  const router = useRouter();

  const openComponent2 = useCallback(() => {
    setComponent2Open(true);
  }, []);

  const closeComponent2 = useCallback(() => {
    setComponent2Open(false);
  }, []);

  const onKemerleriBalaynGoogleClick = useCallback(() => {
    router.push("/basnda1");
  }, [router]);

  return (
    <>
      <div className={styles.basnda}>
        <img className={styles.groupIcon} alt="" src="/group14@2x.png" />
        <img
          className={styles.sosyalmedya11Icon}
          alt=""
          src="/sosyalmedya-1-1@2x.png"
        />
        <img
          className={styles.coyslm4uiaaecsh1Icon}
          alt=""
          src="/coyslm4uiaaecsh-1@2x.png"
        />
        <div className={styles.videoGaleri}>Video Galeri</div>
        <div className={styles.haberler}>Haberler</div>
        <div className={styles.basndaChild} />
        <div className={styles.basndaItem} />
        <div className={styles.basndaInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.basndaChild1} />
        <div className={styles.basndaChild2} />
        <div className={styles.basndaChild3} />
        <div className={styles.basndaChild4} />
        <div className={styles.basndaChild5} />
        <div className={styles.basndaChild6} />
        <div
          className={styles.kemerleriBalaynGoogle}
          onClick={onKemerleriBalaynGoogleClick}
        >
          Kemerleri Bağlayın Google Arama sonuçlarından düşebilirsiniz!
        </div>
        <div className={styles.birISrecini}>
          Bir iş sürecini verimli bir şekilde yönetebilmek için ölçümleyebilmek
          şarttır. Birgül Yanıklar, bu önemli konuyla ilgili merak edilenleri,
          Dijital Pazarlama Uzmanı Ali Rıza Durmaz…
        </div>
        <div className={styles.div}>27.12.2022</div>
        <div className={styles.loremIpsum}>Lorem ipsum</div>
        <div className={styles.kemerleriBalaynGoogle1}>
          Kemerleri Bağlayın Google Arama sonuçlarından düşebilirsiniz!
        </div>
        <div className={styles.birISrecini1}>
          Bir iş sürecini verimli bir şekilde yönetebilmek için ölçümleyebilmek
          şarttır. Birgül Yanıklar, bu önemli konuyla ilgili merak edilenleri,
          Dijital Pazarlama Uzmanı Ali Rıza Durmaz…
        </div>
        <div className={styles.div1}>27.12.2022</div>
        <div className={styles.kemerleriBalaynGoogle2}>
          Kemerleri Bağlayın Google Arama sonuçlarından düşebilirsiniz!
        </div>
        <div className={styles.birISrecini2}>
          Bir iş sürecini verimli bir şekilde yönetebilmek için ölçümleyebilmek
          şarttır. Birgül Yanıklar, bu önemli konuyla ilgili merak edilenleri,
          Dijital Pazarlama Uzmanı Ali Rıza Durmaz…
        </div>
        <div className={styles.div2}>27.12.2022</div>
        <div className={styles.loremIpsum1}>Lorem ipsum</div>
        <div className={styles.loremIpsum2}>Lorem ipsum</div>
        <div className={styles.kemerleriBalaynGoogle3}>
          Kemerleri Bağlayın Google Arama sonuçlarından düşebilirsiniz!
        </div>
        <div className={styles.birISrecini3}>
          Bir iş sürecini verimli bir şekilde yönetebilmek için ölçümleyebilmek
          şarttır. Birgül Yanıklar, bu önemli konuyla ilgili merak edilenleri,
          Dijital Pazarlama Uzmanı Ali Rıza Durmaz…
        </div>
        <div className={styles.div3}>27.12.2022</div>
        <div className={styles.loremIpsum3}>Lorem ipsum</div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-1177@2x.png"
        />
        <img
          className={styles.basndaChild7}
          alt=""
          src="/rectangle-1260@2x.png"
        />
        <img
          className={styles.basndaChild8}
          alt=""
          src="/rectangle-1177@2x.png"
        />
        <img className={styles.basndaChild9} alt="" src="/group-432.svg" />
        <img className={styles.basndaChild10} alt="" src="/group-45.svg" />
        <img className={styles.basndaChild11} alt="" src="/group-441.svg" />
        <img className={styles.basndaChild12} alt="" src="/group-461.svg" />
        <div className={styles.basndaChild13} />
        <div className={styles.basndaChild14} />
        <div className={styles.basndaChild15} />
        <img
          className={styles.basndaChild16}
          alt=""
          src="/rectangle-1177@2x.png"
        />
        <div className={styles.basndaChild17} />
        <WEB />
        <Component2
          propAlignSelf="unset"
          propRowGap="unset"
          propWidth="1920px"
          propHeight="235px"
          propOverflowX="unset"
        />
        <div className={styles.basndaChild18} />
        <div className={styles.devaminiGr}>DEVAMINI GÖR</div>
        <div className={styles.basndaChild19} />
        <div className={styles.devaminiGr1}>DEVAMINI GÖR</div>
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

export default Basnda;
