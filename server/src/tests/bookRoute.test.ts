

test('Get all books route', async function () {
    const url = 'http://localhost:3010'
    const getAllBooks = await fetch('http://localhost:3010/books');
    expect(getAllBooks).toBeFalsy()
    
})