
import PropTypes from 'prop-types'


function Header({heading}) {
  return (
    <header style={{backgroundColor:"white", color:"#0f0c39"}}>
      <div className="container">
        {heading}
      </div>
    </header>
  )
}

Header.defaultProps = {
    heading : "My Blog Post",
}

Header.propTypes = {
    heading : PropTypes.string,
}

export default Header
