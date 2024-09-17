import { FC, ReactNode } from "react";

type QRowProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

const QRow: FC<QRowProps> = ({ sidebar, children }) => {
  return (
    <div className="flex w-full px-4 lg:px-8">
      <div className="hidden lg:block lg:basis-[220px]">{sidebar}</div>
      <div className="pl-0 lg:pl-8 flex-1">{children}</div>
    </div>
  );
};

export default QRow;