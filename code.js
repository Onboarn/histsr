const hotspots = [
    {
        id: "vokz",
        x: 12,
        y: 29.5,
        width: 4,
        height: 4,
        rotate: -7,

        left: {
            title: "Вокзал",
            summary1: "История",
            text: "Первое упоминание «…об открытии правильного движения на участке Ландварово-Роменской железной дороги от Бобруйска до Гомеля протяженностью 141, 81 версты товарных поездов с 16 ноября 1873 года, а пассажирских поездов с 17 ноября 1873 года» содержится в Уведомлении № 320 от 20 ноября 1873 года сенатора Селифонтова военному министру с рассылкой копий этого документа в адрес министра внутренних дел и министра финансов.С этой даты началось строительство первого каменного здания пассажирского вокзала станции Гомель.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/vokz.jpg" },

            ]
        },
        right: {
            title: "Вокзал",
            summary1: "Сейчиас",
            text: "Вокзал Гомель-Пассажирский является главным железнодорожным вокзалом города Гомеля и входящим в состав Гомельского отделения Белорусской железной дороги. Он включает в себя пассажирский парк и грузовой парк А, а также остановочные пункты Гомель-Нечётный и Гомель-Чётный. Вокзал был построен в 1890-е годы и реконструирован после Великой Отечественной войны в 1946 году. ",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/vokznow.png" }
            ]
        }
    },
    {
        id: "lenina",
        x: 43,
        y: 52,
        width: 66.1,
        height: 2.5,
        rotate: 31.7,
        left: {
            title: "Улица Замковая",
            summary1: "История",
            text: "Это одна из старейших улиц города. Замковая улица застраивалась медленно, что было обусловлено тем, что она никуда не вела и заканчивалась у Горелого болота. Была нанесена на план Гомеля в 1783 году. Первое название произошло от замка, находившегося на улице до 1785 года. В то время улица была длиннее и проходила за нынешнюю Привокзальную площадь.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/lenina.jpg" },

            ]
        },
        right: {
            title: "Проспект Ленина",
            summary1: "Достопримечательности",
            text: "Проспект Ленина в Гомеле является одной из старейших улиц города и протянулся от площади Ленина до Привокзальной площади. Улица имеет историческое значение и была переименована в несколько раз. В историческом контексте проспект Ленина стал важной транспортной магистралей и включал в себя различные здания, такие как цирк-театр и театр. В настоящее время проспект Ленина продолжает служить центральным маршрутом в Гомеле, обеспечивая связь между различными районами города.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/leninanow.jpg" },

            ]
        }
    },
    {
        id: "kirava",
        x: 48.7,
        y: 30,
        width: 54,
        height: 1.1,
        rotate: 66,
        left: {
            title: "Улица Могилёвская",
            summary1: "История",
            text: "По мнению некоторых историков, улица сформировалась вдоль старой дороги, ведущей на север, которая начиналась (или проходила) за городскими укреплениями у Могилевской брамы (времена Гомельского замка). Застройка улицы началась в XVIII веке.а",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/kirava.jpg" },

            ]
        },
        right: {
            title: "Улица Кирова",
            summary1: "Сейчас",
            text: "По мнению некоторых историков, улица сформировалась вдоль старой дороги, ведущей на север, которая начиналась(или проходила) за городскими укреплениями у Могилевской брамы(времена Гомельского замка).Застройка улицы началась в XVIII веке.а",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/kiravanow.png" }
            ]
        }
    },
    {
        id: "sovetc",
        x: 63,
        y: 31,
        width: 56,
        height: 1.1,
        rotate: 67,
        left: {
            title: "Улица Пробойная",
            summary1: "История",
            text: "В начале XIX столетия была принята новая планировочная система Гомеля. Согласно ей Гомель должен был развиваться вокруг трёх основных улиц, одной из которых была Пробойная (первоначальное название Советской улицы).Такое название улица получила в связи с тем, что образовываясь в центре Гомеля, она пересекала(«пробивала») весь город, и плавно перетекала в дорогу на Могилев.В 1861 году улица была переименована в Румянцевскую, в честь бывших владельцев Гомеля.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/sovet.jpg" },

            ]
        },
        right: {
            title: "Улица Советская",
            summary1: "Сейчас",
            text: "Улица Советская в Гомеле — это одна из главных улиц города, пересекающая Центральный и Железнодорожный районы. Она начинается от площади Ленина и заканчивается у городской черты в районе посёлка Красный Октябрь. Улица была переименована в советские времена, что подчеркивает её важность как транспортной и архитектурной оси города.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/sovetnow.jpg" }
            ]
        }
    },
    {
        id: "prol",
        x: 65,
        y: 84,
        width: 31,
        height: 1.7,
        rotate: -58.5,
        left: {
            title: "Улица Фельдмаршальская",
            summary1: "История",
            text: "Улица была известна как Фельдмаршальская до 1920 года и является одной из старейших улиц города, указана на его карте начала XIX века. В низине Фельдмаршальской и Замковой, известном как Кагальный ров, обитали беднейшие еврейские поселенцы.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/pral.png" },

            ]
        },
        right: {
            title: "Улица Пролетарская",
            summary1: "Сейчас",
            text: "Улица Пролетарская в Гомеле является одной из старейших улиц города, начиная от центральной площади Ленина и заканчивая у улицы Фрунзе. Она протянулась 1150 метров и пересекает улицу Гагарина. Улица была известна как Фельдмаршальская до 1920 года.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/prolnow.jpg" }
            ]
        }
    },
    {
        id: "pushkina",
        x: 76,
        y: 38.5,
        width: 16,
        height: 1.1,
        rotate: 35,
        left: {
            title: "Улица Липовая",
            summary1: "История",
            text: "В дореволюционное время Липовая улица была застроена одноэтажными домами богатых горожан. Среди частной застройки выделялись два общественных каменных строения: железнодорожная больница (на стыке улиц Румянцевской и Канатной-Ирининской) и волостное правление. Каменными были также магазин и один из частных домов.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/pushkinalate.png" },

            ]
        },
        right: {
            title: "Улица Пушкина",
            summary1: "Сейчас",
            text: "Улица Пушкина в Гомеле является одной из наиболее благоустроенных улиц города. Она протянулась 460 метров и примыкает к нескольким другим улицам, такими как Первомайская, Волотовская, Крестьянская и Артёма. В центральной части улицы расположены памятники архитектуры, включая городской особняк в стиле ампир 1-й половины 19 века и 3-этажный жилой дом с чертами конструктивизма, построенный в 1927 году.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/ushkina.png" }
            ]
        }
    },
    {
        id: "lange",
        x: 71.5,
        y: 51.5,
        width: 26,
        height: 1.1,
        rotate: -23,
        left: {
            title: "Улица Барона Нолькена",
            summary1: "История",
            text: "Улица Ланге в Гомеле является важной частью города, расположенной в Центральном районе. Она была переименована в 1919 году в честь Ивана Ланге, председателя Гомельского ЧК, погибшего во время антибольшевистского восстания.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/lange.jpeg" },

            ]
        },
        right: {
            title: "Улица Ланге",
            summary1: "Сейчас",
            text: "Улица Ланге в Гомеле — это улица, расположенная в Центральном районе города. Она начинается у пересечения улиц Советской и Коммунаров и заканчивается у пересечения улиц Билецкого и Пушкина. Протяжённость улицы составляет около 280 метров.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/langenow.png" }
            ]
        }
    },
    {
        id: "prac",
        x: 72.5,
        y: 59,
        width: 10,
        height: 1.1,
        rotate: -23,
        left: {
            title: "Улица Первомайская",
            summary1: "История",
            text: "Улица Трудовая в Гомеле — это одна из старейших улиц города, расположенная в Центральном районе и связывающая улицу Советскую с площадью Труда.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/truf.png" },

            ]
        },
        right: {
            title: "Улица Трудовая",
            summary1: "Сейчас",
            text: "Улица Трудовая в Гомеле — это одна из старейших улиц города, расположенная в Центральном районе и связывающая улицу Советскую с площадью Труда.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/trud.png" }
            ]
        }
    },
    {
        id: "plosha",
        x: 73,
        y: 67,
        width: 7,
        height: 3,
        rotate: -60,
        left: {
            title: "Площадь Базарная",
            summary1: "История",
            text: "Площадь создана в конце XVIII — начале XIX века. Прежде называлась Базарной, была известна также под названием Торг, так как здесь три раза в неделю проходил большой торг. Крестьяне привозили сюда живность, сельскохозяйственные продукты, разные кустарные изделия.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/plosha.png" },

            ]
        },
        right: {
            title: "Площадь Ленина",
            summary1: "Сейчас",
            text: "Площадь Ленина — это центральная площадь Гомеля, основной архитектурный ансамбль, формирующий пространственную композицию административно-общественного центра города. Она была создана в конце XVIII — начале XIX века и носит имя Великого Коминтерна. Площадь была известна как Базарная и Торг, так как здесь три раза в неделю проходил большой торг.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/ploshanow.jpg" }
            ]
        }
    },
    {
        id: "bil",
        x: 80.5,
        y: 52,
        width: 9,
        height: 1.1,
        rotate: -54,


        left: {
            title: "Улица Миллионная",
            summary1: "История",
            text: "Улица Билецкого, ранее Миллионная относится к одной из самых старых улиц города. Она начала складываться в конце 18 в. А через 100 лет была только застроена. В честь Николая Билецкого, одного из коммунаров, улица была названа в 1919 году.",
        },
        right: {
            title: "Улица Билецкого",
            summary1: "Сейчас",
            text: "Улица Билецкого в Гомеле, ранее известная как Миллионная, была застроена в начале 19-го века и стала символом города. Она была названа в честь Николая Станиславовича Билецкого, белорусского советского журналиста и участника борьбы за утверждение Советской власти в Гомеле.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/Bil.png" }
            ]
        }
    },

];
const layer = document.querySelector(".hotspot-layer");
const overlay = document.querySelector(".popup-overlay");
const popup1 = document.querySelector(".map-popup1");
const popup2 = document.querySelector(".map-popup2");

