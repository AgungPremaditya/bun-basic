import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Wellcome @Bun!");
    return new Response(body);
    return new Response("Wellcome @Bun!");
  },
  port: 3000,
});