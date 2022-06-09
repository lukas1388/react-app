import styles from './Card.module.scss';
import { toggleFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = ({ title, id, isFavorite }) => {

    const dispatch = useDispatch();

    const classChange = () => {
        dispatch(toggleFavorite(id));
    }

    return (
        <li className={styles.card}>
            {title}
            <div>
                <button onClick={() => {classChange(id, isFavorite)}} className={clsx(styles.button, isFavorite && styles.active)}>
                    <span className='fa fa-star-o' />
                </button>
            </div>
        </li>
    );
};

export default Card;