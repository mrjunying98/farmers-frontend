import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  /* {
    label: 'Farming Countdown',
    icon: 'TicketIcon',
    href: '',
  }, */
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.pangolin.exchange/#/swap?outputCurrency=0x7a2EfB71a36B387e35e2Cc683435727E35C1e978', // XXXXCORN
      },
      {
        label: 'Liquidity',
        href: 'https://app.pangolin.exchange/#/add/0x7a2EfB71a36B387e35e2Cc683435727E35C1e978/undefined', // XXXXCORN
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
     label: 'Dividends', // XXXXSOON
     icon: 'BondsIcon',
     href: '/dividends',
  },
  {
     label: 'NFT (Coming Soon)', // XXXXSOON
     icon: 'NftIcon',
     href: '/nft',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
	  {
		label: 'Chartex',
		href: 'https://chartex.pro/?symbol=AVAX_PANGOLIN%3ACORN%2FUSDCe.0x7a2EfB71a36B387e35e2Cc683435727E35C1e978&interval=5&theme=dark', // XXXXCORN
	  },
      {
        label: 'Pangolin',
        href: 'https://info.pangolin.exchange/token/0x7a2EfB71a36B387e35e2Cc683435727E35C1e978', // XXXXCORN
      },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x7a2EfB71a36B387e35e2Cc683435727E35C1e978-avalanche', // XXXXCORN
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/farmersonlydefi', // XXXXGITHUB
      }, 
      {
        label: 'Docs',
        href: 'https://docs.farmersonly.farm', // XXXXGITBOOK
      }, 
    ],
  },
  /* {
    label: 'Tools',
    icon: 'NftIcon',
    items: [
      {
        label: 'VFAT Tools',
        href: 'https://vfat.tools/polygon/testyswap/',
      },
      {
        label: 'PolyPup UI',
        href: 'https://ui.polypup.finance/address/0xb0fae26e5c3282a5c919bba32d168aacd83b8194',
      },
    ],
  }, */
  /* {
    label: 'Listings',
    icon: 'AuditIcon',
    items: [
      {
        label: 'RugDoctor',
        href: 'https://rugdoc.io/project/testyswap/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/testyswap-finance',
      },
      {
        label: 'Ape O\'Clock',
        href: 'https://www.apeoclock.com/launch/testyswap-farm-launch/',
      },
      {
        label: 'JaGo',
        href: 'https://jagosafer.io/testyswap',
      },
    ],
  }, */
  /* {
    label: 'Audits/Checks',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Techrate',
        href: 'https://github.com/testyswap/testy-audits/blob/main/Techrate%20Check.pdf',
      },
    ],
  }, */
]

export default config
