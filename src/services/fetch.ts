import { Category } from "@/types/category"
import { Product } from "@/types/product"

const BASE = 'http://localhost:3001/api'

export async function fetchProducts(): Promise<Product[]> {
	const res = await fetch(`${BASE}/product`, {})
	if (!res.ok) throw new Error('Ошибка загрузки продукта!')
	return res.json()
}

export async function fetchCategory(): Promise<Category[]> {
	const res = await fetch(`${BASE}/category`, {})
	if (!res.ok) throw new Error('Ошибка загрузки категории!')
	return res.json()
}