import { Link } from "react-router-dom"
// link prevents reloading when using routes

const About = () => {
    return (
        <div>
            <h4 style={{ float: 'center', }}>
                Version 1.0
            </h4>
            <Link to='/' >Go Back</Link>
        </div>
    )
}

export default About
