# Server using Node.js

This project is a simple HTTP server built using Node.js. The server serves an HTML homepage, handles dynamic URLs for user-specific pages, provides an API endpoint, and returns appropriate responses for bad requests.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Features

- Serves a static HTML homepage.
- Handles dynamic URLs to serve personalized user pages.
- Provides an API endpoint to serve JSON data.
- Returns 404 for unknown routes.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/theNewtonCode/Server-using-Node.js.git
    cd simple-http-server
    ```

2. Install the required dependencies:

    ```sh
    npm install
    ```

3. Create the necessary directories and files if they do not exist:

    ```sh
    mkdir -p Frontend/static Backend
    touch Backend/users.txt Frontend/static/index.html Frontend/static/api_data/text.txt
    ```

4. Populate `Backend/users.txt` with usernames (one per line):

    ```txt
    user1
    user2
    ```

5. Add content to `Frontend/static/index.html`:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homepage</title>
    </head>
    <body>
        <h1>Welcome to the Homepage</h1>
    </body>
    </html>
    ```

6. Add some text content to `Frontend/static/api_data/text.txt`.

## Usage

1. Start the server:

    ```sh
    node server.js
    ```

2. Open your browser and navigate to `http://127.0.0.1:3000`.

3. To access a user-specific page, navigate to `http://127.0.0.1:3000/users/username`, where `username` is a name listed in `Backend/users.txt`.

4. To access the API endpoint, navigate to `http://127.0.0.1:3000/api/data`.

## File Structure

- `Backend/`
  - `users.txt`: File containing usernames.
- `Frontend/`
  - `static/`
    - `index.html`: HTML file for the homepage.
    - `api_data/`
      - `text.txt`: File containing text data for the API endpoint.
- `server.js`: Main server file.

## License

This project is licensed under the MIT License.
