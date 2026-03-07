'use client'

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Device } from "../utils/theme"
import { SideHeroContainer, ProjectsHero, PricingHero, AboutHero, SideHeroMobile } from "@/components/sideHero";
import { CTAButton, Avatar, Icon } from "@/components/CTAButton";
import { TagsContainer, TagsTitle } from "@/components/Tags";
import { MobileHero, Dot, DotContainer, ImageContainer, DesktopHero, DesktopContent } from "@/components/MainHero";
import { Card } from "@/components/testimonialCard";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:100dvw;
  height:70px;
  background-color: #2B2B2B;
  top:0;
  z-index:100;
  border-bottom:1px dashed #5b5b5b;
  color:#B2B2B2;
  background-image:url(./bg-texture.png);
  background-blend-mode:color-burn;

  @media ${Device.desktop} {
    display: flex;
    justify-content: start;
    position:sticky;
  }

  .time{
    @media ${Device.mobile}{
      display:none;
    }
  }
`

const Logo = styled.div`
  font-weight: bold;
  text-align: center;
  font-family: 'Switzer-bold';
  
  width:6.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  height: 100%;
`

const NavContainer = styled.div`
  display:flex;
  width:100vw;
  padding:0 2rem;
  justify-content:space-between;
  align-items:center;

  @media ${Device.mobile}{
    display:none;
  }

.navlinks{
  display:flex; 
  gap:32px;
}

.navlinks p{
  cursor: pointer;
}

.brands{
  display:flex;
  align-items:center;
  gap: 13px;
}
`

const PillContainer = styled.div`
height: 100%;
width:32%;
display:flex;
align-items:center;
gap:52px;
padding:0 1rem;
`
const Pill = styled.div`
font-size:12px;
height:32px;
padding: 0 15px;
  border-width: 1px;
border-style: dashed;
border-radius: 50px;

