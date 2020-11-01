const swaggerConfig = {
    openapi: '3.0.1',
    info: {
        title: 'Devo não nego, pago se puder',
        version: '1.0.0',
        description: 'Document crud API REST and models'
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                in: 'header',
                bearerFormat: 'JWT',
            },
        },
        schemas: {
            User: ''
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
    servers: [
        {
            url: 'http://localhost:8080/',
        }
    ],
    paths: {
        '/user/login': "",
    },
}

export default swaggerConfig;