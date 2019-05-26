#!/bin/sh

npm i
npm start &

sleep 15

wget http://localhost:3000/
wget http://localhost:3000/Pricing