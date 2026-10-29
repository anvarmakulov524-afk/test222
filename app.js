
const TEACHER_PHONE=""; // номер преподавателя для WhatsApp: международный формат без +, например "77011234567"
// Вкладка «Учитель» открывается, если к адресу страницы добавить #teacher  (например .../lessonboard.html#teacher)

let LESSON={topic:["Вставка видео и аудио в HTML-документ","HTML құжатына бейне мен аудио енгізу"],
goals:[["Научиться добавлять звук и видео на web-страницу с помощью тегов <audio> и <video>.","<audio> және <video> тегтері арқылы веб-бетке дыбыс пен бейне қосуды үйрену."]],
tasks:[["Собрать фрагмент HTML-страницы с аудио- и видеоплеером и проверить его в браузере.","Аудио және бейне ойнатқышы бар HTML бетінің бөлігін жасап, оны браузерде тексеру."]],
taskImages:[[]]};

const LECTURE_PHOTOS=[
 "images/presentation/intro-laptop.jpg",
 "images/presentation/cross-subject.png",
 "images/presentation/multimedia-web.png",
 "images/presentation/audio-player.jpg",
 "images/presentation/video-player.jpg",
 "images/presentation/media-attributes.png",
 "images/presentation/src-controls.png",
 "images/presentation/autoplay.png",
 "images/presentation/loop.png",
 "images/presentation/muted.png",
 "images/presentation/video-width.png",
 "images/presentation/video-height.png",
 "images/presentation/video-poster.png",
 "images/presentation/media-formats.jpg",
 "images/presentation/editor-vscode.png",
 "images/presentation/editor-browser.png",
 "images/presentation/editor-workflow.png",
 "images/presentation/lesson-summary.jpg"
];

let LECT=[
{h:["1. Мультимедиа на web-странице","1. Веб-беттегі мультимедиа"],
 p:["HTML-страница может содержать не только текст и изображения, но и звук с видео. Для этого используют парные теги <audio> и <video>, размещая их внутри <body>.","HTML бетінде мәтін мен суреттерден бөлек дыбыс пен бейнені де көрсетуге болады. Ол үшін <audio> және <video> жұп тегтері <body> ішінде жазылады."],
 images:[LECTURE_PHOTOS[0],LECTURE_PHOTOS[1],LECTURE_PHOTOS[2]]},
{h:["2. Добавляем звук: тег <audio>","2. Дыбыс қосу: <audio> тегі"],
 p:["Тег <audio> вставляет аудиофайл. Атрибут controls показывает пользователю кнопки воспроизведения и паузы. Текст внутри тега служит запасным сообщением, если браузер не поддерживает аудио.","<audio> тегі аудио файлын қосады. controls атрибуты ойнату және кідірту батырмаларын көрсетеді. Тег ішіндегі мәтін браузер аудионы қолдамаса, қосалқы хабарлама ретінде көрінеді."],
 images:[LECTURE_PHOTOS[3]],
 code:'<audio src="song.mp3" controls>\n  Ваш браузер не поддерживает аудио.\n</audio>'},
{h:["3. Добавляем ролик: тег <video>","3. Бейне қосу: <video> тегі"],
 p:["Тег <video> вставляет видеоролик. Атрибут controls добавляет панель управления. Если панель не указать, посетителю будет трудно запускать и останавливать видео.","<video> тегі бейнероликті қосады. controls атрибуты басқару панелін көрсетеді. Бұл атрибут болмаса, көрерменге бейнені қосу және тоқтату қиын болады."],
 images:[LECTURE_PHOTOS[4]],
 code:'<video src="film.mp4" controls width="480">\n  Ваш браузер не поддерживает видео.\n</video>'},
{h:["4. Атрибуты src и controls","4. src және controls атрибуттары"],
 p:["Атрибуты записывают в открывающем теге. src указывает путь к файлу, а controls включает плеер. Если файл лежит рядом с HTML-страницей, достаточно написать его имя.","Атрибуттар ашылатын тегтің ішінде жазылады. src файлдың жолын көрсетеді, ал controls ойнатқышты қосады. Файл HTML бетімен бір бумада жатса, оның атын жазу жеткілікті."],
 images:[LECTURE_PHOTOS[5],LECTURE_PHOTOS[6]],
 code:'<audio src="song.mp3" controls></audio>\n<video src="film.mp4" controls></video>'},
{h:["5. autoplay, loop и muted","5. autoplay, loop және muted"],
 p:["autoplay пытается начать воспроизведение автоматически, loop запускает файл заново после окончания, а muted выключает звук. Браузеры могут ограничивать автозапуск, особенно если звук не выключен.","autoplay файлды автоматты ойнатуға тырысады, loop аяқталғаннан кейін қайта бастайды, ал muted дыбысты өшіреді. Браузерлер, әсіресе дыбыс қосулы болса, автоматты ойнатуды шектеуі мүмкін."],
 images:[LECTURE_PHOTOS[7],LECTURE_PHOTOS[8],LECTURE_PHOTOS[9]],
 code:'<video src="film.mp4" controls muted loop></video>'},
{h:["6. Размер видео и обложка poster","6. Бейне өлшемі және poster мұқабасы"],
 p:["Для видео можно задать ширину width и высоту height в пикселях. Атрибут poster задаёт изображение-обложку, которое видно до начала воспроизведения.","Бейненің енін width және биіктігін height арқылы пиксельмен көрсетуге болады. poster атрибуты ойнату басталғанға дейін көрсетілетін мұқаба суретін береді."],
 images:[LECTURE_PHOTOS[10],LECTURE_PHOTOS[11],LECTURE_PHOTOS[12]],
 code:'<video src="film.mp4" controls width="480" height="270"\n       poster="cover.jpg"></video>'},
{h:["7. Форматы и имена файлов","7. Файл пішімдері мен атаулары"],
 p:["Для звука часто используют MP3 и WAV, для видео — MP4 и WebM. Имя в src должно точно совпадать с именем файла, включая регистр букв и расширение.","Дыбыс үшін MP3 және WAV, бейне үшін MP4 және WebM пішімдері жиі қолданылады. src ішіндегі атау файл атауымен, әріптердің үлкен-кішілігі мен кеңейтімін қоса, дәл сәйкес болуы керек."],
 images:[LECTURE_PHOTOS[13]],
 code:'song.mp3   voice.wav\nfilm.mp4   clip.webm'},
{h:["8. Запасной текст и частые ошибки","8. Қосалқы мәтін және жиі кездесетін қателер"],
 p:["Текст между открывающим и закрывающим тегами показывается, если браузер не может отобразить плеер. Проверьте, что у тега есть controls, файл лежит по указанному пути, а имя и расширение написаны без ошибок.","Ашылатын және жабылатын тегтердің арасындағы мәтін браузер ойнатқышты көрсете алмаған кезде шығады. controls барын, файлдың көрсетілген жолда жатқанын және атауы мен кеңейтімінде қате жоқ екенін тексеріңіз."],
 code:'<audio src="song.mp3" controls>\n  Звук не поддерживается.\n</audio>'},
{h:["9. Собираем пример HTML-страницы","9. HTML бетінің үлгісін құрастыру"],
 p:["Поместите файлы рядом со страницей, добавьте заголовок и оба плеера внутрь <body>. Затем сохраните документ с расширением .html и откройте его в браузере.","Файлдарды веб-бетпен бір бумаға салыңыз, тақырып пен екі ойнатқышты <body> ішіне қосыңыз. Құжатты .html кеңейтімімен сақтап, браузерде ашыңыз."],
 code:'<!doctype html>\n<html>\n<body>\n  <h1>Мой урок</h1>\n  <audio src="song.mp3" controls>Звук не поддерживается.</audio>\n  <video src="film.mp4" controls width="480">Видео не поддерживается.</video>\n</body>\n</html>'},
{h:["10. Пишем код, сохраняем и проверяем","10. Код жазу, сақтау және тексеру"],
 p:["Код удобно писать в редакторе, например Visual Studio Code. Положите медиафайлы рядом с HTML-документом, сохраните его как index.html и откройте страницу в браузере. В итоге мы пишем код в редакторе, а воспроизведение проверяем на странице.","Кодты Visual Studio Code сияқты редакторда жазуға болады. Медиа файлдарын HTML құжатымен бір бумаға салып, оны index.html деп сақтаңыз да, браузерде ашыңыз. Код редакторда жазылады, ал ойнатылуы веб-бетте тексеріледі."],
 images:[LECTURE_PHOTOS[14],LECTURE_PHOTOS[15],LECTURE_PHOTOS[16],LECTURE_PHOTOS[17]]
}
];

