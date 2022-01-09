

function Button({buttonText,bgColor,buttonClick}) {


    return (
        <button className='btn' onClick={buttonClick} style={{backgroundColor:bgColor}} >{buttonText}</button>
    )
}
Button.defaultProps={
    buttonText:"Button Title",
    bgColor:'black'
}
export default Button
