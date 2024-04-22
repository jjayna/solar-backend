# Api Endpoints

Here you will get all the api endpoints that we used in this project

## User Register

```
POST : http://localhost:5000/user/register
```

**Use for register.**

## Request body

name : String - <span style='color:red'>Required</span>

email : String - <span style='color:red'>Required</span>

password : String - <span style='color:red'>Required</span>

### Response:

```json
{
  "name": "User",
  "email": "user@login.com"
}
```

## User Login

```
POST : http://localhost:5000/user/login
```

**Use for login.**

## Request body

Email : String - <span style='color:red'>Required</span>

Password : String - <span style='color:red'>Required</span>

### Response:

```json
{
  "message": "Login successful",
  "name": "User",
  "email": "user@login.com"
}
```

## Get Facts

```
GET : http://localhost:5000/facts
```

**Use for get all facts about the planet.**

## Request Body

name : String - <span style='color:red'>Required</span>

### Response

```json
[
    {
        id: 1,
        fact: "Mercury is the smallest planet in the Solar System.",
    },
    {
        id: 2,
        fact: "Mercury is the closest planet to the Sun.",
    }...
]
```
