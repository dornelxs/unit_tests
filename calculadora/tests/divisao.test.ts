import { divisao } from "../src/divisao";

describe("Função divisao", () => {
    test("divisão de 10 / 2 deve ser 5", () => {
        expect(divisao(10, 2)).toBe(5);
    });

    test("divisão de números negativos (-10 / 2 deve ser -5)", () => {
        expect(divisao(-10, 2)).toBe(-5);
    });

    test("divisão de dois números negativos (-10 / -2 deve ser 5)", () => {
        expect(divisao(-10, -2)).toBe(5);
    });

    test("divisão de 0 por um número negativo (0 / -5 deve ser 0)", () => {
      expect(Math.abs(divisao(0, -5))).toBe(0);
  });

  test("divisão de 0 por um número positivo (0 / 5 deve ser 0)", () => {
      expect(divisao(0, 5)).toBe(0);
  });

    test("divisão de um número positivo por 1 (10 / 1 deve ser 10)", () => {
        expect(divisao(10, 1)).toBe(10);
    });

    test("divisão de um número negativo por 1 (-10 / 1 deve ser -10)", () => {
        expect(divisao(-10, 1)).toBe(-10);
    });

    test("divisão de um número positivo por -1 (10 / -1 deve ser -10)", () => {
        expect(divisao(10, -1)).toBe(-10);
    });

    test("divisão por zero deve lançar erro", () => {
        expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
    });

    test("divisão de 0 por 0 deve lançar erro", () => {
        expect(() => divisao(0, 0)).toThrow("Divisão por zero não é permitida.");
    });

    test("divisão de números com casas decimais (5.5 / 2.2 deve ser 2.5)", () => {
      expect(divisao(5.5, 2.2)).toBeCloseTo(2.5);
    });
});