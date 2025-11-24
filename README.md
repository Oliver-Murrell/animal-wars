# Tiny Wars (Animal Wars)

A TypeScript simulation where various animals battle until only one remains. Each animal has unique health and attack stats. The simulation runs automatically, pitting animals against each other in a tournament-style elimination until a single winner is left.

## Features

- Randomly generates a population of animals (Lion, Bear, Dog, Eagle, Monkey, Crocodile)
- Each animal has unique health and attack strength
- Animals are selected in pairs to fight until only one remains
- Fight logic simulates turn-based attacks until one animal is defeated
- Console output shows progress and the final winner

## Project Structure

```
├── src/
│   ├── animalFactory.ts   # Animal creation logic
│   ├── animals.ts         # Population generation
│   ├── battle.ts          # Fighter selection and attack calculation
│   ├── fight.ts           # Fight simulation logic
│   ├── types.ts           # Type definitions
│   ├── main.ts            # Entry point for simulation
│   ├── index.ts           # Example utility (sum)
│   └── index.test.ts      # Example tests
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Running the Simulation

```bash
npm start
```

This will run the simulation and print progress and the winner to the console.

### Running Tests

```bash
npm test
```

## How It Works

- `main.ts` generates a population of animals and runs the main simulation loop.
- Each iteration, two animals are selected to fight (`selectTwoFighters`).
- The `fight` function simulates a turn-based battle until one animal is defeated.
- The winner is returned to the population; the process repeats until one animal remains.

## Customization

- To change animal stats, edit `src/animalFactory.ts`.
- To adjust population size or simulation duration, modify the values in `src/main.ts`.

## License

ISC

## Author

Oliver Murrell

## Issues

For bugs or feature requests, please use the [GitHub Issues](https://github.com/Oliver-Murrell/animal-wars/issues).
