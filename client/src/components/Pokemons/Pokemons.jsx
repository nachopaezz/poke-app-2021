import React from 'react'
import j from "./Pokemons.module.css"
import { useSelector } from 'react-redux'
import Card from '../Cards/Cards'
import Pagination from '../Pagination/Pagination'

export const Pokemons = () => {
    const display = useSelector(state => state.displayPokemon)

    return (
        <div className={j.BODY}>
            <Pagination />
            <div className={j.PokedexGrid}>
                {display.length === 0 ?
                    (<><div className={j.Loading}>
                        <img src="https://i.pinimg.com/originals/4d/f0/38/4df03842be46631dc8b4f1b313638161.gif" alt="" className={j.IMAGEN} />
                    </div>
                    </>
                    ) :
                    display[0].map((e) => (
                        <div key={e.id}>
                            <Card
                               name={e.name}
                               id={e.id}
                               img={e.sprite}
                               type={e.types}
                           />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
