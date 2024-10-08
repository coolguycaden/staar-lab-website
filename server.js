import express from 'express';
import path from 'path';

//const express = require('express');

//const path = require('path')

// Creating express object
const app = express();

// Defining port number
const PORT = 3001;

// Function to serve all static files
// inside public directory.
app.use(express.static('public'));
//app.use('/images', express.static('images'));

// Server setup
app.listen(PORT, () => {
    console.log(`Running server on PORT ${PORT}...`);
});