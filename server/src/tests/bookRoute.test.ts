test('Get all books route', async function () {
    const url = process.env.API_URL || 'http://localhost:8000'
    try {
        const data = await fetch(`${url}/books`);
        expect(data).toEqual({
            "msg": "success",
            "data": []
          })
    } catch (error:any) {
        return error.message
    }
    
})