// k — индекс верного ответа
let QUIZ=[
{q:["Какой тег используют для вставки звука?","Дыбыс енгізу үшін қай тег қолданылады?"],k:0,o:[["<audio>","<audio>"],["<video>","<video>"],["<sound>","<sound>"],["<media>","<media>"]]},
{q:["Какой тег вставляет видеоролик?","Бейнероликті қай тег енгізеді?"],k:1,o:[["<movie>","<movie>"],["<video>","<video>"],["<audio>","<audio>"],["<play>","<play>"]]},
{q:["За что отвечает атрибут src?","src атрибуты не үшін қажет?"],k:2,o:[["Показывает кнопки плеера","Ойнатқыш батырмаларын көрсетеді"],["Выключает звук","Дыбысты өшіреді"],["Указывает путь к медиафайлу","Медиа файлдың жолын көрсетеді"],["Задаёт цвет страницы","Бет түсін орнатады"]]},
{q:["Что делает атрибут controls?","controls атрибуты не істейді?"],k:3,o:[["Зацикливает воспроизведение","Ойнатуды қайталайды"],["Задаёт обложку ролика","Бейне мұқабасын орнатады"],["Запускает звук автоматически","Дыбысты автоматты түрде қосады"],["Показывает кнопки управления плеером","Ойнатқышты басқару батырмаларын көрсетеді"]]},
{q:["Какой атрибут отключает звук у видео?","Бейненің дыбысын қай атрибут өшіреді?"],k:0,o:[["muted","muted"],["controls","controls"],["poster","poster"],["width","width"]]},
{q:["Что произойдёт при добавлении loop?","loop қосылса не болады?"],k:1,o:[["Плеер скроет кнопки","Ойнатқыш батырмаларды жасырады"],["Файл начнёт воспроизводиться заново после окончания","Файл аяқталған соң қайта ойнатылады"],["Видео станет шире","Бейне кеңейеді"],["Звук отключится","Дыбыс өшеді"]]},
{q:["Для чего нужен атрибут poster у video?","video тегіндегі poster атрибуты не үшін керек?"],k:2,o:[["Чтобы указать формат аудио","Аудио пішімін көрсету үшін"],["Чтобы включить цикл","Қайталауды қосу үшін"],["Чтобы показать обложку до запуска видео","Бейне басталғанға дейін мұқаба көрсету үшін"],["Чтобы скрыть плеер","Ойнатқышты жасыру үшін"]]},
{q:["Что важно проверить, если медиафайл не открывается?","Медиа файл ашылмаса, нені тексеру маңызды?"],k:3,o:[["Только цвет фона страницы","Тек бет фонының түсін"],["Имя тега h1","h1 тегінің атауын"],["Количество изображений на странице","Беттегі суреттер санын"],["Путь, имя и расширение файла в src","src ішіндегі файл жолын, атауын және кеңейтімін"]]}
];

const T={ru:{lesson:"Урок",lecture:"Лекция",test:"Тест",reflect:"Рефлексия",send:"Отправить",teacher:"Учитель",
goals:"Цели урока",tasks:"Задачи",join:"👋 Отметьтесь на уроке: введите ФИО",name:"Фамилия Имя Отчество",here:"Я на уроке",joined:"Вы на уроке",prog:"Выполнено",
need:"Сначала введите ФИО на вкладке «Урок».",q:"Вопрос",fin:"Отправить ответы",sure:"Отправить ответы? Изменить их потом будет нельзя.",unans:"Есть вопросы без ответа. Всё равно отправить?",
done:"✅ Ответы приняты. Изменить их нельзя.",res:"Ваш результат за тест",rres:"Ваш балл за рефлексию",answered:"Отвечено",
right:"Верно",wrong:"Неверно. Правильный ответ",
mood:"Как ваше настроение после урока?",und:"Насколько вы поняли тему? (1 — совсем нет, 5 — отлично)",
conf:"Какие контейнеры вы теперь уверенно сможете применить?",
l3:"3 вещи, которые я узнал(а)",l2:"2 интересных момента",l1:"1 вопрос, который остался",hard:"Что было самым сложным?",apply:"Где в жизни или в программах я встречал(а) такие контейнеры?",exit:"Билет на выход: тема урока одним предложением",
arr:"Массив",dic:"Словарь",set:"Множество",stk:"Стек",que:"Очередь",
share:"📲 Поделиться рефлексией в WhatsApp",shareNeed:"Чтобы кнопка стала активной: выберите настроение и оценку понимания, заполните хотя бы 3 поля.",shareOk:"✅ Рефлексия готова. Нажмите кнопку, чтобы отправить преподавателю.",
sd:"Отправьте итоговый результат преподавателю. Выберите удобный способ:",copy:"📋 Скопировать",copied:"Скопировано ✓",wa:"WhatsApp",tg:"Telegram",
hint:"Если кнопки не сработали, скопируйте текст ниже и отправьте преподавателю сами.",warn:"Не закрывайте страницу, пока не отправили результат: данные хранятся только на этом экране.",
lvl:["отлично","хорошо","плохо","нужно повторить"],
dtry:"Попробуйте сами",push:"Push — добавить",pop:"Pop — извлечь",enq:"В конец",deq:"Из начала",add:"Добавить",dup:"Такой элемент уже есть: дубликат не добавлен",empty:"Контейнер пуст",max:"Максимум 8 элементов",
top:"вершина",front:"начало",back:"конец",key:"ключ",val:"значение",hcell:"Нажмите на элемент, чтобы обратиться к нему по индексу",hpair:"Нажмите на пару, чтобы получить значение по ключу",ph:"число",
tTitle:"Результаты класса",tHow:"Как собрать результаты: ученики отправляют отчёты вам в WhatsApp (кнопка «Поделиться рефлексией» или вкладка «Отправить»). Откройте этот чат, выделите сообщения учеников, скопируйте и вставьте сюда: сайт сам разберёт все отчёты в таблицу. Если ученик отправил несколько сообщений, учитывается всё вместе.",
tPaste:"Вставьте сюда сообщения учеников из WhatsApp…",tN:"Учеников",tAT:"Средний балл за тест",tAR:"Средний балл рефлексии",tPass:"Тест на 70+ баллов",
tName:"ФИО",tTest:"Тест",tRefl:"Рефлексия",tMood:"Настроение",tUnd:"Понимание",tQ:"Что осталось непонятным",tNoT:"тест не отправлен",
tSort:"Сортировка:",sName:"по ФИО",sTest:"по тесту",sRefl:"по рефлексии",tCsv:"⬇ Скачать таблицу (CSV)",tClear:"Очистить",tNone:"Пока нет данных. Вставьте сообщения учеников.",tHard:"Какие вопросы вызывают трудности",tHardN:"Считается по ученикам, приславшим итог со вкладки «Отправить».",tOf:"из"},
kk:{lesson:"Сабақ",lecture:"Дәріс",test:"Тест",reflect:"Рефлексия",send:"Жіберу",teacher:"Мұғалім",
goals:"Сабақ мақсаттары",tasks:"Тапсырмалар",join:"👋 Сабаққа қатысқаныңызды белгілеңіз: аты-жөніңізді енгізіңіз",name:"Тегі Аты Әкесінің аты",here:"Мен сабақтамын",joined:"Сіз сабақтасыз",prog:"Орындалды",
need:"Алдымен «Сабақ» бетінде аты-жөніңізді енгізіңіз.",q:"Сұрақ",fin:"Жауаптарды жіберу",sure:"Жауаптарды жіберу керек пе? Кейін өзгерту мүмкін болмайды.",unans:"Жауапсыз сұрақтар бар. Бәрібір жіберу керек пе?",
done:"✅ Жауаптар қабылданды. Өзгертуге болмайды.",res:"Тест нәтижесі",rres:"Рефлексия балы",answered:"Жауап берілді",
right:"Дұрыс",wrong:"Қате. Дұрыс жауап",
mood:"Сабақтан кейінгі көңіл-күйіңіз қандай?",und:"Тақырыпты қаншалықты түсіндіңіз? (1 — мүлде жоқ, 5 — өте жақсы)",
conf:"Қай контейнерлерді енді сенімді қолдана аласыз?",
l3:"Мен білген 3 нәрсе",l2:"2 қызықты сәт",l1:"Әлі түсініксіз 1 сұрақ",hard:"Ең қиыны не болды?",apply:"Осындай контейнерлерді өмірде немесе бағдарламаларда қайда кездестірдіңіз?",exit:"Шығу билеті: сабақ тақырыбын бір сөйлеммен жазыңыз",
arr:"Массив",dic:"Сөздік",set:"Жиын",stk:"Стек",que:"Кезек",
share:"📲 Рефлексияны WhatsApp-қа жіберу",shareNeed:"Түйме белсенді болуы үшін: көңіл-күйді және түсіну бағасын таңдаңыз, кемінде 3 өрісті толтырыңыз.",shareOk:"✅ Рефлексия дайын. Оқытушыға жіберу үшін түймені басыңыз.",
sd:"Қорытынды нәтижені оқытушыға жіберіңіз. Ыңғайлы тәсілді таңдаңыз:",copy:"📋 Көшіру",copied:"Көшірілді ✓",wa:"WhatsApp",tg:"Telegram",
hint:"Түймелер жұмыс істемесе, төмендегі мәтінді көшіріп, оқытушыға өзіңіз жіберіңіз.",warn:"Нәтижені жібермейінше бетті жаппаңыз: деректер тек осы экранда сақталады.",
lvl:["өте жақсы","жақсы","нашар","қайталау қажет"],
dtry:"Өзіңіз байқап көріңіз",push:"Push — қосу",pop:"Pop — алу",enq:"Соңына",deq:"Басынан",add:"Қосу",dup:"Мұндай элемент бұрыннан бар: қайталану қосылмады",empty:"Контейнер бос",max:"Ең көбі 8 элемент",
top:"төбе",front:"басы",back:"соңы",key:"кілт",val:"мән",hcell:"Индекс бойынша жүгіну үшін элементті басыңыз",hpair:"Мәнді кілт бойынша алу үшін жұпты басыңыз",ph:"сан",
tTitle:"Сынып нәтижелері",tHow:"Нәтижелерді қалай жинау керек: оқушылар есептерін сізге WhatsApp арқылы жібереді («Рефлексияны бөлісу» түймесі немесе «Жіберу» беті). Сол чатты ашып, оқушылардың хабарламаларын белгілеп, көшіріп, осында қойыңыз: сайт барлық есепті кестеге өзі жинайды. Оқушы бірнеше хабарлама жіберсе, барлығы біріктіріліп есептеледі.",
tPaste:"Оқушылардың WhatsApp хабарламаларын осында қойыңыз…",tN:"Оқушылар",tAT:"Тесттің орташа балы",tAR:"Рефлексияның орташа балы",tPass:"Тест 70+ балл",
tName:"Аты-жөні",tTest:"Тест",tRefl:"Рефлексия",tMood:"Көңіл-күй",tUnd:"Түсіну",tQ:"Не түсініксіз қалды",tNoT:"тест жіберілмеген",
tSort:"Сұрыптау:",sName:"аты бойынша",sTest:"тест бойынша",sRefl:"рефлексия бойынша",tCsv:"⬇ Кестені жүктеу (CSV)",tClear:"Тазалау",tNone:"Әзірге дерек жоқ. Оқушылардың хабарламаларын қойыңыз.",tHard:"Қай сұрақтар қиындық тудырады",tHardN:"«Жіберу» бетінен қорытынды жіберген оқушылар бойынша есептеледі.",tOf:"/"}};
const MO=["😫","😕","😐","🙂","🤩"];
const CK=["arr","dic","set","stk","que"];

