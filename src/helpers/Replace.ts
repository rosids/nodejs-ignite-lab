// cria um replace onde T o objeto e R é a chave que quero remover
export type Replace<T, R> = Omit<T, keyof R> & R;
