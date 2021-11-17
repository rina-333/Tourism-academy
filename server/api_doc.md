# Tourism Academy Server
This was presenting to academy for keep update news and event. Also to brand improvement the academy.
* RESTfull endpoint for asset's CRUD operation
* 3rd Party API ImageKit
* JSON formatted response

&nbsp;

## RESTfull endpoints
### GET /news

> Get all news

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response(200)_
```
{
  "id": <given by system>
  "title": "<posted title>"
  "image_url": "<posted image url>"
  "description": "<posted description>"
  "date": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### POST /news/:id
> Post create news

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "title": "<title of news to get insert into>"
  "image_url": "<image url of news to get insert into>"
  "description": "<description of news to get insert into>"
  "date": "<date of news to get insert into>"
}
```

_Response(201)_
```
{
  "id": <given by system>
  "title": "<posted title>"
  "image_url": "<posted image url>"
  "description": "<posted description>"
  "date": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### PUT /news/:id

> Update/replace news

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "title": "<title of news to get insert into>"
  "image_url": "<image url of news to get insert into>"
  "description": "<description of news to get insert into>"
  "date": "<date of news to get insert into>"
}
```

_Response(200)_
```
{
  "id": <given by system>
  "title": "<posted title>"
  "image_url": "<posted image url>"
  "description": "<posted description>"
  "date": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### DELETE /news/:id

> Delete news

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "id": "<id to delete into>"
}
```

_Response(200)_
```
{
  "message": "Succesfully Deleted"
}
```

_Response (405 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### GET /events

> Get all events

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response(200)_
```
{
  "id": <given by system>
  "title": "<posted title>"
  "image_url": "<posted image url>"
  "description": "<posted description>"
  "date": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### POST /events/:id
> Post create events

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "title": "<title of events to get insert into>"
  "image_url": "<image url of events to get insert into>"
  "description": "<description of events to get insert into>"
  "date": "<date of events to get insert into>"
}
```

_Response(201)_
```
{
  "id": <given by system>
  "title": "<posted title>"
  "image_url": "<posted image url>"
  "description": "<posted description>"
  "date": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### PUT /events/:id

> Update/replace events

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "title": "<title of events to get insert into>"
  "image_url": "<image url of events to get insert into>"
  "description": "<description of events to get insert into>"
  "date": "<date of events to get insert into>"
}
```

_Response(200)_
```
{
  "id": <given by system>
  "title": "<posted title>"
  "image_url": "<posted image_url>"
  "description": "<posted description>"
  "date": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### DELETE /events/:id

> Delete events

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "id": "<id to delete into>"
}
```

_Response(200)_
```
{
  "message": "Succesfully Deleted"
}
```

_Response (405 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### GET /suggest

> Get all suggest

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response(200)_
```
{
  "id": <given by system>
  "name_suggest": "<posted title>"
  "desc_suggest": "<posted suggest>"
  "email_suggest": "<posted email>"
  "date_suggest": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### POST /suggest/:id
> Post create suggest

_Request Header_
```
no need
```

_Request Body_
```
{
  "name_suggest": "<name of suggests to get insert into>"
  "desc_suggest": "<suggests to get insert into>"
  "email_suggest": "<email of suggests to get insert into>"
  "date_suggest": "<date of sugests to get insert into>"
}
```

_Response(201)_
```
{
  "id": <given by system>
  "name_suggest": "<posted name>"
  "desc_suggest": "<posted suggest>"
  "email_suggest": "<posted email>"
  "date_suggest": "<posted date>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

### GET /login

> Login user

_Request Header_
```
no need
```

_Request Body_
```
{
  "username": "<username user to get insert into>"
  "password": "<password of user to get insert into>"
}
```

_Response(200)_
```
{
  "id": "<id given by system>"
  "jasonwebtoken": "<posted token>"
}
```

_Response (404 - Not Found)_
```
{
  "message": "invalid username or password"
}
```
---
