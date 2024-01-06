FROM node

WORKDIR /developer/nodejs/booking-service

ENV NODE_ENV=production

COPY . .

RUN npm ci

# Run Sequelize commands
RUN cd src && npx sequelize db:create
RUN cd src && npx sequelize db:migrate

CMD ["npm", "run", "dev"]

## D:\CODE\P_Ft\


#docker build -t booking-service .
#docker run -it --init -p 4000:4000 -v "D:\CODE\P_Ft\Flight-Booking-Service://developer/nodejs/booking-service" booking-service


# docker volume create booking-service-node-modules
# docker run -it --init --name booking_service --network microservice-network -p 4000:4000 -v "D:\CODE\P_Ft\Flight-Booking-Service://developer/nodejs/booking-service" -v booking-service-node-modules://developer/nodejs/booking-service/node_modules booking-service 
