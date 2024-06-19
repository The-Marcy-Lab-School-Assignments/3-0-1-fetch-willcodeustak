const userUrl = 'https://jsonplaceholder.typicode.com/users';

export const checkResponseStatus = () => {
	return fetch(userUrl).then(({ status, ok, url }) => {
		// destructure
		return { status, ok, url };
	});
};
// 	return fetch(userUrl).then((response) => {
// 		const responseData = {
// 			status: response.status,
// 			ok: response.ok,
// 			url: response.url,
// 		};
// 		return responseData;
// 	});
// };

export const getUsers = () => {
	return fetch(userUrl).then((res) => {
		return res.json();
	});
};

export const getUserPosts = (userId) => {
	return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
		.then((res) => res.json())
		.then((post) => post);
};
//splice

export const createNewUser = (newUserData) => {
	return fetch(userUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUserData),
	}).then((response) => {
		return response.json();
	});
};
