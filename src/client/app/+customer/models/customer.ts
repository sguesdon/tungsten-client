export interface Tag {
    name: string,
    color: string,
    selected: boolean
};

export interface Customer {
  denomination: string;
  nomEnseigne: string;
  raisonSociale: string;
  tags: Array<Tag>;
  selected: boolean;
};

export const initialTag: Tag = {
    name: '',
    color: 'primary',
    selected: false
};

export const initialCustomer: Customer = {
    denomination: '',
    nomEnseigne: '',
    raisonSociale: '',
    selected: false,
    tags: [
        initialTag
    ]
};
