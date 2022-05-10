# Phase 1

## Authentication/Authorization

- Buatlah endpoint untuk Register dan Login

  - [POST] `/api/register`

    - body

    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string",
      "birthdate": "date?"
    }
    ```

    - response `201`

    ```json
    {
      "id": "number | string",
      "createdAt": "date",
      "updatedAt": "date",
      "name": "string",
      "email": "string",
      "birthdate": "date | null"
    }
    ```

  - [POST] `/api/login`

    - body

    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

    - response

    ```json
    {
      "token": "string"
    }
    ```

- Buatlah password yang diterima menjadi bentuk hash menggunankan `bcrypt` (`yarn add bcrypt`)

  - Ketahui cara menggunakan `hooks` di sequelize terutama hook `beforeCreate`

- Gunakan `jsonwebtoken` (`yarn add jsonwebtoken`) untuk membuat token dari payload dan secret dari environment variable

  - token payload

  ```json
  {
    "sub": "user.id",
    "name": "user.name",
    "email": "user.email"
  }
  ```

- Buatlah middleware untuk proses authorization

  - Token biasanya dikirim lewat `headers` dengan nama field `authorization`. Bilamana salah (user tak ada, token expired, dll) maka akan mengirim response `401`

- Buatlah endpoint untuk melihat profile

  - [GET] `/api/v1/users/me`

    - auth `yes`

    - response

    ```json
    {
      "id": "number | string",
      "createdAt": "date",
      "updatedAt": "date",
      "name": "string",
      "email": "string",
      "birthdate": "date | null"
    }
    ```

  - [GET] `/api/v1/users/:userId`

    - response

    ```json
    {
      "id": "number | string",
      "createdAt": "date",
      "updatedAt": "date",
      "name": "string",
      "birthdate": "date | null"
    }
    ```
