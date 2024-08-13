import { BotMessageSquare } from 'lucide-react'
import { BatteryCharging } from 'lucide-react'
import { Fingerprint } from 'lucide-react'
import { ShieldHalf } from 'lucide-react'
import { PlugZap } from 'lucide-react'
import { GlobeLock } from 'lucide-react'

import user1 from '../assets/profile-pictures/user1.jpg'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

export const navItems = [
  { label: 'Функции', href: '#' },
  { label: 'Рабочий процесс', href: '#' },
  { label: 'Цены', href: '#' },
  { label: 'Отзывы', href: '#' },
]

export const testimonials = [
  {
    user: 'Джон Доу',
    company: 'Звездные решения',
    image: user1,
    text: 'Я очень доволен предоставленными услугами. Команда была отзывчивой, профессиональной и добилась результатов, превзошедших мои ожидания.',
  },
  {
    user: 'Джейн Смит',
    company: 'Технологии Голубого Горизонта',
    image: user2,
    text: 'Я очень доволен результатом нашего проекта. Креативность команды и навыки решения проблем сыграли важную роль в воплощении нашего видения в жизнь.',
  },
  {
    user: 'Дэвид Джонсон',
    company: 'Квантовые инновации',
    image: user3,
    text: 'Работать с этой компанией было одно удовольствие. Их внимание к деталям и стремление к совершенству заслуживают похвалы. Я очень рекомендую их всем, кто ищет первоклассный сервис.',
  },
  {
    user: 'Рони Браун',
    company: 'Фьюжн Динамика',
    image: user4,
    text: 'Работа с командой компании XYZ изменила правила игры для нашего проекта. Их внимание к деталям и инновационные решения помогли нам достичь наших целей быстрее, чем мы думали. Мы благодарны им за профессионализм и профессионализм!',
  },
  {
    user: 'Майкл Уилсон',
    company: 'Дальновидные творения',
    image: user5,
    text: 'Я поражен уровнем профессионализма и преданности делу, проявленных командой. Они смогли превзойти наши ожидания и добиться выдающихся результатов.',
  },
  {
    user: 'Эмили Дэвис',
    company: 'Синергия Системы',
    image: user6,
    text: 'Команда сделала все возможное, чтобы обеспечить успех нашего проекта. Их опыт и преданность делу не имеют себе равных. Я с нетерпением жду возможности снова поработать с ними в будущем.',
  },
]

export const features = [
  {
    icon: <BotMessageSquare />,
    text: 'Drag-and-Drop Interface',
    description:
      'Легко проектируйте и организуйте свою виртуальную среду с помощью удобного интерфейса перетаскивания.',
  },
  {
    icon: <Fingerprint />,
    text: 'Multi-Platform Compatibility',
    description:
      'Создавайте VR-приложения, которые бесперебойно работают на нескольких платформах, включая мобильные, настольные компьютеры и гарнитуры VR.',
  },
  {
    icon: <ShieldHalf />,
    text: 'Built-in Templates',
    description:
      'Начните свои VR-проекты с помощью множества встроенных шаблонов для разных типов приложений и сред.',
  },
  {
    icon: <BatteryCharging />,
    text: 'Real-Time Preview',
    description:
      'Предварительный просмотр вашего VR-приложения в режиме реального времени по мере внесения изменений, что позволяет быстро выполнять итерации и корректировки.',
  },
  {
    icon: <PlugZap />,
    text: 'Collaboration Tools',
    description:
      'Работайте вместе со своей командой над проектами виртуальной реальности в режиме реального времени, обеспечивая беспрепятственное сотрудничество и обмен идеями.',
  },
  {
    icon: <GlobeLock />,
    text: 'Analytics Dashboard',
    description:
      'Получите ценную информацию о взаимодействии и поведении пользователей в ваших VR-приложениях с помощью встроенной аналитической панели.',
  },
]

export const checklistItems = [
  {
    title: 'Code merge made easy',
    description:
      'Отслеживайте производительность своих VR-приложений и получайте представление о поведении пользователей.',
  },
  {
    title: 'Review code without worry',
    description:
      'Отслеживайте производительность своих VR-приложений и получайте представление о поведении пользователей.',
  },
  {
    title: 'AI Assistance to reduce time',
    description:
      'Отслеживайте производительность своих VR-приложений и получайте представление о поведении пользователей.',
  },
  {
    title: 'Share work in minutes',
    description:
      'Отслеживайте производительность своих VR-приложений и получайте представление о поведении пользователей.',
  },
]

export const pricingOptions = [
  {
    title: 'Бесплатно',
    price: '$0',
    features: [
      'Private board sharing',
      '5 Gb Storage',
      'Web Analytics',
      'Private Mode',
    ],
  },
  {
    title: 'Pro',
    price: '$10',
    features: [
      'Private board sharing',
      '10 Gb Storage',
      'Web Analytics (Advance)',
      'Private Mode',
    ],
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
  },
]

export const resourcesLinks = [
  { href: '#', text: 'Начините' },
  { href: '#', text: 'Документация' },
  { href: '#', text: 'Учебники' },
  { href: '#', text: 'API Reference' },
  { href: '#', text: 'Форумы сообщества' },
]

export const platformLinks = [
  { href: '#', text: 'Функции' },
  { href: '#', text: 'Поддерживаемые устройства' },
  { href: '#', text: 'Системные требования' },
  { href: '#', text: 'Загрузки' },
  { href: '#', text: 'Примечания к выпуску' },
]

export const communityLinks = [
  { href: '#', text: 'События' },
  { href: '#', text: 'Встречи' },
  { href: '#', text: 'Конференции' },
  { href: '#', text: 'Хакатоны' },
  { href: '#', text: 'Вакансии' },
]
