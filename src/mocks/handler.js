import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.REACT_APP_DOMAIN}/posts`, (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 2,
          title: 'titre 2',
        },
        {
          id: 1,
          title: 'titre 1',
        },
        {
          id: 3,
          title: 'titre 3',
        },
      ])
    )
  ),
];
