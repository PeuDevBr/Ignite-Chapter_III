import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps{
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink( { children, activeClassName, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter() // mostra o caminho da página

  const className = asPath === rest.href
  ? activeClassName
  : ''
  
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
      {/* clona o elmento e insere a classe dentro dele */}
    </Link>
  )
}