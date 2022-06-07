import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.nav}>
                    <div className={styles.icon}>
                        <Link to="/"><span className={'fa fa-tasks'} /></Link>
                    </div>
                    <div>
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to='/favorite'>Favorite</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to='/about'>About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;