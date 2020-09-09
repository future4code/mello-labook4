# Projeto Semana 18 Labook

Ronaldo Jonson |
Thiago Stephen |
Yuzo Santana Okamoto

## Open Endpoints

Open endpoints require no Authentication.

* [Signup](doc/signup.md) : `POST /user/signup`

* [Get All Posts](doc/getAllPosts.md) : `GET /post`

## Endpoints that require Authentication

Closed endpoints require a valid JWT Token to be included in the header of the
request. A Token can be acquired from the Signup view above.

* [Add Friend](doc/addFriend.md) : `POST /friend`

* [Remove Friend](doc/removeFriend.md) : `DELETE /friend`

* [Create Post](doc/createPost.md) : `POST /post`

* [Get Feed](doc/getFeed.md) : `GET /user/feed`