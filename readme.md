# Solar Backend

This is the backend for the Solar project. It is built using Node.js, Express.js, and Mongoose. The backend provides an API for retrieving planet results using OpenAI.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/jjayna/solar-backend.git
   ```

2. Install the dependencies:

   ```bash
   cd solar-backend
   npm run install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGO_URL=<your-mongo-url>
    OPEN_AI_KEY=<your-openai-api-key>
   ```

4. Start the server:

   ```bash
   npm run start
   ```

## API Endpoints

- `POST /user/login`: Use for user login.
- `POST /user/signup` : Use for user signup.
- `POST /get-facts `: Use for getting facts about the planets.

<br>

**for details checkout the [Doc](./docs/readme.md)**

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
