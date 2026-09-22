/**
 * Discover Andong - Main Client-side Application Logic
 * Pure ES6+ JavaScript - Zero external server required
 * Runs seamlessly on file:/// protocol
 * Supports Bilingual (EN / KO) Full Localization
 */

// ============================================================================
// Localization Texts Dictionary (UI Texts)
// ============================================================================

const I18N = {
  en: {
    brandBadge: 'ANDONG, KOREA',
    brandTitle: '안동 <span>DISCOVER</span>',
    langToggle: '한/A',
    savedNav: '🔖 Saved',
    tabAttractions: 'Attractions',
    tabCuisine: 'Food & Drink',
    tabItinerary: 'Itineraries',
    tabTransport: 'Getting Around',
    tabSurvival: 'Korean Phrases',
    heroTag: 'UNESCO World Heritage City',
    heroTitle: 'Experience the Soul of Traditional Korea',
    heroSubtitle: 'Explore 600-year-old living clan villages, Confucian academies, misty river bridges, and mouthwatering culinary traditions.',
    searchPlaceholder: 'Search attractions, food, or keywords (e.g. Mask, Hahoe, Spicy)...',
    attractionsTitle: 'Must-Visit Attractions',
    attractionsDesc: 'Curated cultural treasures with foreigner-friendly tips & taxi assistance.',
    pillAll: 'All',
    pillUnesco: '🏛️ UNESCO Heritage',
    pillNight: '✨ Night & Scenic',
    pillPhoto: '📸 Drama & K-Culture',
    pillMarket: '🛍️ Local Culture',
    cuisineTitle: 'Andong Gastronomy Guide',
    cuisineDesc: 'From world-famous soy-braised chicken to 500-year-old aristocratic delicacies.',
    pillAllCuisines: 'All Cuisines',
    pillMild: '🟢 Mild / Non-Spicy',
    pillSpicy: '🌶️ Medium / Spicy',
    pillDessert: '🥐 Bakery & Dessert',
    pillLiquor: '🍶 Traditional Liquor',
    itineraryTitle: 'Recommended Itineraries',
    itineraryDesc: 'Optimized travel routes for international visitors based on time & transport convenience.',
    transportTitle: 'Transport & Travel Tips',
    transportDesc: 'Essential survival instructions for buses, KTX-Eum high-speed train, and taxis.',
    transportKtxBadge: 'High Speed Rail',
    transportKtxTitle: 'From Seoul to Andong (KTX-Eum)',
    transportKtxBody: 'Take the bullet train <strong>KTX-Eum (KTX-이음)</strong> from <strong>Cheongnyangni Station (청량리역)</strong> or selected Seoul Station departures.',
    transportKtxTip1: '<strong>Duration:</strong> Only ~1 hr 55 mins to 2 hrs 10 mins!',
    transportKtxTip2: '<strong>Arrival:</strong> Arrives at New Andong Station (안동역), where tourist buses (210, etc.) depart right outside.',
    transportKtxTip3: '<strong>Booking:</strong> Book through Korail official app (KorailTalk) or foreigner booking desk at major stations.',
    transportBusBadge: 'City Bus',
    transportBusTitle: 'Bus #210 & Local Public Transit',
    transportBusBody: 'Bus <strong>#210 (Express)</strong> is the golden route for tourists, connecting Andong Station, Downtown, and Hahoe Folk Village directly.',
    transportBusTip1: '<strong>Bus 210:</strong> Andong Station ↔ Hahoe Village (approx. 45-50 min). Runs frequently.',
    transportBusTip2: '<strong>Bus 567 / 67:</strong> Goes north toward Dosan Seowon academy.',
    transportBusTip3: '<strong>Payment:</strong> Korean T-Money transportation card, Namane Card, or contactless T-money enabled credit cards.',
    transportTaxiBadge: 'Taxi Helper',
    transportTaxiTitle: 'How to Take a Taxi in Andong',
    transportTaxiBody: 'Most local taxi drivers in Andong speak limited English. Use our built-in <strong>"Show Taxi Driver"</strong> button on any attraction card!',
    transportTaxiTip1: '<strong>Show Screen:</strong> Tapping "Show Taxi Driver" will pop up high-contrast, huge Korean text and address.',
    transportTaxiTip2: '<strong>Payment:</strong> Credit cards, cash, and T-Money are widely accepted in all taxis.',
    transportTaxiTip3: '<strong>Call Taxis:</strong> Kakao T app works smoothly with international credit cards or cash option.',
    transportEmergBadge: 'Crucial Info',
    transportEmergTitle: 'Emergency & Foreigner Hotlines',
    transportEmergTip1: '<strong>Korea Travel Helpline:</strong> <strong>1330</strong> (Free 24/7 English, Japanese, Chinese assistance & live translation!)',
    transportEmergTip2: '<strong>Police:</strong> 112 | <strong>Medical Emergency:</strong> 119',
    transportEmergTip3: '<strong>Andong Tourist Info Center:</strong> Located right outside Andong Station exit 1. English maps and brochures available.',
    survivalTitle: 'Survival Korean Phrasebook',
    survivalDesc: 'Tap the <strong>🔊 Play Sound</strong> button to listen to native pronunciation or show it to locals!',
    savedDrawerTitle: '🔖 My Saved Places',
    savedDrawerSub: 'Items stored securely in your browser storage.',
    clearAll: 'Clear All',
    noSaved: 'No saved items yet.',
    noSavedSub: 'Click the star icon on any card to save it for your trip!',
    showTaxiBtn: '🚕 Show Taxi Driver',
    moreInfoBtn: 'More Info',
    hearNameBtn: '🔊 Hear Name',
    fullGuideBtn: 'Full Guide',
    hoursLabel: 'Hours:',
    admissionLabel: 'Admission:',
    transitLabel: 'Transit:',
    addressLabel: 'Address:',
    estTaxiLabel: 'Estimated Taxi:',
    priceLabel: 'Price:',
    whereLabel: 'Where:',
    tipLabel: 'Traveler Tip:',
    copyAddressBtn: '📋 Copy Address',
    readKoreanBtn: '🔊 Read in Korean',
    footerBrand: '🌿 <strong>Discover Andong</strong> &bull; Curated for Global Travelers',
    footerSub: 'Works 100% offline & without any server installation. Safe travels in Gyeongsangbuk-do!',
    toastSwitchedLang: 'Language switched to English',
    toastCopied: 'Address copied to clipboard!'
  },
  ko: {
    brandBadge: '대한민국 안동시',
    brandTitle: '안동 <span>DISCOVER</span>',
    langToggle: 'EN/한',
    savedNav: '🔖 보관함',
    tabAttractions: '주요 명소',
    tabCuisine: '대표 미식',
    tabItinerary: '추천 코스',
    tabTransport: '교통 & 여행팁',
    tabSurvival: '서바이벌 한국어',
    heroTag: '유네스코 세계유산의 도시',
    heroTitle: '한국 정신문화의 수도, 안동으로 떠나는 여행',
    heroSubtitle: '600년 역사 하회마을, 도산서원, 달빛 흐르는 월영교와 원조 안동찜닭 골목까지 안동의 매력을 만나보세요.',
    searchPlaceholder: '명소, 음식, 키워드로 검색 (예: 하회, 월영교, 찜닭, 매운맛)...',
    attractionsTitle: '안동 필수 방문 명소',
    attractionsDesc: '외국인 맞춤 여행 정보와 택시 기사용 안내 카드가 포함된 큐레이션 명소입니다.',
    pillAll: '전체',
    pillUnesco: '🏛️ 유네스코 유산',
    pillNight: '✨ 야경 & 힐링',
    pillPhoto: '📸 드라마 & K-컬처',
    pillMarket: '🛍️ 로컬 전통시장',
    cuisineTitle: '안동 대표 미식 가이드',
    cuisineDesc: '원조 안동찜닭부터 500년 전통 종가 헛제삿밥, 명품 안동소주까지.',
    pillAllCuisines: '전체 음식',
    pillMild: '🟢 순한맛 / 안 매운맛',
    pillSpicy: '🌶️ 매콤 / 보통맛',
    pillDessert: '🥐 베이커리 & 디저트',
    pillLiquor: '🍶 전통 명주',
    itineraryTitle: '추천 여행 코스',
    itineraryDesc: '교통 편의와 동선을 고려하여 알차게 구성한 안동 여행 코스입니다.',
    transportTitle: '교통 & 여행 꿀팁',
    transportDesc: 'KTX-이음 고속철도, 시내버스, 택시 탑승 및 긴급 연락망 안내.',
    transportKtxBadge: '고속철도 KTX',
    transportKtxTitle: '서울 ↔ 안동 KTX-이음 이동 가이드',
    transportKtxBody: '<strong>청량리역</strong> 또는 서울역에서 출발하는 <strong>KTX-이음</strong> 열차를 이용하세요.',
    transportKtxTip1: '<strong>소요 시간:</strong> 청량리역 기준 단 1시간 55분 ~ 2시간 10분!',
    transportKtxTip2: '<strong>도착:</strong> 신안동역 도착 즉시 역 광장에서 210번 등 주요 관광버스를 바로 탑승할 수 있습니다.',
    transportKtxTip3: '<strong>예매 방법:</strong> 코레일톡 앱 또는 기차역 현장 창구에서 예매 가능합니다.',
    transportBusBadge: '시내버스',
    transportBusTitle: '210번 하회마을 급행 & 주요 노선',
    transportBusBody: '<strong>210번 급행버스</strong>는 안동역, 구도심(구시장), 하회마을을 빠르게 연결하는 황금 노선입니다.',
    transportBusTip1: '<strong>210번 버스:</strong> 안동역 ↔ 하회마을 약 45~50분 소요 (수시 운행).',
    transportBusTip2: '<strong>567번 / 67번:</strong> 도산서원 방면으로 갈 때 이용합니다.',
    transportBusTip3: '<strong>결제 수단:</strong> 티머니, 나마네 카드, 후불 교통카드 신용카드 모두 지원.',
    transportTaxiBadge: '택시 도우미',
    transportTaxiTitle: '안동에서 스마트하게 택시 타기',
    transportTaxiBody: '영어가 서툰 기사님을 위해 명소 카드의 <strong>"택시 기사님께 보여주기"</strong> 버튼을 활용하세요!',
    transportTaxiTip1: '<strong>화면 제시:</strong> 큰 글씨의 한국어 목적지와 주소가 적힌 전용 화면이 열립니다.',
    transportTaxiTip2: '<strong>결제 수단:</strong> 모든 택시에서 신용카드, 현금, 티머니 결제가 가능합니다.',
    transportTaxiTip3: '<strong>카카오 T:</strong> 해외 발급 카드 또는 현장 결제 옵션으로 호출 가능합니다.',
    transportEmergBadge: '필수 안내',
    transportEmergTitle: '외국인 긴급 연락처 & 안내센터',
    transportEmergTip1: '<strong>한국관광안내전화:</strong> <strong>1330</strong> (연중무휴 24시간 영어/일어/중국어 무료 통역 및 여행 안내)',
    transportEmergTip2: '<strong>경찰서:</strong> 112 | <strong>응급 구조:</strong> 119',
    transportEmergTip3: '<strong>안동역 관광안내소:</strong> 안동역 1번 출구 광장에 위치 (다국어 지도 및 리플릿 무료 제공).',
    survivalTitle: '서바이벌 여행 한국어 회화',
    survivalDesc: '<strong>🔊 소리 듣기</strong> 버튼을 눌러 한국어 발음을 직접 들어보거나 기사님/직원에게 보여주세요!',
    savedDrawerTitle: '🔖 내가 찜한 여행지',
    savedDrawerSub: '브라우저 저장소에 안전하게 보관됩니다.',
    clearAll: '전체 삭제',
    noSaved: '아직 저장된 장소가 없습니다.',
    noSavedSub: '명소 카드의 별표(★)를 눌러 여행 코스를 구성해보세요!',
    showTaxiBtn: '🚕 택시 기사님께 보여주기',
    moreInfoBtn: '상세 정보',
    hearNameBtn: '🔊 이름 듣기',
    fullGuideBtn: '상세 가이드',
    hoursLabel: '운영시간:',
    admissionLabel: '입장료:',
    transitLabel: '대중교통:',
    addressLabel: '주소:',
    estTaxiLabel: '예상 택시비:',
    priceLabel: '가격대:',
    whereLabel: '추천 장소:',
    tipLabel: '여행자 팁:',
    copyAddressBtn: '📋 주소 복사하기',
    readKoreanBtn: '🔊 한국어로 읽어주기',
    footerBrand: '🌿 <strong>Discover Andong</strong> &bull; 외국인을 위한 안동 여행 길라잡이',
    footerSub: '별도 서버 없이 브라우저에서 100% 동작합니다. 즐거운 안동 여행 되세요!',
    toastSwitchedLang: '한국어로 전환되었습니다',
    toastCopied: '주소가 클립보드에 복사되었습니다!'
  }
};

