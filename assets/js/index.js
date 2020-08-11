jQuery(document).ready(function () {
    //Set data
    //start of state
    var state = [{
        value: "Yangon",
        label: "Yangon (ရန်ကုန်တိုင်းဒေသကြီး)"
    },
    {
        value: "Mandalay",
        label: "Mandalay (မန္တလေးတိုင်းဒေသကြီး)"
    },
    {
        value: "Magway",
        label: "Magway (မကွေးတိုင်းဒေသကြီး)"
    },
    {
        value: "Naypyidaw",
        label: "Naypyidaw (နေပြည်တော် ပြည်ထောင်စုနယ်မြေ)"
    },
    {
        value: "Ayeyarwady",
        label: "Ayeyarwady (ဧရာဝတီတိုင်းဒေသကြီး)"
    },
    {
        value: "Bago",
        label: "Bago (ပဲခူးတိုင်းဒေသကြီး)"
    },
    {
        value: "Sagaing",
        label: "Sagaing (စစ်ကိုင်းတိုင်းဒေသကြီး)"
    },
    {
        value: "Tanintharyi",
        label: "Tanintharyi (တနင်္သာရီတိုင်းဒေသကြီး)"
    },
    {
        value: "East_Shan",
        label: "East Shan State (အရှေ့ရှမ်းပြည်နယ်)"
    },
    {
        value: "North_Shan",
        label: "North Shan State (ရှမ်းပြည်နယ်မြောက်ပိုင်း )"
    },
    {
        value: "South_Shan",
        label: "South Shan State (တောင်ပိုင်းရှမ်းပြည်နယ်)"
    },
    {
        value: "Kachin",
        label: "Kachin State (ကချင်ပြည်နယ်)"
    },
    {
        value: "Kayin",
        label: "Kayin State (ကရင်ပြည်နယ်)"
    },
    {
        value: "Mon",
        label: "Mon State (မွန်ပြည်နယ်)"
    },
    {
        value: "Chin",
        label: "Chin State (ချင်းပြည်နယ်)"
    },
    {
        value: "Rakhine",
        label: "Rakhine State (ရခိုင်ပြည်နယ်)"
    },
    {
        value: "Kayah",
        label: "Kayah State (ကယားပြည်နယ်)"
    }];
    //End of state


    //Start of City
    var city = [
        //Yangon
        {
            value: "Botataung",
            label: "Botataung (ဗိုလ်တထောင်)",
            state: "Yangon"
        }, {
            value: "Dagon_Seikkan",
            label: "Dagon Seikkan (ဒဂုံဆိပ်ကမ်း)",
            state: "Yangon"
        }, {
            value: "East_Dagon",
            label: "East Dagon (အရှေ့ဒဂုံ)",
            state: "Yangon"
        }, {
            value: "North_Dagon",
            label: "North Dagon (မြောက်ဒဂုံ)",
            state: "Yangon"
        }, {
            value: "South_Dagon",
            label: "South Dagon (တောင်ဒဂုံ)",
            state: "Yangon"
        }, {
            value: "North_Okkalapa",
            label: "North Okkalapa (မြောက်ဥက္ကလာပ)",
            state: "Yangon"
        }, {
            value: "South_Okkalapa",
            label: "South Okkalapa (တောင်ဥက္ကလာပ)",
            state: "Yangon"
        }, {
            value: "Pazundaung",
            label: "Pazundaung (ပုဇွန်တောင်)",
            state: "Yangon"
        }, {
            value: "Thingangyun",
            label: "Thingangyun (သင်္ဃန်းကျွန်း)",
            state: "Yangon"
        }, {
            value: "Dawbon",
            label: "Dawbon (ဒေါပုံ)",
            state: "Yangon"
        }, {
            value: "Mingalar_Taungnyunt",
            label: "Mingalar Taungnyunt (မင်္ဂလာတောင်ညွှန့်)",
            state: "Yangon"
        }, {
            value: "Tamwe",
            label: "Tamwe (တာမွေ)",
            state: "Yangon"
        }, {
            value: "Thaketa",
            label: "Thaketa (သာကေတ)",
            state: "Yangon"
        }, {
            value: "Yankin",
            label: "Yankin (ရန်ကင်း)",
            state: "Yangon"
        }, {
            value: "Hlaing_Tharyar",
            label: "Hlaing Tharyar (လှိုင်သာယာ)",
            state: "Yangon"
        }, {
            value: "Insein",
            label: "Insein (အင်းစိန်)",
            state: "Yangon"
        }, {
            value: "Mingalardon",
            label: "Mingalardon (မင်္ဂလာဒုံ)",
            state: "Yangon"
        }, {
            value: "Shwepyitha",
            label: "Shwepyitha (ရွှေပြည်သာ)",
            state: "Yangon"
        }, {
            value: "Hlegu",
            label: "Hlegu (လှည်းကူး)",
            state: "Yangon"
        }, {
            value: "Hmawbi",
            label: "Hmawbi (မှော်ဘီ)",
            state: "Yangon"
        }, {
            value: "Htantabin",
            label: "Htantabin (ထန်းတပင်)",
            state: "Yangon"
        }, {
            value: "Taikkyi",
            label: "Taikkyi (တိုက်ကြီး)",
            state: "Yangon"
        }, {
            value: "Dala",
            label: "Dala (ဒလ)",
            state: "Yangon"
        }, {
            value: "Seikkyi_Kanaungto",
            label: "Seikkyi Kanaungto (ဆိပ်ကြီးခနောင်တို)",
            state: "Yangon"
        }, {
            value: "Cocokyun",
            label: "Cocokyun (ကိုကိုးကျွန်း)",
            state: "Yangon"
        }, {
            value: "Kawhmu",
            label: "Kawhmu (ကော့မှူး)",
            state: "Yangon"
        }, {
            value: "Kayan",
            label: "Kayan (ခရမ်း)",
            state: "Yangon"
        }, {
            value: "Kungyangon",
            label: "Kungyangon (ကွမ်းခြံကုန်း)",
            state: "Yangon"
        }, {
            value: "Kyauktan",
            label: "Kyauktan (ကျောက်တန်း)",
            state: "Yangon"
        }, {
            value: "Thanlyi",
            label: "Thanlyi (သန်လျင်)",
            state: "Yangon"
        }, {
            value: "Thongwa",
            label: "Thongwa (သုံးခွ)",
            state: "Yangon"
        }, {
            value: "Twante",
            label: "Twante (တွံတေး)",
            state: "Yangon"
        }, {
            value: "Ahlon",
            label: "Ahlon (အလုံ)",
            state: "Yangon"
        }, {
            value: "Bahan",
            label: "Bahan (ဗဟန်း)",
            state: "Yangon"
        }, {
            value: "Dagon",
            label: "Dagon (ဒဂုံ)",
            state: "Yangon"
        }, {
            value: "Kyauktada",
            label: "Kyauktada (ကျောက်တံတား)",
            state: "Yangon"
        }, {
            value: "Kyimyindaing",
            label: "Kyimyindaing (ကြည့်မြင်တိုင်)",
            state: "Yangon"
        }, {
            value: "Lanmadaw",
            label: "Lanmadaw (လမ်းမတော်)",
            state: "Yangon"
        }, {
            value: "Latha",
            label: "Latha (လသာ)",
            state: "Yangon"
        }, {
            value: "Pabedan",
            label: "Pabedan (ပန်းပဲတန်း)",
            state: "Yangon"
        }, {
            value: "Sanchaung",
            label: "Sanchaung (စမ်းချောင်း)",
            state: "Yangon"
        }, {
            value: "Seikkan",
            label: "Seikkan (ဆိပ်ကမ်း)",
            state: "Yangon"
        }, {
            value: "Hlaing",
            label: "Hlaing (လှိုင်)",
            state: "Yangon"
        }, {
            value: "Kamayut",
            label: "Kamayut (ကမာရွတ်)",
            state: "Yangon"
        }, {
            value: "Mayangon",
            label: "Mayangon (မရမ်းကုန်း)",
            state: "Yangon"
        },
        //Mandalay
        {
            value: "Kyaukse",
            label: "Kyaukse (ကျောက်ဆည်မြို့)",
            state: "Mandalay"
        },
        {
            value: "Mandalay",
            label: "Mandalay (မန္တလေးမြို့)",
            state: "Mandalay"
        },
        {
            value: "Myittha",
            label: "Myittha (မြစ်သားမြို့)",
            state: "Mandalay"
        },
        {
            value: "Sintgaing",
            label: "Sintgaing (စဉ့်ကိုင်)",
            state: "Mandalay"
        },
        {
            value: "Tada_U",
            label: "Tada_U (တံတားဦး)",
            state: "Mandalay"
        },
        {
            value: "Amarapura",
            label: "Amarapura (အမရပူရ)",
            state: "Mandalay"
        },
        {
            value: "Aungmyethazan",
            label: "Aungmyethazan (အောင်မြေသာစံ)",
            state: "Mandalay"
        },
        {
            value: "Chanayethazan",
            label: "Chanayethazan (ချမ်းအေးသာစံ)",
            state: "Mandalay"
        },
        {
            value: "Chanmyathazi",
            label: "Chanmyathazi (ချမ်းမြသာစည်)",
            state: "Mandalay"
        },
        {
            value: "Mahaaungmye",
            label: "Mahaaungmye (မဟာအောင်မြေ)",
            state: "Mandalay"
        },
        {
            value: "Patheingyi",
            label: "Patheingyi (ပုသိမ်ကြီး)",
            state: "Mandalay"
        },
        {
            value: "Pyigyidagun",
            label: "Pyigyidagun (ပြည်ကြီးတံခွန်)",
            state: "Mandalay"
        },
        {
            value: "Mahlaing",
            label: "Mahlaing (မလှိုင်)",
            state: "Mandalay"
        },
        {
            value: "Meiktila",
            label: "Meiktila (မိတ္ထီလာ)",
            state: "Mandalay"
        },
        {
            value: "Thazi",
            label: "Thazi (သာစည်)",
            state: "Mandalay"
        },
        {
            value: "Wundwin",
            label: "Wundwin (ဝမ်းတွင်း)",
            state: "Mandalay"
        },
        {
            value: "Myingyan",
            label: "Myingyan (မြင်းခြံ)",
            state: "Mandalay"
        },
        {
            value: "Natogyi",
            label: "Natogyi (နတ်မောက်)",
            state: "Mandalay"
        },
        {
            value: "Nganzun",
            label: "Nganzun (ငါန်းဇွန်)",
            state: "Mandalay"
        },
        {
            value: "Thaungtha",
            label: "Thaungtha (တောင်သာ)",
            state: "Mandalay"
        },
        {
            value: "Nyaung_U",
            label: "Nyaung-U (ညောင်ဦး)",
            state: "Mandalay"
        },
        {
            value: "Kyaukpadaung",
            label: "Kyaukpadaung (ကျောက်ပန်းတောင်း)",
            state: "Mandalay"
        },
        {
            value: "Ngathayauk",
            label: "Ngathayauk (ငါ့သရောက်)",
            state: "Mandalay"
        },
        {
            value: "Madaya",
            label: "Madaya (မတ္တရာ)",
            state: "Mandalay"
        },
        {
            value: "Mogok",
            label: "Mogok (မိုးကုတ်)",
            state: "Mandalay"
        },
        {
            value: "Pyinoolwin",
            label: "Pyinoolwin (ပြင်ဦးလွင်)",
            state: "Mandalay"
        },
        {
            value: "Singu",
            label: "Singu (စဉ့်ကူ)",
            state: "Mandalay"
        },
        {
            value: "Thabeikkyin",
            label: "Thabeikkyin (သပိတ်ကျင်း)",
            state: "Mandalay"
        },
        {
            value: "Tagaung",
            label: "Tagaung (တကောင်း)",
            state: "Mandalay"
        },
        {
            value: "Pyawbwe",
            label: "Pyawbwe (ပျော်ဘွယ်)",
            state: "Mandalay"
        },
        {
            value: "Yamethin",
            label: "Yamethin (ရမည်းသင်း)",
            state: "Mandalay"
        },
        //Naypyidaw
        {
            value: "Dekkhinathiri",
            label: "Dekkhinathiri (ဒက္ခိဏသီရိ)",
            state: "Naypyidaw"
        },
        {
            value: "Lewe",
            label: "Lewe (လယ်ဝေး)",
            state: "Naypyidaw"
        },
        {
            value: "Pyinmana",
            label: "Pyinmana (ပျဉ်းမနား)",
            state: "Naypyidaw"
        },
        {
            value: "Zabuthiri",
            label: "Zabuthiri (ဇမ္မူသီရိ)",
            state: "Naypyidaw"
        },
        {
            value: "Naypyidaw",
            label: "Naypyidaw (နေပြည်တော်)",
            state: "Naypyidaw"
        },
        {
            value: "Ottarathiri",
            label: "Ottarathiri (ဥတ္တရသီရိ)",
            state: "Naypyidaw"
        },
        {
            value: "Pobbathiri",
            label: "Pobbathiri (ပုပ္ဗသီရိ)",
            state: "Naypyidaw"
        },
        {
            value: "Tatkon",
            label: "Tatkon (တပ်ကုန်း)",
            state: "Naypyidaw"
        },
        {
            value: "Zeyarthiri",
            label: "Zeyarthiri (ဇေယျာသီရိ)",
            state: "Naypyidaw"
        },
        //Ayeyarwady
        {
            value: "Hinthada",
            label: "Hinthada (ဟင်္သာတ)",
            state: "Ayeyarwady"
        },
        {
            value: "Lemyethna",
            label: "Lemyethna (လေးမျက်နှာ)",
            state: "Ayeyarwady"
        },
        {
            value: "Zalun",
            label: "Zalun (ဇလွန်)",
            state: "Ayeyarwady"
        },
        {
            value: "Ingapu",
            label: "Ingapu (အင်္ဂပူ)",
            state: "Ayeyarwady"
        },
        {
            value: "Kyangin",
            label: "Kyangin (ကြံခင်း)",
            state: "Ayeyarwady"
        },
        {
            value: "Myanaung",
            label: "Myanaung (မြောင်းမြ)",
            state: "Ayeyarwady"
        },
        {
            value: "Labutta",
            label: "Labutta (လပွတ္တာ)",
            state: "Ayeyarwady"
        },
        {
            value: "Mawlamyinegyun",
            label: "Mawlamyinegyun (မော်လမြိုင်ကျွန်း)",
            state: "Ayeyarwady"
        },
        {
            value: "Pyinsalu",
            label: "Pyinsalu (ပြင်စလူခွဲ)",
            state: "Ayeyarwady"
        },
        {
            value: "Danuphyu",
            label: "Danuphyu (ဓနုဖြူ)",
            state: "Ayeyarwady"
        },
        {
            value: "Ma_ubin",
            label: "Ma-ubin (မအူပင်)",
            state: "Ayeyarwady"
        },
        {
            value: "Nyaungdon",
            label: "Nyaungdon (ညောင်တုန်း)",
            state: "Ayeyarwady"
        },
        {
            value: "Pantanaw",
            label: "Pantanaw (ပန်းတနော်)",
            state: "Ayeyarwady"
        },
        {
            value: "Einme",
            label: "Einme (အိမ်မဲ)",
            state: "Ayeyarwady"
        },
        {
            value: "Wakema",
            label: "Wakema (ဝါးခယ်မ)",
            state: "Ayeyarwady"
        },
        {
            value: "Kangyidaunk",
            label: "Kangyidaunk (ကန်ကြီးတောင့်)",
            state: "Ayeyarwady"
        },
        {
            value: "Ngapudaw",
            label: "Ngapudaw (ငပုတော)",
            state: "Ayeyarwady"
        },
        {
            value: "Pathein",
            label: "Pathein (ပုသိမ်မြို့)",
            state: "Ayeyarwady"
        },
        {
            value: "Thabaung",
            label: "Thabaung (သာပေါင်း)",
            state: "Ayeyarwady"
        },
        {
            value: "Kyaunggon",
            label: "Kyaunggon (ကျောင်းကုန်း)",
            state: "Ayeyarwady"
        },
        {
            value: "Kyonpyaw",
            label: "Kyonpyaw (ကျုံပျော်)",
            state: "Ayeyarwady"
        },
        {
            value: "Yekyi",
            label: "Yekyi (ရေကြီး)",
            state: "Ayeyarwady"
        },
        {
            value: "Ngayokaung",
            label: "Ngayokaung (ငရုပ်ကောင်း)",
            state: "Ayeyarwady"
        },
        {
            value: "Hainggyikyun",
            label: "Hainggyikyun (ဟိုင်းကြီးကျွန်း)",
            state: "Ayeyarwady"
        },
        {
            value: "Shwethaungyan",
            label: "Shwethaungyan (ရွှေသာယန်ကျေးရွာအုပ်ချုပ်ရေးမှူး)",
            state: "Ayeyarwady"
        },
        {
            value: "Ngwehsaung",
            label: "Ngwehsaung (ငွေဆောင်)",
            state: "Ayeyarwady"
        },
        {
            value: "Chaungthar",
            label: "Chaungthar (ချောင်းသာ)",
            state: "Ayeyarwady"
        },
        {
            value: "Ngathaingchaung",
            label: "Ngathaingchaung (ငသိုင်းချောင်းခွဲ)",
            state: "Ayeyarwady"
        },
        {
            value: "Bogale",
            label: "Bogale (ဘိုကလေး)",
            state: "Ayeyarwady"
        },
        {
            value: "Dedaye",
            label: "Dedaye (ဒေးဒရဲ)",
            state: "Ayeyarwady"
        },
        {
            value: "Kyaiklat",
            label: "Kyaiklat (ကျိုက်လတ်)",
            state: "Ayeyarwady"
        },
        {
            value: "Pyapon",
            label: "Pyapon (ဖျာပုံ)",
            state: "Ayeyarwady"
        },
        {
            value: "Ahmar",
            label: "Ahmar (အမာခွဲ)",
            state: "Ayeyarwady"
        },
        //Bago
        {
            value: "Bago",
            label: "Bago (ပဲခူး)",
            state: "Bago"
        },
        {
            value: "Daik_U",
            label: "Daik-U (ဒိုက်ဦး)",
            state: "Bago"
        },
        {
            value: "Kawa",
            label: "Kawa (ကဝ)",
            state: "Bago"
        },
        {
            value: "Nyaunglebin",
            label: "Nyaunglebin (ညောင်လေးပင်)",
            state: "Bago"
        },
        {
            value: "Shwegyin",
            label: "Shwegyin (ရွှေကျင်)",
            state: "Bago"
        },
        {
            value: "Thanatpin",
            label: "Thanatpin (သနပ္်ပင်)",
            state: "Bago"
        },
        {
            value: "Waw",
            label: "Waw (ဝေါ)",
            state: "Bago"
        },
        {
            value: "Kyauktaga",
            label: "Kyauktaga (ကျောက်တံခါး)",
            state: "Bago"
        },
        {
            value: "Hpayargyi",
            label: "Hpayargyi (ဘုရားကြီး)",
            state: "Bago"
        },
        {
            value: "Pyuntaza",
            label: "Pyuntaza (ပြွန်တန်ဆာခွဲ)",
            state: "Bago"
        },
        {
            value: "Madauk",
            label: "Madauk (မဒေါက်)",
            state: "Bago"
        },

        {
            value: "Penwegon",
            label: "Penwegon (ပဲနွယ်ကုန်းခွဲ)",
            state: "Bago"
        },
        {
            value: "Aungmyin",
            label: "Aungmyin (အောင်မြေ)",
            state: "Bago"
        },
        {
            value: "Kyaukkyi",
            label: "Kyaukkyi (ကျောက်ကြီး)",
            state: "Bago"
        },
        {
            value: "Oktwin",
            label: "Oktwin (အုတ်တွင်း)",
            state: "Bago"
        },
        {
            value: "Pyu",
            label: "Pyu (ပျူ)",
            state: "Bago"
        },
        {
            value: "Tantabin",
            label: "Tantabin (ထန်းတပင်)",
            state: "Bago"
        },
        {
            value: "Taungoo",
            label: "Taungoo (တောင်ငူ)",
            state: "Bago"
        },
        {
            value: "Yedashe",
            label: "Yedashe (ရေတာရှည်)",
            state: "Bago"
        },
        {
            value: "Kanyutkwin",
            label: "Kanyutkwin (ကညွတ်ကွင်း)",
            state: "Bago"
        },
        {
            value: "Nyaungbinthar",
            label: "Nyaungbinthar (ညောင်ပင်သာ)",
            state: "Bago"
        },
        {
            value: "Kywebwe",
            label: "Kywebwe (ကျွဲပွဲ)",
            state: "Bago"
        },
        {
            value: "Padaung",
            label: "Padaung (ပန်းတောင်း)",
            state: "Bago"
        },
        {
            value: "Paukkaung",
            label: "Paukkaung (ပေါက်ခေါင်း)",
            state: "Bago"
        },
        {
            value: "Paungde",
            label: "Paungde (ပေါင်းတည်)",
            state: "Bago"
        },
        {
            value: "Pyay",
            label: "Pyay (ပြည်)",
            state: "Bago"
        },
        {
            value: "Shwedaung",
            label: "Shwedaung (ရွှေတောင်)",
            state: "Bago"
        },
        {
            value: "Thegon",
            label: "Thegon (သဲကုန်း)",
            state: "Bago"
        },
        {
            value: "Innma",
            label: "Innma (အင်းမ)",
            state: "Bago"
        },
        {
            value: "Padigone",
            label: "Padigone (ပုတီးကုန်း)",
            state: "Bago"
        },
        {
            value: "Sinmezwe",
            label: "Sinmezwe (ဆင်မြီးဆွဲ)",
            state: "Bago"
        },
        {
            value: "Paungdale",
            label: "Paungdale (ပေါင်းတလည်)",
            state: "Bago"
        },
        {
            value: "Gyobingauk",
            label: "Gyobingauk (ကြို့ပင်ကောက်)",
            state: "Bago"
        },
        {
            value: "Letpadan",
            label: "Letpadan (လက်ပတန်းမြို့)",
            state: "Bago"
        },
        {
            value: "Minhla",
            label: "Minhla (မင်းလှ)",
            state: "Bago"
        },
        {
            value: "Monyo",
            label: "Monyo (မိုးညို)",
            state: "Bago"
        },
        {
            value: "Okpho",
            label: "Okpho (အုတ်ဖို)",
            state: "Bago"
        },
        {
            value: "Tharrawaddy",
            label: "Tharrawaddy (သာရ၀တီ)",
            state: "Bago"
        },
        {
            value: "Nattalin",
            label: "Nattalin (နတ်တလင်း)",
            state: "Bago"
        },
        {
            value: "Zigon",
            label: "Zigon (ဇီးကုန်း)",
            state: "Bago"
        },
        {
            value: "Thonze",
            label: "Thonze (သုံးဆယ်)",
            state: "Bago"
        },
        {
            value: "Ooethegone",
            label: "Ooethegone (အိုးသည်ကုန်း)",
            state: "Bago"
        },
        {
            value: "Sitkwin",
            label: "Sitkwin (စစ်ကွင်း)",
            state: "Bago"
        },
        {
            value: "Tapun",
            label: "Tapun (တာပွန်)",
            state: "Bago"
        },
        //Sagaing
        {
            value: "Hkamti",
            label: "Hkamti (ခန္တီး)",
            state: "Sagaing"
        },
        {
            value: "Homalin",
            label: "Homalin (ဟုမ္မလင်း)",
            state: "Sagaing"
        },
        {
            value: "Leshi",
            label: "Leshi (လေရှီး)",
            state: "Sagaing"
        },
        {
            value: "Nanyun",
            label: "Nanyun (နန်းယွန်း)",
            state: "Sagaing"
        },
        {
            value: "Donhee",
            label: "Donhee (ဒုံဟီး)",
            state: "Sagaing"
        },
        {
            value: "Htanparkway",
            label: "Htanparkway (ထန်ပါခွေ)",
            state: "Sagaing"
        },
        {
            value: "Pansaung",
            label: "Pansaung (ပန်ဆောင်)",
            state: "Sagaing"
        },
        {
            value: "Kanbalu",
            label: "Kanbalu (ကန့်ဘလူ)",
            state: "Sagaing"
        },
        {
            value: "Kyunhla",
            label: "Kyunhla (ကျွန်းလှ)",
            state: "Sagaing"
        },
        {
            value: "Taze",
            label: "Taze (တန့်ဆည်)",
            state: "Sagaing"
        },
        {
            value: "Ye_U",
            label: "Ye-U (ရေဦး)",
            state: "Sagaing"
        },
        {
            value: "Kale",
            label: "Kale (ကလေး)",
            state: "Sagaing"
        },
        {
            value: "Kalewa",
            label: "Kalewa (ကလေးဝ)",
            state: "Sagaing"
        },
        {
            value: "Mingin",
            label: "Mingin (မင်းကင်း)",
            state: "Sagaing"
        },
        {
            value: "Banmauk",
            label: "Banmauk (ဗန်းမောက်)",
            state: "Sagaing"
        },
        {
            value: "Indaw",
            label: "Indaw (အင်းတော်)",
            state: "Sagaing"
        },
        {
            value: "Katha",
            label: "Katha (ကသာ)",
            state: "Sagaing"
        },
        {
            value: "Kawlin",
            label: "Kawlin (ကောလင်)",
            state: "Sagaing"
        },
        {
            value: "Pinlebu",
            label: "Pinlebu (ပင်လည်ဘူး)",
            state: "Sagaing"
        },
        {
            value: "Tigyaing",
            label: "Tigyaing (ထီးချိုင့်)",
            state: "Sagaing"
        },
        {
            value: "Wuntho",
            label: "Wuntho (ဝန်းသို)",
            state: "Sagaing"
        },
        {
            value: "Mawlaik",
            label: "Mawlaik (မော်လိုက်)",
            state: "Sagaing"
        },
        {
            value: "Paungbyin",
            label: "Paungbyin (ဖေါင်းပြင်)",
            state: "Sagaing"
        },
        {
            value: "Ayadaw",
            label: "Ayadaw (အရာတော်)",
            state: "Sagaing"
        },
        {
            value: "Budalin",
            label: "Budalin (ဘုတလင်)",
            state: "Sagaing"
        },
        {
            value: "Chaung_U",
            label: "Chaung-U (ချောင်းဦး)",
            state: "Sagaing"
        },
        {
            value: "Monywa",
            label: "Monywa (မုံရွာ)",
            state: "Sagaing"
        },
        {
            value: "Myaung",
            label: "Myaung (မြှောင်)",
            state: "Sagaing"
        },
        {
            value: "Myinmu",
            label: "Myinmu (မြင်းမူ)",
            state: "Sagaing"
        },
        {
            value: "Sagaing",
            label: "Sagaing (စစ်ကိုင်း)",
            state: "Sagaing"
        },
        {
            value: "Khin_U",
            label: "Khin-U (ခင်ဦး)",
            state: "Sagaing"
        },
        {
            value: "Shwebo",
            label: "Shwebo (ရွှေဘို)",
            state: "Sagaing"
        },
        {
            value: "Wetlet",
            label: "Wetlet (ဝက်လက်)",
            state: "Sagaing"
        },
        {
            value: "Tabayin",
            label: "Tabayin (ဒီပဲယင်း)",
            state: "Sagaing"
        },
        {
            value: "Kyaukmyaung",
            label: "Kyaukmyaung (ကျောက်မြောင်း)",
            state: "Sagaing"
        },
        {
            value: "Tamu",
            label: "Tamu (တမူး)",
            state: "Sagaing"
        },
        {
            value: "Khampat",
            label: "Khampat (ခန်းပတ်)",
            state: "Sagaing"
        },
        {
            value: "Myothit",
            label: "Myothit (မြို့သစ်)",
            state: "Sagaing"
        },
        {
            value: "Kani",
            label: "Kani (ကနီ)",
            state: "Sagaing"
        },
        {
            value: "Pale",
            label: "Pale (ပုလဲ)",
            state: "Sagaing"
        },
        {
            value: "Salingyi",
            label: "Salingyi (ဆားလင်းကြီး)",
            state: "Sagaing"
        },
        {
            value: "Yinmabin",
            label: "Yinmabin (ယင်းမာပင်)",
            state: "Sagaing"
        },
        //Magway
        {
            value: "Gangaw",
            label: "Gangaw (ဂန့်ဂေါ)",
            state: "Magway"
        },
        {
            value: "Saw",
            label: "Saw (စော)",
            state: "Magway"
        },
        {
            value: "Tilin",
            label: "Tilin (ထီးလင်း)",
            state: "Magway"
        },
        {
            value: "Chauck",
            label: "Chauck (ချောက်)",
            state: "Magway"
        },
        {
            value: "Magway",
            label: "Magway (မကွေးမြို့)",
            state: "Magway"
        },
        {
            value: "Natmauk",
            label: "Natmauk (နတ်မောက်)",
            state: "Magway"
        },
        {
            value: "Taungdwingyi",
            label: "Taungdwingyi (တောင်တွင်းကြီး)",
            state: "Magway"
        },
        {
            value: "Yenangyaung",
            label: "Yenangyaung (ရေနံချောင်း)",
            state: "Magway"
        },
        {
            value: "Minbu",
            label: "Minbu (မင်းဘူး)",
            state: "Magway"
        },
        {
            value: "Ngape",
            label: "Ngape (ငဖဲ)",
            state: "Magway"
        },
        {
            value: "Pwintbyu",
            label: "Pwintbyu (ပွင့်ဖြူ)",
            state: "Magway"
        },
        {
            value: "Salin",
            label: "Salin (စလင်း)",
            state: "Magway"
        },
        {
            value: "Myaing",
            label: "Myaing (မြိုင်)",
            state: "Magway"
        },
        {
            value: "Pakokku",
            label: "Pakokku (ပခုက္ကူ)",
            state: "Magway"
        },
        {
            value: "Pauk",
            label: "Pauk (ပေါက်)",
            state: "Magway"
        },
        {
            value: "Seikphyu",
            label: "Seikphyu (ဆိပ်ဖြူ)",
            state: "Magway"
        },
        {
            value: "Yesagyo",
            label: "Yesagyo (ရေစကြို)",
            state: "Magway"
        },
        {
            value: "Aunglan",
            label: "Aunglan (အောင်လံ)",
            state: "Magway"
        },
        {
            value: "Kamma",
            label: "Kamma (ကမ္မ)",
            state: "Magway"
        },
        {
            value: "Mindon",
            label: "Mindon (မင်းတုန်း)",
            state: "Magway"
        },
        {
            value: "Minhla",
            label: "Minhla (မင်းလှ)",
            state: "Magway"
        },
        {
            value: "Sinbaungwe",
            label: "Sinbaungwe (ဆင်ပေါင်ဝဲ)",
            state: "Magway"
        },
        {
            value: "Thayet",
            label: "Thayet (သရက်)",
            state: "Magway"
        },
        //Tanintharyi
        {
            value: "Dawei",
            label: "Dawei (ထားဝယ်)",
            state: "Tanintharyi"
        },
        {
            value: "Launglon",
            label: "Launglon (လောင်းလုံ)",
            state: "Tanintharyi"
        },
        {
            value: "Thayetchaung",
            label: "Thayetchaung (သရက်ချောင်း)",
            state: "Tanintharyi"
        },
        {
            value: "Yebyu",
            label: "Yebyu (ရေဖြူ)",
            state: "Tanintharyi"
        },
        {
            value: "Kaleinaung",
            label: "Kaleinaung (ကလိန်အောင်)",
            state: "Tanintharyi"
        },
        {
            value: "Myitta",
            label: "Myitta (မေတ္တာ)",
            state: "Tanintharyi"
        },
        {
            value: "Bokpyin",
            label: "Bokpyin (ဘုတ်ပြင်း)",
            state: "Tanintharyi"
        },
        {
            value: "Kawthoung",
            label: "Kawthoung (ကော့သောင်း)",
            state: "Tanintharyi"
        },
        {
            value: "Karathuri",
            label: "Karathuri (ကရသူရိ)",
            state: "Tanintharyi"
        },
        {
            value: "Khamaukgyi",
            label: "Khamaukgyi (ခမောက်ကြီး)",
            state: "Tanintharyi"
        },
        {
            value: "Pyigyimandaing",
            label: "Pyigyimandaing (ပြည်ကြီးမဏ္ဍိုင်)",
            state: "Tanintharyi"
        },
        {
            value: "Kyunsu",
            label: "Kyunsu (ကျွန်းစု)",
            state: "Tanintharyi"
        },
        {
            value: "Myeik",
            label: "Myeik (မြိတ်)",
            state: "Tanintharyi"
        },
        {
            value: "Palaw",
            label: "Palaw (ပုလော)",
            state: "Tanintharyi"
        },
        {
            value: "Palauk",
            label: "Palauk (ပလောက်)",
            state: "Tanintharyi"
        },
        //East_Shan
        {
            value: "Kengtung",
            label: "Kengtung (ကျိုင်းတုံ)",
            state: "East_Shan"
        },
        {
            value: "Mong_Khet",
            label: "Mong Khet (မိုင်းခတ်)",
            state: "East_Shan"
        },
        {
            value: "Mong_La",
            label: "Mong La (မိုင်းလား)",
            state: "East_Shan"
        },
        {
            value: "Mong_Yang",
            label: "Mong Yang (မိုင်းယန်း)",
            state: "East_Shan"
        },
        {
            value: "Mine_Pauk",
            label: "Mine Pauk (မိုင်းပေါက်)",
            state: "East_Shan"
        },
        {
            value: "Mong_Hpayak",
            label: "Mong Hpayak (မိုင်းဖြတ်)",
            state: "East_Shan"
        },
        {
            value: "Mong_Yawng",
            label: "Mong Yawng (မိုင်းယောင်း)",
            state: "East_Shan"
        },
        {
            value: "Mong_Hsat",
            label: "Mong Hsat (မိုင်းဆတ်)",
            state: "East_Shan"
        },
        {
            value: "Mong_Ping",
            label: "Mong Ping (မိုင်းပြင်း)",
            state: "East_Shan"
        },
        {
            value: "Mong_Tong",
            label: "Mong Tong (မိုင်းတုံ)",
            state: "East_Shan"
        },
        {
            value: "Tachileik",
            label: "Tachileik (တာချီလိတ်)",
            state: "East_Shan"
        },
        {
            value: "Minekoke",
            label: "Minekoke (မိုင်းကုတ်)",
            state: "East_Shan"
        },

        {
            value: "Ponparkyin",
            label: "Ponparkyin (ပုံပါကျင်)",
            state: "East_Shan"
        },
        //North Shan
        {
            value: "Hsipaw",
            label: "Hsipaw (သီပေါ)",
            state: "North_Shan"
        },
        {
            value: "Kyaukme",
            label: "Kyaukme (ကျောက်မဲ)",
            state: "North_Shan"
        },
        {
            value: "Mantong",
            label: "Mantong (မန်တုန်)",
            state: "North_Shan"
        },
        {
            value: "Namhsan",
            label: "Namhsan (နမ့်ဆန်)",
            state: "North_Shan"
        },
        {
            value: "Namtu",
            label: "Namtu (နမ္မတူ)",
            state: "North_Shan"
        },
        {
            value: "Nawnghkio",
            label: "Nawnghkio (နောင်ချို)",
            state: "North_Shan"
        },
        {
            value: "Hsenwi",
            label: "Hsenwi (သိန္နီ)",
            state: "North_Shan"
        },
        {
            value: "Lashio",
            label: "Lashio (လားရှိုး)",
            state: "North_Shan"
        },
        {
            value: "Mongyai",
            label: "Mongyai (မိုင်းရယ်)",
            state: "North_Shan"
        },
        {
            value: "Tangyan",
            label: "Tangyan (တန့်ယန်း)",
            state: "North_Shan"
        },
        {
            value: "Laukkaing",
            label: "Laukkaing (လောက်ကိုင်)",
            state: "North_Shan"
        },
        {
            value: "Konkyan",
            label: "Konkyan (ကုန်းကြမ်း)",
            state: "North_Shan"
        },
        {
            value: "Kutkai",
            label: "Kutkai (ကွတ်ခိုင်)",
            state: "North_Shan"
        },
        {
            value: "Muse",
            label: "Muse (မူဆယ်)",
            state: "North_Shan"
        },
        {
            value: "Namhkam",
            label: "Namhkam (နမ့်ခမ်း)",
            state: "North_Shan"
        },
        {
            value: "Hopang",
            label: "Hopang (ဟိုပုန်)",
            state: "North_Shan"
        },
        {
            value: "Mongmao",
            label: "Mongmao (မိုင်းမော)",
            state: "North_Shan"
        },
        {
            value: "Pangwaun",
            label: "Pangwaun (ပန်ဝိုင်)",
            state: "North_Shan"
        },
        {
            value: "Matman",
            label: "Matman (မက်မန်း)",
            state: "North_Shan"
        },
        {
            value: "Pangsang",
            label: "Pangsang (ပန်ဆန်း)",
            state: "North_Shan"
        },
        {
            value: "Mabein",
            label: "Mabein (မဘိမ်း)",
            state: "North_Shan"
        },
        {
            value: "Mongmit",
            label: "Mongmit (မိုးမိတ်)",
            state: "North_Shan"
        },
        //South Shan
        {
            value: "Langkho",
            label: "Langkho (လင်းခေး)",
            state: "South_Shan"
        },
        {
            value: "Mawkmai",
            label: "Mawkmai (မောက်မယ်)",
            state: "South_Shan"
        },
        {
            value: "Mong_Nai",
            label: "Mong Nai (မိုင်းနိုင်း)",
            state: "South_Shan"
        },
        {
            value: "Mong_Pan",
            label: "Mong Pan (မိုင်းပန်)",
            state: "South_Shan"
        },
        {
            value: "Kunhing",
            label: "Kunhing (ကွန်ဟိန်း)",
            state: "South_Shan"
        },
        {
            value: "Kyethi",
            label: "Kyethi (ကျေးသီး)",
            state: "South_Shan"
        },
        {
            value: "Lai_Hka",
            label: "Lai-Hka (လဲချား)",
            state: "South_Shan"
        },
        {
            value: "Loilen",
            label: "Loilen (လွိုင်လင်)",
            state: "South_Shan"
        },
        {
            value: "Mong_Hsu",
            label: "Mong Hsu (မိုင်းရှူး)",
            state: "South_Shan"
        },
        {
            value: "Mong_Kung",
            label: "Mong Kung (မိုင်းကိုင်)",
            state: "South_Shan"
        },
        {
            value: "Nansang",
            label: "Nansang (နမ့်စန်)",
            state: "South_Shan"
        },
        {
            value: "Hopong",
            label: "Hopong (ဟိုပုံး)",
            state: "South_Shan"
        },
        {
            value: "Hsi_Hseng",
            label: "Hsi Hseng (ဆီဆိုင်)",
            state: "South_Shan"
        },
        {
            value: "Kalaw",
            label: "Kalaw (ကလော)",
            state: "South_Shan"
        },
        {
            value: "Lawksawk",
            label: "Lawksawk (ရပ်စောက်)",
            state: "South_Shan"
        },
        {
            value: "Nyaungshwe",
            label: "Nyaungshwe (ညောင်ရွှေ)",
            state: "South_Shan"
        },
        {
            value: "Pekon",
            label: "Pekon (ဖယ်ခုံ)",
            state: "South_Shan"
        },
        {
            value: "Pingdaya",
            label: "Pingdaya (ပင်းတယ)",
            state: "South_Shan"
        },
        {
            value: "Pinlaung",
            label: "Pinlaung (ပင်လောင်း)",
            state: "South_Shan"
        },
        {
            value: "Taunggyi",
            label: "Taunggyi (တောင်ကြီး)",
            state: "South_Shan"
        },
        {
            value: "Ywangan",
            label: "Ywangan (ရှာငံ)",
            state: "South_Shan"
        },
        //Kachin
        {
            value: "Bhamo",
            label: "Bhamo (ဗန်းမော်)",
            state: "Kachin"
        },
        {
            value: "Mansi",
            label: "Mansi (မန်စီ)",
            state: "Kachin"
        },
        {
            value: "Momauk",
            label: "Momauk (မိုးမောက်)",
            state: "Kachin"
        },
        {
            value: "Shwegu",
            label: "Shwegu (ရွှေကူ)",
            state: "Kachin"
        },
        {
            value: "Hpakant",
            label: "Hpakant (ဖားကန့်)",
            state: "Kachin"
        },
        {
            value: "Mogaung",
            label: "Mogaung (မိုးကောင်း)",
            state: "Kachin"
        },
        {
            value: "Mohnyin",
            label: "Mohnyin (မိုးညှင်း)",
            state: "Kachin"
        },
        {
            value: "Chipwi",
            label: "Chipwi (ချီဗွေ)",
            state: "Kachin"
        },
        {
            value: "Hsawlaw",
            label: "Hsawlaw (ဆော့လော)",
            state: "Kachin"
        },
        {
            value: "Injangyang",
            label: "Injangyang (အင်ဂျန်းယန်)",
            state: "Kachin"
        },
        {
            value: "Myitkyina",
            label: "Myitkyina (မြစ်ကြီးနားမြို့)",
            state: "Kachin"
        },
        {
            value: "Tanai",
            label: "Tanai (တနိုင်း)",
            state: "Kachin"
        },
        {
            value: "Waingmaw",
            label: "Waingmaw (ဝိုင်းမော်)",
            state: "Kachin"
        },
        {
            value: "Kawnglanghpu",
            label: "Kawnglanghpu (ခေါင်လန်ဖူး)",
            state: "Kachin"
        },
        {
            value: "Machanbaw",
            label: "Machanbaw (မချမ်းဘေ)",
            state: "Kachin"
        },
        {
            value: "Nogmung",
            label: "Nogmung (နောင်မွန်း)",
            state: "Kachin"
        },
        {
            value: "Puta_O",
            label: "Puta-O (ပူတာအို)",
            state: "Kachin"
        },
        {
            value: "Sumprabum",
            label: "Sumprabum (ဆွမ်ပရာဘွမ်)",
            state: "Kachin"
        },
        //Kayin
        {
            value: "Hlaignbwe",
            label: "Hlaignbwe (လှိုင်ဘွဲ့)",
            state: "Kayin"
        },
        {
            value: "Hpa-an",
            label: "Hpa-an (ဘားအံ)",
            state: "Kayin"
        },
        {
            value: "Thandaunggyi",
            label: "Thandaunggyi (သံတောင်ကြီး)",
            state: "Kayin"
        },
        {
            value: "Hpapun",
            label: "Hpapun (ဖာပွန်)",
            state: "Kayin"
        },
        {
            value: "Kawkareik",
            label: "Kawkareik (ကော့ကရိတ်)",
            state: "Kayin"
        },
        {
            value: "Kyain_Seikgyi",
            label: "Kyain Seikgyi (ကြာအင်းဆိပ်ကြီး)",
            state: "Kayin"
        },
        {
            value: "Myawaddy",
            label: "Myawaddy (မြဝတီ)",
            state: "Kayin"
        },
        //Mon
        {
            value: "Chaungzon",
            label: "Chaungzon (ချောင်းဆုံ)",
            state: "Mon"
        },
        {
            value: "Kyaikmaraw",
            label: "Kyaikmaraw (ကျိုက်မရော)",
            state: "Mon"
        },
        {
            value: "Mawlamyine",
            label: "Mawlamyine (မော်လမြိုင်)",
            state: "Mon"
        },
        {
            value: "Mudon",
            label: "Mudon (မုဒုံ)",
            state: "Mon"
        },
        {
            value: "Thanbyuzayat",
            label: "Thanbyuzayat (သံဖြူဇရပ်)",
            state: "Mon"
        },
        {
            value: "Ye",
            label: "Ye (ရေး)",
            state: "Mon"
        },
        {
            value: "Bilin",
            label: "Bilin (ဘီလင်း)",
            state: "Mon"
        },
        {
            value: "Kyaikto",
            label: "Kyaikto (ကျိုက်ထို)",
            state: "Mon"
        },
        {
            value: "Paung",
            label: "Paung (ပေါင်)",
            state: "Mon"
        },
        {
            value: "Thaton",
            label: "Thaton (သထုံ)",
            state: "Mon"
        },
        //Chin
        {
            value: "Falam",
            label: "Falam (ဖလမ်း)",
            state: "Chin"
        },
        {
            value: "Tiddim",
            label: "Tiddim (တီးတိန်)",
            state: "Chin"
        },
        {
            value: "Ton_Zang",
            label: "Ton Zang (တွန်းဇံ)",
            state: "Chin"
        },
        {
            value: "Hakha",
            label: "Hakha (ဟားခါး)",
            state: "Chin"
        },
        {
            value: "Htantlang",
            label: "Htantlang (ထန်တလန်)",
            state: "Chin"
        },
        {
            value: "Kanpetlet",
            label: "Kanpetlet (ကန်ပက်လက်)",
            state: "Chin"
        },
        {
            value: "Matupi",
            label: "Matupi (မတူပီ)",
            state: "Chin"
        },
        {
            value: "Mindat",
            label: "Mindat (မင်းတပ်)",
            state: "Chin"
        },
        {
            value: "Paletwa",
            label: "Paletwa (ပလက်၀)",
            state: "Chin"
        },
        //Rakhine
        {
            value: "Ann",
            label: "Ann (အမ်း)",
            state: "Rakhine"
        },
        {
            value: "Kyaukpyu",
            label: "Kyaukpyu (ကျောက်ဖြူ)",
            state: "Rakhine"
        },
        {
            value: "Manaung",
            label: "Manaung (မာန်အောင်)",
            state: "Rakhine"
        },
        {
            value: "Ramree",
            label: "Ramree (ရမ်းဗြဲ)",
            state: "Rakhine"
        },
        {
            value: "Buthidaung",
            label: "Buthidaung (ဘူးသီးတောင်)",
            state: "Rakhine"
        },
        {
            value: "Maungdaw",
            label: "Maungdaw (မောင်တော)",
            state: "Rakhine"
        },
        {
            value: "Pauktaw",
            label: "Pauktaw (ပေါက်တော)",
            state: "Rakhine"
        },
        {
            value: "Ponnagyun",
            label: "Ponnagyun (ပုဏ္ဏားကျွန်း)",
            state: "Rakhine"
        },
        {
            value: "Rathedaung",
            label: "Rathedaung (ရသေ့တောင်)",
            state: "Rakhine"
        },
        {
            value: "Sittwe",
            label: "Sittwe (စစ်တွေ)",
            state: "Rakhine"
        },
        {
            value: "Gaw",
            label: "Gaw (ဂေါ)",
            state: "Rakhine"
        },
        {
            value: "Thandwe",
            label: "Thandwe (သံတွဲ)",
            state: "Rakhine"
        },
        {
            value: "Toungup",
            label: "Toungup (တောင်ကုတ်)",
            state: "Rakhine"
        },
        {
            value: "Kyauktaw",
            label: "Kyauktaw (ကျောက်တော်)",
            state: "Rakhine"
        },
        {
            value: "Minbya",
            label: "Minbya (မင်းပြား)",
            state: "Rakhine"
        },
        {
            value: "Mrauk_U",
            label: "Mrauk-U (မြောက်ဦး)",
            state: "Rakhine"
        },
        {
            value: "Myebon",
            label: "Myebon (မြေပုံ)",
            state: "Rakhine"
        },
        //Kayah
        {
            value: "Bawlakhe",
            label: "Bawlakhe (ဘောလခဲ)",
            state: "Kayah"
        },
        {
            value: "Hpasawng",
            label: "Hpasawng (ဖားဆောင်း)",
            state: "Kayah"
        },
        {
            value: "Mese",
            label: "Mese (မယ်ဆည်)",
            state: "Kayah"
        },
        {
            value: "Demoso",
            label: "Demoso (ဒီမောဆို)",
            state: "Kayah"
        },
        {
            value: "Hpruso",
            label: "Hpruso (ဖရူဆို)",
            state: "Kayah"
        },
        {
            value: "Loikaw",
            label: "Loikaw (လွိုင်ကော်)",
            state: "Kayah"
        },
        {
            value: "Shadaw",
            label: "Shadaw (ရှားတော)",
            state: "Kayah"
        }]
    //end of city
    //end of data

    //mounted call functions
    setState();
    setOldValue();


    //end of mounted

    //Functions
    function setOldValue() {
        var state_value = localStorage.getItem('state')
        if (state_value) {
            jQuery('#billing_city').val(state_value);
            jQuery('#shipping_city').val(state_value);
        }
        changeCity_billing();
        changeCity_shipping();
        var billing_city = localStorage.getItem('billing_city')
        if (billing_city) {
            jQuery('#billing_postcode').val(billing_city);
        }
        var shipping_city = localStorage.getItem('shipping_city')
        if (shipping_city) {
            jQuery('#shipping_postcode').val(shipping_city);
        }

    }
    function setState() {
        let value = [`<option value=" " selected disabled hidden> 
          Select a State 
      </option>`];
        state = state.sort(function (a, b) {
            return b.label - a.label || a.label.localeCompare(b.label);
        }); // reorder 
        state.forEach(data => {
            let html = `<option value='${data.value}'>${data.label}</option>`;
            value.push(html);
        });
        jQuery('#billing_city').html(value);
        jQuery('#shipping_city').html(value);
    }
    function changeCity_billing() {
        let billing_state_value = jQuery('#billing_city').val();
        console.log('billing_state_value', billing_state_value)
        if (typeof billing_state_value !== 'undefined') {
            localStorage.setItem('state', billing_state_value)
        }
        let data = city.filter(function (data) {
            return data.state === billing_state_value;
        });
        data = data.sort(function (a, b) {
            return b.label - a.label || a.label.localeCompare(b.label);
        }); // reorder 		
        let value = [`<option value=" " selected disabled hidden> 
          Select a City 
      </option>`]
        data.forEach(data => {
            let html = `<option value='${data.value}'>${data.label}</option>`;
            value.push(html);
        });
        jQuery('#billing_postcode').html(value);
    }
    function changeCity_shipping() {
        let state_value = jQuery('#shipping_city').val();
        if (state_value) {
            localStorage.setItem('state', state_value)
        }
        let data = city.filter(function (data) {
            return data.state === state_value;
        });
        data = data.sort(function (a, b) {
            return b.label - a.label || a.label.localeCompare(b.label);
        }); // reorder 
        let value = [`<option value=" " selected disabled hidden> 
          Select a City 
      </option>`]
        data.forEach(data => {
            let html = `<option value='${data.value}'>${data.label}</option>`;
            value.push(html);
        });
        jQuery('#shipping_postcode').html(value);
    }
    //end of functions

    //Actions
    jQuery("#billing_city")
        .change(function () {
            changeCity_billing();
        });
    jQuery("#shipping_city")
        .change(function () {
            changeCity_shipping();
        });

    jQuery("#billing_postcode")
        .change(function () {
            let city = jQuery('#billing_postcode').val();
            localStorage.setItem('billing_city', city)
        });

    jQuery("#shipping_postcode")
        .change(function () {
            let city = jQuery('#shipping_postcode').val();
            localStorage.setItem('shipping_city', city)
        });

    //End of actions
});
