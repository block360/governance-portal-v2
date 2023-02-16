import React from 'react';
import { Box, Text, Card } from 'theme-ui';
import { markdownToHtml } from 'lib/markdown';
import { GetStaticProps } from 'next';
import { HeadComponent } from 'modules/app/components/layout/Head';

const comingSoonText = `
### Our team is working on it.
`;

export default function Inprogress(props: { content: string }): React.ReactElement {
  return (
    <Box>
      <HeadComponent title="Our team is working on it." />
      <Text sx={{ textAlign: 'center' }}>
        <h2>Coming Soon</h2>
      </Text>
      <Card sx={{ overflowY: 'auto', textAlign: 'center' }}>
        <div dangerouslySetInnerHTML={{ __html: props.content || '' }} />
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await markdownToHtml(comingSoonText);

  return {
    props: {
      content
    }
  };
};
