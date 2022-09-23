import Container from '@components/Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header__border}>
			<Container padding={false}>
				<div className={styles.header__container}>
					<div className={styles.burguer}>
						{[1, 2, 3].map((i) => (
							<div className={styles.burguer__items}></div>
						))}
					</div>
					<Link href='/'>
						<div className={styles.image}>
							<Image
								loading='lazy'
								width={254}
								height={61}
								src='https://cdn.larepublica.pe/images/content/default/elecciones/elecciones-2022.png'
								alt='image'
								className={styles.image}
							/>
						</div>
					</Link>
					<nav className={styles.navbar}>
						<Link href='/'>
							<a>Inicio</a>
						</Link>
						<Link href='/'>
							<a>Elecciones 2022</a>
						</Link>
						<Link href='/'>
							<a>Encuentas</a>
						</Link>
						<Link href='/'>
							<a>Miembro de mesa</a>
						</Link>
						<Link href='/'>
							<a>Local de votación</a>
						</Link>
						<Link href='/'>
							<a>ONPE</a>
						</Link>
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
