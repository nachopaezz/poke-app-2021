import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemons } from "../../actions/index";
import { GET_POKEMONS } from "../../Utils/Utils";
import s from "./CreatePokemon.module.css";

export function CreatePokemon() {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const TYPES = useSelector((state) => state.type);
  const [type, setType] = useState([]);
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    sprite: "",
    type: [],
  });

  function handleChange(e) {
    setInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }
  function handleChangeType(e) {
    setType((values) => [...values, e.target.value]);
    setInput((values) => ({
      ...values,
      [e.target.name]: [...type, e.target.value],
    }));
  }
  function resetType(e) {
    setType([]);
    setInput((values) => ({
      ...values,
      [e.target.name]: [],
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(GET_POKEMONS, input).then((res) => {
      dispatch(getPokemons);
      push(`/Home/data/${res.data.id}`);
    });
  };

  return (
    <div className={s.container}>
      <div className={s.Form}>
        <form onSubmit={handleSubmit}>
          <div className={s.containerInput}>
            <label htmlFor="Name">
              <b>NAME</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                className={s.Inputs}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className={s.containerInput}>
            <label htmlFor="HP">
              <b>HP</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="number"
                name="hp"
                className={s.Inputs}
              />
            </div>
          </div>
          <div className={s.containerInput}>
            <label htmlFor="Attack">
              <b>ATTACK</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="number"
                name="attack"
                className={s.Inputs}
              />
            </div>
          </div>
          <div className={s.containerInput}>
            <label htmlFor="Defense">
              <b>DEFENSE</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="number"
                name="defense"
                className={s.Inputs}
              />
            </div>
          </div>
          <div className={s.containerInput}>
            <label htmlFor="Speed">
              <b>SPEED</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="number"
                name="speed"
                className={s.Inputs}
              />
            </div>
          </div>
          <div className={s.containerInput}>
            <label htmlFor="height">
              <b>WEIGHT</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="number"
                name="height"
                className={s.Inputs}
              />
            </div>
          </div>
          <div className={s.containerInput}>
            <label htmlFor="weight">
              <b>WEIGHT</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="number"
                name="weight"
                className={s.Inputs}
              />
            </div>
          </div>
          <div className={s.containerInput}>
            <label htmlFor="sprite">
              <b>SPRITE</b>
            </label>
            <div>
              <input
                onChange={handleChange}
                type="text"
                name="sprite"
                className={s.Inputs}
              />
            </div>
          </div>
          <div className={s.containerButon}>
            {input.type.length > 2 ? (
              <p>Only 2 types ok Pokemons</p>
            ) : (
              <>
                <label htmlFor="type">
                  <b>TYPE</b>
                </label>
                <select
                  name="type"
                  onChange={handleChangeType}
                  className={s.BUTON}
                >
                  <option>Search...</option>
                  {TYPES.length === 0 ? (
                    <option>Loading...</option>
                  ) : (
                    TYPES[0].map((e) => {
                      return (
                        <option value={e.id} name="Normal" /* id={1} */>
                          {e.name}
                        </option>
                      );
                    })
                  )}
                </select>
              </>
            )}
          </div>
          {input.type.length > 2 ? (
            <>
              <p className={s.containerButon}>Resetea tus tipos porfavor</p>
            </>
          ) : (
            <div>
              <button className={s.PushButon}>✔</button>
            </div>
          )}
        </form>
        {input.type.length > 2 ? (
          <>
            <div className={s.containerButon}>
              <button onClick={resetType} name="type" className={s.BUTON}>
                Resetear
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
