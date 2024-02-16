import styles from '../handleMenu.module.css'
import Image from 'next/image'

export default function HandleMenu() {
  return (
    <>
    <nav className={styles.navigator}>
      <div className={styles.navigator_fix} data-cursor-size="80px"data-cursor-color="#ffffffcc">
        <div className={styles.navigator_parent}>
          <div className={styles.navigator_logo}>
            <Image src='../icon.svg' width={32} height={20} alt='kh_logo'/>
          </div>
          <div className={styles.navigator_child}>
            <div><a href={"#home"}>Home</a></div>
            <div><a href={"#contact"}>Kontakt</a></div>
            <div><a href={"#products"}>Produkty</a></div>
            <div><a href={"#faq"}>Faq</a></div>
          </div>
        </div>
        <div>
        <span className="material-symbols-rounded"></span>
        </div>
      </div>
    </nav>
    </>

    
  ) 
}
