# Backend System

1. Http severs
2. Authentication
3. Databases
4. Middlewares

## Http servers
1. Request Methods
2. URL route
3. Query params, headers, body
4. Status codes
5. Response html json texts
6. cors

# HTTP Servers

## 1. Request Methods
HTTP request methods specify the action to be performed on a resource:
- **GET**: Requests data from a specified resource. It should not affect the data on the server.
- **POST**: Submits data to be processed to a specified resource, typically causing a change in state or side effects on the server.
- **PUT**: Replaces all current representations of the target resource with the request payload.
- **DELETE**: Removes the specified resource.
- **PATCH**: Applies partial modifications to a resource.
- **OPTIONS**: Describes the communication options for the target resource.

## 2. URL Route
A URL route is the specific path in a URL that maps to a particular function or resource on the server. For example, in a RESTful API, `/users/123` might retrieve or manipulate the user with ID 123. Routes help in organizing and managing different endpoints and their corresponding handlers in web applications.

## 3. Query Params, Headers, Body
- **Query Params**: These are key-value pairs added to the end of a URL (e.g., `?search=books&author=doe`). They are used to send additional data to the server, often for filtering or searching purposes.
- **Headers**: Headers are part of the HTTP request and response and provide essential information about the request or response, such as `Content-Type` (indicating the media type of the resource) or `Authorization` (containing credentials for authentication).
- **Body**: The body of an HTTP request contains the data to be sent to the server. This is commonly used in POST and PUT requests to send data like JSON, form data, or files.

## 4. Status Codes
HTTP status codes are issued by a server in response to a client's request:
- **200 OK**: The request has succeeded.
- **201 Created**: The request has been fulfilled, resulting in the creation of a new resource.
- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: Authentication is required and has failed or has not yet been provided.
- **403 Forbidden**: The server understood the request but refuses to authorize it.
- **404 Not Found**: The server cannot find the requested resource.
- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.

## 5. Response Formats (HTML, JSON, Text)
- **HTML**: HyperText Markup Language, used for creating web pages. An HTTP response with HTML content displays a web page.
- **JSON**: JavaScript Object Notation, a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is commonly used for API responses.
- **Text**: Plain text without any formatting. Used for simple text responses.

## 6. CORS (Cross-Origin Resource Sharing)
CORS is a security feature implemented by web browsers to control how resources on a web page can be requested from another domain. It helps prevent malicious websites from making requests to other websites without permission. CORS policy is implemented by setting specific HTTP headers, such as `Access-Control-Allow-Origin`, which determines whether the resource can be accessed by a different domain. CORS is essential for enabling secure interactions between different domains while protecting sensitive data.
