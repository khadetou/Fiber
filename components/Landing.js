import Styles from '../styles/style.module.scss'
import { FaStar, FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'
import HeroImage from '../images/hero-Illustration.png'
import { Fragment } from 'react'
const Landing = () => {
  const {
    container,
    wrapper,
    landing,
    landing__container,
    landing__text,
    landing__star,
    landing__stars,
    landing__starContainer,
    landing__image,
    landing__title,
    landing__p,
    landing__buttons,
    landing__start,
    landing__view,
    landing__requirements,
    landing__nocredit,
    landing__free,
  } = Styles
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar className={landing__stars} />)
  }

  return (
    <div className={landing}>
      <div className={`${container}`}>
        <div className={landing__container}>
          <div className={landing__text}>
            <div className={landing__star}>
              <div className={landing__starContainer}>
                {stars.map((star, idx) => (
                  <Fragment key={idx}>{star}</Fragment>
                ))}
              </div>
              Rated 4.8/5 (245 reviews)
            </div>

            <h1 className={landing__title}>
              Create your portfolio in minutes.
            </h1>
            <p className={landing__p}>
              With Fiber, you can setup your own personal portfolio in minutes
              with dozens of premade, beautiful templates.
            </p>
            <div className={landing__buttons}>
              <a href="#" className={landing__start}>
                Start Free Trial
              </a>
              <a href="#" className={landing__view}>
                View Exemples
              </a>
            </div>
            <div className={landing__requirements}>
              <p className={landing__nocredit}>
                <FaCheckCircle
                  style={{ color: '#43B29E', marginRight: '5px' }}
                />{' '}
                No credit card required{' '}
              </p>
              <p className={landing__free}>
                <FaCheckCircle
                  style={{ color: '#43B29E', marginRight: '5px' }}
                />{' '}
                10 free templates{' '}
              </p>
            </div>
          </div>

          <div className={landing__image}>
            <Image src={HeroImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
