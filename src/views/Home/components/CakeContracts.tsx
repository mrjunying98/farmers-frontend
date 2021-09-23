import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeContracts = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeContracts = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let testPerSecond = 0;
  if(farms && farms[0] && farms[0].testPerSecond){
    testPerSecond = new BigNumber(farms[0].testPerSecond).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeContracts>
      <CardBody>
        <Heading size="xl" mb="24px" color="#FFFFFF">
          {TranslateString(999, 'Contracts')}
        </Heading>
        <Row>
          <Text fontSize="14px" color="#FFFFFF">{TranslateString(999, 'CORN Token')}</Text>
          <a target="_blank" rel="noreferrer noopener" href="https://cchain.explorer.avax.network/address/0x70B907f3F7231bE122100dac51C1995e6804E346/contracts" color="#fb2141">0x62BA727e2449EE3BE0573b4b102D7090c5977BFB</a> {/* XXXXCORN */}
        </Row>
        <Row>
          <Text fontSize="14px" color="#FFFFFF">{TranslateString(999, 'MasterChef')}</Text>
        <a target="_blank" rel="noreferrer noopener" href="https://cchain.explorer.avax.network/address/0x70B907f3F7231bE122100dac51C1995e6804E346/contracts" color="#fb2141">0x62BA727e2449EE3BE0573b4b102D7090c5977BFB</a> {/* XXXXMASTERCHEF */}
        </Row>
        <Row>
          <Text fontSize="14px" color="#FFFFFF">{TranslateString(999, 'Timelock')}</Text>
        <a target="_blank" rel="noreferrer noopener" href="https://cchain.explorer.avax.network/address/0x70B907f3F7231bE122100dac51C1995e6804E346/contracts" color="#fb2141">0x62BA727e2449EE3BE0573b4b102D7090c5977BFB</a> {/* XXXXTIMELOCK */}
        </Row>
      </CardBody>
    </StyledCakeContracts>
  )
}

export default CakeContracts
