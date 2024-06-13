'use client'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { RegisterUser } from '../../services/fetch'
import styles from './registration.module.scss'

export default function RegistrationCard({}) {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleRegisterClick = async () => {
		try {
			await RegisterUser(formData)
			console.log(formData)
			console.log('Пользователь успешно зарегистрирован!')
		} catch (error) {
			console.log(formData)
			console.error('Ошибка во время регистрации пользователя:', error)
		}
	}
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div>
					<h2>Регистрация</h2>

					<div className={styles.unput_box}>
						<div className={styles.radio_text}>
							<input type="radio" name="rb" id="rb1" />{' '}
							<label htmlFor="rb1">Физ. лицо</label>{' '}
						</div>

						<div className={styles.radio_text}>
							<input type="radio" name="rb" id="rb2" />{' '}
							<label htmlFor="rb2">ООО</label>{' '}
						</div>

						<div className={styles.radio_text}>
							<input type="radio" name="rb" id="rb3" />{' '}
							<label htmlFor="rb3">ИП</label>{' '}
						</div>
					</div>

					<ul className={styles.input_text}>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Ваш Email"
						/>
						{/* <input type="text" placeholder="Телефон" /> */}
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
							placeholder="Пароль"
						/>
						<button onClick={handleRegisterClick}>Зарегистрироваться</button>
					</ul>
					<h3 className={styles.text}>
						Есть аккаунт? <Link href="/login">Войти</Link>
					</h3>
				</div>
			</div>
		</div>
	)
}