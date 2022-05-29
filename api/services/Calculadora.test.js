const calculadora = require("./Calculadora");

describe('divisao', () => {
    describe('2 números inteiros são passados como parâmetro ==> retorna a divisão de um pelo outro', () => {
        test.each([
            { numerador: 6,                       denominador: 3,                       retornoEsperado: 2 },
            { numerador: 4,                       denominador: 2,                       retornoEsperado: 2 },
            { numerador: -12,                     denominador: 3,                       retornoEsperado: -4 },
            { numerador: -12,                     denominador: -3,                      retornoEsperado: 4 },
            { numerador: 10,                      denominador: 3,                       retornoEsperado: 3.3333333333333335 },
            { numerador: Number.MAX_SAFE_INTEGER, denominador: 5,                       retornoEsperado: 1801439850948198.2 },
            { numerador: 1,                       denominador: Number.MAX_SAFE_INTEGER, retornoEsperado: 1.1102230246251568e-16 }
        ])
        ('%j', ({ numerador, denominador, retornoEsperado }) => {
            expect(calculadora.divisao(numerador, denominador)).toBe(retornoEsperado);
        });
    });

    describe('2 números são passados como parâmetro, e um deles ou ambos são float ==> retorna a divisão de um pelo outro', () => {
        test.each([
            { numerador: 7.5224455678,            denominador: 2.7666,                  retornoEsperado: 2.7190217479216368 },
            { numerador: 7.5224455678,            denominador: -2,                      retornoEsperado: -3.7612227839 },
            { numerador: Number. MAX_VALUE,       denominador: 4.2,                     retornoEsperado: 4.28022174967218e+307 },
            { numerador: 8,                       denominador: Number. MAX_VALUE,       retornoEsperado: 4.450147717014404e-308 }
        ])('%j', ({ numerador, denominador, retornoEsperado }) => {
            expect(calculadora.divisao(numerador, denominador)).toBeCloseTo(retornoEsperado, 16);
        });
    });

    describe('o numerador é um número maior que 0 mas o denominador é igual a 0 ==> retorna Infinity', () => {
        test.each([
            { numerador: 6                      },
            { numerador: 2.1                    },
            { numerador: Number. MAX_VALUE      },
            { numerador: Number.MAX_SAFE_INTEGER }
        ])('%j', ({ numerador }) => {
            expect(calculadora.divisao(numerador, 0)).toEqual(Infinity);
        });
    });

    describe('o numerador é um número menor que 0 mas o denominador é igual a 0 ==> retorna Infinity negativo', () => {
        test.each([
            { numerador: -6                      },
            { numerador: -2.1                    },
            { numerador: -Number. MAX_VALUE      },
            { numerador: -Number.MAX_SAFE_INTEGER }
        ])('%j', ({ numerador }) => {
            expect(calculadora.divisao(numerador, 0)).toEqual(-Infinity);
        });
    });

    describe('o numerador e o denominador são iguais a 0 ==> retorna NaN', () => {
        test('%j', async () => {
            expect(calculadora.divisao(0, 0)).toEqual(NaN);
        });
    });

    describe('algum dos parâmetros não é um número ==> lança exceção', () => {
        test.each([        
            { numerador: "uma string"     , denominador: 2.7666 },           
            { numerador: true             , denominador: -2               },               
            { numerador: { atributo: 1 }    , denominador: 4.2              },              
            { numerador: () => {}         , denominador: Number. MAX_VALUE },
            { numerador: 2.7666           , denominador: "uma string"     }, 
            { numerador: -2               , denominador: true             },         
            { numerador: 4.2              , denominador: { atributo: 1 }    },
            { numerador: Number. MAX_VALUE, denominador: () => {}         }     
        ])('%j', ({ numerador, denominador }) => {
            expect(() => {
                calculadora.divisao(numerador, denominador);
            }).toThrow(TypeError);
        });
    });
});

