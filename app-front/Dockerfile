FROM node:8.11-alpine
ENV LANG C.UTF-8

# Create app directory
RUN mkdir ./app-front

WORKDIR /app-front

# Set environment variables
ENV NODE_ENV development
ENV HOST 0.0.0.0
EXPOSE 3000

# Bundle app source
RUN yarn global add vue-cli
RUN yarn install

COPY . /app-front

CMD ["yarn", "dev"]