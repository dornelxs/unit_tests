import { soma } from "../src/soma";

describe("Função soma", () => {
    test("soma de 2 + 3 deve ser 5", () => {
        expect(soma(2, 3)).toBe(5);
    });

    test("soma de números negativos (-2 + -3 deve ser -5)", () => {
        expect(soma(-2, -3)).toBe(-5);
    });

    test("soma de número positivo e negativo (5 + -3 deve ser 2)", () => {
        expect(soma(5, -3)).toBe(2);
    });

    test("soma de 0 com um número positivo (0 + 5 deve ser 5)", () => {
        expect(soma(0, 5)).toBe(5);
    });

    test("soma de 0 com um número negativo (0 + -5 deve ser -5)", () => {
        expect(soma(0, -5)).toBe(-5);
    });

    test("soma de dois zeros (0 + 0 deve ser 0)", () => {
        expect(soma(0, 0)).toBe(0);
    });

    test("soma de números com casas decimais (1.5 + 2.3 deve ser 3.8)", () => {
      expect(soma(1.5, 2.3)).toBeCloseTo(3.8);
  });
});