# Excel Data Upload to MongoDB using Node

## Introduction

This is a simple project to upload excel data to MongoDB using NodeJS. The excel data is converted to JSON and then uploaded to MongoDB.

## Installation

1. Clone the repository
2. Run `npm install`
3. Open another terminal and change directory to frontend
4. Run `npm install` again
5. Now we have two ways to start the application
    1. Run `npm run dev` in the root directory
    2. Run `npm start` in the root directory and `npm start` in the frontend directory
6. Add your MongoDB connection string in the `.env` file in the root directory with key `MONGO_URI`

## Usage

1. Upload an excel file
2. Click on the `Upload` button
3. Select the sheet you want to upload
4. The data will be uploaded to MongoDB
