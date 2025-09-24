// Данные для экспонатов с внешними ссылками
const exhibitsData = [
    {
        id: 1,
        title: "НАКАНУНЕ ВОЙНЫ",
        description: "22 июня 1941 года… Еще накануне жизнь казалась безмятежной…советские люди спешили домой после рабочей недели, влюбленные пары прогуливались по зелёным аллеям, а в школах прозвенел последний звонок…  Никто тогда не знал, что всего одна дата может сломать миллионы жизней и судеб, разметать в клочья мечты и надежды.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_1-179/?panorama=exhibit1",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit1",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_1/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit1"
    },
    {
        id: 2,
        title: "БРЕСТСКАЯ КРЕПОСТЬ",
        description: "Первыми удар вермахта приняли на себя советские пограничники. Навсегда в историю вписана оборона Брестской крепости. Приняв решение сопротивляться врагу, защитники Бреста героически обороняли крепость на протяжении месяца. Цитадель пала 23 июля.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_1-179/?panorama=exhibit2",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit2",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_2/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit2"
    },
    {
        id: 3,
        title: "БИТВА ПОД МОСКВОЙ",
        description: "В октябре 1941 года немцы сосредоточили главные силы на московском направлении. Началось немецкое наступление на Москву. Московская битва завершилась Победой Советской армии и развеяла миф о непобедимости фашистских войск.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_1-179/?panorama=exhibit3",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit3",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_3/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit3"
    },
    {
        id: 4,
        title: "ВАГОН-ГОСПИТАЛЬ",
        description: "В санитарных вагонах в годы войны не только перевозили раненых, но и оказывали необходимую медицинскую помощь. Бойцы называли врачей и медицинских сестер ангелами в белых халатах.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_1-179/?panorama=exhibit4",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit4",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_4/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit4"
    },
    {
        id: 5,
        title: "КАЗАНЬ – ГОРОД ТРУДОВОЙ ДОБЛЕСТИ",
        description: "Республика Татарстан в годы войны стала одной из тыловых баз Красной Армии, её промышленность перестроилась на выпуск оборонной продукции, жители активно участвовали в помощи фронту, столица республики г. Казань превратилась в крупный госпитальный центр. С первых дней войны женщины и дети Татарии встали за станки оборонных предприятий. Благодаря своему подвигу, Казань носит звание города трудовой доблести.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_2-179/?panorama=exhibit5",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit5",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_5/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit5"
    },
    {
        id: 6,
        title: "ТЫЛ ФРОНТУ!",
        description: "Не только силами фронта били в те дни врага. Героический подвиг совершили труженики тыла. В эти суровые годы задача по обеспечению фронта легла на хрупкие женские плечи. Круглосуточно в цехах трудились подростки, женщины, пожилые люди, чтобы снабдить фронт всем необходимым.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_2-179/?panorama=exhibit5",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit6",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_6/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit6"
    },
    {
        id: 7,
        title: "БЛОКАДНЫЙ ЛЕНИНГРАД",
        description: "Одна из самых трагических страниц в истории 20 века – блокада Ленинграда. Ад для жителей начался 8 сентября 1941 года, когда гитлеровские войска замкнули кольцо вокруг города. 900 дней блокады стали символом ужаса и жестокости, но вместе с тем и героизма, непобедимости и стойкости советского народа…",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_2-179/?panorama=exhibit6",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit7",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_7/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit7"
    },
    {
        id: 8,
        title: "СТАЛИНГРАДСКАЯ БИТВА",
        description: "17 июля 1942 года началась Сталинградская битва. К началу октября гитлеровцы овладели большей частью Сталинграда. Но шел отчаянный бой не только за каждый дом, но и за каждый этаж. Символом беспримерного мужества защитников Сталинграда стал «дом Павлова».",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_2-179/?panorama=exhibit7",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit8",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_8/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit8"
    },
    {
        id: 9,
        title: "ОСВОБОЖДЕНИЕ ЕВРОПЫ",
        description: "В марте 1944 года Советские войска вышли на государственную границу СССР. Путь наших доблестных солдат к победе будет лежать через Европу. Шаг за шагом, город за городом, наша армия освободит народы Европы от гнёта фашизма.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_2-179/?panorama=exhibit8",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit9",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_9/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit9"
    },
    {
        id: 10,
        title: "ПОБЕДА",
        description: "С 16 апреля велись ожесточенные бои за Берлин, и вот 30 апреля ровно в 21 час 50 минут над зданием Рейхстага взвилось красное советское знамя. 1418 дней войны были позади.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_2-179/?panorama=exhibit8",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit10",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_10/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit10"
    },
    {
        id: 11,
        title: "ПАМЯТЬ",
        description: "Победа подарила жизнь будущим поколениям, но была оплачена очень дорогой ценой. 27 миллионов советских граждан пожертвовали собой ради мира на земле и свободы народов.",
        panorama: "https://ganeevamirhosting-dev.github.io/school-museum-panorams_2-179/?panorama=exhibit8",
        audio: "https://ваш-сайт-аудио.github.io/?audio=exhibit11",
        video: "https://drive.google.com/file/d/ВАШ_ID_ВИДЕО_11/preview",
        gallery: "https://ganeevamirhosting-dev.github.io/school-museum-gallery-179/?gallery=exhibit11"
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    generateExhibits();
    initModals();
    initScrollAnimation();
});

