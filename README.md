# Description

- What problem does this app solve?
	- Enables users to save articles in a safe place so they're able to read them and prioritize what they want to read.

- How does this app solve the problem?
	- Keeps articles of interest organized and accessible from one location. 

- What is the mission statement?
	- Reading should be accessible and convenient for everyone.


# Features

What features were required for the minimum viable product?

- User registration/login flow
- User can save articles to read later
- User can assign articles to a category
- User can view saved articles in cards
- User can delete saved articles


What features might be in a future release?

- User can click the link to the study to read it.
- User can rank the articles that are the most important to read first
- Saving a link generates a preview of the website.
- Download the article for a specific device. 

# Design - Planning

What design system will be used?
- Wireframe and a template for the UI team using HTML and CSS.
- CSS, SASS, bootstrap, reactstrap for React.

What will the user flow be? 
- Enter the site and see pics/tiles of articles that are saved. 
- Login, save an article (update and edit) and delete functionality for articles selected.

# Target Audience

Who is the target audience?
- People who have an interest in reading articles digitally and would like to organize their reading material.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

### Pintereach Backend
- This is the back-end documentation for the Pintereach project.

### Authentication
- The API supplies a token upon logging in and is required to perform any CRUD actions.

## Endpoints
Registration
- POST / https://lambda-bw-pintereach.herokuapp.com/api/auth/register

- Should Get Status 201
	```
	{
		"username":"taslim",
		"password":"taslim"
	}
	```
Login
- POST / https://lambda-bw-pintereach.herokuapp.com/api/auth/login

- Should Get Status 200
	```
	{
	    "message": "Welcome taslim!",
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InJveCIsImlhdCI6MTU2MTM5ODcxNCwiZXhwIjoxNTYyMzQ5MTE0fQ.TUGs2t-sRBkoJBI6Qly5qUMsAGvV5tNHESJ4I2hPDt8"
	}
	```
Get a list of articles
- GET / https://lambda-bw-pintereach.herokuapp.com/api/articles/

- Should Get Status 200
	```
	{
	        "id": 1,
		"title": "Pokemon electronic game",
		"summary": "Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.",
		"link": "https://www.britannica.com/topic/Pokemon-electronic-game",
		"image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
		"user_id": 1,
		"category_id": 1, 
		"category_name": "Game"
	},
	```
	```
	{
		"id": 2,
		"title": "Dota 2",
		"summary": "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
		"link": "https://en.wikipedia.org/wiki/Dota_2",
		"image": "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg",
		"user_id": 2,
		"category_id": 1, 
		"category_name": "Game"
		"message": "You have gotten articles back"
	},
	```
Add an article
- POST / https://lambda-bw-pintereach.herokuapp.com/api/articles/

- Should Get Status 401 if a user does not have a token they are not allowed to post.
- Should Get Status 200 if added successfully.
	```
	{
	      "id": 1,
	      "title": "A test Title",
	      "summary": "This is a little summary about the article..",
	      "link": "https://www.britannica.com/topic/Pokemon-electronic-game",
	      "image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
	      "user_id": 1,
	      "category_id": 1,
	      "category_name": "Test Article"
	}
	```
Delete an article
- Path Variables id
- DELETE / https://lambda-bw-pintereach.herokuapp.com/api/articles/:id

Update an article
- PUT / https://lambda-bw-pintereach.herokuapp.com/api/articles/:id

- Path Variables id
	```
	{
	      "id": 1,
	      "title": "Updated A test Title",
	      "summary": "Updated This is a little summary about the article..",
	      "link": "https://www.britannica.com/topic/Pokemon-electronic-game",
	      "image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
	      "user_id": 1,
	      "category_id: 1,
	      "category_name": "Updated Test Article"
	}
	```
