Saving a change because the app is not working. 
![](/images/ErrorTodayNoChanges.png)


### Table

|  Folder|File  | Code Block |
|---|---|---|
| utilities | users-service.js | ```import * as usersAPI from './users-api’``` |
| utilities | users-service.js |  ```export async function signUp (userData) {  const token = await usersAPI.signUp(userData)  localStorage.setItem('token', token)  return getUser()}```|
|  utilities| users-service.js | ```export async function login (credentials) {  const token = await usersAPI.login(credentials)  //localStorage.setItem('token', token)  return getUser()}``` |
|  utilities|  users-service.js|  |
| utilities |  users-service.js|  |
| utilities |  users-service.js|  |
|  utilities|  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |