# Remove Friend

Remove a friend of the list of friends.

**URL** : `/friend`

**Method** : `DELETE`

**Auth required** : YES (Authorization in Headers)

**Permissions required** : None

**Body example**

```json
{
	"followedUserId": "036c53b1-b179-40cf-ad68-4b0ecf196eac"
}
```

<hr />

## Success Response

```json
{
  "message": "Follow Removed"
}
```

## Notes

* The ID of the friend that will be removed from the user's friend list is required in the body(followedUserId).