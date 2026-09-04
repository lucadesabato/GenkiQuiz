// Database kanji Genki I - Lezioni 3-7
// Ogni voce: {kanji, onkun, meaning, examples:[{word, reading, it}]}

// ===================== DATABASE KANJI - LEZIONE 3 (読み書き編) =====================
// I primi 15 kanji ufficiali del libro: i numeri 1-10 + 百・千・万・円・時
const KANJI_L3 = [
  { kanji:"一", onkun:"いち／ひと", meaning:"uno", examples:[
    {word:"一", reading:"いち", it:"uno"},
    {word:"一時", reading:"いちじ", it:"l'una (in punto)"},
    {word:"一年生", reading:"いちねんせい", it:"studente del primo anno"},
    {word:"一つ", reading:"ひとつ", it:"uno (contando oggetti)"}
  ]},
  { kanji:"二", onkun:"に／ふた", meaning:"due", examples:[
    {word:"二", reading:"に", it:"due"},
    {word:"二時", reading:"にじ", it:"le due (in punto)"},
    {word:"二年生", reading:"にねんせい", it:"studente del secondo anno"},
    {word:"二つ", reading:"ふたつ", it:"due (contando oggetti)"}
  ]},
  { kanji:"三", onkun:"さん／みっ", meaning:"tre", examples:[
    {word:"三", reading:"さん", it:"tre"},
    {word:"三時", reading:"さんじ", it:"le tre (in punto)"},
    {word:"三年生", reading:"さんねんせい", it:"studente del terzo anno"},
    {word:"三つ", reading:"みっつ", it:"tre (contando oggetti)"}
  ]},
  { kanji:"四", onkun:"し・よん／よっ", meaning:"quattro", examples:[
    {word:"四時", reading:"よじ", it:"le quattro (in punto)"},
    {word:"四年生", reading:"よねんせい", it:"studente del quarto anno"},
    {word:"四月", reading:"しがつ", it:"aprile"},
    {word:"四つ", reading:"よっつ", it:"quattro (contando oggetti)"}
  ]},
  { kanji:"五", onkun:"ご／いつ", meaning:"cinque", examples:[
    {word:"五時", reading:"ごじ", it:"le cinque (in punto)"},
    {word:"五月", reading:"ごがつ", it:"maggio"},
    {word:"五歳", reading:"ごさい", it:"cinque anni (età)"},
    {word:"五つ", reading:"いつつ", it:"cinque (contando oggetti)"}
  ]},
  { kanji:"六", onkun:"ろく／むっ", meaning:"sei", examples:[
    {word:"六時", reading:"ろくじ", it:"le sei (in punto)"},
    {word:"六百", reading:"ろっぴゃく", it:"seicento"},
    {word:"六分", reading:"ろっぷん", it:"sei minuti"},
    {word:"六つ", reading:"むっつ", it:"sei (contando oggetti)"}
  ]},
  { kanji:"七", onkun:"しち・なな", meaning:"sette", examples:[
    {word:"七時", reading:"しちじ", it:"le sette (in punto)"},
    {word:"七月", reading:"しちがつ", it:"luglio"},
    {word:"七つ", reading:"ななつ", it:"sette (contando oggetti)"},
    {word:"七人", reading:"ななにん", it:"sette persone"}
  ]},
  { kanji:"八", onkun:"はち／やっ", meaning:"otto", examples:[
    {word:"八時", reading:"はちじ", it:"le otto (in punto)"},
    {word:"八百", reading:"はっぴゃく", it:"ottocento"},
    {word:"八歳", reading:"はっさい", it:"otto anni (età)"},
    {word:"八つ", reading:"やっつ", it:"otto (contando oggetti)"}
  ]},
  { kanji:"九", onkun:"きゅう・く／ここの", meaning:"nove", examples:[
    {word:"九時", reading:"くじ", it:"le nove (in punto)"},
    {word:"九月", reading:"くがつ", it:"settembre"},
    {word:"九歳", reading:"きゅうさい", it:"nove anni (età)"},
    {word:"九つ", reading:"ここのつ", it:"nove (contando oggetti)"}
  ]},
  { kanji:"十", onkun:"じゅう／とお", meaning:"dieci", examples:[
    {word:"十時", reading:"じゅうじ", it:"le dieci (in punto)"},
    {word:"十月", reading:"じゅうがつ", it:"ottobre"},
    {word:"十歳", reading:"じゅっさい", it:"dieci anni (età)"},
    {word:"十", reading:"とお", it:"dieci (contando oggetti)"}
  ]},
  { kanji:"百", onkun:"ひゃく・びゃく・ぴゃく", meaning:"cento", examples:[
    {word:"百", reading:"ひゃく", it:"cento"},
    {word:"三百", reading:"さんびゃく", it:"trecento"},
    {word:"六百", reading:"ろっぴゃく", it:"seicento"},
    {word:"八百", reading:"はっぴゃく", it:"ottocento"}
  ]},
  { kanji:"千", onkun:"せん・ぜん", meaning:"mille", examples:[
    {word:"千", reading:"せん", it:"mille"},
    {word:"三千", reading:"さんぜん", it:"tremila"},
    {word:"八千", reading:"はっせん", it:"ottomila"},
    {word:"千円", reading:"せんえん", it:"mille yen"}
  ]},
  { kanji:"万", onkun:"まん", meaning:"diecimila", examples:[
    {word:"一万", reading:"いちまん", it:"diecimila"},
    {word:"十万", reading:"じゅうまん", it:"centomila"},
    {word:"百万", reading:"ひゃくまん", it:"un milione"}
  ]},
  { kanji:"円", onkun:"えん／まる", meaning:"yen; cerchio", examples:[
    {word:"百円", reading:"ひゃくえん", it:"cento yen"},
    {word:"円高", reading:"えんだか", it:"yen forte"},
    {word:"円い", reading:"まるい", it:"rotondo"}
  ]},
  { kanji:"時", onkun:"じ／とき", meaning:"ora; tempo", examples:[
    {word:"一時", reading:"いちじ", it:"l'una (in punto)"},
    {word:"時間", reading:"じかん", it:"tempo; ...ore"},
    {word:"時々", reading:"ときどき", it:"a volte"},
    {word:"時計", reading:"とけい", it:"orologio"}
  ]}
];
// ==============================================================================