// Current Active Language (Default: English)
let currentLang = 'en';

// ============================================================================
// Curated Data: Attractions, Cuisines, Itineraries, Phrases
// ============================================================================

const ATTRACTIONS_DATA = [
  {
    id: 'hahoe',
    category: 'unesco',
    nameEn: 'Hahoe Folk Village',
    nameKo: '안동 하회마을',
    tagEn: 'UNESCO Heritage',
    tagKo: '유네스코 세계유산',
    rating: '⭐ 4.9',
    heroGradient: 'linear-gradient(135deg, #1e3a8a, #0f172a)',
    bgIcon: '🏡',
    summaryEn: 'A 600-year-old traditional clan village where descendants still reside in authentic tile-roof and thatch-roof hanok houses.',
    summaryKo: '풍산 류씨 집성촌으로 600년의 역사를 간직하고 있으며, 실제 주민들이 고택과 초가에 거주하는 살아 숨쉬는 유네스코 세계유산입니다.',
    detailsEn: 'Surrounded by the S-shaped Nakdong River, Hahoe Village is the crown jewel of Andong. Experience mask dance dramas, Buyongdae cliff views, and 600-year-old Zelkova trees.',
    detailsKo: '낙동강이 S자로 마을을 감싸 안고 흐르는 물도리동입니다. 중요무형문화재 하회별신굿탈놀이 상설 공연, 부용대 절벽 절경, 삼신당 신목 등 한국 전통의 정수를 느낄 수 있습니다.',
    addressKo: '경상북도 안동시 풍천면 하회종가길 40',
    hoursEn: '09:00 - 18:00 (Summer) / 17:30 (Winter)',
    hoursKo: '09:00 - 18:00 (하절기) / 17:30 (동절기)',
    feeEn: '₩5,000 (Adults)',
    feeKo: '성인 5,000원',
    busTipEn: 'Bus #210 from Andong Station (approx. 45 min)',
    busTipKo: '안동역에서 210번 급행버스 탑승 (약 45분 소요)',
    estTaxiFareEn: '~ ₩25,000 - ₩30,000',
    estTaxiFareKo: '안동역 기준 약 25,000원 ~ 30,000원'
  },
  {
    id: 'dosan',
    category: 'unesco',
    nameEn: 'Dosan Seowon Neo-Confucian Academy',
    nameKo: '도산서원',
    tagEn: 'UNESCO Heritage',
    tagKo: '유네스코 세계유산',
    rating: '⭐ 4.8',
    heroGradient: 'linear-gradient(135deg, #14532d, #064e3b)',
    bgIcon: '📜',
    summaryEn: 'Historic academy established in 1574 by master Confucian scholar Toegye Yi Hwang (featured on the 1,000 Won bill).',
    summaryKo: '퇴계 이황 선생(1,000원권 지폐 인물)의 학문과 덕행을 기리기 위해 1574년 건립된 조선의 대표 서원입니다.',
    detailsEn: 'Set against a tranquil lake and pine hills, this UNESCO academy embodies traditional Korean scholarship, architecture, and spiritual harmony with nature.',
    detailsKo: '안동호의 수려한 자연경관과 고요한 솔숲에 둘러싸인 조선 성리학의 성지로, 검소하면서도 단아한 건축미를 자랑합니다.',
    addressKo: '경상북도 안동시 도산면 도산서원길 154',
    hoursEn: '09:00 - 18:00 (Summer) / 17:00 (Winter)',
    hoursKo: '09:00 - 18:00 (하절기) / 17:00 (동절기)',
    feeEn: '₩2,000 (Adults)',
    feeKo: '성인 2,000원',
    busTipEn: 'Bus #567 from downtown Andong (approx. 50 min)',
    busTipKo: '시내/안동터미널에서 567번 버스 탑승 (약 50분 소요)',
    estTaxiFareEn: '~ ₩30,000',
    estTaxiFareKo: '시내 기준 약 30,000원'
  },
  {
    id: 'byeongsan',
    category: 'unesco',
    nameEn: 'Byeongsan Seowon Academy',
    nameKo: '병산서원',
    tagEn: 'UNESCO Heritage',
    tagKo: '유네스코 세계유산',
    rating: '⭐ 4.9',
    heroGradient: 'linear-gradient(135deg, #78350f, #451a03)',
    bgIcon: '⛩️',
    summaryEn: 'Acclaimed as one of Korea\'s most breathtaking masterworks of pavilions and landscape architecture.',
    summaryKo: '한국 서원 건축의 백미로 꼽히며, 화산과 병풍처럼 둘러선 낙동강 절벽을 품은 만대루의 풍경이 압권입니다.',
    detailsEn: 'The iconic Mandaeru Pavilion opens up to panoramic views of cliffs and the flowing Nakdong river without a single glass window, harmonizing architecture with nature.',
    detailsKo: '서애 류성룡 선생을 기리는 곳으로, 기둥 사이로 펼쳐지는 자연 병풍인 7칸 만대루 누각은 한국 전통 정원과 차경(자연을 빌려오는 건축)의 정수입니다.',
    addressKo: '경상북도 안동시 풍천면 병산길 386',
    hoursEn: '09:00 - 18:00 (Summer) / 17:00 (Winter)',
    hoursKo: '09:00 - 18:00 (하절기) / 17:00 (동절기)',
    feeEn: 'Free Admission',
    feeKo: '무료 관람',
    busTipEn: 'Bus #210 connects here 3 times a day; or taxi from Hahoe Village (~10 min)',
    busTipKo: '210번 버스 1일 3회 경유; 하회마을에서 택시로 약 10분',
    estTaxiFareEn: '~ ₩28,000 from Station',
    estTaxiFareKo: '안동역 기준 약 28,000원 / 하회마을에서 약 8,000원'
  },
  {
    id: 'woryeonggyo',
    category: 'night',
    nameEn: 'Woryeonggyo Wooden Bridge & Moon Boat',
    nameKo: '월영교 (달빛 야경 & 문보트)',
    tagEn: 'Night & Scenic',
    tagKo: '야경 명소 & 문보트',
    rating: '⭐ 4.9',
    heroGradient: 'linear-gradient(135deg, #312e81, #1e1b4b)',
    bgIcon: '🌉',
    summaryEn: 'The longest wooden footbridge in South Korea with luminous night views, fountain shows, and glowing Moon Boats.',
    summaryKo: '국내 최장의 목책 인도교로, 물안개와 오색 분수, 강물 위를 떠다니는 초승달 모양의 감성 문보트 야경이 유명합니다.',
    detailsEn: 'Built to honor a poignant 450-year-old love story (Won-i\'s Mother). In the evening, the bridge lights up with mystical illumination. You can rent a high-tech glowing crescent Moon Boat to sail on the water!',
    detailsKo: '조선시대 애틋한 부부의 사랑(원이 엄마의 미투리)을 기려 만들어졌습니다. 야간에는 아름다운 조명과 분수가 펼쳐지며, 블루투스 음악을 켜고 탈 수 있는 문보트 체험이 인기입니다.',
    addressKo: '경상북도 안동시 상아동 569',
    hoursEn: 'Open 24 hours (Fountain & lights active evenings)',
    hoursKo: '연중무휴 24시간 (야간 조명 및 분수 가동)',
    feeEn: 'Bridge: Free / Moon Boat: ~₩28,000 per boat (up to 3 persons)',
    feeKo: '월영교 무료 / 문보트 1대당 28,000원 (최대 3인)',
    busTipEn: 'Bus #112 or #311 from downtown (approx. 15 min)',
    busTipKo: '안동 시내에서 112번 또는 311번 버스 탑승 (약 15분 소요)',
    estTaxiFareEn: '~ ₩7,000 - ₩9,000',
    estTaxiFareKo: '안동역/시내 기준 약 7,000원 ~ 9,000원'
  },
  {
    id: 'manhyujeong',
    category: 'photo',
    nameEn: 'Manhyujeong Pavilion (Mr. Sunshine Spot)',
    nameKo: '만휴정 (미스터 션샤인 외나무다리)',
    tagEn: 'Drama & K-Culture',
    tagKo: '드라마 촬영지 & 포토존',
    rating: '⭐ 4.7',
    heroGradient: 'linear-gradient(135deg, #065f46, #022c22)',
    bgIcon: '🎬',
    summaryEn: 'Romantic wooden single-log bridge across a mountain cascade where the hit K-Drama \'Mr. Sunshine\' was filmed.',
    summaryKo: '인기 K-드라마 \'미스터 션샤인\' 명대사("합시다, 러브.")의 무대인 폭포 위 외나무다리로 유명한 절경 정자입니다.',
    detailsEn: '“Let’s do it, love.” Visitors recreate the famous drama scene standing on the solitary bridge over picturesque waterfalls and tranquil granite boulders.',
    detailsKo: '조선 연산군 시절 문신 김계행이 말년에 지은 정자로, 암반 위를 흐르는 계곡물과 정겨운 외나무다리 위에서 인생샷을 찍기 위해 국내외 관광객이 많이 찾습니다.',
    addressKo: '경상북도 안동시 길안면 묵계하리길 42',
    hoursEn: '09:30 - 17:30',
    hoursKo: '09:30 - 17:30',
    feeEn: '₩1,000',
    feeKo: '1,000원',
    busTipEn: 'Best reached by taxi or rental car (approx. 35 min from downtown)',
    busTipKo: '대중교통 배차간격이 길어 택시 또는 렌터카 이용 추천 (시내에서 약 35분)',
    estTaxiFareEn: '~ ₩28,000',
    estTaxiFareKo: '시내 기준 편도 약 28,000원'
  },
  {
    id: 'market',
    category: 'market',
    nameEn: 'Andong Old Market & Jjimdak Alley',
    nameKo: '안동 구시장 찜닭골목',
    tagEn: 'Local Culture',
    tagKo: '로컬 전통시장',
    rating: '⭐ 4.8',
    heroGradient: 'linear-gradient(135deg, #831843, #500724)',
    bgIcon: '🥢',
    summaryEn: 'A vibrant 70-year-old traditional marketplace crammed with authentic Andong braised chicken restaurants.',
    summaryKo: '70년 전통의 상설 재래시장으로, 30여 개가 넘는 원조 안동찜닭 전문점이 불꽃을 튀기며 찜닭을 조리하는 명소입니다.',
    detailsEn: 'Over 30 specialty shops simmer gigantic woks of savory-sweet soy braised chicken right in front of you. Great spot to soak in genuine Korean street life.',
    detailsKo: '거대한 웍에서 닭고기와 당면, 감자를 달콤 짭조름한 간장 소스로 볶아내는 활기찬 장터 풍경을 직접 보며 식사할 수 있습니다.',
    addressKo: '경상북도 안동시 번영길 45 (구시장)',
    hoursEn: '10:00 - 22:00 (Varies by shop)',
    hoursKo: '10:00 - 22:00 (가게별 상이)',
    feeEn: 'Free entry (Food ~₩32,000 per huge plate)',
    feeKo: '입장 무료 (찜닭 한 마리 중짜 약 32,000원)',
    busTipEn: 'Located right in downtown Andong, 10 min bus/taxi from Andong Station',
    busTipKo: '안동 구도심 중심가 위치 (안동역에서 버스/택시로 약 10분)',
    estTaxiFareEn: '~ ₩6,000 - ₩8,000',
    estTaxiFareKo: '안동역 기준 약 6,000원 ~ 8,000원'
  }
];

