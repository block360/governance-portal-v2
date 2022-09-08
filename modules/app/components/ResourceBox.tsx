import { Box, Heading, Card, Flex, Text } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';
import { InternalLink } from './InternalLink';

type ResourceType = 'general' | 'polling' | 'executive' | 'delegates';

type ResourceLink = {
  linkTitle: string;
  url: string;
};

type Resource = {
  boxTitle: string;
  links: ResourceLink[];
};

const resources: Record<ResourceType, Resource> = {
  general: {
    boxTitle: 'General Governance Resources',
    links: [
      { linkTitle: 'Maker Forum', url: '/inprogress' },
      { linkTitle: 'Governance FAQs', url: '/inprogress' },
      {
        linkTitle: 'Governance Risk Framework',
        url: '/inprogress'
      },
      { linkTitle: 'Awesome MakerDAO', url: '/inprogress' },
      {
        linkTitle: 'Governance Call Schedule',
        url: '/inprogress'
      }
    ]
  },
  polling: {
    boxTitle: 'Polling FAQs',
    links: [
      {
        linkTitle: 'How to participate in MakerDAO governance?',
        url: '/inprogress'
      },
      {
        linkTitle: 'What are Governance Polls?',
        url: '/inprogress'
      },
      {
        linkTitle: 'How is voting weight calculated?',
        url: '/inprogress'
      },
      {
        linkTitle: 'How to set up your wallet for voting?',
        url: '/inprogress'
      }
    ]
  },
  executive: {
    boxTitle: 'Executive Proposal FAQs',
    links: [
      {
        linkTitle: 'How to participate in MakerDAO governance?',
        url: '/inprogress'
      },
      {
        linkTitle: 'What are Executive Votes?',
        url: '/inprogress'
      },
      {
        linkTitle: 'How to manually verify Executive Spells',
        url: '/inprogress'
      },
      {
        linkTitle: 'How is voting weight calculated?',
        url: '/inprogress'
      },
      {
        linkTitle: 'How to set up your wallet for voting?',
        url: '/inprogress'
      }
    ]
  },
  delegates: {
    boxTitle: 'Delegation FAQs',
    links: [
      {
        linkTitle: 'What is vote delegation and how does it work in MakerDAO?',
        url: '/inprogress'
      },
      {
        linkTitle: 'What are the requirements for becoming a recognized delegate?',
        url: '/inprogress'
      },
      {
        linkTitle: "The MKR holder's guide to delegation",
        url: '/inprogress'
      },
      {
        linkTitle: "MKR token holder's delegation agreement",
        url: '/inprogress'
      },
      {
        linkTitle: 'Recognized delegate code of conduct',
        url: '/inprogress'
      }
    ]
  }
};

export default function ResourceBox({
  type,
  className
}: {
  type: ResourceType;
  className?: string;
}): JSX.Element {
  return (
    <Box className={className}>
      <Heading mt={3} mb={2} as="h3" variant="microHeading">
        {resources[type].boxTitle}
      </Heading>
      <Card variant="compact">
        {resources[type].links.map(resource => (
          <Flex key={resource.linkTitle} sx={{ alignItems: 'center', ':not(:last-of-type)': { mb: 3 } }}>
            <InternalLink title="" href={resource.url} target="_blank">
              <Text sx={{ color: 'accentBlue', ':hover': { color: 'blueLinkHover' } }}>
                {resource.linkTitle}
                <Icon ml={2} name="arrowTopRight" size={2} />
              </Text>
            </InternalLink>
          </Flex>
        ))}
      </Card>
    </Box>
  );
}
