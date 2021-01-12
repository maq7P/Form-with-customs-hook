import React from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const [isSubmitted, setSubmitted] = React.useState(false)
    const submitFrom = () => {
        setSubmitted(true)
    }
    return (
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="images/img-2.svg" alt="spaceship" className="form-img"/>
            </div>
            {isSubmitted && <FormSuccess/>}
            {!isSubmitted && <FormSignup submitFrom={submitFrom}/>}
        </div>
    )
}

export default Form
