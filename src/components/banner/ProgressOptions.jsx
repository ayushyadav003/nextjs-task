import { LinearProgress } from '@mui/material'
import { bannerDetails, progressOptionData } from '../../../utils/bannerData'
import styles from './banner.module.scss'
import { useEffect, useRef, useState } from 'react'
import { ArrowForward } from '@mui/icons-material'

export default function ProgressOptions({ currentIndex, setCurrentIndex }) {
  const [progress, setProgress] = useState(0)
  const h2Ref = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (h2Ref.current && btnRef.current) {
        h2Ref.current.classList.add('slideUpAnimation')
        btnRef.current.classList.add('slideRightAnimation')
      }
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          if (currentIndex === progressOptionData.length - 1) {
            if (h2Ref.current && btnRef.current) {
              h2Ref.current.classList.remove('slideUpAnimation')
              btnRef.current.classList.remove('slideRightAnimation')
            }
            setCurrentIndex(0)
          } else {
            if (h2Ref.current && btnRef.current) {
              h2Ref.current.classList.remove('slideUpAnimation')
              btnRef.current.classList.remove('slideRightAnimation')
            }
            setCurrentIndex(currentIndex + 1)
          }
          return 0
        }

        return prevProgress + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [progress, currentIndex])

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressOptions}>
        {progressOptionData.map((data, i) => {
          return (
            <div
              key={i}
              className={styles.slide}
              onClick={() => {
                setCurrentIndex(i)
                setProgress(0)
              }}
            >
              <p>{data}</p>
              <div>
                {currentIndex === i && (
                  <span style={{ width: `${progress}%` }}></span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.detailsWrapper}>
        <div>
          <h2 ref={h2Ref} className="slideUpAnimation">
            {bannerDetails[currentIndex].heading}
          </h2>
          <p>{bannerDetails[currentIndex].subHeading}</p>
          <button ref={btnRef} className="slideRightAnimation">
            {bannerDetails[currentIndex].btnText}
            <ArrowForward style={{ fontWeight: '400' }} />
          </button>
        </div>
      </div>
    </div>
  )
}
