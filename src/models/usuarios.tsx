export type TipoCargo = 'Engenheiro de Produtos' | 'Testador de Produtos' | 'Gerente de Marketing' | 'Diretor de TI' | 'Analista de Suporte';

export interface Usuario {
    id: string
    email: string
    nome: string
    cargo: TipoCargo
    avatar: string
    password: string
}