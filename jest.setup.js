/* eslint-disable import/no-extraneous-dependencies */
import 'jest-extended';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import { enableNetConnect, disableNetConnect } from 'nock';

beforeAll(() => disableNetConnect());
afterAll(() => enableNetConnect());
