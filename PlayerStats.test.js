const calculatePlayerStats = require('./PlayerStats');

describe('Teste de estatísticas do jogador', () => {
    test('Estatísticas básicas', () => {
        const playerData = {
            gols: [2, 1, 0],
            assistencias: [1, 0, 2],
            cartoes: [1, 0, 0],
            jogos: ['jogo1', 'jogo2', 'jogo3']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalGols).toBe(3);
        expect(stats.totalAssistencias).toBe(3);
        expect(stats.totalCartoes).toBe(1);
        expect(stats.totalJogos).toBe(3);
    });

    test('Jogador com nenhum jogo', () => {
        const playerData = {
            gols: [],
            assistencias: [],
            cartoes: [],
            jogos: []
        };
        expect(() => calculatePlayerStats(playerData)).toThrow('Lista de jogos inválida.');
    });

    test('Gols acumulados corretamente', () => {
        const playerData = {
            gols: [1, 2, 3],
            assistencias: [0, 1, 1],
            cartoes: [0, 0, 0],
            jogos: ['jogo1', 'jogo2', 'jogo3']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalGols).toBe(6);
    });

    test('Nenhuma assistência registrada', () => {
        const playerData = {
            gols: [0, 0, 1],
            assistencias: [0, 0, 0],
            cartoes: [0, 1, 0],
            jogos: ['jogo1', 'jogo2', 'jogo3']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalAssistencias).toBe(0);
    });

    test('Cartões somados corretamente', () => {
        const playerData = {
            gols: [0],
            assistencias: [0],
            cartoes: [1, 2, 0],
            jogos: ['jogo1', 'jogo2', 'jogo3']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalCartoes).toBe(3);
    });

    test('Jogos corretamente contados', () => {
        const playerData = {
            gols: [2, 0],
            assistencias: [1, 1],
            cartoes: [0, 0],
            jogos: ['jogo1', 'jogo2']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalJogos).toBe(2);
    });

    test('Somando valores mistos nos arrays', () => {
        const playerData = {
            gols: [1.5, 2],
            assistencias: [0.5, 1.2],
            cartoes: [0],
            jogos: ['jogo1', 'jogo2']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalGols).toBeCloseTo(3.5);
        expect(stats.totalAssistencias).toBeCloseTo(1.7);
    });

    test('Jogador com muitos gols e poucos cartões', () => {
        const playerData = {
            gols: [3, 5, 7],
            assistencias: [0, 0, 1],
            cartoes: [1],
            jogos: ['jogo1', 'jogo2', 'jogo3']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalGols).toBe(15);
        expect(stats.totalCartoes).toBe(1);
    });

    test('Estatísticas de um único jogo', () => {
        const playerData = {
            gols: [2],
            assistencias: [1],
            cartoes: [1],
            jogos: ['jogo1']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalJogos).toBe(1);
    });

    test('Jogador sem cartões, gols e assistências', () => {
        const playerData = {
            gols: [],
            assistencias: [],
            cartoes: [],
            jogos: ['jogo1']
        };
        const stats = calculatePlayerStats(playerData);
        expect(stats.totalGols).toBe(0);
        expect(stats.totalAssistencias).toBe(0);
        expect(stats.totalCartoes).toBe(0);
        expect(stats.totalJogos).toBe(1);
    });
});
