import classNames from "classnames";
import Link from "next/link";
import style from './style.module.css';

export default function Button({ className, href, children, ...rest }) {
  const TagName = href ? Link : 'button';

  return (
    <TagName
      className={classNames(style.button, className)}
      href={href}
      {...rest}
    >
      {children}
    </TagName>
  );
}
