import Button from "./Button"
import PropTypes from 'prop-types'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'firebrick' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />
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
