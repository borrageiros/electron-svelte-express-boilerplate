
# Electron Svelte Express Boilerplate

This boilerplate provides a solid foundation for developing **Windows applications** using a full-stack web application developed with **HTML, CSS, and JavaScript** (front-end, back-end, and local database).  
While initially configured for Windows, it can be adapted for Linux applications as well.

The build will provide you with a portable version and a "setup.exe".

This application is a comprehensive "all-in-one" solution, which deploys all necessary services with a single command.

It is built upon:

- **Compiler**: Utilizes Electron for compiling the application.
- **Graphical Interface**: Employs Vite and Svelte to create a smooth and responsive user interface.
- **API**: Utilizes ExpressJS for seamless communication with the computer.
- **Database**: Implements NeDB - a noSql database offering persistent storage in local files.

![screenshot](./screenshot.jpg)

## 🚧 | Prerequisites
- [Node.js >= 20](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## 📝 | Installation

The boilerplate consists of two important parts:  
**server side**: contains Electron, the Express API, and the database  
**client side**: contains the interface, which can be edited as needed and then built into static files for Electron to use.

- **Install requirements**
    ```bash
    yarn installation
    ```
    > This command installs the required dependencies by running "yarn install" in both the main project and the interface project.

- **Configuration**
    - Rename ".env_example" to ".env"
    - Environment variables:
    ```plaintext
    DEBUG=TRUE/FALSE        -   Enables or disables live changes view in Electron using "yarn dev"
    CONSOLE=TRUE/FALSE      -   Displays browser development tools in Electron using "yarn dev"
    ```

- **Development**
    > This command opens a window in your browser and a previewing of the Electron application.
    ```bash
    yarn dev
    ```
    > Alternatively, you can simply open the client using:
    ```bash
    yarn serve:client
    ```
    > Similarly, there are also the following commands:  
    - start - Runs only Electron, with the static web files generated in the "build" folder hosted in the "interface" folder.  
    ```bash
    yarn start
    ```
    - start:client - Runs only the Svelte /client project
    ```bash
    yarn start:client
    ```

- **Build**
    > This command builds the Svelte project (client) into a static folder. It then generates a "dist" folder with the "windows-unpacked" version and an "app-setup.exe" inside.
    ```bash
    yarn build
    ```
    > Alternatively, you can build the Svelte project in static version, with the "www" folder being named "interface":
    ```bash
    yarn build:client
    ```

## ℹ | Info
**🔴 Default ports of the application in dev mode:**

- Interface: 57805

- API: 57806

**🔴 Database use example:**  

There are 4 API requests showing examples of basic usage of the local database, whose functions are defined in "database/db.js"  
Default URL: http://localhost:57806
***
- **/insert-example**  
    - Method: POST
    - Example body (JSON):  
        ```bash
        {
            "name": "John",
            "age": 32
        }
        ```
    - Response:
        ```bash
        {
            "data": {
                "name": "John",
                "age": 32,
                "_id": "jNofwTqfxvh8vP0e"
            }
        }
        ```
***
- **/find-example/:id**
    - Method: GET
    - Url params: id
    - Response:
        ```bash
        {
            "data": [
                {
                    "name": "John",
                    "age": 32,
                    "_id": "jNofwTqfxvh8vP0e"
                }
            ]
        }
        ```
***
- **/update-example/:id**
    - Method: PUT
    - Url params: id
    - Example body (JSON):  
        ```bash
        {
            "name": "Oscar",
            "age": 37
        }
        ```
    - Response:
        ```bash
        {
            "message": "Document updated successfully.",
            "data": [
                {
                    "name": "Oscar",
                    "age": 37,
                    "_id": "jNofwTqfxvh8vP0e"
                }
            ]
        }
        ```
***
- **/remove-example/:id**
    - Method: DELETE
    - Url params: id
    - Response:
        ```bash
        {
            "message": "Document removed successfully."
        }
        ```