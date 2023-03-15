import propTypes from 'prop-types'
import './Header.css'

export function Header({ name, email, avatar }) {
  return (
    
    <header>
      <div className="welcame">
        <h2>Bem vindo, <strong>Cassio</strong></h2>
        <span>Aqui está o resumo da sua vida financeira.</span>
      </div>

      <div className="info">
        <img src={avatar} alt="" />

        <div className="user-info">
          <h3>{name}</h3>
          <span>{email}</span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string,
  email: propTypes.string.isRequired
}

Header.defaultProps = {
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU'
}