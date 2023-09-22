# E-HallPass Clone

## About
A clone of [e-hallpass](https://e-hallpass.com/) to allow you to be outside the class forever. Creates a persistent fake account for each user.

## Usage
To install then run, do: 
```bash
# Installing dependencies
npm install

# Running server
npm run dev

# To open the network 
npm run dev -- --host
```

## Changing ports

### `--p <port>`

Speicifies the port you want to use. Use port 80 to not have to specify the port when connecting via the web. Make sure that it doesnt interfere with other running applications that are using the same port

## Features (Some may not be implimented yet, check to-do list)
* Persistent account data
    -
    - Uses cookies to store account data
    - Stores name, email, and school
* Account verification
* Creating passes
* Persistent passes
* Removing passes with fake staff credentials
* Fake pass history
* Modifiable pass history
* Working sidebar
* Working navbar
* Most functionality from the offical [e-hallpass](https://e-hallpass.com/)

## Routes
* passes
    - activepass
    - create
* id-card
* appointments
* updates
* user-settings
* login

## Node Packages
npm modules used: 
* Sveltekit
* Tailwindcss
* Autoprefixer
* Postcss

## TO-DO
* Sidebar
    - Different background color for selected page
    - Proper redirects on buttons
    - Training drop down
* Navbar
    - Help menu button