const isT=()=>!!window.TEACHER_MODE||/teacher/i.test(location.hash)||/[?&]teacher/i.test(location.search);
const tabs=()=>isT()?["teacher"]:["lesson","lecture","test","reflect","send"];
let UID=null,TT="log";

let L="ru",tab="lesson",S={name:"",done:[],ans:{},sub:false,r:{conf:[]}},TS={sort:"name"};
const D={arr:[7,3,9,4],stack:[],queue:[],set:[],dict:[["Аружан","101"],["Данияр","202"]],msg:{}};
const $=s=>document.querySelector(s),t=k=>T[L][k],li=a=>a[L==="kk"?1:0]||a[0],
esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tk=()=>LESSON.tasks.map(li);
const imageGallery=(images,caption="")=>(images||[]).map(src=>`<figure style="margin:16px 0"><img src="${esc(src)}" alt="${esc(caption||"Иллюстрация к уроку")}" loading="lazy" style="display:block;width:100%;max-height:460px;object-fit:cover;border-radius:14px"><figcaption class="mu" style="margin-top:6px">${esc(caption||"Иллюстрация к уроку")}</figcaption></figure>`).join("");
const score=()=>QUIZ.reduce((s,q,i)=>s+(S.ans[i]===q.k?1:0),0);
const pct=()=>Math.round(score()/QUIZ.length*100);
const lv=(p,lang)=>T[lang||L].lvl[p>=90?0:p>=70?1:p>=50?2:3];
const col=p=>p>=90?"#059669":p>=70?"#2563eb":p>=50?"#d97706":"#dc2626";
const scoreBox=(lb,p)=>`<div class="score" style="border-color:${col(p)}"><span class="mu">${lb}</span><div class="v" style="color:${col(p)}">${p} / 100 — ${lv(p)}</div><div class="bar" style="margin-top:8px"><i style="width:${p}%;background:${col(p)}"></i></div></div>`;
const keep=fn=>{const y=window.scrollY;fn();window.scrollTo(0,y)};
const stepDone=()=>[!!S.name,tk().length>0&&S.done.length>=tk().length,S.sub,rDone()];
const doneTab=k=>({lesson:!!S.name&&S.done.length>=tk().length,test:S.sub,reflect:rDone()}[k]);
function updProg(){const n=stepDone().filter(Boolean).length*25;$("#pg").style.width=n+"%";$("#pgn").textContent=n+"%"}

