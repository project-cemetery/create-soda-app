import Server from '../Server'

test('Able to Init', () => {
    expect(Server.start).toBeInstanceOf(Function)
})
