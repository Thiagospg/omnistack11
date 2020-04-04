const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        /* Rollback para garantir que o banco será sempre vazio. Para não ficar gigante e não influenciar em outros teste */
        await connection.migrate.rollback(); 
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
       /*  .set('Authorization', 'iddaong') Para passar o HEADER*/
        .send({
            name: "Rachels",
	        email: "rach.sisdd@gmail.com",
	        whatsapp: "21996293571",
	        city: "Rio de Janeiro",
	        uf: "RJ"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});