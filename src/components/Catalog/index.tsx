'use client'
import { useProductQuery } from '@/hooks/useProductQuery'
import { useCategoryQuery } from '@/hooks/useCategoryQuery'
import { useState } from 'react'
import style from '../CategoryMenu/CategoryMenu.module.scss'
import styles from './Catalog.module.scss'

import { Category } from '@/types/category'
import ProductCard from '../ProductCard/index'
import CategoryButton from '../CategoryMenu'

export default function Catalog() {
	const { data: products } = useProductQuery()
	const { data: categories } = useCategoryQuery()
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	)

	if (!products || !categories) {
		return <div>..Loading..</div>
	}

	const filteredProducts = selectedCategory
		? products.filter(product => product.category.id === selectedCategory.id)
		: products

	const handleResetCategory = () => {
		setSelectedCategory(null) // Сброс выбранной категории
	}

	return (
		<div>
			<div className={style.container}>
				<div className={style.gridcategory}>
					{categories.map(category => (
						<CategoryButton
							key={category.id}
							category={category}
							onClick={() => setSelectedCategory(category)}
						/>
					))}
					{/* Условное отображение кнопки сброса */}
					{selectedCategory && (
						<button className={styles.resetbtn} onClick={handleResetCategory}>
							Все товары
						</button>
					)}
				</div>
			</div>
			<div className={styles.container}>
				<h2 className={styles.title}>
					{/* Условие для отображения названия категории или "Все товары" */}
					{selectedCategory ? selectedCategory.name : 'Все товары'}
				</h2>
				<div className={styles.list}>
					{filteredProducts.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	)
}