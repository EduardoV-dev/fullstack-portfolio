interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => <div>Hello world {children}</div>;
