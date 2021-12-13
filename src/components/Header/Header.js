import './Header.css'
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div className="header">
            <NavLink className='link' to='/createTest'>СОЗДАТЬ ТЕСТ</NavLink>
            <NavLink className='link' to='/quizz'>ТЕСТ</NavLink>
        </div>
    )
}

export default Header