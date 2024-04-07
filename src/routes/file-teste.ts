import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";

export async function fileTeste(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/", {
        schema: {
            tags: ["Services"],
            summary: "Get All service",
            response: {
                200: z.object({
                    title: z.string()
                })
            }
        }
    }, async (request, reply) => {
        reply.status(200).send({
            title: "Service Teste"
        })
    });
}
