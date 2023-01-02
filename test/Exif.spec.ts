import Exif from '../src'

describe('ds', () => {
  test('sd', () => {
    const message = new Exif().testMessage()
    expect(message).toBe('Hello from exif!')
  })
})
