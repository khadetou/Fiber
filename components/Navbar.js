import Styles from '../styles/style.module.scss'
const Navbar = () => {
  const {
    header,
    header__logo,
    header__logoText,
    header__headerContent,
    header__navigation,
    header__ul,
    header__auth,
    header__signIn,
    header__signUp,
  } = Styles

  return (
    <div className={header}>
      <div className={header__headerContent}>
        <div className={header__logo}>
          <h1 className={header__logoText}>Fiber</h1>
        </div>
        <div className={header__navigation}>
          <ul className={header__ul}>
            <li>
              <a href="#">Comunity</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
        <div className={header__auth}>
          <a className={header__signIn} href="#">
            Sign In
          </a>
          <a className={header__signUp} href="#">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
