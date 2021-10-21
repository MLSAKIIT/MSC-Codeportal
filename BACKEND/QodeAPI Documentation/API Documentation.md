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
  * **POST** `http://localhost:5000/qode-compiler`
  * **Request Body:** 
    ```json 
    {
        "script": "",
        "language": "c++",
        "versionIndex": "3"
    }
    ```

---

## **TEST EXECUTION**

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
        "script": "#include<iostream> \n using namespace std; \n int digitSum(int x) \n { int sum = 0; while(x){ sum += x%10; x/=10; } return sum; } \n int main(){cout<<digitSum(1387); return 0;}",

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