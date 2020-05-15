import Link from 'next/link';
import Router from 'next/router';
import { Flex, Heading, NavLink, Button } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';

import { getNetwork } from '../lib/maker';
import AccountSelect from './AccountSelect';

export default function Header() {
  const network = getNetwork();
  const otherNetwork = network === 'mainnet' ? 'kovan' : 'mainnet';

  return (
    <Flex as="header" variant="styles.header" my={3}>
      <Link href={{ pathname: '/', query: { network } }}>
        <Heading as="h1" sx={{ cursor: 'pointer' }}>
          <Icon name="maker" size="4" sx={{ cursor: 'pointer' }} />
        </Heading>
      </Link>

      <Flex ml="auto" sx={{ alignItems: 'center' }}>
        <Button
          variant="outline"
          onClick={() => {
            Router.push({
              pathname: Router.router.pathname,
              query: { network: otherNetwork }
            });
          }}
        >
          Swith to {otherNetwork}
        </Button>
        <Link href={{ pathname: '/polling', query: { network } }}>
          <NavLink p={2}>Polling</NavLink>
        </Link>
        <Link href={{ pathname: '/executive', query: { network } }}>
          <NavLink p={2}>Executive</NavLink>
        </Link>
        <AccountSelect />
      </Flex>
    </Flex>
  );
}