function lessonV(){const p=tk().length?Math.round(S.done.length/tk().length*100):0;
return `<div class="hero"><div class="kicker">${t("lesson")}</div><h1>${esc(li(LESSON.topic))}</h1><div class="blocks"><i></i><i></i><i></i><i></i></div></div>
${S.name?`<div class="ok">✅ ${t("joined")}: <b>${esc(S.name)}</b></div>`:`<div class="card join"><b>${t("join")}</b><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px"><input type="text" id="nm" maxlength="80" placeholder="${t("name")}" style="flex:1;min-width:200px"><button class="btn g" data-a="join">${t("here")}</button></div></div>`}
<h2>${t("goals")}</h2>${LESSON.goals.map((g,i)=>`<div class="card goal"><span class="n">0${i+1}</span><span>${esc(li(g))}</span></div>`).join("")}
<h2>${t("tasks")}</h2><div class="card"><div class="bar"><i style="width:${p}%"></i></div><div class="mu mono" style="margin-top:6px">${t("prog")}: ${S.done.length}/${tk().length}</div>
${tk().map((x,i)=>`<div><label class="t"><input type="checkbox" data-a="chk" data-i="${i}" ${S.done.includes(i)?"checked":""}><span>${esc(x)}</span></label>${imageGallery(LESSON.taskImages&&LESSON.taskImages[i])}</div>`).join("")}</div>`}

const cc=i=>"c"+(i%4);
function demoHTML(n){const m=D.msg[n]||"&nbsp;",btn=(op,lb,cls)=>`<button class="btn sm ${cls||""}" data-a="demo" data-d="${n}" data-op="${op}">${lb}</button>`;
let h=`<div class="demo"><div class="dt">⚡ ${t("dtry")}</div>`;
if(n==="arr"){h+=`<div class="mu">${t("hcell")}</div><div class="cells">${D.arr.map((v,i)=>`<button class="cell ${cc(i)}" data-a="demo" data-d="arr" data-op="idx" data-i="${i}">${v}<small>[${i}]</small></button>`).join("")}</div><div class="drow">${btn("push","append(…)")}${btn("pop","pop()","g")}</div>`}
if(n==="dict"){h+=`<div class="mu">${t("hpair")}</div><div class="cells">${D.dict.map(([k,v],i)=>`<button class="cell ${cc(i)}" style="flex-direction:row;gap:10px" data-a="demo" data-d="dict" data-op="get" data-i="${i}">${esc(k)} <span class="tagl">→</span> ${esc(v)}</button>`).join("")}</div>
<div class="drow"><input type="text" id="in-k" maxlength="14" placeholder="${t("key")}"><input type="text" id="in-v" maxlength="14" placeholder="${t("val")}">${btn("add",t("add"))}</div>`}
if(n==="set"){h+=`<div class="cells">${D.set.map((v,i)=>`<span class="cell ${cc(i)}">${esc(v)}</span>`).join("")||`<span class="mu">{ }</span>`}</div><div class="drow"><input type="text" id="in-set" maxlength="10" placeholder="${t("ph")}">${btn("add",t("add"))}</div>`}
if(n==="stack"){h+=`<div class="vstack">${D.stack.map((v,i)=>`<span class="cell ${cc(i)}">${v}${i===D.stack.length-1?`<span class="tagl">← ${t("top")}</span>`:""}</span>`).join("")}</div><div class="drow"><input type="text" id="in-stack" maxlength="10" placeholder="${t("ph")}">${btn("push",t("push"))}${btn("pop",t("pop"),"g")}</div>`}
if(n==="queue"){h+=`<div class="cells" style="align-items:flex-end">${D.queue.map((v,i)=>`<span class="cell ${cc(i)}">${v}<small>${i===0?t("front"):i===D.queue.length-1?t("back"):"·"}</small></span>`).join("")||`<span class="mu">[ ]</span>`}</div><div class="drow"><input type="text" id="in-queue" maxlength="10" placeholder="${t("ph")}">${btn("push",t("enq"))}${btn("pop",t("deq"),"g")}</div>`}
return h+`<div class="out mono" id="out-${n}">${m}</div></div>`}
function demoOp(n,op,i){const v0=()=>{const x=($("#in-"+n)||{}).value;return (x&&x.trim())||String(1+Math.floor(Math.random()*(n==="set"?5:99)))};let m="";
if(n==="arr"){if(op==="idx")m=`arr[${i}] → ${D.arr[i]}`;else if(op==="push"){if(D.arr.length>=8)m=t("max");else{const v=1+Math.floor(Math.random()*99);D.arr.push(v);m=`append(${v}) → len = ${D.arr.length}`}}else{if(!D.arr.length)m=t("empty");else m=`pop() → ${D.arr.pop()}`}}
if(n==="stack"||n==="queue"){const a=D[n];if(op==="push"){if(a.length>=8)m=t("max");else{const v=v0();a.push(v);m=(n==="stack"?"push(":"enqueue(")+v+") ✓"}}else{if(!a.length)m=t("empty");else m=(n==="stack"?"pop() → "+a.pop():"dequeue() → "+a.shift())}}
if(n==="set"){const v=v0();if(D.set.includes(v))m="⚠ "+t("dup");else if(D.set.length>=8)m=t("max");else{D.set.push(v);m=`add(${v}) ✓`}}
if(n==="dict"){if(op==="get"){const p=D.dict[i];m=`d["${p[0]}"] → ${p[1]}`}else{const k=($("#in-k").value||"").trim(),v=($("#in-v").value||"").trim();if(k&&v){const f=D.dict.find(p=>p[0]===k);if(f)f[1]=v;else if(D.dict.length<8)D.dict.push([k,v]);m=`d["${k}"] = ${v} ✓`}}}
D.msg[n]=esc(m)}

function lectureV(){return `<div class="kicker">${t("lecture")}</div><h2 class="pg">${esc(li(LESSON.topic))}</h2>`+
LECT.map(s=>`<div class="card lec"><h3>${esc(li(s.h))}</h3><p>${esc(li(s.p))}</p>${s.code?`<pre>${esc(s.code).replace(/(#.*)$/gm,'<span class="cm">$1</span>')}</pre>`:""}${imageGallery(s.images,li(s.h))}${s.demo?demoHTML(s.demo):""}</div>`).join("")}

function review(){return QUIZ.map((q,i)=>{const ok=S.ans[i]===q.k;
return `<div class="rev ${ok?"y":"n"}"><b class="mono">${i+1}.</b> ${esc(li(q.q))}<br>${ok?"✅ "+t("right"):"❌ "+t("wrong")+": <b>"+"ABCD"[q.k]+") "+esc(li(q.o[q.k]))+"</b>"}</div>`}).join("")}

function testV(){if(!S.name)return `<div class="warn">${t("need")}</div>`;
if(S.sub)return `<div class="kicker">${t("test")}</div><div class="ok" style="font-size:21px">${t("done")}</div>`+scoreBox(t("res"),pct())+review();
const n=Object.keys(S.ans).length;
return `<div class="kicker">${t("test")}</div><div class="qbar"><div class="mu mono">${t("answered")}: ${n}/${QUIZ.length}</div><div class="bar" style="margin-top:4px"><i style="width:${n/QUIZ.length*100}%"></i></div></div>`+
QUIZ.map((q,i)=>`<div class="card qcard"><b class="qn">${t("q")} ${i+1}/${QUIZ.length}</b><div class="qt">${esc(li(q.q))}</div>${q.o.map((o,j)=>`<button class="opt ${S.ans[i]===j?"sel":""}" data-a="ans" data-i="${i}" data-j="${j}"><i>${"ABCD"[j]}</i><span>${esc(li(o))}</span></button>`).join("")}</div>`).join("")+`<button class="btn" data-a="sub">${t("fin")}</button>`}

function rsc(){const r=S.r,a=(r.und||0)*8,m=(r.mood||0)*4;
const c=Math.min(40,["r3","r2","r1","hard","apply","exit"].reduce((x,f)=>{const n=(r[f]||"").trim().length;return x+(n>=10?8:n>0?4:0)},0));
return {a,m,c,total:a+m+c}}
function rDone(){const r=S.r;const filled=["r3","r2","r1","hard","apply","exit"].filter(f=>(r[f]||"").trim().length>0).length;return !!(r.mood&&r.und&&filled>=3)}

function reflV(){if(!S.name)return `<div class="warn">${t("need")}</div>`;const r=S.r;
return `<div class="kicker">${t("reflect")}</div><h2>${t("mood")}</h2><div class="emo">${MO.map((m,i)=>`<button data-a="mood" data-n="${i+1}" class="${r.mood===i+1?"on":""}">${m}</button>`).join("")}</div>
<h2>${t("und")}</h2><div class="emo">${[1,2,3,4,5].map(n=>`<button data-a="und" data-n="${n}" class="${r.und===n?"on":""}" style="font-size:22px;min-width:56px">${n}</button>`).join("")}</div>
<h2>${t("conf")}</h2><div class="chips">${CK.map(k=>`<label class="chip ${r.conf.includes(k)?"on":""}"><input type="checkbox" data-a="conf" data-k="${k}" ${r.conf.includes(k)?"checked":""}>${t(k)}</label>`).join("")}</div>
<h2>3 · 2 · 1</h2>
${[["l3","r3"],["l2","r2"],["l1","r1"],["hard","hard"],["apply","apply"],["exit","exit"]].map(([k,f])=>`<label>${rlab(k)}</label><textarea data-f="${f}">${esc(r[f]||"")}</textarea>`).join("")}
<div id="rbox" style="margin-top:20px">${rbox()}</div>`}
function rbox(){const ok=rDone();return scoreBox(t("rres"),rsc().total)+`<div class="${ok?"ok":"warn"}">${ok?t("shareOk"):t("shareNeed")}</div><a id="wab" class="btn g ${ok?"":"off"}" target="_blank" rel="noopener" href="${ok?waLink(repRefl()):"#"}">${t("share")}</a>`}

function repRefl(){const r=S.r,q=QUIZ.length,x=rsc();
return ["🪞 РЕФЛЕКСИЯ — "+LESSON.topic[0],"👤 "+S.name,
"📝 Тест: "+(S.sub?score()+"/"+q+" = "+pct()+"/100 — "+lv(pct(),"ru"):"не отправлен"),
"😊 Настроение: "+(r.mood||"—")+"/5","🎯 Понимание: "+(r.und||"—")+"/5",
"🧩 Уверенно применю: "+((r.conf&&r.conf.length)?r.conf.map(k=>T.ru[k]).join(", "):"—"),
"📊 Балл за рефлексию: "+x.total+"/100 — "+lv(x.total,"ru"),
"3 узнал(а): "+(r.r3||"—"),"2 интересно: "+(r.r2||"—"),"1 вопрос: "+(r.r1||"—"),
"⚠️ Сложно: "+(r.hard||"—"),"🌍 Где встречал(а): "+(r.apply||"—"),"🎫 Итог: "+(r.exit||"—")].join("\n")}
function repAll(){return repRefl()+"\n\n✅ Задачи: "+S.done.length+"/"+tk().length+(S.sub?"\n🔤 Ответы: "+QUIZ.map((_,i)=>(i+1)+"-"+(S.ans[i]==null?"—":"ABCD"[S.ans[i]])).join(" "):"")}
const waLink=x=>"https://wa.me/"+TEACHER_PHONE+"?text="+encodeURIComponent(x);

function sendV(){if(!S.name)return `<div class="warn">${t("need")}</div>`;const x=repAll(),e=encodeURIComponent(x);
return `<div class="kicker">${t("send")}</div><p>${t("sd")}</p><a class="btn g" target="_blank" rel="noopener" href="${waLink(x)}">${t("wa")}</a><a class="btn" target="_blank" rel="noopener" href="https://t.me/share/url?url=%20&text=${e}">${t("tg")}</a><button class="btn ghost" data-a="copy">${t("copy")}</button>
<p class="mu">${t("hint")}</p><textarea readonly id="rp" class="mono" style="min-height:320px;font-size:16px">${esc(x)}</textarea><div class="warn">${t("warn")}</div>`}

/* ---------- Вкладка учителя: разбор отчётов из WhatsApp ---------- */
const rosterGet=()=>{try{return JSON.parse(localStorage.getItem("lb_students")||"{}")}catch(e){return {}}};
const rosterSet=o=>{try{localStorage.setItem("lb_students",JSON.stringify(o))}catch(e){}};
function saveStudent(){
 const name=(S.name||"").trim(); if(!name)return;
 const all=rosterGet(), key=name.toLocaleLowerCase("ru").replace(/\\s+/g," ");
 const old=all[key]||{name};
 all[key]=Object.assign(old,{
  name,
  tasksDone:S.done.length,
  tasksTotal:tk().length,
  testSubmitted:!!S.sub,
  testScore:S.sub?pct():null,
  testRight:S.sub?score():null,ans:S.sub?Object.assign({},S.ans):null,joinedAt:old.joinedAt||new Date().toLocaleTimeString("ru-RU"),
  testTotal:S.sub?QUIZ.length:null,
  reflectionDone:rDone(),conf:(S.r.conf||[]).slice(),
  reflectionScore:rDone()?rsc().total:null,
  done:S.done.slice(),mood:S.r.mood||null,und:S.r.und||null,rt:Object.fromEntries(RF.map(([k,f])=>[f,S.r[f]||""])),
  updatedAt:new Date().toLocaleString("ru-RU")
 });
 rosterSet(all);cloudSave(all[key]);
}
const lsGet=()=>{try{return localStorage.getItem("lb_chat")||""}catch(e){return ""}};
const lsSet=v=>{try{localStorage.setItem("lb_chat",v)}catch(e){}};
function parseReports(text){
 const parts=String(text).split(/РЕФЛЕКСИЯ\s*—/).slice(1),map=new Map();
 for(const p of parts){
  const g=re=>p.match(re),nm=g(/👤\s*([^\n\r]+)/);if(!nm)continue;
  const name=nm[1].trim();if(!name)continue;const e={name};let m;
  if(m=g(/Тест:\s*(\d+)\s*\/\s*(\d+)\s*=\s*(\d+)\s*\/\s*100/)){e.right=+m[1];e.total=+m[2];e.test=+m[3]}
  if(m=g(/Настроение:\s*(\d)/))e.mood=+m[1];
  if(m=g(/Понимание:\s*(\d)/))e.und=+m[1];
  if(m=g(/Балл за рефлексию:\s*(\d+)/))e.refl=+m[1];
  if((m=g(/1 вопрос:\s*([^\n\r]+)/))&&m[1].trim()!=="—")e.q=m[1].trim();
  if((m=g(/Сложно:\s*([^\n\r]+)/))&&m[1].trim()!=="—")e.hard=m[1].trim();
  if(m=g(/Ответы:\s*([^\n\r]+)/)){e.ans=[];m[1].replace(/(\d+)\s*-\s*([ABCD—-])/g,(_,n,a)=>{e.ans[+n-1]="ABCD".indexOf(a);return _})}
  const key=name.toLowerCase().replace(/\s+/g," ");
  map.set(key,Object.assign(map.get(key)||{},e));
 }
 return [...map.values()];
}
const avg=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):null;
const pill=p=>`<span class="pill" style="background:${col(p)}">${p}</span>`;
function sorted(rows){const r=rows.slice();
 if(TS.sort==="test")r.sort((a,b)=>(b.test??-1)-(a.test??-1));
 else if(TS.sort==="refl")r.sort((a,b)=>(b.refl??-1)-(a.refl??-1));
 else r.sort((a,b)=>a.name.localeCompare(b.name,"ru"));return r}