display:flex;
align-items:center;
justify-content:center;
background: radial-gradient(50% 50% at 50% 50%, #2B2B2B 0%, #343434 100%);
border: 1px dashed #5B5B5B;

cursor:default;
`

const Ball = styled.div`
  width:8px;
  height:8px;
  background: radial-gradient(50% 50% at 50% 50%, #4DCDFF 0%, #0791C8 100%);
  border-radius:50%;
  margin:0 6px;
`

const LinkContainer = styled.div`
position: absolute;
z-index:100;
  height: 100vh;
  width: 100%;
  color:#B2B2B2;
  background:#242424d5;
  backdrop-filter: blur(2px);
  

  @media ${Device.desktop} {
    display: none;
  }

  .LinkWrapper{
    width:100%;
    background:#2B2B2B;
    border-bottom: 1px dashed #5B5B5B;
    box-shadow: 0px 4px 10px #000000d6;
  }
  .LinkWrapper .Link{
    padding-top:16px;
    padding:24px;
    padding-bottom:0;
    
  }
  
  .LinkWrapper .Link div p{
    font-family: 'Switzer-light';
    font-size: 38px;
    line-height: 105%;
    letter-spacing: 0%;
    vertical-align: middle;
    cursor: pointer;
  }

  .LinkWrapper .Link div{
    border-bottom:1px dashed #5B5B5B;
    height:68px;
    display:flex;
    align-items:center;
  }

  .LinkWrapper .Link div:nth-child(5){
    border-bottom:none;
    cursor:default;
  }

  .LinkWrapper .Link div:nth-child(5) span{
    display:flex;
    align-items:center;
    gap:14px;
    
  }
`

const Menu = styled.div`
  width:80px;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  
  @media ${Device.desktop} {
    display: none;
  }
`

const Gap = styled.div`
  width:8px;
  height:100%;
  border:1.3px dashed #3E3E3E;
  
`

const Line = styled.div`
  width:100%;
  border:1.3px dashed #3E3E3E;
 
 @media ${Device.mobile}{
  display:none;
 }
`

const DesktopContainer = styled.div`
  display:flex;
  overflow:hidden;
  height:100vh;
  @media ${Device.mobile}{
    display:none;
  }

`



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTab, setIsTab] = useState('Projects');

  return (
    <>
      <NavbarContainer>
        <Logo>ARJ</Logo>
        <Gap />
        <PillContainer>
          <Pill><Ball />2 slot left this month</Pill>
          <div className="time">
            <p>14.58 PM</p>
          </div>
        </PillContainer>
        <Gap />
        <Menu><Image src={isOpen ? '/images/x.svg' : '/images/hamburger.png'} width={24} height={24} alt="hamburgermenu" onClick={() => setIsOpen(prev => !prev)} /></Menu>

        <NavContainer>
          <div className="navlinks">
            <p style={{ fontFamily: isTab === 'Projects' ? 'Switzer-bold' : 'Switzer-light' }} onClick={()=> setIsTab('Projects')}>Projects</p>
            <p style={{ fontFamily: isTab === 'About' ? 'Switzer-bold' : 'Switzer-light' }} onClick={()=> setIsTab('About')}>About</p>
            <p style={{ fontFamily: isTab === 'Pricing' ? 'Switzer-bold' : 'Switzer-light' }} onClick={()=> setIsTab('Pricing')}>Pricing</p>
            <p>Templates</p>
            <p>FAQ</p>
          </div>
          <div className="brands">
            <Image src='/navBrands/brand4.png' width={25.45} height={25.45} alt="brands" />
                  <Image src='/navBrands/brand5.png' width={28} height={28} alt="brands" />
                  <Image src='/navBrands/brand3.png' width={28} height={28} alt="brands" />
                  <Image src='/navBrands/brand2.png' width={22.75} height={22.75} alt="brands" />
                  <Image src='/navBrands/brand1.png' width={31.5} height={19.82} alt="brands" />
          </div>
        </NavContainer>
      </NavbarContainer>
      {isOpen === true ? (<>
        <LinkContainer>
          <div className="LinkWrapper">
            <div className="Link">
              <div>
                <p onClick={() => setIsTab('Projects')}>Projects</p>
              </div>
              <div>
                <p onClick={() => setIsTab('About')}>About</p>
              </div>
              <div>
                <p onClick={() => setIsTab('Pricing')}>Pricing</p>
              </div>
              <div>
                <p>FAQ</p>
              </div>
              <div>
                <span>
                  <Image src='/navBrands/brand4.png' width={25.45} height={25.45} alt="brands" />
                  <Image src='/navBrands/brand5.png' width={28} height={28} alt="brands" />
                  <Image src='/navBrands/brand3.png' width={28} height={28} alt="brands" />
                  <Image src='/navBrands/brand2.png' width={22.75} height={22.75} alt="brands" />
                  <Image src='/navBrands/brand1.png' width={31.5} height={19.82} alt="brands" />
                </span>
              </div>
            </div>
          </div>
        </LinkContainer>
      </>) :
        (<></>)}
<DesktopContainer>
<SideHeroContainer>
        {isTab === 'Projects' && (<>
          <ProjectsHero>
            <div>
              <p>Mobile + Website Designer for <span>AI, Stocks, Crypto and Web3 Products.</span></p>
            </div>
          </ProjectsHero>
          <CTAButton>
            <Avatar src='/images/avatar2.jpg' alt="avatar" width={28.88} height={28.88} />
            Start a Project
            <Icon src='/images/iconbtn.svg' alt="avatar" width={18} height={18} />
          </CTAButton>

          <TagsContainer>
            <TagsTitle>Mobile App Design</TagsTitle>
            <TagsTitle>UI/UX Design</TagsTitle>
            <TagsTitle>Brand Identity</TagsTitle>
            <TagsTitle>Framer Development</TagsTitle>
            <TagsTitle>Icon Design</TagsTitle>
            <TagsTitle>Product Design</TagsTitle>
          </TagsContainer>

          <div>
            <Image src='/images/brand1.png' alt="avatar" width={342} height={32} />
            <Image src='/images/brands2.png' alt="avatar" width={342} height={32} />
          </div>
          
        </>)}
        {isTab === 'About' && (<>
          <AboutHero>
            <p>I began my design journey as a freelance graphic and icon designer in 2017, and now Sr. Product Designer at 🦄  Fintech Startup.</p>
            <p>I work mostly in the finance, crypto, stocks, and web3 industries. For me, design isn’t just about looking good — it’s about creating meaningful impact for users.</p>
            <CTAButton>
              <Avatar src='/images/avatar2.jpg' alt="avatar" width={28.88} height={28.88} />
              Start a Project
              <Icon src='/images/iconbtn.svg' alt="avatar" width={18} height={18} />
            </CTAButton>
          </AboutHero>
        </>)}
        {isTab === 'Pricing' && (<>
          <PricingHero>
            <p>Simple pricing for you.</p>

            <ul>
              <li>$1.000 for landing page</li>
              <li>$2.000 for up to 7 page</li>
              <li>Start $4.000 for end to end app design</li>
            </ul>

            <CTAButton>
              <Avatar src='/images/avatar2.jpg' alt="avatar" width={28.88} height={28.88} />
              Start a Project
              <Icon src='/images/iconbtn.svg' alt="avatar" width={18} height={18} />
            </CTAButton>

            <p className="hi">or say hi to me</p>
          </PricingHero>
        </>)}

        <Line/>

        <DesktopHero>
            <p>Wall of love from people ❤️</p>
        <Card>
          <p className="text">Aan has excellent taste in visual design, his works will please your eyes at first sight.</p>

          <div className="profile">
            <Avatar src='/images/avatar1.png' alt="avatar" width={36} height={36} />
            <div className="title">
              <p>Feri Ardi</p>
              <p>Head of Design Stockbit & Bibit</p>
            </div>
          </div>
        </Card>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
        </DesktopHero>
      </SideHeroContainer>

      <DesktopContent>
          <ImageContainer>
          <Image src='/images/dummy1.png' alt="avatar" width={980} height={582} />
        </ImageContainer>
        <ImageContainer>
          <Image src='/images/dummy3.png' alt="avatar" width={980} height={582} />
        </ImageContainer>
        <ImageContainer>
          <Image src='/images/dummy2.png' alt="avatar" width={980} height={582} />
        </ImageContainer>
        <ImageContainer>
          <Image src='/images/dummy1.png' alt="avatar" width={980} height={582} />
        </ImageContainer>
      </DesktopContent>
      </DesktopContainer>

      <SideHeroMobile>
        {isTab === 'Projects' && (<>
          <ProjectsHero>
            <div>
              <p>Mobile + Website Designer for <span>AI, Stocks, Crypto and Web3 Products.</span></p>
            </div>
          </ProjectsHero>
          <CTAButton>
            <Avatar src='/images/avatar2.jpg' alt="avatar" width={28.88} height={28.88} />
            Start a Project
            <Icon src='/images/iconbtn.svg' alt="avatar" width={18} height={18} />
          </CTAButton>

          <TagsContainer>
            <TagsTitle>Mobile App Design</TagsTitle>
            <TagsTitle>UI/UX Design</TagsTitle>
            <TagsTitle>Brand Identity</TagsTitle>
            <TagsTitle>Framer Development</TagsTitle>
            <TagsTitle>Icon Design</TagsTitle>
            <TagsTitle>Product Design</TagsTitle>
          </TagsContainer>

          <div>
            <Image src='/images/brand1.png' alt="avatar" width={342} height={32} />
            <Image src='/images/brands2.png' alt="avatar" width={342} height={32} />
          </div>
          
        </>)}
        {isTab === 'About' && (<>
          <AboutHero>
            <p>I began my design journey as a freelance graphic and icon designer in 2017, and now Sr. Product Designer at 🦄  Fintech Startup.</p>
            <p>I work mostly in the finance, crypto, stocks, and web3 industries. For me, design isn’t just about looking good — it’s about creating meaningful impact for users.</p>
            <CTAButton>
              <Avatar src='/images/avatar2.jpg' alt="avatar" width={28.88} height={28.88} />
              Start a Project
              <Icon src='/images/iconbtn.svg' alt="avatar" width={18} height={18} />
            </CTAButton>
          </AboutHero>
        </>)}
        {isTab === 'Pricing' && (<>
          <PricingHero>
            <p>Simple pricing for you.</p>

            <ul>
              <li>$1.000 for landing page</li>
              <li>$2.000 for up to 7 page</li>
              <li>Start $4.000 for end to end app design</li>
            </ul>

            <CTAButton>
              <Avatar src='/images/avatar2.jpg' alt="avatar" width={28.88} height={28.88} />
              Start a Project
              <Icon src='/images/iconbtn.svg' alt="avatar" width={18} height={18} />
            </CTAButton>

            <p className="hi">or say hi to me</p>
          </PricingHero>
        </>)}

        <Line/>

        <DesktopHero>
            <p>Wall of love from people ❤️</p>
        <Card>
          <p className="text">Aan has excellent taste in visual design, his works will please your eyes at first sight.</p>

          <div className="profile">
            <Avatar src='/images/avatar1.png' alt="avatar" width={36} height={36} />
            <div className="title">
              <p>Feri Ardi</p>
              <p>Head of Design Stockbit & Bibit</p>
            </div>
          </div>
        </Card>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
        </DesktopHero>
      </SideHeroMobile>
      
      <MobileHero>
        <p>Wall of love from people ❤️</p>
        <Card>
          <p className="text">Aan has excellent taste in visual design, his works will please your eyes at first sight.</p>

          <div className="profile">
            <Avatar src='/images/avatar1.png' alt="avatar" width={36} height={36} />
            <div className="title">
              <p>Feri Ardi</p>
              <p>Head of Design Stockbit & Bibit</p>
            </div>
          </div>
        </Card>

        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
        <div className="line" />

        <ImageContainer>
          <Image src='/images/dummy1.png' alt="avatar" width={329.81} height={195.87} />
        </ImageContainer>
        <ImageContainer>
          <Image src='/images/dummy3.png' alt="avatar" width={312.8} height={222.12} />
        </ImageContainer>
        <ImageContainer>
          <Image src='/images/dummy2.png' alt="avatar" width={329.81} height={195.87} />
        </ImageContainer>
        <ImageContainer>
          <Image src='/images/dummy1.png' alt="avatar" width={329.81} height={195.87} />
        </ImageContainer>
      </MobileHero>
    </>
  );
}
