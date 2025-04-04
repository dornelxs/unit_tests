import { multiplicacao } from "../src/multiplicacao";

describe("Função multiplicacao", () => {
    test("multiplicação de 4 * 3 deve ser 12", () => {
        expect(multiplicacao(4, 3)).toBe(12);
    });

    test("multiplicação de números negativos (-4 * -3 deve ser 12)", () => {
        expect(multiplicacao(-4, -3)).toBe(12);
    });

    test("multiplicação de número positivo e negativo (4 * -3 deve ser -12)", () => {
        expect(multiplicacao(4, -3)).toBe(-12);
    });

    test("multiplicação de 0 por um número positivo (0 * 5 deve ser 0)", () => {
        expect(multiplicacao(0, 5)).toBe(0);
    });

    test("multiplicação de 0 por um número negativo (0 * -5 deve ser 0)", () => {
      expect(Math.abs(multiplicacao(0, -5))).toBe(0);
  });

  test("multiplicação de dois zeros (0 * 0 deve ser 0)", () => {
      expect(multiplicacao(0, 0)).toBe(0);
  });

    test("multiplicação de um número por 1 (5 * 1 deve ser 5)", () => {
        expect(multiplicacao(5, 1)).toBe(5);
    });

    test("multiplicação de um número por -1 (5 * -1 deve ser -5)", () => {
        expect(multiplicacao(5, -1)).toBe(-5);
    });

    test("multiplicação de números com casas decimais (1.5 * 2.2 deve ser 3.3)", () => {
        expect(multiplicacao(1.5, 2.2)).toBeCloseTo(3.3);
    });
});