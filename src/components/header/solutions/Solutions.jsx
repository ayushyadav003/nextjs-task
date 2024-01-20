import Link from 'next/link'
import Image from 'next/image'
import { ArrowForward } from '@mui/icons-material'
import styles from './solutions.module.scss'
import { solutions } from '../../../../utils/headerData'

export default function Solutions() {
  return (
    <div className={styles.solutionsContainer}>
      <div className={styles.inner}>
        <h2>SOLUTIONS</h2>
        <p>
          Helping you meet the demand for constant innovation and transformation
        </p>
        <Link href={'/'}>
          View all Solutions
          <ArrowForward />
        </Link>
        <div className={styles.solutionCards}>
          {solutions.map((solution, i) => (
            <div>
              <span>{solution.icon}</span>
              <h3>
                {solution.label}
                <span>
                  <ArrowForward />
                </span>
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.inner2}>
        <Image
          src="/images/header/solutions.jpg"
          alt="Description of the image"
          width={400}
          height={350}
        />
        <div>
          <h3>2021 Global Workplace Report</h3>
          <p>
            Conflicting stakeholder views on the future of work point to gaps in
            detail, tools and enablement
          </p>
          <button>
            Read the report <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}
