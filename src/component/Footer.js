import { Link } from "react-router-dom"
// link prevents reloading when using routes

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to = '/about'>About</Link>
        </footer>
    )
}

export default Footer
