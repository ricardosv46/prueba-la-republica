import React, { ReactNode } from 'react'

import styles from './Container.module.css'

interface PropsContainer {
	children: ReactNode
	padding?: boolean
}

const Container = ({ children, padding = true }: PropsContainer) => {
	return <div className={padding ? styles.container__padding : styles.container}>{children}</div>
}

export default Container
