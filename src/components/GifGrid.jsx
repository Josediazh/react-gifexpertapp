import { GifsGridCard } from "./GifsGridCard";
import { UseFetchGifs } from "../hooks/UseFetchGifs";
import PropTypes from 'prop-types';

export default function GifGrid({category}) { 

  const {gifs,isloading } = UseFetchGifs(category)

  return (
    <>
    <h3>{category}</h3>
      {isloading && (<h4>Cargando...</h4>)}
      <div className="card-grid">
        {
            gifs.map( ({id,title,imgurl}) => {
                return (
                  < GifsGridCard key={id} id={id} title={title} img={imgurl} />
                )
            })
        }
      </div>
    </>
  )
}


GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}