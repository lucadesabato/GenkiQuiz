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

const KANJI_L8 = [
  { kanji:"員", onkun:"いん", meaning:"membro", examples:[
    {word:"会社員", reading:"かいしゃいん", it:"impiegato/a"},
    {word:"店員", reading:"てんいん", it:"commesso/a"},
    {word:"会員", reading:"かいいん", it:"socio/membro"},
    {word:"駅員", reading:"えきいん", it:"addetto stazione"}
  ]},
  { kanji:"新", onkun:"しん／あたら", meaning:"nuovo", examples:[
    {word:"新しい", reading:"あたらしい", it:"nuovo"},
    {word:"新聞", reading:"しんぶん", it:"giornale"},
    {word:"新幹線", reading:"しんかんせん", it:"Shinkansen"},
    {word:"新鮮な", reading:"しんせんな", it:"fresco"}
  ]},
  { kanji:"聞", onkun:"ぶん／き", meaning:"ascoltare", examples:[
    {word:"聞く", reading:"きく", it:"ascoltare"},
    {word:"新聞", reading:"しんぶん", it:"giornale"},
    {word:"聞こえる", reading:"きこえる", it:"potersi sentire"}
  ]},
  { kanji:"作", onkun:"さく／つく", meaning:"fare", examples:[
    {word:"作る", reading:"つくる", it:"fare/produrre"},
    {word:"作文", reading:"さくぶん", it:"composizione"},
    {word:"作品", reading:"さくひん", it:"opera (artistica)"},
    {word:"作者", reading:"さくしゃ", it:"autore"}
  ]},
  { kanji:"仕", onkun:"し／つか", meaning:"servire", examples:[
    {word:"仕事", reading:"しごと", it:"lavoro"},
    {word:"仕返し", reading:"しかえし", it:"vendetta"},
    {word:"仕える", reading:"つかえる", it:"servire"}
  ]},
  { kanji:"事", onkun:"じ／ごと・こと", meaning:"cosa", examples:[
    {word:"仕事", reading:"しごと", it:"lavoro"},
    {word:"事", reading:"こと", it:"cosa"},
    {word:"火事", reading:"かじ", it:"incendio"},
    {word:"食事", reading:"しょくじ", it:"pasto"},
    {word:"返事", reading:"へんじ", it:"risposta"}
  ]},
  { kanji:"電", onkun:"でん", meaning:"elettricità", examples:[
    {word:"電車", reading:"でんしゃ", it:"treno"},
    {word:"電気", reading:"でんき", it:"elettricità"},
    {word:"電話", reading:"でんわ", it:"telefono"},
    {word:"電池", reading:"でんち", it:"batteria"}
  ]},
  { kanji:"車", onkun:"しゃ／くるま", meaning:"macchina", examples:[
    {word:"車", reading:"くるま", it:"macchina"},
    {word:"電車", reading:"でんしゃ", it:"treno"},
    {word:"自転車", reading:"じてんしゃ", it:"bicicletta"},
    {word:"車いす", reading:"くるまいす", it:"sedia a rotelle"}
  ]},
  { kanji:"休", onkun:"きゅう／やす", meaning:"riposare", examples:[
    {word:"休む", reading:"やすむ", it:"riposare/assentarsi"},
    {word:"休み", reading:"やすみ", it:"vacanza/assenza"},
    {word:"休日", reading:"きゅうじつ", it:"giorno di riposo"}
  ]},
  { kanji:"言", onkun:"げん／い・こと", meaning:"dire", examples:[
    {word:"言う", reading:"いう", it:"dire"},
    {word:"言語学", reading:"げんごがく", it:"linguistica"},
    {word:"方言", reading:"ほうげん", it:"dialetto"},
    {word:"言葉", reading:"ことば", it:"parola/lingua"}
  ]},
  { kanji:"読", onkun:"どく／よ", meaning:"leggere", examples:[
    {word:"読む", reading:"よむ", it:"leggere"},
    {word:"読書", reading:"どくしょ", it:"lettura (attività)"},
    {word:"読み物", reading:"よみもの", it:"materiale di lettura"}
  ]},
  { kanji:"思", onkun:"し／おも", meaning:"pensare", examples:[
    {word:"思う", reading:"おもう", it:"pensare"},
    {word:"不思議な", reading:"ふしぎな", it:"misterioso"},
    {word:"思い出す", reading:"おもいだす", it:"ricordare"}
  ]},
  { kanji:"次", onkun:"じ／つぎ", meaning:"prossimo", examples:[
    {word:"次", reading:"つぎ", it:"prossimo"},
    {word:"次女", reading:"じじょ", it:"seconda figlia"},
    {word:"目次", reading:"もくじ", it:"indice (libro)"},
    {word:"次回", reading:"じかい", it:"prossima volta"}
  ]},
  { kanji:"何", onkun:"なに・なん", meaning:"cosa", examples:[
    {word:"何", reading:"なに", it:"cosa"},
    {word:"何時", reading:"なんじ", it:"che ora"},
    {word:"何人", reading:"なんにん", it:"quante persone"},
    {word:"何か", reading:"なにか", it:"qualcosa"}
  ]}
];

