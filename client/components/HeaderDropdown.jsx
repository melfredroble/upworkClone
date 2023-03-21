import NavItemOne from './NavItemOne'
import NavItemTwo from './NavItemTwo'
import NavItemThree from './NavItemThree'

export const HeaderDropdown = ({setHoverNavItem, hoverNavItem}) => {
return (
        <>
            {hoverNavItem === 1 && <NavItemOne setHoverNavItem={setHoverNavItem}/>}
            {hoverNavItem === 2 && <NavItemTwo setHoverNavItem={setHoverNavItem}/>}
            {hoverNavItem === 3 && <NavItemThree setHoverNavItem={setHoverNavItem}/>}
        </>
    )
}

