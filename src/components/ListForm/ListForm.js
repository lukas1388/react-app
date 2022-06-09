import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import shortid from 'shortid';

const ListForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ id: shortid(), title, description }));
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <label>Title:</label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label>Description:</label>
            <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ListForm;