const KANJI_L9 = [
  { kanji:"午", onkun:"ご", meaning:"mezzogiorno", examples:[
    {word:"午前", reading:"ごぜん", it:"mattina (A.M.)"},
    {word:"午後", reading:"ごご", it:"pomeriggio (P.M.)"},
    {word:"午前中", reading:"ごぜんちゅう", it:"in mattinata"},
    {word:"正午", reading:"しょうご", it:"mezzogiorno"}
  ]},
  { kanji:"後", onkun:"ご／あと・うし", meaning:"dopo", examples:[
    {word:"午後", reading:"ごご", it:"pomeriggio"},
    {word:"〜の後", reading:"のあと", it:"dopo..."},
    {word:"後で", reading:"あとで", it:"più tardi"},
    {word:"後ろ", reading:"うしろ", it:"dietro"}
  ]},
  { kanji:"前", onkun:"ぜん／まえ", meaning:"prima", examples:[
    {word:"前", reading:"まえ", it:"prima/davanti"},
    {word:"午前", reading:"ごぜん", it:"mattina"},
    {word:"名前", reading:"なまえ", it:"nome"},
    {word:"前売り", reading:"まえうり", it:"vendita anticipata"}
  ]},
  { kanji:"名", onkun:"めい・みょう／な", meaning:"nome", examples:[
    {word:"名前", reading:"なまえ", it:"nome"},
    {word:"有名な", reading:"ゆうめいな", it:"famoso"},
    {word:"名刺", reading:"めいし", it:"biglietto da visita"},
    {word:"氏名", reading:"しめい", it:"nome completo"}
  ]},
  { kanji:"白", onkun:"はく／しろ", meaning:"bianco", examples:[
    {word:"白い", reading:"しろい", it:"bianco"},
    {word:"白紙", reading:"はくし", it:"foglio bianco"},
    {word:"白", reading:"しろ", it:"bianco (colore)"},
    {word:"白鳥", reading:"はくちょう", it:"cigno"}
  ]},
  { kanji:"雨", onkun:"う／あめ", meaning:"pioggia", examples:[
    {word:"雨", reading:"あめ", it:"pioggia"},
    {word:"雨期", reading:"うき", it:"stagione delle piogge"},
    {word:"梅雨", reading:"つゆ", it:"stagione delle piogge"},
    {word:"大雨", reading:"おおあめ", it:"pioggia forte"}
  ]},
  { kanji:"書", onkun:"しょ／か", meaning:"scrivere", examples:[
    {word:"書く", reading:"かく", it:"scrivere"},
    {word:"辞書", reading:"じしょ", it:"dizionario"},
    {word:"教科書", reading:"きょうかしょ", it:"libro di testo"},
    {word:"図書館", reading:"としょかん", it:"biblioteca"}
  ]},
  { kanji:"友", onkun:"ゆう／とも", meaning:"amico", examples:[
    {word:"友だち", reading:"ともだち", it:"amico/a"},
    {word:"親友", reading:"しんゆう", it:"migliore amico"},
    {word:"友人", reading:"ゆうじん", it:"amico"},
    {word:"友情", reading:"ゆうじょう", it:"amicizia"}
  ]},
  { kanji:"間", onkun:"かん・げん／あいだ", meaning:"tra", examples:[
    {word:"時間", reading:"じかん", it:"tempo"},
    {word:"二時間", reading:"にじかん", it:"due ore"},
    {word:"間", reading:"あいだ", it:"tra/intervallo"},
    {word:"人間", reading:"にんげん", it:"essere umano"},
    {word:"一週間", reading:"いっしゅうかん", it:"una settimana"}
  ]},
  { kanji:"家", onkun:"か／いえ", meaning:"casa", examples:[
    {word:"家", reading:"いえ", it:"casa"},
    {word:"家族", reading:"かぞく", it:"famiglia"},
    {word:"家内", reading:"かない", it:"mia moglie"},
    {word:"作家", reading:"さっか", it:"scrittore"}
  ]},
  { kanji:"話", onkun:"わ／はな・はなし", meaning:"parlare", examples:[
    {word:"話す", reading:"はなす", it:"parlare"},
    {word:"話", reading:"はなし", it:"discorso/storia"},
    {word:"電話", reading:"でんわ", it:"telefono"},
    {word:"会話", reading:"かいわ", it:"conversazione"}
  ]},
  { kanji:"少", onkun:"しょう／すこ・すく", meaning:"poco", examples:[
    {word:"少し", reading:"すこし", it:"un po'"},
    {word:"少ない", reading:"すくない", it:"poco/pochi"},
    {word:"少々", reading:"しょうしょう", it:"un pochino"},
    {word:"少女", reading:"しょうじょ", it:"ragazza"},
    {word:"少年", reading:"しょうねん", it:"ragazzo"}
  ]},
  { kanji:"古", onkun:"こ／ふる", meaning:"vecchio", examples:[
    {word:"古い", reading:"ふるい", it:"vecchio"},
    {word:"中古", reading:"ちゅうこ", it:"usato/di seconda mano"},
    {word:"古代", reading:"こだい", it:"tempi antichi"}
  ]},
  { kanji:"知", onkun:"ち／し", meaning:"sapere", examples:[
    {word:"知る", reading:"しる", it:"sapere/conoscere"},
    {word:"知人", reading:"ちじん", it:"conoscente"},
    {word:"知り合い", reading:"しりあい", it:"conoscente"}
  ]},
  { kanji:"来", onkun:"らい／く・き・こ", meaning:"venire", examples:[
    {word:"来る", reading:"くる", it:"venire"},
    {word:"来ます", reading:"きます", it:"venire (educato)"},
    {word:"来ない", reading:"こない", it:"non venire"},
    {word:"来週", reading:"らいしゅう", it:"settimana prossima"},
    {word:"来日", reading:"らいにち", it:"visita in Giappone"}
  ]}
];

