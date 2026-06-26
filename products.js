const products = [
  {
    "id": 1,
    "name": "AKTÜRK GOFRET FINDIKLI 475 GR.",
    "price": 67.5
  },
  {
    "id": 2,
    "name": "AKTÜRK GOFRET SADE 200 GR",
    "price": 23.0
  },
  {
    "id": 3,
    "name": "ALGİDA CARTEDOR ND SEL. ÇİKO.KARN",
    "price": 207.0
  },
  {
    "id": 4,
    "name": "ALGİDA MAGNUM SANDWİCH BADEM 20X140",
    "price": 62.5
  },
  {
    "id": 5,
    "name": "ALGİDA MARAŞ KESME 6X650ML",
    "price": 140.0
  },
  {
    "id": 6,
    "name": "ALGİDA MARAŞ USULÜ CUP 105 ML",
    "price": 28.0
  },
  {
    "id": 7,
    "name": "ALGİDA NOGGER SANDEVİÇ 145 ML",
    "price": 45.0
  },
  {
    "id": 8,
    "name": "ALGİDA TWİSTER OCEAN",
    "price": 10.5
  },
  {
    "id": 9,
    "name": "BEYPAZARI SADE SODA 20CL",
    "price": 10.5
  },
  {
    "id": 10,
    "name": "BURN 250ML 12",
    "price": 39.0
  },
  {
    "id": 11,
    "name": "CAPPY 200 ML ÇEŞİTLERİ",
    "price": 14.25
  },
  {
    "id": 12,
    "name": "CAPPY ATOM MEYVE SUYU1 LT.",
    "price": 56.0
  },
  {
    "id": 13,
    "name": "CAPPY KARIŞIK 1 LT",
    "price": 61.0
  },
  {
    "id": 14,
    "name": "CAPPY VİŞNE 1 LT",
    "price": 71.0
  },
  {
    "id": 15,
    "name": "CARTEDOR ANTEP -BİTTER- VANİLYA 850 ML",
    "price": 193.0
  },
  {
    "id": 16,
    "name": "CLEAR ŞAMPUAN ÇEŞİTLERİ",
    "price": 141.0
  },
  {
    "id": 17,
    "name": "COCA COLA 2,5LT 6 LI",
    "price": 75.0
  },
  {
    "id": 18,
    "name": "CORNY KARIŞIK KURUYEMİŞLİ BAR",
    "price": 15.5
  },
  {
    "id": 19,
    "name": "CRAX SADE ÇUBUK KRAKER 40 GR",
    "price": 4.5
  },
  {
    "id": 20,
    "name": "CİCİBEBE 212GX12 KL",
    "price": 35.0
  },
  {
    "id": 21,
    "name": "DAMLA SU 1,5 LT 6 LI",
    "price": 14.0
  },
  {
    "id": 22,
    "name": "DORİTOS HOT CORN ACI BİBER PARTİ",
    "price": 44.0
  },
  {
    "id": 23,
    "name": "DURACELL İNCE PİL2 Lİ KARTELA",
    "price": 57.0
  },
  {
    "id": 24,
    "name": "DURU DUŞ JELİ ÇEŞİTLERİ 450 ML",
    "price": 108.0
  },
  {
    "id": 25,
    "name": "ETİ BALIK KRAKER 85GR",
    "price": 14.0
  },
  {
    "id": 26,
    "name": "ETİ BURÇAK BİTTER CİK 114 GR 12KL",
    "price": 28.5
  },
  {
    "id": 27,
    "name": "ETİ BİDOLU YER FISTIK 81 GR*12",
    "price": 26.0
  },
  {
    "id": 28,
    "name": "ETİ CRAX BAHARAT 80 GR",
    "price": 14.0
  },
  {
    "id": 29,
    "name": "ETİ CRAX BAHARATLI 175 GR",
    "price": 27.5
  },
  {
    "id": 30,
    "name": "ETİ GONG BAL VE HARDAL AROMALI 34GR",
    "price": 12.25
  },
  {
    "id": 31,
    "name": "ETİ NERO KAKAOLU KREMALI 110 GR",
    "price": 18.5
  },
  {
    "id": 32,
    "name": "ETİ POPKEK ÇEŞİTLERİ 60 GR",
    "price": 11.25
  },
  {
    "id": 33,
    "name": "ETİ PUF ÇEŞİTLERİ 18*48",
    "price": 4.5
  },
  {
    "id": 34,
    "name": "ETİ TUTKU 100 GR",
    "price": 18.5
  },
  {
    "id": 35,
    "name": "FANTA 1 LT 12 Lİ",
    "price": 50.0
  },
  {
    "id": 36,
    "name": "FANTA 2,5 LT",
    "price": 67.0
  },
  {
    "id": 37,
    "name": "FANTA 250 ML",
    "price": 25.0
  },
  {
    "id": 38,
    "name": "FLASH ÇAKMAK GAZI 270ML",
    "price": 30.0
  },
  {
    "id": 39,
    "name": "FRUTTİ 200 ML ÇEŞİTLERİ",
    "price": 15.0
  },
  {
    "id": 40,
    "name": "FUSE TEA 1 LT ÇEŞİTLERİ",
    "price": 46.0
  },
  {
    "id": 41,
    "name": "FUSE TEA 330 ML ÇEŞİTLERİ",
    "price": 33.0
  },
  {
    "id": 42,
    "name": "FİRST SENSATİON ÇEŞİTLERİ",
    "price": 37.0
  },
  {
    "id": 43,
    "name": "GİLLETTE BLUE 3 COMFORT KARTELA",
    "price": 34.0
  },
  {
    "id": 44,
    "name": "H&S ŞAMPUAN ÇEŞİTLERİ",
    "price": 138.0
  },
  {
    "id": 45,
    "name": "HANIMELLER ÇİKODAMLA RULO82GX18",
    "price": 14.0
  },
  {
    "id": 46,
    "name": "KARANFİL PERMATİK KARTELA",
    "price": 14.0
  },
  {
    "id": 47,
    "name": "KRİSPİ ACILI ÇUBUK KRAKER 43GX15",
    "price": 7.75
  },
  {
    "id": 48,
    "name": "MEHMEDİM 5.25 UZUN KOLLU TİŞÖRT",
    "price": 500.0
  },
  {
    "id": 49,
    "name": "MEHMEDİM EŞOFMAN TAKIMI",
    "price": 650.0
  },
  {
    "id": 50,
    "name": "MEHMEDİM HAKİ PALASKA",
    "price": 77.0
  },
  {
    "id": 51,
    "name": "MEHMEDİM KAR MASKESİ KAMUFLAJ İP",
    "price": 110.0
  },
  {
    "id": 52,
    "name": "MEHMEDİM SCOOTER BOT",
    "price": 2350.0
  },
  {
    "id": 53,
    "name": "MEHMEDİM TUTKU ATLET",
    "price": 85.0
  },
  {
    "id": 54,
    "name": "MEHMEDİM YAZLIK BAMBU ÇORAP",
    "price": 35.0
  },
  {
    "id": 55,
    "name": "MEHMEDİM YAZLIK ŞAPKA",
    "price": 140.0
  },
  {
    "id": 56,
    "name": "MEHMEDİM ÇAKMAK TOKAİ MANYETOLU",
    "price": 12.5
  },
  {
    "id": 57,
    "name": "MEYSU CAM ŞEFTALİ NEKTARİ 200 ML",
    "price": 20.0
  },
  {
    "id": 58,
    "name": "MEYSU CAM ŞİŞE KARIŞIK MEYVE NEKTARI 200ML",
    "price": 26.5
  },
  {
    "id": 59,
    "name": "MEYSU CAM ŞİŞE VİŞNE  İÇECEK 1 LT",
    "price": 62.0
  },
  {
    "id": 60,
    "name": "MEYSU COFFE SOĞUK KAHVE KARAMEL 250 12ADT",
    "price": 36.5
  },
  {
    "id": 61,
    "name": "MONSTER ÇEŞİTLERİ 500",
    "price": 64.0
  },
  {
    "id": 62,
    "name": "NESCAFE 3 Ü 1 ARADA FINDIKLI",
    "price": 9.25
  },
  {
    "id": 63,
    "name": "OBSESSO KARAMEL SOĞUK KAHVE 250 ML",
    "price": 48.0
  },
  {
    "id": 64,
    "name": "Peros Cam Temizleyici 500 Ml",
    "price": 38.0
  },
  {
    "id": 65,
    "name": "PEROS SIVI SABUN ÇEŞİTLERİ 3 LT",
    "price": 92.0
  },
  {
    "id": 66,
    "name": "PINAR PROTEİN PRO +VANİLYA AROMALI",
    "price": 93.0
  },
  {
    "id": 67,
    "name": "PINAR TADAN BADEMLİ KROKAN",
    "price": 36.0
  },
  {
    "id": 68,
    "name": "REDBUL PİNK 250ML",
    "price": 42.0
  },
  {
    "id": 69,
    "name": "REDBUL SADE 355 ML",
    "price": 58.0
  },
  {
    "id": 70,
    "name": "REDBUL SADE 473 ML",
    "price": 75.0
  },
  {
    "id": 71,
    "name": "SÜT PROTEİN KAKAOLU 1/2",
    "price": 64.0
  },
  {
    "id": 72,
    "name": "SİG. KENT D RNG BLUE",
    "price": 105.0
  },
  {
    "id": 73,
    "name": "TADIM AY ÇEKİRDEĞİ SİYAH BOL TUZLU 200*12",
    "price": 44.0
  },
  {
    "id": 74,
    "name": "ÇİZİ ÇITIR PEYNİR BİFTEK 120 G",
    "price": 38.5
  },
  {
    "id": 75,
    "name": "ÖZ KRNFL VERA KARTON BARDAK 50 Lİ",
    "price": 0.5
  },
  {
    "id": 76,
    "name": "ÖZKAFANFİL CLİPPER",
    "price": 24.25
  },
  {
    "id": 77,
    "name": "ÜLKER BATON ÇİKOLATA SÜTLÜ 30 GR",
    "price": 23.0
  },
  {
    "id": 78,
    "name": "ÜLKER BİSKÜVİ KAKAO KRE PİLEPACK 36*40G",
    "price": 7.5
  },
  {
    "id": 79,
    "name": "ÜLKER CARAMİO KARAMELLİ KARE ÇİK. 60 GR.",
    "price": 34.5
  },
  {
    "id": 80,
    "name": "ÜLKER DORE SADE KRE.DOL.ÇİK.BİS. 86GR.",
    "price": 23.0
  },
  {
    "id": 81,
    "name": "ÜLKER KAT KAT TAT ÇİLEKLİ 28GR",
    "price": 7.75
  },
  {
    "id": 82,
    "name": "ÜLKER KRİSPİ TIRTIKLI ACILI 48 GR",
    "price": 13.5
  },
  {
    "id": 83,
    "name": "ÜLKER NAPOLİTEN 33 GR.",
    "price": 28.5
  },
  {
    "id": 84,
    "name": "ÜLKER SADE ÇUBUK KRAKER 40 GR.",
    "price": 4.5
  },
  {
    "id": 85,
    "name": "ÜLKER SADE ÇUBUK KRAKER 82 GR",
    "price": 7.25
  },
  {
    "id": 86,
    "name": "ÜLKER SAKLIKÖY SÜT.KRE.BİSK. 113 GR",
    "price": 27.0
  },
  {
    "id": 87,
    "name": "ÜLKER SAKLIKÖY ÇİK. VE SÜTLÜ KREMA BİS.",
    "price": 23.0
  },
  {
    "id": 88,
    "name": "ÜLKER SUSAMLI ÇUBUK KRAKER *22*70GR",
    "price": 12.75
  },
  {
    "id": 89,
    "name": "ÜLKER ÇOKOPRENS ATIŞTIRMALIK 81GR.",
    "price": 15.5
  },
  {
    "id": 90,
    "name": "REDBUL SADE 250 ML",
    "price": 58.0
  },
  {
    "id": 91,
    "name": "SİG. PARLIAMENT UZUN SİGARA",
    "price": 115.0
  },
  {
    "id": 92,
    "name": "SİG. WİNSTON DARK BLUE (KS RC CPB)",
    "price": 110.0
  },
  {
    "id": 93,
    "name": "SİG. WİNSTON SLENDER Q LİNE",
    "price": 110.0
  },
  {
    "id": 94,
    "name": "BİSCOLATA MOOD SÜTLÜ 40 G",
    "price": 19.5
  },
  {
    "id": 95,
    "name": "HARİBO ALTIN AYICIK 80 G",
    "price": 34.0
  },
  {
    "id": 96,
    "name": "FAMİLİA TUV KAĞDI NATUREL 16 LI",
    "price": 160.0
  },
  {
    "id": 97,
    "name": "FAMİLİA TUV KAĞIDI 32 Lİ",
    "price": 265.0
  },
  {
    "id": 98,
    "name": "NESCAFE 2 1 ARADA (5 GR )",
    "price": 9.25
  },
  {
    "id": 99,
    "name": "DORİTOS NACHO PEY PARTİ",
    "price": 50.0
  },
  {
    "id": 100,
    "name": "DORİTOS HOTC ACI BİBER SÜPER 23",
    "price": 38.0
  },
  {
    "id": 101,
    "name": "SÜT PROTEİN KAHVESİ 1/2",
    "price": 72.0
  },
  {
    "id": 102,
    "name": "PINAR KURUYEMİŞ KAVRULMUŞ BADEM İÇİ 250 GR",
    "price": 217.5
  },
  {
    "id": 103,
    "name": "PINAR KURUYEMİŞ FINDIK İÇİ 70 GR",
    "price": 110.0
  },
  {
    "id": 104,
    "name": "PINAR KURUYEMİŞ KAVRULMUŞ KAJU 70 GR.",
    "price": 62.0
  },
  {
    "id": 105,
    "name": "PINAR KURUYEMİŞ BADEM İÇİ 70 GR. TUZLU",
    "price": 65.0
  },
  {
    "id": 106,
    "name": "PINAR KURUYEMİŞ KARIŞIK ÇEREZ 150HG",
    "price": 108.0
  },
  {
    "id": 107,
    "name": "PINAR KURUYEMİŞ  FINDIK İÇİ 170 G",
    "price": 264.0
  },
  {
    "id": 108,
    "name": "PINAR KURUYEMİŞ KABAK ÇEK.1404GR.",
    "price": 74.0
  },
  {
    "id": 109,
    "name": "PINAR KURUYEMİŞ KURU İNCİR 150 GR.",
    "price": 106.5
  },
  {
    "id": 110,
    "name": "TADIM KABAK ÇEKİRDEĞİ 80 GR",
    "price": 42.0
  },
  {
    "id": 111,
    "name": "TADIM KAJU İŞLENMİŞ KAJU 90G",
    "price": 71.0
  },
  {
    "id": 112,
    "name": "TADIM FESTİVAL 90 G",
    "price": 83.75
  },
  {
    "id": 113,
    "name": "TADIM KOKTEYL 90 GR 12*Lİ",
    "price": 71.0
  },
  {
    "id": 114,
    "name": "TADIM SARI LEBLEBİ ÇİFTE KAVRULMUŞ 90 GR",
    "price": 31.5
  },
  {
    "id": 115,
    "name": "TADIM YER FISTIĞI 90 GR",
    "price": 25.0
  },
  {
    "id": 116,
    "name": "TADIM FINDIK İÇİ 90 GR",
    "price": 138.5
  },
  {
    "id": 117,
    "name": "ALO MATİK BEYAZ VE RENKLİLER 10KG",
    "price": 541.0
  },
  {
    "id": 118,
    "name": "PEROS 10 KG MATİK SIK YIKANANLAR YASEMİN ÇİÇEĞİ",
    "price": 336.0
  },
  {
    "id": 119,
    "name": "SLEEPY YÜZEY TEM ANANAS 12",
    "price": 103.0
  },
  {
    "id": 120,
    "name": "ISLAK HAVLU SENSİTİVE 90 ADET",
    "price": 31.5
  },
  {
    "id": 121,
    "name": "PEROS YUMŞATICI ÇEŞİTLERİ 5 LT",
    "price": 157.0
  },
  {
    "id": 122,
    "name": "PEROS KONSANTRE 1440 ML YASEMİN-NEROLİ",
    "price": 119.0
  },
  {
    "id": 123,
    "name": "E.S.T G. BAHÇE ÇEŞİTLERİ 500 ML",
    "price": 151.0
  },
  {
    "id": 124,
    "name": "COLGATE TOTAL DİŞ ETİ BAKIMI",
    "price": 120.0
  },
  {
    "id": 125,
    "name": "COLGATE MACUN MİSVAK",
    "price": 84.5
  },
  {
    "id": 126,
    "name": "COLGATE MACUN 75 ML SENSİTİVE",
    "price": 84.5
  },
  {
    "id": 127,
    "name": "SENSODYNE F SERİSİ 100ML",
    "price": 180.0
  },
  {
    "id": 128,
    "name": "ORAL B MACUN COMLETE EN İYİ FERAHLIK 125 ML",
    "price": 109.0
  },
  {
    "id": 129,
    "name": "COLGATE DİŞ FIRÇASI 360 CHORCOAL SİYAH",
    "price": 90.0
  },
  {
    "id": 130,
    "name": "DARDANEL A. YAĞLI 4X75GR 16LI",
    "price": 185.0
  },
  {
    "id": 131,
    "name": "AKTÜRK GOFRET KAKAOLU 475 GR",
    "price": 59.0
  },
  {
    "id": 132,
    "name": "ULUDAĞ FRUTTİ MANGO ANANAS 200 ML 24  LÜ",
    "price": 15.0
  },
  {
    "id": 133,
    "name": "ULUDAĞ LİMONATA 1 LT",
    "price": 48.0
  },
  {
    "id": 134,
    "name": "ULUDAĞ SADE SODA",
    "price": 11.0
  },
  {
    "id": 135,
    "name": "ULUDAĞ FRUTTİ EXTRA MANDALİNA 250 CC",
    "price": 32.0
  },
  {
    "id": 136,
    "name": "ETİ AHENK KARAM GURME 50*24",
    "price": 22.5
  },
  {
    "id": 137,
    "name": "ETİ TUTKU TART 45GX16 KL",
    "price": 15.0
  },
  {
    "id": 138,
    "name": "BROWNİ İNTENSE FINDIKLI 48GR",
    "price": 18.75
  },
  {
    "id": 139,
    "name": "BALIK MİNİ MISIRLI 40GRX18KL",
    "price": 10.5
  },
  {
    "id": 140,
    "name": "BROWNİ GOLD KAKAOLU 45GR",
    "price": 11.25
  },
  {
    "id": 141,
    "name": "PETİTO GOFRET 26X24",
    "price": 10.0
  },
  {
    "id": 142,
    "name": "ÜLKER ÇOKONAT  33 GR",
    "price": 19.25
  },
  {
    "id": 143,
    "name": "KEKSTRA KONFETİ KAKAOLU KEK 38 GR.",
    "price": 10.5
  },
  {
    "id": 144,
    "name": "ÜLKER ÇİZİ PEYNİR SOĞAN 120 GR",
    "price": 38.0
  },
  {
    "id": 145,
    "name": "ÜLKER 9 KAT TAT İNCE İNCE ÇİLEK 114GR",
    "price": 31.0
  },
  {
    "id": 146,
    "name": "ÜLKER KEKSTRA JÖLEBOL ÇİLEK 40G",
    "price": 8.5
  },
  {
    "id": 147,
    "name": "ÇİZİ KRAKER 70 GR*24",
    "price": 11.5
  },
  {
    "id": 148,
    "name": "ÜLKER ÇİKOLATALI GOFRET BEYAZ 35GR",
    "price": 12.75
  },
  {
    "id": 149,
    "name": "ÜLKER ÇİKOLATALI GOFRET MAXİ 47G",
    "price": 15.5
  },
  {
    "id": 150,
    "name": "ÜLKER SAKLIKÖY ÇİK. KREMA 87 GR",
    "price": 17.75
  },
  {
    "id": 151,
    "name": "ÜLKER BİSKREM BÜYÜK BOY % 50 FAZLA 150 G",
    "price": 27.75
  },
  {
    "id": 152,
    "name": "ÜLKER İKRAM KREM BİSK.ÇİK. 84GR.",
    "price": 17.75
  },
  {
    "id": 153,
    "name": "DANKEK MAGMA ÇİKOLATALI 16*65 GR",
    "price": 15.5
  }
];