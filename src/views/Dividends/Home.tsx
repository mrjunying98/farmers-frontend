import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FlexLayout from 'components/layout/Flex'
import { Route, useRouteMatch } from 'react-router-dom'

import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import Timer from './components/Timer'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import Hero from '../Farms/components/Hero'


/* const Hero = styled.div`
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
` */



const Cards = styled(BaseLayout)`
display: flex;
  justify-content: center;
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

const Home: React.FC = (farmsProps) => {
  const TranslateString = useI18n()


  return (
    <>
    <Hero tokenMode={false} dividendsMode />
    <Page>
      {/* <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {
          tokenMode ?
            TranslateString(10002, 'Stake tokens to earn CORN')
            :
          TranslateString(320, 'Stake LP tokens to earn CORN')
        }
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(10000, 'Deposit Fee will be used to buyback CORN')}
      </Heading> */}
      {/* <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly}/> */}
      <div>
        {/* <Divider /> */}
        
        <Cards>
            
          
          <FarmStakingCard />

         
        </Cards>
        </div>
          {/* <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route> */}
        
      {/* <Image src="/images/egg/LogoTextNewDark.png" alt="illustration" width={1218} height={198} responsive /> */}
      </Page>
      </>
  )
}



export default Home