describe('soma', () => {
    describe('2 números inteiros são passados como parâmetro ==> retorna a soma dos dois', () => {
        test.each([
            { numeroEsquerdo: 6,                       numeroDireito: 3,                       retornoEsperado: 9 },
            { numeroEsquerdo: 4,                       numeroDireito: 2,                       retornoEsperado: 6 },
            { numeroEsquerdo: -12,                     numeroDireito: 3,                       retornoEsperado: -9 },
            { numeroEsquerdo: -12,                     numeroDireito: -3,                      retornoEsperado: -15 },
            { numeroEsquerdo: 10,                      numeroDireito: 3,                       retornoEsperado: 13 },
            { numeroEsquerdo: Number.MAX_SAFE_INTEGER, numeroDireito: -5,                      retornoEsperado: 9007199254740986 },
            { numeroEsquerdo: 1,                      numeroDireito: Number.MIN_SAFE_INTEGER,  retornoEsperado: -9007199254740990 }
        ])
        ('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.soma(numeroEsquerdo, numeroDireito)).toBe(retornoEsperado);
        });
    });

    describe('2 números são passados como parâmetro, e um deles ou ambos são float ==> retorna a soma dos dois', () => {
        test.each([
            { numeroEsquerdo: 7.5224455678,           numeroDireito: 2.7666,                 retornoEsperado: 10.2890455678 },
            { numeroEsquerdo: 7.5224455678,           numeroDireito: -2,                     retornoEsperado: 5.5224455678 },
            { numeroEsquerdo: Number.MAX_VALUE,       numeroDireito: 4.2,                    retornoEsperado: 1.7976931348623157e+308 },
            { numeroEsquerdo: 8,                      numeroDireito: Number.MIN_VALUE,       retornoEsperado: 8 }
        ])('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.soma(numeroEsquerdo, numeroDireito)).toBeCloseTo(retornoEsperado, 16);
        });
    });

    describe('algum dos parâmetros não é um número ==> lança exceção', () => {
        test.each([        
            { numeroEsquerdo: "uma string"     , numeroDireito: 2.7666 },           
            { numeroEsquerdo: true             , numeroDireito: -2               },               
            { numeroEsquerdo: { atributo: 1 }  , numeroDireito: 4.2              },              
            { numeroEsquerdo: () => {}         , numeroDireito: Number. MAX_VALUE },
            { numeroEsquerdo: 2.7666           , numeroDireito: "uma string"     }, 
            { numeroEsquerdo: -2               , numeroDireito: true             },         
            { numeroEsquerdo: 4.2              , numeroDireito: { atributo: 1 }    },
            { numeroEsquerdo: Number. MAX_VALUE, numeroDireito: () => {}         }     
        ])('%j', ({ numeroEsquerdo, numeroDireito }) => {
            expect(() => {
                calculadora.soma(numeroEsquerdo, numeroDireito);
            }).toThrow(TypeError);
        });
    });
});

