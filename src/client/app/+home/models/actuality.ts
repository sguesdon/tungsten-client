export interface Tag {
    name: string,
    color: string
};

export interface Actuality {
  title: string;
  subTitle: string;
  body: string;
  icon: string;
  indices: array<Tag>;
  tags: array<Tag>;
};

export const initialActuality: Actuality = {
  title: '',
  subTitle: '',
  indices: [],
  tags: []
};
