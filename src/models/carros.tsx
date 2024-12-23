// export type TipoCarro = 'Engenheiro de Produtos' | 'Testador de Produtos' | 'Gerente de Marketing' | 'Diretor de TI' | 'Analista de Suporte';

export interface Carro {
    id: string
    modelo: string
    ano: string
    cor: string
    cavalosDePotencia: string
    fabricante: string
    pais: string
}