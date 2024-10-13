"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerator = void 0;
class IdGenerator {
    constructor(startId = 1) {
        this.currentId = startId;
    }
    nextId() {
        return this.currentId++;
    }
}
exports.IdGenerator = IdGenerator;
