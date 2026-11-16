# UnitTestid
# OSA A. Parooli valideerimine
# 7. Leia paroolifunktsiooni viga
<img width="544" height="111" alt="image" src="https://github.com/user-attachments/assets/ff148f9a-b6e4-4b01-8a1a-5bbcd44ab6fd" />
<img width="385" height="167" alt="image" src="https://github.com/user-attachments/assets/3078669f-c15a-449f-b351-b619063bb49f" />
<img width="389" height="145" alt="image" src="https://github.com/user-attachments/assets/8f04917d-aead-49b8-a010-8e4ba8b2ea25" />


Parool, mis sisaldab 9 märki, läbib testi, aga täpselt 8 märgiga parool mitte, sest failis password.js kasutatakse märki > märgi >= asemel. Märk > tähendab rohkem kui 8 märki, aga >= tähendab vähemalt 8 märki. Seetõttu tuleb tingimus parandada, et ka täpselt 8 märgiga parool oleks kehtiv.
# Lisaülesanne: test.each
<img width="383" height="174" alt="image" src="https://github.com/user-attachments/assets/cdb73ffa-7cd1-4fce-8188-1bca240951da" />
<img width="482" height="186" alt="image" src="https://github.com/user-attachments/assets/fced4ab5-cc12-4da7-8100-549aae29e6e5" />

# 9. Kirjuta ostukorvi testid
<img width="375" height="125" alt="image" src="https://github.com/user-attachments/assets/1140faf4-9ab5-42e5-9e80-0967aa095fb3" />

# 10. Leia ja paranda ostukorvi viga
<img width="397" height="159" alt="image" src="https://github.com/user-attachments/assets/abe032f6-01fa-4c31-9a29-7e55bbc06c4c" />

# 12. Kontrolli vigast sisendit – toThrow()
<img width="371" height="160" alt="image" src="https://github.com/user-attachments/assets/086249a5-119e-4907-b3f1-85d8caf7bdbb" />

# 13. Kontrolli koodikatvust
<img width="623" height="255" alt="image" src="https://github.com/user-attachments/assets/cb42331b-7f69-4b59-89e5-547125b4922d" />

# 15. TDD esimene samm – kirjuta test enne koodi
<img width="463" height="225" alt="image" src="https://github.com/user-attachments/assets/0a0ddeb9-b120-4680-b769-cb9e54487f0a" />

# 16.  TDD teine samm – muuda koodi
<img width="332" height="153" alt="image" src="https://github.com/user-attachments/assets/acd723d7-ece5-4d65-be2f-121fe9d7bf68" />

# 17. TDD kolmas samm – kontrolli regressiooni
<img width="511" height="192" alt="image" src="https://github.com/user-attachments/assets/7dcfb2e6-97ee-464b-a6d4-0b4d8040c765" />


# Kokkuvõte – mida pean oskama?

1. Mis on ühiktest ja mida see kontrollib?

Ühiktest on test, mis kontrollib programmi väikest osa, näiteks ühte funktsiooni. See aitab leida vigu ja kontrollida, kas funktsioon töötab õigesti.

2. Mida tähendavad test(), expect() ja toBe()?

test() – määrab testi nime ja sisu.

expect() – kontrollib funktsiooni tulemust.

toBe() – võrdleb tegelikku ja oodatud tulemust.

3. Mida tähendavad Expected ja Received?

Expected – tulemus, mida test ootas.

Received – tulemus, mille programm tegelikult tagastas.

Kui need tulemused erinevad, siis test ebaõnnestub.

4. Mis on piirväärtuste ja tühjade sisendite testimine?

Piirväärtuste testimine kontrollib väärtusi piiri lähedal, näiteks 7, 8 ja 9 märgiga parooli. Tühjade sisendite testimine kontrollib näiteks tühja parooli või tühja ostukorvi.

5. Mida tähendavad toThrow() ja test.each?

toThrow() – kontrollib, kas funktsioon tekitab vea.

test.each – võimaldab käivitada sama testi mitme erineva sisendiga.

6. Kuidas käivitada teste?

Terminalis tuleb kirjutada:

npm test

See käivitab kõik testid.

7. Kuidas kontrollida koodikatvust?

Terminalis tuleb kirjutada:

npm run coverage

See näitab, kui suur osa koodist on testide käivitamise ajal läbi töötatud.

8. Mis on TDD tsükkel Red → Green → Refactor?

Red – kirjutame testi, mis alguses ebaõnnestub.

Green – muudame koodi nii, et test läbiks.

Refactor – korrastame koodi nii, et kõik testid läbiksid endiselt.








