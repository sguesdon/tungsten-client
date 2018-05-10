export interface Tag {
    name: string,
    color: string
};

export interface Customer {
  denomination: string;
  nomEnseigne: string;
  raisonSociale: string;
  tags: array<Tag>;
};

export const initialCustomer: Customer = {
    denomination: '',
    nomEnseigne: '',
    raisonSociale: '',
    tags: [
        {
            name: 'Prospect',
            color: ''
        }
    ];
};
