# Get All Posts

Get feed based on friend list.

**URL** : `/user/feed`

**Method** : `GET`

**Auth required** : YES (Authorization in Headers)

**Permissions required** : None

**Body required**: None

<hr />

## Success Response

```json
{
  "message": "Got feed successfully",
  "feed": [
    {
      "friendId": "036c53b1-b179-40cf-ad68-4b0ecf196eac",
      "image": "Quarto do Fulano",
      "description": "Meu quarto",
      "createdAt": "Thu Aug 27 2020 14:26:19 GMT-0300 (GMT-03:00)",
      "type": "NORMAL"
    },
    {
      "friendId": "036c53b1-b179-40cf-ad68-4b0ecf196eac",
      "image": "Dog do fulano",
      "description": "Esse é o dog do Fulano",
      "createdAt": "Thu Aug 27 2020 14:25:39 GMT-0300 (GMT-03:00)",
      "type": "NORMAL"
    }
  ]
}
```