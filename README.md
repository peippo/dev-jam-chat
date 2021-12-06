<img src="https://github.com/peippo/dev-jam-chat/blob/ed4c66aa7f5344c7ec0263c60a5c524d6c55e3bf/public/share.png" alt="Banner image">

# Real-time Chat App

A real-time chat app in the style of old-school [BBS](https://en.wikipedia.org/wiki/Bulletin_board_system)' & [IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat), built as part of a weekly programming challenge hosted by [DevJam](https://devjam.vercel.app/).

### <a href="https://dev-jam-chat.herokuapp.com/">Open the project</a>

Note: the app is running on Heroku and is probably sleeping, it will take a short while to wake up.

## Challenge specifications

#### Tier 3: Advanced

Real-time chat interface where multiple users can interact with each other by sending messages.

### User Stories

-  [✓] User is prompted to enter a username when he visits the chat app. The username will be stored in the application
-  [✓] User can see an `input field` where he can type a new message
-  [✓] By pressing the `enter` key or by clicking on the `send` button the text will be displayed in the `chat box` alongside his username (e.g. `John Doe: Hello World!`)

### Bonus features

-  [✓] The messages will be visible to all the Users that are in the chat app (using WebSockets)
-  [✓] When a new User joins the chat, a message is displayed to all the existing Users
-  [✓] Messages are saved in a database
-  [ ] User can send images, videos and links which will be displayed properly
-  [ ] User can select and send an emoji
-  [ ] Users can chat in private
-  [ ] Users can join `channels` on specific topics

## Tech

-  [React](https://reactjs.org/)
-  [Supabase](https://supabase.com/) - database & realtime updates via websockets
-  [Styled Components](https://styled-components.com/) - for styling components in addition to basic CSS
-  [Heroku](https://www.heroku.com) - cloud hosting platform

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project locally

Create Supabase table `messages` with the following columns:

| name     | type      | default value | primary | is nullable |
| -------- | --------- | ------------- | ------- | ----------- |
| id       | timestamp | now()         |         | -           |
| username | varchar   |               |         | -           |
| content  | text      |               |         | -           |
| type     | varchar   |               |         | -           |

Create a `.env` file to project root containing your Supabase info:

```
REACT_APP_SUPABASE_URL=<database_endpoint_url>
REACT_APP_SUPABASE_KEY=<public_api_key>
```

```
> npm install
```

```
> npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
