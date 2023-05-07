import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Modal } from '@/components/modal';

import CheckIcon from '../../assets/svg/check.svg';
import GlobeIcon from '../../assets/svg/globe.svg';
import SpainFlagIcon from '../../assets/svg/spain-flag.svg';
import USAFlagIcon from '../../assets/svg/usa-flag.svg';

import styles from './language-selector.module.css';

interface Language {
    label: string;
    icon: React.ReactNode;
    code: string;
}

const Languages: Language[] = [
    {
        label: 'Spanish',
        icon: <SpainFlagIcon />,
        code: 'es',
    },
    {
        label: 'English',
        icon: <USAFlagIcon />,
        code: 'en',
    },
];

export const LanguageSelector = (): JSX.Element => {
    const router = useRouter();

    const getLanguageItemClasses = (langCode: string): string =>
        clsx(styles['language-item'], {
            [styles.active]: langCode === router.locale,
        });

    const SupportedLanguageItems: JSX.Element[] = Languages.map((lang) => (
        <Link
            className={getLanguageItemClasses(lang.code)}
            key={lang.code}
            href={router.asPath}
            locale={lang.code}
        >
            <div className={styles['language-item__info-container']}>
                {lang.icon}
                {lang.label}
            </div>

            <CheckIcon className={styles['language-item__check-icon']} />
        </Link>
    ));

    return (
        <Modal
            renderFooter={({ close }) => (
                <button className="btn btn-primary" onClick={close} type="button">
                    Done
                </button>
            )}
            triggerButton={
                <button type="button" className={styles['modal__language-selector']}>
                    <GlobeIcon className={clsx('icon-size')} />
                </button>
            }
        >
            <p className={styles.modal__title}>Choose a language</p>
            <ul className={styles['languages-list']}>{SupportedLanguageItems}</ul>
        </Modal>
    );
};
