export class Post {
  constructor(
    private image: string,
    private description: string,
    private type: POST_TYPE,
    private createdAt: Date,
    private id: string,
    private userId: string
  ) { }

  getImage() {
    return this.image
  }

  getDescription() {
    return this.description
  }

  getCreatedAt() {
    return this.createdAt
  }

  getType() {
    return this.type
  }

  getId() {
    return this.id
  }

  getUserId() {
    return this.userId
  }

  setImage(image: string) {
    this.image = image
  }

  setDescription(description: string) {
    this.description = description
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt
  }

  setType(type: POST_TYPE) {
    this.type = type
  }

  setId(id: string) {
    this.id = id
  }

  setUserId(userId: string) {
    this.userId = userId
  }
}

export interface createPostInputDTO {
  token: string | undefined,
  image: string
  description: string
  type: POST_TYPE
}

export enum POST_TYPE {
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}