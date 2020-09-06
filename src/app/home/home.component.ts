import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	title = 'Hero Dashboard';
	subTitle = 'Rent a Hero!';
	arrived: string;
	isAuth: boolean;

	budget = '100000000000000';

	heroes = [
		{
			name: 'Captain Marvel',
			rent: '20000000'
		},
		{
			name: 'Spiderman',
			rent: 100000
		},
		{
			name: 'Black Panther',
			rent: '10000000'
		},
		{
			name: 'Thor',
			rent: '10000000000'
		}
	];

	imgSrc = 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/rabbit-9';
	alText = 'Rabbit';

	constructor() {}

	ngOnInit(): void {
		this.isAuth = true;
	}
}
