export class Post {
  constructor(
    private image: string,
    private description: string,
    private type: POST_TYPE,
    private createdAt: Date,
    private id: string
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
}

export interface createPostInputDTO {
  image: string
  description: string
  type: POST_TYPE
  createdAt?: Date
  id?: string
}

export enum POST_TYPE {
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}