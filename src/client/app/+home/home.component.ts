// angular
import { Component } from '@angular/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';

// app
import { Actuality } from './models/actuality';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent extends BaseComponent {
    news: Array<Actuality> = [];
    constructor() {
        super();
        this.news = [
            {
                title: '#prospect : 4 nouveaux clients',
                subTitle: 'Google (3), Facebook (1)',
                icon: 'inbox',
                body: '',
                indices: [
                ],
                tags: [
                ]
            },
            {
                title: 'Nouveau client : Lejeau Motoculture (venter de marchandises)',
                subTitle: 'Google',
                body: '',
                icon: 'person_add',
                indices: [
                    {
                        name: 'Solvabilitée',
                        color: 'green'
                    }
                ],
                tags: [
                    {
                        name: 'prospect',
                        color: 'purple'
                    }
                ]
            },
            {
                title: 'Recouvrement : NR-COMMUNICATION',
                subTitle: '10 commandes impayées pour un total de 1305€',
                body: '',
                icon: 'access_alarm',
                indices: [
                    {
                        name: 'Solvabilitée',
                        color: 'green'
                    }
                ],
                tags: [
                    {
                        name: 'à rapeller',
                        color: 'purple'
                    }
                ]
            },
            {
                title: 'Objectifs : Nouvel objectif sur l\'offre liberty',
                subTitle: 'Facebook',
                body: '',
                icon: 'show_chart',
                indices: [
                ],
                tags: [
                ]
            }
        ];
        console.log(this.news);
    }
}
