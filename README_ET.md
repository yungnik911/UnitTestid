# Ühiktestide praktikum – õpilase juhend

**Õppeaine:** Tarkvarasüsteemide testimine  
**Teema:** Ühiktestid ja Jest  
**Töövahendid:** GitHub, GitHub Codespaces, Node.js, Jest

Eesmärk on kirjutada ühikteste, leida testide abil koodivigu ning teha läbi TDD tsükkel. Liigu samm-sammult. Ära muuda testi oodatavat tulemust ainult selleks, et test roheliseks muutuks.

## 1\. Loo GitHubis enda repositoorium

1. Ava https://github.com ja logi sisse.
2. Vajuta **+ → New repository**.
3. Pane nimeks näiteks `unit-test-praktikum-eesnimi`.
4. Vali **Public** või õpetaja juhise järgi **Private**.
5. Märgi **Add a README file** ja vajuta **Create repository**.

## 2\. Laadi algfailid GitHubi

1. Ava enda repositoorium.
2. Vali **Add file → Upload files**.
3. Paki õpetajalt saadud ZIP enda arvutis lahti.
4. Laadi repositooriumi üles ZIP-i sees olevad failid ja kaustad, mitte ZIP-fail ise.
5. Vajuta **Commit changes**.

Repositooriumis peavad olema `package.json`, `password.js`, `password.test.js`, `cart.js` ja `cart.test.js`.

## 3\. Ava GitHub Codespaces

1. Vajuta rohelise **Code** nupu peale.
2. Ava vahekaart **Codespaces**.
3. Vajuta **Create codespace on main**.
4. Oota, kuni veebipõhine VS Code avaneb ja terminal on valmis.

Arvutisse ei pea Node.js-i ega Jesti eraldi paigaldama.

## 4\. Paigalda sõltuvused ja käivita algtestid

Ava **Terminal → New Terminal** ja kirjuta:

```bash
npm install
npm test
```

Alguses võib parooli test ebaõnnestuda – `password.js` sisaldab tahtlikku viga. See on ootuspärane. Uuri veateadet ja jätka ülesannetega.

\---

# OSA A. Parooli valideerimine

## 5\. Nõue

Parool on kehtiv, kui selles on vähemalt 8 märki ja see ei koosne ainult tühikutest. Funktsioon `isValidPassword(password)` tagastab `true` või `false`.

Failis `password.js` on tahtlik viga. Kõigepealt kirjuta nõude põhjal testid.

## 6\. Lisa parooli testid

Ava `password.test.js`. Esimene test on olemas. Lisa veel viis testi.

|Testiandmed|Oodatav tulemus|Mida kontrollib|
|-|-:|-|
|`'abcdefgh'`|`true`|täpselt 8 märki|
|`'abcdefg'`|`false`|7 märki|
|`'abcdefghi'`|`true`|9 märki|
|`''`|`false`|tühi väärtus|
|`'        '`|`false`|ainult tühikud|
|`'salajane parool'`|`true`|tühikud sõnade vahel on lubatud|

Näide:

```javascript
test('7 märki ei ole piisav', () => {
  expect(isValidPassword('abcdefg')).toBe(false);
});
```

Pärast testide lisamist käivita `npm test`.

## 7\. Leia paroolifunktsiooni viga

1. Vaata, milline test ebaõnnestus.
2. **Expected** tähendab, mida test ootas; **Received** tähendab, mida funktsioon tagastas.
3. Võrdle testi nõudega.
4. Ava `password.js` ja paranda funktsioon.
5. Käivita uuesti `npm test`.

Eesmärk: kõik kuus parooli testi läbivad.

**Mõtle:** miks 9 märgiga parool võib testi läbida, aga täpselt 8 märgiga parool mitte?

### Lisaülesanne: test.each

`test.each` võimaldab sama testi käivitada mitme andmereaga. Iga rida muutub eraldi testiks. Proovi kirjutada parooli testid 1–3 ümber:

```javascript
test.each(\\\[
  \\\['abcdefgh', true],
  \\\['abcdefg', false],
  \\\['abcdefghi', true],
])('parooli %s kehtivus on %s', (password, expected) => {
  expect(isValidPassword(password)).toBe(expected);
});
```

\---

# OSA B. Ostukorvi summa arvutamine

## 8\. Nõuded

Funktsioon `calculateTotal(items, discountCode)` peab:

1. liitma kokku iga toote hinna ja koguse korrutise;
2. andma koodiga `STUDENT10` 10% allahindlust;
3. lisama alla 100 € ostule 5 € saatmiskulu;
4. jätma saatmise tasuta, kui ostusumma on vähemalt 100 €;
5. tagastama tühja ostukorvi korral 0 €;
6. viskama vea, kui `items` ei ole massiiv.

Failis `cart.js` on tahtlik viga.

## 9\. Kirjuta ostukorvi testid

Ava `cart.test.js`. Tühja ostukorvi test on olemas. Lisa järgmised testid:

|Testiandmed|Oodatav tulemus|Arvutus|
|-|-:|-|
|`\\\[{ price: 20, qty: 2 }]`|`45`|20 × 2 + 5|
|`\\\[{ price: 10, qty: 3 }, { price: 25, qty: 2 }]`|`85`|30 + 50 + 5|
|`\\\[{ price: 100, qty: 1 }]`, kood `STUDENT10`|`90`|100 − 10%, tasuta saatmine|
|`\\\[{ price: 99, qty: 1 }]`|`104`|99 + 5|
|`\\\[{ price: 100, qty: 1 }]`|`100`|täpselt piiril, tasuta saatmine|

