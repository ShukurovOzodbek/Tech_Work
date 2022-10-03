import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/heroes/heroesThunk';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = ({cli}) => {
    const { filters, data, status } = useSelector(state => state.heroes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    if (status === "loading") {
        return <Spinner/>;
    } else if (status === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} id={id} {...props}/>
        })
    }

    const elements = renderHeroesList(data);
    const elements2 = renderHeroesList(filters);
    return (
        <ul>
            {cli ? elements2 : elements}
        </ul>
    )
}

export default HeroesList;