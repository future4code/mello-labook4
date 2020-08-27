# Add Friend

Add a new friend to the list of friends.

**URL** : `/friend`

**Method** : `POST`

**Auth required** : YES (Authorization in Headers)

**Permissions required** : None

**Body example**

```json
{
	"userToFollowId": "036c53b1-b179-40cf-ad68-4b0ecf196eac"
}
```

<hr />

## Success Response

```json
{
  "message": "Friend added"
}
```

## Notes

* The ID of the new friend is required in the body(userToFollowId).