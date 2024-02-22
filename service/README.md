# Folder Sorter Service
## Overview
The Folder Sorter Service is a Node.js application built with TypeScript and Express. It provides an API to organize hierarchical data based on a flat list of entries with paths. The service accepts JSON formatted input, processes it to generate a structured hierarchy, and returns the structured output.

## Technologies Used
- Express Server.
- TypeScript.
- Input and Output Mocks.
- Unit Testing.

## Getting Started
### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/anabeatrizdmt/lexter-algorithm-interview
```

2. Navigate to the `service` directory:
```
cd folder-sorter/service
```

3. Install the required npm packages:
```
npm install
```

### Running the Service
- To start the service, run:
```
npm start
```
- By default, the server runs on http://localhost:3001, you can change the port in the file `index.ts`.

### Running the Service
- To start the service, run:
```
npm start
```

## API Usage
### Converter Endpoint
- URL: /convert
- Method: POST
- Content-Type: application/json
- Body: JSON array of objects with entryId and path.

#### Example Request:
```
curl --request POST \
  --url http://localhost:3000/convert \
  --header 'Content-Type: application/json' \
  --data '[
    { "entryId": "1", "path": ["root1"] },
    { "entryId": "6", "path": ["root1", "path1"] }
]'
```

#### Response:
A JSON array representing the structured hierarchy based on the provided input paths.

