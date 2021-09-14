import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import s from "./SearchBar.module.css"
import { useHistory } from 'react-router-dom';
export default function Search() {

    const name = useSelector(state => state.totalpokemons)
    const { push } = useHistory()
    const [search, setSearch] = useState("")

    const handleChange =(e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const result = name[0].find(e => e.name.toLowerCase() === search.toLowerCase())
       result ? push(`/Home/data/${result.id}`) : push(`/Home/data/error`)
    }


    return (
        <div className={s.container} >
            <input autoComplete="off" type="text" name="search" placeholder={"      Buscar Pokemon..."} className={s.Input} onChange={handleChange}/>
            {
                name[0] ? <button className={s.Button} onClick={handleSubmit} type="submit">Buscar</button> : <button className={s.Button}>🔍</button>
            }
        </div>
    )
}
