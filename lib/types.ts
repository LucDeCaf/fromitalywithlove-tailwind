export interface LabelledPath {
  path: string;
  label: string;
}

export interface CardGridType {
  images: ImageType[];
  links?: boolean;
}

export interface ImageType {
  label: string;
  desc: string;
  downloadUrl: string;
  categories: string[];
  links: LabelledPath[];
}

export interface CardType {
  src: string;
  title: string;
  body: string;
  paths?: LabelledPath[];
}

export interface MenuItemType {
  children: JSX.Element | string;
  href: string;
}

export interface NavItemType {
  name: string;
  url: string;
}
