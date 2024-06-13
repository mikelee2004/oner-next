import Image from "next/image"
import styles from "./banner.module.scss"
import BannerBackgorund from "../../../public/Baner.png"
import Link from "next/link"

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <Link href="#" className={styles.banner_content}>
                    <Image src={BannerBackgorund} alt="banner-image" className={styles.banner_image}/>
                    <div className={styles.banner_title}>
                    <h1>Оригинальные автомасла со скидкой<span className={styles.banner_title_promo}>15%</span></h1>
                    <p className={styles.banner_text}>Акция действует с 15 по 26 мая</p>
                </div>
                </Link>
                
            </div>
        </div>
    )
}