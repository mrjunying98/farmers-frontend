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

const StyledHero = styled.div`
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 0px;
  padding-top: 32px;
  margin-bottom: 0px;
`
const Hero = ({tokenMode}) => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        {/* <Heading as="h1" size="lg" mb="12px" color="#FFFFFF" >
          {TranslateString(999, 'Yield Farming starts at block #19070000')}
        </Heading>
        <Text color="#FFFFFF" >{TranslateString(999, 'But you can already stake your tokens!')}
        </Text>
      <Timer /> */}
        <Heading as="h1" size="lg" mb="12px" color="#fb3321" >
          {TranslateString(999, 'Yield Farming started!')}
        </Heading>
        <Heading as="h1" size="sm" mb="27px" color="#fb3321" >
          {TranslateString(999, 'At block #19070000')}
        </Heading>
        <Title color="#FFFFFF" style={{ textAlign: 'center' }}>{
          tokenMode ?
            TranslateString(10002, 'Stake tokens to earn CORN')
            :
          TranslateString(320, 'Stake LP tokens to earn CORN')
        }</Title>
        <Blurb color="#FFFFFF" style={{ textAlign: 'center' }}>{TranslateString(10000, 'Deposit fees will be used accordingly with the community')}</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
