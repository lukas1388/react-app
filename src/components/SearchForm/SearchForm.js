import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearch } from '../../redux/store';

const SearchForm = () => {

    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        dispatch(updateSearch({searchString: ''}))
     }, []);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearch({ searchString }));
        setSearchString('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;