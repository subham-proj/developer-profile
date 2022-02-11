## [The Developer Repository](https://the-developer-repository.herokuapp.com/)

### API Documentation

`https://the-developer-repository.herokuapp.com/api/`

## Endpoints

1) All users
    - Route : `https://the-developer-repository.herokuapp.com/api/users`
    - Method : GET
    - example 
    ```
    [
        {
        	"id": "subham-proj",
        	"avatar_url": "https://avatars.githubusercontent.com/u/57002269?v=4"
        }
    ]
    ```
    
2) User by Id
    - Route : `https://the-developer-repository.herokuapp.com/api/users/:id`
        -- example : `https://the-developer-repository.herokuapp.com/api/users/subham-proj`
    - Method : GET
    - example 
    ```
  
    {
        "_id": "62062e224d11e6a63091ebf9",
        "id": "subham-proj",
        "avatar_url": "https://avatars.githubusercontent.com/u/57002269?v=4",
        "name": "Subham Singh",
        "company": "Subham Singh",
        "blog": "subham-portfolio.netlify.app",
        "location": "Kolkata",
        "email": null,
        "bio": "This is my bio",
        "github_id": "subham-proj",
        "linkedin_id": "subham-singh-cc",
        "codechef_id": "",
        "hackerrank_id": "",
        "twitter_id": "",
        "medium_id": "",
        "repos": [
            {
                "name": "stocky",
                "html_url": "https://github.com/subham-proj/stocky",
                "description": null,
                "updated_at": "2021-05-02T14:45:18Z"
            },
            {
                "name": "subham-proj",
                "html_url": "https://github.com/subham-proj/subham-proj",
                "description": null,
                "updated_at": "2022-01-11T13:53:29Z"
            }
        ],
        "createdAt": "2022-02-11T09:36:34.238Z",
        "updatedAt": "2022-02-11T09:36:34.238Z",
        "__v": 0
    }

    ```

3) Add User
    - Route : `https://the-developer-repository.herokuapp.com/api/users`
    - Method : POST
    - Example Body
    ```
    {
    	"github_id": "subham-proj",
    	"linkedin_id": "subham-singh-cc",
    	"codechef_id": "subham_cc99",
    	"hackerrank_id": "subham999",
    	"twitter_id": "subhamtw",
    	"medium_id": "subhamdev20"
    }
    ```
    - Example response
    ```
    [
        {
        	"id": "subham-proj",
        	"avatar_url": "https://avatars.githubusercontent.com/u/57002269?v=4"
        }
    ]
    ```

4) Delete a User
    - Route : `https://the-developer-repository.herokuapp.com/api/users/:id`
        - example : `https://the-developer-repository.herokuapp.com/api/users/subham-proj`
    - Method : DELETE
    - Example response
    ```
    {
    	"message" : "User removed successfully"
    }
    ```
    

    
#### Made by : [Subham Singh](https://www.linkedin.com/in/subham-singh-cc/)
