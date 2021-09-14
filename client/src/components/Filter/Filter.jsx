import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { clearState, filterAz, filterMaxPower, filterMinPower, filterZa, getDisplay, getPokemons} from "../../actions/index"
import s from "./Filter.module.css"


export const Filter = () => {
    /* const pokemon = useSelector(state => state.pokemons) */
    const totalpokemons = useSelector(state => state.totalpokemons)
    const pokemonDB = useSelector(state => state.pokemonsDB)
    const types= useSelector(state => state.type)
    const pokemonAPI = useSelector(state => state.pokemonsAPI)
    const [type, setType] = useState([])
    const dispatch = useDispatch()

    //---------------------INDEX-------------------//

    if(totalpokemons.length !== 0 && pokemonAPI.length !== 0){
        var allPokemons = totalpokemons[0].slice(0,12)
        var pDb = pokemonDB[0].slice(0, 12)
        var pApi = pokemonAPI[0].slice(0,12)

    }

//--------------------Functions------------------//
    const filterType = ()=>{
        const result = totalpokemons[0].filter((e) => {
            if(e.types.length === 2){
                if (e.types[0].name === type) {
                    return e
                }
                if (e.types[1].name === type) {
                    return e
                }
            }
            if (e.types[0].name === type) {
                return e
            }
            return null
        })
        dispatch(clearState([]))
        return dispatch(getDisplay([result]))
    }

    const handleChange = (e)=>{
        setType([0])
        setType(e.target.value)
    }


//----------------Funciones de los botones------------//
    const TotalPokemons = async (e)=>{
        dispatch(clearState([]))
        dispatch(getPokemons())
        return dispatch(getDisplay([allPokemons]))
    }

    const PokemonAPI = ()=>{
        dispatch(clearState([]))
        return dispatch(getDisplay([pApi]))
    }

    const PokemonDB = () => {
        dispatch(clearState([]))
        return dispatch(getDisplay([pDb]))
    }

    const FilterAZ = ()=>{
        dispatch(clearState([]))
        return dispatch(filterAz(totalpokemons[0]))

    }
    const FilterZA = () => {
        dispatch(clearState([]))
        return dispatch(filterZa(totalpokemons[0]))

    }
    const FilterMinPower = () => {
        dispatch(clearState([]))
        return dispatch(filterMinPower(totalpokemons[0]))

    }
    const FilterMaxPower = () => {
        dispatch(clearState([]))
        return dispatch(filterMaxPower(totalpokemons[0]))

    }


    return (
        <div className={s.container}>
            <div>
                <label >Filtros: </label>
                <button onClick={() => FilterAZ()} className={s.BUTONMIN}>AZ</button>
                <button onClick={() => FilterZA()} className={s.BUTONMIN}>ZA</button>
                <button onClick={() => FilterMinPower()} className={s.BUTONMAX}>minPower</button>
                <button onClick={() => FilterMaxPower()} className={s.BUTONMAX}>maxPower</button>
            </div>
            <div>
                <label >Ordenamiento: </label>
                <button onClick={() => TotalPokemons()} className={s.BUTONMAX}>TotalPokemons</button>
                <button onClick={() => PokemonAPI()} className={s.BUTONMAX}>Api</button>
                <button onClick={() => PokemonDB()} className={s.BUTONMAX}>DataBase</button>
            </div>
            <div>
                <label >Type: </label>
                <select name="type" id="type" onChange={handleChange} className={s.Select} >
                    <option>Elegir</option>
                    {type.length === 0 ? <option>Cargando..</option>:
                    types[0].map((e)=>{
                        return <option value={e.name} name="Normal" key={e.id}>{e.name}</option>
                                        })
                }

                </select>
                <button onClick={() => filterType()} className={s.BUTONMAX}>Filtrar</button>
            </div>
        </div>
    )
}