function teacherRes(){const rows=parseReports(lsGet());
 if(!rows.length)return `<div class="warn">${t("tNone")}</div>`;
 const ts=rows.filter(r=>r.test!=null).map(r=>r.test),rs=rows.filter(r=>r.refl!=null).map(r=>r.refl);
 const pass=ts.filter(x=>x>=70).length;
 let h=`<div class="stats"><div class="stat"><b>${rows.length}</b><span>${t("tN")}</span></div><div class="stat"><b>${avg(ts)??"—"}</b><span>${t("tAT")}</span></div><div class="stat"><b>${avg(rs)??"—"}</b><span>${t("tAR")}</span></div><div class="stat"><b>${pass} ${t("tOf")} ${ts.length}</b><span>${t("tPass")}</span></div></div>`;
 h+=`<div class="sortb"><span class="mu">${t("tSort")}</span>${[["name","sName"],["test","sTest"],["refl","sRefl"]].map(([k,l])=>`<button class="btn sm ${TS.sort===k?"":"ghost"}" data-a="tsort" data-s="${k}">${t(l)}</button>`).join("")}<button class="btn sm g" data-a="csv">${t("tCsv")}</button><button class="btn sm ghost" data-a="tclear">${t("tClear")}</button></div>`;
 h+=`<div class="tw"><table><thead><tr><th>#</th><th>${t("tName")}</th><th>${t("tTest")}</th><th>${t("tRefl")}</th><th>${t("tMood")}</th><th>${t("tUnd")}</th><th>${t("tQ")}</th></tr></thead><tbody>`+
 sorted(rows).map((r,i)=>`<tr><td>${i+1}</td><td><b>${esc(r.name)}</b></td><td>${r.test!=null?pill(r.test)+` <span class="mu">${r.right}/${r.total}</span>`:`<span class="mu">${t("tNoT")}</span>`}</td><td>${r.refl!=null?pill(r.refl):"—"}</td><td>${r.mood?MO[r.mood-1]+" "+r.mood+"/5":"—"}</td><td>${r.und?r.und+"/5":"—"}</td><td>${esc(r.q||r.hard||"—")}</td></tr>`).join("")+`</tbody></table></div>`;
 const withAns=rows.filter(r=>r.ans&&r.ans.length);
 if(withAns.length){h+=`<h2>${t("tHard")}</h2><div class="mu">${t("tHardN")} (${withAns.length})</div><div class="card">`+
  QUIZ.map((q,i)=>{const have=withAns.filter(r=>r.ans[i]!=null&&r.ans[i]>=0),ok=have.filter(r=>r.ans[i]===q.k).length,p=have.length?Math.round(ok/have.length*100):0;
   return `<div class="qrow"><span class="qn2">${i+1}</span><span class="qtx" title="${esc(li(q.q))}">${esc(li(q.q))}</span><div class="bar"><i style="width:${p}%;background:${col(p)}"></i></div><span class="pc" style="color:${col(p)}">${p}%</span></div>`}).join("")+`</div>`}
 return h}
