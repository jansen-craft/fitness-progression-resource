# fitness-progression-resource

Part of a HACK-OH/IO project, this bun API serves the user data for use in the frontend app. The project hoped to solve the issue of modern fitness apps that require paid services to analyze your fitness trends by providing a basic visualization via a Vue frontend utilizing Chart.js.

This app runs on the Bun runtime, which we had never used before the start of thee Hackathon. While working on this backend, there were many roadbumps such as misconfigured AWS RDBs, lack of local bun mySQL implementations, migration from sqlite to mySQL, and some expected type wrangling. Bun is very new and lacks support for many of the nice-to-haves that exist in node frameworks like express, but it is very promising. The speed improvements are over an order of magnitude, and we hope to come back to Bun in the future.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
