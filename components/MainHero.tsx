import { Device } from "@/utils/theme";
import styled from "styled-components";

export const MobileHero = styled.div`
    background-color: #2B2B2B;
    padding-top:20px;
    padding-bottom:16px;
    background-image:url(./bg-texture.png);
    background-blend-mode:color-burn;
    display:grid;
    justify-content:center;
    
    text-align:center;
    color: #b8b8b8;
    font-family: 'Switzer-light';
    font-size:13px;

    @media ${Device.desktop} {
    display: none;
    }
`

export const ImageContainer = styled.div`
    width: 350px;
height: 234px;
opacity: 1;
margin-top:16px;
display:flex;
align-items:center;
justify-content:center;

background: #161616;


`

export const DotContainer = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    padding:18px 0;
    justify-content:center;
    gap:8px;

`

export const Dot = styled.div`
    width:6px;
    height:6px;
    border-radius:50%;
    background:#ADADAD;

    &:nth-child(2){
        background:#414141;
    }

    &:nth-child(3){
        background:#414141;
    }

    &:nth-child(4){
        background:#414141;
    }

    &:nth-child(5){
        background:#414141;
    }

    &:nth-child(6){
        background:#414141;
    }
`

