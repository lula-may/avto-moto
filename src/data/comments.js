const comments = [
  {
    date: new Date('2021-07-24T12:15'),
    id: 1,
    user: {
      id: 11,
      name: 'Борис Иванов',
    },
    comment: {
      advantage: 'мощность, внешний вид',
      disadvantage: 'Слабые тормозные колодки (пришлось заменить)',
      text: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    },
    rating: 3,
  },
  {
    date: new Date('2021-07-25T12:15'),
    id: 2,
    user: {
      id: 12,
      name: 'Марсель Исмагилов',
    },
    comment: {
      advantage: 'Cтиль, комфорт, управляемость',
      disadvantage: ' Дорогой ремонт и обслуживание',
      text: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    },
    rating: 3,
  },
];

export {comments};
