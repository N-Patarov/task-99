//implement the styled-components logic here.
import styles from "./styles.css";
export default function LoginForm(){
    return(
    <div className={styles.card}>
        <form className={styles.form}>
            <label >Email</label>
            <input className={styles.input} type="text" placeholder="type your email"></input>
            <label >Password</label>
            <input className={styles.input} type="password" placeholder="type your password"></input>
            <button type="submit" className={styles.button}>Login</button>
        </form>
    </div>        
    )
}
