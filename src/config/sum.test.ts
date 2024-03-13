import { describe, expect, test } from '@jest/globals';
import { request } from 'http';
import app from '../app';
import sum from '../utils';

// unit testing using jest
describe('App', () => {
    test('adds 1+ to eual to 3', () => {
        expect(sum(1, 4)).toBe(3);
    });

    // integration testing using supertest
    test('it should return 200 status', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