// ===================== DATABASE KANJI - LEZIONE 4 (メアリーさんのしゅうまつ) =====================
const KANJI_L4 = [
  { kanji:"日", onkun:"に・にち／び・か", meaning:"giorno; sole", examples:[
    {word:"日本", reading:"にほん", it:"Giappone"},
    {word:"毎日", reading:"まいにち", it:"ogni giorno"},
    {word:"母の日", reading:"ははのひ", it:"festa della mamma"},
    {word:"三日", reading:"みっか", it:"tre giorni"}
  ]},
  { kanji:"本", onkun:"ほん／もと", meaning:"libro; base", examples:[
    {word:"本", reading:"ほん", it:"libro"},
    {word:"日本語", reading:"にほんご", it:"lingua giapponese"},
    {word:"山本さん", reading:"やまもとさん", it:"Sig. Yamamoto"}
  ]},
  { kanji:"人", onkun:"じん・にん／ひと", meaning:"persona", examples:[
    {word:"日本人", reading:"にほんじん", it:"giapponese (persona)"},
    {word:"一人で", reading:"ひとりで", it:"da solo"},
    {word:"この人", reading:"このひと", it:"questa persona"},
    {word:"三人", reading:"さんにん", it:"tre persone"}
  ]},
  { kanji:"月", onkun:"げつ・がつ／つき", meaning:"luna; mese", examples:[
    {word:"月曜日", reading:"げつようび", it:"lunedì"},
    {word:"一月", reading:"いちがつ", it:"gennaio"},
    {word:"今月", reading:"こんげつ", it:"questo mese"},
    {word:"一か月", reading:"いっかげつ", it:"un mese"}
  ]},
  { kanji:"火", onkun:"か／ひ・び", meaning:"fuoco", examples:[
    {word:"火曜日", reading:"かようび", it:"martedì"},
    {word:"火山", reading:"かざん", it:"vulcano"},
    {word:"花火", reading:"はなび", it:"fuochi d'artificio"}
  ]},
  { kanji:"水", onkun:"すい／みず", meaning:"acqua", examples:[
    {word:"水曜日", reading:"すいようび", it:"mercoledì"},
    {word:"水", reading:"みず", it:"acqua"},
    {word:"水泳", reading:"すいえい", it:"nuoto"},
    {word:"水着", reading:"みずぎ", it:"costume da bagno"}
  ]},
  { kanji:"木", onkun:"もく／き", meaning:"albero", examples:[
    {word:"木曜日", reading:"もくようび", it:"giovedì"},
    {word:"木", reading:"き", it:"albero"},
    {word:"木村さん", reading:"きむらさん", it:"Sig. Kimura"}
  ]},
  { kanji:"金", onkun:"きん／かね", meaning:"oro; soldi", examples:[
    {word:"金曜日", reading:"きんようび", it:"venerdì"},
    {word:"お金", reading:"おかね", it:"soldi"},
    {word:"料金", reading:"りょうきん", it:"tariffa"}
  ]},
  { kanji:"土", onkun:"ど／つち", meaning:"terra", examples:[
    {word:"土曜日", reading:"どようび", it:"sabato"},
    {word:"土", reading:"つち", it:"terra"},
    {word:"土地", reading:"とち", it:"terreno"}
  ]},
  { kanji:"曜", onkun:"よう", meaning:"giorno della settimana", examples:[
    {word:"日曜日", reading:"にちようび", it:"domenica"},
    {word:"曜日", reading:"ようび", it:"giorno della settimana"}
  ]},
  { kanji:"上", onkun:"じょう／うえ・のぼ", meaning:"sopra; su", examples:[
    {word:"上", reading:"うえ", it:"sopra"},
    {word:"上手な", reading:"じょうずな", it:"bravo (in qualcosa)"},
    {word:"屋上", reading:"おくじょう", it:"tetto"},
    {word:"上る", reading:"のぼる", it:"salire"}
  ]},
  { kanji:"下", onkun:"か／した・くだ", meaning:"sotto; giù", examples:[
    {word:"下", reading:"した", it:"sotto"},
    {word:"地下鉄", reading:"ちかてつ", it:"metropolitana"},
    {word:"下手な", reading:"へたな", it:"scarso (in qualcosa)"},
    {word:"下さい", reading:"ください", it:"per favore, dammi"}
  ]},
  { kanji:"中", onkun:"ちゅう・じゅう／なか", meaning:"dentro; centro", examples:[
    {word:"中", reading:"なか", it:"dentro; in mezzo"},
    {word:"中国", reading:"ちゅうごく", it:"Cina"},
    {word:"中学", reading:"ちゅうがく", it:"scuola media"},
    {word:"一年中", reading:"いちねんじゅう", it:"tutto l'anno"}
  ]},
  { kanji:"半", onkun:"はん", meaning:"metà", examples:[
    {word:"三時半", reading:"さんじはん", it:"le tre e mezza"},
    {word:"半分", reading:"はんぶん", it:"metà"},
    {word:"半年", reading:"はんとし", it:"mezzo anno"}
  ]}
];

