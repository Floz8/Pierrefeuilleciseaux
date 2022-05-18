const {choixP1, choixP2, scorep1, scorep2,equipeGagnante,scoreEquipe1,scoreEquipe2} = require('./main.js');


test('nullable', () => {
    expect(choixP1).not.toBeNull();
    expect(choixP1).toBeDefined();
    expect(choixP1).not.toBeUndefined();

    expect(choixP2).not.toBeNull();
    expect(choixP2).toBeDefined();
    expect(choixP2).not.toBeUndefined();
    
    expect(scoreEquipe1).not.toBeNull();
    expect(scoreEquipe1).toBeDefined();
    expect(scoreEquipe1).not.toBeUndefined();
    
    expect(scoreEquipe2).not.toBeNull();
    expect(scoreEquipe2).toBeDefined();
    expect(scoreEquipe2).not.toBeUndefined();

    expect(equipeGagnante).not.toBeNull();
  });

  test('point non négatif', () => {
    expect(scorep1).toBeGreaterThan(-1);
    expect(scorep2).toBeGreaterThan(-1);
    expect(scoreEquipe1).toBeGreaterThan(-1);
    expect(scoreEquipe2).toBeGreaterThan(-1);
  });

  test('Contient Equipe', () => {
    expect(equipeGagnante).toContain('Equipe');
  });

