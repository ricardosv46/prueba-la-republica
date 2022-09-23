import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './CardBlogs.module.css'

interface PropsCardprincipal {
	data: any
}

const CardBlogs = ({ data }: PropsCardprincipal) => {
	return (
		<div className={styles.card}>
			{data.map((item: any, index: number) => {
				if (index > 4) {
					return (
						<div className={styles.box__item}>
							<Link href={item.fields[3].value}>
								<Image loading='lazy' width={1110} height={690} src={item.fields[4].value.url} className={styles.image} alt='image' />
							</Link>
							<Link href={item.fields[3].value}>
								<p className={styles.text}>{item.fields[1].value}</p>
							</Link>
							<div className={styles.box__text__small}>
								<p className={styles.text__small}>Por: {item.fields[0].value}</p>
							</div>
						</div>
					)
				} else {
					return
				}
			})}
		</div>
	)
}

export default CardBlogs
