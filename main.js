import { generateEmployee, generateRandomBirthdate } from "./src/employee.js";

/**
 * Main application function.
 * Generates a list of employees based on input parameters.
 *
 * @param {object} dtoIn - Input object containing generation settings.
 * @param {number} dtoIn.count - Number of employees to generate.
 * @param {object} dtoIn.age - Age interval object.
 * @param {number} dtoIn.age.min - Minimum allowed age (inclusive).
 * @param {number} dtoIn.age.max - Maximum allowed age (inclusive).
 *
 * @returns {Array} List of generated employees with structure:
 * [
 *   {
 *     name: string,
 *     surname: string,
 *     gender: "male" | "female",
 *     birthdate: string (ISO format),
 *     workload: number (10 | 20 | 30 | 40)
 *   }
 * ]
 */

export function main(dtoIn) {
  const { count, age } = dtoIn;
  const minAge = age.min;
  const maxAge = age.max;

  if (typeof count !== "number" || count <= 0) {
    throw new Error("Invalid 'count' value in dtoIn.");
  }
  if (
    typeof minAge !== "number" ||
    typeof maxAge !== "number" ||
    minAge > maxAge
  ) {
    throw new Error("Invalid age interval in dtoIn.");
  }

  const employees = [];
  for (let i = 0; i < count; i++) {
    employees.push(generateEmployee(minAge, maxAge));
  }

  return employees;
}


