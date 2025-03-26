# PROJTO PESSOAL ESTATÍSTICAS DE UM JOGADOR DE FUTEBOL 
O código trata de calcular estatísticas de um jogador de futebol (gols, assistências, cartões e jogos). Ele faz o seguinte:

A função principal calculatePlayerStats soma os valores de gols, assistências e cartões, além de contar o número total 
de jogos fornecidos na entrada.

 - Inclui validações para garantir que a lista de jogos seja válida (não vazia).
 - Retorna um objeto com os totais calculados: totalGols, totalAssistencias, totalCartoes e totalJogos.

# Os testes no arquivo playerStats.test.js cobrem cenários variados:

1: Testam cálculos básicos e somas corretas.

2: Validam entradas extremas, como listas vazias ou valores grandes.

3: Garantem que erros sejam lançados para entradas inválidas.

4: Simulam diversas combinações de dados do jogador.
