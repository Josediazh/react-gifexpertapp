import PropTypes from 'prop-types';

export const GifsGridCard = ({id,title,img}) => {
   
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifsGridCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}


