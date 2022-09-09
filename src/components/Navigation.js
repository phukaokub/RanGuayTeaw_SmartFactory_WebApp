import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring';
import NavigationMenu from "./NavigationMenu";

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const menuTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })

     const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1 , transform: 'translateX(0%)'},
        leave: { opacity: 0 , transform: 'translateX(100%)'},
      })

    // if (showMenu){
    //     menu = <div
    //         className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    //     >
    //         The menu
    //     </div>

    //     menuMask = 
    //     <div
    //         className="bg-gradient-to-r from-cyan-500 to-blue-500 fixed top-0 left-0 w-full h-full z-50"
    //         onClick={() => setShowMenu(false)}
    //     >

    //     </div>
    // }
    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                    />
            </span>
            {
                maskTransitions((styles, item) => 
                        item && 
                        <animated.div 
                            style={styles}
                            className="bg-white absolute top-0 right-0 w-1/5 h-full shadow p-1.5"
                            onClick={() => setShowMenu(false)}
                        > 
                        <NavigationMenu
                                closeMenu={() => setShowMenu(false)}/>
                        </animated.div>)}
                    
            {
                menuTransitions((styles, item) =>
                        item && 
                        <animated.div 
                            style={styles}                            
                            className="fixed bg-black bg-opacity-50 top-0 left-0 w-4/5 h-full z-50 shadow"
                        >
                         </animated.div>)
                    }

            {/* { menuMask }

            { menu } */} 
        </nav>
    )
}

export default Navigation