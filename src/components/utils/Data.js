import gecko from '../../images/gecko.jpg';
import spider from '../../images/spider.jpg';
import Mia from '../../images/breeding-geckos/mia.jpg';
import Freya from '../../images/breeding-geckos/freya.jpg';
import Loki from '../../images/breeding-geckos/loki.jpg';
import placzki from '../../images/breeding-geckos/placzki.jpg';

const sliderData = [
  {
    id: 0,
    img: `url("https://i.imgur.com/G8FV3Tz.jpg")`,
    title: 'Wiosenny konkurs!',
    text: "Polub nasz fanpage na Facebook'u i zgarnij nagrody! Szczegóły konkursu podane w wyróżnionym poście!",
    isButton: true,
    isButtonLink: false,
    buttonDirect: 'https://www.facebook.com/ValhallaGeckos'
  },
  {
    id: 1,
    img: `url("https://images5.alphacoders.com/449/thumb-1920-449483.jpg")`,
    title: 'Promocje - czas start!',
    text: 'Odwiedź nasz sklep i zobacz naszą oferte - nowe garunki już są!',
    isButton: true,
    isButtonLink: true,
    buttonDirect: 'main'
  },
  {
    id: 2,
    img: `url("https://jennicruzcom.files.wordpress.com/2020/05/1741960.jpg")`,
    title: 'Bądź razem z Nami!',
    text: 'Odwiedź nasz Instagram, zacznij go obserwować i bądź na czasie z naszą ofertą!',
    isButton: true,
    isButtonLink: false,
    buttonDirect: 'https://www.instagram.com/valhallageckos/'
  }
];

const geckos = [
  {
    name: 'Mia',
    imgSrc: Mia,
    species: 'Gekon orzęsiony (Correlophus ciliatus)',
    morph: 'Full Pinstripe Harlequin',
    date: '18-12-2020',
    sex: 'female'
  },
  {
    name: 'Freya',
    imgSrc: Freya,
    species: 'Gekon orzęsiony (Correlophus ciliatus)',
    morph: 'Halloween Extreme Harlequin',
    date: '6-10-2021',
    sex: 'female'
  },
  {
    name: 'Loki',
    imgSrc: Loki,
    species: 'Gekon orzęsiony (Correlophus ciliatus)',
    morph: 'Reverse Pinstripe',
    date: '14-02-2021',
    sex: 'male'
  },
  {
    name: 'Płaczki',
    imgSrc: placzki,
    species: 'Gekon płaczący (Lepidodactylus lugubris)',
    morph: 'Classic - stado 10 sztuk',
    date: '07-08-2020',
    sex: 'female'
  }
];

const storeMenu = [
  {
    id: 1,
    itemId: 'gecko01',
    name: 'Gekony',
    imgSrc: gecko
  },
  {
    id: 2,
    itemId: 'frog01',
    name: 'Żaby',
    imgSrc:
      'https://media.istockphoto.com/photos/blue-poison-dart-frog-against-white-background-picture-id93218208'
  },
  {
    id: 3,
    itemId: 'snake01',
    name: 'Węże',
    imgSrc:
      'https://previews.123rf.com/images/cynoclub/cynoclub1405/cynoclub140500141/28268011-boa-constrictor-in-front-of-white-background.jpg'
  },
  {
    id: 4,
    itemId: 'spider01',
    name: 'Ptaszniki',
    imgSrc: spider
  },
  {
    id: 5,
    itemId: 'bug01',
    name: 'Karmówka',
    imgSrc:
      'https://www.adamspetcare.com/-/media/Images/Adams2-NA/US/Photos/Blog/Article/crickets.jpg'
  },
  {
    id: 6,
    itemId: 'plant01',
    name: 'Rośliny',
    imgSrc:
      'https://media.istockphoto.com/photos/giant-monstera-tree-in-flowerpot-isolated-on-white-background-with-picture-id1254913138?k=20&m=1254913138&s=612x612&w=0&h=n6aTVS_I-bCq0heHJ6sE9cXwgPUtfdFxOMaZDT_R1bk='
  },
  {
    id: 7,
    itemId: 'other01',
    name: 'Akcesoria',
    imgSrc: 'https://bioterr.pl/userdata/public/gfx/4007/box-hodowlany-m-302x196x147cm.jpg'
  }
];

