import { Link as ThemeUILink, ThemeUIStyleObject } from 'theme-ui';

export type ExternalLinkProps = {
  href: string;
  title: string;
  children: JSX.Element;
  styles?: ThemeUIStyleObject;
};

export const ExternalLink = ({ href, title, children, styles }: ExternalLinkProps): JSX.Element => {
  return (
    <ThemeUILink
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
      sx={{
        ...styles
      }}
    >
      {children}
    </ThemeUILink>
  );
};
