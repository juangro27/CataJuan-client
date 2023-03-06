import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import authService from "../../services/auth.services"


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { authenticateUser, user } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Sign in</Button>
            </div>

        </Form>
    )
}

export default LoginForm