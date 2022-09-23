import Cardprincipal from '@components/Cardprincipal/Cardprincipal'
import CardSmall from '@components/CardSmall/CardSmall'
import React from 'react'
import styles from './Lading.module.css'
import data from '../../data/data.json'
import CardBlogs from '@components/CardBlogs/CardBlogs'

const Lading = () => {
	console.log('Lading', data.data[0].data)

	return (
		<>
			<div className={styles.box}>
				<Cardprincipal data={data.data[0].data[0]} />
				<CardSmall data={data.data[0].data} />
			</div>
			<CardBlogs data={data.data[0].data} />
			<button className={styles.ver}>Ver más noticias</button>
		</>
	)
}

export default Lading