const KANJI_L10 = [
  { kanji:"住", onkun:"じゅう／す", meaning:"vivere", examples:[
    {word:"住む", reading:"すむ", it:"vivere/abitare"},
    {word:"住所", reading:"じゅうしょ", it:"indirizzo"},
    {word:"移住する", reading:"いじゅうする", it:"emigrare"}
  ]},
  { kanji:"正", onkun:"しょう・せい／ただ", meaning:"corretto", examples:[
    {word:"お正月", reading:"おしょうがつ", it:"Capodanno"},
    {word:"正しい", reading:"ただしい", it:"corretto"},
    {word:"正午", reading:"しょうご", it:"mezzogiorno"},
    {word:"正解", reading:"せいかい", it:"risposta corretta"}
  ]},
  { kanji:"年", onkun:"ねん／とし", meaning:"anno", examples:[
    {word:"三年生", reading:"さんねんせい", it:"studente del terzo anno"},
    {word:"来年", reading:"らいねん", it:"anno prossimo"},
    {word:"今年", reading:"ことし", it:"quest'anno"},
    {word:"年", reading:"とし", it:"anno/età"}
  ]},
  { kanji:"売", onkun:"ばい／う", meaning:"vendere", examples:[
    {word:"売る", reading:"うる", it:"vendere"},
    {word:"売店", reading:"ばいてん", it:"chiosco"},
    {word:"自動販売機", reading:"じどうはんばいき", it:"distributore automatico"}
  ]},
  { kanji:"買", onkun:"ばい／か", meaning:"comprare", examples:[
    {word:"買う", reading:"かう", it:"comprare"},
    {word:"買い物", reading:"かいもの", it:"spesa/shopping"},
    {word:"売買", reading:"ばいばい", it:"compravendita"}
  ]},
  { kanji:"町", onkun:"ちょう／まち", meaning:"città", examples:[
    {word:"町", reading:"まち", it:"città/paese"},
    {word:"北山町", reading:"きたやまちょう", it:"città di Kitayama"},
    {word:"町長", reading:"ちょうちょう", it:"sindaco"}
  ]},
  { kanji:"長", onkun:"ちょう／なが", meaning:"lungo", examples:[
    {word:"長い", reading:"ながい", it:"lungo"},
    {word:"長男", reading:"ちょうなん", it:"figlio maggiore"},
    {word:"社長", reading:"しゃちょう", it:"presidente d'azienda"}
  ]},
  { kanji:"道", onkun:"どう／みち", meaning:"strada", examples:[
    {word:"道", reading:"みち", it:"strada"},
    {word:"書道", reading:"しょどう", it:"calligrafia"},
    {word:"柔道", reading:"じゅうどう", it:"judo"},
    {word:"北海道", reading:"ほっかいどう", it:"Hokkaido"}
  ]},
  { kanji:"雪", onkun:"せつ／ゆき", meaning:"neve", examples:[
    {word:"雪", reading:"ゆき", it:"neve"},
    {word:"新雪", reading:"しんせつ", it:"neve fresca"},
    {word:"雪だるま", reading:"ゆきだるま", it:"pupazzo di neve"}
  ]},
  { kanji:"立", onkun:"りつ／た", meaning:"stare in piedi", examples:[
    {word:"立つ", reading:"たつ", it:"stare in piedi/alzarsi"},
    {word:"国立大学", reading:"こくりつだいがく", it:"università statale"},
    {word:"私立高校", reading:"しりつこうこう", it:"liceo privato"}
  ]},
  { kanji:"自", onkun:"じ", meaning:"sé stesso", examples:[
    {word:"自分", reading:"じぶん", it:"sé stesso"},
    {word:"自動車", reading:"じどうしゃ", it:"automobile"},
    {word:"自転車", reading:"じてんしゃ", it:"bicicletta"},
    {word:"自由", reading:"じゆう", it:"libertà"}
  ]},
  { kanji:"夜", onkun:"や／よる・よ", meaning:"notte", examples:[
    {word:"夜", reading:"よる", it:"notte"},
    {word:"夜中", reading:"よなか", it:"piena notte"},
    {word:"今夜", reading:"こんや", it:"stanotte"},
    {word:"夜明け", reading:"よあけ", it:"alba"}
  ]},
  { kanji:"朝", onkun:"ちょう／あさ", meaning:"mattina", examples:[
    {word:"朝", reading:"あさ", it:"mattina"},
    {word:"今朝", reading:"けさ", it:"stamattina"},
    {word:"朝食", reading:"ちょうしょく", it:"colazione"},
    {word:"毎朝", reading:"まいあさ", it:"ogni mattina"}
  ]},
  { kanji:"持", onkun:"じ／も", meaning:"tenere", examples:[
    {word:"持つ", reading:"もつ", it:"tenere/portare"},
    {word:"持ってくる", reading:"もってくる", it:"portare (una cosa)"},
    {word:"所持品", reading:"しょじひん", it:"effetti personali"},
    {word:"気持ち", reading:"きもち", it:"sentimento"}
  ]}
];

