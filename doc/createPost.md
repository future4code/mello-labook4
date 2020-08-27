# Signup

Create a new post in the database.

**URL** : `/post`

**Method** : `POST`

**Auth required** : YES (Authorization in Headers)

**Permissions required** : None

**Body example**

```json
{
    "image": "Quarto do Fulano",
    "description": "Meu quarto",
    "type": "NORMAL"
}
```

<hr />

## Success Response

```json
{
    "message": "Post created successfully",
    "post": {
        "image": "Quarto do Fulano",
        "description": "Meu quarto",
        "type": "NORMAL",
        "createdAt": "2020-08-27T17:26:19.858Z",
        "id": "8a5c4c0f-6b63-4eee-8181-af78f40429e0",
        "userId": "036c53b1-b179-40cf-ad68-4b0ecf196eac"
    }
}
```

## Notes

* IMAGE, DESCRIPTION and TYPE are required to create a new post.
* TYPE must be "NORMAL" or "EVENT".