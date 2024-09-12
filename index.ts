const server = Bun.serve({
    port: 3000,
    fetch(request) {
        const devName = "Gad";
        return new Response(`It's Bun, Hey ${devName}!`);
    },
});

console.log(`Listening on http://localhost:${server.port}!`);