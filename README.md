# URL SHORTENER
## _Compress and tidy your URLs_

This project simply does what it says, generates short URLs for your use

## Features

- Convert a long URL into a short URL
- Get analytics as to how many times the URL was visited and their timestamps



## How to use

- Clone the project OR Download the zip
- Run the below command inside your project in the terminal
  ```sh
    npm install
  ```
- Open POSTMAN application
  - Select request type as `POST`
  - Enter the following URL in the URL bar `http://localhost:8765/url`
  - In the `Body` section:
    - Select data-format as `raw`
    - Select data-type as `JSON`
    - In the input, put in the below code, replace `your-long-url-here` with your URL
      ```sh
        {"url" : "https://www.your-long-url-here.com"}
      ```
- ✨ HIT RUN ✨

## Get Analytics

- Open POSTMAN application
- Select the request type as `GET`
- Enter the following URL in the URL bar, replacing `your-shortened-url-code` with the 8 character code received on creating the short URL
  ```sh
    http://localhost:8765/url/analytics/your-shortened-url-code
  ```
- ✨ HIT RUN ✨
 