const CUISINES_DATA = [
  {
    id: 'jjimdak',
    filter: 'spicy',
    nameEn: 'Andong Jjimdak',
    nameKo: '안동 찜닭',
    spiceLevelEn: 'Medium Spicy (Ask for Mild)',
    spiceLevelKo: '매콤달콤 (안 맵게 주문 가능)',
    tagsEn: ['Must-Eat', 'Chicken', 'Glass Noodles', 'Sharing (2-3 ppl)'],
    tagsKo: ['필수 맛집', '닭볶음', '쫄깃 당면', '2~3인 푸짐한 양'],
    heroGradient: 'linear-gradient(135deg, #7c2d12, #451a03)',
    bgIcon: '🍗',
    summaryEn: 'Tender braised chicken with glass noodles, potatoes, and vegetables simmered in a dark, sweet & savory soy-chili broth.',
    summaryKo: '간장 양념에 닭고기, 감자, 쫄깃한 당면과 각종 채소를 듬뿍 넣고 센 불에 졸여낸 안동의 대표 국민 요리입니다.',
    foreignTipEn: 'Foreigner Tip: Default is quite spicy due to dried red peppers! Say: "An meop-ge hae-ju-se-yo" (Please make it non-spicy / 안 맵게 해주세요).',
    foreignTipKo: '팁: 건고추가 많이 들어가 기본맛도 꽤 칼칼합니다. 매운 것을 못 드시면 "안 맵게 해주세요"라고 요청하세요.',
    bestSpotEn: 'Andong Old Market Jjimdak Alley (구시장 찜닭골목)',
    bestSpotKo: '안동 구시장 찜닭골목 전문점',
    priceEn: '~ ₩32,000 (Feeds 2 to 3 people)',
    priceKo: '한 마리(2~3인분) 약 32,000원'
  },
  {
    id: 'heotjesatbap',
    filter: 'non-spicy',
    nameEn: 'Heotjesatbap (Fake Memorial Bibimbap)',
    nameKo: '헛제삿밥',
    spiceLevelEn: 'Completely Non-Spicy (Gentle)',
    spiceLevelKo: '자극 없이 담백한 순한맛',
    tagsEn: ['Mild', 'Vegetarian Friendly', 'Noble Heritage'],
    tagsKo: ['순한맛', '채식 친화적', '양반 종가 음식'],
    heroGradient: 'linear-gradient(135deg, #15803d, #166534)',
    bgIcon: '🍚',
    summaryEn: 'Aristocratic bibimbap seasoned with aromatic soy sauce and sesame oil rather than spicy red chili paste.',
    summaryKo: '제사를 지내지 않고도 제사음식이 먹고 싶었던 선비들이 차려 먹었다는 유래의 비빔밥으로, 고추장 대신 참기름과 간장에 비벼 먹습니다.',
    foreignTipEn: 'Ideal for travelers who cannot eat spicy food or prefer vegetarian options. Served with jeon (pancakes) and mild soup.',
    foreignTipKo: '팁: 맵지 않아 어린이나 외국인에게 인기 만점이며, 전과 나물 위주라 채식주의자에게도 훌륭합니다.',
    bestSpotEn: 'Restaurants near Woryeonggyo Bridge (월영교 식당가)',
    bestSpotKo: '월영교 앞 맛50년 헛제삿밥 등 식당가',
    priceEn: '~ ₩13,000 - ₩15,000 per person',
    priceKo: '1인분 약 13,000원 ~ 15,000원'
  },
  {
    id: 'mackerel',
    filter: 'non-spicy',
    nameEn: 'Andong Salted Grilled Mackerel (Gan-godeungeo)',
    nameKo: '안동 간고등어',
    spiceLevelEn: 'Non-Spicy (Savory & Rich)',
    spiceLevelKo: '담백하고 짭조름한 구이',
    tagsEn: ['Seafood', 'Non-Spicy', 'Crispy Skin'],
    tagsKo: ['생선구이', '비린내 없음', '겉바속촉'],
    heroGradient: 'linear-gradient(135deg, #0369a1, #075985)',
    bgIcon: '🐟',
    summaryEn: 'Expertly salted and charcoal-grilled mackerel with exceptionally juicy meat and crispy golden skin.',
    summaryKo: '동해 영덕에서 잡힌 고등어를 내륙 안동까지 수송하며 알맞게 간간해진 선조들의 염장 지혜가 담긴 밥도둑입니다.',
    foreignTipEn: 'Salted using traditional preservation wisdom as fish traveled from coastal ports to inland Andong.',
    foreignTipKo: '팁: 껍질은 바삭하고 속살은 촉촉하여 흰쌀밥, 된장찌개와 함께 먹으면 일품입니다.',
    bestSpotEn: 'Iljic Sikdang (일직식당 near downtown) or Hahoe Village restaurants',
    bestSpotKo: '안동역 앞 일직식당 또는 하회마을 주변 식당',
    priceEn: '~ ₩13,000 - ₩16,000',
    priceKo: '1인 정식 약 13,000원 ~ 16,000원'
  },
  {
    id: 'mammoth',
    filter: 'dessert',
    nameEn: 'Mammoth Bakery (Cream Cheese Bun)',
    nameKo: '맘모스베이커리 (크림치즈빵)',
    spiceLevelEn: 'Sweet & Creamy',
    spiceLevelKo: '달콤 고소한 디저트',
    tagsEn: ['Bakery', 'Michelin Green Guide', 'Snack'],
    tagsKo: ['전국 3대 빵집', '미슐랭 그린가이드', '디저트'],
    heroGradient: 'linear-gradient(135deg, #d97706, #b45309)',
    bgIcon: '🥐',
    summaryEn: 'Listed in the Michelin Green Guide Korea; renowned across the country for its chewy cream cheese bread.',
    summaryKo: '1974년 개업하여 미슐랭 그린가이드에 등재된 전국구 유명 빵집으로, 쫄깃한 식감의 크림치즈빵이 독보적입니다.',
    foreignTipEn: 'Arrive early in the afternoon as their signature buns often sell out before evening!',
    foreignTipKo: '팁: 주말 오후 늦게 가면 대표 메뉴인 크림치즈빵이 조기 품절될 수 있으니 일찍 방문하세요.',
    bestSpotEn: 'Downtown Culture Street (안동 문화의거리 본점)',
    bestSpotKo: '안동 문화의거리 본점',
    priceEn: '~ ₩2,500 per bun',
    priceKo: '크림치즈빵 1개 2,500원'
  },
  {
    id: 'soju',
    filter: 'liquor',
    nameEn: 'Traditional Andong Soju (45% ABV)',
    nameKo: '명품 안동소주',
    spiceLevelEn: 'Alcoholic (Pure & Crisp)',
    spiceLevelKo: '도수 45도 / 22도 (증류원주)',
    tagsEn: ['Spirits', 'Distilled 45% / 22%', 'Historical Heritage'],
    tagsKo: ['전통 명주', '쌀 100% 증류주', '무형문화재'],
    heroGradient: 'linear-gradient(135deg, #475569, #1e293b)',
    bgIcon: '🍶',
    summaryEn: 'Pure distilled grain soju with 700 years of history originating from the Goryeo dynasty and Mongol distillation techniques.',
    summaryKo: '고려시대 원나라로부터 전래된 700년 역사의 증류식 명주로, 100% 쌀과 누룩으로 빚어 은은한 향과 깔끔한 뒷맛을 자랑합니다.',
    foreignTipEn: 'Unlike commercial green bottle soju, authentic Andong Soju is 100% pure rice distilled. Very smooth with floral notes.',
    foreignTipKo: '팁: 초록병 희석식 소주와는 차원이 다른 깊은 향과 깔끔함을 지니고 있어 선물용으로 최고입니다.',
    bestSpotEn: 'Traditional liquor markets or Andong Soju Museum',
    bestSpotKo: '안동소주 박물관, 안동역 로컬푸드 매장, 마트',
    priceEn: '₩12,000 - ₩35,000 per bottle',
    priceKo: '병당 약 12,000원 ~ 35,000원'
  }
];

