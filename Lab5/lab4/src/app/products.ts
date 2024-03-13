export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating: number;
  categoryId: number;
  likes:number;

}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hfc/h07/84326675808286.jpg?format=gallery-medium"],
    name: 'Smartphone Google Pixel 8 8 GB/128 GB gray',
    price: 0,
    description: 'nFC technology: Yes\n' +
        'color: gray\n' +
        'screen type: OLED, Gorilla Glass Victus\n' +
        'diagonal: 6.2 inch\n' +
        'rAM size: 8 GB\n' +
        'processor: 8-core Google Tensor G3\n' +
        'built-in memory: 128.0 GB\n' +
        'battery capacity: 4575.0 mAh',
    link: 'https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-seryi-114016975/?c=750000000',
    rating: 0,
    categoryId: 1,
    likes:0,

  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h7d/hf3/83817514074142.jpg?format=gallery-medium"],
    name: 'Smartphone Google Pixel Fold 12 GB/256 GB black',
    price: 748999,
    description: 'nFC technology: Yes\n' +
        'black color\n' +
        'screen type: OLED, touch\n' +
        'diagonal: 7.6 inch\n' +
        'rAM size: 12 GB\n' +
        'processor: 8-core Google Tensor G2\n' +
        'built-in memory: 256.0 GB\n' +
        'battery capacity: 4821.0 mAh',
    link: 'https://kaspi.kz/shop/p/google-pixel-fold-12-gb-256-gb-chernyi-113360114/?c=750000000',
    rating: 5,
    categoryId: 1,
    likes:0,

  },
  {
    id: 3,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hbf/h4c/68674196406302.jpg?format=gallery-medium"],
    name: 'Google Pixel Buds A-Series headphones black ',
    price: 65184,
    description: 'type: headset\n' +
        'type: in-ear\n' +
        'connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'mount Type: Ear Mount\n' +
        'active Noise Cancellation: No\n' +
        'microphone: Yes',
    link: 'https://kaspi.kz/shop/p/google-pixel-buds-a-series-chernyi-108764457/?c=750000000',
    rating: 5,
    categoryId: 4,
    likes:0,



  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h46/hba/68063671025694.jpg?format=gallery-medium"],
    name: 'Laptop Lenovo ThinkPad T14 Gen 3 21CF0027RT black',
    price: 476086,
    description: 'screen diagonal: 14.0 inch\n' +
        'processor: AMD Ryzen 5 PRO 6650U\n' +
        'video card: AMD Radeon 660M\n' +
        'rAM size: 8.0 GB\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 256.0 GB',
    link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-t14-gen-3-21cf0027rt-chernyi-108519702/?c=750000000',
    rating: 5,
    categoryId: 2,
    likes:0,


  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h10/hf6/84798670831646.jpg?format=gallery-medium"],
    name: 'LEGO Fast and Furious 2 Nissan Skyle 76917, parts 319 pcs.',
    price: 14189,
    description: 'type: block\n' +
        'number of parts: 319\n' +
        'lEGO Series: Speed ​​Champions\n' +
        'child gender: boy\n' +
        'color: multicolor\n' +
        'main material: plastic',
    link: 'https://kaspi.kz/shop/p/lego-forsazh-2-nissan-skail-76917-detalei-319-sht-108313086/?c=750000000',
    rating: 0,
    categoryId: 4,
    likes:0,


  },{
    id:6,
    img:["https://resources.cdn-kaspi.kz/img/m/p/he9/h5d/64030413226014.jpg?format=gallery-medium"],
    name:"Mouse Xiaomi Mi Portable Mouse 2 BXSBMW02-BLACK black",
    price:6499,
    description:"sensor type: optical laser\n" +
        "connection type: wireless\n" +
        "interface: USB, ,Bluetooth\n" +
        "design: for right and left hand\n" +
        "gaming: Yes\n" +
        "optical sensor resolution: 4000.0 dpi",
    link:"https://kaspi.kz/shop/p/xiaomi-mi-portable-mouse-2-bxsbmw02-black-chernyi-102134869/?c=750000000",
    rating: 5,
    categoryId: 2,
    likes:0,


  },{
    id:7,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hcc/hfc/83011845849118.jpg?format=gallery-medium"],
    name:"Smart watch Google Pixel Watch gold-gray",
    price:129900,
    description:"platform Support: Android\n" +
        "case material: stainless steel steel\n" +
        "case color: golden\n" +
        "case shape: round\n" +
        "interfaces: Bluetooth, ,Wi-Fi\n" +
        "screen technology: AMOLED\n" +
        "rAM capacity: 2 GB\n" +
        "built-in memory: 32 GB\n" +
        "operating time: up to 24 hours",
    link:"https://kaspi.kz/shop/p/google-pixel-watch-zolotistyi-seryi-112726642/?c=750000000",
    rating: 4.5,
    categoryId: 3,
    likes:0,


  }
  ,{
    id:8,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h6c/h33/68441429016606.jpg?format=gallery-medium"],
    name:"Monitor AOC 25G3ZM/BK black",
    price:108910,
    description:"diagonal: 24.5 inch\n" +
        "resolution: 1920x1080\n" +
        "lCD Matrix Type: TFT *VA\n" +
        "brightness: 300.0 cd/m2\n" +
        "response time: 1.0ms\n" +
        "max. Frame rate: 240.0 Hz\n" +
        "inputs: HDMI, ,DisplayPort",
    link:"https://kaspi.kz/shop/p/aoc-25g3zm-bk-chernyi-108668975/?c=750000000",
    rating: 0,
    categoryId: 2,
    likes:0,


  },{
    id:9,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h2f/h5e/64392799059998.jpg?format=gallery-medium"],
    name:"Smartphone Google Pixel 6a 6 GB/128 GB white",
    price:174998,
    description:"nFC technology: Yes\n" +
        "white color\n" +
        "screen type: Super AMOLED, capacitive, multi-touch\n" +
        "diagonal: 6.2 inch\n" +
        "rAM size: 6 GB\n" +
        "processor: 8 cores (2x2.80 GHz Cortex-X1 and 2x2.25 GHz Cortex-A76 and 4x1.80 GHz Cortex-A55)\n" +
        "built-in memory: 128.0 GB\n" +
        "battery capacity: 4800.0 mAh",
    link:"https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-belyi-106250314/?c=750000000",
    rating: 5,
    categoryId: 1,
    likes:0,

  },{
    id:10,
    img:["https://resources.cdn-kaspi.kz/img/m/p/ha9/h27/64163639001118.jpg?format=gallery-medium"],
    name:"RAM Kingston Fury Beast KF432C16BBK2/16 16 GB",
    price:20590,
    description:"Tmemory type: DDR4\n" +
        "form factor: DIMM\n" +
        "number of modules included: 2\n" +
        "clock frequency: 3200 MH",
    link:"https://kaspi.kz/shop/p/kingston-fury-beast-kf432c16bbk2-16-16-gb-101900315/?c=750000000",
    rating: 4.5,
    categoryId: 2,
    likes:0,

  },
  {
    id: 11,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h0e/h77/64291474669598.jpg?format=gallery-medium"],
    name: 'Smartphone Google Pixel 7 8 GB/128 GB white',
    price: 213000,
    description: 'технология NFC: Да\n' +
      'цвет: белый\n' +
      'тип экрана: FHD+ (1080 x 2400) OLED\n' +
      'диагональ: 6.3 дюйм\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'процессор: Google Tensor G2\n' +
      'объем встроенной памяти: 128.0 ГБ\n' +
      'емкость аккумулятора: 4355.0 мАч',
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000',
    rating: 0,
    categoryId: 1,
    likes:0,

  },
  {
    id: 12,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h7c/h7f/80879192539166.jpg?format=gallery-medium"],
    name: 'Smartphone Google Pixel 7a 8 GB/128 GB white',
    price: 203000,
    description: 'технология NFC: Да\n' +
      'цвет: белый\n' +
      'тип экрана: OLED, HDR10+, Gorilla Glass v3\n' +
      'диагональ: 6.1 дюйм\n' +
      'размер оперативной памяти: 8 ГБ\n' +
      'процессор: Google Tensor G2\n' +
      'объем встроенной памяти: 128.0 ГБ\n' +
      'емкость аккумулятора: 4385.0 мАч',
    link: 'https://kaspi.kz/shop/p/google-pixel-7a-8-gb-128-gb-belyi-110489778/?c=750000000',
    rating: 0,
    categoryId: 1,
    likes:0,

  },
  {
    id:13,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h92/h8e/85181715251230.jpg?format=gallery-medium"],
    name:"Laptop ASUS Zenbook UM3402YA 90NB0W95-M01BX0 black",
    price:399000,
    description:'диагональ экрана: 14.0 дюйм\n' +
      'процессор: AMD Ryzen 5 7530U\n' +
      'видеокарта: AMD Radeon Graphics\n' +
      'размер оперативной памяти: 16.0 Гб\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 1000.0 Гб',
    link:"https://kaspi.kz/shop/p/asus-zenbook-um3402ya-90nb0w95-m01bx0-chernyi-116664096/?c=750000000",
    rating: 4.5,
    categoryId: 2,
    likes:0,


  }
  ,
  {
    id:14,
    img:["https://resources.cdn-kaspi.kz/img/m/p/he9/h03/65123593650206.jpg?format=gallery-medium"],
    name:"Smart watch Amazfit GTS 4 Mini pink",
    price:39195,
    description:'поддержка платформ: Android, ,iOS\n' +
      'материал корпуса: алюминий\n' +
      'цвет корпуса: розовый\n' +
      'форма корпуса: квадратная\n' +
      'интерфейсы: Bluetooth\n' +
      'технология экрана: AMOLED\n' +
      'время работы: в обычном режиме: 15 дней, в режиме энергосбережения: 45 дней',
    link:"https://kaspi.kz/shop/p/amazfit-gts-4-mini-rozovyi-rozovyi-106241668/?c=750000000",
    rating: 4.5,
    categoryId: 3,
    likes:0,


  }
  ,
  {
    id:15,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h76/h49/63778732965918.jpg?format=gallery-medium"],
    name:" watch CASIO MTP-1374D-1AVDF",
    price:30858,
    description:'способ отображения времени: аналоговый (стрелки)\n' +
      'тип: кварцевые\n' +
      'материал корпуса: сталь\n' +
      'противоударные: Нет\n' +
      'для кого: для мужчин\n' +
      'цвет: серебристый',
    link:"https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374d-1avdf-stal--21401209/?c=750000000",
    rating: 4.5,
    categoryId: 3,
    likes:0,


  }
  ,
  {
    id:16,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hff/h46/64317500620830.jpg?format=gallery-medium"],
    name:"Smart watch  Huawei WATCH Fit 2 Active black",
    price:36960,
    description:'поддержка платформ: Android, ,iOS\n' +
      'материал корпуса: пластик\n' +
      'цвет корпуса: черный\n' +
      'форма корпуса: прямоугольная\n' +
      'интерфейсы: Bluetooth\n' +
      'технология экрана: AMOLED\n' +
      'время работы: в активном режиме: 168 ч , в режиме ожидания: 240 ч',
    link:"https://kaspi.kz/shop/p/huawei-watch-fit-2-active-chernyi-105632660/?c=750000000",
    rating: 4.5,
    categoryId: 3,
    likes:0,


  }
  ,
  {
    id:17,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h63/h88/64414071029790.jpg?format=gallery-medium"],
    name:"Smart watch Samsung Galaxy Watch 5 Pro 45 мм gray",
    price:72500,
    description:'поддержка платформ: Android\n' +
      'материал корпуса: титан\n' +
      'цвет корпуса: серый\n' +
      'форма корпуса: круглая\n' +
      'интерфейсы: Bluetooth, ,Wi-Fi\n' +
      'технология экрана: Super AMOLED\n' +
      'объем оперативной памяти: 1.5 Гб\n' +
      'объем встроенной памяти: 16 Гб\n' +
      'время работы: 40 часов',
    link:"https://kaspi.kz/shop/p/samsung-galaxy-watch-5-pro-45-mm-seryi-106174847/?c=750000000",
    rating: 4.5,
    categoryId: 3,
    likes:0,


  }
  ,
  {
    id: 18,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hfc/h07/64155512635422.jpg?format=gallery-medium"],
    name: 'Samsung Galaxy Buds 2 SM-R177NZKACIS headphones black ',
    price: 36978,
    description: 'тип: гарнитура\n' +
      'вид: внутриканальные\n' +
      'подключение: беспроводное\n' +
      'тип акустического оформления: закрытые\n' +
      'тип крепления: без крепления\n' +
      'система активного шумоподавления: Да\n' +
      'микрофон: Да',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-2-sm-r177nzkacis-chernyi-102046373/?c=750000000',
    rating: 5,
    categoryId: 4,
    likes:0,



  },
  {
    id: 19,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h30/h3c/84787933741086.jpg?format=gallery-medium"],
    name: 'LEGO Букет цветов 10280, деталей 756 шт',
    price: 36978,
    description: 'тип: блочный\n' +
      'количество деталей: 756\n' +
      'серия LEGO: Icons\n' +
      'пол ребенка: универсальный\n' +
      'цвет: мультиколор\n' +
      'основной материал: пластик',
    link: 'https://kaspi.kz/shop/p/lego-buket-tsvetov-10280-detalei-756-sht-101204989/?c=750000000',
    rating: 5,
    categoryId: 4,
    likes:0,



  },

  {
    id: 20,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hec/h84/84659371474974.jpg?format=gallery-medium"],
    name: 'Игровая приставка OWLLON D-007 plus\n ',
    price: 36978,
    description: "тип: портативная\n" +
      "поддержка UHD (4K): Нет\n" +
      "тип носителя для игр: micro SD",
    link: 'https://kaspi.kz/shop/p/owllon-d-007-plus-115169548/?c=750000000',
    rating: 5,
    categoryId: 4,
    likes:0,



  },
];

