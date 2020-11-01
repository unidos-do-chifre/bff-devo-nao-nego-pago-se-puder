const swaggerConfig = {
    openapi: '3.0.1',
    info: {
        title: 'Devo não nego, pago se puder',
        version: '1.0.0',
        description: 'Documentação API REST da aplicação'
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
    },
}

export default swaggerConfig;