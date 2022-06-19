const app = require('../app')
const supertest = require('supertest')

const request = supertest(app)

it('Gets the test endpoint', async () => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')
    expect(1).toBe(1)
})
