const fastify = require('fastify')({ logger: true });
const port = Number(process.env.PORT || 3000);

fastify.addHook('onRequest', async (request, reply) => {
  const origin = request.headers.origin;
  if (typeof origin === 'string' && origin) {
    reply.header('Access-Control-Allow-Origin', origin);
  }
});

fastify.get('/', async () => ({ ok: true, app: 'dummy-cors' }));

fastify.listen({ port, host: '0.0.0.0' }).catch((error) => {
  fastify.log.error(error);
  process.exit(1);
});