Näide:

```javascript
test('üks toode koos saatmiskuluga', () => {
  expect(calculateTotal(\\\[{ price: 20, qty: 2 }])).toBe(45);
});
```

Arvuta oodatav tulemus ise. Ära kopeeri seda programmi väljundist.

## 10\. Leia ja paranda ostukorvi viga

1. Käivita `npm test`.
2. Vaata, millised testid ebaõnnestuvad.
3. Loe Expected ja Received.
4. Ava `cart.js` ning uuri ostusumma, allahindluse ja saatmiskulu tingimusi.
5. Paranda `cart.js` – ära muuda testi oodatavat tulemust.
6. Käivita uuesti `npm test`.

Eesmärk: kõik testid läbivad.

## 11\. Proovi test.each-i ostukorvi näitel

Kirjuta soovi korral korduvad testid ühe `test.each` plokina. Iga rida sisaldab `\\\[items, expected]`:

```javascript
test.each(\\\[
  \\\[\\\[{ price: 20, qty: 2 }], 45],
  \\\[\\\[{ price: 10, qty: 3 }, { price: 25, qty: 2 }], 85],
  \\\[\\\[{ price: 99, qty: 1 }], 104],
])('ostukorvi summa arvutatakse õigesti', (items, expected) => {
  expect(calculateTotal(items)).toBe(expected);
});
```

See on sama kontroll mitme sisendiga. Võid ka eraldi testid alles jätta – oluline on mõista `test.each` põhimõtet.

## 12\. Kontrolli vigast sisendit – toThrow()

Lisa `cart.test.js` faili lõppu:

```javascript
test('annab vea, kui items ei ole massiiv', () => {
  expect(() => calculateTotal('abc')).toThrow();
});
```

Käivita `npm test`.

`toThrow()` kontrollib, kas funktsioon viskab vea. Nool `() =>` on vajalik, sest Jest peab saama funktsiooni ise käivitada ja vea kinni püüda.

## 13\. Kontrolli koodikatvust

Ava `package.json` ja veendu, et `scripts` sisaldab:

```json
"scripts": {
  "test": "jest --runInBand",
  "coverage": "jest --coverage"
}
```

Käivita:

```bash
npm run coverage
```

Raportis:

* `% Stmts` – käivitatud käsud;
* `% Branch` – kontrollitud tingimuslausete harud;
* `% Funcs` – käivitatud funktsioonid;
* `% Lines` – käivitatud koodiread;
* `Uncovered Line #s` – read, mida testid ei käivitanud.

Kui mõni rida on katmata, mõtle, milline test seda koodiosa käivitaks.

**Oluline:** 100% koodikatvus ei tõesta, et programm on veatu. See näitab ainult, et kogu kood käivitati testide ajal.

\---

# OSA C. TDD

## 14\. Uus nõue

Lisame sooduskoodi `FREESHIP`: saatmine on tasuta olenemata ostusummast.

Näide: toode maksab 10 €, kogus on 1 ja sooduskood on `FREESHIP`. Lõpptulemus peab olema 10 €, mitte 15 €.

## 15\. TDD esimene samm – kirjuta test enne koodi

Lisa `cart.test.js` faili lõppu:

```javascript
test('FREESHIP teeb saatmise tasuta', () => {
  expect(calculateTotal(
    \\\[{ price: 10, qty: 1 }],
    'FREESHIP'
  )).toBe(10);
});
```

Salvesta ja käivita:

```bash
npm test
```

Uus test peab ebaõnnestuma, sest funktsioon ei toeta veel `FREESHIP` koodi. See on TDD **Red** etapp.

## 16\. TDD teine samm – muuda koodi

Ava `cart.js` ja muuda saatmiskulu tingimust nii, et `FREESHIP` korral saatmiskulu ei lisataks.

Salvesta ja käivita:

```bash
npm test
```

Kõik testid peavad nüüd läbima. See on **Green** etapp.

## 17\. TDD kolmas samm – kontrolli regressiooni

Kontrolli, et:

* `FREESHIP` annab tasuta saatmise;
* `STUDENT10` annab endiselt 10% allahindlust;
* alla 100 € ostule lisandub tavaliselt 5 € saatmiskulu;
* vähemalt 100 € ostul on saatmine tasuta;
* tühi ostukorv annab 0 €;
* vigane sisend tekitab vea.

Käivita:

```bash
npm test
npm run coverage
```

See on regressioonikontroll: veendud, et uus muudatus ei lõhkunud varem töötanud funktsionaalsust.

TDD kolm etappi:

* **Red** – kirjuta test, mis ebaõnnestub.
* **Green** – kirjuta minimaalne kood, et test läbiks.
* **Refactor** – korrasta koodi, säilitades kõikide testide läbimise.

\---

## 18\. Kokkuvõte – mida pead oskama?

1. Selgitada, mis on ühiktest ja mida see kontrollib.
2. Selgitada `test()`, `expect()` ja `toBe()` tähendust.
3. Lugeda Expected ja Received veateadet.
4. Kirjutada teste piirväärtuste ja tühjade sisendite jaoks.
5. Selgitada `toThrow()` ja `test.each` kasutamist.
6. Käivitada teste käsuga `npm test`.
7. Vaadata koodikatvust käsuga `npm run coverage`.
8. Selgitada TDD tsüklit Red → Green → Refactor.

## Esitamine

Õpetaja juhise järgi esita:

* enda GitHubi repositooriumi link;
* töötavad testid;
* koodikatvuse raporti ekraanipilt;
* lühike selgitus, millise vea leidsid ja kuidas TDD-d kasutasid.