const ITINERARIES_DATA = [
  {
    titleEn: 'The Classic Andong (1 Day Highlight)',
    titleKo: '알찬 당일치기 코스 (KTX 당일 여행)',
    timeEn: 'Recommended for Day Trips from Seoul',
    timeKo: '서울 출발 당일 여행자에게 최적',
    summaryEn: 'Direct KTX arrival, UNESCO village exploration, mouthwatering jjimdak lunch, and romantic moonlit bridge evening.',
    summaryKo: 'KTX-이음으로 아침 도착, 하회마을 전통 탐방, 구시장 찜닭 점심, 월영교 야경과 문보트로 마무리하는 실속 코스입니다.',
    stepsEn: [
      { time: '09:00 AM', name: 'Arrive at Andong Station via KTX-Eum', detail: 'Take bus #210 right outside Exit 1 towards Hahoe Folk Village.' },
      { time: '10:00 AM', name: 'Explore Hahoe Folk Village & Mask Dance', detail: 'Walk through historic tile-roof clan houses and catch the free traditional Talchum mask performance (typically 2:00 PM on weekends).' },
      { time: '01:30 PM', name: 'Lunch: Andong Jjimdak at Old Market', detail: 'Head to downtown Jjimdak Alley for a giant plate of steaming braised chicken.' },
      { time: '03:30 PM', name: 'Coffee & Dessert at Mammoth Bakery', detail: 'Sample the world-famous cream cheese bread on Culture Street.' },
      { time: '06:30 PM', name: 'Sunset & Night Walk at Woryeonggyo Bridge', detail: 'Watch the evening bridge illumination and take a ride on the glowing Moon Boat.' },
      { time: '08:45 PM', name: 'Return to Andong Station for Seoul Train', detail: 'Catch the late KTX-Eum train back to Cheongnyangni.' }
    ],
    stepsKo: [
      { time: '오전 09:00', name: 'KTX-이음 안동역 도착', detail: '1번 출구 광장 버스정류장에서 210번 급행버스 탑승하여 하회마을로 이동.' },
      { time: '오전 10:00', name: '하회마을 고택 산책 & 하회별신굿탈놀이', detail: '골목길 고택 산책 후 탈놀이 전수관에서 신명나는 탈춤 공연 관람.' },
      { time: '오후 01:30', name: '점심: 안동 구시장 찜닭골목', detail: '원조 찜닭 골목에서 푸짐하고 매콤달콤한 찜닭으로 점심 식사.' },
      { time: '오후 03:30', name: '문화의거리 맘모스베이커리 디저트', detail: '시그니처 크림치즈빵을 맛보며 여유로운 커피 타임.' },
      { time: '오후 06:30', name: '월영교 야경 산책 & 문보트 체험', detail: '노을 지는 호수 위 목책교를 걷고 감성 가득한 초승달 문보트 탑승.' },
      { time: '오후 08:45', name: '안동역 이동 및 서울행 KTX 탑승', detail: '안동역으로 복귀하여 청량리/서울행 막차 KTX 열차 탑승.' }
    ]
  },
  {
    titleEn: 'Deep Heritage & Nature Retreat (2 Days 1 Night)',
    titleKo: '선비의 풍류와 고택 힐링 (1박 2일 코스)',
    timeEn: 'Relaxed Pace for Culture Enthusiasts',
    timeKo: '고즈넉한 한옥 숙박과 서원 기행',
    summaryEn: 'Immerse in Joseon-era philosophy, overnight at a traditional hanok stay, and marvel at scenic river gorges.',
    summaryKo: '조선 성리학의 요람 도산서원과 병산서원을 둘러보고 한옥 고택 온돌방에서 하룻밤 머무는 품격 있는 힐링 여행입니다.',
    stepsEn: [
      { time: 'Day 1 Morning', name: 'Dosan Seowon Neo-Confucian Academy', detail: 'Enjoy peaceful pine tree trails and scenic Nakdong lake views.' },
      { time: 'Day 1 Afternoon', name: 'Bongjeongsa Temple & Geungnakjeon', detail: 'Visit the oldest surviving wooden building in Korea (dating back to the 1200s).' },
      { time: 'Day 1 Evening', name: 'Hanok Stay in Hahoe Village', detail: 'Sleep on warm ondol heated stone floors under traditional wooden beams.' },
      { time: 'Day 2 Morning', name: 'Climb Buyongdae Cliff & Ferry Boat', detail: 'Overlook the entire Hahoe S-shaped river landscape from 64-meter cliff.' },
      { time: 'Day 2 Afternoon', name: 'Byeongsan Seowon & Manhyujeong', detail: 'Experience masterwork architecture and scenic K-drama photo spots before departure.' }
    ],
    stepsKo: [
      { time: '1일차 오전', name: '도산서원 성리학 성지 순례', detail: '퇴계 이황의 자취가 서린 도산서당과 솔바람 부는 안동호 절경 감상.' },
      { time: '1일차 오후', name: '봉정사 & 한국 최고(最古) 목조건축 극락전', detail: '유네스코 세계유산 산사 봉정사에서 만나는 고려시대 목조건축의 신비.' },
      { time: '1일차 저녁', name: '하회마을 전통 한옥 고택 스테이', detail: '따뜻한 온돌방에서 밤하늘 별을 보며 조용한 고택의 정취 만끽.' },
      { time: '2일차 오전', name: '나룻배 타고 부용대 절벽 오르기', detail: '강을 건너 64미터 부용대 절벽 위에서 하회마을 전체 풍경 조망.' },
      { time: '2일차 오후', name: '병산서원 만대루 & 만휴정 외나무다리', detail: '자연과 건축이 하나 된 병산서원과 미스터 션샤인 촬영지 만휴정 투어 후 귀가.' }
    ]
  }
];

