import {useState, useEffect} from 'react'

const useForm = validate => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({

    })

    const handlerChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validate(values))
    }

    return {
        values, 
        handlerChange, 
        handleSubmit, 
        errors
    }
}

export default useForm