function qStats(all){const w=all.filter(r=>r.ans);if(!w.length)return "";
 return `<h2>${t("tHard")}</h2><div class="mu">Ответили на тест: ${w.length}</div><div class="card">`+QUIZ.map((q,i)=>{const h=w.filter(r=>r.ans[i]!=null),ok=h.filter(r=>r.ans[i]===q.k).length,p=h.length?Math.round(ok/h.length*100):0;
 return `<div class="qrow"><span class="qn2">${i+1}</span><span class="qtx" title="${esc(li(q.q))}">${esc(li(q.q))}</span><div class="bar"><i style="width:${p}%;background:${col(p)}"></i></div><span class="pc" style="color:${col(p)}">${p}%</span></div>`}).join("")+`</div>`}
function logV(){
 const all=(CLOUD.length?CLOUD:Object.values(rosterGet())).slice().sort((a,b)=>a.name.localeCompare(b.name,"ru"));
 const ts=all.filter(x=>x.testSubmitted).map(x=>x.testScore),rs=all.filter(x=>x.reflectionDone).map(x=>x.reflectionScore);
 let h=`<div class="stats"><div class="stat"><b>${all.length}</b><span><i class="live"></i>На уроке</span></div><div class="stat"><b>${ts.length}</b><span>Сдали тест</span></div><div class="stat"><b>${avg(ts)??"—"}</b><span>Средний балл теста</span></div><div class="stat"><b>${avg(rs)??"—"}</b><span>Средний балл рефлексии</span></div></div>`;
 if(!all.length)return h+`<div class="warn">Пока никто не отметился. Ученики открывают обычную ссылку на урок (без #teacher), вводят ФИО — и сразу появляются здесь.</div>`;
 h+=`<div class="tw"><table><thead><tr><th>#</th><th>ФИО</th><th>Задания</th><th>Тест</th><th>Рефлексия</th><th>Обновлено</th></tr></thead><tbody>`+all.map((r,i)=>`<tr><td>${i+1}</td><td><b>${esc(r.name)}</b></td><td>${taskCell(r)}</td><td>${r.testSubmitted?pill(r.testScore)+` <span class="mu">${r.testRight}/${r.testTotal}</span>`:`<span class="pill" style="background:#d97706">Не сдан</span>`}</td><td>${r.reflectionDone?pill(r.reflectionScore)+reflDet(r):`<span class="pill" style="background:#d97706">Не завершена</span>`}</td><td>${esc(r.updatedAt||"—")}</td></tr>`).join("")+`</tbody></table></div>`;
 h+=`<div class="sortb"><button class="btn sm g" data-a="rosterCsv">⬇ Скачать журнал (CSV)</button>${DB&&CAN?`<button class="btn sm ghost" data-a="resetAll">Новый урок: очистить результаты</button>`:""}</div>`;
 return h+qStats(all)}
function teacherV(){
 const sb=[["log","📊 Баллы учеников"],["ed","✏️ Тема и задания"],["wa","📲 Импорт из WhatsApp"]];
 const body=TT==="ed"?editorV():TT==="wa"?`<div class="card"><p style="margin:0">${t("tHow")}</p></div><textarea id="chat" class="mono" style="min-height:150px;font-size:15px" placeholder="${t("tPaste")}">${esc(lsGet())}</textarea><div id="tres" style="margin-top:14px">${teacherRes()}</div>`:logV();
 return `<div class="kicker">Кабинет учителя</div><h2 class="pg">${esc(li(LESSON.topic))}</h2>${DB&&!CAN?`<div class="warn">Вы вошли не как владелец страницы: данные учеников и редактор недоступны.</div>`:""}<div class="sub">${sb.map(([k,l])=>`<button class="btn sm ${TT===k?"":"ghost"}" data-a="tt" data-k="${k}">${l}</button>`).join("")}</div>${body}`}
function csv(){const q=s=>'"'+String(s??"").replace(/"/g,'""')+'"';
 const head=["ФИО","Тест, баллы","Тест, верно","Рефлексия, баллы","Настроение","Понимание","Вопрос"];
 const rows=sorted(parseReports(lsGet())).map(r=>[r.name,r.test??"",r.test!=null?r.right+"/"+r.total:"",r.refl??"",r.mood??"",r.und??"",r.q||r.hard||""]);
 const txt="﻿"+[head].concat(rows).map(r=>r.map(q).join(";")).join("\r\n");
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([txt],{type:"text/csv;charset=utf-8"}));a.download="results.csv";document.body.appendChild(a);a.click();a.remove()}

/* ---------- Редактор урока, облако, детали учеников ---------- */
const cl=x=>JSON.parse(JSON.stringify(x));
let PEND=null;function sure(b,k,msg){if(PEND===k){PEND=null;return true}PEND=k;const o=b.textContent;b.textContent=msg||"Точно? Нажмите ещё раз";setTimeout(()=>{if(PEND===k){PEND=null;b.textContent=o}},4000);return false}
const RF=[["l3","r3"],["l2","r2"],["l1","r1"],["hard","hard"],["apply","apply"],["exit","exit"]];
const DEF=cl({LESSON,LECT,QUIZ});
const CONTENT_VERSION=3;
let RLB={},ED=null,DB=null,CAN=false,CLOUD=[],_ct,IMAGE_BUSY=0;
const rlab=k=>RLB[k]?li(RLB[k]):t(k);
function applyContent(c){if(!c)return;
 const oldDefault=c.LESSON&&c.LESSON.topic&&c.LESSON.topic[0]==="Тема: Контейнеры"&&c.LECT&&c.LECT[0]&&c.LECT[0].h&&c.LECT[0].h[0]==="1. Что такое контейнер данных";
 if((Number(c.version)||0)<CONTENT_VERSION&&oldDefault){LESSON=cl(DEF.LESSON);LECT=cl(DEF.LECT);QUIZ=cl(DEF.QUIZ);RLB=c.RLB||{};return}
 if(c.LESSON){LESSON=c.LESSON;LESSON.taskImages=Array.isArray(LESSON.taskImages)?LESSON.taskImages:[];while(LESSON.taskImages.length<LESSON.tasks.length)LESSON.taskImages.push([]);LESSON.taskImages.length=LESSON.tasks.length}
 if(c.LECT){const legacy=(Number(c.version)||0)<CONTENT_VERSION;LECT=c.LECT.map((s,i)=>{const images=Array.isArray(s.images)?s.images.slice():[];const photo=LECTURE_PHOTOS[i%LECTURE_PHOTOS.length];if(legacy&&!images.includes(photo))images.push(photo);return Object.assign({},s,{images})})}
 if(Array.isArray(c.QUIZ))QUIZ=c.QUIZ;
 RLB=c.RLB||{}}
const sid=n=>"s"+Array.from(String(n).toLowerCase().replace(/\s+/g," ")).map(c=>c.codePointAt(0).toString(36)).join("_").slice(0,150);
function cloudSave(r){if(!DB||!r)return;clearTimeout(_ct);_ct=setTimeout(()=>{DB.doc("students/"+(UID||sid(r.name))).set(r).catch(()=>{})},600)}
function softRender(){const a=document.activeElement;if(!(a&&/INPUT|TEXTAREA/.test(a.tagName)))keep(render)}
async function persist(c){const m=x=>{const e=$("#edmsg");if(e)e.textContent=" "+x},json=JSON.stringify(c);
 if(json.length>175000){m("Не сохранено: изображения слишком большие. Удалите часть фото или используйте изображения меньшего размера.");return}
 try{localStorage.setItem("lb_content",json)}catch(e){m("Не удалось сохранить на этом устройстве: "+e.message);return}
 if(DB&&CAN){try{await DB.doc("lesson/content").set({json});m("Сохранено ✓ ученики увидят изменения")}catch(e){m("Локально сохранено, но не удалось отправить ученикам: "+e.message)}}
 else m("Сохранено только на этом устройстве")}
