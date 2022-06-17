import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router.js";
import { cloneElement, ReactElement } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);
type ActiveLinkProps = {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
} & LinkProps;

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}) => {
  const { asPath } = useRouter();
  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as))
    isActive = true;

  if (
    (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  )
    isActive = true;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        style: {
          color: isActive ? theme.colors.pink[500] : theme.colors.gray[50],
        },
      })}
    </Link>
  );
};
