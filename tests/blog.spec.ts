import { render, screen } from '@utils/render';
import { getPage } from 'next-page-tester';

describe('blog', () => {
  describe('post', () => {
    it("shows blog post's contents", async () => {
      const { page } = await getPage({
        route: '/blog/test-one',
      });

      render(page);

      expect(screen.getByText(/Test Blog Post One/i)).toBeInTheDocument();
      expect(screen.getByText(/Mota suum quid/i)).toBeInTheDocument();
      expect((screen.getByAltText(/cozy cabin/i) as HTMLImageElement).src).toMatchInlineSnapshot(
        `"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"`,
      );
    });
  });
});
