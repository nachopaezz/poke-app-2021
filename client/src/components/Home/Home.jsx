import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getDisplay, getPokemonsAPI, getPokemonsDB, getType} from "../../actions/index"
import { Filter } from "../Filter/Filter"
import { Pokemons } from "../Pokemons/Pokemons"
import j from "./Home.module.css"


const Home = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.totalpokemons)
    if(state.length !== 0){
        var index = state[0].slice(0, 12)
        dispatch(getDisplay([index]))
    }




    useEffect(()=>{
        dispatch(getPokemonsAPI())
        dispatch(getPokemonsDB())
        dispatch(getType())
    }, [dispatch])                           // Reveer


    return (
        <div className={j.BODY}>
            {state && state.length === 0?
                <img src="https://giffiles.alphacoders.com/140/14071.gif" alt="" className={j.loading}/>
                :
                <>
                <div className={j.Pagination}>
                    <h1 className={j.home }>
                        PokeHub
                        </h1>
                    <div>
                        {
                            state.lenght === 0 ?
                                <div>Loading...</div> :
                                <Filter />
                        }
                    </div>
                </div>
                <Pokemons />
            </>
            }
        </div>
    )
}

export default Home;