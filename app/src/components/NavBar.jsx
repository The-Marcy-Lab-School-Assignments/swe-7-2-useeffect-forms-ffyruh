const colors = {
  black: 'navbar-inverse',
  white: 'navbar-default'
}
import giphyLogo from '../../public/giphy_logo.png';

const NavBar = ({ color, title }) => {
  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <img src={giphyLogo} alt="Giphy Logo" />
          <div className='navbar-brand'>
            {title}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
