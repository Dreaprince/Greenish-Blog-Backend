<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://https://github.com/Dreaprince/Greenish-Blog-Backend">
    <img src="" alt="Logo" width="80" height="70">
  </a>

  <h3 align="center">Greenish-Blog-Backend</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://https://github.com/Dreaprince/Greenish-Blog-Backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">Project Structure</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Documentation</a></li>
    <li><a href="#usage">Pay Attention to</a></li>
    <li><a href="#usage">Areas to complete</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Project Structure

[![Product Name Screen Shot]['./img/project_structure']]()
<a href="">
    <img src="img/project_structure" alt="Logo" width="700" height="600">
  </a>

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description`


### Built With

* [Nodejs](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [MongoDB Compass](https://www.mongodb.com/try/download/compass)
* [Postman] (https://postman.com)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install 
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://https://github.com/Dreaprince/Greenish-Blog-Backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start The App
   ```sh
   npm start
   ```


## Documentation

This is a design of RESTFULL API of a simple blog that cover
a. Registering a user
B. Blog Post (get all post, get single post, get post with pagination, create post, update post, delete post, like post).
C. Comment (get all comment, get all comment on a single post, get single comment on a post, add, edit and delete comment).
To post on this Blog, you to register but you only need a name to comment



_For more examples, please refer to the [Documentation](https://example.com)_


## Pay Attention to

I used async and await for all the routes, But i dont want to add too much noise to my code with try and catch blocks. i want my code to be cleen and DRY.
So i design asyncMiddleware function (inside the middleware folder). The middleware function will be called before each routes.
I also move the logic to handle errors (catch block) inside another middleware function called errors. This give me an option to either use 
a. asyncMiddleware function or
b. npm package called express-async-errors
I can choose not to called the asyncMiddleware function and Promise rejection will still be handle.

## Areas to complete
I purposelly not Add authorization and Authenication expectially to the User because i was not asked to do so.





<!-- ROADMAP -->
## Roadmap

See the [open issues](https://https://github.com/Dreaprince/Greenish-Blog-Backend/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/Dreaprince) - email

Project Link: [https://https://github.com/Dreaprince/Greenish-Blog-Backend](https://https://github.com/Dreaprince/Greenish-Blog-Backend)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()





