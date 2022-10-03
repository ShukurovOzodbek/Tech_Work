import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';
import { useState } from 'react';

const App = () => {
    const [clicked, setClicked] = useState()
    
    return (
        <main className="app">
            <div className="content">
                <HeroesList cli={clicked} />
                <div className="content__interactive">
                    <HeroesAddForm />
                    <HeroesFilters onCli={setClicked} />
                </div>
            </div>
        </main>
    )
}

export default App;