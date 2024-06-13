"use client"

import Link from "next/link"
import styles from "./ProductCard.module.scss"
import Image from "next/image"
import { useCallback, useState } from "react"
import HoveredCartIcon from "../../../public/icons/hoveredCart.png"
import { Product } from "@/types/product"
import CartIcon from "../../../public/cart.png"
import { addToCart } from "@/hooks/addToCart"

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product } : ProductCardProps) {

    const handleAddToCart = useCallback(async () => {
        await addToCart(product.id, 1, product.price, product.name, product.image);
      }, [product]);

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
        <div className={styles.product}>
            <Link 
                href="/src/app/products/[id]"
                as={`/src/app/products/${product.id}`} >
                <div className={styles.product_clickable_image}>
                    <Image 
                        src={product.image.includes('http') ? product.image : `/assets/${product.image}`}
                        alt="product"
                        height={222}
                        width={220}
                        className={styles.product_image} 
                        />
                </div>
            </Link>
            <Link href="/" className={styles.product_title}>
                <div className={styles.product_information}>
                    <span>{product.name}</span>
                </div>
            </Link>
            <div  className={`${styles.priceAndCart} ${isHovered ? styles.expanded : ''}`}>
                <span className={styles.price}>{product.price} ₽</span>
                <button 
                    onClick={handleAddToCart}
                    className={`${styles.addToCartButton} ${isHovered ? 'hovered' : ''}`} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}>
                    <Image src={isHovered ? HoveredCartIcon : CartIcon} alt=";" className={styles.addToCartButton_image}></Image>
                </button>
            </div>
        </div>
    )
}