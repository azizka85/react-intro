const cars = [{
  name: 'BMW M2 Coupe',
  price: '20000 $',
  img: 'https://images.drive.ru/i/0/5dc25470ec05c44c75000023.jpg'
}, {
  name: 'Audi TT',
  price: '15000 $',
  img: 'http://cdn.motorpage.ru/Photos/800/1105D.jpg'
}, {
  name: 'Rolls Royce',
  price: '50000 $',
  img: 'https://motor.ru/thumb/2724x0/filters:quality(75):no_upscale()/imgs/2019/10/22/12/3620885/725b4260710b9068891094a0fc3c73568cb68c07.jpg'
}, {
  name: 'Mercedes AMG Coupe',
  price: '18000 $',
  img: 'https://img-c.drive.ru/models.large.main.images/0000/000/000/001/12f/48d5438e1b367fe8-main.jpg'
}];

function createCard(car) {
  return `
    <div class="card">
      <div class="card-img">
        <img 
          src="${car.img}" 
          alt="${car.name}"
        />
      </div>
      <h3>${car.name}</h3>
      <p>${car.price}</p>
    </div>       
  `;
}

let html = cars.map(car => createCard(car)).join('');

document.querySelector('.list').innerHTML = html;
