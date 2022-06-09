import PageTitle from "../PageTitle/PageTitle";
import styles from './Favorite.module.scss';
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { getFavorite } from "../../redux/store";

const Favorite = () => {

    const favoriteCard = useSelector(getFavorite);

    if(favoriteCard.lenght === 0) 
        return (
            <div>
                <p>No favorite cards!</p>
            </div>
    );

    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.wrapper}>
                <ul className={styles.cards}>
                    {favoriteCard.map(card => (<Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} /> ))}
                </ul>
            </div>
        </div>
    );
};

export default Favorite;