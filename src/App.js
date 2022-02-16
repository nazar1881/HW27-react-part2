import logo from "./logo.svg"
import doctor1 from "./img/doctor1.jpg"
import doctor2 from "./img/doctor2.jpg"
import doctor3 from "./img/doctor3.jpg"
import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="appointments" element={<Appointments />} />
            <Route
              path="appointments/hypertension"
              element={<Hypertension />}
            />
            <Route
              path="appointments/diabetes"
              element={<Diabetes />}
            />
             <Route
              path="appointments/bursitis"
              element={<Bursitis />}
            />
             <Route
              path="appointments/cystitis"
              element={<Сystitis />}
            />
            <Route path="events" element={<Events />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="clients" element={<Clients />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

function Home() {
  return (
    <>
      <nav className="nav nav-pills nav-justified nav-style">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link" to="appointments">
          Appointments
        </Link>
        <Link className="nav-link" to="events">
          Events
        </Link>
        <Link className="nav-link" to="doctors">
          Doctors
        </Link>
        <Link className="nav-link" to="clients">
          Clients
        </Link>
      </nav>
      <h1 className="home-h1">Welcome to the Healthcare</h1>
      <p>You can use navigation-bar</p>
    </>
  )
}

function Appointments() {
  return (
    <>
      <nav className="nav nav-pills nav-justified nav-style">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="">
          Appointments
        </Link>
      </nav>
      <h2>Appointments page</h2>
      <Link
        className="list-group-item list-group-item-action"
        to="hypertension"
      >
        Hypertension
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="diabetes"
      >
        Diabetes
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="bursitis"
      >
        Bursitis
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="cystitis"
      >
        Cystitis
      </Link>
    </>
  )
}

function Events() {
  return (
    <>
      <nav className="nav nav-pills nav-justified nav-style">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="">
          Events
        </Link>
      </nav>
      <h2>Events page</h2>
      <div class="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          COVID-19 & Mental Health: Response and Management
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Jan 12 2022 : InnovatorMD Global Summit 2022
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Feb 3 2022 : 1st International Meeting "Intermediate Respiratory Care
          Unit"
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          COVID-19: Lockdown: when, how, for what ?
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Feb 14 2022 : Recomendation for your health
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Feb 27 2022 : second International Meeting "Intermediate Respiratory Care
        </a>
      </div>
    </>
  )
}

function Doctors() {
  return (
    <>
      <nav className="nav nav-pills nav-justified nav-style">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="">
          Doctors
        </Link>
      </nav>
      <h2>Doctors page</h2>
      <Stack spacing={2}>
        <PageItem>
          <Avatar className="avatar"
            style={{ alignItems: "center" }}
            alt="Kilian Merphy"
            src={doctor1}
            sx={{ width: 100, height: 100 }}
          />
          <h3>Kilian Merphy</h3>
          <h5>Cardiovascular specialist</h5>
          <h6>He has rescued more than 250 children with serious cardiovascular disease and has no plans to stop</h6>
        </PageItem>

        <PageItem>
          <Avatar className="avatar"
            alt="Travis Rangnek"
            src={doctor2}
            sx={{ width: 100, height: 100 }}
          />
          <h3>Travis Rangnek</h3>
          <h5>Pediatrician / traumatologist</h5>
          <h6>He can heal you after any injury and do it in no time</h6>
        </PageItem>

        <PageItem>
          <Avatar className="avatar"
            alt="Aria Robenson"
            src={doctor3}
            sx={{ width: 100, height: 100 }}
          />
          <h3>Aria Robenson</h3>
          <h5>Specialist in diabetes</h5>
          <h6>She will be happy to help you with your difficult illness (diabetes), she has saved many people</h6>
        </PageItem>
      </Stack>
    </>
  )
}

function Clients() {
  return (
    <>
      <nav className="nav nav-pills nav-justified nav-style">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="">
          Clients
        </Link>
      </nav>
      <h1>Clients page</h1>
      <ul class="list-group">
        <li class="list-group-item">Patient №1: Mykola Petrov, date of birth: 12.01.1983</li>
        <li class="list-group-item">Patient №2: Artem Alekseyev, date of birth: 01.09.1993</li>
        <li class="list-group-item">Patient №3: Artur Logai, date of birth: 21.02.1988</li>
        <li class="list-group-item">Patient №4: Dmitro Lomonos, date of birth: 17.04.1997</li>
      </ul>
    </>
  )
}

function Hypertension() {
  return (
    <>
      <h2>Гіпертонія</h2>
      <p className="appointments-text">Серцево-судинні захворювання (ССЗ) є провідною причиною смерті в усьому світі, що становить приблизно 30% від усієї смертності.1,2 Гіпертонія, ймовірно, є найбільш важливим фактором ризику для розвитку серцево-судинних захворювань. Артеріальна гіпертензія визначається як систолічний артеріальний тиск (САТ) ≥140 мм рт.ст. і/або діастолічний артеріальний тиск (ДАТ) ≥90 мм рт.ст.  3 Її поширеність дуже висока, вона вражає близько 40% світового населення. Проте, більш ніж 40% цих хворих, як і раніше, не отримують лікування в усьому світі, дві третини з них є неконтрольованими, і тільки близько 34% контролюють рівень артеріального тиску. Проте, ці відсотки значно нижче в країнах, що розвиваються та їх регіонах.
      Клінічні дослідження показують пряму залежність між підвищеним артеріальним тиском і ризиком розвитку серцево-судинних захворювань. У мета-аналізі 61 клінічних випробувань, в тому числі майже 1 мільйон осіб у віці від 40 до 89 років, зі смертельними наслідками, ішемічна хвороба серця та інсульт безпосередньо корелюють зі підвищенням АТ в діапазоні від 115/75 до 185/115 мм рт. ст. Дослідження показало, що кожне наступне збільшення САД на 20 мм рт.ст. (або 10 мм рт.ст. для ДАТ) подвоює ризик смертності в результаті фатальної коронарної події або інфаркту. Цей зв'язок між підвищеним артеріальним тиском і серцево-суддиними (CС) ризиками -  безперервний, постійний, і не залежить від інших факторів. Гіпертензія підвищує тиск, який лівий шлуночок повинен подолати під час скорочення шлуночків, щоб проштовхнути кров для системного кровообігу. Згодом така рбота серця може мати несприятливі наслідки, що призводять до збільшення ризику розвитку ішемічної хвороби серця (ІХС), гіпертрофії лівого шлуночка (ГЛШ), інфаркту міокарда (ІМ), інсульту, і серцевої недостатності. 6
      Таким чином, застосування антигіпертензивних препаратів для зниження кров'яного тиску показує значну перевагу в зниженні ризику серцево-судинних захворювань. Дані плацебо-контрольованих досліджень і мета-аналізів показують, що з адекватним контролем артеріального тиску, частота ішемічної хвороби серця може бути зменшена на цілих 20% і інсульту на цілих 39%</p>
    </>
  )
}

function Diabetes() {
  return (
    <>
      <h2>Діабет і як йому запобігти</h2>
      <p className="appointments-text">Сто років тому цукровий діабет був фактично смертельним вироком. На той час існувала обмежена кількість інформації стосовно хвороби — її причин, різновидів, профілактики, ускладнень чи лікування. Зокрема бракувало ліків чи будь-яких інших методів, які дозволяли жити з цукровим діабетом повноцінним життям. Особливо, до часу синтезування та широкого застосування життєво важливого гормону інсуліну.</p>
      <p className="appointments-text">У 1915 році до впровадження інсулінотерапії американські лікарі Фредерік Аллен та Елліотт Джослін запропонували спеціальну дієту для лікування діабету. Це була сувора дієта з мінімальним споживанням вуглеводів. Людям фактично доводилося періодично голодувати або їсти вкрай мало, щоби контролювати хворобу. Інколи їм прописували споживання близько 450 калорій на день, тому нерідко пацієнти з діабетом помирали від голоду, туберкульозу чи кетоацидозу.</p>
      <p className="appointments-text">Хоча докази щодо ефективності цього методу були дуже слабкі, все одно голодування залишалося єдиним шляхом “лікування” діабету. Це також дозволило тисячам пацієнтам з цукровим діабетом, прожити кілька років до часу, коли було винайдено інсулін і він став доступним. </p>
      <p className="appointments-text">Це сталося на початку 20-х років. У 1921 році канадський лікар та науковець Фредерік Бантінг та його помічник Чарльз Бест синтезувати інсулін із підшлункової залози собаки. До цього інші дослідники виявили, що в разі видалення підшлункової залози у цих тварин розвивалися симптоми діабету і незабаром після цього вони помирали. Саме тому лікарі дійшли висновку, що підшлункова залоза виробляє речовину, з якою пов’язаний діабет. Після цього відкриття до винайдення “чистого” інсуліну, було ще кілька спроб синтезувати цю речовину, але вони були невдалими.
      Першу ін’єкцію інсуліну було зроблено у 1922 році. ЇЇ отримав 14-річний хлопчик з Канади Леонард Томпсон. До цього він два роки страждав від діабету, виживав на голодуванні і на той момент важив менш ніж 30 кілограмів. Тоді інсулін врятував йому життя. Детальніше
      Поширення препаратів інсуліну кардинально змінило якість та тривалість життя пацієнтів з цукровим діабетом. Протягом тривалого періоду вони переважно отримували гормон свиней або корів. Але такий інсулін було важко виготовити, крім того, у багатьох пацієнтів він викликав алергічні реакції. Вперше синтетичний "людський" інсулін був випущений у 1978 році. Для його отримання науковці використали бактерії E. coli.
      Завдяки десятиліттям досліджень люди з діабетом сьогодні можуть обирати різні форми та способи приймати інсулін залежно від особистих потреб та способу життя. Краще розуміння хвороби та дослідження методів і препаратів, які життєво необхідні пацієнтам з цією хворобою, буквально змінили життя мільйонів людей.</p>
    </>
  )
}

function Bursitis() {
  return (
    <>
      <h2>Бурсит</h2>
      <p className="appointments-text">Бурси́т (лат. bursitis) — запалення слизових сумок (bursae mucosae) навколо суглобів (синовіальних сумок). Супроводжується підвищеним утворенням і накопиченням в їхніх порожнинах випоту. Його спричинюють травми, гострі чи хронічні інфекції тощо.
      Часто бурсити пов'язані з професією, зокрема з роботою у шахті.
      Захворювання виявляється у вигляді невеликої, щільної припухлості, яка поступово збільшується і стає хворобливою.</p>
      <p className="appointments-text">Хронічний бурсит — хронічне серозне запалення слизової сумки унаслідок невеликих травм, які часто повторюються (наприклад в працівників, яким приходиться постійно спиратися на коліно або лікоть), а також при слабковірулентній інфекції. Нагноєння у таких випадках не настає, а відбувається потовщення стінки слизової сумки та скупчення у порожнині серозного ексудату фібрину, іноді щільних рисоподібних тіл, вільно розташованих у порожнині розтягнутої сумки.</p>
    </>
  )
}

function Сystitis() {
  return (
    <>
      <h2>Цистит</h2>
      <p className="appointments-text">Цисти́т — це запалення слизової оболонки сечового міхура.</p>
      <p className="appointments-text">Збудниками циститу найчастіше є — кишкова паличка, стафілококи та стрептококи. Хвороба виникає внаслідок потрапляння у сечовий міхур інфекції. Збудники можуть потрапляти у сечовий міхур "зверху" (нирки, сечоводи), "знизу" (зовнішні статеві органи, уретра), та вкрай рідко - іншими шляхами (кров, лімфа, травматичне ушкодження).
      Спостерігається при сечокам'яній хворобі, пієлонефриті, уретриті, при деяких видах венеричних захворювань, термічному та радіаційному ураженні, травмах. Розвиткові циститу сприяє переохолодження тіла, довготривале лікування із застосуванням імунодепресантів та антибіотиків, вживання прянощів, копченостей, алкоголю; порушення правил особистої гігієни тощо.</p>
    </>
  )
}

const PageItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}))

export default App