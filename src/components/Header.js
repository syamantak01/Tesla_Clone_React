import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [NavStatus, setNavStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Container>
            <a href="https://www.tesla.com/">
                <img src = "/images/tesla-logo.svg" alt="" style={{height: '50px', width: '130px'}} />
            </a>
            <Menu>
                {/* Doing this using redux store */}
                {cars && cars.map((car, index)=>(
                    <a key={index} href="#" style={{fontFamily: 'Gotham', fontWeight: 400}}>{car}</a>   
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
            </RightMenu>
            <CustomMenu fontSize='large'onClick={()=>setNavStatus(true)}/>

            <NavMenu show={NavStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setNavStatus(false)}/>
                </CloseWrapper>
                <MenuList>
                    {cars && cars.map((car, index)=>(
                        <li><a key={index} href="#">{car}</a></li>
                    ))}
                    <li><a href="#">Solar Roof</a></li>
                    <li><a href="#">Solar Panels</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Account</a></li>
                </MenuList>
            </NavMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px
    //the next 3 properties help to expand the container component
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: auto;
    a{
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
        text-decoration: none;
    }
    @media(max-width: 1200px){
        display: none;
    }    
`

const RightMenu = styled.div`
    display: flex;
    align-item: center;
    a{
        font-weight: 600;
        margin-right: 10px;
        text-decoration: none;
    }

    @media(max-width: 1200px){
        display: none;
    }
    
`
const CustomMenu = styled(MenuIcon)`
    margin-right: 15px;
    margin-left: 20px;
    cursor: pointer;
`

const NavMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 295px;
    z-index: 100;
    list-style: none;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: flex-start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.3s ease-in;

    li{ 
        
        padding: 11px 40px;
        
        a{
            text-decoration: none;
            font-family: Gotham;
            font-weight: 400;
            font-size: 15px;
        }
    }

`
const MenuList = styled.div`
    margin-top: 30px;
    overflow-y: scroll;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 18px;
    

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