let activeId = null;

function getEls(popup) {
    return {
        title: popup.querySelector(".popup-title"),
        text: popup.querySelector(".popup-text"),
        close: popup.querySelector(".popup-close"),
        details1: popup.querySelector(".popup-details1"),
        details2: popup.querySelector(".popup-details2"),
        summary1: popup.querySelector(".popup-summary1"),
        summary2: popup.querySelector(".popup-summary2"),
        media: popup.querySelector(".popup-media"),
    };
}

function clearMedia(container) {
    if (!container) return;
    container.querySelectorAll("video").forEach(v => {
        v.pause();
        v.removeAttribute("src");
        v.load();
    });
    container.innerHTML = "";
}

function stopAllMedia() {
    clearMedia(getEls(popup1).media);
    clearMedia(getEls(popup2).media);
}

function renderMarkers() {
    if (!layer) return;
    layer.innerHTML = "";

    hotspots.forEach((spot) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "marker street-zone";
        btn.dataset.id = spot.id;
        btn.setAttribute("aria-label", spot.title || "Метка");

        btn.style.left = spot.x + "%";
        btn.style.top = spot.y + "%";
        btn.style.width = spot.width + "%";
        btn.style.height = spot.height + "%";
        btn.style.transform = `translate(-50%, -50%) rotate(${spot.rotate || 0}deg)`;
        btn.style.background = "transparent";
        btn.style.border = "none";
        btn.style.padding = "0";
        btn.style.cursor = "pointer";

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            openPopup(spot.id);
        });

        layer.appendChild(btn);
    });
}

