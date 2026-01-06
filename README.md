# Animal Wars

A TypeScript simulation where various animals battle in a tournament-style
elimination until only one remains. Built to practice TypeScript, OOP patterns, and game simulation logic.

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

#### Example Run (truncated)

```text
npm start
iteration: 0
population count: 50000
Bear (1000 hp) vs Dog (200 hp) -> Dog wins with 120 hp
iteration: 1
population count: 49999
Lion (500 hp) vs Eagle (300 hp) -> Lion wins with 260 hp
iteration: 2
population count: 49998
...
Crocodile has won!, with 540 health
```

### Running Tests

```bash
npm test
```

Coverage (optional):

```bash
npm test -- --coverage
```

## How It Works

- `main.ts` generates a population of animals and runs the main simulation loop.
- Each iteration, two animals are selected to fight (`selectTwoFighters`).
- The `fight` function simulates a turn-based battle until one animal is defeated.
- The winner is returned to the population; the process repeats until one animal remains.

## Customization

- Population size and loop duration: tweak `generateAnimals(50000)` and `duration` in `src/main.ts`.
- Animal balance: adjust `health` and `maxAttackStrength` values per species in `src/animalFactory.ts`.
- Logging output: remove or change the `console.log` calls in `src/main.ts` if you want quieter runs.

## Author

Oliver Murrell

## Issues

For bugs or feature requests, please use the [GitHub Issues](https://github.com/Oliver-Murrell/animal-wars/issues).
