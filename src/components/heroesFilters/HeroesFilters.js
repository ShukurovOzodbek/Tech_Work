// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterHero } from "../../store/heroes/HeroesSlice";

const HeroesFilters = ({onCli}) => {
    let names = useSelector(state => state.all.data)
    let dispatch = useDispatch()

    const handleClick = (i) => {
        dispatch(filterHero(i))
        onCli(true)
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {
                        names.map((i, index) => <button key={index} onClick={() => handleClick(i.name)} className={i.style}>{i.name}</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;