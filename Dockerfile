FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Bladeh3x/BLADE-MD-V2.git /root/Bladeh3x

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Bladeh3x/node_modules

# Install dependencies
WORKDIR /root/Bladeh3x
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
