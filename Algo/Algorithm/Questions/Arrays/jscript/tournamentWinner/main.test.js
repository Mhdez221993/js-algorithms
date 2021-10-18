const tournamentWinner = require('./main');

describe('tournamentWinner', () => {
  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"]
      ],
      "results": [0, 0, 1]
    };
    const winner = "Python";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"]
      ],
      "results": [0, 1, 1]
    };
    const winner = "Java";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"]
      ],
      "results": [0, 1, 1, 1, 0, 1]
    };
    const winner = "C#";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"],
        ["SQL", "C#"],
        ["HTML", "SQL"],
        ["SQL", "Python"],
        ["SQL", "Java"]
      ],
      "results": [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
    };
    const winner = "C#";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["Bulls", "Eagles"]
      ],
      "results": [1]
    };
    const winner = "Bulls";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["Bulls", "Eagles"],
        ["Bulls", "Bears"],
        ["Bears", "Eagles"]
      ],
      "results": [0, 0, 0]
    };
    const winner = "Eagles";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["Bulls", "Eagles"],
        ["Bulls", "Bears"],
        ["Bulls", "Monkeys"],
        ["Eagles", "Bears"],
        ["Eagles", "Monkeys"],
        ["Bears", "Monkeys"]
      ],
      "results": [1, 1, 1, 1, 1, 1]
    };
    const winner = "Bulls";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["AlgoMasters", "FrontPage Freebirds"],
        ["Runtime Terror", "Static Startup"],
        ["WeC#", "Hypertext Assassins"],
        ["AlgoMasters", "WeC#"],
        ["Static Startup", "Hypertext Assassins"],
        ["Runtime Terror", "FrontPage Freebirds"],
        ["AlgoMasters", "Runtime Terror"],
        ["Hypertext Assassins", "FrontPage Freebirds"],
        ["Static Startup", "WeC#"],
        ["AlgoMasters", "Static Startup"],
        ["FrontPage Freebirds", "WeC#"],
        ["Hypertext Assassins", "Runtime Terror"],
        ["AlgoMasters", "Hypertext Assassins"],
        ["WeC#", "Runtime Terror"],
        ["FrontPage Freebirds", "Static Startup"]
      ],
      "results": [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
    };
    const winner = "AlgoMasters";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"],
        ["SQL", "C#"],
        ["HTML", "SQL"],
        ["SQL", "Python"],
        ["SQL", "Java"]
      ],
      "results": [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
    };
    const winner = "SQL";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })

  it('should return newArr', () => {
    const test = {
      "competitions": [
        ["A", "B"]
      ],
      "results": [0]
    };
    const winner = "B";
    expect(tournamentWinner(test['competitions'], test["results"])).toStrictEqual(winner);
  })
});