import Link from 'next/link'
import React from 'react'
import styles from './CardSmall.module.css'

interface PropsCardprincipal {
  data: any
}

const CardSmall = ({ data }: PropsCardprincipal) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__item}>
        {data.map((item: any, index: number) => {
          if (index > 1 && index < 6) {
            return (
              <div key={index} className={styles.box__item}>
                <Link href={item.fields[3].value} passHref>
                  <p className={styles.text}>{item.fields[1].value}</p>
                </Link>
                <p className={styles.text__small}>Por: {item.fields[0].value}</p>
                <span className={styles.border__white}></span>
              </div>
            )
          } else {
            return
          }
        })}
      </div>
    </div>
  )
}

export default CardSmall