describe('subtracao', () => {
    describe('2 números inteiros são passados como parâmetro ==> retorna a subtração dos dois', () => {
        test.each([
            { numeroEsquerdo: 6,                       numeroDireito: 3,                       retornoEsperado: 3 },
            { numeroEsquerdo: 4,                       numeroDireito: 2,                       retornoEsperado: 2 },
            { numeroEsquerdo: -12,                     numeroDireito: 3,                       retornoEsperado: -15 },
            { numeroEsquerdo: -12,                     numeroDireito: -3,                      retornoEsperado: -9 },
            { numeroEsquerdo: 10,                      numeroDireito: 3,                       retornoEsperado: 7 },
            { numeroEsquerdo: Number.MAX_SAFE_INTEGER, numeroDireito: 5,                      retornoEsperado: 9007199254740986 },
            { numeroEsquerdo: -1,                       numeroDireito: Number.MIN_SAFE_INTEGER, retornoEsperado: 9007199254740990 }
        ])
        ('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.subtracao(numeroEsquerdo, numeroDireito)).toBe(retornoEsperado);
        });
    });

    describe('2 números são passados como parâmetro, e um deles ou ambos são float ==> retorna a subtração dos dois', () => {
        test.each([
            { numeroEsquerdo: 7.5224455678,           numeroDireito: 2.7666,                 retornoEsperado: 4.7558455678 },
            { numeroEsquerdo: 7.5224455678,           numeroDireito: -2,                     retornoEsperado: 9.5224455678 },
            { numeroEsquerdo: Number.MAX_VALUE,       numeroDireito: 4.2,                    retornoEsperado: 1.7976931348623157e+308 },
            { numeroEsquerdo: 8,                      numeroDireito: Number.MIN_VALUE,       retornoEsperado: 8 }
        ])('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.subtracao(numeroEsquerdo, numeroDireito)).toBeCloseTo(retornoEsperado, 16);
        });
    });

    describe('algum dos parâmetros não é um número ==> lança exceção', () => {
        test.each([        
            { numeroEsquerdo: "uma string"     , numeroDireito: 2.7666 },           
            { numeroEsquerdo: true             , numeroDireito: -2               },               
            { numeroEsquerdo: { atributo: 1 }  , numeroDireito: 4.2              },              
            { numeroEsquerdo: () => {}         , numeroDireito: Number. MAX_VALUE },
            { numeroEsquerdo: 2.7666           , numeroDireito: "uma string"     }, 
            { numeroEsquerdo: -2               , numeroDireito: true             },         
            { numeroEsquerdo: 4.2              , numeroDireito: { atributo: 1 }    },
            { numeroEsquerdo: Number. MAX_VALUE, numeroDireito: () => {}         }     
        ])('%j', ({ numeroEsquerdo, numeroDireito }) => {
            expect(() => {
                calculadora.subtracao(numeroEsquerdo, numeroDireito);
            }).toThrow(TypeError);
        });
    });
});

describe('multiplicacao', () => {
    describe('2 números inteiros são passados como parâmetro ==> retorna a multiplicacao dos dois', () => {
        test.each([
            { numeroEsquerdo: 6,                       numeroDireito: 3,                        retornoEsperado: 18 },
            { numeroEsquerdo: 4,                       numeroDireito: 2,                        retornoEsperado: 8 },
            { numeroEsquerdo: -12,                     numeroDireito: 3,                        retornoEsperado: -36 },
            { numeroEsquerdo: -12,                     numeroDireito: -3,                       retornoEsperado: 36 },
            { numeroEsquerdo: 10,                      numeroDireito: 3,                        retornoEsperado: 30 },
            { numeroEsquerdo: 4,                       numeroDireito: 1,                        retornoEsperado: 4 },
            { numeroEsquerdo: 10,                      numeroDireito: 0,                        retornoEsperado: 0 },
            { numeroEsquerdo: 1,                       numeroDireito: 4,                        retornoEsperado: 4 },
            { numeroEsquerdo: 0,                       numeroDireito: 10,                       retornoEsperado: 0 },
            { numeroEsquerdo: Number.MAX_SAFE_INTEGER/5, numeroDireito: 5,                        retornoEsperado: 9007199254740991 },
            { numeroEsquerdo: -1,                      numeroDireito: Number.MIN_SAFE_INTEGER,  retornoEsperado: 9007199254740991 }
        ])
        ('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.multiplicacao(numeroEsquerdo, numeroDireito)).toBe(retornoEsperado);
        });
    });

    describe('2 números são passados como parâmetro, e um deles ou ambos são float ==> retorna a multiplicacao dos dois', () => {
        test.each([
            { numeroEsquerdo: 7.5224455678,           numeroDireito: 2.7666,                 retornoEsperado: 20.81159790787548 },
            { numeroEsquerdo: 7.5224455678,           numeroDireito: -2,                     retornoEsperado: -15.0448911356 },
            { numeroEsquerdo: Number.MAX_VALUE/4.2,   numeroDireito: 4.2,                retornoEsperado: 1.7976931348623157e+308 },
            { numeroEsquerdo: 8,                      numeroDireito: Number.MIN_VALUE,       retornoEsperado: 4e-323 }
            //TODO: testar o resultado infinity e -infinity
        ])('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.multiplicacao(numeroEsquerdo, numeroDireito)).toBeCloseTo(retornoEsperado, 16);
        });
    });

    describe('algum dos parâmetros não é um número ==> lança exceção', () => {
        test.each([        
            { numeroEsquerdo: "uma string"     , numeroDireito: 2.7666 },           
            { numeroEsquerdo: true             , numeroDireito: -2               },               
            { numeroEsquerdo: { atributo: 1 }  , numeroDireito: 4.2              },              
            { numeroEsquerdo: () => {}         , numeroDireito: Number. MAX_VALUE },
            { numeroEsquerdo: 2.7666           , numeroDireito: "uma string"     }, 
            { numeroEsquerdo: -2               , numeroDireito: true             },         
            { numeroEsquerdo: 4.2              , numeroDireito: { atributo: 1 }    },
            { numeroEsquerdo: Number. MAX_VALUE, numeroDireito: () => {}         }     
        ])('%j', ({ numeroEsquerdo, numeroDireito }) => {
            expect(() => {
                calculadora.multiplicacao(numeroEsquerdo, numeroDireito);
            }).toThrow(TypeError);
        });
    });
});



