export const photoCategories = {
  'Ameristar': [
    '1000002893001(1).jpg',
    '1000002894(1).jpg',
    '490654144_1083822673763818_6407982423294302308_n.jpg',
    '490754914_1085024603643625_8266391198350655194_n.jpg',
    '491509820_1083822503763835_8302664543931386057_n.jpg',
    'FB_IMG_1660151993717.jpg',
    '../Hero_Image_12.jpg'
  ],
  'Commercial': [
    '488519825_1077025151110237_580836037559699280_n.jpg',
    '488544588_1077025094443576_7595472113235010536_n.jpg',
    '488962114_1077025047776914_537378424244966229_n.jpg',
    'Attachment(137).jpg',
    'Attachment(139).jpg'
  ],
  'Gates-and-Gate-Operators': [
    '488675040_1077025164443569_4432792265416510015_n.jpg',
    '488706680_1077025161110236_3664048956504830031_n.jpg',
    '488867158_1077025147776904_1813597507789668214_n.jpg',
    'Attachment(81).jpg',
    'Attachment(82).jpg'
  ],
  'Pre-Stained': [
    'FullSizeR.jpg',
    'Huemiller-All-Seasons-Colors-June-2022-1000-b 2.png',
    'Huemiller-All-Seasons-Colors-June-2022-1000-b.png',
    'IMG_5981.jpg',
    'IMG_5982.jpg',
    '../Hero_Image_8.jpeg',
    '../Privacy/Resized_20220717_202221.jpeg'
  ],
  'Privacy': [
    '20230216_173524.jpg',
    '20230509_173703.jpg',
    '20230616_111240.jpg',
    'Attachment(100).jpg',
    'Attachment(102).jpg',
    'Attachment(104).jpg',
    'Attachment(52).jpg',
    'Attachment(78).jpg',
    'Attachment(81).jpg',
    'Attachment(98).jpg',
    'IMG_20230802_110624722(1).jpg',
    '../Hero_Image_1.jpg',
    '../Hero_Image_9.jpeg',
    '../Hero_Image_11.jpg'
  ],
  'Round Rail': [
    'Attachment(88).jpg',
    'Attachment(94).jpg',
    'Attachment(95).jpg'
  ],
  'Vinyl': [
    '488769225_1075892637890155_6064129988108749659_n.jpg',
    '491410386_1085715473574538_338669842960035959_n.jpg',
    '491678158_1085715466907872_1597571667533114388_n.jpg',
    '492005296_1090761233069962_6048506380568357776_n.jpg',
    'IMG_20210908_185818560.jpg',
    'IMG_20210912_164937768.jpg'
  ]
} as const;

export type PhotoCategory = keyof typeof photoCategories;