// ===================== DATABASE KANJI - LEZIONE 5 (りょこう) =====================
const KANJI_L5 = [
  { kanji:"山", onkun:"さん／やま", meaning:"montagna", examples:[
    {word:"山", reading:"やま", it:"montagna"},
    {word:"山川さん", reading:"やまかわさん", it:"Sig. Yamakawa"},
    {word:"富士山", reading:"ふじさん", it:"Monte Fuji"}
  ]},
  { kanji:"川", onkun:"かわ・がわ", meaning:"fiume", examples:[
    {word:"川", reading:"かわ", it:"fiume"},
    {word:"山川さん", reading:"やまかわさん", it:"Sig. Yamakawa"},
    {word:"小川さん", reading:"おがわさん", it:"Sig. Ogawa"}
  ]},
  { kanji:"元", onkun:"げん・がん／もと", meaning:"origine", examples:[
    {word:"元気な", reading:"げんきな", it:"in salute; energico"},
    {word:"元日", reading:"がんじつ", it:"capodanno"},
    {word:"地元", reading:"じもと", it:"locale (del posto)"}
  ]},
  { kanji:"気", onkun:"き", meaning:"spirito; energia", examples:[
    {word:"元気な", reading:"げんきな", it:"in salute; energico"},
    {word:"天気", reading:"てんき", it:"tempo (meteo)"},
    {word:"電気", reading:"でんき", it:"elettricità"},
    {word:"人気", reading:"にんき", it:"popolarità"}
  ]},
  { kanji:"天", onkun:"てん", meaning:"cielo", examples:[
    {word:"天気", reading:"てんき", it:"tempo (meteo)"},
    {word:"天国", reading:"てんごく", it:"paradiso"},
    {word:"天才", reading:"てんさい", it:"genio"}
  ]},
  { kanji:"私", onkun:"し／わたし", meaning:"io; privato", examples:[
    {word:"私", reading:"わたし", it:"io"},
    {word:"私立大学", reading:"しりつだいがく", it:"università privata"}
  ]},
  { kanji:"今", onkun:"こん／いま", meaning:"adesso", examples:[
    {word:"今", reading:"いま", it:"adesso"},
    {word:"今日", reading:"きょう", it:"oggi"},
    {word:"今晩", reading:"こんばん", it:"stasera"},
    {word:"今年", reading:"ことし", it:"quest'anno"}
  ]},
  { kanji:"田", onkun:"た・だ", meaning:"risaia", examples:[
    {word:"田中さん", reading:"たなかさん", it:"Sig. Tanaka"},
    {word:"山田さん", reading:"やまださん", it:"Sig. Yamada"},
    {word:"田んぼ", reading:"たんぼ", it:"risaia"}
  ]},
  { kanji:"女", onkun:"じょ／おんな", meaning:"donna", examples:[
    {word:"女の人", reading:"おんなのひと", it:"donna"},
    {word:"女性", reading:"じょせい", it:"donna (formale)"},
    {word:"女の子", reading:"おんなのこ", it:"ragazza"}
  ]},
  { kanji:"男", onkun:"だん／おとこ", meaning:"uomo", examples:[
    {word:"男の人", reading:"おとこのひと", it:"uomo"},
    {word:"男性", reading:"だんせい", it:"uomo (formale)"},
    {word:"男の子", reading:"おとこのこ", it:"ragazzo"}
  ]},
  { kanji:"見", onkun:"けん／み", meaning:"vedere", examples:[
    {word:"見る", reading:"みる", it:"vedere"},
    {word:"見物", reading:"けんぶつ", it:"visita turistica"},
    {word:"花見", reading:"はなみ", it:"osservazione dei fiori di ciliegio"},
    {word:"意見", reading:"いけん", it:"opinione"}
  ]},
  { kanji:"行", onkun:"こう・ぎょう／い", meaning:"andare", examples:[
    {word:"行く", reading:"いく", it:"andare"},
    {word:"銀行", reading:"ぎんこう", it:"banca"},
    {word:"旅行", reading:"りょこう", it:"viaggio"}
  ]},
  { kanji:"食", onkun:"しょく／た", meaning:"mangiare", examples:[
    {word:"食べる", reading:"たべる", it:"mangiare"},
    {word:"食べ物", reading:"たべもの", it:"cibo"},
    {word:"食堂", reading:"しょくどう", it:"mensa"},
    {word:"朝食", reading:"ちょうしょく", it:"colazione"}
  ]},
  { kanji:"飲", onkun:"いん／の", meaning:"bere", examples:[
    {word:"飲む", reading:"のむ", it:"bere"},
    {word:"飲み物", reading:"のみもの", it:"bevanda"}
  ]}
];