describe('raizQuadrada', () => {
    describe('um número é passado como parâmetro ==> retorna a raiz quadrada do número', () => {
        test.each([
            { numero: 9                      , retornoEsperado: 3                 },
            { numero: 225                    , retornoEsperado: 15                },
            { numero: 225.2                  , retornoEsperado: 15.006665185843255 },
            { numero: Number.MAX_SAFE_INTEGER, retornoEsperado: 94906265.62425154 },
            { numero: 22                     , retornoEsperado: 4.69041575982343  }
        ])('%j', ({ numero, retornoEsperado }) => {
            expect(calculadora.raizQuadrada(numero)).toBe(retornoEsperado);
        });
    });

    describe('o parâmetro não é um número ==> lança exceção', () => {
        test.each([
            { numero: "uma string" },
            { numero: true         },
            { numero: { atributo: 1 } },
            { numero: () => {}     },
        ])('%j', ({ numero }) => {
            expect(() => {
                calculadora.raizQuadrada(numero);
            }).toThrow(TypeError);
        });
    });

    describe('o parâmetro é um número negativo ==> lança exceção', () => {
        test.each([
            { numero: -1                      },
            { numero: -15.67                  },
            { numero: -Number.MAX_SAFE_INTEGER },
            { numero: -Number.MAX_VALUE       }
        ])('%j', ({ numero }) => {
            expect(() => {
                calculadora.raizQuadrada(numero);
            }).toThrow(new Error('Número menor que 0'));
        });
    });
});

