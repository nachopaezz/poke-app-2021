import React from 'react'
import s from "./Welcome.module.css"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDisplay, getPokemons, getPokemonsAPI, getPokemonsDB, getType } from '../../actions/index';
import { useEffect } from 'react';


export const Inicio = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.totalpokemons)

    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getPokemonsDB())
        dispatch(getPokemonsAPI())
        dispatch(getType())
    }, [dispatch])

    const render = pokemon.slice(0.12)

    const handleClick =()=>{
        dispatch(getDisplay([render]))

    }
    return (
        <body className={s.Body}>
            <div className={s.Titulo}>
            <h1 className={s.H1}>PokeHub</h1>
            </div>
            <div className={s.container}>
                <NavLink exact to="/Home" ><button className={s.Boton} onClick={()=>handleClick}>✔</button></NavLink>
            </div>
        </body>
    )
}