# Qode API

<!-- About Qode API Goes here -->

## Server end points

* Base : **GET** `http://localhost:5000/`
* Authentication:
    * **POST** `http://localhost:5000/api/auth/login`
    * **Request Body:**
        ```json
        {
            "email": "",
            "password": ""
        }
        ```
    * **POST** `http://localhost:5000/api/auth/signup`
    * **Request Body:**
        ```json
        {
            "name": "",
            "email": "",
            "password": ""
        }
        ```

* Qode Compiler:
  * **GET** `http://localhost:5000/api/qode/ping`   
  * **POST** `http://localhost:5000/api/qode/qode-compiler`
  * **Request Body:** 
    ```json 
        {
            "script": "",
            "stdin": "",
            "language": "c++",
            "versionIndex": "3"
        }
    ```

---

## **TEST EXECUTION**

**Ping Test**
* **GET** `http://localhost:5000/api/qode/ping`
* **RESPONSE BODY: [Valid Request]**
  ```json
  {
    "status": 200,
    "time": "2021-10-24T09:10:48.867Z",
    "endpoints": {
        "ping": "GET to api/qode/ping",
        "compiler": "POST to api/qode/qode-compiler"
    }
  }
  ```
 * **RESPONSE BODY: [Invalid Request]**
    ```json
    {
        "status": 205,
        "message": "invalid endpoint",
        "time": "2021-10-24T09:10:56.451Z"
    }
    ```
**Authentication Test**
* **REQUEST BODY:**
    ```json
    {
     "email": "admin_1@qode.com",
     "password": "admin_123"
    }
    ```
* **RESPONSE BODY: [SUCCESS]**
    ```json
    {
        "token": "<AUTH_TOKEN>",
        "expiresIn": 6600,
        "msg": {
            "_id": "<MONGO_DB_ID>",
            "name": "admin_1",
            "email": "admin_1@qode.com",
            "password": "<HASHED_PASSWORD>",
            "__v": 0
        }
    }
    ```
* **RESPONSE BODY: [FAILURE]**
    ```json
    {
        "message": "Authentication Failed"
    }
    ```
### **Code Execution Test**
**Q. Find the sum of the digits in a number.**

* **REQUEST BODY:** 
    ```json
    {
        "script": "#include<iostream> \n using namespace std; \n int digitSum(int x) \n 
        { int sum = 0; while(x){ sum += x%10; x/=10; } return sum; } \n int main(){
        int num; cin>>num; cout<<digitSum(num); return 0;}",
        "stdin": 1387,
        "language": "c++",
        "versionIndex": "3"
    }

    ```

* **RESPONSE BODY:**
    ```json 
        {
        "status": 200,
        "message": "Qode proxy compiler: Success",
        "results": {
            "output": "19",
            "statusCode": 200,
            "memory": "3404",
            "cpuTime": "0.00"
          }
        }
    ```

---