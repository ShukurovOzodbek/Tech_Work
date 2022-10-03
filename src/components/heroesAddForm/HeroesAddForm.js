// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchAll } from "../../store/all/allThunk"
import { postData } from "../../store/heroes/heroesThunk"

const HeroesAddForm = () => {
    const [name, setName] = useState('')
    const [description, setDesription] = useState('')
    const [element, setElement] = useState('')

    const names = useSelector(state => state.all.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAll())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const hero = {
            id: Math.random(Math.floor() * 1000000),
            name,
            description,
            element
        }

        dispatch(postData(hero))
        window.location.reload()
    }

    return (
        <form onSubmit={handleSubmit} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как меня зовут?" />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    value={description}
                    onChange={(e) => setDesription(e.target.value)}
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}
                    name="element">
                    <option >Я владею элементом...</option>
                    {
                        names.map((i, index) => (<option key={index} value={i.name}>{i.name}</option>))
                    }
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;