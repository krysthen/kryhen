'use client'
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import Link from 'next/link';
import React, { useState, useEffect} from 'react';
import styles from '../page.module.css';
import Post from '../components/post';
import Faq from '../components/faq';
import ScrollToTopButton from '../components/scrollup';
import ScrollToDownButton from '../components/scrolldown';
import { motion } from "framer-motion";
import Image from 'next/image';
import Parallaxtext from '../components/parallaxtext'
import Script from 'next/script'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initGA, logPageView } from '../utils/analytics';

export default function Home() {

  const boxStyles: React.CSSProperties = {
    minWidth: 'fit-content',
    color: '#365BD9',
    alignSelf: 'center'
  };
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <Cursor isGelly={true} gellyAnimationAmount={1} cursorBackgrounColor='#000000cc'/>
      <div className={styles.root} id='home'>
        <main className={styles.main} >
          <header className={styles.kh_container_box} data-aos="fade-right" data-aos-delay="200">
            <div className={styles.kh_container_box_title}>Zaprojektuj i stwórz,<br/>to co chcesz.</div>
            <div className={styles.kh_container_tags}>
              <div>Projektowanie cyfrowe</div>
              <div>Branding</div>
              <div>Identyfikacja marki</div>
              <div>Drukowanie</div>
              <div>UI/UX</div>
              <div>DTP</div>
              <div>Modelowanie 3D</div>
              <div>Programowanie</div>
            </div>
            <div className={styles.kh_container_description}>
              <div>
                {<span className="material-symbols-rounded">arrow_outward</span>}
                <p id='contact'>Grafika ukazana po prawej stronie jest prototypem aplikacji.</p>
              </div>
              <div style={boxStyles}>
                <Link href='/readmore' style={{display:'none'}}></Link>
              </div>
            </div>
          </header>
          <div data-aos="fade-left" data-aos-delay="300" className={styles.kh_container_image} data-cursor-magnetic data-cursor-color="#ffffffcc">
          </div>
        </main>
        <section className={styles.section}>
          <div className={styles.section_parent_contact}>

            <div className={styles.section_parent_contact_socials}>

              <div className={styles.section_parent_contact_socials_icons}>
                <a href="#" data-cursor-size="80px" target='_blank' data-cursor-color="#6699ffcc" className='soonIndicator' data-aos="fade-up" data-cursor-text="Instagram">
                  <Image src='../../instagram_svg.1.svg' alt='instagram_icon' width={52} height={52}/>
                  <span>Instagram</span>
                </a>
                <a href="https://github.com/krysthen" target='_blank' data-cursor-size="80px" data-cursor-color="#6699ffcc" data-aos="fade-up"  data-aos-delay="100" data-cursor-text="Github">
                  <Image src='../../github_svg.2.svg' alt='github_icon' width={52} height={52}/>
                  <span>Github</span>
                </a>
                <a href="https://www.behance.net/krystianhendzel" data-cursor-size="80px" target='_blank' data-cursor-color="#6699ffcc" data-aos="fade-up" data-aos-delay="200" data-cursor-text="Behance">
                  <Image src='../../behance_svg.3.svg' alt='behance_icon' width={52} height={52}/>
                  <span>Behance</span>
                </a>
              </div>
            </div>
            <div className={styles.section_parent_contact_calltoaction} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.section_parent_contact_calltoaction_btn} data-cursor-size="80px" data-cursor-color="#6699ffcc" data-cursor-text="Kontakt">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKp1BAQIv-eOGuYShJVOZDxi4NkYu_viY-dvsFpxjo3wCLCA/viewform" target='_blank' className={styles.headerBtnHover}><h2>Kontakt</h2></a>
              </div>
            </div>
          </div>
        </section>
          <section className={styles.section} data-cursor-color="#ffffffcc">
          <div className={styles.section_ftr} data-aos="fade-up">
            <div className={styles.section_ftr_container}>
              <h2>Stwórzmy projekt od zera!</h2>
              <p>
              — Każdy projekt, który przechodzi przez moje ręce, jest budowany z pasją, z uwzględnieniem różnych aspektów, od precyzyjnie dobranej kolorystyki po efekt końcowy, który prezentuję w jego naturalnym środowisku. Twoim jedynym zadaniem będzie opisanie swoich spostrzeżeń na temat produktu, który chcemy zbudować. Im więcej szczegółów podasz, tym bardziej Twój projekt będzie błyszczał!
              <br/><br/>
              </p>
            </div>
          </div> 
        </section>
        <section className={styles.section} style={{display: 'none'}}>
          <div className={styles.kh_section_header}>
            <h1>Przyszłościowe pomysły.</h1>
          </div>
          <div className={styles.section_parent}>
            <div className={styles.section_box_1}></div>
            <div className={styles.section_box_2}></div>
            <div className={styles.section_box_3}></div>
            <div className={styles.section_box_4}><h2>Pokaż więcej</h2></div>
          </div>
        </section>
        <Parallaxtext />
        <section className={styles.section}>
          <div className={styles.onesideleft}>
            <h2>
            <b data-aos="fade-right">Cześć! Jestem Krystian, </b><span data-aos="fade-right" data-aos-delay="400">zajmuje się głównie materiałami graficznymi oraz pasją do ich kreatywności. Oprócz mojego wykształcenia i 6-letniego doświadczenia w branży, oferuję bystre oko do projektowania, biegłość w oprogramowaniu graficznym i zaangażowanie w dostarczanie atrakcyjnych wizualnie projektów. Jako freelancer jestem nie tylko projektantem, ale także oddanym profesjonalistą, który ceni sobie współpracę i stara się wcielać w życie unikalne pomysły. Moje różnorodne zainteresowania sprawiają, że jestem wszechstronnym i innowacyjnym pracownikiem w każdym kreatywnym projekcie. Połączmy się i odkryjmy razem możliwości!
            </span>
            </h2>
          </div>
        </section>
        <section className={styles.section+' '+styles.gap} id='products'>
            <div className={styles.kh_section_header}>
              <h1 data-aos="fade-right">Portfolio.</h1>
            </div>
            <div className={styles.section_portfolio_flex}>
              <Post />
            </div>
        </section>
        <section className={styles.section} id='faq'>
          <div className={styles.kh_section_header}>
            <h1 data-aos="fade-right">FAQ</h1>
          </div>
          <Faq/>
        </section>
      </div>
      <section className={styles.section} style={{marginBottom: '100px'}}>
        <h4 data-aos="fade-up">Made with ❤️ using ⌨️</h4>
      </section>
      <ScrollToDownButton/>
      <ScrollToTopButton/>
    </>
  )
}
