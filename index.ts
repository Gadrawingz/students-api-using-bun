// Starting with first package
import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        // Local Variables
        const devName = "Gad";
        const figletTest = figlet.textSync("Gad!");

        return new Response(figletTest);
        return new Response(`This is Bun, Hey ${devName}!`);
    },
});

console.log(`Listening on http://localhost:${server.port}!`);