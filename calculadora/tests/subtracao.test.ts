import { subtracao } from "../src/subtracao";

describe("Função subtracao", () => {
    test("subtração de 5 - 3 deve ser 2", () => {
        expect(subtracao(5, 3)).toBe(2);
    });

    test("subtração de números negativos (-5 - -3 deve ser -2)", () => {
        expect(subtracao(-5, -3)).toBe(-2);
    });

    test("subtração de número positivo e negativo (5 - -3 deve ser 8)", () => {
        expect(subtracao(5, -3)).toBe(8);
    });

    test("subtração de 0 por um número positivo (0 - 5 deve ser -5)", () => {
        expect(subtracao(0, 5)).toBe(-5);
    });

    test("subtração de 0 por um número negativo (0 - -5 deve ser 5)", () => {
        expect(subtracao(0, -5)).toBe(5);
    });

    test("subtração de dois zeros (0 - 0 deve ser 0)", () => {
        expect(subtracao(0, 0)).toBe(0);
    });

    test("subtração de números com casas decimais (5.5 - 2.2 deve ser 3.3)", () => {
      expect(subtracao(5.5, 2.2)).toBeCloseTo(3.3);
  });
});