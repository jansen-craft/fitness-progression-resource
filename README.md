# fitness-progression-resource

Part of a HACK-OH/IO project, this bun API serves the user data for use in the frontend app. The project hoped to solve the issue of modern fitness apps that require paid services to analyze your fitness trends by providing a basic visualization via a Vue frontend utilizing Chart.js.

See [Fitness Progression Webapp](https://github.com/jansen-craft/fitness-progression-webapp)

This app runs on the Bun runtime, which we had never used before the start of thee Hackathon. While working on this backend, there were many roadbumps such as misconfigured AWS RDBs, lack of local bun mySQL implementations, migration from sqlite to mySQL, and some expected type wrangling. Bun is very new and lacks support for many of the nice-to-haves that exist in node frameworks like express, but it is very promising. The speed improvements are over an order of magnitude, and we hope to come back to Bun in the future.

## Technologies

<div>
    <p>
      <a align="left" href="https://bun.sh"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" alt="Logo" height=100></a>
      <a align="right" href="https://www.mysql.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/424px-Database-mysql.svg.png?20220815123837" alt="Logo" height=100></a>
    </p>
</div>

## Setup
To install dependencies:

```bash
bun install
```

Note: In order to get this to run, you'll need to setup a valid connection to a database, or migrate back to an sqlite local database.

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.