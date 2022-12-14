import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RocketIcon from '@mui/icons-material/Rocket';

export const Logo = styled(SatelliteAltIcon)`
    display: block;
    text-align: center;
    padding: 6px;
    overflow: hidden;
    height: 50px;
    width: 50px;
    fill: #b9c5b8;
    &:hover,
    &:focus {
            fill: #2e86a1d3;
        }
`;

export const ArchiveLogo = styled(RocketLaunchIcon)`
    display: block;
    text-align: center;
    padding: 6px;
    overflow: hidden;
    height: 50px;
    width: 50px;
    fill: #b9c5b8;
    &:hover,
    &:focus {
            fill: #2e86a1d3;
        }
`;

export const StatisticLogo = styled(RocketIcon)`
    display: block;
    text-align: center;
    padding: 6px;
    overflow: hidden;
    height: 50px;
    width: 50px;
    fill: #b9c5b8;
    &:hover,
    &:focus {
            fill: #2e86a1d3;
        }
`;

export const Link = styled(NavLink)`
    margin: auto;
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: #0a415a;
    font-size: 18px;
    &:hover,
    &:focus {
            color: #da4e44;
            font-size: 20px;
        }
    &.active {
        color: #d637b4d5;
    }
`;

export const Header = styled.header`
    display: block;
    justify-content: space-around;
    align-items: center;
    min-height: 80px;
    margin-bottom: 0px;
    background-color: #2b2e2eee;
    border-bottom: 1px solid #0a415a;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    z-index: 1001;
    top: 0px;
    left: auto;
    right: 0px;
        @media (min-width: 780px) and (max-width: 1200px) {
        justify-content: center;
    }
`;
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Box = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
`;

export const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
            @media (max-width: 780px) {
        display: none;
    }
`;

export const LogoText = styled.p`
    text-decoration: none;
    display:flex;
    align-items: center;
    justify-content:center;
    text-align:center;
    color: #fff;
    padding-left:30px;
    width: 6px;
    height:6px;
`;
export const Wrapper = styled.div`
    position: relative;
`;


// .App-header {
//   background-color: #282c34;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }