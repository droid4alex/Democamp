# Democamp

## [Link to live site](https://democamp-app.herokuapp.com/#/)

![splash](https://github.com/droid4alex/Democamp/raw/main/app/assets/images/democamp.gif)

## Table of contents

  * [Description](#description)
  * [Framework](#framework)
  * [Features](#features)
    * [User Auth](#user-auth)
    * [Nav](#nav)
    * [Projects](#projects)
    * [Todos](#todos)
    * [Messages](#messages)
    * [Schedule](#schedule) 

## Description

Democamp is a partial clone of Basecamp, an application for project management. The website has login and signup pages which allows the user to create an account or sign in. The user can try a demo login to test out our features if the user does not want to sign up for an account. There is a navigation bar at the top of the site to allow users to navigate through helpful options. Once users are logged in to Democamp they are redirected to the user dashboard. The user dashboard lists all project titles and descriptions that users have created. Each projects index page shows the cards for the todos, messages, and schedule components. Each components page shows the details for that component.

## Framework

Democamp is a full stack web application.
* Backend framework: Ruby on Rails. Allows for increased scalability and efficiency, for example, by avoiding N+1 queries. 
* Frontend framework: Redux and React (store and components). Creates a dynamic, efficient, and user-friendly single-page web application. 
* Relational database management system: PostgresSQL. Ensures an object-oriented database that is both highly compatable and capable. 
* Container-based cloud platform: Heroku Server. Hosts our database and file repository via syncing our github applicaton repository. 
* Project/module bundler: Webpack. Used to ensure all JavaScript depenencies are managed correctly.

## Features
### User Auth 

* Users can sign up and create an account
* Users can demo a demo account if they do not want to create an account
* Users can edit their user settings
* User is redirected to the projects dashboard once logged in
* Login and signup form inputs include the a regex pattern attribute to ensure accurate validation of value
  * For example, see Email form input code below:
```javascript
  <label>Email
    <input type="email"
      value={this.state.email}
      onChange={this.update('email')}
      className="login-input"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    />
  </label>
```

### Nav

* Nav bar is always available
* Nav bar changes depending on if a user a logged in or not
* Nav bar for non-logged in users shows tips for beginners
* Nav bar for logged in users shows a link for home, user profile settings and user menu
* User menu is an icon customized for every user to show the first letter of their name and a color
  * For example, see user-icon code below:
```javascript
  <ul className="top-nav__list">
    <li className="top-nav__list-item">
      <a className="button button--secondary" id="user-icon">
        {currentUser.name[0].toUpperCase()}
      </a>
    </li>
    <li className="top-nav__list-item">
      <button className="button-login" onClick={logout}>
        Log Out
      </button>
    </li>
  </ul>
```
### Projects

* Projects dashboard shows all projects users have created
* Projects dashboard includes a title and description, and is associated with 1 team that includes many users
* Projects dashboard allows users to create, edit, or remove a project
* Projects dashboard links to each individual project's todos, messages, or schedule

### Todos

* Todos index is available as a to-do-list for each project
* Todos have a title, status and due date
* Todos are assigned to 1 user who is responsible for updating the todo's status

### Messages

* Messages index is available as a message board for each project
* Messages have a title and body for full page comments
* Messages show the author who posted them as well as any reply messages
* Reply messages have a body for full page comments and are only associated with 1 parent message

### Schedule

* Schedule is available for each project
* Schedule is viewed as a monthly calendar
* Schedule shows all the todo due dates for each project
