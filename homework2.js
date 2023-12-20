const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
  ];


//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime(rasyechki)
  const studentiFilter = studenti.filter((item) => {
    return item.prosek>7 && item.ime.slice(-1) == 'a';
  });
console.log(studentiFilter)

//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki



const studentiFilter2 = studenti.filter((item) => {
    return item.prosek>9
  });

  console.log(studentiFilter2.sort((a, b) => b.prosek - a.prosek));

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek

const studentiFilter3 = studenti.filter((item) => {
  
  return item.ime.length <= 5;
  
})

console.log(studentiFilter3.slice(0,3))

//? 4. Vkupen prosek na studenti koi se od Kumanovo

const studentiFilter4 = studenti.filter((item) => {
  return item.grad == 'Kumanovo';
})

const sumaProsek = studentiFilter4.reduce((acc, s) => {
  return acc+s.prosek;
}, 0)

console.log(`Prosek total Kumanovo: ${sumaProsek}`)

//? 5. Prosek na prosecite od gradovite Skopje i Ohrid

const studentiFilter5 = studenti.filter((item) => {
  return (item.grad == 'Skopje' || item.grad == 'Ohrid');
 
})

const sumaProsek1 = studentiFilter5.reduce((acc, s) => {
  return acc+s.prosek;
}, 0)


console.log(`Prosek vo studentite: ${sumaProsek1 / studentiFilter5.length}`)

//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica

studenti.push({ ime: 'Goran', prosek: 8.3, grad: 'Strumica' });
console.log(studenti);

//? 7. Da se izbrishe prviot student vo studenti

studenti.shift();
console.log(studenti);

//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki)

const studenti2 = studenti.filter(student => student.grad == 'Skopje' || student.grad == 'Ohrid' || student.grad == 'Kumanovo').map(student => ({ ime: student.ime, prosek: student.prosek + 1, grad: student.grad}))
console.log(studenti2);