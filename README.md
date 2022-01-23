# cablocator
### ES Modules in Node

This project uses ECMAScript Modules in the backend. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error


### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 8080
MONGO_URI = your mongodb uri
```

### Install Dependencies in root directory

```
npm install
```

### Run

```
# Run server (:8080)
npm start
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
node seeder.js

# Destroy data
node seeder.js -d
```

### Backend API's

There are three types of resources Users, Cabs, Rides. Each one has defined Modal in *models* folder using mongoose schema. Users can register and login using name, email, password.
Registered Users can create booking *rides* api. Once booking is create, it will not be confirmed until there is some cabs available for ride. System need to poll 
```/api/rides/track/:bookingId``` to check if there are some cabs available nearby. 

Generally cabs are always moving, so there location data keeps changing every few seconds. There should some driver system that should keep updating the location data of all the 
cabs in some database. Here server uses some mock cabs data present in *data/cab.js*, these data have fixed location parameters like latitude and longitude which are compared with
user's location parameters(lat and lng) to match user with the available cabs. 

Here since cabs location is fixed, logic is implemented to find cab which are within 2 miles radius of users booking lat and lng parameters.

1. Users and Auth API
 ```
 POST /api/users/register
 POST /api/users/login
 ```
 
2. Rides API
```
POST /api/rides/create
GET /api/rides/track/:bookingId
GET /api/rides/myrides
```

3. Cabs API
```
GET /api/cabs/search?address=<enter-address>
```
Some of these routes are protected by *protect* middleware, needs valid jwt token to access. Token is generated when Registered User login.
Here **node-geocoder** npm module has been used to geocode address to latitude and longitude. Provider is **openstreetmap**, sometimes few location are not geocoded
by this provider, please try with other location if you see error *openstreetmap can't geocode provided address*

## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
