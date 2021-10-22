const enum StatusCode {
    OK = 200,
    Created = 201,
    Redirect = 307,
    Unauthorized = 401,
    AlreadyExists = 403,
    NotFound = 404,
    Unable = 422,
    Issue = 500,
}

export default StatusCode
