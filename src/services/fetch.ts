import { Cart } from "@/types/cart"
import { Category } from "@/types/category"
import { Product } from "@/types/product"
import { User } from "@/types/user"

const URL = 'http://127.0.0.1:3001/api'

export async function fetchProducts(): Promise<Product[]> {
	const res = await fetch(`${URL}/product`, {})
	if (!res.ok) throw new Error('Ошибка загрузки продукта!')
	return res.json()
}

export async function fetchCategory(): Promise<Category[]> {
	const res = await fetch(`${URL}/category`, {})
	if (!res.ok) throw new Error('Ошибка загрузки категории!')
	return res.json()
}

export async function LoginUser(credentials: {
	email: string
	password: string
}): Promise<User> {
	const res = await fetch(`${URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: credentials.email,
			password: credentials.password,
		}),
	})

	if (!res.ok) {
		throw new Error(
			'Ошибка во время выполнения запроса на регистрацию пользователя'
		)
	}

	const token = await res.json() // Разбираем JSON-ответ
	const tokenId = token.token.replace(/"/g, '') // Обрабатываем sessionId
	localStorage.setItem('user', tokenId)

	console.log(tokenId)

	return token
}

export async function RegisterUser(newUser: User): Promise<User> {
	const res = await fetch(`${URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: newUser.email,
			password: newUser.password,
		}),
	})

	if (!res.ok) {
		throw new Error(
			'Ошибка во время выполнения запроса на регистрацию пользователя'
		)
	}

	const token = await res.json() 
	const tokenId = token.token.replace(/"/g, '') 
	localStorage.setItem('user', tokenId)

	console.log(tokenId)

	return token 
}

export async function fetchCart(): Promise<Cart[]> {
	const res = await fetch(`${URL}/cart`)
	if (!res.ok) throw new Error('Error fetching cart')
	return res.json()
}

export async function addToCart(productId: number) {
	let authToken = localStorage.getItem('user')
	if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
		authToken = authToken.slice(1, -1) // Удаление первого и последнего символов (кавычек)
	}
	const response = await fetch(`${URL}/cart`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: authToken ? authToken : '',
		},
		body: JSON.stringify({ productId }),
	})

	if (!response.ok) {
		throw new Error('Ошибка добавления товара в корзину')
	}
	return response.json()
}