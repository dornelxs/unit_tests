# Calculadora em TypeScript com Testes Unitários
Este projeto implementa uma calculadora simples em TypeScript com as operações de soma, subtração, multiplicação e divisão. Além disso, inclui testes unitários utilizando o framework Jest.

# Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação
  ### 1. Clone o repositório:
 ```bash
git clone https://github.com/dornelxs/unit_tests.git
cd calculadora
````
  ### 2. Instale as dependências do projeto:
 ```bash
npm install
````
# Estrutura do projeto
 ```bash
├── src/                  # Código-fonte em TypeScript
│   ├── soma.ts           # Função de soma
│   ├── subtracao.ts      # Função de subtração
│   ├── multiplicacao.ts  # Função de multiplicação
│   ├── divisao.ts        # Função de divisão
├── tests/                # Testes unitários
│   ├── soma.test.ts
│   ├── subtracao.test.ts
│   ├── multiplicacao.test.ts
│   ├── divisao.test.ts
├── dist/                 # Código compilado em JavaScript (gerado após build)
├── package.json          # Configuração do projeto e dependências
├── tsconfig.json         # Configuração do TypeScript
└── jest.config.js        # Configuração do Jest
````

## Scripts disponíveis 
- Compilar código TypeScript:
  
   ```bash
  npm tsc
  ````
   Isso compilará os arquivos **TypeScript** da pasta **src** para **JavaScript** na pasta **dist**.

- Executar os testes unitários:

   ```bash
  npm test
  ````

## Sobre os testes
Os testes estão localizados na pasta **tests** e cobrem os seguintes cenários:

  - Soma:
    - Soma de números positivos, negativos e zero.
    - Soma de números com casas decimais.
  
  - Subtração:
    - Subtração de números positivos, negativos e zero.
    - Subtração de números com casas decimais.
  
  - Multiplicação:
    - Multiplicação de números positivos, negativos e zero.
    - Multiplicação de números com casas decimais.
  
  - Divisão:
    - Divisão de números positivos, negativos e zero.
    - Tratamento de divisão por zero (lança erro).
    - Divisão de números com casas decimais.
   
## Erros comuns
  - **Erro: "no test specified":** Certifique-se de que o script **"test": "jest"** está configurado no
  - **Erro: Arquivos de teste não encontrados:** Certifique-se de que os arquivos de teste estão na pasta **tests** e possuem a extensão **.test.ts.**
  - **Erro: 0 e -0 nos testes:** O projeto utiliza Math.abs() para normalizar os valores e evitar problemas com 0 e -0.

## Contribuição
  Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso:
  1. Faça um fork do repositório.
  2. Crie uma nova branch:
     
  ```bash
  git checkout -b minha-nova-funcionalidade
  ````
  3. Faça as alterações e envie um pull request
     

## Licença
Este projeto está licenciado sob a MIT License.
