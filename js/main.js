window.onload = function () {

	async function getLinks() {

			const file = "json/links.json";
			let response = await fetch(file, {
				method: 'GET'
			});
			if(response.ok) {
				let result = await response.json();
				loadLinks(result);
				test(result);
			} 
			else {
				alert('Oшибка');
			}

			
		function loadLinks(data){

	const linksItems = document.querySelector('.list__fonts');	
			data.fonts.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
			
				let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__fonts-item">`;
				let linkTemplateEnd = `</li>`;
				let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

				let linkTemplate = '';
				linkTemplate += linkTemplateStart;
				linkTemplate += linkTemplateContent;
				linkTemplate += linkTemplateEnd;
			
				linksItems.insertAdjacentHTML('beforeend', linkTemplate);
			})
					
	const animItems = document.querySelector('.list__anim');
			data.anim.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__anim-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
				animItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const validtems = document.querySelector('.list__valid');
			data.validate.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__valid-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			validtems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const sliderItems = document.querySelector('.list__slider');
			data.slider.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__slider-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			sliderItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const iconItems = document.querySelector('.list__icon');
			data.icons.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__icon-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			iconItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const faviconItems = document.querySelector('.list__favicon');
			data.favicon.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__favicon-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			faviconItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const videoItems = document.querySelector('.list__video');
			data.video.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__video-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			videoItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const filterItems = document.querySelector('.list__filter');
			data.filter.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__filter-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			filterItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const exampleItems = document.querySelector('.list__example');
			data.example.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__example-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			exampleItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const studyItems = document.querySelector('.list__study');
			data.study.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__study-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			studyItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

	const materialItems = document.querySelector('.list__material');
			data.material.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__material-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}" target="_blank">${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			materialItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

			const filmsItems = document.querySelector('.list__films');
			data.films.forEach(item => {
					const linkId = item.id;
					const linkUrl = item.url;
					const linkTitle = item.title;
		
			let linkTemplateStart = `<li data-id="${linkId}" class="list__item list__films-item">`;
			let linkTemplateEnd = `</li>`;
			let linkTemplateContent = `<a class="list__item-link" href="${linkUrl}"target="_blank" >${linkTitle}</a>`;

			let linkTemplate = '';
			linkTemplate += linkTemplateStart;
			linkTemplate += linkTemplateContent;
			linkTemplate += linkTemplateEnd;
		
			filmsItems.insertAdjacentHTML('beforeend', linkTemplate);
			})

		} 

		function test() {
				$(function (){
					$('.list').find('.list__item-link').miniPreview({ prefetch: 'pageload' });
				})
		}
	}
	getLinks();

	} 



