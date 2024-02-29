import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image'

interface CustomDivProps {
    description?: string;
    className?: string;
    children?: React.ReactNode;
}
const CustomDiv: React.FC<CustomDivProps> = ({description, className, children}) => {
  return (
    <div data-description={description} className={className}>
      {children}
    </div>
  );
}
export default function Post() {
  const postData = [
      {header: 'contest1', url: `/cdn/render7_ecolette.png`, data: `Ecolette product — First prototype`},
      {header: 'contest2', url: `/cdn/render4_ecolette.png`, data: `Ecolette product — Second prototype`},
      {header: 'contest3', url: `/cdn/render5_ecolette.png`, data: `Ecolette product — Third prototype`},
      {header: 'contest4', url: `/cdn/render3_ecolette.png`, data: `Ecolette product — Fourth prototype`},
      {header: 'contest7', url: `/cdn/birthday_gift_boardingpass.png`, data: `Birthday gift — Boarding pass souvenir`},
      {header: 'contest13', url: `/cdn/klubova_gatsbyparty_@0,5x.png`, data: `Party banner`},
      {header: 'contest14', url: `/cdn/cover_DEMO@0,5x.png`, data: `Cover for celebrity — Prototype`},
      {header: 'contest5', url: `/cdn/graphic_as_1.png`, data: `Akcesoria Smakosza — Banner`},
      {header: 'contest6', url: `/cdn/s500_post.png`, data: `Szybkie500 — Instagram post`},
      {header: 'contest8', url: `/cdn/getweather_company_1.png`, data: `GetWeather — Prototype`},
      {header: 'contest9', url: `/cdn/graphic_innov_1.png`, data: `Web Section — Prototype`},
      {header: 'contest10', url: `/cdn/website_prototype_mockup.png`, data: `Website — Prototype`},
      {header: 'contest11', url: `/cdn/graphic_bloow_2.png`, data: `Bloow — Contest graphic`},
      {header: 'contest12', url: `/cdn/prototype_app.png`, data: `Mobile banking app — Prototype`},
      {header: 'contest15', url: `/cdn/ebook-prototype.png`, data: `E-Book — Prototype for cover`},
      {header: 'contest16', url: `/cdn/prototype-sharefiles.png`, data: `Transfer website - prototype`},
  ];
  
  return (
    postData.map((item, index) => (
      <CustomDiv key={index} description={item.data} className={styles.section_portfolio_works}>
        <Image src={item.url} alt={item.header} loading='eager' fill quality={90} data-cursor-size="80px" data-cursor-color="#6699ffcc" />
      </CustomDiv>
    ))
  );
};
