
test('getUserData returns user object', async function () {
    const fnc = {email: 'steven@example.com', password: 'jkaa3u4q'}

    expect(fnc).toEqual({email: 'steven@example.com', password: 'jkaa3u4q'})
})