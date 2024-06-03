"use client"


import Link from "next/link"
import styles from "./product.module.scss"
import Image from "next/image"
import { useState } from "react"
import CartIcon from "../../../public/icons/cart.png"
import HoveredCartIcon from "../../../public/icons/hoveredCart.png"
import { Product } from "@/types/product"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    if (!product) {
        return <div>Загружаем товар...</div>
    }

    return (
        <div className={styles.product} key={product.id}>
            <Link href='#' className={styles.product_link}>
                <div className={styles.product_clickable_image}>
                    <Image 
                        src={product.image}
                        alt="product-image"
                        className={styles.product_image} 
                        />
                </div>
            </Link>
            <Link href="/" className={styles.product_title}>
                <div className={styles.product_information}>
                    {product.name}
                </div>
            </Link>
            <div  className={`${styles.priceAndCart} ${isHovered ? styles.expanded : ''}`}>
                <div className={styles.price}>{product.price}</div>
                <button className={`${styles.addToCartButton} ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Image src={isHovered ? HoveredCartIcon : CartIcon} alt=";" className={styles.addToCartButton_image}></Image>
                </button>
            </div>
        </div>
    )
}