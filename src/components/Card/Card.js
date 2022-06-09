import styles from './Card.module.scss';
import { toggleFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { removeCard } from '../../redux/cardsRedux';

const Card = ({ title, id, isFavorite }) => {

    const dispatch = useDispatch();

    const classChange = () => {
        dispatch(toggleFavorite(id));
    }

    const removedCard = () => {
        dispatch(removeCard(id));
    }

    return (
        <li className={styles.card}>
            {title}
            <div>
                <button onClick={() => {classChange(id, isFavorite)}} className={clsx(styles.button, isFavorite && styles.active)}>
                    <span className='fa fa-star-o' />
                </button>
                <button onClick={() => { removedCard(id) }}>
                    <span className='fa fa-trash' />
                </button>
            </div>
        </li>
    );
};

export default Card;