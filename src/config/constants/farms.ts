import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

   {
    pid: 11,
    risk: 5,
    lpSymbol: 'CORN-USDC LP',
    otherExchange: 'Pangolin',
    decimal: 18,
    lpAddresses: {
      43114: '0xffd8995E1016780AF85CfE5c29Cb8bE77A64BD15' // XXXXCORN-USDC
    },
    tokenSymbol: 'CORN',
    tokenAddresses: {
      43114: '0x7a2EfB71a36B387e35e2Cc683435727E35C1e978' // XXXXCORN
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 12,
    risk: 5,
    lpSymbol: 'CORN-WMATIC LP',
    otherExchange: 'Pangolin',
    decimal: 18,
    lpAddresses: {
      43114: '0x3a9D40e4341E341140dD37b700Ac75481665ED23' // XXXXCORN-WMATIC
    },
    tokenSymbol: 'CORN',
    tokenAddresses: {
      43114: '0x7a2EfB71a36B387e35e2Cc683435727E35C1e978' // XXXXCORN
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },

  {
    pid: 13,
    risk: 5,
    lpSymbol: 'CORN-WETH LP',
    otherExchange: 'Pangolin',
    decimal: 18,
    lpAddresses: {
      43114: '0x313Ef998e22151F4c041F8Baf787D4647aADE948' // XXXXCORN-WETH
    },
    tokenSymbol: 'CORN',
    tokenAddresses: {
      43114: '0x7a2EfB71a36B387e35e2Cc683435727E35C1e978' // XXXXCORN
    },
    quoteTokenSymbol: QuoteToken.WETH,
    quoteTokenAdresses: contracts.weth,
  },

  {
    pid: 8,
    risk: 5,
    lpSymbol: 'WMATIC-USDC LP',
    otherExchange: 'Pangolin',
    decimal: 18,
    lpAddresses: {
      43114: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      43114: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 9,
    risk: 5,
    lpSymbol: 'WETH-USDC LP',
    otherExchange: 'Pangolin',
    decimal: 18,
    lpAddresses: {
      43114: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      43114: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CORN',
    decimal: 18,
    lpAddresses: {
      43114: '0xffd8995E1016780AF85CfE5c29Cb8bE77A64BD15' // XXXXCORN-USDC
    },
    tokenSymbol: 'CORN',
    tokenAddresses: {
      43114: '0x7a2EfB71a36B387e35e2Cc683435727E35C1e978' // XXXXCORN
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 0,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      43114: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      43114: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }, 

  {
    pid: 1,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AAVE',
    decimal: 18,
    lpAddresses: {
      43114: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      43114: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    decimal: 18,
    lpAddresses: {
      43114: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      43114: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  { 
    pid: 3,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    decimal: 8,
    lpAddresses: {
      43114: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      43114: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }, 

  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'QUICK',
    decimal: 18,
    lpAddresses: {
      43114: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      43114: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }, 

  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    decimal: 6,
    lpAddresses: {
      43114: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43114: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 6,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    decimal: 18,
    lpAddresses: {
      43114: '0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd'
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43114: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 7,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'PolyDoge',
    decimal: 18,
    lpAddresses: {
      43114: '0x7b3E67E63906d8576466c2f48158A30be0a9e36c'
    },
    tokenSymbol: 'PolyDoge',
    tokenAddresses: {
      43114: '0x8A953CfE442c5E8855cc6c61b1293FA648BAE472'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }, 

  /* {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'VERT',
    decimal: 18,
    lpAddresses: {
      43114: '0x668269d6E5D2c2dE31D132Ac218044211643622B'
    },
    tokenSymbol: 'VERT',
    tokenAddresses: {
      43114: '0x72572ccf5208b59f4bcc14e6653d8c31cd1fc5a0'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }, */

]

export default farms
