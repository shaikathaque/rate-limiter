## Custom Rate Limier

A simple custom implementation of a token bucket based rate limiter in Node.js and TypeScript for practice.

### TODO

- Add key based rate limiting (ip, user, etc)
- Support distributed rate limiting using Redis
- Add implementations of other common algorithms: leaky bucket, sliding window counter, etc.

### Server quickstart

Install dependencies

```bash
npm install
```

Set up `.env` file

```
PORT=8080
```

Run in development mode

```bash
npm run dev
```

Call endpoint protected with Rate Limiter

```bash
curl localhost:8080
```

### Testing

Run unit and end to end tests using `Jest`

```bash
npm run test
```