// ===================== DATABASE KANJI - LEZIONE 6 (私のすきなレストラン) =====================
const KANJI_L6 = [
  { kanji:"東", onkun:"とう／ひがし", meaning:"est", examples:[
    {word:"東", reading:"ひがし", it:"est"},
    {word:"東京", reading:"とうきょう", it:"Tokyo"},
    {word:"東口", reading:"ひがしぐち", it:"uscita est"}
  ]},
  { kanji:"西", onkun:"せい・さい／にし", meaning:"ovest", examples:[
    {word:"西", reading:"にし", it:"ovest"},
    {word:"西口", reading:"にしぐち", it:"uscita ovest"},
    {word:"関西", reading:"かんさい", it:"regione del Kansai"}
  ]},
  { kanji:"南", onkun:"なん／みなみ", meaning:"sud", examples:[
    {word:"南", reading:"みなみ", it:"sud"},
    {word:"南口", reading:"みなみぐち", it:"uscita sud"},
    {word:"南極", reading:"なんきょく", it:"Antartide"}
  ]},
  { kanji:"北", onkun:"ほく・ほっ／きた", meaning:"nord", examples:[
    {word:"北", reading:"きた", it:"nord"},
    {word:"北口", reading:"きたぐち", it:"uscita nord"},
    {word:"北海道", reading:"ほっかいどう", it:"Hokkaido"}
  ]},
  { kanji:"口", onkun:"こう／ぐち・くち", meaning:"bocca", examples:[
    {word:"北口", reading:"きたぐち", it:"uscita nord"},
    {word:"口", reading:"くち", it:"bocca"},
    {word:"人口", reading:"じんこう", it:"popolazione"},
    {word:"入り口", reading:"いりぐち", it:"entrata"}
  ]},
  { kanji:"出", onkun:"しゅつ・しゅっ／で・だ", meaning:"uscire", examples:[
    {word:"出る", reading:"でる", it:"uscire"},
    {word:"出口", reading:"でぐち", it:"uscita"},
    {word:"出かける", reading:"でかける", it:"uscire (di casa)"},
    {word:"出す", reading:"だす", it:"tirare fuori"}
  ]},
  { kanji:"右", onkun:"う・ゆう／みぎ", meaning:"destra", examples:[
    {word:"右", reading:"みぎ", it:"destra"},
    {word:"左右", reading:"さゆう", it:"destra e sinistra"},
    {word:"右手", reading:"みぎて", it:"mano destra"}
  ]},
  { kanji:"左", onkun:"さ／ひだり", meaning:"sinistra", examples:[
    {word:"左", reading:"ひだり", it:"sinistra"},
    {word:"左手", reading:"ひだりて", it:"mano sinistra"},
    {word:"左利き", reading:"ひだりきき", it:"mancino"}
  ]},
  { kanji:"分", onkun:"ふん・ぷん・ぶん／わ", meaning:"minuto; dividere", examples:[
    {word:"五分", reading:"ごふん", it:"cinque minuti"},
    {word:"十分", reading:"じゅっぷん", it:"dieci minuti"},
    {word:"自分", reading:"じぶん", it:"se stesso"},
    {word:"分ける", reading:"わける", it:"dividere"}
  ]},
  { kanji:"先", onkun:"せん／さき", meaning:"prima; avanti", examples:[
    {word:"先生", reading:"せんせい", it:"insegnante"},
    {word:"先週", reading:"せんしゅう", it:"settimana scorsa"},
    {word:"先月", reading:"せんげつ", it:"mese scorso"}
  ]},
  { kanji:"生", onkun:"せい・しょう／う", meaning:"nascita; vita", examples:[
    {word:"学生", reading:"がくせい", it:"studente"},
    {word:"先生", reading:"せんせい", it:"insegnante"},
    {word:"生まれる", reading:"うまれる", it:"nascere"}
  ]},
  { kanji:"大", onkun:"だい・たい／おお", meaning:"grande", examples:[
    {word:"大学生", reading:"だいがくせい", it:"studente universitario"},
    {word:"大きい", reading:"おおきい", it:"grande"},
    {word:"大変な", reading:"たいへんな", it:"difficile; duro"},
    {word:"大人", reading:"おとな", it:"adulto"}
  ]},
  { kanji:"学", onkun:"がく・がっ／まな", meaning:"studio", examples:[
    {word:"大学", reading:"だいがく", it:"università"},
    {word:"学生", reading:"がくせい", it:"studente"},
    {word:"学校", reading:"がっこう", it:"scuola"},
    {word:"学ぶ", reading:"まなぶ", it:"imparare"}
  ]},
  { kanji:"外", onkun:"がい／そと", meaning:"esterno", examples:[
    {word:"外国", reading:"がいこく", it:"paese straniero"},
    {word:"外国人", reading:"がいこくじん", it:"straniero"},
    {word:"外", reading:"そと", it:"fuori"},
    {word:"海外", reading:"かいがい", it:"estero"}
  ]},
  { kanji:"国", onkun:"こく・ごく／くに", meaning:"paese", examples:[
    {word:"外国", reading:"がいこく", it:"paese straniero"},
    {word:"中国", reading:"ちゅうごく", it:"Cina"},
    {word:"国", reading:"くに", it:"paese"},
    {word:"韓国", reading:"かんこく", it:"Corea del Sud"}
  ]}
];

