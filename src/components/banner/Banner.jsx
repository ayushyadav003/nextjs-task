import { useState } from 'react'
import styles from './banner.module.scss'
import { banner } from '../../../utils/bannerData'
import Image from 'next/image'
import ProgressOptions from './ProgressOptions'

export default function BannerSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.slides}>
        <Image
          src={banner[currentIndex]}
          alt="My Image"
          layout="fill"
          style={{ filter: 'contrast(80%)' }}
        />
        <ProgressOptions
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  )
}
