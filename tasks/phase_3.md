# Phase 3

## Post Photos

- Buatlah model/table `post_photo` seperti berikut

  ```json
  {
    "id": "uuidv4 (not null)",
    "createdAt": "date",
    "updatedAt": "date",
    "keypath": "string (not null)"
  }
  ```

  - `yarn sq model:generate --name post_photo --attributes keypath:string --underscored`

- Buatlah endpoint untuk upload photo

  - [POST] `/api/v1/posts/upload`

    - auth `yes`

    - body `multipart`

    ```json
    {
      "photo": "file (max 2mb, {jpg,jpeg,png})"
    }
    ```

    - response

    ```json
    {
      "id": "string",
      "createdAt": "date",
      "updatedAt": "date",
      "keypath": "string"
    }
    ```

- Upload file pada Express dapat menggunakan bantuan `multer` (`yarn add multer`)

- Buat photo yang terupload di-crop kotak di tengah

- Upload file tersebut di `AWS S3 bucket`