const SURVIVAL_PHRASES = [
  {
    catEn: 'Taxi',
    catKo: '택시',
    korean: '이 주소로 가주세요.',
    roman: 'I ju-so-ro ga-ju-se-yo.',
    english: 'Please take me to this address.',
    meaningKo: '기사님께 주소를 보여주며 쓰는 말'
  },
  {
    catEn: 'Taxi',
    catKo: '택시',
    korean: '안동역으로 가주세요.',
    roman: 'An-dong-yeok-eu-ro ga-ju-se-yo.',
    english: 'Please go to Andong Station.',
    meaningKo: '기차역으로 복귀할 때'
  },
  {
    catEn: 'Dining',
    catKo: '식당',
    korean: '덜 맵게 해주세요.',
    roman: 'Deol meop-ge hae-ju-se-yo.',
    english: 'Please make it less spicy.',
    meaningKo: '매운맛을 조금 줄여달라고 할 때'
  },
  {
    catEn: 'Dining',
    catKo: '식당',
    korean: '안 맵게 해주세요.',
    roman: 'An meop-ge hae-ju-se-yo.',
    english: 'Please make it non-spicy.',
    meaningKo: '매운 것을 전혀 못 먹을 때'
  },
  {
    catEn: 'Dining',
    catKo: '식당',
    korean: '물 좀 주세요.',
    roman: 'Mul jom ju-se-yo.',
    english: 'Water, please.',
    meaningKo: '식당에서 물 요청할 때'
  },
  {
    catEn: 'Payment',
    catKo: '결제',
    korean: '카드 결제 되나요?',
    roman: 'Ka-deu gyeol-je doe-na-yo?',
    english: 'Can I pay with a credit card?',
    meaningKo: '신용카드 결제 가능 여부 문의'
  },
  {
    catEn: 'Essential',
    catKo: '기본',
    korean: '화장실이 어디예요?',
    roman: 'Hwa-jang-sil-i eo-di-ye-yo?',
    english: 'Where is the restroom?',
    meaningKo: '화장실 위치를 물어볼 때'
  },
  {
    catEn: 'Essential',
    catKo: '기본',
    korean: '얼마예요?',
    roman: 'Eol-ma-ye-yo?',
    english: 'How much is it?',
    meaningKo: '물건이나 음식 가격을 물을 때'
  },
  {
    catEn: 'Greeting',
    catKo: '인사',
    korean: '감사합니다!',
    roman: 'Gam-sa-ham-ni-da!',
    english: 'Thank you very much!',
    meaningKo: '고마움을 표현할 때'
  }
];

// ============================================================================
// State Management
// ============================================================================

let savedPlaces = [];

function loadSavedPlaces() {
  try {
    const raw = localStorage.getItem('andong_saved_places');
    savedPlaces = raw ? JSON.parse(raw) : [];
  } catch (e) {
    savedPlaces = [];
  }
  updateSavedBadge();
}

function savePlacesToStorage() {
  try {
    localStorage.setItem('andong_saved_places', JSON.stringify(savedPlaces));
  } catch (e) {
    console.warn('Storage unavailable');
  }
  updateSavedBadge();
}

function updateSavedBadge() {
  const badge = document.getElementById('savedCountBadge');
  if (badge) badge.textContent = savedPlaces.length;
}

function isPlaceSaved(id) {
  return savedPlaces.some(item => item.id === id);
}

function toggleSavePlace(id, type) {
  const existingIndex = savedPlaces.findIndex(item => item.id === id);
  const t = I18N[currentLang];

  if (existingIndex > -1) {
    savedPlaces.splice(existingIndex, 1);
    showToast(currentLang === 'en' ? 'Removed from saved places' : '보관함에서 삭제되었습니다');
  } else {
    let target = null;
    if (type === 'attraction') {
      target = ATTRACTIONS_DATA.find(a => a.id === id);
    } else {
      target = CUISINES_DATA.find(c => c.id === id);
    }
    if (target) {
      savedPlaces.push({
        id: target.id,
        nameEn: target.nameEn,
        nameKo: target.nameKo,
        type: type
      });
      showToast(currentLang === 'en' ? 'Saved to your favorites! 🔖' : '즐겨찾기에 저장되었습니다! 🔖');
    }
  }
  savePlacesToStorage();
  renderAttractions();
  renderCuisines();
  renderSavedDrawerList();
}

