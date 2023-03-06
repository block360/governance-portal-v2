import { ExternalLink, ExternalLinkProps } from './ExternalLink';
import { InternalLink, InternalLinkProps } from './InternalLink';

export function getIsInternalLink(href: string) {
  return href.startsWith('/') || href.startsWith('#');
}

export function CustomLink({ title, href, children, ...rest }: ExternalLinkProps & InternalLinkProps) {
  const isInternalLink = href && getIsInternalLink(href);

  if (isInternalLink) {
    return (
      <InternalLink {...{ href, ...rest }} title={title || ''}>
        {children}
      </InternalLink>
    );
  }

  return (
    <ExternalLink {...{ href, ...rest }} title={title || ''}>
      {children || <></>}
    </ExternalLink>
  );
}