// ===================== DATABASE KANJI - LEZIONE 7 (メアリーさんのてがみ) =====================
const KANJI_L7 = [
  { kanji:"京", onkun:"きょう", meaning:"capitale", examples:[
    {word:"東京", reading:"とうきょう", it:"Tokyo"},
    {word:"京子", reading:"きょうこ", it:"Kyoko (nome proprio)"},
    {word:"京都", reading:"きょうと", it:"Kyoto"}
  ]},
  { kanji:"子", onkun:"し／こ", meaning:"bambino", examples:[
    {word:"子ども", reading:"こども", it:"bambino"},
    {word:"京子", reading:"きょうこ", it:"Kyoko (nome proprio)"},
    {word:"女の子", reading:"おんなのこ", it:"ragazza"},
    {word:"男の子", reading:"おとこのこ", it:"ragazzo"}
  ]},
  { kanji:"小", onkun:"しょう／ちい", meaning:"piccolo", examples:[
    {word:"小さい", reading:"ちいさい", it:"piccolo"},
    {word:"小学校", reading:"しょうがっこう", it:"scuola elementare"},
    {word:"小学生", reading:"しょうがくせい", it:"alunno delle elementari"}
  ]},
  { kanji:"会", onkun:"かい／あ", meaning:"incontrare", examples:[
    {word:"会う", reading:"あう", it:"incontrare"},
    {word:"会社", reading:"かいしゃ", it:"azienda"},
    {word:"会議", reading:"かいぎ", it:"riunione"},
    {word:"教会", reading:"きょうかい", it:"chiesa"}
  ]},
  { kanji:"社", onkun:"しゃ・じゃ", meaning:"azienda", examples:[
    {word:"会社", reading:"かいしゃ", it:"azienda"},
    {word:"神社", reading:"じんじゃ", it:"santuario shintoista"},
    {word:"社会", reading:"しゃかい", it:"società"}
  ]},
  { kanji:"父", onkun:"ふ／ちち・とう", meaning:"padre", examples:[
    {word:"父", reading:"ちち", it:"padre (mio, formale)"},
    {word:"お父さん", reading:"おとうさん", it:"padre (rispettoso)"},
    {word:"父母", reading:"ふぼ", it:"genitori"}
  ]},
  { kanji:"母", onkun:"ぼ／はは・かあ", meaning:"madre", examples:[
    {word:"母", reading:"はは", it:"madre (mia, formale)"},
    {word:"お母さん", reading:"おかあさん", it:"madre (rispettoso)"},
    {word:"母語", reading:"ぼご", it:"lingua madre"}
  ]},
  { kanji:"高", onkun:"こう／たか", meaning:"alto; costoso", examples:[
    {word:"高い", reading:"たかい", it:"costoso; alto"},
    {word:"高校", reading:"こうこう", it:"liceo"},
    {word:"高校生", reading:"こうこうせい", it:"studente liceale"},
    {word:"最高", reading:"さいこう", it:"il migliore"}
  ]},
  { kanji:"校", onkun:"こう", meaning:"scuola", examples:[
    {word:"学校", reading:"がっこう", it:"scuola"},
    {word:"高校", reading:"こうこう", it:"liceo"},
    {word:"中学校", reading:"ちゅうがっこう", it:"scuola media"}
  ]},
  { kanji:"毎", onkun:"まい", meaning:"ogni", examples:[
    {word:"毎日", reading:"まいにち", it:"ogni giorno"},
    {word:"毎週", reading:"まいしゅう", it:"ogni settimana"},
    {word:"毎年", reading:"まいねん", it:"ogni anno"}
  ]},
  { kanji:"語", onkun:"ご", meaning:"lingua; parola", examples:[
    {word:"日本語", reading:"にほんご", it:"lingua giapponese"},
    {word:"英語", reading:"えいご", it:"lingua inglese"},
    {word:"敬語", reading:"けいご", it:"linguaggio onorifico"}
  ]},
  { kanji:"文", onkun:"ぶん", meaning:"frase; testo", examples:[
    {word:"文学", reading:"ぶんがく", it:"letteratura"},
    {word:"作文", reading:"さくぶん", it:"composizione"},
    {word:"文化", reading:"ぶんか", it:"cultura"},
    {word:"文法", reading:"ぶんぽう", it:"grammatica"}
  ]},
  { kanji:"帰", onkun:"き／かえ", meaning:"tornare", examples:[
    {word:"帰る", reading:"かえる", it:"tornare"},
    {word:"帰国", reading:"きこく", it:"tornare in patria"},
    {word:"帰宅", reading:"きたく", it:"tornare a casa"}
  ]},
  { kanji:"入", onkun:"にゅう／はい・い", meaning:"entrare", examples:[
    {word:"入る", reading:"はいる", it:"entrare"},
    {word:"入り口", reading:"いりぐち", it:"entrata"},
    {word:"輸入", reading:"ゆにゅう", it:"importazione"}
  ]}
];

// Pool combinato di tutti i kanji fino alla Lezione 7
const KANJI_ALL = [...KANJI_L3, ...KANJI_L4, ...KANJI_L5, ...KANJI_L6, ...KANJI_L7];
