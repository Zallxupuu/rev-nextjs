import styled from "styled-components";

export const Card = styled.div`

    height:147px;
    margin-top:16px;
    padding:16px;

    

.text{
    text-align:start;
    font-family: 'Switzer-light';
font-size: 18px;
line-height: 125%;
letter-spacing: 0%;
width: 308px;
}

.profile{
        display:flex;
        margin-top:40px
    }

    .profile .title{
        margin-left:8px;
        text-align:start;
    }

    .profile .title p:nth-child(1){
font-family: 'Switzer-light';
font-size: 16px;
line-height: 145%;
letter-spacing: 0.25%;
color: #FFFFFF;

    }

        .profile .title p:nth-child(2){
font-family: 'Switzer-light';
font-size: 12px;
line-height: 145%;
letter-spacing: 0.25%;

    }


    background: radial-gradient(50% 50% at 50% 50%, #333333 0%, #303030 40.87%, #272727 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border:1px dashed #474747;
`