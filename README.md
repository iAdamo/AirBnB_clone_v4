<div align="center">
<h1>AirBnB clone</h1>

## **Welcome to the AirBnB clone project!**
</div>

This repository contains the stages of a student project to build a clone of the AirBnB website.
- A command interpreter to manipulate data without a visual interface, like in a Shell (perfect for development and debugging)
- A website (the front-end) that shows the final product to everybody: static and dynamic
- A database or files that store data (data = objects)
- An API that provides a communication interface between the front-end and your data (retrieve, create, delete, update them)



## [**The console**](https://github.com/iAdamo/AirBnB_clone)
**`Python`** **`OOP`**
<h3>A command interpreter to manipulate data without a visual interface</h3>

***First step: The command interpreter to manage AirBnB objects.***
- This is the first step towards building full web application: the AirBnB clone. This first step is very important because it will use what is built during this project with all other following projects: HTML/CSS templating, database storage, API, front-end integration…

Each task is linked and will help to:

- put in place a parent class (called `BaseModel`) to take care of the initialization, serialization and deserialization of future instances
- create a simple flow of serialization/deserialization: Instance <-> Dictionary <-> JSON string <-> file
- create all classes used for AirBnB (`User`, `State`, `City`, `Place`…) that inherit from `BaseModel`
- create the first abstracted storage engine of the project: File storage.
- create all unittests to validate all classes and storage engine
- creating th data model
- manage (create, update, destroy, etc) objects via a console / command interpreter
- store and persist objects to a file (JSON file)

The first piece is to manipulate a powerful storage system. This storage engine will give an abstraction between “My object” and “How they are stored and persisted”. This means: from the console code (the command interpreter itself) and from the front-end and RestAPI to build later, there won’t be a need to pay attention (take care) of how the objects are stored.

This abstraction will also allow to change the type of storage easily without updating all of its codebase.

<a href=#>
    <img src="https://github.com/iAdamo/AirBnB_clone_v3/assets/106432903/6edc811d-0009-4a20-936a-7b31d766f331" width=50% alt="console">
</a>

### General Use

1. First clone this repository.

3. Once the repository is cloned locate the "console.py" file and run it as follows:
```
/AirBnB_clone$ ./console.py
```
4. When this command is run the following prompt should appear:
```
(hbnb)
```
5. This prompt designates you are in the "HBnB" console. There are a variety of commands available within the console program.


### Commands
    * create - Creates an instance based on given class

    * destroy - Destroys an object based on class and UUID

    * show - Shows an object based on class and UUID

    * all - Shows all objects the program has access to, or all objects of a given class

    * update - Updates existing attributes an object based on class name and UUID

    * quit - Exits the program (EOF will as well)


### Alternative Syntax
Users are able to issue a number of console command using an alternative syntax:

    Usage: <class_name>.<command>([<id>[name_arg value_arg]|[kwargs]])
Advanced syntax is implemented for the following commands:

    * all - Shows all objects the program has access to, or all objects of a given class

    * count - Return number of object instances by class

    * show - Shows an object based on class and UUID

    * destroy - Destroys an object based on class and UUID

    * update - Updates existing attributes an object based on class name and UUID

<br>
<br>

### Examples
#### Primary Command Syntax

###### Example 0: Create an object
Usage: create <class_name>
```
(hbnb) create BaseModel
```
```
(hbnb) create BaseModel
3aa5babc-efb6-4041-bfe9-3cc9727588f8
(hbnb)
```
###### Example 1: Show an object
Usage: show <class_name> <_id>

```
(hbnb) show BaseModel 3aa5babc-efb6-4041-bfe9-3cc9727588f8
[BaseModel] (3aa5babc-efb6-4041-bfe9-3cc9727588f8) {'id': '3aa5babc-efb6-4041-bfe9-3cc9727588f8', 'created_at': datetime.datetime(2020, 2, 18, 14, 21, 12, 96959),
'updated_at': datetime.datetime(2020, 2, 18, 14, 21, 12, 96971)}
(hbnb)
```
###### Example 2: Destroy an object
Usage: destroy <class_name> <_id>
```
(hbnb) destroy BaseModel 3aa5babc-efb6-4041-bfe9-3cc9727588f8
(hbnb) show BaseModel 3aa5babc-efb6-4041-bfe9-3cc9727588f8
** no instance found **
(hbnb)
```
###### Example 3: Update an object
Usage: update <class_name> <_id>
```
(hbnb) update BaseModel b405fc64-9724-498f-b405-e4071c3d857f first_name "person"
(hbnb) show BaseModel b405fc64-9724-498f-b405-e4071c3d857f
[BaseModel] (b405fc64-9724-498f-b405-e4071c3d857f) {'id': 'b405fc64-9724-498f-b405-e4071c3d857f', 'created_at': datetime.datetime(2020, 2, 18, 14, 33, 45, 729889),
'updated_at': datetime.datetime(2020, 2, 18, 14, 33, 45, 729907), 'first_name': 'person'}
(hbnb)
```
<h3>Alternative Syntax</h3>

