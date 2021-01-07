import { render, screen } from '@utils/render';
import { getPage } from 'next-page-tester';

describe('App', () => {
  it('shows home page', async () => {
    const { page } = await getPage({
      route: '/',
    });

    render(page);

    expect(screen.getByText(/i'm kyle pfromer/i)).toBeInTheDocument();
  });
});