const storeItems = [
  {
    name: 'geckos',
    content: [
      {
        id: 1,
        name: 'Felsuma madagaskarska',
        imgSrc: 'https://na-pulpit.com/zdjecia/jaszczurka-gekon-zielony.jpeg',
        price: 350,
        description:
          'Felsuma madagaskarska Phelsuma madagascariensis to najładniejszy gekon o aktywności dziennej. Zamieszkuje wyspę Madagaskar oraz kilka innych pobliskich wysepek. Zamieszkuje suche lasy i ich obrzeża, często też jest widywany blisko osad ludzkich. Ta nieśmiała jaszczurka, jeśli ma dobre warunki bytowe dożywa nawet 20 lat.'
      },
      {
        id: 2,
        name: 'Gekon orzęsiony',
        imgSrc:
          'https://www.terrariumquest.com/wp-content/uploads/2019/02/lizard-crested-gecko-e1551071333649.jpg',
        price: 300,
        description:
          "Bardzo ładny i popularny gekon występujący w licznych odmianach barwnych. Gekon jest endemicznym gatunkiem występującym na tropikalnych wyspach Nowej Kaledoni. Wszystkożerny, można podawać mu owady, a także specjalne papki typy 'pangea'. Nie wolno zapominać o suplementowaniu wapnia i witamin."
      },
      {
        id: 3,
        name: 'Gekon płaczący',
        imgSrc: 'https://live.staticflickr.com/2922/33168452234_2959707c8a_b.jpg',
        price: 60,
        description:
          'Płaczki to jedne z mniejszych (dorasta do 10 cm z ogonem), ale niezwykle popularnych gekonów. Wydają charakterystyczne odgłosy czik, czik, czik. Zaleca się hodować je w grupie (5-10 osobników). Rozmnażają się partenogenetycznie (samice same z siebie rodzą swoje klony), a więc samce niemal nie istnieją w hodowlach'
      },
      {
        id: 4,
        name: 'Gekon lamparci',
        imgSrc: 'http://justfunfacts.com/wp-content/uploads/2020/05/leopard-gecko.jpg',
        price: 250,
        description:
          'Eublefar lamparci to jaszczurka pochodząca z pustynnych i półpustynnych terenów Azji. Jest bardzo spokojna oraz łatwo przyzwyczaja się do człowieka, przez co jest popularną jaszczurką w hodowli. Eublefary te mogą mieć bardzo dużo odmian barwnych, dzięki czemu ich kolorystyka jest różnorodna. Jaszczurka polecana dla początkujących.'
      },
      {
        id: 5,
        name: 'Gekon olbrzymi',
        imgSrc:
          'https://thumbs.dreamstime.com/b/new-caledonian-giant-gecko-rhacodactylus-leachianus-largest-species-world-endemic-to-59865325.jpg',
        price: 650,
        description:
          'Jest to największy obecnie znany gekon. Dorosły osobnik Gekona olbrzymiego (Rhacodactylus leachianus) osiąga rozmiar do 35 centymetrów oraz może ważyć nawet 500 gramów. Jego naturalne środowisko występowania to wyłącznie lasy deszczowe Nowej Kaledonii. Głównie zamieszkuje owocujące drzewa, które dostarczają mu niezbędny pokarm.'
      },
      {
        id: 6,
        name: 'Gekon toke',
        imgSrc: 'https://www.tapeciarnia.pl/tapety/normalne/256727_gekon_jaszczurka_drzewo.jpg',
        price: 450,
        description:
          'Gekon toke to jeden z największych gatunków wśród gekonów, który swoją nazwę zawdzięcza nietypowym zwyczajom godowym samców. To trudna do oswojenia jaszczurka. Wobec ludzi są zwykle nieufne i agresywne, często gryzą, dlatego bez potrzeby nie należy przenosić ich z terrarium. W sytuacji zdenerwowania toke wydają charakterystyczne dźwięki, podnoszą się na łapach i otwierają pyski.'
      },
      {
        id: 7,
        name: 'Gekon Williamsa',
        imgSrc:
          'https://www.wykop.pl/cdn/c3201142/comment_Bso7lLrTWSfRo9iJb9Pp0jcrwyKve3I9,w1200h627f.jpg',
        price: 550,
        description:
          'Jest to gatunek endemiczny występujący jedynie w tropikalnym lesie Tanzanii. Gekony te osiągają od 6 do 10 cm długości ciała. Cechą charakterystyczną tego gatunku jest piękne, niebiesko-szafirowe ubarwienie samców. Samice ubarwione są w odcieniach kolorów zielonego, oliwkowego lub brązowego. Są to gekony o aktywności dziennej, które w naturze większość czasu spędzają na drzewach.'
      }
    ]
  },
  {
    name: 'frogs',
    content: [
      {
        id: 1,
        name: 'Drzewołaz niebieski',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dendrobates_azureus_%28Dendrobates_tinctorius%29_Edit.jpg',
        price: 160,
        description:
          'Drzewołaz Lazurowy, zwany także Drzewołazem Niebieskim lub Błękitnym. Dendrobates azureus występuje jedynie w południowej części Ameryki Południowej. Samce i samice są dość podobne do siebie. Jednakże samica jest większa i bardziej masywna niż samiec. Drzewołazy te są aktywne przede wszystkim za dnia.'
      },
      {
        id: 2,
        name: 'Chwytnica kolorowa',
        imgSrc:
          'https://www.redeyedtreefrog.org/wp-content/uploads/2010/01/is-red-eyed-tree-frog-poisonous1.jpg',
        price: 180,
        description:
          'Średniej wielkości rzekotka o smukłym ciele z długimi kończynami. Palce zakończone przylgami co umożliwia jej wspinanie się po gładkich, śliskich powierzchniach. Głowa stosunkowo duża z wyłupiastymi oczami o rubinowo-czerwonej tęczówce. Podstawowym ubarwieniem jest zieleń, najczęściej w odcieniu szmaragdowym, spód ciała jaśniejszy, kremowy. Palce barwy pomarańczowej.'
      },
      {
        id: 3,
        name: 'Drzewołaz żółtopasy',
        imgSrc:
          'https://magazynakwarium.pl/wp-content/uploads/2021/04/Dendrobates-leucomelas.-Fot.-Pawel-Czapczyk.jpg',
        price: 130,
        description:
          'Drzewołaz żółtopasy, zwany też arlekinem to żabka z rodziny drzewołazów. Ma charakterystyczny, trzyczęściowy, żółty wzór na czarnym ciele, charakterystyczny dla poszczególnych osobników. W skórze znajdują się gruczoły jadowe. Toksyny występujące w jadzie pochodzą między innymi od jadowitych mrówek, które ta żaba zjada. Samice są nieco większe od samców.'
      },
      {
        id: 4,
        name: 'Ropucha afrykańska',
        imgSrc:
          'https://www.reptarium.cz/content/photo_01/Amietophrynus-regularis-03000002825_01.jpg',
        price: 80,
        description:
          'Ropucha Afrykańska zamieszkuje tereny Afryki m.in Egipt, Gambia, Kenia, Mali, Nigeria. Samce osiągają ok. 6-9cm długości ciała, samice są nieco większe i dorastają do ok. 7-13cm. Są bardzo aktywne i często zwiedzają swoje miejsce zamieszkania. Dosyć łatwe w hodowli i polecane jako pierwszy zwierzak dla początkujących terrarystów.'
      },
      {
        id: 5,
        name: 'Kumak nizinny',
        imgSrc:
          'http://www.fotoprzyroda.pl/uploads/gallery/album_78/med_gallery_3763_78_224091.jpg',
        price: 120,
        description:
          'Kumak nizinny (Bombina bombina) jest reprezentantem starej grupy płazów, której pierwsi przedstawiciele żyli już 150 mln lat temu. Przypomina trochę małą ropuchę i podobnie jak u niej, w jego skórze znajdują się liczne, duże gruczoły jadowe. Jeden z mniejszych płazów. Długość nie przekracza 5,5 cm. Samce kumaka wydają bardzo charakterystyczny głos kum-kum, od którego pochodzi określenie „kumkanie”.'
      }
    ]
  },
  {
    name: 'snakes',
    content: [
      {
        id: 1,
        name: `Wąż zbożowy "Classic"`,
        imgSrc: 'https://www.everythingreptiles.com/wp-content/uploads/2020/08/Miami-Phase.jpg',
        price: 350,
        description:
          'Popularny wąż w hodowli. Idealny na rozpoczęcie przygody z węzami. Posiadają różne odmiany barwne. Węże o spokojnym usposobieniu, bardzo aktywne i ciekawskie.'
      },
      {
        id: 2,
        name: 'Pyton królewski',
        imgSrc:
          'https://petkeen.com/wp-content/uploads/2021/09/ball-python-lying-on-a-tree_BikerPhoto-Shutterstock.jpg',
        price: 300,
        description:
          'Najmniejszy (dorasta do 150cm) i najbardziej popularny pyton w naszych domach. Pyton królewski to nieagresywny wąż, który dzięki swojemu ubarwieniu i krępej budowie będzie ozdobą każdego terrarium.'
      },
      {
        id: 3,
        name: 'Boa dusiciel',
        imgSrc: 'https://a.allegroimg.com/original/12bbab/bc79a40b4937abde895e8ad49345',
        price: 60,
        description:
          'Średniej wielkości wąż (dorasta do 2 metrów), a także jeden z najbardziej popularnych przedstawicieli rodziny Boa w naszych domach. Boa dusiciel to nieagresywny wąż, który dzięki swojemu ubarwieniu i krępej budowie będzie ozdobą każdego terrarium.'
      }
    ]
  },
  {
    name: 'spiders',
    content: [
      {
        id: 1,
        name: 'Skakun królewski',
        imgSrc: 'https://www.thespidershop.co.uk/wp-content/uploads/2022/02/p_regius_3.jpg',
        price: 70,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 2,
        name: 'Brachypelma boehmei',
        imgSrc:
          'https://beverleybugsandreptiles.co.uk/wp-content/uploads/2020/11/brachypelma_boehmei.jpg',
        price: 40,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 3,
        name: 'Chromatopelma cyaneopubescens',
        imgSrc:
          'https://arent.pl/wp-content/uploads/2020/03/Chromatopelma-cyaneopubescens-13-scaled.jpg',
        price: 50,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 4,
        name: 'Harpactira pulchripes',
        imgSrc:
          'https://arent.pl/wp-content/gallery/harpactira-pulchripes/thumbs/thumbs_Harpactira-pulchripes-3.JPG',
        price: 250,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 5,
        name: 'Haplopelma lividum',
        imgSrc: 'https://www.aquasnack.co.uk/wp-content/uploads/2020/07/Haplopelma-lividum.jpg',
        price: 150,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 6,
        name: 'Pterinochilus murinus usambara',
        imgSrc: 'https://3.allegroimg.com/s1024/0c8965/581270ca49a298d9ef867b46e253',
        price: 40,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 7,
        name: 'Caribena versicolor',
        imgSrc: 'https://arent.pl/wp-content/uploads/2020/03/Caribena-versicolor-8-scaled.jpg',
        price: 50,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 8,
        name: 'Brachypelma albopilosum',
        imgSrc: 'https://cdn.pixabay.com/photo/2019/10/27/07/31/tarantula-4580905_1280.jpg',
        price: 30,
        description: 'Treść opisu w przygotowaniu'
      },
      {
        id: 9,
        name: 'Psalmopoeus irminia',
        imgSrc: 'https://a.allegroimg.com/original/1ef8da/22a320af49dcb735131dcd0f524e',
        price: 250,
        description: 'Treść opisu w przygotowaniu'
      }
    ]
  },
  {
    name: 'food',
    content: [
      {
        id: 1,
        name: 'Świerszcz bananowy - 100 szt',
        imgSrc: 'https://zoo.opole.pl/wp-content/uploads/2015/06/swierszczbana-1107x831.jpg',
        price: 30,
        description:
          'Świerszcze bananowe (Gryllodes sigillatus) dorastają do wielkości od 20 do 25mm. To idealny, bezpieczny i pełnowartościowy pokarm dla młodych pająków oraz niewielkich płazów (drzewołazy) oraz małych jaszczurek wymagających drobnego pokarmu. Owady pochodzą z profesjonalnej hodowli, kupując u nas kupujesz świerszcze bezpośrednio od hodowcy.'
      },
      {
        id: 2,
        name: 'Świerszcz kubański - 100 szt',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Gryllus_assimilis_male_02.jpg',
        price: 30,
        description:
          'Świerszcze kubańskie (Gryllus assimilis) dorastają do wielkości od 25 do 35mm. To idealny, bezpieczny i pełnowartościowy pokarm dla młodych pająków oraz większych jaszczurek wymagających większych owadów. Owady pochodzą z profesjonalnej hodowli, kupując u nas kupujesz świerszcze bezpośrednio od hodowcy.'
      },
      {
        id: 3,
        name: 'Karaczan turecki - 100 szt',
        imgSrc: 'https://i0.wp.com/terrazoo.pl/wp-content/uploads/2020/04/turek.png?fit=801%2C463',
        price: 40,
        description:
          'Karaczany tureckie (Shelfordella lateralis) dorastają do wielkości od 22 do 28mm. To idealny, bezpieczny i pełnowartościowy pokarm dla młodych pająków oraz niewielkich płazów (drzewołazy) oraz małych jaszczurek wymagających drobnego pokarmu. Owady pochodzą z profesjonalnej hodowli, kupując u nas kupujesz świerszcze bezpośrednio od hodowcy.'
      },
      {
        id: 4,
        name: 'Karaczan argentyński - 100 szt',
        imgSrc: 'http://www.ecoregistros.org/site/images/albumes/32/31306/_MG_8886.JPG',
        price: 40,
        description:
          'Karaczany argentyńskie (Blaptica dubia) dorastają do wielkości od 40 do 50mm. To idealny, bezpieczny i pełnowartościowy pokarm dla pająków oraz większych jaszczurek wymagających większych owadów. Owady pochodzą z profesjonalnej hodowli, kupując u nas kupujesz świerszcze bezpośrednio od hodowcy.'
      },
      {
        id: 5,
        name: 'Mącznik młynarek - 250 ml',
        imgSrc: 'https://kraina-mrowek.pl/wp-content/uploads/2019/06/Macznik.jpg',
        price: 15,
        description:
          'Mącznik młynarek to chrząszcz z rodziny czarnuchowatych. Jego larwy osiągają rozmiar do 30 mm. Owad w naturze występuje zazwyczaj w produktach żywnościowych - np. w niehigienicznie utrzymywanych magazynach zboża i mąki. Świetnie nadaje się jako karmówka dla pająków lub mniejszych jaszczurek.'
      },
      {
        id: 5,
        name: 'Pangea czerwona z owadami - 100g',
        imgSrc:
          'https://a.allegroimg.com/original/110722/3cc9bf68487d9e20274142915356/PANGEA-Fruit-mix-with-Insects-454-g-czerwona',
        price: 70,
        description:
          'Najchętniej jedzone pokarmy dla gekonów na świecie. Pangea to pokarm dla gekonów z rodzaju Rhacodactylus, Phelsuma, Lygodactylus oraz innych owocożernych gatunków. Zawiera aturalne suszone owoce, pyłkek pszczeli, probiotyki dla większej odporności oraz izolat białka serwatki, suszone białko jaj oraz spiruline.'
      },
      {
        id: 5,
        name: 'Pangea szara z owadami - 100g',
        imgSrc:
          'https://a.allegroimg.com/original/118d27/af048dac4e6fb487c73a42ecf2fc/Pangea-szara-growth-breeding-50-gram',
        price: 15,
        description:
          'Najchętniej jedzone pokarmy dla gekonów na świecie. Pangea to pokarm dla gekonów z rodzaju Rhacodactylus, Phelsuma, Lygodactylus oraz innych owocożernych gatunków. Zawiera aturalne suszone owoce, pyłkek pszczeli, probiotyki dla większej odporności oraz izolat białka serwatki, suszone białko jaj oraz spiruline.'
      }
    ]
  },
  {
    name: 'plants',
    content: [
      {
        id: 1,
        name: 'Monstera deliciosa - p12',
        imgSrc:
          'https://a.allegroimg.com/original/11b8ba/6b346dd041be978a68278ca7ff74/Najpiekniejsza-Monstera-deliciosa-DZIURAWA-roz-M',
        price: 30,
        description:
          'Monstera deliciosa to roślina pnąca pochodząca z Ameryki Łanińskiej i Południowej. Obecnie jest znanych 37 garunków monstery. Charakteryzuje się dużymi, dziurawymi liśćmi, które wyglądają jak szwajcarski ser i są bardzo dekoracyjne. Lubi ciepłe, słoneczne stanowisko oraz wysoką wilgotność. Idealnie nadaje się do większych, horyzontalnych terrariów tropikalnych.'
      },
      {
        id: 2,
        name: 'Skrzydłokwiat - p12',
        imgSrc:
          'https://static3.redcart.pl/templates/images/thumb/7700/1500/1500/pl/0/templates/images/products/7700/0a773279bfcc23cc68d14a123e8d2300.png',
        price: 25,
        description:
          'Skrzydłokwiat, inaczej zwany skrzydłolistem, jest wiecznie zieloną rośliną pochodzącą z lasów tropikalnych. W naturze jest częścią runa lasów równikowych, charakteryzującego się wysoką wilgotnością oraz zacienieniem. Lubi ciepłe, słoneczne stanowisko oraz wysoką wilgotność. Nadaje się do większości tropikalnych terrariów.'
      },
      {
        id: 3,
        name: "Trzykrotka 'Purple Passion' - p9",
        imgSrc:
          'https://swiat-roslin.7web.pl/storage/app/uploads/public/5d4/7eb/7a1/thumb_64_550_350_0_0_crop.jpg',
        price: 12,
        description:
          'Wyjątkowa roślina doniczkowa cechująca się szybkim tempem wzrostu oraz łatwością w uprawie i pielęgnacji. Tradescantia fluminensis w naturze zamieszkuje obszar Ameryki Południowej. W warunkach domowych osiąga maksymalnie do około 20-30 centymetrów wysokości. Bardzo często gości w terrariach. Jest niezwykle odporna na błedy w pięlegnacji.'
      },
      {
        id: 4,
        name: "Soleirolia pospolita 'Dziecięce Łzy' - p9",
        imgSrc:
          "https://3.bp.blogspot.com/-yHiggfmQO0k/UvPlU7QoDmI/AAAAAAABCvc/vUZyCVVeXqM/s1600/IMGP8603+Soleirolia+soleirolii+-+Soleirolia+pospolita+'Dzieci%C4%99ce+%C5%82zy'.JPG",
        price: 20,
        description:
          'Solejrolia rozesłana pochodzi z północnych wybrzeży i z wysp Morza Śródziemnego, gdzie często jest wykorzystywana jako ozdobne poduchowate wypełnienie szczelin między płytami chodnikowymi i kamieniami. Jest delikatną, ale gęsto rosnącą rośliną, która dorasta do 50 cm. Szybko się rozrasta, a jej pędy przewieszają się, co sprawia wrażenie „wylewania się rośliny” z doniczki.'
      },
      {
        id: 5,
        name: "Bluszcz Hedera helix 'Variegata'",
        imgSrc:
          'https://zielony-parapet.pl/27268-thickbox_default/hedera-helix-variegata-bluszcz.jpg',
        price: 15,
        description:
          'Hedera helix jest gatunkiem wiecznie zielonego pnącza o bujnym ulistnieniu i długich, czepnych pędach. Roślina śródziemnomorsko-atlantycka. W naturalnym środowisku cechuje się szybkim wzrostem i pokaźnym rozmiarem docelowym. Ma duże zdolności adaptacyjne oraz cechującą ją wytrzymałość. Pędy osiągają nawet kilka metrów długości. Rozrasta się jednak wolniej niż jej zielonolistna forma, od której pochodzi.'
      }
    ]
  },
  {
    name: 'others',
    content: [
      {
        id: 1,
        name: 'Pęseta prosta stalowa 25cm',
        imgSrc:
          'https://5.allegroimg.com/s512/019a49/6c33214d4cbb8ce63e895f760a05/PROFESJONALNA-PENSETA-PINCETA-PENCETA-prosta-25-cm',
        price: 20,
        description:
          'Pęseta to jedno z najważniejszym narzędzi każdego terrrarysty. Pomocna podczas karmienia oraz sprzątania. Nasze pęsety są wygodne i wykonane ze stali najwyższej jakości'
      },
      {
        id: 2,
        name: 'Torf kokosowy 9 litrów',
        imgSrc: 'https://ireland.apollo.olxcdn.com/v1/files/k77842epbe8w2-PL/image;s=644x461',
        price: 300,
        description:
          'Włókno kokosowe sprasowane w kostkę o wadze 650g. Po zalaniu wodą (ok 4l) powstaje ok 9 litrów podłoża do terrariów wilgotnych i półwilgotnych. Nie pleśnieje, dobrze utrzymuje wilgoć. Każda kostka jest fabrycznie ofoliowana. Nie jest to zwykły torf ogrodniczy.'
      },
      {
        id: 3,
        name: 'Miseczka/wyspa wieszana 2 w 1  Repti-Zoo',
        imgSrc:
          'https://bioterr.pl/environment/cache/images/500_500_productGfx_4625/repti-zoo-2in1-miseczki-z-rampa-dla-zolwia-.jpg',
        price: 60,
        description:
          'Wisząca miseczka na pokarm i wodę oraz rampa dla zwierzęcia. W zestawie znajduje się uchwyt przyssawkowy z systemem dokręcenia/dociskania przyssawki.'
      },
      {
        id: 4,
        name: 'Miseczka na jedzenie',
        imgSrc: 'https://www.invital.pl/upload_pl/32050-1107234486_v.jpg',
        price: 250,
        description:
          'Miseczka na wodę lub pokarm dla zwierząt terraryjnych. Nadaje się dla gadów, płazów, owadów i pajęczaków. Doskonale wpasowuje się w wystrój terrarium typu pustynnego i stepowego. Jest bardzo stabilna, nawet dużym zwierzętom nie będzie łatwo jej przewrócić. Wykonana z bezpiecznych materiałów, zapewniających trwałość i łatwość czyszczenia.'
      }
    ]
  }
];

