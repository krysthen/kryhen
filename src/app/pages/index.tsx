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

export default function Home() {

  const boxStyles: React.CSSProperties = {
    minWidth: 'fit-content',
    color: '#365BD9',
    alignSelf: 'center'
  };

  return (
    <>
      <Cursor isGelly={true} gellyAnimationAmount={1} cursorBackgrounColor='#000000cc'/>
      <div className={styles.root} id='home'>
        <main className={styles.main} >
          <header className={styles.kh_container_box}>
            <div className={styles.kh_container_box_title}>Design and emerge<br/>what you want.</div>
            <div className={styles.kh_container_tags}>
              <div>Digital design</div>
              <div>Branding</div>
              <div>Company identity</div>
              <div>Printing</div>
              <div>UI/UX</div>
              <div>Desktop publishing</div>
              <div>3D Modeling</div>
            </div>
            <div className={styles.kh_container_description}>
              <div>
                {<span className="material-symbols-rounded">arrow_outward</span>}
                <p id='contact'>The graphic on right shows my prototype for mobile application.  </p>
              </div>
              <div style={boxStyles}>
                <Link href='/read-more' style={{display:'none'}}>Read more</Link>
              </div>
            </div>
          </header>
          <div className={styles.kh_container_image} data-cursor-magnetic data-cursor-color="#ffffffcc">
          </div>
        </main>
        <section className={styles.section}>
          <div className={styles.section_parent_contact}>

            <div className={styles.section_parent_contact_socials}>

              <div className={styles.section_parent_contact_socials_icons}>
                <a href="#" data-cursor-size="80px" target='_blank' data-cursor-color="#6699ffcc" className='soonIndicator'>
                  <Image src='../../instagram_svg.1.svg' alt='instagram_icon' width={52} height={52}/>
                  <span>Instagram</span>
                </a>
                <a href="https://github.com/krysthen" target='_blank' data-cursor-size="80px" data-cursor-color="#6699ffcc">
                  <Image src='../../github_svg.2.svg' alt='github_icon' width={52} height={52}/>
                  <span>Github</span>
                </a>
                <a href="https://www.behance.net/krystianhendzel" data-cursor-size="80px" target='_blank' data-cursor-color="#6699ffcc">
                  <Image src='../../behance_svg.3.svg' alt='behance_icon' width={52} height={52}/>
                  <span>Behance</span>
                </a>
              </div>
            </div>
            <div className={styles.section_parent_contact_calltoaction}>
              <div className={styles.section_parent_contact_calltoaction_btn} data-cursor-size="80px" data-cursor-color="#6699ffcc">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKp1BAQIv-eOGuYShJVOZDxi4NkYu_viY-dvsFpxjo3wCLCA/viewform" target='_blank' className={styles.headerBtnHover}><h2>Contact</h2></a>
              </div>
            </div>
          </div>
        </section>
          <section className={styles.section} data-cursor-color="#ffffffcc">
          <div className={styles.section_ftr}>
            <div className={styles.section_ftr_container}>
              <h2>Let&apos;s create your project from scratch.</h2>
              <p>
              — Every project that passes through my hands is built with passion, incorporating various factors, from precisely chosen color schemes to the final result, which I present in its natural environment. Your only task will be to describe your thoughts on your product, which we want to build. The more details you provide, the more your project will shine!
              <br/><br/>
              </p>
            </div>
          </div> 
        </section>
        <section className={styles.section} style={{display: 'none'}}>
          <div className={styles.kh_section_header}>
            <h1>Featured products.</h1>
          </div>
          <div className={styles.section_parent}>
            <div className={styles.section_box_1}></div>
            <div className={styles.section_box_2}></div>
            <div className={styles.section_box_3}></div>
            <div className={styles.section_box_4}><h2>Show more</h2></div>
          </div>
        </section>
        <Parallaxtext />
        <section className={styles.section}>
          <div className={styles.onesideleft}>
            <h2>
            <b>Hi, I'm Krystian</b>, a skilled computer graphics enthusiast with a passion for creativity. Beyond my educational background and 4 years of industry experience, I offer a keen eye for design, proficiency in graphic software, and a commitment to delivering visually compelling projects. As a freelancer, I'm not just a designer; I'm a dedicated professional who values collaboration and strives to bring unique ideas to life. My diverse interests making me a versatile and innovative contributor to any creative project. Let's connect and explore the possibilities together!
            </h2>
          </div>
        </section>
        <section className={styles.section+' '+styles.gap} id='products'>
            <div className={styles.kh_section_header}>
              <h1>Portfolio.</h1>
            </div>
            <div className={styles.section_portfolio_flex}>
              <Post/>
            </div>
        </section>
        <section className={styles.section} id='faq'>
          <div className={styles.kh_section_header}>
            <h1>FAQ</h1>
          </div>
          <Faq/>
        </section>
      </div>
      <ScrollToDownButton/>
      <ScrollToTopButton/>
    </>
  )
}
