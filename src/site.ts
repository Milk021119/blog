export const site = {
  name: '豆浆/Milk',
  heroTitle: 'HI, MILK',
  slogan: '想干什么就干什么',
  intro: '宅在家里好舒服啊',
  launchDate: '2026-07-20',
  description: '我的个人博客',
};

export const nav = [
  { href: '/', label: '首页' },
  { href: '/posts', label: '文章' },
  { href: '/projects', label: '项目' },
  { href: '/about', label: '关于' },
];

export const isNavActive = (href: string, path: string) =>
  href === '/' ? path === '/' : path.startsWith(href);

export const socials: { name: string; href: string; icon: string }[] = [];
