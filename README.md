# E-HallPass Clone

## About
A clone of [e-hallpass](https://e-hallpass.com/) to allow you to be outside the class forever. Creates a persistent fake account for each user.

## Usage

1\. Install dependencies
```bash
npm install
```
2\. Setup [PocketBase server](#Setting-up-PocketBase)

3A.
    If running a dev server

        # No custom port
        npm run dev

        # Custom port
        npm run dev -- --port <port>
3B.
    If running on a production server, use the [build handler](build/handler.js).<br>
    
        // On a Javascript server, you can use
        import { handler } from './build/handler.js';

## Setting up PocketBase

Start pocketbase server
```bash
./pocketbase serve
```
1. Go to [PocketBase admin site](http://127.0.0.1:8090)
2. Add new collection called api with a input field called name and email field
3. Add required api rules