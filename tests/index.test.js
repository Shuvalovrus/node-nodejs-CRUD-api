import pactum from 'pactum';

describe('Basic tests endpoints', () => {

	const user = {
		"username": "Anna",
		"age": 23,
		"hobbies": ["watch tv", "play games"]
	}


	it('should return empty array', async () => {

		await pactum.spec()
	            .get('http://localhost:4500/api/users')
	            .expectStatus(200)
	            .expectJsonLike( [] );
	})

	it('should add and return user', async () => {

		const req =  await pactum.spec()
	            .post('http://localhost:4500/api/users')
	    		.withJson(user)
	    		.expectStatus(201)
				.expectJsonLike(user);
		
		user.id = req.body.id;

	})

	it('should return user', async () => {

		await pactum.spec()
			.get(`http://localhost:4500/api/users/${user.id}`)
			.expectStatus(200)
			.expectJsonLike(user)
	})

	it('should update and return updated user', async () => {
		user.age = 44;

		await pactum.spec()
			.put(`http://localhost:4500/api/users/${user.id}`)
			.expectStatus(200)
		 	.withJson(user)
			.expectJsonLike(user)
	})

	it('should delete user', async () => {		

		await pactum.spec()
			.delete(`http://localhost:4500/api/users/${user.id}`)
			.expectStatus(204)
	})

	it('should return 404 status', async () => {		

		await pactum.spec()
			.get(`http://localhost:4500/api/users/${user.id}`)
			.expectStatus(404)
	})
})

