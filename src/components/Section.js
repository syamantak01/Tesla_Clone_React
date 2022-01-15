import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal"

function Section(props) {
    return (
        <Wrap bgImg = {props.backgroundImg}>
            <Fade className="fadeOutDown" fraction='1'>
                <ItemText>
                    <h1 style = {{fontSize: '40px', paddingBottom: '6px', fontFamily: "Gotham", fontWeight: 500}}>{ props.title }</h1>
                    <p style = {{fontSize: '15px', opacity: 0.85}}>{ props.description }
                        { props.description === "Order Online for " && <a href="https://www.tesla.com/support/taking-delivery?redirect=no">Touchless Delivery</a> }
                    </p>
                </ItemText>
            </Fade>
            <Buttons>
            <Fade className="fadeOutDown" fraction='1'>
                <ButtonGroup>
                    <LeftButton>
                        { props.leftBtnText }
                    </LeftButton>
                    { props.rightBtnText &&     //display right button only if right button text exists else display only the left button
                        <RightButton>
                            { props.rightBtnText }
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("images/${props.bgImg}")` }
`

const ItemText = styled.div`

    padding-top: 15vh;
    text-align center;

    p{
    font-family: -apple-system, 
                BlinkMacSystemFont, sans-serif;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 600px){
        flex-direction: column;
    }


`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.9);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 13px;
    font-family: Gotham, -apple-system, 
                BlinkMacSystemFont, sans-serif;
    cursor: pointer;
    margin: 10px;
`
const RightButton = styled.div`
    background-color: white;
    height: 40px;
    width: 256px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.65;
    font-size: 13px;
    font-family: Gotham, -apple-system, 
                BlinkMacSystemFont, sans-serif;
    cursor: pointer;
    margin: 10px;
`
const DownArrow = styled.img`
    
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
`
