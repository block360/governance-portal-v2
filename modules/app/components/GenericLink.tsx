import { ExternalLink } from './ExternalLink';
import { InternalLink } from './InternalLink';

export const GenericLink: React.FC<{
  url: string;
  title: string;
}> = ({ url, title, children }) => {
  if (url.includes('http')) {
    return (
      <ExternalLink href={url} title={title}>
        <> {children}</>
      </ExternalLink>
    );
  } else {
    return (
      <InternalLink href={url} title={title}>
        <> {children}</>
      </InternalLink>
    );
  }
};
