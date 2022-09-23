import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Cardprincipal.module.css'

interface PropsCardprincipal {
  data: any
}

const Cardprincipal = ({ data }: PropsCardprincipal) => {
  return (
    <div className={styles.card}>
      <div className={styles.image__container}>
        <Link href={data.fields[3].value} passHref>
          <div>
            <Image width={1240} height={730} src={data.fields[4].value.url} className={styles.image} alt='image' priority />
          </div>
        </Link>
      </div>

      <div className={styles.box__title}>
        <div className={styles.box__title__relative}>
          <Link href={data.fields[3].value} passHref>
            <p className={styles.text}>{data.fields[1].value}</p>
          </Link>
          <p className={styles.text__small}>Por: {data.fields[0].value}</p>
          <span className={styles.box__white}>
            <div className={styles.box__white__red}></div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cardprincipal
