import request from 'supertest';
import app from '../index';


describe('Book Routes', () => {
    let createdBookId: string;

    it('should create a new book', async () => {
        const res = await request(app)
            .post('/books')
            .send({
                title: 'Test Book',
                author: 'Test Author',
                publishedYear: 2023
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe('Test Book');
        createdBookId = res.body.id;
    });

    it('should get all books', async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a book by id', async () => {
        const res = await request(app).get(`/books/${createdBookId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id', createdBookId);
    });

    it('should update a book by id', async () => {
        const res = await request(app)
            .put(`/books/${createdBookId}`)
            .send({ title: 'Updated Book' });
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Updated Book');
    });

    it('should delete a book by id', async () => {
        const res = await request(app).delete(`/books/${createdBookId}`);
        expect(res.statusCode).toBe(204);
    });

    it('should return 404 for non-existing book', async () => {
        const res = await request(app).get('/books/nonexistentid');
        expect(res.statusCode).toBe(404);
    });
});