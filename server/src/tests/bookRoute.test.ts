test('Request to get all books is functional', async function () {
    try {
        const data = await fetch('http://localhost:8000/books');
        expect(data).toEqual({
            "msg": "success",
            "data": []
          })
    } catch (error:any) {
        return error.message
    }
    
})