const geckoInfo = [
  {
    id: 0,
    title: 'Gekon orzęsiony – opis gatunku',
    content:
      'Gekon orzęsiony (Correlophus ciliatus) to gatunek jaszczurki z rodzaju Correlophus z rodziny Diplodactylidae. Gatunek gekona orzęsionego został opisany w 1866 roku przez Guichenota. Gekony orzęsione osiągają długość ciała do 25 cm, a bez ogona ok. 11 cm. Masa ciała dorosłego gekona orzęsionego sięga 65 gramów. Gekony orzęsione średniej wielkości mierzą do 22 cm i ważą do 45 gramów. Z kolei młode jaszczurki po wykluciu mierzą do 7 cm i ważą zaledwie 1,5 grama.'
  },
  {
    id: 1,
    title: 'Jak wygląda gekon orzęsiony?',
    content:
      'To właśnie ze względu na swój wygląd gekon orzęsiony jest jednym z najpopularniejszych gatunków wśród gekonów w hodowlach. W USA ten gatunek jaszczurki jest równie popularny, jak gekon lamparci. Ciało gekona orzęsionego pokryte jest okrągłymi łuskami. Wyrostki skórne znajdują się nad oczami i biegną wzdłuż ciała gekona aż do nasady ogona. Ogon gekona orzęsionego jest chwytny, spłaszczony na końcu, przypomina wiosło, z blaszkami, które odpowiadają za przyleganie do powierzchni. Co ciekawe, większość gekonów orzęsionych, żyjących w naturze nie posiada ogona, ponieważ temu gatunkowi ogon nie odrasta. Głowa gekona orzęsionego jest spłaszczona o trójkątnym kształcie klina. Oczy pozbawione są powiek, a do ich czyszczenia gekon używa swojego długiego języka. Spodnia część palców pokryta jest lamelami, zbudowanymi z milionów wyrostków skórnych, które odpowiadają za przyleganie do powierzchni.'
  },
  {
    id: 2,
    title: 'Tryb życia gekona orzęsionego',
    content: `Gekon orzęsiony zamieszkuje ciepłe i wilgotne lasy deszczowe Nowej Kaledonii, położonej około 1400 km od wybrzeży Australii. Średnia wilgotność na wyspie wynosi ok. 70%, z kolei średnia temperatura to 25,5 °C. Nie są to więc temperatury tropikalne i w ten sposób o gekonie orzęsionym nie należy myśleć w hodowli. Stosowanie wyższych temperatury w terrarium dla gekona orzęsionego może skończyć się jego przegrzaniem, a w ekstremalnych sytuacjach nawet śmiercią. Gekon orzęsiony to jaszczurka, która prowadzi nocny tryb życia. W ciągu dnia gekon orzęsiony przebywa w kryjówkach, natomiast w nocy poluje. Do polowań gekon orzęsiony wykorzystuje chwytny ogon oraz palce i końcówkę ogona pokrytą lamelami z wyrostkami skórnymi. Gekon ten jest doskonałym skoczkiem, do czego wykorzystuje fałdy skórne przebiegające wzdłuż ciała, które działają, jak spadochron.`
  },
  {
    id: 3,
    title: 'Co je gekon orzęsiony?',
    content:
      'Czym karmić gekona orzęsionego? Przede wszystkim należy wiedzieć, że ten gatunek gekona jest wszystkożerny. Można karmić go zarówno bezkręgowcami, jak i owocami oraz nektarem kwiatowym. Kluczowe w naturalnej diecie gekona orzęsionego są owady, można podawać mu karaczany argentyńskie, świerszcze i szarańczę. Pokarm powinien być suplementowany wapniem oraz mieszankami witamin dla jaszczurek. Co ciekawe gekon orzęsiony jest jedną z niewielu jaszczurek, której nie musimy karmić żywymi owadami. Pozwala na to dieta Allena Repashy`ego, która jest w pełni zbilansowanym, kompletnym pokarmem dla gekonów. Oczywiście dietę tą można wzbogacać o owady i owoce oraz nektary, by urozmaicić gekonowi orzęsionemu menu. Młode gekony orzęsione należy karmić każdego dnia. W przypadku dorosłych gekonów karmienie powinno odbywać się co dwa dni. W przypadku diety łączonej (Repashy + owady) bezkręgowce należy dodatkowo suplementować raz w tygodniu, posypując je wapniem oraz mieszanką witamin i minerałów dla gekonów (bez witaminy D3).'
  },
  {
    id: 4,
    title: 'Hodowla gekona orzęsionego',
    content:
      'Gekony osiągają dojrzałość płciową między 8 a 12 miesiącem życia. Nie oznacza to jednak, że należy je od razu rozmnażać. Ostrożni hodowcy zalecają, by samica skończyła 2 lata i ważyła ok. 65 gramów. Samce powinny mieć około 9 miesięcy. Cykl rozrodczy samicy gekona może trwać cały rok, wskazane jest jednak jego przerwanie na trzy miesiące w okresie zimowym. Samica składa dwa jaja co 25-40 dni. Samica powinna mieć możliwość złożyć jaja w pojemniku do inkubacji wypełnionym wermikulitem, który należy zraszać w proporcji 100 g podłoża + 50 g wody. Pojemnik należy otwierać raz w tygodniu, by sprawdzić wilgotność i dostarczyć świeżego powietrza. Pojemnik należy inkubować w temperaturze około 24,5-25,5°C – czas inkubacji w takiej temperaturze to około 60 dni. Dopuszczalna temperatura inkubacji waha się od 20 do 29°C. Przy temperaturze ok. 20°C czas inkubacji może wydłużyć się do 140 dni.'
  },
  {
    id: 5,
    title: 'Terrarium dla gekona orzęsionego',
    content:
      'Terrarium dla gekona orzęsionego może być szklane lub drewniane. To drugie należy odpowiednio zabezpieczyć przed wilgocią Podłoże terrarium powinno być chłonne i trzymać wilgoć – dobrze sprawdzi się np. substrat kokosowy, chociaż dostępne są inne podłoża np. kora, torf czy forest floor. Terrarium spryskujemy wodą raz dziennie wieczorem. Zostawiamy w nim również płytką miseczkę z wodą. Temperatura w terrarium powinna oscylować między 22, a 25°C, zatem może obyć się bez dodatkowego ogrzewania. Temperatura podwyższona miejscowo do 27°C może mieć pozytywny wpływ, podczas rozmnażania gekonów. Zimą (przez dwa-trzy miesiące) temperaturę warto obniżyć do 18-21°C, a samca oddzielić od samic. Jest to również okres odpoczynku od rozmnażania. Oświetlenie w terrarium może być wykorzystywane, by wytworzyć cykl 12-14 godzinnych dni świetlnych, które gekony będą przesypiać. Takie rozwiązanie będzie też wpływało korzystanie na wzrost roślin w terrarium. By obserwować gekona orzęsionego nocą można zamontować klasyczną czerwoną lampę terrarystyczną. Terrarium można udekorować konarami, lianami oraz rurkami kokosowymi. Jeżeli terrarium będzie dodatkowo oświetlane pod żywe rośliny (np. Dracaena deremensis, Ficus benjamina), to gekon orzęsiony powinien mieć zapewnione ciemne schowki, w których będzie mógł przespać porę dzienną.'
  }
];

export { sliderData, storeMenu, storeItems, geckos, geckoInfo };