async function initCloud(){try{
 try{applyContent(JSON.parse(localStorage.getItem("lb_content")||"null"))}catch(e){}
 if(!window.claude||!claude.use){render();return}
 const u=await claude.use("user");if(u){try{CAN=await u.canEdit()}catch(e){}try{UID=await u.id()}catch(e){}}
 DB=await claude.use("db");
 if(DB&&S.name&&!window.TEACHER_MODE){try{const d=await DB.doc("students/"+(UID||sid(S.name))).get();if(d.exists){const x=d.data();S.done=x.done||[];if(x.testSubmitted&&x.ans){S.ans=x.ans;S.sub=true}S.r.mood=x.mood||undefined;S.r.und=x.und||undefined;S.r.conf=x.conf||[];Object.entries(x.rt||{}).forEach(([f,v])=>{S.r[f]=v})}}catch(e){}saveStudent()}
 if(DB){
  DB.doc("lesson/content").onSnapshot(s=>{if(s.exists){try{applyContent(JSON.parse(s.data().json))}catch(e){}}softRender()},()=>{});
  if(CAN)DB.collection("students").onSnapshot(q=>{CLOUD=q.docs.map(d=>d.data());if(tab==="teacher")softRender()},()=>{});
 }
 render();
}catch(e){}}
function taskCell(r){const n=r.done?r.done.length:(r.tasksDone||0);
 return `<b>${n}/${tk().length}</b>`+(r.done?tk().map((x,i)=>`<div class="mu" style="font-size:14px;line-height:1.35">${r.done.includes(i)?"✅":"⬜"} ${esc(x)}</div>`).join(""):"")}
function reflDet(r){if(!r.rt)return "";
 return `<details style="margin-top:6px"><summary class="mu">ответы</summary><div style="font-size:14px">${r.mood?MO[r.mood-1]+" ":""}${r.und?"понимание "+r.und+"/5":""}${RF.map(([k,f])=>r.rt[f]?`<div><b>${esc(rlab(k))}:</b> ${esc(r.rt[f])}</div>`:"").join("")}</div></details>`}
function edInit(){const lesson=cl(LESSON),lecture=LECT.map(s=>Object.assign({},cl(s),{images:Array.isArray(s.images)?cl(s.images):[]}));
 if(!Array.isArray(lesson.taskImages))lesson.taskImages=[];
 while(lesson.taskImages.length<lesson.tasks.length)lesson.taskImages.push([]);
 lesson.taskImages=lesson.taskImages.slice(0,lesson.tasks.length).map(images=>Array.isArray(images)?images:[]);
 ED={LESSON:lesson,LECT:lecture,QUIZ:cl(QUIZ),RLB:cl(Object.fromEntries(RF.map(([k])=>[k,RLB[k]||[T.ru[k],T.kk[k]]])))}
}
const ei=(p,v,ta)=>ta?`<textarea data-p="${p}" style="min-height:70px">${esc(v||"")}</textarea>`:`<input type="text" data-p="${p}" value="${esc(v||"")}">`;
const pair=(lb,p,v,ta)=>`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:8px"><div><span class="mu">РУС · ${lb}</span>${ei(p+".0",v[0],ta)}</div><div><span class="mu">ҚАЗ · ${lb}</span>${ei(p+".1",v[1],ta)}</div></div>`;
function imageEditor(images,type,i){return `<div style="margin:10px 0"><label>Фото (можно выбрать несколько)</label><input type="file" accept="image/*" multiple data-image-${type}="${i}">${(images||[]).map((src,j)=>`<div style="display:inline-block;vertical-align:top;margin:8px"><img src="${esc(src)}" alt="" style="display:block;width:150px;height:110px;object-fit:contain;border:1px solid var(--line);border-radius:8px"><button class="btn sm ghost" data-a="edDelImage" data-type="${type}" data-i="${i}" data-j="${j}">Удалить фото</button></div>`).join("")}</div>`}
function compressImage(file){return new Promise((resolve,reject)=>{
 if(!file.type.startsWith("image/")){reject(new Error("Выберите файл изображения."));return}
 if(file.size>12000000){reject(new Error("Файл больше 12 МБ: выберите изображение меньшего размера."));return}
 const reader=new FileReader();
 reader.onerror=()=>reject(new Error("Не удалось прочитать файл изображения."));
 reader.onload=()=>{const image=new Image();
  image.onerror=()=>reject(new Error("Файл не удалось открыть как изображение."));
  image.onload=()=>{const scale=Math.min(1,800/Math.max(image.naturalWidth,image.naturalHeight)),canvas=document.createElement("canvas");
   canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
   const context=canvas.getContext("2d");if(!context){reject(new Error("Браузер не смог обработать изображение."));return}
   context.fillStyle="#fff";context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(image,0,0,canvas.width,canvas.height);
   resolve(canvas.toDataURL("image/jpeg",.68))};
  image.src=reader.result};
 reader.readAsDataURL(file)})}
function editorV(){
 if(DB&&!CAN)return `<h2>Редактор урока</h2><div class="warn">Менять урок может только владелец страницы.</div>`;
 if(!ED)edInit();
 const sec=(h,x)=>`<div class="card"><b>${h}</b>${x}</div>`;
 return `<h2>Редактор урока</h2><div class="mu">Измените текст и нажмите «Сохранить урок»: у учеников откроется новая версия.</div>`+
 sec("Тема",pair("тема","LESSON.topic",ED.LESSON.topic))+
 sec("Цели",ED.LESSON.goals.map((g,i)=>pair("цель","LESSON.goals."+i,g)).join(""))+
 sec("Задания",ED.LESSON.tasks.map((g,i)=>`<div style="border-top:1px solid var(--line);padding-top:10px;margin-top:10px">${pair("задание "+(i+1),"LESSON.tasks."+i,g)}${imageEditor(ED.LESSON.taskImages[i],"task",i)}<button class="btn sm ghost" data-a="edDelTask" data-i="${i}">Удалить задание</button></div>`).join("")+`<button class="btn sm" style="margin-top:10px" data-a="edAddTask">+ Добавить задание</button>`)+
 sec("Лекция",ED.LECT.map((s,i)=>`<div style="border-top:1px solid var(--line);padding-top:10px;margin-top:10px">${pair("заголовок","LECT."+i+".h",s.h)}${pair("текст","LECT."+i+".p",s.p,1)}<span class="mu">Код (необязательно)</span>${ei("LECT."+i+".code",s.code,1)}${imageEditor(s.images,"lecture",i)}<button class="btn sm ghost" data-a="edDelSec" data-i="${i}">Удалить раздел</button></div>`).join("")+`<button class="btn sm" style="margin-top:10px" data-a="edAddSec">+ Добавить раздел</button>`)+
 sec("Вопросы теста",`<p class="mu">Можно изменить формулировку, четыре варианта и правильный ответ, а также добавить или удалить вопрос.</p>`+
 ED.QUIZ.map((q,i)=>`<div class="card"><b>Вопрос ${i+1}</b>${pair("вопрос","QUIZ."+i+".q",q.q,1)}${q.o.map((o,j)=>pair("вариант "+("ABCD"[j]),"QUIZ."+i+".o."+j,o)).join("")}<label>Правильный ответ</label><select data-p="QUIZ.${i}.k">${q.o.map((_,j)=>`<option value="${j}" ${q.k===j?"selected":""}>${"ABCD"[j]}</option>`).join("")}</select><button class="btn sm ghost" data-a="edDelQuestion" data-i="${i}">Удалить вопрос</button></div>`).join("")+
 `<button class="btn sm" data-a="edAddQuestion">+ Добавить вопрос</button>`)+
 sec("Вопросы рефлексии",RF.map(([k])=>pair("вопрос","RLB."+k,ED.RLB[k])).join(""))+
 `<button class="btn g" data-a="edSave">💾 Сохранить урок и тест</button><button class="btn ghost" data-a="edReset">Вернуть исходный</button><span id="edmsg" class="mu"></span>`}

function render(){const TB=tabs();document.body.classList.toggle("tm",isT());
$("#nav").style.gridTemplateColumns=`repeat(${TB.length},1fr)`;
$("#nav").innerHTML=TB.map((k,i)=>`<button data-tab="${k}" class="${k===tab?"on":""} ${doneTab(k)?"dn":""}"><b>${k==="teacher"?"★":doneTab(k)?"✓":i+1}</b>${t(k)}</button>`).join("");
document.documentElement.lang=L;const current=isT()?"teacher":TB.includes(tab)?tab:"lesson";
$("#v").innerHTML={lesson:lessonV,lecture:lectureV,test:testV,reflect:reflV,send:sendV,teacher:teacherV}[current]();updProg()}

