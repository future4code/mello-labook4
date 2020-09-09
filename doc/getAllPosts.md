# Get All Posts

Get all posts in database.

**URL** : `/post`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Body required**: None

<hr />

## Success Response

```json
{
  "message": "Got all posts successfully",
  "posts": [
    {
      "id": "78780df6-949c-4d12-9bc5-f6328f6a25ac",
      "user_id": "f2b27fce-3897-4cb7-bd71-730dad07afbb",
      "image": "Post 1 Image",
      "description": "Post 1 description",
      "created_at": "Thu Aug 27 2020 14:23:53 GMT-0300 (GMT-03:00)",
      "type": "NORMAL"
    },
    {
      "id": "8a5c4c0f-6b63-4eee-8181-af78f40429e0",
      "user_id": "036c53b1-b179-40cf-ad68-4b0ecf196eac",
      "image": "Quarto do Fulano",
      "description": "Meu quarto",
      "created_at": "Thu Aug 27 2020 14:26:19 GMT-0300 (GMT-03:00)",
      "type": "NORMAL"
    },
    {
      "id": "d5fb6007-8d9d-4fa9-961c-a9b0f35502ff",
      "user_id": "036c53b1-b179-40cf-ad68-4b0ecf196eac",
      "image": "Dog do fulano",
      "description": "Esse é o dog do Fulano",
      "created_at": "Thu Aug 27 2020 14:25:39 GMT-0300 (GMT-03:00)",
      "type": "NORMAL"
    }
  ]
}
```