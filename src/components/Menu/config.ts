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
    href: 'https://polygonscan.com/block/countdown/19070000',
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
        href: 'https://farmersonlydefi.gitbook.io/farmersonly', // XXXXGITBOOK
      }, 
    ],
  },
  /* {
    label: 'Tools',
    icon: 'NftIcon',
    items: [
      {
        label: 'VFAT Tools',
        href: 'https://vfat.tools/polygon/cornyswap/',
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
        href: 'https://rugdoc.io/project/cornyswap/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/cornyswap-finance',
      },
      {
        label: 'Ape O\'Clock',
        href: 'https://www.apeoclock.com/launch/cornyswap-farm-launch/',
      },
      {
        label: 'JaGo',
        href: 'https://jagosafer.io/cornyswap',
      },
    ],
  }, */
  /* {
    label: 'Audits/Checks',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Techrate',
        href: 'https://github.com/cornyswap/corny-audits/blob/main/Techrate%20Check.pdf',
      },
    ],
  }, */
]

export default config
