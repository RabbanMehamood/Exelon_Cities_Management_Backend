# Exelon Cities Management Backend

This project is a Node.js backend application for managing a collection of cities. It provides a set of APIs to perform CRUD operations, including creating, reading, updating, and deleting city data.

## Deployed API URL

The API is hosted at: [https://exelon-cities-management-backend.onrender.com/api/cities](https://exelon-cities-management-backend.onrender.com/api/cities)

## Endpoints

### 1. Get All Cities
- **Method**: `GET`
- **URL**: `https://exelon-cities-management-backend.onrender.com/api/cities/`
- **Description**: Retrieves a list of cities. Supports pagination, filtering, sorting, searching, and projection.
- **Response**:
    {
      "name": "San Francisco",
      "population": 883305,
      "country": "USA",
      "latitude": 37.7749,
      "longitude": -122.4194
    },...
  

### 2. Add a New City
- **Method**: `POST`
- **URL**: `/api/cities`
- **Description**: Adds a new city to the collection.
- **Request Body**:
  {
    "name": "New York",
    "population": 8419000,
    "country": "USA",
    "latitude": 40.7128,
    "longitude": -74.0060
  }

### 3. Update an Existing City
- **Method**: `PUT`
- **URL**: `/api/cities/:cityId`
- **Description**: Updates an existing city's details.
- **Request Body**:
  {
    "population": 8600000,
    "country": "USA"
  }

### 4. Delete a City
- **Method**: `DELETE`
- **URL**: `/api/cities/:cityId`
- **Description**: Deletes a city from the collection.
- **Example**: 
  DELETE https://exelon-cities-management-backend.onrender.com/api/cities/5f8f8f8f8f8f8f8f8f8f8f8f
- **Response**:
  {
    "message": "City deleted successfully"
  }

## Running Locally

To run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/RabbanMehamood/Exelon_Cities_Management_Backend.git

2. Navigate to the project directory:
   cd Exelon_Cities_Management_Backend

3. Install the dependencies:
   npm install

4. Create a `.env` file and add your MongoDB connection string:
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

5. Run the application:
   npm start

6. Visit the API locally at `http://localhost:5000/api/cities`.

## Deployment

This project is deployed using Render. You can access the live API at [https://exelon-cities-management-backend.onrender.com/api/cities](https://exelon-cities-management-backend.onrender.com/api/cities).
