/** Read-only, non-personal snapshot from “KSB Holzminden – Vereinscockpit”.
 * Source values are intentionally kept separate from the UI so a future sports-bund
 * adapter can replace this file/API without changing presentation components. */
export type ClubRecord = { id:string; name:string; town:string; members:{"2016"?:number;"2021"?:number;"2023"?:number;"2026"?:number}; licenses?:number; activeLicenses?:number; website?:boolean; funding?:{cases:number;balance:number;year:number}; dataQuality:string };
export const KSB_SOURCE = { name:"KSB Holzminden – Vereinscockpit", sheet:"Dashboard-Daten / Jahresbestände", status:"10.11.2026", scope:"Nicht-personenbezogener Pilot-Snapshot" };
export const KSB_CLUBS:ClubRecord[]=[
 {id:"302220100",name:"MTV Altendorf von 1897 e.V.",town:"Holzminden",members:{"2016":902,"2021":807,"2023":812,"2026":922},licenses:27,activeLicenses:14,website:true,dataQuality:"Grunddaten vollständig"},
 {id:"302220110",name:"Verein Altendorfer Schützen (V.A.S.) e.V.",town:"Holzminden",members:{"2016":34,"2021":19,"2023":18,"2026":18},licenses:2,activeLicenses:1,website:false,dataQuality:"Website fehlt"},
 {id:"302220130",name:"Schützenverein von 1957 Ammensen e.V.",town:"Delligsen",members:{"2016":71,"2021":74,"2023":66,"2026":50},licenses:1,activeLicenses:1,website:false,dataQuality:"Website fehlt"},
 {id:"302220150",name:"Männer-Turn-Verein Bevern von 1898 e.V.",town:"Bevern",members:{"2016":701,"2021":727,"2023":733,"2026":785},licenses:10,activeLicenses:8,website:false,funding:{cases:2,balance:2000,year:2023},dataQuality:"Website fehlt; Sportangebote fehlen"},
 {id:"302220170",name:"Schützenverein von 1882 e.V. Bevern",town:"Bevern",members:{"2016":157,"2021":169,"2023":166,"2026":183},licenses:2,activeLicenses:2,website:false,dataQuality:"Website fehlt; Sportangebote fehlen"},
 {id:"302220200",name:"Budo-Club Bodenwerder e.V.",town:"Bodenwerder",members:{"2016":133,"2021":128,"2023":121,"2026":124},licenses:6,activeLicenses:3,website:false,dataQuality:"Website fehlt; Sportangebote fehlen"},
 {id:"302220205",name:"DLRG-Ortsgruppe Bodenwerder e.V.",town:"Bodenwerder",members:{"2016":316,"2021":335,"2023":343,"2026":353},licenses:6,activeLicenses:6,website:true,funding:{cases:1,balance:1809,year:2023},dataQuality:"Grunddaten vollständig"},
 {id:"302220225",name:"Motorboot-Club Bodenwerder e.V.",town:"Bodenwerder",members:{"2026":113},licenses:3,activeLicenses:1,website:true,dataQuality:"Historische Bestände fehlen"},
 {id:"302220230",name:"Reiterverein Bodenwerder e. V.",town:"Bodenwerder",members:{"2016":197,"2021":190,"2023":194,"2026":205},licenses:2,activeLicenses:1,website:false,dataQuality:"Website fehlt; Sportangebote fehlen"},
 {id:"302220260",name:"Sport-Club Münchhausen e.V.",town:"Bodenwerder",members:{"2016":300,"2021":281,"2023":279,"2026":355},licenses:2,activeLicenses:2,website:false,dataQuality:"Website fehlt; Sportangebote fehlen"}
 ,{id:"302221740",name:"Schützenclub Rühle e.V.",town:"Bodenwerder",members:{"2016":53,"2021":40,"2023":36,"2026":39},licenses:0,activeLicenses:0,website:false,funding:{cases:3,balance:587.99,year:2026},dataQuality:"Website fehlt; Sportangebote fehlen"}
];
export const years=["2016","2021","2023","2026"] as const;
export const change=(club:ClubRecord)=>{const first=club.members["2016"],last=club.members["2026"];return first===undefined||last===undefined?null:{absolute:last-first,percent:(last-first)/first*100};};
