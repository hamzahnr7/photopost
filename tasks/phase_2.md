# Phase 1

## Post

- Buatlah model/table `post` seperti berikut

  ```json
  {
    "id": "bigint (auto increment, not null)",
    "createdAt": "date",
    "updatedAt": "date"
    "authorId": "bigint (foreign key, not null)",
    "caption": "string (not null)",
    "isPublished": "boolean (not null, default = true)",
  }
  ```

  - `yarn sq model:generate --name post --attributes authorId:bigint,caption:string,isPublished:boolean --underscored`

- Jangan lupa buat relation/association antar tabel `Post` dan `User`

- Buatlah CRUD endpoints untuk post

  - [POST] `/api/v1/posts` (create a post)

    - auth `yes`

    - body

    ```json
    {
      "caption": "string"
    }
    ```

    - response `201`

    ```json
    {
      "id": "number | string",
      "createdAt": "date",
      "updatedAt": "date",
      "authorId": "number | string",
      "caption": "string",
      "isPublished": "boolean"
    }
    ```

  - [GET] `/api/v1/posts` (get post list, with pagination if you could)

    - response

    ```json
    [
      {
        "id": "number | string",
        "createdAt": "date",
        "updatedAt": "date",
        "authorId": "number | string",
        "caption": "string",
        "isPublished": "boolean"
      }
    ]
    ```

  - [GET] `/api/v1/posts/:postId` (get post detail)

    - response

    ```json
    {
      "id": "number | string",
      "createdAt": "date",
      "updatedAt": "date",
      "authorId": "number | string",
      "author": "User",
      "caption": "string",
      "isPublished": "boolean"
    }
    ```

  - [DELETE] `/api/v1/posts/:postId` (delete a post)

    - auth `yes`

    - response `204`

  - [PATCH] `/api/v1/posts/:postId` (update a post)

    - auth `yes`

    - body

    ```json
    {
      "caption": "string?",
      "isPublished": "boolean?"
    }
    ```

    - response `204`
