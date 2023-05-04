import style from './style.module.css';
import classNames from 'classnames';

export default function Container({ children, className, as, ...rest }) {
  const TagName = as || 'div';

  return (
    <TagName
      className={classNames(style.container, className)}
      {...rest}
    >
      {children}
    </TagName>
  );
}
