# Folder Sorter Frontend
## Overview
The Folder Sorter Frontend is a React application designed to provide a user-friendly interface for the Folder Sorter Service. It allows users to input hierarchical data in a flat structure, sends the data to the backend service for processing, and displays the structured output. This frontend is built using React and TypeScript, offering a modern and responsive user experience.

## Features
- User Input Form.
- Integration with Folder Sorter Service.
- Output Display.
- Copy to Clipboard.

## Technologies Used
- React with TypeScript.
- CSS.
- Fetch API.

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
cd frontend
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
- The application will be available at http://localhost:3000 in your web browser.

## Using the Application
1. Input Data: Enter the hierarchical data in the specified JSON format in the input form.
    1. Input example:
    ```
    [	
        { "entryId": "1", "path": ["root1"] },
	    { "entryId": "6", "path": ["root1", "path1"] }
    ]
    ```
2. Convert: Click the "Convert" button to send the data to the Folder Sorter Service.
3. View Output: The structured output from the service will be displayed in the output area.
4. Copy Output: Use the "Copy result" button to copy the output to the clipboard.