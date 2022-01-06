

function Button({buttonText,bgColor,buttonClick}) {
 
    return (
        <button className='btn' onClick={buttonClick}  >{buttonText}</button>
    )
}
Button.defaultProps={
    buttonText:"Button Title"
}
export default Button
