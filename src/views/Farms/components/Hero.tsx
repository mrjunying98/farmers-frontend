import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'
import Timer from '../../Home/components/Timer'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => "#FFFFFF"};
  margin-bottom: 15px;
`

const Blurb = styled(Text)`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
`

let StyledHero


const Hero = ({tokenMode,dividendsMode}) => {
  const TranslateString = useI18n()
  if (!dividendsMode) {

    StyledHero = styled.div`

  background-image: url('/images/egg/banner-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 750px;
  padding-bottom: 277px;
  padding-top: 32px;
  margin-bottom: -262px;
`

  return (
    <StyledHero>
      <Container>
        <Heading as="h1" size="lg" mb="12px" color="#FFFFFF" >{
            TranslateString(999, 'CORN token initial liquidity will be provided on Sep 24, 9:00PM UTC')} {/* 'Yield Farming starts on Sep 28, 8:00PM UTC' */}
        </Heading>
        <Text color="#FFFFFF" >{TranslateString(999, 'Then farming will start on Sep 28, 8:00PM UTC. So for now, just get ready to buy CORN!')} {/* 'But you can already stake your tokens!' */}
        </Text>
      <Timer />
        {/* <Heading as="h1" size="lg" mb="12px" color="#fb3321" >
          {TranslateString(999, 'Yield Farming started!')}
        </Heading>
        <Text color="#FFFFFF" >{TranslateString(999, 'On Sep 28, 8:00PM UTC')}
        </Text> */}
        <Title color="#FFFFFF" style={{ textAlign: 'center' }}>{
          !tokenMode ?
            TranslateString(10002, 'Stake tokens to earn CORN')
            :
            TranslateString(999, 'Stake LP tokens to earn CORN')
          
        }</Title>
        <Blurb color="#FFFFFF" style={{ textAlign: 'center' }}>{TranslateString(10000, 'Deposit fees will be used to buyback CORN')}</Blurb>
      </Container>
    </StyledHero>
  )
}

StyledHero = styled.div`
  background-image: url('/images/egg/banner-bg1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 630px;
  padding-bottom: 47px;
  padding-top: 44px;
  margin-bottom: -32px;
`

  return (
    <StyledHero>
      <Container>
        {/* <Heading as="h1" size="lg" mb="12px" color="#fb3321" >
          {TranslateString(999, 'Yield Farming started!')}
        </Heading>
        <Heading as="h1" size="sm" mb="27px" color="#fb3321" >
          {TranslateString(999, 'At block #19070000')}
        </Heading> */}
        <Title color="#FFFFFF" style={{ textAlign: 'center' }}>{
            TranslateString(999, 'CORN Dividends')
          
        }</Title>
        <Blurb color="#FFFFFF" style={{ textAlign: 'center' }}>{TranslateString(999, 'Stake CORN to earn new tokens')}</Blurb>
      </Container>
    </StyledHero>
  )
}


export default Hero