###### Example 0: Show all User objects
Usage: <class_name>.all()
```
(hbnb) User.all()
["[User] (99f45908-1d17-46d1-9dd2-b7571128115b) {'updated_at': datetime.datetime(2020, 2, 19, 21, 47, 34, 92071), 'id': '99f45908-1d17-46d1-9dd2-b7571128115b', 'created_at': datetime.datetime(2020, 2, 19, 21, 47, 34, 92056)}", "[User] (98bea5de-9cb0-4d78-8a9d-c4de03521c30) {'updated_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134362), 'id': '98bea5de-9cb0-4d78-8a9d-c4de03521c30', 'created_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134343)}"]
```

###### Example 1: Destroy a User
Usage: <class_name>.destroy(<_id>)
```
(hbnb) User.destroy("99f45908-1d17-46d1-9dd2-b7571128115b")
(hbnb)
(hbnb) User.all()
(hbnb) ["[User] (98bea5de-9cb0-4d78-8a9d-c4de03521c30) {'updated_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134362), 'id': '98bea5de-9cb0-4d78-8a9d-c4de03521c30', 'created_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134343)}"]
```
###### Example 2: Update User (by attribute)
Usage: <class_name>.update(<_id>, <attribute_name>, <attribute_value>)
```
(hbnb) User.update("98bea5de-9cb0-4d78-8a9d-c4de03521c30", name "Todd the Toad")
(hbnb)
(hbnb) User.all()
(hbnb) ["[User] (98bea5de-9cb0-4d78-8a9d-c4de03521c30) {'updated_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134362), 'id': '98bea5de-9cb0-4d78-8a9d-c4de03521c30', 'name': 'Todd the Toad', 'created_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134343)}"]
```
###### Example 3: Update User (by dictionary)
Usage: <class_name>.update(<_id>, <dictionary>)
```
(hbnb) User.update("98bea5de-9cb0-4d78-8a9d-c4de03521c30", {'name': 'Fred the Frog', 'age': 9})
(hbnb)
(hbnb) User.all()
(hbnb) ["[User] (98bea5de-9cb0-4d78-8a9d-c4de03521c30) {'updated_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134362), 'name': 'Fred the Frog', 'age': 9, 'id': '98bea5de-9cb0-4d78-8a9d-c4de03521c30', 'created_at': datetime.datetime(2020, 2, 19, 21, 47, 29, 134343)}"]
```


## [**Web static**](https://github.com/iAdamo/AirBnB_clone_v2/tree/main/web_static)
**`HTML`** **`CSS`** **`Front-end`**

<a href=#>
    <img src="https://github.com/iAdamo/AirBnB_clone_v3/assets/106432903/e6ecf9a9-6194-42c8-9e21-7cdd2e4ab2dd" width=50% alt="web_static">
</a>

Now that there is a command interpreter for managing the AirBnB objects, it’s time to make them alive!

Before developing a big and complex web application, we had to build the front end step-by-step.

The first step was to “design” / “sketch” / “prototype” each element:

- Create simple HTML static pages
- Style guide
- Fake contents
- No Javascript
- No data loaded from anything

We manipulated HTML and CSS languages. HTML is the structure of the page, it should be the first thing to write. CSS is the styling of the page, the design. *I really encourage you to fix your HTML part before starting the styling. Indeed, without any structure, you can’t apply any design.*

## [**MySQL storage**](https://github.com/iAdamo/AirBnB_clone_v2)
**`Python`** **`OOP`** **`Back-end`** **`SQL`** **`MySQL`** **`ORM`** **`SQLAlchemy`**

<a href=#>
    <img src="https://github.com/iAdamo/AirBnB_clone_v3/assets/106432903/94462649-e0c4-4e75-bc86-3f17df420eed" width=50% alt="storage">
</a>

In this project, we will link two amazing worlds: Databases and Python!
- replace the file storage by a Database storage
- map your models to a table in database by using an O.R.M.

We will be using the module SQLAlchemy (don’t ask me how to pronounce it…) an Object Relational Mapper (ORM).

The purpose of an ORM is to abstract the storage to the usage. With an ORM, your biggest concern will be “What can I do with my objects” and not “How this object is stored? where? when?”. You won’t write any SQL queries only Python code. Last thing, your code won’t be “storage type” dependent. You will be able to change your storage easily without re-writing your entire project.

*This storage engine will give an abstraction between “My object” and “How they are stored and persisted”. This means: from the console code (the command interpreter itself) and from the front-end and RestAPI to build later, there won’t be a need to pay attention (take care) of how the objects are stored.*

## [**Deploy static**](https://github.com/iAdamo/AirBnB_clone_v2)
**`DevOps`** **`Python`** **`SysAdmin`** **`Scripting`** **`CI/CD`**

