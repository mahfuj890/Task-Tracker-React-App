import PropTypes from 'prop-types'
import Button from './Button'


function Header({title,onToggleForm,changeText}) {

    return (
        <header className='header'>
            <h1 className='title'  >{title}</h1>
        <Button bgColor= {changeText ? "red": "black" }buttonText= {changeText ? "Close": "Add" } buttonClick={onToggleForm}     />


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
