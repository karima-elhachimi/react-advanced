import nock from 'nock';
import { getUserById } from './userApi';

describe('User api', () => {
  describe('getUserById', () => {
    test('it returns the data', async () => {
      const resource = {
        isFamily: true,
        gender: 'M',
        lastName: 'Simpson',
        firstName: 'Bart',
        id: 1,
      };

      nock('http://localhost:3000')
        .get('/users/1')
        .reply(200, resource);

      const user = await getUserById(resource.id);

      expect(user).toStrictEqual(resource);
    });

    test('it maps the birthDate as a date', async () => {
      const resource = {
        isFamily: true,
        birthDate: '2011-08-13T22:00:00.000Z',
        gender: 'F',
        lastName: 'Simpson',
        firstName: 'Lisa',
        id: 2,
      };

      nock('http://localhost:3000')
        .get('/users/2')
        .reply(200, resource);

      const user = await getUserById(resource.id);

      expect(user).toStrictEqual({ ...resource, birthDate: new Date(resource.birthDate) });
    });
  });
});
