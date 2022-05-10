## Phase 4

## Post and Photo relationship

- Buatlah model/table `post_to_photo` seperti berikut

  ```json
  {
    "id": "uuidv4 (not null)",
    "createdAt": "date",
    "updatedAt": "date",
    "keypath": "string (not null)"
  }
  ```

  - `yarn sq model:generate --name post_to_photo --attributes postId:bigint,photoId:uuid,order:integer --underscored`

- Buatlah relasi Many-to-Many antara `Post` dan `PostPhoto` dengan `PostToPhoto` sebagai conjunction-nya

- Ubahlah enpoints di `posts` sehingga post memiliki photo (dapat disesuaikan bilamana init agak sulit)

  - [POST] `/api/v1/posts`

    - body

    ```json
    {
      "photos": [
        {
          "id": "uuidv4"
        }
      ],
      "caption": "string"
    }
    ```

  - [GET] `/api/v1/posts` (with pagination if you could)

    - response

    ```json
    [
      {
        "id": "number | string",
        "createdAt": "date",
        "updatedAt": "date",
        "authorId": "number | string",
        "caption": "string",
        "photo": {
          "url": "string"
        }
      }
    ]
    ```

  - [GET] `/api/v1/posts/:postId`

    - response

    ```json
    {
      "id": "number | string",
      "createdAt": "date",
      "updatedAt": "date",
      "authorId": "number | string",
      "author": "User",
      "caption": "string",
      "isPublished": "boolean",
      "photos": [
        {
          "url": "string"
        }
      ]
    }
    ```
