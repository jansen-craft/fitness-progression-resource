import { ConnectionOptions, createConnection } from "mysql2/promise";

let co: ConnectionOptions = {
    host: 'xxxxxxxx',
    database: 'fitness',
    port: 3306,
    user: "admin",
    password: 'xxxxxxxx',
  };

const connection = await createConnection(co);

export interface User {
    user_id: Number,
    first_name: String,
    last_name: String,
}

export class UserDatabase {
    async getUsers(): Promise<User[]>{
        let [response]: Promise<User[]> = await connection.query("SELECT * FROM users");
        return response
    }

    async getUser(id: Number): Promise<User>{
        let [response]: Promise<User> = await connection.query(`SELECT * FROM users WHERE user_id=${id}`);
        return response
    }

    postUser(fn: string, ln: string): void{
        connection.query(`INSERT INTO users (first_name, last_name) VALUES (${fn}, ${ln})`);
    }

    deleteUser(id: Number): void{
        this.db.query("DELETE * FROM users WHERE id=$id").get({
            $id: id.toString()
        });
    }
}