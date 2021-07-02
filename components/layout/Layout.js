import Navbar from '../Navbar'
import Styles from '../../styles/style.module.scss'

const Layout = ({ children }) => {
  const { container } = Styles
  return (
    <>
      <Navbar />
      <div className={container}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
