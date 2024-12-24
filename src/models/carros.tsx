export type TipoPais = 'alemanha' | 'coreiadosul' | 'eua' | 'franca' | 'itália' | 'japao' | 'reinounido' | 'suecia';

export interface Carro {
    id: string
    modelo: string
    ano: string
    cor: string
    cavalosDePotencia: string
    fabricante: string
    pais: TipoPais
}