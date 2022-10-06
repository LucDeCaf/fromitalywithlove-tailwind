export interface ImageType {
  label: string;
  desc: string;
  downloadUrl: string;
}

export interface CardType {
  src: string;
  title: string;
  body: string;
}

export interface MenuItemType {
  children: JSX.Element | string;
  href: string;
}

export interface NavItemType {
  name: string;
  url: string;
}
