# Devs
## Ronaldo Jonson
## Thiago Stephen
## Yuzo S. Okamoto

# Endpoints
### GET
- /post = pegar todos os posts (em desenvolvimento)
PATH: ` http://localhost:3003/post  `

### POST
- /user/signup = registrar novo usuário
`JSON BODY com name, email e password`

- /friend = seguir/amizade com usuário
` JSON BODY com userToFollowId e HEADERS com authorization = token`

- /post = criar novo post
` JSON BODY com image, description e type, e HEADERS com authorization = token`
` type = "NORMAL" ou "ADMIN" `

### DELETE
- /friend = remover seguir/amizade com usuário
` JSON BODY com followedUserId e HEADERS com authorization = token`
