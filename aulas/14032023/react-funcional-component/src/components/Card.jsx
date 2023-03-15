import propTypes from 'prop-types'
import { formatPrice } from '../utils/formatters'
import { Button } from './Button'
import './Card.css'

export function Card({name, image, price, description}) {
  return (
    <div className="container">
      <img src={image} alt="" />

      <div className="details">
        <div className="top">
          <p>{name}</p>
          <strong>{formatPrice(price)}</strong>
        </div>

        <div className="bottom">
          <p>{description}</p>
        </div>
      </div>

      <Button>Comprar</Button>
    </div>
  )
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string,
  price: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
}

Card.defaultProps = {
  image: "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
}