import star from '../../images/star.svg';
import beerImage from '../../images/beer_placeholder.png';
import styles from './BeerCard.module.css';

const BeerCard = ({ beerInfo }) => {
  return (
    <div className={styles.beer}>
      <div className={styles.beer__card__container}>
        <img className={styles.beer__image} src={beerImage} alt='' />
        <div className={styles.beer__basic__info}>
          <h3 className={styles.beer__title}>{beerInfo.title}</h3>
          <div className={styles.social__proof}>
            <div className={styles.rating}>
              <div className={styles.rating__score}>{beerInfo.overall}</div>
              <img
                src={star}
                className={styles.rating__star}
                alt='star__icon'
              />
            </div>
            <a className={styles.reviews__info} href='#reviews'>
              {beerInfo.reviewCount} Reviews
            </a>
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>From:</span> {beerInfo.country}
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>Calories:</span>{' '}
            {beerInfo.calories} kcal
          </div>
          {/* this button is temporary */}
          <button style={{ background: 'orange', padding: '10px 30px' }}>
            TEMP
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
