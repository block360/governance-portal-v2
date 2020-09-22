import { Flex, Text } from 'theme-ui';
import useSWR from 'swr';
import useAccountsStore from '../../stores/accounts';
import getMaker from '../../lib/maker';

export default function (props): JSX.Element {
  const account = useAccountsStore(state => state.currentAccount);
  const { data: votingWeight } = useSWR(
    account?.address ? ['/user/polling-voting-weight', account.address] : null,
    (_, address) => getMaker().then(maker => maker.service('govPolling').getMkrWeightFromChain(address))
  );

  return (
    <>
      <Flex {...props} sx={{ justifyContent: 'space-between' }}>
        <Text color="onSurface" sx={{ paddingTop: '20px', fontSize: 'small' }}>
          POLLING VOTING WEIGHT
        </Text>
      </Flex>
      <Flex>
        <Text>{votingWeight ? `${votingWeight.total.toString()}` : '--'}</Text>
      </Flex>
      <Flex sx={{ py: 2 }}>
        <Text color="onSurface">
          Your voting weight is made up of MKR in your wallet, vote proxy, and voting contract. This amount is
          applied to all polls you vote on.
        </Text>
      </Flex>
    </>
  );
}