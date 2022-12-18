import { render, screen, waitFor } from '@utils/render';
import ContactForm from '.';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Contact form', () => {
  it('shows error message', async () => {
    server.use(
      rest.post('https://formspree.io/mdokobow', (req, res, ctx) => {
        res(ctx.status(400), ctx.json({}));
      }),
    );

    render(<ContactForm />);

    userEvent.type(screen.getByLabelText(/email address/i), 'email@address.com');
    userEvent.type(screen.getByLabelText(/message/i), 'my message');
    userEvent.click(screen.getByText(/send/i));

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });
  it('shows completed message and sends data', async () => {
    const api = jest.fn((req, res, ctx) => res(ctx.json({})));
    server.use(rest.post('https://formspree.io/mdokobow', api));

    render(<ContactForm />);

    userEvent.type(screen.getByLabelText(/email address/i), 'email@address.com');
    userEvent.type(screen.getByLabelText(/message/i), 'my message');
    userEvent.click(screen.getByText(/send/i));

    await waitFor(() => screen.getByText(/sent/i));

    expect(api).toHaveBeenCalled();
    expect(api.mock.calls[0][0].body).toMatchInlineSnapshot(
      `"{\\"email\\":\\"email@address.com\\",\\"message\\":\\"my message\\"}"`,
    );
    expect(screen.getByText(/sent/i)).toBeDisabled();
    expect(screen.getByLabelText(/email address/i)).toBeDisabled();
    expect(screen.getByLabelText(/message/i)).toBeDisabled();
  });
});