Ever since th completed project [**Load balancer**](https://github.com/iAdamo/alx-system_engineering-devops/tree/main/0x0F-load_balancer) of the SysAdmin track, we’ve had 2 web servers + 1 load balancer but nothing to distribute with them.

It’s time to make the work public!

In this first deployment project, you will be deploying your **web_static** work. You will use **Fabric** (for Python3).

Fabric is a Python library and command-line tool for streamlining the use of SSH for application deployment or systems administration tasks. It provides a basic suite of operations for executing local or remote shell commands (normally or via sudo) and uploading/downloading files, as well as auxiliary functionality such as prompting the running user for input, or aborting execution.

This concept is important: execute commands locally or remotely. Locally means in your laptop (physical laptop or inside your Vagrant), and Remotely means on your server(s).

Fabric is taking care of all network connections (SSH, SCP etc.), it’s an easy tool for transferring, executing, etc. commands from locale to a remote server.

## [**Web framework - templating**](https://github.com/iAdamo/AirBnB_clone_v2)
**`Python`** **`Back-end`** **`Webserver`** **`Flask`**

A web framework is a software framework designed to aid the development of web applications, including web services, web resources, and web APIs. It provides a structure and a set of tools for building and managing web applications, making it easier for developers to create robust and scalable web projects.

<a href=#>
    <img src="https://s3.amazonaws.com/intranet-projects-files/concepts/74/hbnb_step3.png" width=50% alt="flask">
</a>

## [**RESTful API**](https://github.com/iAdamo/AirBnB_clone_v3)
**`Python`** **`Back-end`** **`API`** **`Webserver`** **`Flask`**
- expose all your objects stored via a JSON web interface
- manipulate your objects via a RESTful API

<a href=#>
    <img src="https://github.com/iAdamo/AirBnB_clone_v3/assets/106432903/cfb48431-f537-40cd-a0ea-aa7d3c5d2644" width=50% alt="flask">
</a>

REST API is a software architectural style for Backend.

**`REST = “REpresentational State Transfer”. API = Application Programming Interface`**

Its purpose is to induce performance, scalability, simplicity, modifiability, visibility, portability, and reliability.

REST API is **Resource-based**, a resource is an object and can be access by a URI. An object is “displayed”/transferred via a **representation** (typically JSON). HTTP methods will be actions on a resource.

Example:

- Resource: Person (John)
- Service: contact information (GET)
- Representation:
    - first_name, last_name, date_of_birth
    - JSON format

### RESTful API Constraints

#### 1. Uniform Interface
- Define the interface between client-server
- Simple and can be split into small parts
- HTTP verbs
  - **GET:** Read representation of a resource or a list of resources
  - **POST:** Create a new resource
  - **PUT:** Update an existing resource
  - **DELETE:** Remove an existing resource

##### URIs - resource name
A resource representation is accessible by a URI:
- `GET /users`: path for listing all user resources
- `GET /users/12`: path for the user id = 12
- `GET /users/12/addresses`: path for listing all addresses of the user id = 12
- `POST /users`: path for creating a user resource
- `PUT /users/12`: path for updating the user id = 12
- `DELETE /users/12/addresses/2`: path for deleting the address id = 2 of the user id = 12

##### HTTP Response
In the HTTP Response, the client should verify the information of two things:
- **status code:** result of the action
- **body:** JSON or XML representation of resources

Some important status codes:
- `200`: OK
- `201`: created => after a `POST` request
- `204`: no content => can be returned after a `DELETE` request
- `400`: bad request => the server doesn’t understand the request
- `401`: unauthorized => client user can’t be identified
- `403`: forbidden => client user is identified but not allowed to access a resource
- `404`: not found => resource doesn’t exist
- `500`: internal server error

#### 2. Stateless

- The server is independent of the client.
- The server doesn’t store user client information/state.
- Each request contains enough context to process it (HTTP Headers, etc.)
  
#### 3. Cacheable

- All server responses (resource representation) are cacheable:
  - Explicit
  - Implicit
  - Negotiated
- Caches are here to improve performances.
- In a REST API, clients don’t care about the caching strategy, if the resource representation comes from a cache or from a database…

#### 4. Client-Server

- REST API is designed to separate Client from the Server.
- The server doesn’t know who is talking to it.
- Clients are not concerned with data storage => the portability of client code is improved.
- Servers are not concerned with the user interface or user state so that servers can be simpler and more scalable

#### 5. Layered System

- Client can’t assume direct connection to server.
- Intermediary servers may improve system scalability by enabling load-balancing and by providing shared caches.
- Layers may also enforce security policies.

#### 6. Code on Demand (optional)

- Server can temporarily:
  - Transfer logic to client
  - Allow client to execute logic
- Example: JavaScript

## [**Web dynamic**](https://github.com/iAdamo/AirBnB_clone_v3)
**`Python`** **`Front-end`** **`JavaScript`**
- JQuery
- Load objects from the client side by using your own RESTful API

<a href=#>
    <img src="https://github.com/iAdamo/AirBnB_clone_v3/assets/106432903/e18b8b12-e53d-4a74-a8cd-f1504147fc7d" width=50% alt="flask">
</a>



### **`Collaborators:`**
* [**Adam Sanusi Babatunde**](https://github.com/iAdamo)
* [**Olaoluwa Hassan**](https://github.com/hassanyoung1)
* [**Linda Ihuoma Nwanchukwu**](https://github.com/lyndha)
* [**Mary Tolulope Bakare**](https://github.com/MercifulMary)


### **`Author:`** [Adam Sanusi Babatunde](https://github.com/iAdamo)
