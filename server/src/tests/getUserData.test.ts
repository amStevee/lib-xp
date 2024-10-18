import getUserData from "../utils/getUserData"

test('getUserData returns user object', async function () {
    const fnc = await getUserData({email: 'steven@example.com', password: 'jkaa3u4q'});

    expect(fnc).toEqual({email: 'steven@example.com', password: 'jkaa3u4q'})
})