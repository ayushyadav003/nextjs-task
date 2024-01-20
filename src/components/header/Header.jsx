import { useState } from 'react'
import styles from './header.module.scss'
import { endOptions, initialOptions } from '../../../utils/headerData'
import { Search } from '@mui/icons-material'
import Solutions from './solutions/Solutions'
import ServiceAndProduct from './service&product/ServiceAndProduct'
import { Dialog, IconButton, InputAdornment, TextField } from '@mui/material'

export default function Header() {
  const [optionContent, setOptionContent] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  const handleOptionClick = (option) => {
    setOptionContent(false)
    if (optionContent === option.label) {
      setOptionContent(false)
    } else {
      setOptionContent(option.label)
    }
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.options}>
        <div className={styles.logo}>
          <img src="/images/header/logo.svg" alt="Logo" />
        </div>
        {initialOptions.map((option, i) => (
          <span
            key={i}
            onClick={() => handleOptionClick(option)}
            style={{
              borderBottom:
                optionContent === option.label &&
                '3.5px solid rgb(105, 190, 40)',
            }}
          >
            {option?.label}
          </span>
        ))}
      </div>
      <div className={styles.options}>
        {endOptions.map((option, i) => (
          <span key={i}>{option?.label}</span>
        ))}
        <span className={styles.search} onClick={() => setOpenSearch(true)}>
          <Search />
        </span>
      </div>
      <div
        className={styles.headerContent}
        style={{ height: optionContent ? '88.5%' : '0' }}
      >
        {optionContent === 'Solutions' && <Solutions />}
        {optionContent === 'Services & Products' && <ServiceAndProduct />}
        {optionContent === 'Insights & Resources' && <Solutions />}
        {optionContent === 'About us' && <ServiceAndProduct />}
      </div>
      <Dialog
        open={openSearch}
        onClose={() => setOpenSearch(false)}
        sx={{
          zIndex: '9999',
        }}
      >
        <div style={{ width: '30vw' }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Dialog>
    </div>
  )
}
