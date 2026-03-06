'use client'
import Image from "next/image";
import styled from "styled-components";


export const Avatar = styled(Image)`
    border-radius:50%;
`

export const Icon = styled(Image)`
    transition:0.3s;
    `
export const CTAButton = styled.button`
margin-bottom:33px;

background: #F0F0F0;
background: linear-gradient(154deg, rgba(240, 240, 240, .8) 0%, rgba(255, 255, 255, 1) 50%, rgba(117, 117, 117, .2) 100%);
opacity: 1;
border-radius: 100px;
border: none;
border-bottom: 2px dashed #C9C9C9;
padding: 8px 12px 8px 8px;
display:flex;
align-items:center;
justify-content:center;
gap:10px;


font-family: 'Switzer-light';
font-size: 14px;
line-height: 170%;
letter-spacing: 0%;
vertical-align: middle;
transition: 0.3s ease;

box-shadow: 0px 7px 14px 0px #0000008C;


width:100%;
height:44;
        
        &:hover ${Icon}{
            content: url('/images/iconbtnHover.svg')
        }
    
    &:hover{
        background: #F0F0F0;
background: linear-gradient(154deg, rgba(240, 240, 240, 5) 0%, rgba(0, 171, 238, .9) 50%, rgba(240, 240, 240, 5) 100%);
        color:#FFFFFF;
    }
`

