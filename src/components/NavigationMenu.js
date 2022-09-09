import React from 'react'
import {Link} from 'react-router-dom';

function NavigationMenu(props){
    return(
        <div className='pl-2'>
            <div className="font-bold py-3 flex">
                AppName
            </div>
                <ul>
                    <li>
                        <Link to= "/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={() => props.closeMenu(false)}
                        >
                            Home
                        </Link> 
                    </li>
                    <li>
                        <Link to="/about" 
                        className='text-blue-500 py-3 border-t border-b block'
                        onClick={() => props.closeMenu(false)}
                        >
                            about
                        </Link>
                    </li>
                </ul>                                         
        </div>
    )
    
}

export default NavigationMenu