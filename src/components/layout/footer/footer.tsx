import styles from './footer.module.css';

export const Footer = (): JSX.Element => (
    <footer className={styles.footer}>
        <p>
            &copy; Eduardo.dev | Full Stack Web Developer, {new Date().getFullYear()}. - All Rights
            Reserved.
        </p>
    </footer>
);
