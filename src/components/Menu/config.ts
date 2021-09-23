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
        label: 'Exchange (NO LIQ YET)',
        href: 'https://app.pangolin.exchange/#/swap?outputCurrency=0xFcA54c64BC44ce2E72d621B6Ed34981e53B66CaE', // XXXXCORN
      },
      {
        label: 'Liquidity',
        href: 'https://app.pangolin.exchange/#/add/0xFcA54c64BC44ce2E72d621B6Ed34981e53B66CaE/undefined', // XXXXCORN
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
     label: 'NFTs (Coming Soon)', // XXXXSOON
     icon: 'NftIcon',
     href: '/nft',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
	   {
		  label: 'Chartex (NO LIQ YET)',
		  href: 'https://chartex.pro/?symbol=AVAX_PANGOLIN%3ACORN%2FUSDCe.0xFcA54c64BC44ce2E72d621B6Ed34981e53B66CaE&interval=5&theme=dark', // XXXXCORN
	   },
      {
        label: 'Pangolin (NO LIQ YET)',
        href: 'https://info.pangolin.exchange/token/0xFcA54c64BC44ce2E72d621B6Ed34981e53B66CaE', // XXXXCORN
      },
      {
        label: 'DexGuru (NO LIQ YET)',
        href: 'https://dex.guru/token/0xFcA54c64BC44ce2E72d621B6Ed34981e53B66CaE-avalanche', // XXXXCORN
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
        href: 'https://vfat.tools/polygon/cornyswap/',
      },
      {
        label: 'PolyPup UI',
        href: 'https://ui.polypup.finance/address/',
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
  {
     label: 'Contact Dev', // XXXXSOON
     icon: 'TelegramIcon',
     href: 'https://t.me/FarmersOnlyDev',
  },
]

export default config
