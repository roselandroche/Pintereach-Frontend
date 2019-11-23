# Frontend

Product Vision

Clone this document and answer the prompts to the best of your team's ability 

# Proposal

---

- What problem does your app solve?
    Enables users to save articles in a safe place so you're able to read them and prioritize what you want to read/when they want to.

- Be as specific as possible; how does your app solve the problem?
    Keeps articles of interest organized to anyone who reads online. 

- What is the mission statement?
    Reading is for everyone. Like bookmarking, but better by saving specific articles, not just sites. 


# Features

---

- What features are required for your minimum viable product?

- User registration/login flow
- User can save articles to read later
- Use can assign articles to a category
- User can view saved articles in cards
- User can delete saved articles


- What features may you wish to put in a future release?
    Doing the STRETCH...
- User can click the link to the study to read it.
- User can rank the articles that are the most important to read first
- Saving a link generates a preview of the website just like slack does.
- Download the article for a specific device. 


- What do the top 3 similar apps do for their users?
    1.  Pinterest
    2.  Pocket
    3.  Slack with starred forms

# Design - Planning

---

*Optional but highly recommended*
*Please refer to this document:*

[Build Weeks: Planning & Design Worksheet (How to build a beautiful application)](https://www.notion.so/aabd4ef25a184a2085e511ce93480c0f)

- What design system will you use?
    Wireframe and a template for the UI team using HTML and CSS.
    CSS, SASS, bootstrap, reactstrap for React.

- What will your user flow be? 
    Enter the site and see pics/tiles of articles that are saved. 
    Login, save an article (update and edit) and delete functionality for articles selected.

- What is the URL to your wireframes?
    Don't have it yet.

# Frameworks - Libraries

---

- What 3rd party frameworks/libraries are you considering using?
    not there yet 

- Do APIs require you to contact its maintainer to gain access?
    https://github.com/bw-pintereach

- Are you required to pay to use the API?
    no

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
    no


# Target Audience

---

- Who is your target audience? Be specific.
    Anyone who has an interest on reading an article online/offline and wants to save it for later. People who read who want to read. 

- What feedback have you gotten from potential users?
    n/a
- Have you validated the problem and your solution with your target audience? How?
    not as of yet.


# Prototype Key Feature(s)

---

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

- Revision History

Copyright Lambda School 2019, All Rights Reserved

########################################################################################

Pintereach Backend
Hi! This is the back-end documentation for the Pintereach project. This is the link to our TDD FORM of what our application accomplishes.

Database Design
Image link to the design

Authentication
What is the preferred way of using the API? The API supplies a token upon logging in and is required to perform any CRUD actions.

Endpoints
Registration
POST / https://lambda-bw-pintereach.herokuapp.com/api/auth/register

Should Get Status 201
{
	"username":"taslim",
	"password":"taslim"
}
Login
POST / https://lambda-bw-pintereach.herokuapp.com/api/auth/login

Should Get Status 200
{
    "message": "Welcome taslim!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InJveCIsImlhdCI6MTU2MTM5ODcxNCwiZXhwIjoxNTYyMzQ5MTE0fQ.TUGs2t-sRBkoJBI6Qly5qUMsAGvV5tNHESJ4I2hPDt8"
}
Get a list of articles
GET / https://lambda-bw-pintereach.herokuapp.com/api/articles/

Should Get Status 200
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
        {
            "id": 2,
            "title": "Dota 2",
            "summary": "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
            "link": "https://en.wikipedia.org/wiki/Dota_2",
            "image": "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg",
            "user_id": 2,
            "category_id": 1, 
            "category_name": "Game"
        },
    "message": "You have gotten articles back"
Add an article
POST / https://lambda-bw-pintereach.herokuapp.com/api/articles/

Should Get Status 401 if a user does not have a token they are not allowed to post.
Should Get Status 200 if added successfully.

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

Delete an article
Path Variables id
DELETE / https://lambda-bw-pintereach.herokuapp.com/api/articles/:id

Update an article
PUT / https://lambda-bw-pintereach.herokuapp.com/api/articles/:id

Path Variables id
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