const app = require('../app')
const supertest = require('supertest')

const request = supertest(app)

it('Should login with correct username and password', async () => {
    // Sends GET Request to /test endpoint
    const res = await request.post(`/auth/login`)
        .set('Content-type', 'application/json')
        .send({ username: 'gearmias', password: '12345678' })
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.error).toBe(false)
})

it('Should not login with invalid credential', async () => {
    // Sends GET Request to /test endpoint
    const res = await request.post(`/auth/login`)
        .set('Content-type', 'application/json')
        .send({ username: 'gearmiass', password: '12345678' })
    expect(res.body.statusCode).toBe(401)
    expect(res.body.success).toBe(false)
    expect(res.body.error).toBe(true)
})