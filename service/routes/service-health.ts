import Fastify, { FastifyInstance } from 'fastify';

export class ServiceHealthRoute {
    private fastify;
    public healthRoute  = {
        method: 'GET',
        url: '/health',
    };

    private registerRoutes() {
        this.fastify.route({
            ...this.healthRoute,
            handler: async () => {
                return { status: 'ok' };
            },
        });
    }

    constructor(fastifyInstance: FastifyInstance) {
        this.fastify = fastifyInstance;
        this.registerRoutes();
    }
}