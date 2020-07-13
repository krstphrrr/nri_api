FROM node:alpine 
WORKDIR /app 
COPY package.json /app 
RUN npm install
COPY . /app
CMD node index.js 
EXPOSE 5010

# docker image build -t nri_api .
# docker container run --rm -d --name nri -p 5010:5010 nri_api