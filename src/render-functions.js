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
		//assign li creation to variable listItem
		const listItem = document.createElement('li');
		//.add class notation
		listItem.classList.add('user-card');
		//create button
		const button = document.createElement('button');
		//text content string interpolation
		button.textContent = `Load ${user.username}'s posts`;
		//access userId within data set within button
		button.dataset.userId = user.id;
		listItem.appendChild(button);
		usersUl.appendChild(listItem);
	});
};

export const renderPosts = (postsUl, posts) => {
	postsUl.innerHTML = ''; //clear
	posts.forEach((post) => {
		//for each post in posts.... do this
		const listItem = document.createElement('li'); //create li element
		const h2 = document.createElement('h2'); // create h2 element
		h2.textContent = post.title; //posts is the element within posts and title is the key(post= object title is key/prop)
		const p = document.createElement('p'); //create
		p.textContent = post.body; //empty p tag putting post (elements of posts) , selecting the body of post and making empty p equal to post.body.
		listItem.append(h2, p); //put h2,p into empty li ( listItem )
		postsUl.append(listItem); //put completed listItem into postUl ( div )
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
