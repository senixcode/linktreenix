import React from 'react'
interface Props {
  href: string
  className?: string
  children: string |  React.ReactNode
}
export const Link = (props: Props) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className={props.className}
  >{props.children}</a>
)
