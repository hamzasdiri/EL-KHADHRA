
export default class Actuator {
    id = 0;
    name;
    tel;
    adresse;
    //service;
   
   Actuator(name,tel,adresse){
       this.id++;
       this.name=name;
       this.tel=tel;
       this.adresse=adresse;
       //this.service=service;
   }
}

const  Actuators =[
       new Actuator('Sté Miziou Forage','98 980 614','Rue Emir Abdelkader ,Ksibet Sousse, 4041 Sousse'),
       new Actuator('Root Irrigation','28 509 005',''),
       new Actuator('GROUPEMENT INTERPROFESSIONNEL DES FRUITS ( GIF )','75 491 548','Route Ennaser Boite Postale N° 44280 Kebili Nord'),
       new Actuator('CENTRE DE CONDITIONNEMENT DE FRUITS ( CCF )','75 474 353','zone industrielle 4260 Douz Douz'),
       new Actuator('SOCIETE GAPRIM CONDITIONNEMENT','75 337 606','Chenchou 6020 El Hamma El Hamma'),
       new Actuator('SOCIETE EL KHAMSA ALIA','75 321 681','Route GP1 Km 34 6080 Mareth Mareth'),
       new Actuator('CENTRE TECHNIQUE DES AGRUMES PROTEGEES ET GEOTHERMIQUE ( CTCPG )','75 290 464','65 avenue Abou Kacem Chebie 6011'),
       new Actuator('sadira','71 770 733 /71 360 245','Appartement C32, Résidence Alain Savary,71, Rue Alain Savary -1003 – Cité El Khadhra – Tunisie '),
       new Actuator(' Ben Cheikh Garden','24 916 012','128, impasse rue des fruits 2036 Choutrana 3 Tunisia'),
       new Actuator('EL Amen',' 92 738 142 /97 108 113','Rue El Hajeb, El Karma, Kairouan 3130 Kairouan - Tunisie'),
       new Actuator('pepiniere casa verde','95 389 512','Rue EL Bassatine La soukra 2036'),
       new Actuator("Societe Tunisienne d'engrais chimique",'70 016 300','Afrane -1009 el Ouardia B1'),
       new Actuator('Espace vert(fournisseur de matériel agricole)','71 333 858','69,rue abderrazak chraibi Tunis، Tunis 1001'),
       new Actuator('بيع المعدات الفلاحية- أسمدة - بذورDar el Falle7 ','22 376 354','32GG+866, As Sars'),
       new Actuator('FF','97 273 777',''),
       new Actuator('Agrisud','58 425 000','Route Mahdia km 9, 3054 Rte de Mahdia'),
       new Actuator('SOCIETE SEMODRI SEMENCES PESTICIDE ET ENGRAIS ( SEMODRI )','31 406 339 / 24 146 602','Sidi Saad 2090 Mornag'),
       new Actuator('BECOSA','72 333 395 / 72 333 506 / 98 349 809','Zone Industrielle Route de Korbous 8020 Soliman Soliman'),
       new Actuator('ENTREPOSAGE BARHOUMI','76 460 731','Bouhlel 2260 Degueche Degueche'),
       new Actuator('ADAM EXPORT','76 454 112','Z.I.Hammet Jerid-2200-Tozeur 2200 Tozeur Tozeur'),
       new Actuator('SOCIETE BENI GHERIB','76 440 103','Avenue Maghreb Al Arabi 2223 Hezoua'),
       new Actuator('BEST FRIGO','76420594','RTE Tozeur -Dgueche 2260 Degueche Degueche'),
       new Actuator('BECHA','76 210 686','Immeuble Jihen 2112 Sidi Ahmed Zarrouk Gafsa Sud'),
       new Actuator("BUREAU D'ETUDE G.T.H.E",'75 850 410','10 Avenue Khaled Ibnou Elwalid 3200'),
       new Actuator('SOCIETE MUTUELLE DE BASE DES SERVICES AGRICOLES YASSMINE','75 767 520','route de Kantrara 4133 Robbana Midoun'),
       new Actuator('GROUPEMENT DE DEVELOPPEMENT AGRICOLE','75 713 930','Route de Maamrat 4160 El Maamrate Ben Guerdane'),
       new Actuator('BESA','75 492 365','Blidette 4243 Blidette Kebili Sud'),
       new Actuator('hamadi charoufi','98 561 496','11 نهج الطاهر الأسود ، حي الجمهورية المنيهلة'),
       new Actuator('مقاولة رؤوف الجبالي','97 030 533','bizerte'),
       new Actuator('مقاولة محمد الربيع الزين','98 283 082','الهبائلت ولاية توزر'),
       new Actuator('ضوبن علي خشوم','98 507 844','حسي- مدنين'),
       new Actuator('شركد الصيانة والتهيئة والتنقيب رياض الإينوبلي SOMAF','78 612 305','شارع البيئة عمارة النرجس الطابق الأول ص ب 398 جندويتّ 8100'),
       new Actuator('شركت جيودريل GEO DRILL','22 662 077','نهج محسن القلال عمارة عبد الكافي 3000 صفاقس المدينة ‏ صفاقس'),
       new Actuator('hmida bichiou','53934367','grand tunis')
];

console.log(Actuators[0]);