describe('divisores', () => {
    describe('o parâmetro é um número inteiro ==> retorna lista de divisores', () => {
        test.each([
            {numero: 140, listaDivisores: [1, 2, 4, 5, 7, 10, 14, 20, 28, 35, 70, 140]},
            {numero: 300, listaDivisores: [1, 2, 3, 4, 5, 6, 10, 100, 12, 15, 150, 20, 
                                            25, 30, 300, 50, 60, 75]}
        ])(
            '%j',
            ({numero, listaDivisores}) => {
                expect(calculadora.divisores(numero).sort()).toEqual(listaDivisores.sort());
            }
        );
    });

    describe('o parâmetro é um número decimal ==> retorna lista apenas com o numero decimal', () => {
        test.each([
            {numero: 47.7644, listaDivisores: [47.7644]},
            {numero: 277.8762, listaDivisores: [277.8762]}
        ])(
            '%j',
            ({numero, listaDivisores}) => {
                expect(calculadora.divisores(numero).sort()).toEqual(listaDivisores.sort());
            }
        );
    });

    describe('o parâmetro é um número negativo ==> lança exceção', () => {
        test.each([
            {numero: -47.7644},
            {numero: -140}
        ])(
            '%j',
            ({numero}) => {
                expect(() => {
                    calculadora.divisores(numero);
                }).toThrow(new Error('Número menor que 0'));
            }
        );
    });

    describe('o parâmetro não é um número ==> lança exceção', () => {
        test.each([
            {numero: () => {}},
            {numero: 'uma string'},
            {numero: {}}
        ])(
            '%j',
            ({numero}) => {
                expect(() => {
                    calculadora.divisores(numero);
                }).toThrow(new TypeError());
            }
        );
    });
});

describe('potencia', () => {
    describe('base igual a 0 e expoente menor ou igual a 0 ==> lança exceção de indeterminação', () => {
        test.each([
            { numeroEsquerdo: 0, numeroDireito: 0 },
            { numeroEsquerdo: 0, numeroDireito: -1 },
            { numeroEsquerdo: 0, numeroDireito: Number.MIN_SAFE_INTEGER }
        ])
        ('%j', ({ numeroEsquerdo, numeroDireito }) => {
            expect(() => {
                calculadora.potencia(numeroEsquerdo, numeroDireito);
            }).toThrow(new Error('Indeterminação'));
        });
    });

    describe('2 números inteiros são passados como parâmetro ==> retorna a potencia dos dois', () => {
        test.each([
            { numeroEsquerdo: 0, numeroDireito: 1, retornoEsperado: 0 },
            { numeroEsquerdo: 0, numeroDireito: 2, retornoEsperado: 0 },
            { numeroEsquerdo: 1, numeroDireito: 0, retornoEsperado: 1 },

            { numeroEsquerdo: 1, numeroDireito: 1, retornoEsperado: 1 },
            { numeroEsquerdo: 1, numeroDireito: 2, retornoEsperado: 1 },
            { numeroEsquerdo: 1, numeroDireito: -1, retornoEsperado: 1 },
            { numeroEsquerdo: 1, numeroDireito: -2, retornoEsperado: 1 },
            
            { numeroEsquerdo: -1, numeroDireito: 0, retornoEsperado: 1 },
            { numeroEsquerdo: -1, numeroDireito: 1, retornoEsperado: -1 },
            { numeroEsquerdo: -1, numeroDireito: 2, retornoEsperado: 1 },
            { numeroEsquerdo: -1, numeroDireito: -1, retornoEsperado: -1 },
            { numeroEsquerdo: -1, numeroDireito: -2, retornoEsperado: 1 },

            { numeroEsquerdo: 2, numeroDireito: 2, retornoEsperado: 4 },
            { numeroEsquerdo: 2, numeroDireito: 3, retornoEsperado: 8 },
            { numeroEsquerdo: 2, numeroDireito: 10, retornoEsperado: 1024 },
            { numeroEsquerdo: 2, numeroDireito: 53, retornoEsperado: Number.MAX_SAFE_INTEGER + 1 },

            { numeroEsquerdo: 5, numeroDireito: 2, retornoEsperado: 25 },
            { numeroEsquerdo: 5, numeroDireito: 4, retornoEsperado: 625 },
        ])
        ('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.potencia(numeroEsquerdo, numeroDireito)).toBe(retornoEsperado);
        });
    });

    describe('2 números são passados como parâmetro, e um deles ou ambos são float ==> retorna a multiplicacao dos dois', () => {
        test.each([
            { numeroEsquerdo: 7.5,           numeroDireito: 2.7,                 retornoEsperado: 230.49707106142748 },
            { numeroEsquerdo: 3.3,           numeroDireito: 2,                     retornoEsperado: 10.889999999999999 },
            { numeroEsquerdo: 5,           numeroDireito: 3.5,                     retornoEsperado: 279.5084971874737 },
            
            { numeroEsquerdo: 6,           numeroDireito: -5.1,                     retornoEsperado: 0.00010750498997915862 },
            { numeroEsquerdo: 1.79,           numeroDireito: 308,                     retornoEsperado: Number.MAX_VALUE }
        ])('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.potencia(numeroEsquerdo, numeroDireito)).toBeCloseTo(retornoEsperado, 16);
        });
    });

    describe('algum dos parâmetros não é um número ==> lança exceção', () => {
        test.each([        
            { numeroEsquerdo: "uma string"     , numeroDireito: 2.7666 },           
            { numeroEsquerdo: true             , numeroDireito: -2               },               
            { numeroEsquerdo: { atributo: 1 }  , numeroDireito: 4.2              },              
            { numeroEsquerdo: () => {}         , numeroDireito: Number.MAX_VALUE },
            { numeroEsquerdo: 2.7666           , numeroDireito: "uma string"     }, 
            { numeroEsquerdo: -2               , numeroDireito: true             },         
            { numeroEsquerdo: 4.2              , numeroDireito: { atributo: 1 }    },
            { numeroEsquerdo: Number.MAX_VALUE, numeroDireito: () => {}         }     
        ])('%j', ({ numeroEsquerdo, numeroDireito }) => {
            expect(() => {
                calculadora.potencia(numeroEsquerdo, numeroDireito);
            }).toThrow(TypeError);
        });
    });
});

