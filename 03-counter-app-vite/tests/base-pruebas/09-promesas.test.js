import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import realHeroes from "../../src/data/heroes";

describe("Pruebas en 09-promesas", () => {
  test("getHeroByIdAsync debe retornar un héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroByIdAsync debe retornar un error si héroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
