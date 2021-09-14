import j from "./Cards.module.css";
import { Link } from 'react-router-dom';


const Card = ({name, id, img , type}) => {
    const redHeart = "💖"
    return (
        <div className={j.pokemonCard} >
            <div className={j.pokemonImgConteiner} >
                <img className={j.pokemonImg} src={img} alt={name} />
            </div>
            <div className={j.cardBody}>
                <div className={j.cardTop}>
                    {<Link to={`/Home/data/${id} `}><p>{name}</p></Link>}
                </div>
                <div className={j.typeTitle}>
                        type:
                </div>
                <div className={j.pokemonType}>
                    {type.map((e) => (
                        <div className={j.pokemonTypeText} key={e.id}>{e.name} </div>
                    ))
                    }
                </div>
                <div className={j.cardButton}>
                    <button>
                        <div className={j.pokemonFav}>{redHeart}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Card;