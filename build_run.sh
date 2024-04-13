#! /bin/bash
docker container stop ten_thousand
docker container rm ten_thousand
docker build -t ten_thousand .
docker run -p 8089:80 -v ./web/:/usr/share/nginx/html/ -d --name ten_thousand ten_thousand