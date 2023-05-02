import { render, screen } from '@testing-library/react';

import { Header } from '../header';
import { NAVIGATION_LINKS } from '../navbar';

describe('<Header />', () => {
    beforeEach(() => render(<Header />));

    it('Renders the navigation links and logo', () => {
        NAVIGATION_LINKS.forEach((link) =>
            expect(screen.getByText(link.label as string)).toBeInTheDocument(),
        );

        expect(screen.getByText(/eduardo.dev/i)).toBeInTheDocument();
    });

    it('Displays the resume download button', () => {
        const resumeElement: HTMLElement = screen.getByText(/resume/i);

        expect(resumeElement).toBeInTheDocument();
        expect(resumeElement).toHaveProperty('download', "Eduardo Varela's Resume");
    });

    it('Renders the social network icons in mobile and desktop', () => {
        screen
            .getAllByTestId('social-networks')
            .forEach((group) => expect(group.children.length).toBe(3));
    });

    it('Renders the app controls (Language selector icon | Theme toggler) in mobile and desktop', () => {
        screen
            .getAllByTestId('app-controls')
            .forEach((group) => expect(group.children.length).toBe(2));
    });
});
