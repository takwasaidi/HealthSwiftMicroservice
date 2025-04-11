const express = require('express');
const bodyParser = require('body-parser');
const materialController = require('./controllers/materialController');
const Eureka = require('eureka-js-client').Eureka;

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
// Eurika 
// Eureka Client Configuration
const eurekaClient = new Eureka({
    instance: {
        app: 'material-service', // Name of the service in Eureka
        hostName: 'localhost',  // Hostname of the Node.js service
        ipAddr: '127.0.0.1',    // IP address of the Node.js service
        port: {
            $: PORT,            // Port of the Node.js service
            '@enabled': true
        },
        vipAddress: 'material-service',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn'
        }
    },
    eureka: {
        host: 'localhost',      // Eureka server hostname
        port: 8761,             // Eureka server port
        servicePath: '/eureka/apps/'
    }
});

// Start Eureka Client
eurekaClient.start((error) => {
    if (error) {
        console.error('Error registering with Eureka:', error);
    } else {
        console.log('Registered with Eureka successfully');
    }
});
// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/materials', materialController.createMaterial);
app.get('/api/materials', materialController.getAllMaterials);
app.get('/api/materials/:id', materialController.getMaterialById);
app.put('/api/materials/:id', materialController.updateMaterial);
app.delete('/api/materials/:id', materialController.deleteMaterial);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});