const {choixP1,choixP2,scorep1,scorep2} = require('./main.js');


test('null Choix', () => {
    expect(choixP1).not.toBeNull();
    expect(choixP1).toBeDefined();
    expect(choixP1).not.toBeUndefined();
    expect(choixP2).not.toBeNull();
    expect(choixP2).toBeDefined();
    expect(choixP2).not.toBeUndefined();
  });

  test('point non négatif', () => {
    expect(scorep1).toBeGreaterThan(-1);
    expect(scorep2).toBeGreaterThan(-1);
  });
