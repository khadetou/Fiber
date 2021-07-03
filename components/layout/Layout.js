import Navbar from '../Navbar'
import Styles from '../../styles/style.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