// ============================================================================
// Language Switcher Logic
// ============================================================================

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('andong_lang', lang);
  const t = I18N[lang];

  // 1. Language Toggle Button Label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = t.langToggle;
  }

  // 2. Header & Nav Labels
  const brandBadge = document.querySelector('.brand-badge');
  if (brandBadge) brandBadge.textContent = t.brandBadge;

  const savedNavLabel = document.getElementById('savedNavLabel');
  if (savedNavLabel) savedNavLabel.textContent = t.savedNav;

  const tabs = document.querySelectorAll('.nav-tab');
  if (tabs.length >= 5) {
    tabs[0].querySelector('span:last-child').textContent = t.tabAttractions;
    tabs[1].querySelector('span:last-child').textContent = t.tabCuisine;
    tabs[2].querySelector('span:last-child').textContent = t.tabItinerary;
    tabs[3].querySelector('span:last-child').textContent = t.tabTransport;
    tabs[4].querySelector('span:last-child').textContent = t.tabSurvival;
  }

  // 3. Hero Section
  const heroTag = document.querySelector('.hero-tag');
  if (heroTag) heroTag.textContent = t.heroTag;

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.textContent = t.heroTitle;

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  // 4. Section Headers & Filter Pills
  const tabAttPane = document.getElementById('tab-attractions');
  if (tabAttPane) {
    tabAttPane.querySelector('.section-title').textContent = t.attractionsTitle;
    tabAttPane.querySelector('.section-desc').textContent = t.attractionsDesc;
    const attPills = tabAttPane.querySelectorAll('.pill');
    if (attPills.length >= 5) {
      attPills[0].textContent = t.pillAll;
      attPills[1].textContent = t.pillUnesco;
      attPills[2].textContent = t.pillNight;
      attPills[3].textContent = t.pillPhoto;
      attPills[4].textContent = t.pillMarket;
    }
  }

  const tabCuisinePane = document.getElementById('tab-cuisine');
  if (tabCuisinePane) {
    tabCuisinePane.querySelector('.section-title').textContent = t.cuisineTitle;
    tabCuisinePane.querySelector('.section-desc').textContent = t.cuisineDesc;
    const cuisPills = tabCuisinePane.querySelectorAll('.pill');
    if (cuisPills.length >= 5) {
      cuisPills[0].textContent = t.pillAllCuisines;
      cuisPills[1].textContent = t.pillMild;
      cuisPills[2].textContent = t.pillSpicy;
      cuisPills[3].textContent = t.pillDessert;
      cuisPills[4].textContent = t.pillLiquor;
    }
  }

  const tabItinPane = document.getElementById('tab-itinerary');
  if (tabItinPane) {
    tabItinPane.querySelector('.section-title').textContent = t.itineraryTitle;
    tabItinPane.querySelector('.section-desc').textContent = t.itineraryDesc;
  }

  const tabTransPane = document.getElementById('tab-transport');
  if (tabTransPane) {
    tabTransPane.querySelector('.section-title').textContent = t.transportTitle;
    tabTransPane.querySelector('.section-desc').textContent = t.transportDesc;

    // Transport Cards Content
    const cards = tabTransPane.querySelectorAll('.transport-card');
    if (cards.length >= 4) {
      // KTX Card
      cards[0].querySelector('.transport-badge').textContent = t.transportKtxBadge;
      cards[0].querySelector('h4').textContent = t.transportKtxTitle;
      cards[0].querySelector('.transport-body').innerHTML = t.transportKtxBody;
      const ktxTips = cards[0].querySelectorAll('.tip-list li');
      if (ktxTips.length >= 3) {
        ktxTips[0].innerHTML = t.transportKtxTip1;
        ktxTips[1].innerHTML = t.transportKtxTip2;
        ktxTips[2].innerHTML = t.transportKtxTip3;
      }

      // Bus Card
      cards[1].querySelector('.transport-badge').textContent = t.transportBusBadge;
      cards[1].querySelector('h4').textContent = t.transportBusTitle;
      cards[1].querySelector('.transport-body').innerHTML = t.transportBusBody;
      const busTips = cards[1].querySelectorAll('.tip-list li');
      if (busTips.length >= 3) {
        busTips[0].innerHTML = t.transportBusTip1;
        busTips[1].innerHTML = t.transportBusTip2;
        busTips[2].innerHTML = t.transportBusTip3;
      }

      // Taxi Card
      cards[2].querySelector('.transport-badge').textContent = t.transportTaxiBadge;
      cards[2].querySelector('h4').textContent = t.transportTaxiTitle;
      cards[2].querySelector('.transport-body').innerHTML = t.transportTaxiBody;
      const taxiTips = cards[2].querySelectorAll('.tip-list li');
      if (taxiTips.length >= 3) {
        taxiTips[0].innerHTML = t.transportTaxiTip1;
        taxiTips[1].innerHTML = t.transportTaxiTip2;
        taxiTips[2].innerHTML = t.transportTaxiTip3;
      }

      // Emergency Card
      cards[3].querySelector('.transport-badge').textContent = t.transportEmergBadge;
      cards[3].querySelector('h4').textContent = t.transportEmergTitle;
      const emergTips = cards[3].querySelectorAll('.tip-list li');
      if (emergTips.length >= 3) {
        emergTips[0].innerHTML = t.transportEmergTip1;
        emergTips[1].innerHTML = t.transportEmergTip2;
        emergTips[2].innerHTML = t.transportEmergTip3;
      }
    }
  }

  const tabSurvPane = document.getElementById('tab-survival');
  if (tabSurvPane) {
    tabSurvPane.querySelector('.section-title').textContent = t.survivalTitle;
    tabSurvPane.querySelector('.section-desc').innerHTML = t.survivalDesc;
  }

  // 5. Drawer & Modals
  const drawerHeaderH3 = document.querySelector('.drawer-header h3');
  if (drawerHeaderH3) drawerHeaderH3.textContent = t.savedDrawerTitle;
  const drawerSub = document.querySelector('.drawer-subtitle');
  if (drawerSub) drawerSub.textContent = t.savedDrawerSub;
  const clearAllSavedBtn = document.getElementById('clearAllSavedBtn');
  if (clearAllSavedBtn) clearAllSavedBtn.textContent = t.clearAll;

  const copyAddressBtn = document.getElementById('copyAddressBtn');
  if (copyAddressBtn) copyAddressBtn.textContent = t.copyAddressBtn;
  const speechTaxiBtn = document.getElementById('speechTaxiBtn');
  if (speechTaxiBtn) speechTaxiBtn.textContent = t.readKoreanBtn;

  // 6. Footer
  const footerP = document.querySelector('.app-footer .footer-container p:first-child');
  if (footerP) footerP.innerHTML = t.footerBrand;
  const footerSub = document.querySelector('.footer-sub');
  if (footerSub) footerSub.textContent = t.footerSub;

  // 7. Re-render dynamic cards
  const activeAttPill = document.querySelector('#attractionFilterGroup .pill.active');
  const attFilter = activeAttPill ? activeAttPill.getAttribute('data-filter') : 'all';
  const searchVal = searchInput ? searchInput.value.trim().toLowerCase() : '';
  renderAttractions(attFilter, searchVal);

  const activeCuisPill = document.querySelector('#cuisineFilterGroup .pill.active');
  const cuisFilter = activeCuisPill ? activeCuisPill.getAttribute('data-filter') : 'all';
  renderCuisines(cuisFilter, searchVal);

  renderItineraries();
  renderPhrases();
  renderSavedDrawerList();
}

function toggleLanguage() {
  const nextLang = currentLang === 'en' ? 'ko' : 'en';
  setLanguage(nextLang);
  showToast(I18N[nextLang].toastSwitchedLang);
}

// ============================================================================
// UI Renderers
// ============================================================================

