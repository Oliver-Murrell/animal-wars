import { Animal } from "./types"
import { AnimalType, spawnAnimal } from "./animalFactory";

const typesOfAnimals: AnimalType[] = ['Lion', 'Bear', 'Dog', 'Eagle', 'Monkey', 'Crocodile'];

export const generateAnimals = (numberOfAnimals: number) => {
    const tempArray = []

    for(let i = 0; i < numberOfAnimals; i++){
        const randomNumber = Math.floor(Math.random() * typesOfAnimals.length); // 0 to 5

        const typeOfAnimal = typesOfAnimals[randomNumber];
        const animal = spawnAnimal(typeOfAnimal!);

        tempArray.push(animal);
    }

    return tempArray;
}