const KANJI_L11 = [
  { kanji:"手", onkun:"しゅ／て", meaning:"mano", examples:[
    {word:"手紙", reading:"てがみ", it:"lettera"},
    {word:"歌手", reading:"かしゅ", it:"cantante"},
    {word:"手", reading:"て", it:"mano"},
    {word:"手話", reading:"しゅわ", it:"lingua dei segni"},
    {word:"上手な", reading:"じょうずな", it:"bravo"}
  ]},
  { kanji:"紙", onkun:"し／がみ・かみ", meaning:"carta", examples:[
    {word:"手紙", reading:"てがみ", it:"lettera"},
    {word:"紙", reading:"かみ", it:"carta"},
    {word:"和紙", reading:"わし", it:"carta giapponese"},
    {word:"表紙", reading:"ひょうし", it:"copertina"},
    {word:"折り紙", reading:"おりがみ", it:"origami"}
  ]},
  { kanji:"好", onkun:"こう／す・この", meaning:"gradire", examples:[
    {word:"好きな", reading:"すきな", it:"piacere/gradire"},
    {word:"大好きな", reading:"だいすきな", it:"amare"},
    {word:"好意", reading:"こうい", it:"benevolenza"},
    {word:"好み", reading:"このみ", it:"gusto/preferenza"},
    {word:"好物", reading:"こうぶつ", it:"cibo preferito"}
  ]},
  { kanji:"近", onkun:"きん／ちか", meaning:"vicino", examples:[
    {word:"近く", reading:"ちかく", it:"vicino"},
    {word:"近所", reading:"きんじょ", it:"vicinato"},
    {word:"最近", reading:"さいきん", it:"recentemente"},
    {word:"中近東", reading:"ちゅうきんとう", it:"Medio Oriente"}
  ]},
  { kanji:"明", onkun:"めい／あか", meaning:"luminoso", examples:[
    {word:"明るい", reading:"あかるい", it:"allegro/luminoso"},
    {word:"明日", reading:"あした", it:"domani"},
    {word:"説明", reading:"せつめい", it:"spiegazione"},
    {word:"発明", reading:"はつめい", it:"invenzione"},
    {word:"文明", reading:"ぶんめい", it:"civiltà"}
  ]},
  { kanji:"病", onkun:"びょう", meaning:"malato", examples:[
    {word:"病院", reading:"びょういん", it:"ospedale"},
    {word:"病気", reading:"びょうき", it:"malattia"},
    {word:"重病", reading:"じゅうびょう", it:"malattia grave"},
    {word:"急病", reading:"きゅうびょう", it:"malattia improvvisa"}
  ]},
  { kanji:"院", onkun:"いん", meaning:"istituto", examples:[
    {word:"病院", reading:"びょういん", it:"ospedale"},
    {word:"大学院", reading:"だいがくいん", it:"scuola di specializzazione"},
    {word:"美容院", reading:"びよういん", it:"salone di bellezza"}
  ]},
  { kanji:"映", onkun:"えい／うつ", meaning:"riflettere", examples:[
    {word:"映画", reading:"えいが", it:"film"},
    {word:"映画館", reading:"えいがかん", it:"cinema"},
    {word:"映る", reading:"うつる", it:"essere riflesso"}
  ]},
  { kanji:"画", onkun:"が・かく", meaning:"immagine", examples:[
    {word:"映画", reading:"えいが", it:"film"},
    {word:"画家", reading:"がか", it:"pittore"},
    {word:"計画", reading:"けいかく", it:"piano/progetto"},
    {word:"漫画", reading:"まんが", it:"fumetto"}
  ]},
  { kanji:"歌", onkun:"か／うた", meaning:"cantare", examples:[
    {word:"歌う", reading:"うたう", it:"cantare"},
    {word:"歌", reading:"うた", it:"canzone"},
    {word:"歌手", reading:"かしゅ", it:"cantante"},
    {word:"国歌", reading:"こっか", it:"inno nazionale"},
    {word:"歌舞伎", reading:"かぶき", it:"kabuki"}
  ]},
  { kanji:"市", onkun:"し／いち", meaning:"città", examples:[
    {word:"川口市", reading:"かわぐちし", it:"città di Kawaguchi"},
    {word:"市役所", reading:"しやくしょ", it:"municipio"},
    {word:"市長", reading:"しちょう", it:"sindaco"},
    {word:"市場", reading:"いちば", it:"mercato"}
  ]},
  { kanji:"所", onkun:"じょ・しょ／ところ・どころ", meaning:"luogo", examples:[
    {word:"所", reading:"ところ", it:"luogo"},
    {word:"近所", reading:"きんじょ", it:"vicinato"},
    {word:"台所", reading:"だいどころ", it:"cucina"},
    {word:"住所", reading:"じゅうしょ", it:"indirizzo"}
  ]},
  { kanji:"勉", onkun:"べん／つと", meaning:"sforzarsi", examples:[
    {word:"勉強する", reading:"べんきょうする", it:"studiare"},
    {word:"勉める", reading:"つとめる", it:"impegnarsi"},
    {word:"勤勉な", reading:"きんべんな", it:"diligente"}
  ]},
  { kanji:"強", onkun:"きょう・ごう／つよ", meaning:"forte", examples:[
    {word:"勉強する", reading:"べんきょうする", it:"studiare"},
    {word:"強い", reading:"つよい", it:"forte"},
    {word:"強情な", reading:"ごうじょうな", it:"testardo"},
    {word:"強力な", reading:"きょうりょくな", it:"potente"}
  ]},
  { kanji:"有", onkun:"ゆう／あ", meaning:"esistere", examples:[
    {word:"有名な", reading:"ゆうめいな", it:"famoso"},
    {word:"有料", reading:"ゆうりょう", it:"a pagamento"},
    {word:"有る", reading:"ある", it:"esistere/esserci"},
    {word:"有能な", reading:"ゆうのうな", it:"capace"}
  ]},
  { kanji:"旅", onkun:"りょ／たび", meaning:"viaggio", examples:[
    {word:"旅行", reading:"りょこう", it:"viaggio"},
    {word:"旅館", reading:"りょかん", it:"locanda giapponese"},
    {word:"一人旅", reading:"ひとりたび", it:"viaggio da solo"},
    {word:"旅券", reading:"りょけん", it:"passaporto"}
  ]}
];