// Генерация карточек экспонатов
function generateExhibits() {
    const container = document.getElementById('exhibits-container');

    exhibitsData.forEach(exhibit => {
        const card = document.createElement('div');
        card.className = 'exhibit-card';
        card.setAttribute('data-id', exhibit.id);

        card.innerHTML = `
            <div class="exhibit-img">${exhibit.title}</div>
            <div class="exhibit-content">
                <h3>${exhibit.title}</h3>
                <p>${exhibit.description}</p>
                <a href="#" class="read-more">Подробнее <i class="fas fa-arrow-right"></i></a>
            </div>
        `;

        // Добавляем оверлей из шаблона
        const overlayTemplate = document.getElementById('overlay-template');
        const overlay = overlayTemplate.content.cloneNode(true);
        overlay.querySelector('.overlay-title').textContent = exhibit.title;
        card.appendChild(overlay);

        container.appendChild(card);
    });

    initExhibitCards();
}

// Инициализация карточек экспонатов
function initExhibitCards() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const closeOverlayButtons = document.querySelectorAll('.close-overlay');
    const actionButtons = document.querySelectorAll('.action-btn');

    // Обработка кнопки "Подробнее"
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.exhibit-card');
            const overlay = card.querySelector('.exhibit-overlay');

            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Закрытие оверлея
    closeOverlayButtons.forEach(button => {
        button.addEventListener('click', function () {
            const overlay = this.closest('.exhibit-overlay');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Обработка кнопок действий
    actionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const action = this.getAttribute('data-action');
            const card = this.closest('.exhibit-card');
            const exhibitId = parseInt(card.getAttribute('data-id'));
            const overlay = card.querySelector('.exhibit-overlay');

            overlay.classList.remove('active');

            // Находим данные экспоната
            const exhibit = exhibitsData.find(e => e.id === exhibitId);

            if (exhibit) {
                switch (action) {
                    case 'panorama':
                        openPanorama(exhibit);
                        break;
                    case 'audio':
                        openAudio(exhibit);
                        break;
                    case 'video':
                        openVideo(exhibit);
                        break;
                    case 'gallery':
                        openGallery(exhibit);
                        break;
                }
            }
        });
    });
}

// Инициализация модальных окон
function initModals() {
    // Закрытие модальных окон по клику на крестик
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';

            // Останавливаем видео при закрытии
            if (modal.id === 'video-modal') {
                const videoPlayer = document.getElementById('video-player');
                videoPlayer.innerHTML = '';
            }
        });
    });

    // Закрытие модальных окон по клику вне контента
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';

                // Очищаем видео при закрытии
                if (this.id === 'video-modal') {
                    const videoPlayer = document.getElementById('video-player');
                    videoPlayer.innerHTML = '';
                }
            }
        });
    });
}

// Открытие панорамы (редирект на внешний сайт)
function openPanorama(exhibit) {
    window.open(exhibit.panorama, '_blank');
}

// Открытие аудио гида (редирект на внешний сайт)
function openAudio(exhibit) {
    window.open(exhibit.audio, '_blank');
}

// Открытие фотогалереи (редирект на внешний сайт)
function openGallery(exhibit) {
    window.open(exhibit.gallery, '_blank');
}

// Открытие видео с Google Drive
function openVideo(exhibit) {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');

    videoTitle.textContent = exhibit.title;

    // Встраиваем видео с Google Drive
    videoPlayer.innerHTML = `
        <iframe src="${exhibit.video}" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allowfullscreen
                allow="autoplay">
        </iframe>
    `;

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Анимация появления элементов при скролле
function initScrollAnimation() {
    const exhibitCards = document.querySelectorAll('.exhibit-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100 * Array.from(exhibitCards).indexOf(entry.target));
            }
        });
    }, { threshold: 0.1 });

    exhibitCards.forEach(card => {
        observer.observe(card);
    });
}

// Плавная прокрутка для навигации
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});