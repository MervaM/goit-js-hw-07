const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const productList = document.getElementById("ingredients");

const createlist = product => {
  const item = document.createElement('li');
  item.textContent = product;
  productList.append(item); 

  return item;
};

const elements = ingredients.map(product => createlist(product));
console.log(elements);

productList.append(elements);