const KANJI_L12 = [
  { kanji:"昔", onkun:"むかし", meaning:"tempi antichi", examples:[
    {word:"昔", reading:"むかし", it:"tempi antichi"},
    {word:"昔話", reading:"むかしばなし", it:"racconto antico"},
    {word:"大昔", reading:"おおむかし", it:"tempi remoti"}
  ]},
  { kanji:"々", onkun:"", meaning:"simbolo di ripetizione", examples:[
    {word:"昔々", reading:"むかしむかし", it:"tanto tempo fa"},
    {word:"人々", reading:"ひとびと", it:"persone"},
    {word:"時々", reading:"ときどき", it:"a volte"},
    {word:"色々な", reading:"いろいろな", it:"vario"}
  ]},
  { kanji:"神", onkun:"じん・しん／かみ", meaning:"dio", examples:[
    {word:"神さま", reading:"かみさま", it:"Dio"},
    {word:"神社", reading:"じんじゃ", it:"santuario shintoista"},
    {word:"神道", reading:"しんとう", it:"Shintoismo"},
    {word:"神戸市", reading:"こうべし", it:"città di Kobe"}
  ]},
  { kanji:"早", onkun:"そう／はや", meaning:"presto", examples:[
    {word:"早い", reading:"はやい", it:"presto/veloce"},
    {word:"早起きする", reading:"はやおきする", it:"alzarsi presto"},
    {word:"早朝", reading:"そうちょう", it:"mattina presto"}
  ]},
  { kanji:"起", onkun:"き／お", meaning:"alzarsi", examples:[
    {word:"起きる", reading:"おきる", it:"alzarsi/svegliarsi"},
    {word:"起こす", reading:"おこす", it:"svegliare qualcuno"},
    {word:"再起動", reading:"さいきどう", it:"riavvio"}
  ]},
  { kanji:"牛", onkun:"ぎゅう／うし", meaning:"mucca", examples:[
    {word:"牛", reading:"うし", it:"mucca"},
    {word:"牛乳", reading:"ぎゅうにゅう", it:"latte"},
    {word:"牛肉", reading:"ぎゅうにく", it:"carne di manzo"},
    {word:"子牛", reading:"こうし", it:"vitello"}
  ]},
  { kanji:"使", onkun:"し／つか", meaning:"usare", examples:[
    {word:"使う", reading:"つかう", it:"usare"},
    {word:"大使", reading:"たいし", it:"ambasciatore"},
    {word:"使用中", reading:"しようちゅう", it:"occupato (in uso)"},
    {word:"お使い", reading:"おつかい", it:"commissione"}
  ]},
  { kanji:"働", onkun:"どう／はたら", meaning:"lavorare", examples:[
    {word:"働く", reading:"はたらく", it:"lavorare"},
    {word:"共働き", reading:"ともばたらき", it:"entrambi i coniugi lavorano"},
    {word:"労働", reading:"ろうどう", it:"lavoro/manodopera"}
  ]},
  { kanji:"連", onkun:"れん／つ", meaning:"collegare", examples:[
    {word:"連れて帰る", reading:"つれてかえる", it:"riportare (una persona)"},
    {word:"国連", reading:"こくれん", it:"Nazioni Unite"},
    {word:"連休", reading:"れんきゅう", it:"giorni di vacanza consecutivi"}
  ]},
  { kanji:"別", onkun:"べつ／わか", meaning:"separare", examples:[
    {word:"別れる", reading:"わかれる", it:"separarsi/lasciarsi"},
    {word:"別に", reading:"べつに", it:"non in particolare"},
    {word:"特別な", reading:"とくべつな", it:"speciale"},
    {word:"差別", reading:"さべつ", it:"discriminazione"}
  ]},
  { kanji:"度", onkun:"ど", meaning:"volta; gradi", examples:[
    {word:"一度", reading:"いちど", it:"una volta"},
    {word:"今度", reading:"こんど", it:"prossima volta"},
    {word:"温度", reading:"おんど", it:"temperatura"},
    {word:"三十度", reading:"さんじゅうど", it:"30 gradi"}
  ]},
  { kanji:"赤", onkun:"せき／あか", meaning:"rosso", examples:[
    {word:"赤", reading:"あか", it:"rosso (colore)"},
    {word:"赤い", reading:"あかい", it:"rosso"},
    {word:"赤ちゃん", reading:"あかちゃん", it:"neonato"},
    {word:"赤十字", reading:"せきじゅうじ", it:"Croce Rossa"}
  ]},
  { kanji:"青", onkun:"せい／あお", meaning:"blu", examples:[
    {word:"青", reading:"あお", it:"blu (colore)"},
    {word:"青い", reading:"あおい", it:"blu"},
    {word:"青年", reading:"せいねん", it:"giovane"},
    {word:"青空", reading:"あおぞら", it:"cielo azzurro"}
  ]},
  { kanji:"色", onkun:"しき・しょく／いろ", meaning:"colore", examples:[
    {word:"色", reading:"いろ", it:"colore"},
    {word:"色々な", reading:"いろいろな", it:"vario"},
    {word:"景色", reading:"けしき", it:"paesaggio"},
    {word:"特色", reading:"とくしょく", it:"caratteristica"}
  ]}
];

// Pool combinato di tutti i kanji fino alla Lezione 12.
// Ogni kanji riceve un campo "lesson" per permettere di filtrare per capitolo nel quiz.
function withLessonK(arr, n) { return arr.map(k => ({ ...k, lesson: n })); }
const KANJI_ALL = [
  ...withLessonK(KANJI_L3, 3), ...withLessonK(KANJI_L4, 4), ...withLessonK(KANJI_L5, 5),
  ...withLessonK(KANJI_L6, 6), ...withLessonK(KANJI_L7, 7), ...withLessonK(KANJI_L8, 8),
  ...withLessonK(KANJI_L9, 9), ...withLessonK(KANJI_L10, 10), ...withLessonK(KANJI_L11, 11),
  ...withLessonK(KANJI_L12, 12)
];
