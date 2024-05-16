#  use official node js iamge as our base
FROM node:18

# set working directory inside container
WORKDIR /usr/src/app


# Copy package and packgae lock
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy rest of source code into container
COPY . .

# Expose the port the app will run on
EXPOSE 5501

#  Command  to run our code  or 
CMD ["npm","run","dev"]

# 14:42

