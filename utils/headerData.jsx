import {
  Stream,
  GroupWork,
  LaptopChromebook,
  SettingsApplications,
} from '@mui/icons-material'

export const initialOptions = [
  { label: 'Solutions' },
  { label: 'Services & Products' },
  { label: 'Insights & Resources' },
]
export const endOptions = [
  { label: 'About us' },
  { label: 'Careers', link: '/careers' },
  { label: 'Contacts', link: '/contacts' },
  { label: 'Client Portal', link: '/clirntPortal' },
]

export const solutions = [
  { icon: <LaptopChromebook />, label: 'Hybrid Workplace', link: '/' },
  { icon: <GroupWork />, label: 'Digital Acceleration', link: '/' },
  {
    icon: <SettingsApplications />,
    label: 'Technology Modernization',
    link: '/',
  },
  { icon: <Stream />, label: 'Connected Industries', link: '/' },
]

export const networkData1 = [
  'Cloud Services',
  'Edge as a service',
  'Software-defined Infrastructure Service',
  'Global Data Centers',
  'Collaboration & CX',
  'Infrastucture Services',
]
export const networkData2 = [
  'Private 5G',
  'Global IP Network',
  'Mobile Connectivity',
  'Managed SD WAN',
  'Managed Campus Networs',
  'Networks Consulting Services',
]