document.addEventListener("click",e=>{const b=e.target.closest("button,input");if(!b)return;const d=b.dataset;
if(d.l){L=d.l;document.querySelectorAll(".lang button").forEach(x=>x.classList.toggle("on",x.dataset.l===L));keep(render);return}
if(d.tab){tab=d.tab;render();window.scrollTo(0,0);return}
if(d.a==="join"){const n=$("#nm").value.trim();if(n){S.name=n;saveStudent();render()}return}
if(d.a==="chk"){const i=+d.i;S.done=b.checked?[...new Set([...S.done,i])]:S.done.filter(x=>x!==i);saveStudent();keep(render);return}
if(d.a==="ans"){S.ans[d.i]=+d.j;keep(render);return}
if(d.a==="sub"){if(!sure(b,"sub",Object.keys(S.ans).length<QUIZ.length?t("unans"):t("sure")))return;S.sub=true;saveStudent();render();window.scrollTo(0,0);return}
if(d.a==="mood"){S.r.mood=+d.n;saveStudent();keep(render);return}
if(d.a==="und"){S.r.und=+d.n;saveStudent();keep(render);return}
if(d.a==="conf"){const c=S.r.conf;S.r.conf=b.checked?[...new Set([...c,d.k])]:c.filter(x=>x!==d.k);saveStudent();keep(render);return}
if(d.a==="demo"){demoOp(d.d,d.op,+d.i);keep(render);const f=$("#in-"+d.d)||$("#in-k");if(f&&d.op!=="idx"&&d.op!=="get")f.focus({preventScroll:true});return}
if(d.a==="edAddTask"){ED.LESSON.tasks.push(["",""]);ED.LESSON.taskImages.push([]);keep(render);return}
if(d.a==="edDelTask"){ED.LESSON.tasks.splice(+d.i,1);ED.LESSON.taskImages.splice(+d.i,1);keep(render);return}
if(d.a==="edDelImage"){const images=d.type==="task"?ED.LESSON.taskImages[+d.i]:ED.LECT[+d.i].images;images.splice(+d.j,1);keep(render);return}
if(d.a==="edAddSec"){ED.LECT.push({h:["",""],p:["",""],images:[]});keep(render);return}
if(d.a==="edDelSec"){if(sure(b,"ds"+d.i,"Точно удалить? Нажмите ещё раз")){ED.LECT.splice(+d.i,1);keep(render)}return}
if(d.a==="edAddQuestion"){ED.QUIZ.push({q:["",""],k:0,o:[["",""],["",""],["",""],["",""]]});keep(render);return}
if(d.a==="edDelQuestion"){if(ED.QUIZ.length<=1){$("#edmsg").textContent="В тесте должен остаться хотя бы один вопрос.";return}ED.QUIZ.splice(+d.i,1);keep(render);return}
if(d.a==="edSave"){if(IMAGE_BUSY){$("#edmsg").textContent="Дождитесь окончания обработки фотографий.";return}
 const invalid=ED.QUIZ.findIndex(q=>!q.q.every(x=>x.trim())||!q.o.every(o=>o.every(x=>x.trim()))||!Number.isInteger(q.k)||q.k<0||q.k>=q.o.length);
 if(!ED.QUIZ.length||invalid!==-1){$("#edmsg").textContent=invalid===-1?"В тесте должен быть хотя бы один вопрос.":"Заполните вопрос и все четыре варианта в вопросе "+(invalid+1)+".";return}
 const c=cl(ED);c.version=CONTENT_VERSION;applyContent(cl(c));persist(c);return}
if(d.a==="edReset"){if(sure(b,"rst","Точно вернуть? Нажмите ещё раз")){const c={LESSON:cl(DEF.LESSON),LECT:cl(DEF.LECT),QUIZ:cl(DEF.QUIZ),RLB:{},version:CONTENT_VERSION};applyContent(cl(c));ED=null;persist(c);keep(render)}return}
if(d.a==="tt"){TT=d.k;keep(render);return}
if(d.a==="resetAll"){if(sure(b,"ra","Точно удалить всех учеников? Нажмите ещё раз")){DB.collection("students").get().then(q=>Promise.all(q.docs.map(x=>DB.doc("students/"+x.id).delete()))).then(()=>{rosterSet({});CLOUD=[];keep(render)}).catch(()=>{})}return}
if(d.a==="tsort"){TS.sort=d.s;keep(render);return}
if(d.a==="csv"){csv();return}
 if(d.a==="rosterCsv"){
  const rows=Object.values(rosterGet()).sort((a,b)=>a.name.localeCompare(b.name,"ru"));
  const quote=v=>'"'+String(v??"").replace(/"/g,'""')+'"';
  const data=[["ФИО","Практические пункты","Всего пунктов","Тест отправлен","Баллы теста","Рефлексия завершена","Баллы рефлексии","Обновлено"],
   ...rows.map(r=>[r.name,r.tasksDone||0,r.tasksTotal||tk().length,r.testSubmitted?"Да":"Нет",r.testScore??"",r.reflectionDone?"Да":"Нет",r.reflectionScore??"",r.updatedAt||""])];
  const blob="\\uFEFF"+data.map(row=>row.map(quote).join(";")).join("\\r\\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([blob],{type:"text/csv;charset=utf-8"}));a.download="rezultaty_uchenikov.csv";document.body.appendChild(a);a.click();a.remove();return
 }
 if(d.a==="rosterClear"){if(sure(b,"rc","Точно удалить? Нажмите ещё раз")){rosterSet({});keep(render)}return}
if(d.a==="tclear"){lsSet("");keep(render);return}
if(d.a==="copy"){const ta=$("#rp");ta.select();let ok=false;try{ok=document.execCommand("copy")}catch(x){}
if(!ok&&navigator.clipboard)navigator.clipboard.writeText(ta.value).catch(()=>{});b.textContent=t("copied")}});
document.addEventListener("input",e=>{const d=e.target.dataset;
if(d.p){const k=d.p.split("."),last=k.pop();let o=ED;k.forEach(x=>o=o[x]);o[last]=d.p.endsWith(".k")?Number(e.target.value):e.target.value;return}
if(e.target.id==="chat"){lsSet(e.target.value);$("#tres").innerHTML=teacherRes();return}
if(d.f){S.r[d.f]=e.target.value;saveStudent();const bx=$("#rbox");if(bx)bx.innerHTML=rbox();updProg()}});
document.addEventListener("change",async e=>{const input=e.target,d=input.dataset,type=d.imageTask!==undefined?"task":d.imageLecture!==undefined?"lecture":null;
 if(!type||!input.files||!input.files.length)return;
 const index=Number(type==="task"?d.imageTask:d.imageLecture),files=Array.from(input.files),images=type==="task"?ED.LESSON.taskImages[index]:ED.LECT[index].images;
 IMAGE_BUSY++;const status=$("#edmsg");if(status)status.textContent=" Обрабатываются фотографии…";
 try{for(const file of files){const src=await compressImage(file);images.push(src);
   if(JSON.stringify(ED).length>175000){images.pop();throw new Error("Превышен допустимый размер урока. Удалите часть фото или выберите изображения меньшего размера.")}}
  keep(render);const message=$("#edmsg");if(message)message.textContent=" Фото добавлены. Нажмите «Сохранить урок и тест»."}
 catch(error){keep(render);const message=$("#edmsg");if(message)message.textContent=" Не удалось добавить фото: "+error.message}
 finally{IMAGE_BUSY--}});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.id&&e.target.id.startsWith("in-")){const n=e.target.id.slice(3),dn=(n==="k"||n==="v")?"dict":n,op=(dn==="dict"||dn==="set")?"add":"push";demoOp(dn,op,0);keep(render);const f=$("#in-"+n);if(f)f.focus({preventScroll:true})}
if(e.key==="Enter"&&e.target.id==="nm")$("[data-a=join]").click()});
window.addEventListener("hashchange",render);
if(window.LB_SESSION&&window.LB_SESSION.role==="student")S.name=window.LB_SESSION.name;
render();initCloud();
