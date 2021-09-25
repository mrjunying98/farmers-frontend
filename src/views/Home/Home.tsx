import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
// import EarnAPRCard from './components/EarnAPRCard'
import StakeAssetCard from './components/StakeAssetCard'
import CakeContracts from './components/CakeContracts'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import Timer from './components/Timer'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'


const RDBadge = styled.a`
position: fixed;
right: 0px;
top: 7px;
`

const RDLiq = styled.a`
position: fixed;
right: 15px;
top: 110px;
`

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  position: relative;
  z-index:2;
  border-radius: 30px;
  
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
    background-image: url('/images/egg/3.png');
    background-repeat: no-repeat;
    background-position: top center;    
    border-radius: 30px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    
    padding-top: 0;
    position: relative;
    z-index: 2;
    height: 120px;

    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 1;
      background-image: url('/images/egg/vaults-hero.png');
    background-position: center;
    background-repeat: no-repeat;
    }
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (

<>
  <RDBadge  target="_blank" rel="noreferrer" href="https://rugdoc.io/project/farmersonly-2/"><img width={250} src="https://rugdoc.io/assets/2021/06/rugdoc-review-badge-with-glow.png" alt="rugdoc badge" /></RDBadge>
  <RDLiq  target="_blank" rel="noreferrer" href="https://rugdoc.io/project/farmersonly-2/"><img width={217} src="https://farmersonly.farm/images/egg/RugDoc-LiqLock-Badge.png" alt="rugdoc liq locked" /></RDLiq>

    <Page>
         <Heading as="h1" size="lg" mb="12px" color="#FFFFFF" >{
            TranslateString(999, 'Yield Farming starts on Sep 28, 8:00PM UTC')} {/* 'Yield Farming starts on Sep 28, 8:00PM UTC' */}
        </Heading>
        <Text color="#FFFFFF" >{TranslateString(999, 'But you can already stake your tokens! (start date could be slightly modified to follow AAVE launch on AVAX)')} {/* 'But you can already stake your tokens! (Yield Farming start could be slightly modified due to AAVE launch on AVAX)' */}
        </Text>
          <Timer />
        {/* <Heading as="h1" size="lg" mb="12px" color="#fb3321" >
          {TranslateString(999, 'Yield Farming started!')}
        </Heading>
        <Text color="#FFFFFF" >{TranslateString(999, 'On Sep 28, 8:00PM UTC')}
        </Text> */}
      <Hero>
        {/* <Heading as="h1" size="xxl" mb="15px" color="#FFFFFF" >
          {TranslateString(576, 'FarmersOnly Finance')}
        </Heading>
        <Text color="#FFFFFF">{TranslateString(999, 'Avalanche based AMM and Yield Farm protocol. Non-farmers just don't get it!™️')}</Text> */}
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats/>
          <TotalValueLockedCard />
          <StakeAssetCard />
          <CakeContracts />
        </Cards>
      </div>
    </Page>
  </>
  )
}

export default Home
