export type Badge = {
  label: string
  variant: 'sage' | 'spicy' | 'neutral'
}

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: 'burger' | 'contorni' | 'drink' | 'dessert'
  badge?: Badge
  chef?: boolean
}

export type Location = {
  id: string
  city: string
  name: string
  address: string
  zip: string
  phone: string
  hours: { days: string; time: string }[]
  comingSoon?: boolean
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/ristoranti', label: 'Ristoranti' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/contatti', label: 'Contatti' },
]

export const MENU_CATEGORIES = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'burger', label: 'Burger' },
  { id: 'contorni', label: 'Contorni' },
  { id: 'drink', label: 'Drink' },
  { id: 'dessert', label: 'Dessert' },
] as const

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'truffle-burn',
    name: 'Il Truffle Burn',
    description:
      'Doppio hamburger di manzo frollato a secco, maionese al tartufo nero, gouda affumicato, anelli di cipolla croccanti, pan brioche fatto in casa.',
    price: '€18',
    image: '/images/il-truffle-burn.png',
    category: 'burger',
    badge: { label: 'Speciale', variant: 'spicy' },
    chef: true,
  },
  {
    id: 'nashville-piccante',
    name: 'Nashville Piccante',
    description:
      'Pollo fritto croccante al latticello, olio al peperoncino piccante, sottaceti all\'aneto spessi, insalata di cavolo ranch fresca.',
    price: '€16',
    image: '/images/nashville-piccante.png',
    category: 'burger',
    badge: { label: 'Più Amato', variant: 'spicy' },
    chef: true,
  },
  {
    id: 'smash-classico',
    name: 'Smash Classico',
    description:
      'Due polpette schiacciate, formaggio americano, cipolle caramellate, sottaceti della casa, salsa speciale.',
    price: '€14',
    image: '/images/smash-classico.png',
    category: 'burger',
    badge: { label: 'Allevato ad Erba', variant: 'neutral' },
  },
  {
    id: 'earth-burger',
    name: 'Earth Burger',
    description:
      'Hamburger di fagioli neri e quinoa fatto in casa, peperoni rossi arrostiti, rucola selvatica, aioli all\'aglio vegano.',
    price: '€15',
    image: '/images/earth-burger.png',
    category: 'burger',
    badge: { label: 'Vegetariano', variant: 'sage' },
  },
  {
    id: 'fuoco-fiamme',
    name: 'Fuoco e Fiamme',
    description:
      'Hamburger speziato, formaggio pepper jack, pancetta affumicata, jalapeños freschi e salsa chipotle.',
    price: '€15',
    image: '/images/fuoco-e-fiamme.png',
    category: 'burger',
    badge: { label: 'Piccante', variant: 'spicy' },
  },
  {
    id: 'tartufo-funghi',
    name: 'Tartufo e Funghi',
    description:
      'Hamburger di manzo dal taglio spesso premium, funghi selvatici arrostiti, fontina e crema al tartufo.',
    price: '€16.50',
    image: '/images/Tartufo-e-Funghi.png',
    category: 'burger',
  },
  {
    id: 'truffle-fries',
    name: 'Loaded Truffle Fries',
    description:
      'Patatine fresche tagliate a mano, fonduta di cheddar, pancetta croccante, erba cipollina e olio al tartufo.',
    price: '€6',
    image: '/images/loaded-truffle-fries.png',
    category: 'contorni',
    badge: { label: 'Da Condividere', variant: 'neutral' },
  },
  {
    id: 'onion-rings',
    name: 'Anelli di Cipolla',
    description:
      'Anelli di cipolla dorati in pastella alla birra artigianale, serviti con salsa ranch affumicata.',
    price: '€5.50',
    image: '/images/onion-rings.png',
    category: 'contorni',
  },
  {
    id: 'craft-cola',
    name: 'Cola Artigianale',
    description:
      'La nostra cola alla spina fatta in casa con zucchero di canna e spezie naturali.',
    price: '€4',
    image: '/images/cola-artigianale.png',
    category: 'drink',
  },
  {
    id: 'milkshake',
    name: 'Milkshake alla Vaniglia',
    description:
      'Cremoso milkshake al gelato artigianale alla vaniglia del Madagascar, panna montata e caramello salato.',
    price: '€6.50',
    image: '/images/milkshake-vaniglia.png',
    category: 'drink',
    badge: { label: 'Bio', variant: 'sage' },
  },
  {
    id: 'brownie',
    name: 'Brownie Fondente',
    description:
      'Brownie al cioccolato fondente 70%, cuore morbido, gelato alla vaniglia e granella di nocciole.',
    price: '€7',
    image: '/images/brownie-fondente.png',
    category: 'dessert',
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake ai Frutti Rossi',
    description:
      'Cheesecake newyorkese cremosa con coulis di frutti di bosco freschi e base di biscotto al burro.',
    price: '€7',
    image: '/images/cheesecake-frutti-rossi.png',
    category: 'dessert',
  },
]

export const BEST_SELLERS = MENU_ITEMS.filter((i) =>
  ['smash-classico', 'tartufo-funghi', 'fuoco-fiamme'].includes(i.id),
)

export const LOCATIONS: Location[] = [
  {
    id: 'napoli',
    city: 'Napoli',
    name: 'Just Burger Napoli',
    address: 'Via Toledo, 45',
    zip: '80134 Napoli, NA',
    phone: '+39 081 123 4567',
    hours: [
      { days: 'Lun – Gio', time: '11:00 – 22:00' },
      { days: 'Ven – Sab', time: '11:00 – 23:00' },
      { days: 'Domenica', time: '12:00 – 21:30' },
    ],
  },
  {
    id: 'roma',
    city: 'Roma',
    name: 'Just Burger Roma',
    address: 'Via del Corso, 120',
    zip: '00186 Roma, RM',
    phone: '+39 06 987 6543',
    hours: [
      { days: 'Lun – Gio', time: '11:00 – 22:30' },
      { days: 'Ven – Sab', time: '11:00 – 23:30' },
      { days: 'Domenica', time: '12:00 – 22:00' },
    ],
  },
  {
    id: 'milano',
    city: 'Milano',
    name: 'Just Burger Milano',
    address: 'Corso Buenos Aires, 77',
    zip: '20124 Milano, MI',
    phone: '+39 02 456 7890',
    hours: [
      { days: 'Lun – Gio', time: '11:30 – 22:00' },
      { days: 'Ven – Sab', time: '11:30 – 23:00' },
      { days: 'Domenica', time: '12:00 – 21:00' },
    ],
  },
  {
    id: 'firenze',
    city: 'Firenze',
    name: 'Just Burger Firenze',
    address: 'Via de\' Tornabuoni, 18',
    zip: '50123 Firenze, FI',
    phone: '+39 055 234 5678',
    hours: [
      { days: 'Lun – Dom', time: 'Prossima apertura' },
    ],
    comingSoon: true,
  },
]

export const CONTACT_INFO = {
  address: ['Via Toledo, 45', '80134 Napoli, NA'],
  hours: [
    { days: 'Lun – Gio', time: '11:00 – 22:00' },
    { days: 'Ven – Sab', time: '11:00 – 23:00' },
    { days: 'Domenica', time: '12:00 – 21:30' },
  ],
}

export const STATS = [
  { value: '2019', label: 'Fondati a Napoli' },
  { value: '< 50km', label: 'Raggio fornitori' },
  { value: '100%', label: 'Ingredienti km 0' },
  { value: '4', label: 'Locali in Italia' },
]