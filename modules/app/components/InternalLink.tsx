import Link from 'next/link';
import { Link as ThemeUILink, ThemeUIStyleObject, LinkProps } from 'theme-ui';

type Props = {
  children: JSX.Element;
  href: string;
  title: string;
  styles?: ThemeUIStyleObject;
  queryParams?: Record<string, string>;
  hash?: string;
  scroll?: boolean;
} & LinkProps;

export const InternalLink = ({
  children,
  title,
  href,
  styles,
  queryParams,
  hash,
  scroll = true,
  ...rest
}: Props): JSX.Element => (
  <Link href={{ pathname: href, query: queryParams, hash }} scroll={scroll} passHref>
    <ThemeUILink variant="nostyle" title={title} sx={{ color: 'accentBlue', ...styles }} {...rest}>
      {children}
    </ThemeUILink>
  </Link>
);
