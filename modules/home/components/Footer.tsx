import { Flex, IconButton, Text, useColorMode } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';
import { ExternalLink } from 'modules/app/components/ExternalLink';
import React from 'react';
import { translate } from '@makerdao/i18n-helper';
import { useBreakpointIndex } from '@theme-ui/match-media';
import { InternalLink } from 'modules/app/components/InternalLink';

const ContactSection = ({ heading, logos, icon }) => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 2 }}>
      <Text as="h4" sx={{ fontSize: 3, fontWeight: 'semiBold' }}>
        {heading}
      </Text>
      {/* <Text sx={{ fontSize: 3, fontWeight: 'semiBold', color: 'footerText' }}>{title}</Text> */}
      <Flex
        sx={{
          alignItems: 'center',
          '& svg': {
            width: 20,
            height: 20,
            transition: 'opacity 0.2s',
            cursor: 'pointer',
            opacity: 0.8,
            marginRight: 24,
            ':hover': {
              opacity: 1
            }
          }
        }}
      >
        {logos.map(({ title, url, icon, styles }) => (
          <ExternalLink key={title} styles={{ color: 'text', ...styles }} href={url} title={title}>
            <Icon name={icon} />
          </ExternalLink>
        ))}
      </Flex>
      <Icon name={icon} size={'100px'} sx={{ my: [0, 0, 4] }} />
    </Flex>
  );
};

export default function Footer({ locale = 'en' }: { locale?: string }): React.ReactElement {
  const bpi = useBreakpointIndex();
  const [mode] = useColorMode();

  const t = text => translate(text, locale);

  const links = [
    {
      header: t('Governance'),
      list: [
        {
          url: '/inprogress',
          title: t('Forum')
        },
        {
          url: '/inprogress',
          title: t('Operational Manual')
        },
        {
          url: '/inprogress',
          title: t('Governance FAQs')
        },
        {
          url: '/inprogress',
          title: t('Gov Tracking Sheet')
        },
        {
          url: '/inprogress',
          title: t('Monthly Gov Cycle')
        },
        {
          url: '/inprogress',
          title: t('Weekly Gov Cycle')
        }
      ]
    },
    {
      header: t('Products & Tools'),
      list: [
        // @remove product and tools link
        {
          url: '/inprogress',
          title: t('Service Status')
        },

        {
          url: 'https://auctions.makerdao.network/',
          title: t('Auctions Dashboard')
        },
        // {
        //   url: 'https://migrate.makerdao.com/',
        //   title: t('Migrate Dashboard')
        // },
        // {
        //   url: 'https://makerburn.com/',
        //   title: t('MakerBurn')
        // },
        {
          url: '/inprogress',
          title: t('GSUc Stats')
        },
        {
          url: '/terms',
          title: t('Terms')
        }
      ]
    },
    {
      header: t('Developer'),
      list: [
        {
          url: '/inprogress',
          title: t('Whitepaper')
        },
        {
          url: '/inprogress',
          title: t('Technical Docs')
        },
        {
          url: 'https://vote.makerdao.com/api-docs',
          title: t('API Docs')
        },
        {
          url: '/inprogress',
          title: t('Developer Guides')
        },
        {
          url: '/inprogress',
          title: t('Brand Assets')
        },
        {
          url: 'https://gsucoin.app/oracles',
          title: t('Oracle Feeds')
        }
      ]
    }
  ];

  const logos = {
    makerdao: [
      { title: 'Discord', url: 'https://discord.com/invite/cm3tmM37W3', icon: 'discord' },
      { title: 'Twitter', url: 'https://twitter.com/GSUcoin', icon: 'twitter' },
      // { title: 'YouTube', url: 'https://www.youtube.com/MakerDAO', icon: 'youtube' },
      { title: 'GitHub', url: 'https://github.com/gsu-protocol/governance-portal-v2', icon: 'github' }
    ]
    // makerdux: [
    //   { title: 'Discord', url: 'https://discord.com/invite/cm3tmM37W3', icon: 'discord' },
    //   { title: 'Twitter', url: 'https://twitter.com/GSUcoin', icon: 'twitter' },
    //   { title: 'GitHub', url: 'https://github.com/gsu-protocol/governance-portal-v2', icon: 'github' }
    //   // { title: 'Canny', url: 'https://makergovernance.canny.io/', icon: 'canny' },
    //   // { title: 'Immunifi', url: 'https://immunefi.com/bounty/makerdao/', icon: 'immunifi' }
    // ]
  };

  const mobile = bpi <= 1;
  return (
    <div sx={{ position: 'relative', mt: 4 }}>
      <div
        sx={{
          width: '100vw',
          height: '100%',
          left: '50%',

          zIndex: -1,
          position: 'absolute',
          transform: 'translateX(-50%)',
          backgroundImage:
            mode === 'dark'
              ? bpi <= 2
                ? 'url(/assets/bg_dark_medium.jpeg)'
                : 'url(/assets/bg_footer_dark.jpeg)'
              : bpi <= 2
              ? 'url(/assets/bg_medium.jpeg)'
              : 'url(/assets/bg_footer_light.jpeg)',
          backgroundSize: ['1500px', '1500px', '1500px', '100% 600px', '100% 400px'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: ['-750px 100%', '-750px 100%', '-750px 100%', 'bottom', 'bottom']
        }}
      />
      <Flex
        as="footer"
        sx={{
          justifyContent: 'space-between',
          gap: 4,
          width: '100%',
          flexDirection: mobile ? 'column' : 'row',
          pt: 4,
          pb: 5
        }}
      >
        <ContactSection heading="Official Community Channels" icon="maker" logos={logos.makerdao} />
        <Flex
          sx={{
            justifyContent: 'space-between',
            gap: [4, 2, 5],
            width: ['100%', '100%', 'initial'],
            flexWrap: ['wrap', 'nowrap']
          }}
        >
          {links.map(group => {
            return (
              <Flex key={group.header} sx={{ flexDirection: 'column', gap: 2, minWidth: ['45%', 'initial'] }}>
                <Text as="h4" sx={{ fontSize: 3, fontWeight: 'semiBold' }}>
                  {group.header}
                </Text>
                {group.list.map(({ url, title }) => {
                  if (url.includes('http')) {
                    return (
                      <ExternalLink key={title} href={url} title={title} styles={{ fontSize: [1, 2] }}>
                        <Text sx={{ fontSize: 3, color: 'footerText' }}>{title}</Text>
                      </ExternalLink>
                    );
                  } else {
                    return (
                      <InternalLink key={title} href={url} title={title} styles={{ fontSize: [1, 2] }}>
                        <Text sx={{ fontSize: 3, color: 'footerText' }}>{title}</Text>
                      </InternalLink>
                    );
                  }
                })}
              </Flex>
            );
          })}
        </Flex>
        {/* <ContactSection heading="Development & UX Channels" icon="none" logos={logos.makerdux} /> */}
      </Flex>
    </div>
  );
}
