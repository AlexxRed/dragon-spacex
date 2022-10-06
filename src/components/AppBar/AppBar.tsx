import { Header, Navigation, Box, Logo, ArchiveLogo, LogoText } from './AppBar.styled';//Logo,LogoIcon 
import { Link, NavLink } from 'react-router-dom';
import { refs } from "../../services/consts/refs";



export function AppBar() {
    return (
        <Header>
            <Navigation>
                <Box>
                    <NavLink to={refs.home}><Logo></Logo><LogoText>Dragon</LogoText></NavLink>
                </Box>
                <Box><h1>Dragons</h1></Box>
                <Box>
                    <Link to={refs.dragons}><ArchiveLogo></ArchiveLogo><LogoText>All Dragons</LogoText></Link>
                    {/* <Link to={refs.staistic}><StatisticLogo></StatisticLogo></Link> */}
                </Box>
            </Navigation>
        </Header>
        
    )
};