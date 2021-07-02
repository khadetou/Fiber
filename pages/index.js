import styles from '../styles/style.module.scss'
export default function Home() {
  const { h1 } = styles
  return (
    <div>
      <h1 className={h1}>Hello world</h1>
    </div>
  )
}
