import Database from "bun:sqlite";

export interface User {
    user_id: Number,
    first_name: String,
    last_name: String,
}

export class UserDatabase {
    db: Database;

    constructor (){
        this.db = new Database("db.db");

        this.db.run(
            "CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL)"
        )
    }

    getUsers(): User[]{
        return this.db.query("SELECT * FROM users").all() as User[];
    }

    getUser(id: Number): User{
        return this.db.query("SELECT * FROM users WHERE user_id=$id").get({
            $id: id.toString()
        }) as User;
    }

    deleteUser(id: Number): void{
        this.db.query("DELETE * FROM users WHERE id=$id").get({
            $id: id.toString()
        });
    }
}