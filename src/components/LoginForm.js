import styles from "./styles.css";
import react from "react"
import {Form, Card, Input, Button } from "./form"
export default function LoginForm(){
    return(
    <Card>
        <Form>
            <label>Email</label>
            <Input></Input>
            <label>Password</label>
            <Input type="password"></Input>
            <Button>Login</Button>
        </Form>
    </Card>      
    )
}