function getSpot(id) {
    return hotspots.find((s) => s.id === id);
}

function fillPopup(popup, data, title) {
    const el = getEls(popup);

    if (el.title) {
        el.title.textContent = data.title || "Информация";
    }


    if (el.summary1) el.summary1.textContent = data.summary1 || "Подробнее";
    if (el.text) el.text.textContent = data.text || "";
    if (el.details1) {
        el.details1.open = false;
        el.details1.hidden = !data.text;
    }


    if (el.summary2) el.summary2.textContent = data.summary2 || "Медиа";
    clearMedia(el.media);

    const hasMedia = Array.isArray(data.media) && data.media.length > 0;

    if (hasMedia) {
        data.media.forEach(item => {
            if (item.type === "image") {
                const img = document.createElement("img");
                img.src = item.src;
                img.className = "popup-media-item";
                img.alt = "";
                el.media.appendChild(img);
            } else if (item.type === "video") {
                const video = document.createElement("video");
                video.src = item.src;
                video.className = "popup-media-item";
                video.controls = true;
                video.playsInline = true;
                el.media.appendChild(video);
            }
        });
        el.details2.hidden = false;
    } else {
        el.details2.hidden = true;
    }

    if (el.details2) el.details2.open = false;
}

function openPopup(id) {
    const spot = getSpot(id);
    if (!spot || !popup1 || !popup2) return;

    if (activeId === id) {
        closePopup();
        return;
    }

    activeId = id;
    stopAllMedia();

    fillPopup(popup1, spot.left || {}, spot.title);
    fillPopup(popup2, spot.right || {}, spot.title);

    popup1.hidden = false;
    popup2.hidden = false;
    if (overlay) overlay.hidden = false;

    setTimeout(() => placePopups(id), 0);
    highlightActiveMarker();
}

