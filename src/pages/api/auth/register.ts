import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { users } from '@/types/User';
import { createUser } from '@/utils/createUser';
import { generateToken } from '@/utils/generateToken';
import { RegisterRequestBody } from '@/types/Register';

const server = setupServer();

server.use(
  rest.post('/auth/register', async (req, res, ctx) => {
    const { email, password, username, id } = req.body as RegisterRequestBody;

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res(ctx.status(400), ctx.json({ message: 'Email already in use' }));
    }

    const user = createUser(id, email, password, username);
    const token = generateToken(user);

    return res(ctx.status(201), ctx.json({ user, token }));
  }),
);

server.listen();
