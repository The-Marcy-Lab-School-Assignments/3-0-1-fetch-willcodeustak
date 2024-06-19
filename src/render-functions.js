export const setupPageBasics = (parentEl) => {
	parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

	const statusDiv = parentEl.querySelector('#status');
	const usersUl = parentEl.querySelector('#users-list');
	const postsUl = parentEl.querySelector('#posts-list');
	const newUserForm = parentEl.querySelector('#new-user-form');
	const newUserDiv = parentEl.querySelector('#new-user');

	return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
	const h2 = document.createElement('h2');
	h2.id = 'status-heading';
	h2.textContent = `Info on - ${statusInfoObj.url}`;
	const p = document.createElement('p');
	p.id = 'status-code';
	p.textContent = `Status code: ${statusInfoObj.status}, ${
		statusInfoObj.ok ? 'OK' : 'FAIL'
	}!`;
	statusDiv.append(h2, p);
};

export const renderUsers = (usersUl, users) => {
	// Clear existing content in the usersUl
	usersUl.innerHTML = '';
	// Iterate over each user
	users.forEach((user) => {
		// Create list item for each user
		const listItem = document.createElement('li');
		// Create button for each user
		const button = document.createElement('button');
		button.textContent = user.username; // username property in spec
		// Set button id - checking spec
		button.id = `button-${user.id}`; // string interpolate
		// Append button to list item
		listItem.appendChild(button);
		// Append list item to the usersUl
		usersUl.appendChild(listItem);
	});
};

export const renderPosts = (postsUl, posts) => {
	postsUl.innerHTML = ''; //clear
	posts.forEach((post) => {
		const listItem = document.createElement('li');
		const button = document.createElement('button');
		button.textContent = post.username;
		button.id = `button-${post.id}`;
		listItem.appendChild(button);
		postsUl.appendChild(listItem);
	});
};

export const renderNewUser = (newUserDiv, newUserInfo) => {
	newUserDiv.innerHTML = '';
	const userName = document.createElement('h2');
	userName.textContent = newUserInfo.username;
	const emailP = document.createElement('p');
	emailP.textContent = newUserInfo.email;
	newUserDiv.appendChild(userName);
	newUserDiv.appendChild(emailP);
};
