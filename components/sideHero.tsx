'use client'
import { Device } from "@/utils/theme"
import styled from "styled-components"

export const SideHeroContainer = styled.div`
    background-color:#2B2B2B;
    padding: 33px 24px 18px 24px;
    display:grid;
    row-gap:26px;
    border-bottom:1px dashed #3E3E3E;

    @media ${Device.desktop}{
        width:390px;
        height:468px
    }
`

export const BrandsWrapper = styled.div`
    display:flex;
    align-items:center;
    gap:12px;
`

export const ProjectsHero = styled.div`
    width: 342px;
opacity: 1;
top: 103px;
left: 24px;

font-family: 'Switzer-light';
font-size: 38px;
line-height: 105%;
letter-spacing: 0%;
color: #858585;

span{
    color:#FFFFFF;
    font-style: italic;
}
`

export const AboutHero = styled.div`
        width: 342px;
opacity: 1;
top: 103px;
left: 24px;

font-family: 'Switzer-light';
font-size: 28px;
line-height: 105%;
letter-spacing: 0%;
color: #FFFFFF;

    p:nth-child(2){
line-height: 120%;
letter-spacing: 0%;
color: #858585;
margin-top:2rem;
margin-bottom:2rem;
    }

`

export const PricingHero = styled.div`
    width: 342px;
opacity: 1;
top: 103px;
left: 24px;

font-family: 'Switzer-light';
font-size: 28px;
line-height: 105%;
letter-spacing: 0%;
color: #FFFFFF;

p{
    font-style:italic;
    margin-bottom:12px;
}

.hi{
    font-family: 'Switzer-light';
font-size: 18px;
line-height: 120%;
letter-spacing: 0%;
text-align: center;
text-decoration: underline;
text-decoration-style: solid;
font-style:normal;
text-decoration-thickness: 0%;

}

ul{
    display:grid;
    gap:12px;
    padding:1.5rem;
}
`