function isMobile() {
    return window.innerWidth < 900;
}

function placePopups(id) {
    if (isMobile()) {
        [popup1, popup2].forEach((p, i) => {
            p.style.left = "50%";
            p.style.right = "auto";
            p.style.top = "auto";
            p.style.bottom = (16 + i * 14) + "px";
            p.style.transform = "translateX(-50%)";
            p.style.width = "calc(100vw - 24px)";
        });
        return;
    }

    const marker = layer.querySelector(`.marker[data-id="${id}"]`);
    if (!marker) return;

    const r = marker.getBoundingClientRect();
    const gap = 18;
    const w = 360;

    let leftX = r.left - gap - w;
    if (leftX < 10) leftX = 10;

    let rightX = r.right + gap;
    if (rightX + w > window.innerWidth - 10) {
        rightX = window.innerWidth - w - 10;
    }

    let top = r.top + r.height / 2 - 180;
    if (top < 10) top = 10;
    if (top + 400 > window.innerHeight - 10) {
        top = window.innerHeight - 410;
    }

    [popup1, popup2].forEach((p) => {
        p.style.transform = "";
        p.style.right = "auto";
        p.style.bottom = "auto";
        p.style.width = w + "px";
    });

    popup1.style.left = leftX + "px";
    popup1.style.top = top + "px";

    popup2.style.left = rightX + "px";
    popup2.style.top = top + "px";
}

function closePopup() {
    activeId = null;
    popup1.hidden = true;
    popup2.hidden = true;
    if (overlay) overlay.hidden = true;
    stopAllMedia();
    highlightActiveMarker();
}

function highlightActiveMarker() {
    if (!layer) return;
    layer.querySelectorAll(".marker").forEach((btn) => {
        const active = btn.dataset.id === activeId;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-expanded", String(active));
    });
}

[popup1, popup2].forEach((popup) => {
    const el = getEls(popup);

    if (el.close) {
        el.close.addEventListener("click", (e) => {
            e.stopPropagation();
            closePopup();
        });
    }

    popup.addEventListener("click", (e) => e.stopPropagation());

    if (el.details1) {
        el.details1.addEventListener("toggle", () => {
            if (activeId) placePopups(activeId);
        });
    }
    if (el.details2) {
        el.details2.addEventListener("toggle", () => {
            if (activeId) placePopups(activeId);
        });
    }
});

if (overlay) {
    overlay.addEventListener("click", closePopup);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
});

window.addEventListener("resize", () => {
    if (activeId) placePopups(activeId);
});

renderMarkers();