class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

class UnauthenticatedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

export { BadRequestError, NotFoundError, UnauthenticatedError };