describe('fatorial', () => {
    describe('fatorial de número negativo ==> lança exceção de número menor que 0', () => {
        test.each([
            { numeroEsquerdo: -1 },
            { numeroEsquerdo: -2 },
            { numeroEsquerdo: Number.MIN_SAFE_INTEGER }
        ])
        ('%j', ({ numeroEsquerdo }) => {
            expect(() => {
                calculadora.fatorial(numeroEsquerdo);
            }).toThrow(new Error('Número menor que 0'));
        });
    });

    describe('fatorial de número decimal ==> lança exceção de número não inteiro', () => {
        test.each([
            { numeroEsquerdo: 1.2 },
            { numeroEsquerdo: 75.8 },
            { numeroEsquerdo: 150.7 },
        ])
        ('%j', ({ numeroEsquerdo }) => {
            expect(() => {
                calculadora.fatorial(numeroEsquerdo);
            }).toThrow(new Error('Número não é inteiro'));
        });
    });

    describe('número inteiro passado como parâmetro ==> retorna o fatorial do número', () => {
        test.each([
            { numeroEsquerdo: 0, retornoEsperado: 1 },
            { numeroEsquerdo: 1, retornoEsperado: 1 },
            { numeroEsquerdo: 2, retornoEsperado: 2 },
            { numeroEsquerdo: 5, retornoEsperado: 120 },
            { numeroEsquerdo: 24, retornoEsperado: Math.pow(6.204484, 23) },
            { numeroEsquerdo: 50, retornoEsperado: Math.pow(3.0414093, 64) }
        ])
        ('%j', ({ numeroEsquerdo, numeroDireito, retornoEsperado }) => {
            expect(calculadora.fatorial(numeroEsquerdo)).toBe(retornoEsperado);
        });
    });

    describe('algum dos parâmetros não é um número ==> lança exceção', () => {
        test.each([        
            { numeroEsquerdo: "uma string" },           
            { numeroEsquerdo: true },               
            { numeroEsquerdo: { atributo: 1 } },              
            { numeroEsquerdo: () => {} },
        ])('%j', ({ numeroEsquerdo }) => {
            expect(() => {
                calculadora.fatorial(numeroEsquerdo, numeroDireito);
            }).toThrow(TypeError);
        });
    });
});