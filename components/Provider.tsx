import { ReactNode, FC } from 'react';
interface IProviderProps {
  children: ReactNode;
}
const Provider: FC<IProviderProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Provider;