function renderAttractions(filter = 'all', keyword = '') {
  const container = document.getElementById('attractionsGrid');
  if (!container) return;
  const t = I18N[currentLang];

  const filtered = ATTRACTIONS_DATA.filter(item => {
    const matchesFilter = (filter === 'all') || (item.category === filter);
    const searchMatch = !keyword || 
      item.nameEn.toLowerCase().includes(keyword) || 
      item.nameKo.includes(keyword) || 
      item.summaryEn.toLowerCase().includes(keyword) ||
      item.summaryKo.includes(keyword) ||
      item.detailsEn.toLowerCase().includes(keyword) ||
      item.detailsKo.includes(keyword);
    return matchesFilter && searchMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</p>
        <p>${currentLang === 'en' ? 'No attractions found matching your search.' : '검색 조건에 맞는 명소가 없습니다.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isSaved = isPlaceSaved(item.id);
    const tag = currentLang === 'en' ? item.tagEn : item.tagKo;
    const primaryName = currentLang === 'en' ? item.nameEn : item.nameKo;
    const secondaryName = currentLang === 'en' ? item.nameKo : item.nameEn;
    const summary = currentLang === 'en' ? item.summaryEn : item.summaryKo;
    const hours = currentLang === 'en' ? item.hoursEn : item.hoursKo;
    const fee = currentLang === 'en' ? item.feeEn : item.feeKo;
    const busTip = currentLang === 'en' ? item.busTipEn : item.busTipKo;

    return `
      <article class="item-card" data-id="${item.id}">
        <div class="card-media" style="background: ${item.heroGradient};">
          <div class="card-media-overlay"></div>
          <div class="card-tags">
            <span class="badge-tag gold">${tag}</span>
            <span class="badge-tag">${item.rating}</span>
          </div>
          <button class="card-bookmark-btn ${isSaved ? 'saved' : ''}" 
                  onclick="toggleSavePlace('${item.id}', 'attraction')" 
                  title="${isSaved ? 'Remove Bookmark' : 'Save Attraction'}">
            ${isSaved ? '★' : '☆'}
          </button>
          <div class="card-titles">
            <div style="font-size: 1.8rem; margin-bottom: 0.2rem;">${item.bgIcon}</div>
            <h4 class="card-name-en">${primaryName}</h4>
            <div class="card-name-ko">${secondaryName}</div>
          </div>
        </div>

        <div class="card-body">
          <p class="card-desc">${summary}</p>
          <div class="card-meta-list">
            <div class="card-meta-item">
              <span>🕒</span>
              <div><strong>${t.hoursLabel}</strong> ${hours}</div>
            </div>
            <div class="card-meta-item">
              <span>🎟️</span>
              <div><strong>${t.admissionLabel}</strong> ${fee}</div>
            </div>
            <div class="card-meta-item">
              <span>🚌</span>
              <div><strong>${t.transitLabel}</strong> ${busTip}</div>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-primary" onclick="openTaxiModal('${item.id}')">
              ${t.showTaxiBtn}
            </button>
            <button class="btn-outline" onclick="openDetailModal('${item.id}', 'attraction')">
              ${t.moreInfoBtn}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderCuisines(filter = 'all', keyword = '') {
  const container = document.getElementById('cuisineGrid');
  if (!container) return;
  const t = I18N[currentLang];

  const filtered = CUISINES_DATA.filter(item => {
    const matchesFilter = (filter === 'all') || (item.filter === filter);
    const searchMatch = !keyword || 
      item.nameEn.toLowerCase().includes(keyword) || 
      item.nameKo.includes(keyword) || 
      item.summaryEn.toLowerCase().includes(keyword) ||
      item.summaryKo.includes(keyword) ||
      item.tagsEn.some(tag => tag.toLowerCase().includes(keyword)) ||
      item.tagsKo.some(tag => tag.includes(keyword));
    return matchesFilter && searchMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">🍲</p>
        <p>${currentLang === 'en' ? 'No dishes found matching your criteria.' : '해당 조건의 음식을 찾지 못했습니다.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isSaved = isPlaceSaved(item.id);
    const isMild = item.filter === 'non-spicy';
    const primaryName = currentLang === 'en' ? item.nameEn : item.nameKo;
    const secondaryName = currentLang === 'en' ? item.nameKo : item.nameEn;
    const spiceLevel = currentLang === 'en' ? item.spiceLevelEn : item.spiceLevelKo;
    const summary = currentLang === 'en' ? item.summaryEn : item.summaryKo;
    const tip = currentLang === 'en' ? item.foreignTipEn : item.foreignTipKo;
    const spot = currentLang === 'en' ? item.bestSpotEn : item.bestSpotKo;
    const price = currentLang === 'en' ? item.priceEn : item.priceKo;

    return `
      <article class="item-card" data-id="${item.id}">
        <div class="card-media" style="background: ${item.heroGradient};">
          <div class="card-media-overlay"></div>
          <div class="card-tags">
            <span class="badge-tag ${isMild ? 'spice-mild' : 'spice-hot'}">${spiceLevel}</span>
          </div>
          <button class="card-bookmark-btn ${isSaved ? 'saved' : ''}" 
                  onclick="toggleSavePlace('${item.id}', 'cuisine')" 
                  title="${isSaved ? 'Remove Bookmark' : 'Save Dish'}">
            ${isSaved ? '★' : '☆'}
          </button>
          <div class="card-titles">
            <div style="font-size: 1.8rem; margin-bottom: 0.2rem;">${item.bgIcon}</div>
            <h4 class="card-name-en">${primaryName}</h4>
            <div class="card-name-ko">${secondaryName}</div>
          </div>
        </div>

        <div class="card-body">
          <p class="card-desc">${summary}</p>
          <div class="card-meta-list">
            <div class="card-meta-item">
              <span>💡</span>
              <div style="color: var(--primary); font-weight: 500;">${tip}</div>
            </div>
            <div class="card-meta-item">
              <span>📍</span>
              <div><strong>${t.whereLabel}</strong> ${spot}</div>
            </div>
            <div class="card-meta-item">
              <span>💰</span>
              <div><strong>${t.priceLabel}</strong> ${price}</div>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-primary" onclick="speakKorean('${item.nameKo}')">
              ${t.hearNameBtn}
            </button>
            <button class="btn-outline" onclick="openDetailModal('${item.id}', 'cuisine')">
              ${t.fullGuideBtn}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderItineraries() {
  const container = document.getElementById('itineraryList');
  if (!container) return;

  container.innerHTML = ITINERARIES_DATA.map(plan => {
    const title = currentLang === 'en' ? plan.titleEn : plan.titleKo;
    const time = currentLang === 'en' ? plan.timeEn : plan.timeKo;
    const summary = currentLang === 'en' ? plan.summaryEn : plan.summaryKo;
    const steps = currentLang === 'en' ? plan.stepsEn : plan.stepsKo;

    return `
      <section class="itinerary-plan">
        <div class="plan-header">
          <span class="plan-tag">${time}</span>
          <h3 class="plan-title">${title}</h3>
          <p class="plan-summary">${summary}</p>
        </div>

        <div class="timeline-steps">
          ${steps.map(s => `
            <div class="timeline-step">
              <div class="step-marker"></div>
              <div class="step-time">${s.time}</div>
              <div class="step-name">${s.name}</div>
              <div class="step-detail">${s.detail}</div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function renderPhrases() {
  const container = document.getElementById('phrasesGrid');
  if (!container) return;

  container.innerHTML = SURVIVAL_PHRASES.map(p => {
    const category = currentLang === 'en' ? p.catEn : p.catKo;
    const subText = currentLang === 'en' ? p.english : p.meaningKo;

    return `
      <div class="phrase-card">
        <div class="phrase-top">
          <span class="phrase-category">${category}</span>
          <button class="phrase-play-btn" onclick="speakKorean('${p.korean}')" title="Play Pronunciation">
            🔊
          </button>
        </div>
        <div>
          <div class="phrase-korean">${p.korean}</div>
          <div class="phrase-roman">${p.roman}</div>
        </div>
        <div class="phrase-english">${subText}</div>
      </div>
    `;
  }).join('');
}

function renderSavedDrawerList() {
  const container = document.getElementById('savedListContainer');
  if (!container) return;
  const t = I18N[currentLang];

  if (savedPlaces.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2rem 0;">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">🔖</p>
        <p>${t.noSaved}</p>
        <p style="font-size: 0.8rem; margin-top: 0.3rem;">${t.noSavedSub}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = savedPlaces.map(item => `
    <div class="saved-item">
      <div>
        <div class="saved-item-title">${currentLang === 'en' ? item.nameEn : item.nameKo}</div>
        <div class="saved-item-sub">${currentLang === 'en' ? item.nameKo : item.nameEn}</div>
      </div>
      <button class="saved-item-del" onclick="toggleSavePlace('${item.id}', '${item.type}')" title="Remove">✕</button>
    </div>
  `).join('');
}

// ============================================================================
// Modals & Popups
// ============================================================================

let currentTaxiItem = null;

function openTaxiModal(attractionId) {
  const item = ATTRACTIONS_DATA.find(a => a.id === attractionId);
  if (!item) return;

  currentTaxiItem = item;
  document.getElementById('taxiDestKorean').textContent = item.nameKo;
  document.getElementById('taxiDestAddress').textContent = item.addressKo;
  document.getElementById('taxiDestEnglish').textContent = item.nameEn;
  document.getElementById('taxiDestEstFare').textContent = currentLang === 'en' ? item.estTaxiFareEn : item.estTaxiFareKo;

  const modal = document.getElementById('taxiModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeTaxiModal() {
  const modal = document.getElementById('taxiModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function openDetailModal(id, type) {
  const modal = document.getElementById('detailModal');
  const container = document.getElementById('detailContent');
  const t = I18N[currentLang];

  if (type === 'attraction') {
    const item = ATTRACTIONS_DATA.find(a => a.id === id);
    if (!item) return;
    const tag = currentLang === 'en' ? item.tagEn : item.tagKo;
    const primaryName = currentLang === 'en' ? item.nameEn : item.nameKo;
    const secondaryName = currentLang === 'en' ? item.nameKo : item.nameEn;
    const details = currentLang === 'en' ? item.detailsEn : item.detailsKo;
    const hours = currentLang === 'en' ? item.hoursEn : item.hoursKo;
    const fee = currentLang === 'en' ? item.feeEn : item.feeKo;
    const busTip = currentLang === 'en' ? item.busTipEn : item.busTipKo;
    const estFare = currentLang === 'en' ? item.estTaxiFareEn : item.estTaxiFareKo;

    container.innerHTML = `
      <div class="detail-title-group">
        <span class="badge-tag gold" style="display:inline-block; margin-bottom:0.5rem;">${tag}</span>
        <h2 class="detail-name-en">${primaryName}</h2>
        <h4 class="detail-name-ko">${secondaryName}</h4>
      </div>
      <p class="detail-p">${details}</p>
      <div class="card-meta-list" style="margin-bottom: 1.5rem;">
        <div class="card-meta-item"><strong>📍 ${t.addressLabel}</strong> <span>${item.addressKo}</span></div>
        <div class="card-meta-item"><strong>🕒 ${t.hoursLabel}</strong> <span>${hours}</span></div>
        <div class="card-meta-item"><strong>🎟️ ${t.admissionLabel}</strong> <span>${fee}</span></div>
        <div class="card-meta-item"><strong>🚌 ${t.transitLabel}</strong> <span>${busTip}</span></div>
        <div class="card-meta-item"><strong>🚕 ${t.estTaxiLabel}</strong> <span>${estFare}</span></div>
      </div>
      <button class="btn-primary" style="width:100%; padding:0.8rem;" onclick="openTaxiModal('${item.id}'); closeDetailModal();">
        ${t.showTaxiBtn}
      </button>
    `;
  } else {
    const item = CUISINES_DATA.find(c => c.id === id);
    if (!item) return;
    const spice = currentLang === 'en' ? item.spiceLevelEn : item.spiceLevelKo;
    const primaryName = currentLang === 'en' ? item.nameEn : item.nameKo;
    const secondaryName = currentLang === 'en' ? item.nameKo : item.nameEn;
    const summary = currentLang === 'en' ? item.summaryEn : item.summaryKo;
    const tip = currentLang === 'en' ? item.foreignTipEn : item.foreignTipKo;
    const spot = currentLang === 'en' ? item.bestSpotEn : item.bestSpotKo;
    const price = currentLang === 'en' ? item.priceEn : item.priceKo;

    container.innerHTML = `
      <div class="detail-title-group">
        <span class="badge-tag" style="display:inline-block; margin-bottom:0.5rem;">${spice}</span>
        <h2 class="detail-name-en">${primaryName}</h2>
        <h4 class="detail-name-ko">${secondaryName}</h4>
      </div>
      <p class="detail-p">${summary}</p>
      <div class="card-meta-list" style="margin-bottom: 1.5rem;">
        <div class="card-meta-item"><strong>💡 ${t.tipLabel}</strong> <span>${tip}</span></div>
        <div class="card-meta-item"><strong>📍 ${t.whereLabel}</strong> <span>${spot}</span></div>
        <div class="card-meta-item"><strong>💰 ${t.priceLabel}</strong> <span>${price}</span></div>
      </div>
      <button class="btn-primary" style="width:100%; padding:0.8rem;" onclick="speakKorean('${item.nameKo}')">
        🔊 ${t.hearNameBtn}
      </button>
    `;
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

// ============================================================================
// Speech Synthesis (Audio Pronunciation)
// ============================================================================

function speakKorean(text) {
  if (!('speechSynthesis' in window)) {
    showToast(currentLang === 'en' ? 'Speech audio is not supported in this browser.' : '음성 재생을 지원하지 않는 브라우저입니다.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
  showToast(currentLang === 'en' ? `Speaking: "${text}"` : `발음 재생 중: "${text}"`);
}

// ============================================================================
// Toast Notification
// ============================================================================

let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ============================================================================
// Event Listeners & Initialization
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Load saved places
  loadSavedPlaces();

  // 2. Load Language Preference (Default: 'en')
  const savedLang = localStorage.getItem('andong_lang') || 'en';
  setLanguage(savedLang);

  // 3. Language Toggle Button Event
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  // 4. Tab Navigation
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetTab = tab.getAttribute('data-tab');

      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) activePane.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // 5. Attraction Category Filters
  const attractionPills = document.querySelectorAll('#attractionFilterGroup .pill');
  attractionPills.forEach(pill => {
    pill.addEventListener('click', () => {
      attractionPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      const searchVal = document.getElementById('searchInput').value.trim().toLowerCase();
      renderAttractions(filter, searchVal);
    });
  });

  // 6. Cuisine Category Filters
  const cuisinePills = document.querySelectorAll('#cuisineFilterGroup .pill');
  cuisinePills.forEach(pill => {
    pill.addEventListener('click', () => {
      cuisinePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      const searchVal = document.getElementById('searchInput').value.trim().toLowerCase();
      renderCuisines(filter, searchVal);
    });
  });

  // 7. Live Search Input
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = val ? 'block' : 'none';

    const activeAttPill = document.querySelector('#attractionFilterGroup .pill.active');
    const attFilter = activeAttPill ? activeAttPill.getAttribute('data-filter') : 'all';
    renderAttractions(attFilter, val);

    const activeCuisinePill = document.querySelector('#cuisineFilterGroup .pill.active');
    const cuisineFilter = activeCuisinePill ? activeCuisinePill.getAttribute('data-filter') : 'all';
    renderCuisines(cuisineFilter, val);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    const activeAttPill = document.querySelector('#attractionFilterGroup .pill.active');
    renderAttractions(activeAttPill ? activeAttPill.getAttribute('data-filter') : 'all', '');
    const activeCuisinePill = document.querySelector('#cuisineFilterGroup .pill.active');
    renderCuisines(activeCuisinePill ? activeCuisinePill.getAttribute('data-filter') : 'all', '');
  });

  // 8. Theme Toggle (Light / Dark)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = themeToggleBtn.querySelector('.theme-icon');
  
  const savedTheme = localStorage.getItem('andong_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

  themeToggleBtn.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    themeIcon.textContent = next === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('andong_theme', next);
    showToast(currentLang === 'en' ? `Switched to ${next} theme` : `${next === 'dark' ? '다크' : '라이트'} 모드로 전환되었습니다`);
  });

  // 9. Saved Drawer Toggle
  const bookmarkDrawerBtn = document.getElementById('bookmarkDrawerBtn');
  const savedDrawer = document.getElementById('savedDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const clearAllSavedBtn = document.getElementById('clearAllSavedBtn');

  bookmarkDrawerBtn.addEventListener('click', () => {
    renderSavedDrawerList();
    savedDrawer.classList.add('active');
    savedDrawer.setAttribute('aria-hidden', 'false');
  });

  closeDrawerBtn.addEventListener('click', () => {
    savedDrawer.classList.remove('active');
    savedDrawer.setAttribute('aria-hidden', 'true');
  });

  savedDrawer.addEventListener('click', (e) => {
    if (e.target === savedDrawer) {
      savedDrawer.classList.remove('active');
    }
  });

  clearAllSavedBtn.addEventListener('click', () => {
    if (savedPlaces.length === 0) return;
    savedPlaces = [];
    savePlacesToStorage();
    renderAttractions();
    renderCuisines();
    renderSavedDrawerList();
    showToast(currentLang === 'en' ? 'Cleared all saved items' : '보관함이 모두 비워졌습니다');
  });

  // 10. Taxi Modal Handlers
  document.getElementById('closeTaxiModalBtn').addEventListener('click', closeTaxiModal);
  document.getElementById('taxiModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('taxiModal')) closeTaxiModal();
  });

  document.getElementById('copyAddressBtn').addEventListener('click', () => {
    if (currentTaxiItem) {
      const txt = `${currentTaxiItem.nameKo} (${currentTaxiItem.addressKo})`;
      navigator.clipboard.writeText(txt).then(() => {
        showToast(I18N[currentLang].toastCopied);
      }).catch(() => {
        showToast(I18N[currentLang].toastCopied);
      });
    }
  });

  document.getElementById('speechTaxiBtn').addEventListener('click', () => {
    if (currentTaxiItem) {
      speakKorean(`${currentTaxiItem.nameKo}로 가주세요.`);
    }
  });

  // 11. Detail Modal Handlers
  document.getElementById('closeDetailModalBtn').addEventListener('click', closeDetailModal);
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailModal')) closeDetailModal();
  });
});
