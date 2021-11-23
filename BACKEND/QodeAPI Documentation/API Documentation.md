# Qode API

<!-- About Qode API Goes here -->

## Server end points

* Base : **GET** `https://qode-msc.herokuapp.com/`
* Authentication:
    * **POST** `https://qode-msc.herokuapp.com/api/auth/login`
    * **Request Body:**
        ```json
        {
            "email": "",
            "password": ""
        }
        ```
    * **POST** `https://qode-msc.herokuapp.com/api/auth/signup`
    * **Request Body:**
        ```json
        {
            "name": "",
            "email": "",
            "password": ""
        }
        ```
* Qode Practice: 
  * **GET** `https://qode-msc.herokuapp.com/api/qode/problems`
  * **GET** `https://qode-msc.herokuapp.com/api/qode/sheet1?topic=`
  * **GET** `https://qode-msc.herokuapp.com/api/qode/sheet2?topic=`
* Qode Compiler:
  * **GET** `https://qode-msc.herokuapp.com/api/qode/ping`   
  * **POST** `https://qode-msc.herokuapp.com/api/qode/qode-compiler`
  
    **RESQUEST BODY** 
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
* **GET** `https://qode-msc.herokuapp.com/api/qode/ping`
* **RESPONSE BODY: [Valid Request]**
  ```json
  {
    "status": 200,
    "time": "2021-10-24T09:10:48.867Z",
    "endpoints": {
        "ping": "https://qode-msc.herokuapp.com/api/qode/ping",
        "compiler": "https://qode-msc.herokuapp.com/api/qode/qode-compiler",
        "Qode_Practice_Sheet_1": "https://qode-msc.herokuapp.com/api/qode/sheet1?topic=",
        "Qode_Practice_Sheet_2": "https://qode-msc.herokuapp.com/api/qode/sheet1?topic="
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
*  **GET** `https://qode-msc.herokuapp.com/api/qode/problems`
   
    **RESPONSE BODY:**
    ```json
        {
            "status": 200,
            "message": "Qode Practice Problem [Complete Set]",
            "questions": [
                {
                    "_id": "",
                    "question_id": ,
                    "problem_statement": "",
                    "topic": "",
                    "link": "",
                    "status": ,
                    "favourite": ,
                     "__v": 0
                }
            ]
        }
    ```
* **GET** `https://qode-msc.herokuapp.com/api/qode/sheet<NUMBER>?topic=<TOPIC>`
    
    **RESPONSE BODY:**
    ```json
        {
            "status": 200,
            "message": "Problem Set #<NUMBER> On <TOPIC>",
            "questions": [
                {
                    "_id": "",
                    "question_id": ,
                    "problem_statement": "",
                    "topic": "",
                    "link": "",
                    "status": ,
                    "favourite": ,
                     "__v": 0
                }
            ]
        }
    ```
  
**Authentication Test**
* **REQUEST BODY:**
    ```json
    {
     "email": "mail@qode.com",
     "password": "<PASSWORD>"
    }
    ```
* **RESPONSE BODY: [SUCCESS]**
    ```json
    {
        "token": "<AUTH_TOKEN>",
        "expiresIn": 6600,
        "msg": {
            "_id": "<MONGO_DB_ID>",
            "name": "<USER_NAME>",
            "email": "mail@qode.com",
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
        "script": "#include<iostream>\nusing namespace std;\n int digitSum(int x) \n{ int sum = 0; while(x){ sum += x%10; x/=10; } return sum; } \n int main(){int num; cin>>num; cout<<digitSum(num);return 0;}",
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