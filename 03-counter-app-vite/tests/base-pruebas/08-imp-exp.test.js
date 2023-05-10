import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import realHeroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroById debe retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroById debe retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  // Tarea:
  // Debe retornar un arreglo con los héroes de DC
  // Length === 3

  // debe retornar un arreglo con los héroes de Marvel
  // length === 2

  test("getHeroesByOwner debe retornar un array de 3 elementos con héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(realHeroes.filter((heroe) => heroe.owner === owner));
  });

  test("getHeroesByOwner debe retornar un array de 2 elementos con héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(realHeroes.filter((heroe) => heroe.owner === owner));
  });
});
