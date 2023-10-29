import { UserDatabase, User } from "./services/database";


async function get(req: Request): Promise<Response>{
    const url = new URL(req.url);
    if(url.pathname === "/users"){
        return new Response(JSON.stringify(await userDB.getUsers()));
    } else if (url.pathname.includes("/user/")){
        const remaining: string = url.pathname.substring(6);
        return new Response(JSON.stringify(await userDB.getUser(Number(remaining))));
    } else {
        return new Response(`No route ${url.pathname} exists for GET`);
    }
}

function post(req: Request): Response{
    const url = new URL(req.url);
    switch (url.pathname) {
        case "/user":
            // first and last name
            const str = await Bun.readableStreamToText(req.body!);
            if(req.body url.searchParams.get("first_name") && url.searchParams.get("last_name")){
                const first_name = url.searchParams.get("first_name")!;
                const last_name = url.searchParams.get("last_name")!;
                userDB.postUser(first_name, last_name);
            } else {
                return new Response("Must use valid id");
            }
        default:
            return new Response(`No route ${url.pathname} exists for POST`);
    } 
}


const userDB: UserDatabase = new UserDatabase();

const server = Bun.serve({
    port: 3000,
    fetch(req: Request) {
        switch (req.method) {
            case "GET":
                return get(req);
            case "POST":
                return post(req);
            default:
                return new Response("How did this even happen?")
        }
    },
});


console.log(`Listening on http://localhost:${server.port} ...`);