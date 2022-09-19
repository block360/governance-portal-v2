import { InternalLink } from 'modules/app/components/InternalLink';
import { HeadComponent } from 'modules/app/components/layout/Head';
import { Card, Flex, Heading, Text } from 'theme-ui';

export default function InProgress(props: { content: string }): JSX.Element {
  return (
    <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <HeadComponent title="Coming Soon" />

      <Heading as="h2" sx={{ textAlign: 'center' }}>
        Team is working on it
      </Heading>
      <h3 sx={{ textAlign: 'center', fontStyle: 'italic', mt: 1, mb: 3 }}>Coming Soon.</h3>
      <InternalLink title="Go home" href="/">
        <Text m="auto">Go home</Text>
      </InternalLink>
      <Card sx={{ overflowY: 'auto' }}>
        <div dangerouslySetInnerHTML={{ __html: props.content || '' }} />
      </Card>
    </Flex>
  );
}
