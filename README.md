# fitness-progression-resource

Part of a HACK-OH/IO project, this bun API serves the user data for use in the frontend app. The project hoped to solve the issue of modern fitness apps that require paid services to analyze your fitness trends by providing a basic visualization via a Vue frontend utilizing Chart.js.

This app runs on the Bun runtime, which we had never used before the start of thee Hackathon. While working on this backend, there were many roadbumps such as misconfigured AWS RDBs, lack of local bun mySQL implementations, migration from sqlite to mySQL, and some expected type wrangling. Bun is very new and lacks support for many of the nice-to-haves that exist in node frameworks like express, but it is very promising. The speed improvements are over an order of magnitude, and we hope to come back to Bun in the future.

## Technologies

<div style="display: grid; grid-template-columns: 1fr 1fr; align-content: center;">
    <p align="center">
      <a href="https://bun.sh"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" alt="Logo" height=100></a>
    </p>
    <p align="center">
      <a href="https://www.mysql.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/424px-Database-mysql.svg.png?20220815123837" alt="Logo" height=100></a>
    </p>
</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; text-align: center;">
    <h1>Bun</h1>
    <h1>MySQL</h1>
</div>

## Setup
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.