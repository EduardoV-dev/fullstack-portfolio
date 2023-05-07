import clsx from 'clsx';
import React from 'react';
import ReactDOM from 'react-dom';

import { ClientOnly } from '../client-only';

import styles from './modal.module.css';

export interface Props {
    children: React.ReactNode;
    className?: string;
    renderFooter?: ({ close }: { close: () => void }) => React.ReactElement;
    triggerButton: React.ReactElement;
}

const ModalComponent = ({
    children,
    className = '',
    renderFooter,
    triggerButton,
}: Props): JSX.Element | null => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const open = (): void => setIsOpen(true);
    const close = (): void => setIsOpen(false);

    React.useEffect(() => {
        const closeOnEscapeKey = (event: KeyboardEvent) => event.key === 'Escape' && close();

        if (isOpen) window.addEventListener('keydown', closeOnEscapeKey);
        else window.removeEventListener('keydown', closeOnEscapeKey);

        return () => window.removeEventListener('keydown', closeOnEscapeKey);
    }, [isOpen]);

    /* === React Render === */

    const portalContainer: HTMLElement | null = document.getElementById('portal') || null;
    if (!portalContainer) return null;

    const modalClasses: string = clsx(styles.modal, className, {
        [styles.displayed]: isOpen,
    });

    const backdropClasses: string = clsx(styles.backdrop, {
        [styles.displayed]: isOpen,
    });

    return (
        <>
            {React.cloneElement(triggerButton, { onClick: open })}
            {ReactDOM.createPortal(
                <>
                    <section className={modalClasses}>
                        {children}
                        {renderFooter && (
                            <footer className={styles.modal__footer}>
                                {renderFooter({ close })}
                            </footer>
                        )}
                    </section>
                    <div aria-hidden className={backdropClasses} onClick={close} role="button" />
                </>,
                portalContainer,
            )}
        </>
    );
};

/**
 * Modal component that will render a modal in the middle of the page, will be rendered inside a portal container, ssr is skipped with this component since Modals are Client Side Rendered Components.
 */
export const Modal = (props: Props): JSX.Element => (
    <ClientOnly>
        <ModalComponent {...props} />
    </ClientOnly>
);
