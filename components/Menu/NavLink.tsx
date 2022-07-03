import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

interface NavLinkProps extends LinkProps {
  children?: ReactNode;
}

export const NavLink = ({ href, children, ...rest }: NavLinkProps) => {
  const router = useRouter();
  const isSelected =
    href === router.pathname || router.pathname.startsWith(`${href}/`);

  return (
    <li className="px-5 py-2">
      <Link href={href} {...rest}>
        <a
          className={clsx(
            "underlined text-bodyText opacity-80 focus:outline-none block whitespace-nowrap text-lg font-medium hover:opacity-100",
            {
              "active text-blue-100": isSelected,
              "text-secondary": !isSelected,
            }
          )}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};
