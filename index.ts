const server = Bun.serve({
    port: 3000,
    fetch(req: Request) {
        return new Response("Success!");
    },
});
  
console.log(`Listening on http://localhost:${server.port} ...`);
  