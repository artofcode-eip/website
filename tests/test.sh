#!/bin/sh

npm i -g
npm start &

sleep 15

wget localhost:3000/
wget localhost:3000/Pricing