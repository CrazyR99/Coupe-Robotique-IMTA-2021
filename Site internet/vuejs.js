var articles_count = 5;

function openArticle(path, id) {
	console.log(path + './article_' + id + '.html');
	if (1 <= id && id <= articles_count) window.open(path + './article_' + id + '.html', '_self');
}

if (window.location.pathname.split('/').pop() == 'index.html') {
	new Vue({
		el: '#app',
		data: {
			team_members_nantes_details: {
				1: {
					name: 'Alexis HAMEL',
					avatar: './images/photo_AlexisHAMEL.png',
					taf: 'ROBIN',
					motiv: "J'ai développé un intérêt pour la robotique grâce aux projets FPA et CODEV Base Roulante",
					role: 'Respo documentation'
				},
				2: {
					name: 'Kamil TAKHI',
					avatar: './images/photo_KamilTAKHI.png',
					taf: 'ASCy',
					motiv:
						'J’aime la Robotique, le challenge de la coupe semblait intéressant et la perspective de travailler avec une autre équipe en distanciel à Brest semblait vraiment riche.',
					role: 'Respo projet'
				},
				3: {
					name: 'Charlie PAUVRE',
					avatar: './images/photo_CharliePAUVRE.png',
					taf: 'DCL',
					motiv:
						"J'ai beaucoup apprécié le projet CODEV SI de l'année dernière, que le projet était concret et nous faisait affronter d'autres écoles.",
					role: 'Respo documentation et site web'
				},
				4: {
					name: 'Théo FONTENIT',
					avatar: './images/photo_TheoFONTENIT.png',
					taf: 'ASCy',
					motiv:
						'Je suis passionné de robotique depuis le lycée et j’ai eu l’occasion d’assister à la coupe de France de robotique en 2019, cela m’a beaucoup plus et c’est pourquoi le projet me tiens à cœur.',
					role: 'Respo forum'
				},
				5: {
					name: 'Kevin MICHALEWICZ',
					avatar: './images/photo_KevinMICHALEWICZ.png',
					taf: 'ROBIN',
					motiv: "Je souhaitais échanger avec le campus de Brest J'ai un intérêt profond pour la robotique",
					role: 'Respo planning/budget'
				},
				6: {
					name: 'Sebastian HEYER',
					avatar: './images/photo_SebastianHEYER.png',
					taf: 'ROBIN',
					motiv:
						"Intéressé par l'électronique, je suis attiré par le gain d'expérience en la matière et par la compétition.",
					role: 'Respo communication'
				},
				7: {
					name: 'Victor NOSTHAS VIDES',
					avatar: './images/photo_VictorNOSTHASVIDES.png',
					taf: 'ASCy',
					motiv:
						"J'aime l'éléctronique et le traitement du signal, ce projet me semble parfait pour faire une première application des contenus de ma TAF de cette année. Le fait de participer dans une compétiton me motive encore plus.",
					role: 'Respo communication'
				}
			},
			team_members_brest_details: {
				1: {
					name: 'Azis SELLAMI',
					avatar: './images/photo_AzizSELLAMI.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo communication et sponsors'
				},
				2: {
					name: 'Andrés Esteban SIERRA SÁNCHEZ',
					avatar: './images/avatar.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo planning'
				},
				3: {
					name: 'Sean BONNEMAINS',
					avatar: './images/avatar.png',
					taf: 'COOC',
					motiv: '',
					role: 'Respo gestion de projet'
				},
				4: {
					name: 'Jérémy ROQUES',
					avatar: './images/avatar.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo forum'
				},
				5: {
					name: 'Xiayue SHEN',
					avatar: './images/avatar.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo documentation'
				},
				6: {
					name: 'Maxence NESME',
					avatar: './images/avatar.png',
					taf: 'MCE',
					motiv: '',
					role: 'Respo budget'
				}
			},
			articles: [
				{
					title: 'La Coupe de France de robotique 2020',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					title: 'La Coupe de France de robotique 2020',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					title: 'La Coupe de France de robotique 2020',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					title: 'La Coupe de France de robotique 2020',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					title: 'La Coupe de France de robotique 2020',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				}
			]
		}
	});
} else if (window.location.pathname.split('/').pop() == 'articles.html') {
	new Vue({
		el: '#articles-page',
		data: {
			articles: [
				{
					id: 1,
					title: 'La Coupe de France de robotique 2020',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					id: 2,
					title: 'La Coupe de France de robotique 2020 v2',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					id: 3,
					title: 'La Coupe de France de robotique 2020 v3',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					id: 4,
					title: 'La Coupe de France de robotique 2020 v4',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				},
				{
					id: 5,
					title: 'La Coupe de France de robotique 2020 v5',
					date: '25 septembre 2020',
					author: "Club robotique de l'IMT Atlantique",
					images: [ './images/image_article_1.png' ],
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
					sources: []
				}
			]
		},
		methods: {
			openArticle
		}
	});
} else if (window.location.pathname == '/articles/article_1.html') {
	new Vue({
		el: '#article-1',
		data: {
			article: {
				id: 1,
				title: 'La Coupe de France de robotique 2020',
				date: '25 septembre 2020',
				author: "Club robotique de l'IMT Atlantique",
				images: [ './images/image_article_1.png' ],
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
				sources: []
			}
		},
		methods: {
			openArticle
		}
	});
} else if (window.location.pathname == '/articles/article_2.html') {
	new Vue({
		el: '#article-2',
		data: {
			article: {
				id: 2,
				title: 'La Coupe de France de robotique 2020 v2',
				date: '25 septembre 2020',
				author: "Club robotique de l'IMT Atlantique",
				images: [ './images/image_article_1.png' ],
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
				sources: []
			}
		},
		methods: {
			openArticle
		}
	});
} else if (window.location.pathname == '/articles/article_3.html') {
	new Vue({
		el: '#article-3',
		data: {
			article: {
				id: 3,
				title: 'La Coupe de France de robotique 2020 v3',
				date: '25 septembre 2020',
				author: "Club robotique de l'IMT Atlantique",
				images: [ './images/image_article_1.png' ],
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
				sources: []
			}
		},
		methods: {
			openArticle
		}
	});
} else if (window.location.pathname == '/articles/article_4.html') {
	new Vue({
		el: '#article-4',
		data: {
			article: {
				id: 4,
				title: 'La Coupe de France de robotique 2020 v4',
				date: '25 septembre 2020',
				author: "Club robotique de l'IMT Atlantique",
				images: [ './images/image_article_1.png' ],
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
				sources: []
			}
		},
		methods: {
			openArticle
		}
	});
} else if (window.location.pathname == '/articles/article_5.html') {
	new Vue({
		el: '#article-5',
		data: {
			article: {
				id: 5,
				title: 'La Coupe de France de robotique 2020 v5',
				date: '25 septembre 2020',
				author: "Club robotique de l'IMT Atlantique",
				images: [ './images/image_article_1.png' ],
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nunc at libero feugiat laoreet. Donec elementum eros feugiat nulla mollis ullamcorper. Donec metus massa, dapibus vitae risus sit amet, congue sollicitudin purus. Proin posuere ac lorem quis imperdiet. Vivamus bibendum nec est ut rutrum. Quisque at finibus mauris. Curabitur molestie eget ante sit amet mollis. Pellentesque quis pulvinar erat. Phasellus sit amet tortor id nulla fringilla facilisis nec id orci. Mauris eleifend ante vel felis maximus rhoncus. Curabitur tincidunt nunc urna, sed malesuada sapien pharetra vitae. Sed tellus orci, congue sit amet urna eu, mattis rutrum elit. Vivamus ac ornare tellus.\n\n Nam molestie odio vel porttitor cursus. Cras aliquam tortor eget est aliquam finibus. Etiam vel orci dapibus, hendrerit ipsum rhoncus, sagittis est. Quisque pellentesque auctor sapien eu consequat. In hac habitasse platea dictumst. Vestibulum vehicula, lorem et fringilla tincidunt, magna sem auctor risus, in consequat justo ex at neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus mattis lectus sed euismod. Proin neque felis, sodales finibus ornare laoreet, malesuada ut sem. Morbi cursus venenatis eros, non sodales erat consequat at.\n\n Etiam vitae ligula sodales, convallis ex a, bibendum urna. Morbi pretium mattis molestie. In a risus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id congue libero. Integer gravida ipsum ut risus volutpat, sit amet venenatis orci laoreet. Vivamus sit amet venenatis libero, a dictum tellus. Pellentesque ultricies est eros, accumsan dictum nulla dictum et. Vestibulum aliquet lorem vitae mi efficitur volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero sed turpis ullamcorper rhoncus non ac velit. Nulla tincidunt ante eu mi pulvinar, non tempus erat commodo. Integer pharetra orci in lacus ornare sagittis. Aliquam erat volutpat. Mauris porttitor faucibus bibendum. Nam ac velit enim.\n\n Phasellus fermentum neque arcu, tincidunt faucibus quam consequat ac. Nam elementum quam ultricies vestibulum molestie. Nunc sit amet neque ornare, mattis libero vel, euismod erat. Duis in mauris quis purus aliquet eleifend vitae at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pellentesque elit ac dolor placerat, eu elementum ante auctor. Nam et metus tempus, vehicula quam id, fermentum dui. Fusce ultricies sagittis posuere. Aenean erat elit, faucibus at dolor non, elementum rutrum sem. Aliquam erat volutpat. Nunc quam tortor, viverra nec cursus vitae, iaculis at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a congue lacus, eget iaculis leo. Donec eget quam nec sapien accumsan malesuada sit amet ut orci.\n\n Curabitur malesuada mauris vitae lectus varius sodales. Maecenas mattis lectus orci, sed egestas massa bibendum nec. Morbi pellentesque bibendum consequat. Ut porttitor interdum lectus. Phasellus pretium libero id odio condimentum pharetra. Nullam sit amet purus ante. Sed vitae elit eros. Pellentesque sed neque vel orci suscipit sagittis.',
				sources: []
			}
		},
		methods: {
			openArticle
		}
	});
} else if (window.location.pathname.split('/').pop() == 'a_propos.html') {
	new Vue({
		el: '#a-propos-page',
		data: {
			team_members_nantes_details: {
				1: {
					name: 'Alexis HAMEL',
					avatar: './images/photo_AlexisHAMEL.png',
					taf: 'ROBIN',
					motiv: "J'ai développé un intérêt pour la robotique grâce aux projets FPA et CODEV Base Roulante",
					role: 'Respo documentation'
				},
				2: {
					name: 'Kamil TAKHI',
					avatar: './images/photo_KamilTAKHI.png',
					taf: 'ASCy',
					motiv:
						'J’aime la Robotique, le challenge de la coupe semblait intéressant et la perspective de travailler avec une autre équipe en distanciel à Brest semblait vraiment riche.',
					role: 'Respo projet'
				},
				3: {
					name: 'Charlie PAUVRE',
					avatar: './images/photo_CharliePAUVRE.png',
					taf: 'DCL',
					motiv:
						"J'ai beaucoup apprécié le projet CODEV SI de l'année dernière, que le projet était concret et nous faisait affronter d'autres écoles.",
					role: 'Respo documentation et site web'
				},
				4: {
					name: 'Théo FONTENIT',
					avatar: './images/photo_TheoFONTENIT.png',
					taf: 'ASCy',
					motiv:
						'Je suis passionné de robotique depuis le lycée et j’ai eu l’occasion d’assister à la coupe de France de robotique en 2019, cela m’a beaucoup plus et c’est pourquoi le projet me tiens à cœur.',
					role: 'Respo forum'
				},
				5: {
					name: 'Kevin MICHALEWICZ',
					avatar: './images/photo_KevinMICHALEWICZ.png',
					taf: 'ROBIN',
					motiv: "Je souhaitais échanger avec le campus de Brest J'ai un intérêt profond pour la robotique",
					role: 'Respo planning/budget'
				},
				6: {
					name: 'Sebastian HEYER',
					avatar: './images/photo_SebastianHEYER.png',
					taf: 'ROBIN',
					motiv:
						"Intéressé par l'électronique, je suis attiré par le gain d'expérience en la matière et par la compétition.",
					role: 'Respo communication'
				},
				7: {
					name: 'Victor NOSTHAS VIDES',
					avatar: './images/photo_VictorNOSTHASVIDES.png',
					taf: 'ASCy',
					motiv:
						"J'aime l'éléctronique et le traitement du signal, ce projet me semble parfait pour faire une première application des contenus de ma TAF de cette année. Le fait de participer dans une compétiton me motive encore plus.",
					role: 'Respo communication'
				}
			},
			team_members_brest_details: {
				1: {
					name: 'Azis SELLAMI',
					avatar: './images/photo_AzizSELLAMI.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo communication et sponsors'
				},
				2: {
					name: 'Andrés Esteban SIERRA SÁNCHEZ',
					avatar: './images/avatar.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo planning'
				},
				3: {
					name: 'Sean BONNEMAINS',
					avatar: './images/avatar.png',
					taf: 'COOC',
					motiv: '',
					role: 'Respo gestion de projet'
				},
				4: {
					name: 'Jérémy ROQUES',
					avatar: './images/avatar.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo forum'
				},
				5: {
					name: 'Xiayue SHEN',
					avatar: './images/avatar.png',
					taf: 'SEH',
					motiv: '',
					role: 'Respo documentation'
				},
				6: {
					name: 'Maxence NESME',
					avatar: './images/avatar.png',
					taf: 'MCE',
					motiv: '',
					role: 'Respo budget'
				}
			}
		}
	});
}
