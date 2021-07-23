import Button from "./Button"
import PropTypes from 'prop-types'
import {useLocation} from "react-router-dom"

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname ==='/' && <Button
                color={showAdd ? 'firebrick' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager',
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header
