const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const createList = product => {
  //const listRef = document.getElementById('ingredients');

  const listRef = document.createElement('ul');
  
  const item1Ref = document.createElement('li');
  item1Ref.textContent = 'Картошка';
 
  const item2Ref = document.createElement('li');
  item2Ref.textContent = 'Грибы';
  
  const item3Ref = document.createElement('li');
  item3Ref.textContent = 'Чеснок';
  
  const item4Ref = document.createElement('li');
  item4Ref.textContent = 'Помидоры';
  
  const item5Ref = document.createElement('li');
  item5Ref.textContent = 'Зелень';
  
  const item6Ref = document.createElement('li');
  item6Ref.textContent = 'Приправы';
  
  listRef.append( item1Ref, item2Ref, item3Ref, item4Ref, item5Ref, item6Ref);

  return listRef;
};

ingredients.forEach(product => {
  console.log(createList(product));
});

const elements = ingredients.map(product => createList(product));
console.log(elements);

const elementsList = document.querySelector('.js-products');
console.log(elementsList);

elementsList.append(...elements);

