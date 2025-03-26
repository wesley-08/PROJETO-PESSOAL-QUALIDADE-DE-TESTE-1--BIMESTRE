function calculatePlayerStats(playerData) {
    const { gols, assistencias, cartoes, jogos } = playerData;

    if (!Array.isArray(jogos) || jogos.length === 0) {
        throw new Error('Lista de jogos inválida.');
    }

    const totalGols = gols.reduce((total, gol) => total + gol, 0);
    const totalAssistencias = assistencias.reduce((total, ass) => total + ass, 0);
    const totalCartoes = cartoes.reduce((total, cartao) => total + cartao, 0);
    const totalJogos = jogos.length;

    return { totalGols, totalAssistencias, totalCartoes, totalJogos };
}

module.exports = calculatePlayerStats;
