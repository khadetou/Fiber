import Styles from '../styles/style.module.scss'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
const Navbar = () => {
  const {
    show,
    wrapper,
    header,
    header__logo,
    header__logoText,
    header__headerContent,
    header__navigation,
    header__ul,
    header__li,
    header__auth,
    header__signIn,
    header__signUp,
    header__menu,
  } = Styles

  const [dropDown, setDropDown] = useState(false)

  return (
    <div className={header}>
      <div className={wrapper}>
        <div className={header__headerContent}>
          <div className={header__logo}>
            <h1 className={header__logoText}>Fiber</h1>
          </div>
          <div
            className={
              dropDown ? `${header__navigation} ${show}` : header__navigation
            }
          >
            <ul className={header__ul}>
              <li className={header__li}>
                <a href="#">Comunity</a>
              </li>
              <li className={header__li}>
                <a href="#">Pricing</a>
              </li>
              <li className={header__li}>
                <a href="#">Features</a>
              </li>
            </ul>
          </div>
          <div className={dropDown ? `${header__auth} ${show}` : header__auth}>
            <a className={header__signIn} href="#">
              Sign In
            </a>
            <a className={header__signUp} href="#">
              Sign Up
            </a>
          </div>
          <HiMenu
            className={header__menu}
            onClick={() => setDropDown(!dropDown)}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
