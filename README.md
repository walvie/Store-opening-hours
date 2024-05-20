# Store-opening-hours

## Description

A simple REST API built with Node.js for managing a stores opening hours.

Developed for the CPNV ES interview, this project follows the instructions outlined [here](https://github.com/CPNV-ES/2024_Code_Entretien/blob/main/README.md)

## Prerequisites

### Node.js

For this project, node version 12.0.0 or higher is requried.

To ensure you have `Node.js` installed you can run the following command:

```bash
node -v
```

### npm

For this project, npm version 6.0.0 or higher is required.

To ensure you have `npm` installed you can run the following command:

```bash
npm -v
```

## Installation

1. Clone the repository:

   To clone this repository, you can use the following command in the desired folder:
   
   ```bash
   git clone https://github.com/walvie/Store-opening-hours.git
   ```

3. Install dependencies:

   In the cloned repository, execute the following command:
   
   ```bash
   npm install
   ```

4. Configure environment variables:

   You can configure the port in which the REST API will start on in the `.env` file

5. Start the server:

   ```bash
   npm start
   ```

## Usage

### Endpoints

`GET /api/store/isopen` : Get if the store is open.

`GET /api/store/nextopendate` : Get the next date and time the store is open.

### Request and Response Examples

#### Request:

```http
GET /api/store/isopen
```

#### Response:

```json
{
    "isOpen": false
}
```

#### Request:

```http
GET /api/store/nextopendate?date=2024-05-21T09:00:00.000
```

#### Response:

```json
{
    "nextOpenDate": "2024-05-21T14:00:00.000"
}
```

## Testing

You can run the tests with:

```bash
npm test
```

## Directory architecture

```bash
├── src/
│   ├── controllers/
│   │   └── storeController.js
│   ├── data/
│   │   └── openingHours.json
│   ├── models/
│   │   └── openingHours.js
│   ├── routes/
│   │   └── storeRoutes.js
│   ├── utils/
│   │   ├── dateUtils.js
│   │   └── openingHoursUtils.js
│   ├── app.js
│   └── server.js
├── tests/
│   └── store.test.js
├── .env
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

## License

This project is licensed under the MIT License - see the `LICENSE` file for more details.
