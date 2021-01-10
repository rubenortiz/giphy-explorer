import { ReactNode } from 'react';
import cn from 'classnames';

export const Layout = ({
  children,
  fullWidth = false,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={cn({
        'py-10 px-6 lg:px-8 xl:px-0': true,
        'container mx-auto': !fullWidth,
      })}
    >
      {children}
    </div>
  );
};
