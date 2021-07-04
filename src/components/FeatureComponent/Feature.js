import React from 'react'
import styled from "styled-components";
import FeatureImage from '../../assets/feature-image.png'
import DeclinesImage from '../../assets/declines.png'

const Feature = () => {
    return (
        <>
        <Container>
            <FeatureText>
            <h4>FEATURE</h4>
            <h3>Unmatched Performance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            </FeatureText>
            <FeatureImageContent>
                <img src={FeatureImage}/>
            </FeatureImageContent>
        </Container>
        <Container>
            <FeatureImageContent>
                <img src={DeclinesImage}/>
            </FeatureImageContent>

            <FeatureText>
            <h4>FEATURE</h4>
            <h3>Task, Profile, and Proxy Groups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            </FeatureText>
        </Container>
        </>
    )
}

const FeatureText = styled.div`
padding: 10%;
width: 50%;
h4{
    color: #6B9FFF;
}
h3{
    color: #FFFFFF;
}
p{
    color: #C3CAEA;
}
`
const FeatureImageContent = styled.div`
width: 50%;
`
const Container = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`

export default Feature
