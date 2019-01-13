// Specifiy --out to mention the output name
// Use --watch to tell the compiler to watch for the changes and recompile

class Car {
    make: number;
    type: string;
    model: string;
    constructor(make: number, type: string, model: string) {
        this.make = make;
        this.type = type;
        this.model = model;
    }
}

// Compiled with tsc typescript-compliler.ts --out typescript-compiler.js --watch