# Signup

Register new user to the database and return a token.

**URL** : `/user/signup`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Body example**

```json
{
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "password": "abc123"
}
```

<hr />

## Success Response

```json
{
  "message": "user created sucessfully",
  "token": "JWT"
}
```

## Notes

* NAME, EMAIL and PASSWORD are required to create a new user.