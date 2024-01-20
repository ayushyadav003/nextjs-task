import styles from './services.module.scss'
import { networkData1, networkData2 } from '../../../../utils/headerData'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'
import { Slide } from '@mui/material'
import Image from 'next/image'

export default function ServiceAndProduct() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.inner1}>
        <div className={styles.upperSection}>
          <h2>SERVICES & PRODUCTS</h2>
          <p>
            Leverage our capabilities to accelerate your business
            transformation.
          </p>
          <Link href={'/'} className={styles.anchor}>
            View all Services & Products
            <ArrowForward />
          </Link>
        </div>
        <div className={styles.lowerSection}>
          <h3>
            <span></span>Network as a Service
          </h3>
          {networkData1.map((data, i) => (
            <p key={i}>{data}</p>
          ))}
        </div>
      </div>
      <div className={styles.inner2}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <h2>NETWORK AS A SERVICE</h2>
            {networkData2.map((data, i) => (
              <p key={i}>{data}</p>
            ))}
            <Link href={'/'} className={styles.anchor}>
              View all Services a Service
              <ArrowForward />
            </Link>
          </div>
        </Slide>
        <div>
          <h2>POPULAR PRODUCTS</h2>
          <div className={styles.card}>
            <h3>Private 5G</h3>
            <p>
              Our cloud-native, secure-by-design approach ensures 24/7
              monitoring through our Global Operations Centers, managing your
              networks and devices on an as-a-service basis.{' '}
            </p>
          </div>
          <div className={styles.card}>
            <h3>Managed Campus Networks</h3>
            <p>
              Our cloud-native, secure-by-design approach ensures 24/7
              monitoring through our Global Operations Centers, managing your
              networks and devices on an as-a-service basis.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.inner3}>
        <Image
          src="/images/header/solutions.jpg"
          alt="Description of the image"
          width={350}
          height={250}
        />
        <h2>Enable the connected future</h2>
        <p>
          Register for our virtual iNTTerconnected summit to explore network
          trends and technologies.
        </p>
        <button>
          Register new <ArrowForward />
        </button>
      </div>
    </div>
  )
}
