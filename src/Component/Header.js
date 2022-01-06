import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks';

function Header({title}) {
    const buttonClick2 = (e)=>{
        console.log("click",e);
    }
    return (
        <header className='header'>
            <h1 className='title'  >{title}</h1>
        <Button buttonText="Add" buttonClick={buttonClick2}  />
      

        </header>
    )
}

Header.defaultProps={
    title:"default header"
}
Header.prototypes={
    title:PropTypes.string.isRequired,
}

export default Header
