import React from 'react'
import styled from 'styled-components'
import Section from "./Section"


function Home() {
    return (
        <Container>
            <Section 
                title = "Model 3"
                description= "Order Online for "
                backgroundImg = "model-3.jpg"
                leftBtnText = "CUSTOM ORDER"
                rightBtnText = "EXISTING INVENTORY"
            />
            <Section 
                title = "Model Y"
                description= "Order Online for "
                backgroundImg = "model-y.jpg"
                leftBtnText = "CUSTOM ORDER"
                rightBtnText = "EXISTING INVENTORY"
            />
            <Section 
                title = "Model S"
                description= "Order Online for "
                backgroundImg = "model-s.jpg"
                leftBtnText = "CUSTOM ORDER"
                rightBtnText = "EXISTING INVENTORY"
            />
            <Section 
                title = "Model X"
                description= "Order Online for "
                backgroundImg = "model-x.jpg"
                leftBtnText = "CUSTOM ORDER"
                rightBtnText = "EXISTING INVENTORY"
            />
            <Section 
                title = "Solar Panels"
                description= "Lowest Cost Solar Panes in America"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "ORDER NOW"
                rightBtnText = "LEARN MORE"
            />
            <Section 
                title = "Accesories"
                description= ""
                backgroundImg = "accessories.jpg"
                leftBtnText = "SHOP NOW"
            />
            
            

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
