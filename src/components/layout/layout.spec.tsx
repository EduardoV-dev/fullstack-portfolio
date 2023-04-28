import { render, screen } from '@testing-library/react';

import { Layout } from './layout';

describe('<Layout />', () => {
    it('Renders correctly', () => {
        render(
            <Layout>
                <h1>Hello world</h1>
            </Layout>,
        );

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello world');
    });
});
