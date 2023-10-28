import { UserDatabase, User } from "./services/database";

// const dummies: User[] = [
//     {user_id: -1, first_name: "John", last_name: "Doe"},
//     {user_id: -1, first_name: "Jane", last_name: "Doe"},
//     {user_id: -1, first_name: "Tin", last_name: "Vuong"},
// ]
// const insertUser = db.prepare("INSERT INTO users (first_name, last_name) VALUES ($firstName, $lastName);");
// const insertUsers = db.transaction(dummies => {
//   for (const user of dummies) insertUser.run({$firstName: user.firstName, $lastName: user.lastName});
// });
// insertUsers.immediate(dummies);

function get(req: Request): Response{
    const url = new URL(req.url);
    switch (url.pathname) {
        case "/users":
            return new Response(JSON.stringify(userDB.getUsers()));
        case "/user":
            return new Response(JSON.stringify(userDB.getUser(Number(url.searchParams.get("id")))));
        default:
            return new Response(`No route ${url.pathname} exists`);
    } 
}


const userDB: UserDatabase = new UserDatabase();

const server = Bun.serve({
    port: 3000,
    fetch(req: Request) {
        switch (req.method) {
            case "GET":
                return get(req);
            default:
                return new Response("How did this even happen?")
        }
    },
});


console.log(`Listening on http://localhost:${server.port} ...`);