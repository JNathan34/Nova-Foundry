(()=>{var br="nova-foundry-3d-v2";var pn=[["power","Power","#6ad9ff","Manual energy and reactor control"],["auto","Automation","#77edbd","Machines, workers and passive income"],["luck","Fortune","#f4ce78","Critical energy and rare signals"],["offline","Offline","#aaa3ff","Storage and away-time production"],["rebirth","Rebirth","#f799c9","Faster, stronger new beginnings"],["explore","Exploration","#ffac79","Rooms, research and new worlds"]],gu=[["Stronger pulse","Compression","Critical energy","Combo capacitor","Overcharged interaction","Critical mastery","Focused beam","Core resonance","Critical overload","Nuclear fingers","Plasma feedback","Hyperactive core","GOD TOUCH","Solar hands","Pulse echo","Reactor mastery"],["Basic automation","Faster generators","Improved machinery","Robot workers","AI management","Self-improving machines","Assembly line","Precision bearings","Autonomous empire","Machine empire","Quantum timing","Distributed network","FULL AUTOMATION","Machine learning","Clean energy","Industrial mastery"],["Lucky energy","Better criticals","Lucky generator","Golden signal","Jackpot energy","Fortune master","Stardust pockets","Lucky research","Impossible luck","Crystal magnet","Rare circuitry","Double salvage","GOLDEN UNIVERSE","Probability wave","Fortunate pulse","Fortune mastery"],["Offline production","Better storage","Efficient shutdown","Backup cells","Extended storage","Sleep mode","Coolant reserve","Battery farm","Eternal production","Deep sleep","Hibernate","Long-term archive","NEVER OFFLINE","Chrono vault","Time crystal","Storage mastery"],["Rebirth knowledge","Permanent energy","Faster recovery","Core affinity","Rebirth memory","Eternal skill","Quantum rhythm","Rapid reboot","Rebirth master","Ancestral spark","Machine memory","Clean restart","IMMORTAL CORE","Quantum yield","Core scientist","Prestige mastery"],["Facility expansion","Survey scanner","Research access","Factory logistics","Deep facility","Quantum access","Launch technology","Wayfinding","Orbital engineering","Planetary survey","Dimensional research","Fast travel network","MULTIVERSE ACCESS","Explorer insight","Research network","Frontier mastery"]],xu={"power:0":["+10% manual energy per level.",{click:.1}],"power:1":["+25% manual energy.",{click:.25}],"power:3":["Maximum combo +1\xD7.",{combo:1}],"auto:1":["+15% passive income.",{passive:.15}],"auto:2":["+25% passive income.",{passive:.25}],"auto:4":["+50% passive income.",{passive:.5}],"luck:0":["+2% critical chance.",{crit:.02}],"luck:1":["Critical multiplier +5\xD7.",{critMult:5}],"rebirth:8":["+100% quantum yield.",{prestige:1}],"explore:1":["Shows uncollected energy shards on the minimap.",{scanner:1}],"power:2":["Critical interactions unlocked at 5% chance.",{critUnlock:1}],"power:4":["Every tenth interaction earns 5\xD7 energy.",{tenth:1}],"power:5":["+10% critical chance.",{crit:.1}],"power:8":["Critical multiplier +5\xD7.",{critMult:5}],"power:9":["Manual energy +500%.",{click:5}],"power:11":["Manual energy \xD710, passive energy \xD70.5.",{manualKeystone:1}],"power:12":["Manual energy \xD78.",{god:1}],"auto:0":["Unlocks machine production and construction.",{automation:1}],"auto:3":["Robot workers join the facility; +2 automatic pulses/sec.",{workers:1,autoClicks:2}],"auto:5":["Passive income grows +1% per active minute, up to +100%.",{selfImprove:1}],"auto:9":["Passive energy \xD75, manual energy \xD70.2.",{machineKeystone:1}],"auto:12":["Passive production \xD78.",{fullAuto:1}],"luck:2":["Machines have a 5% chance each second to produce a bonus tick.",{luckyMachine:1}],"luck:3":["Golden drones can visit your facility.",{golden:1}],"luck:4":["Each manual pulse has a 0.2% chance of a 100\xD7 jackpot.",{jackpot:1}],"luck:8":["Rare event rewards \xD72.",{rare:1}],"luck:9":["World shards can be collected from farther away.",{magnet:1}],"luck:12":["Critical chance +15%; event rewards \xD72.",{crit:.15,rare:1}],"offline:0":["Unlock offline earnings at 25% efficiency.",{offline:.25}],"offline:1":["Offline storage +4 hours.",{hours:4}],"offline:2":["Offline efficiency +25%.",{offline:.25}],"offline:4":["Offline storage +12 hours.",{hours:12}],"offline:5":["Offline efficiency +25%.",{offline:.25}],"offline:8":["Offline storage +24 hours (48h maximum).",{hours:24}],"offline:12":["Offline efficiency becomes 100%.",{neverOffline:1}],"rebirth:1":["Each rebirth starts with 500 extra energy.",{startEnergy:500}],"rebirth:4":["Keep 10% of each machine level through rebirth.",{memory:.1}],"rebirth:5":["Earn 3 extra Skill Points each rebirth.",{rebirthPoints:3}],"rebirth:10":["Start with one extra collector per rebirth.",{startMachine:1}],"rebirth:12":["Quantum core passive bonus doubles.",{immortal:1}],"explore:0":["Allows the Generator Hall to open at 250 run energy.",{access:1}],"explore:2":["Allows the Research Wing to open at 3K run energy.",{research:1}],"explore:3":["Allows the Factory to open at 1.5K run energy.",{factory:1}],"explore:4":["Allows the Deep Facility to open at 10K run energy.",{deep:1}],"explore:5":["Allows the Quantum Chamber to open at 25K run energy.",{quantum:1}],"explore:6":["Allows the Launch Platform to open at 100K run energy.",{launch:1}],"explore:8":["Allows the Orbital Station to open at 1M run energy.",{orbital:1}],"explore:9":["Allows the Alien Outpost to open at 10M run energy.",{planet:1}],"explore:10":["Allows the Dimensional Realm to open at 100M run energy.",{dimension:1}],"explore:11":["Unlock fast travel to all discovered areas.",{fastTravel:1}],"explore:12":["New Reality becomes available after BREAK REALITY.",{multiverse:1}]},Lt=[],xc=[[1,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3],[1,4],[0,5],[1,5],[2,5]],vu=[[],[0],[0],[0],[1],[2],[2],[3],[4],[5],[6],[7],[8,9,10],[12],[12],[12]];pn.forEach((s,e)=>gu[e].forEach((t,i)=>{let n,r,a=xu[s[0]+":"+i];if(a)[r,n]=a;else{let o=["click","passive","crit","offlineProduction","prestige","xp"][e],l=o==="crit"?.015:i>12?.3:.15;n={[o]:l},r=`+${Math.round(l*100)}% ${["manual energy","passive income","critical chance","offline-only production","quantum yield","XP gain"][e]} per level.`}Lt.push({id:`${s[0]}-${i}`,name:t,desc:r,branch:s[0],tree:"main",color:s[2],x:e*350+xc[i][0]*76+36,y:140+xc[i][1]*158,max:e===0&&i===0?10:a?1:5,cost:i===12?10:i>=8?3:i>=4?2:1,requires:vu[i].map(o=>`${s[0]}-${o}`),effects:n,keystone:[11,12].includes(i)})}));var _u=[["Quantum automation",["auto-4","power-5"],{luckyMachine:1,passive:.5},"Machine bonus ticks unlocked and +50% passive energy."],["Eternal reactor",["offline-8","rebirth-12"],{memory:.2},"Keep an additional 20% of machine levels after rebirth."],["Explorer drones",["auto-3","explore-4"],{dronePower:1},"Equipped drone bonuses double."],["Sleeping giant",["offline-5","power-9"],{offlineProduction:1},"Offline-only production +100%."],["Fortunate rebirth",["luck-8","rebirth-8"],{prestige:1},"Quantum yield +100%."],["Dimensional network",["explore-10","auto-12"],{global:2},"All energy +200%."]];_u.forEach((s,e)=>Lt.push({id:"cross-"+e,name:s[0],requires:s[1],effects:s[2],desc:s[3],tree:"main",branch:"cross",color:"#dce7ff",x:110+e*335,y:1220,max:1,cost:8,keystone:!0}));var yu=[["Permanent production",{global:.1},"+10% all energy per level."],["Faster beginning",{startEnergy:1e4},"+10K starting energy per level."],["Core memory",{startMachine:1},"+1 starting collector per level."],["Quantum knowledge",{rebirthPoints:1},"+1 Skill Point per rebirth per level."],["Rebirth efficiency",{prestige:.15},"+15% quantum yield per level."],["Permanent criticals",{crit:.01},"+1% critical chance per level."],["Machine memory",{memory:.02},"Keep +2% machine levels per level."],["Quantum cooling",{click:.25},"+25% manual energy per level."],["Stellar factory",{passive:.25},"+25% passive energy per level."],["Timeless network",{hours:2},"+2h offline capacity per level, up to 48h."],["Ancestral fortune",{rare:.1},"+10% rare event rewards per level."],["Quantum architect",{global:.5},"+50% all energy per level."]];yu.forEach((s,e)=>Lt.push({id:"q-"+e,name:s[0],effects:s[1],desc:s[2],tree:"quantum",branch:"quantum",color:"#f4ce78",x:180+e%3*220,y:130+Math.floor(e/3)*170,max:100,cost:1+Math.floor(e/3),requires:e<3?[]:["q-"+(e-3)],keystone:e>=9}));var bu=[["Infinite energy",{global:2},"+200% all energy."],["Rebirth memory+",{memory:.2},"Keep +20% of machine levels."],["Dimensional production",{dimensionProduction:1},"+100% passive income per ascension."],["Temporal automation",{temporal:1},"Production continues during rebirth animations."],["Infinite knowledge",{levelPoints:1},"+1 additional Skill Point on future level-ups."],["Reality armour",{bossDamage:2},"+200% boss damage."],["Infinite storage",{neverOffline:1},"100% offline efficiency."],["BREAK REALITY",{breakReality:1},"Unlock New Reality at 3 ascensions with Multiverse Access."]];bu.forEach((s,e)=>Lt.push({id:"a-"+e,name:s[0],effects:s[1],desc:s[2],tree:"ascension",branch:"ascension",color:"#c0a1ff",x:220+e%2*260,y:130+Math.floor(e/2)*180,max:1,cost:e===7?3:1,requires:e<2?[]:["a-"+(e-2)],keystone:e===7}));pn.forEach((s,e)=>[0,1].forEach(t=>Lt.push({id:`m-${e}-${t}`,name:s[1]+(t?" transcendence":" mastery"),desc:`+${t?40:20}% ${["manual energy","passive income","rare rewards","offline-only production","quantum yield","XP"][e]} per level. Unlimited research; costs increase each level.`,effects:{[["click","passive","rare","offlineProduction","prestige","xp"][e]]:t?.4:.2},tree:"mastery",branch:s[0],color:s[2],x:110+e*180,y:180+t*230,max:1e6,cost:t?5:3,requires:t?[`m-${e}-0`]:[],keystone:!!t})));var Dt=Object.fromEntries(Lt.map(s=>[s.id,s])),lt=[{id:"lab",name:"Origin Laboratory",x:0,z:0,need:0,flag:null,color:"#72d8ee",subtitle:"Where a universe begins."},{id:"generator",name:"Generator Hall",x:28,z:0,need:250,flag:"access",color:"#78edbc",subtitle:"The first step toward independence."},{id:"factory",name:"Robot Factory",x:56,z:0,need:1500,flag:"factory",color:"#f4c67b",subtitle:"An empire in motion."},{id:"research",name:"Research Wing",x:28,z:-28,need:3e3,flag:"research",color:"#a79df8",subtitle:"Curiosity becomes power."},{id:"quantum",name:"Quantum Chamber",x:56,z:-28,need:25e3,flag:"quantum",color:"#f49fcb",subtitle:"Beyond ordinary physics."},{id:"deep",name:"Deep Facility",x:0,z:-28,need:1e4,flag:"deep",color:"#67d7bf",subtitle:"Forgotten infrastructure. New possibilities."},{id:"launch",name:"Launch Platform",x:-28,z:0,need:1e5,flag:"launch",color:"#efb086",subtitle:"Your world is getting smaller."},{id:"orbital",name:"Orbital Station",x:-56,z:0,need:1e6,flag:"orbital",color:"#9ccdfc",subtitle:"A foundry among the stars."},{id:"planet",name:"Alien Outpost",x:-56,z:-28,need:1e7,flag:"planet",color:"#aeed9c",subtitle:"A different sun. The same ambition."},{id:"dimension",name:"Dimensional Realm",x:-28,z:-28,need:1e8,flag:"dimension",color:"#dc99ff",subtitle:"The edge of what is possible."}],ei=[["collector","Energy collector","lab",20,1.15,1],["generator","Ion generator","generator",150,1.16,9],["fusion","Fusion engine","factory",1800,1.17,110],["research","Photon processor","research",12e3,1.18,800],["deep","Dark matter drill","deep",65e3,1.19,4500],["quantum","Quantum reactor","quantum",3e5,1.2,24e3],["launch","Stellar turbine","launch",2e6,1.2,17e4],["orbital","Dyson relay","orbital",2e7,1.21,18e5],["planet","Planetary engine","planet",3e8,1.22,3e7],["dimension","Dimensional engine","dimension",5e9,1.23,5e8]].map((s,e)=>({id:s[0],name:s[1],area:s[2],base:s[3],growth:s[4],rate:s[5],i:e})),Ti=[["azure","Origin blue","#72d8ee","Common",0],["inferno","Inferno","#ff8658","Rare",20],["frozen","Frozen star","#c0f1ff","Rare",20],["toxic","Toxic glow","#a1ff72","Uncommon",12],["gold","Golden core","#ffd16b","Epic",35],["void","Void heart","#ae78fb","Legendary",60],["galaxy","Galaxy","#ff9ee2","Epic",40],["blackhole","Black hole","#7363c5","Mythic",80],["developer","Developer signal","#ddfc8b","Secret",-1],["reality","Reality core","#ffffff","Mythic",-1]],vc=["Scientist","Engineer","Robot","Hazmat","Space suit","Quantum armour","Void armour","Golden armour"],wi=[["Maintenance drone","+5% passive income","#7decc0",20],["Lucky drone","+2% critical chance","#f7d477",25],["Mining drone","Periodic energy deliveries","#72d9f9",30],["Quantum drone","+10% quantum yield","#e49dd7",40],["Void drone","+8% all energy","#bd8aff",60]],Mr=[["Cooling system","+10% manual energy","click"],["Power grid","+10% passive energy","passive"],["Network system","+1 automatic pulse/sec","autoClicks"],["Storage system","+1h offline capacity (48h maximum)","hours"],["Research network","+10% XP gain","xp"]],mn=[["Energy compression","+25% manual energy",1500,30,"click"],["Robot intelligence","+25% passive energy",7500,60,"passive"],["Quantum physics","+25% quantum yield",5e4,90,"prestige"],["Advanced materials","+25% all energy",25e4,120,"global"],["Dimensional science","+25% XP gain",1e6,180,"xp"]],Sr=[["engineer","Chief engineer","Generate 100K lifetime energy","lifetime",1e5],["scientist","Dr. Lyra","Unlock 12 skill nodes","nodes",12],["technician","Technician Omi","Own 25 machine levels","machines",25],["explorer","Explorer Vega","Discover 6 facility areas","areas",6]],_c=["Corrupted Core","Rogue AI","Quantum Guardian","Void Machine","Planet Eater","Dimensional Titan","Reality Breaker"];var pt=s=>Math.min(1e280,Math.max(0,Number.isFinite(s)?s:1e280));function yc(s,e="short"){if(!Number.isFinite(s))return"MAX";if(s<1e3)return s<10?Number(s.toFixed(1)).toString():Math.floor(s).toLocaleString("en");if(e==="scientific")return s.toExponential(2);let t=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"],i=Math.floor(Math.log10(s)/3);return i<t.length?(s/1e3**i).toFixed(2).replace(/\.?0+$/,"")+t[i]:s.toExponential(2)}var Wi=s=>s>=3600?`${Math.floor(s/3600)}h ${Math.floor(s%3600/60)}m`:s>=60?`${Math.floor(s/60)}m ${Math.floor(s%60)}s`:`${Math.ceil(s)}s`;function Ln(){return{version:2,energy:0,lifetime:0,run:0,dust:0,tokens:0,cores:0,coreTotal:0,shards:0,xp:0,points:1,pointsEarned:1,rebirths:0,cycle:0,ascensions:0,reality:0,skills:{},firstSkills:[],machines:Array(10).fill(0),facility:Array(5).fill(0),research:Array(5).fill(0),researchJob:null,areas:["lab"],discovered:["lab"],collected:[],secrets:[],skins:["azure"],skin:"azure",outfit:0,droneCopies:Array(5).fill(0),droneLevels:Array(5).fill(0),equipped:[],slots:1,achievements:[],npcClaims:[],boosts:[],respecs:0,challenge:null,completedChallenges:[],last:Date.now(),position:{x:0,y:0,z:7,yaw:0,pitch:0},daily:{date:"",streak:0},quests:{day:"",week:"",daily:{},weekly:{},claims:[]},stats:{clicks:0,criticals:0,highest:0,passive:0,time:0,offline:0,purchases:0,games:0,wins:0,bosses:0,quests:0,events:0,npcTalks:0,memory:0,parkour:0,combo:1},settings:{view:"first",quality:"high",particles:!0,bloom:!0,shadows:!0,antialias:!0,lighting:!0,renderDistance:150,motionBlur:!1,shake:!0,bob:!0,reduced:!1,fps:60,sensitivity:1,sound:!0,music:!1,master:.4,sfx:.5,musicVolume:.18,notation:"short",accent:"#79dfc4",machineColor:"#6f8fa5",trail:!0,tutorial:!0}}}var Er=class{constructor(){this.s=Ln(),this.listeners=[],this.fx={},this.combo=0,this.lastClick=0,this.lastProductionRoll=0,this.lastMining=0,this.resetting=!1,this.storageFailed=!1,this.achDefs=this.makeAchievements(),this.load(),this.calendar(),this.recompute()}on(e){this.listeners.push(e)}emit(e,t){this.listeners.forEach(i=>i(e,t))}notice(e){this.emit("notice",e)}get level(){return 1+Math.floor(Math.sqrt(this.s.xp/35))}fmt(e){return yc(e,this.s.settings.notation)}recompute(){let e={};for(let[t,i]of Object.entries(this.s.skills)){let n=Dt[t];if(n)for(let[r,a]of Object.entries(n.effects))e[r]=(e[r]||0)+a*i}this.s.facility.forEach((t,i)=>{let n=Mr[i][2];e[n]=(e[n]||0)+t*(i===2||i===3?1:.1)}),this.s.research.forEach((t,i)=>{let n=mn[i][4];e[n]=(e[n]||0)+t*.25}),this.fx=e,this.emit("change")}buff(e){return this.s.boosts.filter(t=>t.type===e&&t.end>Date.now()).reduce((t,i)=>Math.max(t,i.mult),1)}drone(e){return this.s.equipped.includes(e)?(1+this.s.droneLevels[e]*.5)*(1+(this.fx.dronePower||0)):0}get global(){return pt((1+this.s.coreTotal*.08*(this.fx.immortal?2:1))*(1+this.s.ascensions*2)*(1+this.s.reality*10)*(1+(this.fx.global||0))*(1+this.s.achievements.length*.005)*(1+this.s.completedChallenges.length*.1)*(1+.08*this.drone(4))*(this.s.skin==="gold"?1.02:1)*this.buff("all"))}get manual(){let e=(1+(this.fx.click||0))*this.global*this.buff("click");return this.fx.manualKeystone&&(e*=10),this.fx.machineKeystone&&(e*=.2),this.fx.god&&(e*=8),pt(e)}get crit(){return Math.min(.85,(this.fx.critUnlock?.05:0)+(this.fx.crit||0)+this.drone(1)*.02+(this.buff("luck")>1?.3:0))}get critMult(){return 5+(this.fx.critMult||0)}milestone(e){return 2**[10,25,50,100,250,500,1e3].filter(t=>e>=t).length}machineRate(e){return pt(this.s.machines[e]*ei[e].rate*this.milestone(this.s.machines[e]))}get passive(){if(!this.fx.automation||this.s.challenge?.id==="manual")return 0;let e=this.s.machines.reduce((t,i,n)=>pt(t+this.machineRate(n)),0)*(1+(this.fx.passive||0))*this.global*(1+this.drone(0)*.05)*this.buff("passive");return this.fx.selfImprove&&(e*=1+Math.min(1,this.s.stats.time/6e3)),this.fx.machineKeystone&&(e*=5),this.fx.manualKeystone&&(e*=.5),this.fx.fullAuto&&(e*=8),this.fx.dimensionProduction&&(e*=1+this.s.ascensions*this.fx.dimensionProduction),this.s.challenge?.id==="instability"&&(e*=1+.7*Math.sin(this.s.stats.time)),pt(e)}get auto(){return this.s.challenge?.id==="manual"?0:pt((this.fx.autoClicks||0)*this.manual)}get cps(){return pt(this.passive+this.auto)}get offlineEfficiency(){return this.fx.neverOffline?1:Math.min(1,this.fx.offline||0)}get offlineHours(){return Math.min(48,8+(this.fx.hours||0))}gain(e,t=!1){e=pt(e);for(let i of["energy","lifetime","run"])this.s[i]=pt(this.s[i]+e);t&&(this.s.stats.passive=pt(this.s.stats.passive+e)),this.q("earn",e),this.s.challenge&&(this.s.challenge.earned=pt(this.s.challenge.earned+e))}xp(e){let t=this.level;this.s.xp=pt(this.s.xp+e*(1+(this.fx.xp||0))*this.buff("xp"));let i=this.level-t;if(i){let n=i*(1+(this.fx.levelPoints||0));for(let r=t+1;r<=this.level;r++)r%10===0&&(n+=3);this.addPoints(n),this.s.dust+=i,this.q("level",i),this.notice(`Level ${this.level} \xB7 +${n} Skill Points`),this.emit("level")}}addPoints(e){this.s.points+=e,this.s.pointsEarned+=e}pulse(){if(this.s.challenge?.id==="machine")return{value:0,critical:!1};let e=performance.now();this.combo=Math.min(100,this.combo+(e-this.lastClick<550?8:3)),this.lastClick=e;let t=Math.random()<this.crit;this.s.stats.clicks++;let i=this.manual*(1+this.combo/100*(2+(this.fx.combo||0)))*(t?this.critMult:1);return this.fx.tenth&&this.s.stats.clicks%10===0&&(i*=5),this.fx.jackpot&&Math.random()<.002&&(i*=100,this.notice("JACKPOT PULSE \xB7 100\xD7 energy")),this.gain(i),this.s.stats.highest=Math.max(this.s.stats.highest,pt(i)),this.s.stats.combo=Math.max(this.s.stats.combo,1+this.combo/50),this.q("click"),t&&(this.s.stats.criticals++,this.q("crit")),this.xp(4),this.emit("pulse",{value:pt(i),critical:t}),{value:pt(i),critical:t}}nodeCost(e){let t=this.s.skills[e.id]||0;return e.tree==="mastery"?Math.ceil(e.cost*(1+t*.35)):e.tree==="quantum"?Math.ceil(e.cost*1.35**t):e.cost}available(e){if((this.s.skills[e.id]||0)>=e.max||e.tree==="quantum"&&!this.s.rebirths||e.tree==="ascension"&&!this.s.ascensions||e.tree==="mastery"&&this.level<100)return!1;if(this.s.challenge?.id==="branch"&&e.tree==="main"&&e.branch!=="cross"){let t=new Set(Object.keys(this.s.skills).filter(i=>Dt[i]?.tree==="main").map(i=>Dt[i].branch));if(t.size&&!t.has(e.branch))return!1}return e.requires.every(t=>(this.s.skills[t]||0)>0)}skillBuy(e){let t=Dt[e];if(!t||!this.available(t))return!1;let i=t.tree==="quantum"?"cores":t.tree==="ascension"?"shards":"points",n=this.nodeCost(t);return this.s[i]<n?!1:(this.s[i]-=n,this.s.skills[e]=(this.s.skills[e]||0)+1,this.s.firstSkills.includes(e)||(this.s.firstSkills.push(e),this.xp(8),this.q("node")),this.recompute(),this.notice(`${t.name} \xB7 level ${this.s.skills[e]}`),this.emit("skill",e),this.progress(),this.save(),!0)}respec(){if(this.s.respecs&&this.s.dust<25)return!1;let e=Object.keys(this.s.skills).filter(i=>Dt[i].tree==="main"),t=0;return e.forEach(i=>{t+=this.s.skills[i]*Dt[i].cost,delete this.s.skills[i]}),this.s.respecs&&(this.s.dust-=25),this.s.points+=t,this.s.respecs++,this.recompute(),this.s.areas=["lab"],this.progress(),this.emit("teleport","lab"),this.notice(`${t} Skill Points refunded`),this.save(),!0}quote(e,t=1){let i=ei[e],n=this.s.machines[e],r=1e4-n,a=l=>pt(i.base*i.growth**n*(i.growth**l-1)/(i.growth-1)),o=Math.min(t==="max"?r:t,r);if(t==="max"){let l=0,c=r;for(;l<c;){let u=Math.ceil((c+l)/2);a(u)<=this.s.energy?l=u:c=u-1}o=l}return{n:o,cost:o?a(o):0}}buyMachine(e,t){if(!this.fx.automation||!this.s.areas.includes(ei[e].area))return!1;let i=this.quote(e,t);return i.n<1||this.s.energy<i.cost?!1:(this.s.energy-=i.cost,this.s.machines[e]+=i.n,this.s.stats.purchases+=i.n,this.q("buy",i.n),this.xp(i.n*6),this.emit("machine",e),this.progress(),!0)}facilityBuy(e){let t=1e3*2**this.s.facility[e];this.s.energy<t||this.s.facility[e]>=50||(this.s.energy-=t,this.s.facility[e]++,this.recompute(),this.emit("world"),this.xp(15))}startResearch(e){if(this.s.researchJob)return;let t=mn[e],i=t[2]*2**this.s.research[e];this.s.energy<i||this.s.research[e]>=20||(this.s.energy-=i,this.s.researchJob={i:e,end:Date.now()+t[3]*1e3},this.notice("Research started \xB7 "+t[0]),this.emit("change"))}get rebirthRequirement(){return 1e6*Math.pow(1.15,this.s.cycle)}get rebirthGain(){return Math.floor(Math.sqrt(this.s.run/this.rebirthRequirement)*(1+(this.fx.prestige||0))*(1+.1*this.drone(3)))}performRebirth(){if(this.s.run<this.rebirthRequirement)return 0;let e=this.rebirthGain;this.s.cores+=e,this.s.coreTotal+=e,this.s.rebirths++,this.s.cycle++,this.addPoints(2+(this.fx.rebirthPoints||0)),this.s.energy=this.fx.startEnergy||0,this.s.run=0;let t=Math.min(.8,this.fx.memory||0);return this.s.machines=this.s.machines.map(i=>Math.floor(i*t)),this.s.machines[0]+=this.fx.startMachine||0,this.s.facility.fill(0),this.s.areas=["lab"],this.s.boosts=[],this.s.challenge=null,this.s.researchJob=null,this.combo=0,this.q("rebirth"),this.xp(150),this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.progress(),this.save(),e}ascend(){if(this.s.cycle<10)return!1;this.s.ascensions++,this.s.shards+=3,this.s.cycle=0,this.s.cores=0,this.s.coreTotal=0;for(let e of Object.keys(this.s.skills))Dt[e].tree==="quantum"&&delete this.s.skills[e];return this.s.energy=0,this.s.run=0,this.s.machines.fill(0),this.s.facility.fill(0),this.s.research.fill(0),this.s.researchJob=null,this.s.boosts=[],this.s.challenge=null,this.s.areas=["lab"],this.addPoints(5),this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.progress(),this.save(),!0}newReality(){if(this.s.ascensions<3||!this.fx.breakReality||!this.fx.multiverse)return!1;let e=this.s;return this.s=Ln(),this.s.reality=e.reality+1,this.s.skins=[...new Set([...e.skins,"reality"])],this.s.skin="reality",this.s.settings=e.settings,this.s.achievements=e.achievements,this.s.stats=e.stats,this.s.lifetime=e.lifetime,this.s.secrets=e.secrets,this.s.points=6+this.s.reality*2,this.s.pointsEarned=this.s.points,this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.notice("NEW REALITY \xB7 All-energy multiplier increased"),this.save(),!0}challengeStart(e){if(this.s.challenge={id:e,start:Date.now(),earned:0},this.s.energy=0,this.s.run=0,this.s.machines.fill(0),this.s.boosts=[],e==="machine"&&(this.s.machines[0]=1,!this.fx.automation)){this.s.challenge=null,this.notice("Unlock Basic automation first.");return}this.emit("world"),this.emit("teleport","lab")}addBoost(e,t,i){let n=this.s.boosts.find(r=>r.type===e&&r.mult===t);n?n.end=Math.max(Date.now(),n.end)+i*1e3:this.s.boosts.push({type:e,mult:t,end:Date.now()+i*1e3}),this.emit("change")}collect(e){this.s.collected.includes(e)||(this.s.collected.push(e),this.s.dust+=2,this.xp(15),this.q("shard"),this.s.collected.length%5===0&&this.addPoints(1),this.s.collected.length>=50&&this.unlockSkin("reality"),this.notice(`Energy shard ${this.s.collected.length}/50 \xB7 +2 stardust`),this.emit("collected",e),this.progress())}secret(e){this.s.secrets.includes(e)||(this.s.secrets.push(e),this.addPoints(2),this.s.dust+=10,this.notice("Hidden discovery \xB7 +2 Skill Points \xB7 +10 stardust"),e==="terminal"&&this.unlockSkin("developer"),this.progress())}unlockSkin(e){this.s.skins.includes(e)||(this.s.skins.push(e),this.notice("Reactor skin unlocked \xB7 "+Ti.find(t=>t[0]===e)[1]))}buySkin(e){let t=Ti.find(i=>i[0]===e);if(t){if(!this.s.skins.includes(e)){if(t[4]<0||this.s.dust<t[4])return;this.s.dust-=t[4],this.unlockSkin(e)}this.s.skin=e,this.emit("world")}}droneBuy(e){this.s.dust<wi[e][3]||(this.s.dust-=wi[e][3],this.s.droneCopies[e]++,!this.s.equipped.includes(e)&&this.s.equipped.length<this.s.slots&&this.s.equipped.push(e),this.emit("world"))}droneFuse(e){this.s.droneCopies[e]<3||this.s.droneLevels[e]>=10||(this.s.droneCopies[e]-=2,this.s.droneLevels[e]++,this.notice("Drone evolved \xB7 "+wi[e][0]),this.emit("world"))}npcTalk(e){return this.s.stats.npcTalks++,this.s.stats.npcTalks>=100&&this.secret("social"),Sr.find(t=>t[0]===e)}npcValue(e){return e[3]==="lifetime"?this.s.lifetime:e[3]==="nodes"?Object.keys(this.s.skills).length:e[3]==="machines"?this.s.machines.reduce((t,i)=>t+i,0):this.s.discovered.length}npcClaim(e){let t=Sr.find(i=>i[0]===e);!t||this.npcValue(t)<t[4]||this.s.npcClaims.includes(e)||(this.s.npcClaims.push(e),this.addPoints(3),this.s.dust+=15,this.s.stats.quests++,this.xp(100),this.notice("Assignment complete \xB7 +3 Skill Points \xB7 +15 stardust"))}calendar(){let e=new Date,t=e.toISOString().slice(0,10);e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+6)%7);let i=e.toISOString().slice(0,10);return this.s.quests.day!==t&&(this.s.quests.day=t,this.s.quests.daily={},this.s.quests.claims=this.s.quests.claims.filter(n=>n.startsWith("w"))),this.s.quests.week!==i&&(this.s.quests.week=i,this.s.quests.weekly={},this.s.quests.claims=this.s.quests.claims.filter(n=>n.startsWith("d"))),t}q(e,t=1){for(let i of["daily","weekly"])this.s.quests[i][e]=pt((this.s.quests[i][e]||0)+t)}missions(){return[["d0","daily","earn",1e7,"Generate 10M energy"],["d1","daily","buy",25,"Buy 25 machine levels"],["d2","daily","node",2,"Unlock 2 skill nodes"],["d3","daily","game",1,"Complete a minigame"],["d4","daily","shard",3,"Find 3 energy shards"],["w0","weekly","rebirth",5,"Rebirth 5 times"],["w1","weekly","boss",10,"Defeat 10 bosses"],["w2","weekly","game",20,"Complete 20 minigames"],["w3","weekly","level",20,"Gain 20 levels"]]}claimMission(e){let t=this.missions().find(n=>n[0]===e);if(!t||this.s.quests.claims.includes(e)||(this.s.quests[t[1]][t[2]]||0)<t[3])return;this.s.quests.claims.push(e);let i=t[1]==="daily"?1:3;this.addPoints(i),this.s.dust+=i*5,this.s.stats.quests++,this.xp(i*50),this.notice(`Mission complete \xB7 +${i} Skill Points`)}dailyClaim(){let e=this.calendar();if(this.s.daily.date===e)return!1;let t=new Date(Date.now()-864e5).toISOString().slice(0,10);this.s.daily.streak=this.s.daily.date===t?this.s.daily.streak+1:1,this.s.daily.date=e;let i=(this.s.daily.streak-1)%7+1;return i===1&&this.gain(Math.max(100,this.cps*60)),i===2&&this.addBoost("all",2,300),i===3&&this.xp(200),i===4&&(this.s.tokens+=20),i===5&&this.s.droneCopies[0]++,i===6&&(this.s.cores++,this.s.coreTotal++),i===7&&(this.unlockSkin("galaxy"),this.s.dust+=25),this.notice("Day "+i+" supply claimed"),this.save(),!0}progress(){for(let e of lt)!this.s.areas.includes(e.id)&&this.s.run>=e.need&&(!e.flag||this.fx[e.flag])&&(this.s.areas.push(e.id),this.s.discovered.includes(e.id)||(this.s.discovered.push(e.id),this.xp(60),this.addPoints(1)),this.notice("AREA UNLOCKED \xB7 "+e.name),this.emit("area",e.id));for(let e of this.achDefs)!this.s.achievements.includes(e.id)&&e.value()>=e.goal&&(this.s.achievements.push(e.id),this.s.dust+=e.reward,this.s.achievements.length%5===0&&this.addPoints(1),this.notice("Achievement \xB7 "+e.name));if(this.s.rebirths>=1&&this.unlockSkin("toxic"),this.s.rebirths>=10&&this.unlockSkin("void"),this.s.ascensions>=1&&this.unlockSkin("blackhole"),this.level>=50&&this.unlockSkin("frozen"),this.s.challenge){let e=this.s.challenge;e.earned>=1e6?(this.s.completedChallenges.includes(e.id)||(this.s.completedChallenges.push(e.id),this.addPoints(3)),this.s.dust+=20,this.s.challenge=null,this.notice("Challenge complete \xB7 +20 stardust")):e.id==="speed"&&Date.now()-e.start>18e4&&(this.s.challenge=null,this.notice("Speed challenge expired."))}}tick(e){if((!this.resetting||this.fx.temporal)&&this.gain(this.cps*e,!0),this.s.stats.time+=e,performance.now()-this.lastClick>450&&(this.combo=Math.max(0,this.combo-e*16)),this.lastProductionRoll+=e,this.lastProductionRoll>=1&&(this.lastProductionRoll=0,this.fx.luckyMachine&&Math.random()<.05&&this.gain(this.passive,!0),this.progress()),this.lastMining+=e,this.lastMining>=60&&(this.lastMining=0,this.drone(2)&&(this.gain(Math.max(100,this.cps*10)*this.drone(2)),this.notice("Mining drone delivered an energy cache"))),this.s.researchJob&&Date.now()>=this.s.researchJob.end){let t=this.s.researchJob.i;this.s.research[t]++,this.s.researchJob=null,this.recompute(),this.xp(80),this.notice("Research complete \xB7 "+mn[t][0])}}makeAchievements(){let e=[],t=(i,n,r,a)=>r.forEach((o,l)=>e.push({id:i+l,name:`${n} ${l+1}`,goal:o,value:a,reward:2+l,desc:`${n} \xB7 ${yc(o)}`}));return t("energy","Energy pioneer",[1,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e12,1e15,1e18],()=>this.s.lifetime),t("click","Pulse technician",[10,100,500,1e3,5e3,1e4,5e4,1e5,1e6],()=>this.s.stats.clicks),t("machine","Industrial revolution",[1,10,25,50,100,250,500,1e3],()=>this.s.machines.reduce((i,n)=>i+n,0)),t("node","Knowledge is power",[1,5,10,25,50,75,100,130],()=>Object.keys(this.s.skills).length),t("rebirth","Reborn",[1,3,5,10,25,50,100],()=>this.s.rebirths),t("area","Explorer",[2,3,5,7,10],()=>this.s.discovered.length),t("shard","Crystal collector",[1,5,10,25,50],()=>this.s.collected.length),t("boss","Boss slayer",[1,3,7,10,25,50],()=>this.s.stats.bosses),t("game","Arcade regular",[1,5,10,25,50,100],()=>this.s.stats.games),t("crit","Critical thinker",[10,100,1e3,1e4],()=>this.s.stats.criticals),t("time","Dedicated engineer",[600,3600,18e3],()=>this.s.stats.time),t("asc","Ascended",[1,3,10],()=>this.s.ascensions),e.push({id:"memory",name:"Perfect stabilisation",goal:8,value:()=>this.s.stats.memory,reward:15,desc:"Complete eight stabilisation rounds."},{id:"secret",name:"Under the surface",goal:3,value:()=>this.s.secrets.length,reward:20,desc:"Find three world secrets."},{id:"reality",name:"Reality breaker",goal:1,value:()=>this.s.reality,reward:30,desc:"Enter a New Reality."}),e}validate(e){if(e?.version===1)return this.migrate(e);if(!e||e.version!==2)throw Error("This is not a Nova Foundry 3D save.");let t=Ln(),i=(o,l=1e280,c=!1)=>{if(typeof o!="number"||!Number.isFinite(o)||o<0||o>l||c&&!Number.isInteger(o))throw Error("Invalid numeric data in save.");return o};for(let o of["energy","lifetime","run","dust","tokens","cores","coreTotal","shards","xp","points","pointsEarned","rebirths","cycle","ascensions","reality","respecs","last"])t[o]=i(e[o]);for(let o of["machines","facility","research","droneCopies","droneLevels"]){if(!Array.isArray(e[o])||e[o].length!==t[o].length)throw Error("Invalid array: "+o);t[o]=e[o].map(l=>i(l,o==="machines"?1e4:o==="droneLevels"?10:1e6,!0))}if(!e.skills||typeof e.skills!="object")throw Error("Missing skills.");for(let[o,l]of Object.entries(e.skills)){if(!Dt[o])throw Error("Unknown skill.");t.skills[o]=i(l,Dt[o].max,!0)}let n={firstSkills:Lt.map(o=>o.id),areas:lt.map(o=>o.id),discovered:lt.map(o=>o.id),skins:Ti.map(o=>o[0]),equipped:[0,1,2,3,4],achievements:this.achDefs.map(o=>o.id),npcClaims:Sr.map(o=>o[0]),completedChallenges:["manual","machine","instability","speed","branch"],secrets:["reactortop","tunnel","terminal","social","hidden"]};for(let[o,l]of Object.entries(n)){if(!Array.isArray(e[o]))throw Error("Missing "+o);t[o]=[...new Set(e[o].filter(c=>l.includes(c)))]}if(!Array.isArray(e.collected))throw Error("Missing shard data.");t.collected=[...new Set(e.collected.map(o=>i(o,49,!0)))],t.slots=i(e.slots,3,!0)||1,t.equipped=t.equipped.filter(o=>t.droneCopies[o]>0).slice(0,t.slots),t.skin=t.skins.includes(e.skin)?e.skin:"azure",t.skins.includes("azure")||t.skins.push("azure"),t.outfit=i(e.outfit,7,!0);for(let o of Object.keys(t.stats))t.stats[o]=i(e.stats?.[o]);for(let o of Object.keys(t.settings)){let l=e.settings?.[o];typeof t.settings[o]=="boolean"&&typeof l=="boolean"&&(t.settings[o]=l)}for(let o of["master","sfx","musicVolume"])t.settings[o]=i(e.settings?.[o],1);t.settings.sensitivity=i(e.settings?.sensitivity,3);let r={view:["first","third"],quality:["low","medium","high","ultra"],notation:["short","scientific"],fps:[30,60,120],renderDistance:[75,150,250],accent:["#79dfc4","#72d8ee","#c2a4ff","#f3c87d"],machineColor:["#6f8fa5","#bf815e","#849a71","#9982b2"]};for(let[o,l]of Object.entries(r))l.includes(e.settings?.[o])&&(t.settings[o]=e.settings[o]);let a=o=>typeof o=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(o)?o:"";t.daily={date:a(e.daily?.date),streak:i(e.daily?.streak??0,1e6,!0)},t.quests.day=a(e.quests?.day),t.quests.week=a(e.quests?.week);for(let o of["daily","weekly"])for(let l of["earn","click","crit","buy","node","game","shard","rebirth","boss","level"])t.quests[o][l]=i(e.quests?.[o]?.[l]??0);if(t.quests.claims=(e.quests?.claims||[]).filter(o=>this.missions().some(l=>l[0]===o)),!Array.isArray(e.boosts)||e.boosts.length>50)throw Error("Invalid boosts.");if(t.boosts=e.boosts.map(o=>{if(!["all","click","passive","xp","luck"].includes(o.type))throw Error("Invalid boost type.");return{type:o.type,mult:i(o.mult,10),end:i(o.end,Date.now()+7*864e5)}}),e.researchJob&&(t.researchJob={i:i(e.researchJob.i,4,!0),end:i(e.researchJob.end,Date.now()+864e5)}),e.challenge&&["manual","machine","instability","speed","branch"].includes(e.challenge.id)&&(t.challenge={id:e.challenge.id,start:i(e.challenge.start,Date.now()+864e5),earned:i(e.challenge.earned)}),e.position)for(let o of["x","y","z","yaw","pitch"]){let l=e.position[o];typeof l=="number"&&Number.isFinite(l)&&Math.abs(l)<1e3&&(t.position[o]=l)}return t}migrate(e){let t=Ln();for(let i of["energy","lifetime","run","xp","cores","coreTotal","tokens","rebirths","ascensions"]){if(typeof e[i]!="number"||!Number.isFinite(e[i])||e[i]<0)throw Error("Invalid classic save.");t[i]=pt(e[i])}return t.dust=pt(e.gems||0),t.points=1+Math.floor(Math.sqrt(t.xp/35))+t.rebirths*2,t.pointsEarned=t.points,t.machines[0]=Math.min(1e4,Math.max(0,Math.floor(e.generators?.[0]||0))),t.machines[0]&&(t.skills["auto-0"]=1),t.stats.clicks=pt(e.stats?.clicks||0),t}offline(){this.recompute();let e=Math.min(this.offlineHours*3600,Math.max(0,(Date.now()-this.s.last)/1e3)),t=this.s.boosts;this.s.boosts=[];let i=this.cps*e*this.offlineEfficiency*(1+(this.fx.offlineProduction||0));this.s.boosts=t.filter(n=>n.end>Date.now()),e>20&&i>0&&(this.gain(i,!0),this.s.stats.offline=pt(this.s.stats.offline+i),this.pendingOffline={seconds:e,amount:pt(i)}),this.s.last=Date.now()}save(){this.s.last=Date.now();try{localStorage.setItem(br,JSON.stringify(this.s)),this.storageFailed=!1}catch{this.storageFailed||this.notice("Browser storage unavailable. Export your save from Settings."),this.storageFailed=!0}}load(){try{let e=localStorage.getItem(br);e&&(this.s=this.validate(JSON.parse(e)),this.offline())}catch{this.loadError="Your stored save could not be loaded. A fresh session is ready. Use Import to restore a backup."}}import(e){let t=this.validate(JSON.parse(e));try{localStorage.setItem(br+"-backup",JSON.stringify(this.s))}catch{}this.s=t,this.calendar(),this.offline(),this.recompute(),this.progress(),this.emit("world"),this.emit("teleport","lab"),this.save()}};var Yc=0,El=1,Zc=2;var js=1,Da=2,us=3,Ni=0,Wt=1,Mi=2,ii=0,Mn=1,Qs=2,Tl=3,wl=4,Jc=5;var ji=100,Kc=101,jc=102,Qc=103,eh=104,th=200,ih=201,nh=202,sh=203,Kr=204,jr=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,Qr=0,ea=1,ta=2,Sn=3,ia=4,na=5,sa=6,ra=7,Al=0,ph=1,mh=2,li=0,er=1,tr=2,ir=3,wn=4,nr=5,sr=6,rr=7;var Cl=300,on=301,An=302,Na=303,Ua=304,ar=306,aa=1e3,xi=1001,oa=1002,Rt=1003,gh=1004;var or=1005;var Ft=1006,Fa=1007;var ln=1008;var $t=1009,Rl=1010,Pl=1011,ds=1012,Oa=1013,ci=1014,hi=1015,zt=1016,Ba=1017,ka=1018,fs=1020,Il=35902,Ll=35899,Dl=1021,Nl=1022,ni=1023,vi=1026,cn=1027,Ul=1028,za=1029,hn=1030,Va=1031;var Ga=1033,lr=33776,cr=33777,hr=33778,ur=33779,Ha=35840,Wa=35841,Xa=35842,qa=35843,$a=36196,Ya=37492,Za=37496,Ja=37488,Ka=37489,dr=37490,ja=37491,Qa=37808,eo=37809,to=37810,io=37811,no=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,xo=36283,vo=36284,fr=36285,_o=36286;var ws=2300,la=2301,Jr=2302,fl=2303,pl=2400,ml=2401,gl=2402;var xh=3200;var yo=0,vh=1,Bi="",Nt="srgb",As="srgb-linear",Cs="linear",Xe="srgb";var yn=7680;var xl=519,_h=512,yh=513,bh=514,bo=515,Mh=516,Sh=517,Mo=518,Eh=519,ca=35044;var Fl="300 es",oi=2e3,Jn=2001;function Mu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Su(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Th(){let s=Rs("canvas");return s.style.display="block",s}var Mc={},Kn=null;function Ps(...s){let e="THREE."+s.shift();Kn?Kn("log",e,...s):console.log(e,...s)}function wh(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=wh(s);let e="THREE."+s.shift();if(Kn)Kn("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ce(...s){s=wh(s);let e="THREE."+s.shift();if(Kn)Kn("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function bn(...s){let e=s.join(" ");e in Mc||(Mc[e]=!0,Ie(...s))}function Ah(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ch={[Qr]:ea,[ta]:sa,[ia]:ra,[Sn]:na,[ea]:Qr,[sa]:ta,[ra]:ia,[na]:Sn},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Go=Math.PI/180,ha=180/Math.PI;function Ki(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ge(s,e,t){return Math.max(e,Math.min(t,s))}function Eu(s,e){return(s%e+e)%e}function Ho(s,e,t){return(1-t)*s+t*e}function gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vl=class Vl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vl.prototype.isVector2=!0;var ye=Vl,yi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],d=i[n+3],h=r[a+0],p=r[a+1],v=r[a+2],b=r[a+3];if(d!==b||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+d*b;m<0&&(h=-h,p=-p,v=-v,b=-b,m=-m);let f=1-o;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);f=Math.sin(f*E)/A,o=Math.sin(o*E)/A,l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+b*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+b*o;let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],d=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-o*p,e[t+2]=c*v+u*p+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),d=o(r/2),h=l(i/2),p=l(n/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gl=class Gl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=n+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gl.prototype.isVector3=!0;var L=Gl,Wo=new L,Sc=new yi,Hl=class Hl{constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],b=n[0],m=n[3],f=n[6],E=n[1],A=n[4],y=n[7],w=n[2],S=n[5],C=n[8];return r[0]=a*b+o*E+l*w,r[3]=a*m+o*A+l*S,r[6]=a*f+o*y+l*C,r[1]=c*b+u*E+d*w,r[4]=c*m+u*A+d*S,r[7]=c*f+u*y+d*C,r[2]=h*b+p*E+v*w,r[5]=h*m+p*A+v*S,r[8]=h*f+p*y+v*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,v=t*d+i*h+n*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return e[0]=d*b,e[1]=(n*c-u*i)*b,e[2]=(o*i-n*a)*b,e[3]=h*b,e[4]=(u*t-n*l)*b,e[5]=(n*r-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return bn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return bn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return bn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hl.prototype.isMatrix3=!0;var Ne=Hl,Xo=new Ne,Ec=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){let s={enabled:!0,workingColorSpace:As,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Xe&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xe&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Bi?Cs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return bn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return bn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[As]:{primaries:e,whitePoint:i,transfer:Cs,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:Xe,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),s}var ze=Tu();function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Dn,ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Dn===void 0&&(Dn=Rs("canvas")),Dn.width=e.width,Dn.height=e.height;let n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Dn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wu=0,jn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(qo(n[a].image)):r.push(qo(n[a]))}else r=qo(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function qo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Au=0,$o=new L,Ht=class s extends _i{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=xi,n=xi,r=Ft,a=ln,o=ni,l=$t,c=s.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Ki(),this.name="",this.source=new jn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Cl;Ht.DEFAULT_ANISOTROPY=1;var Wl=class Wl{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(p+1)/2,w=(f+1)/2,S=(u+h)/4,C=(d+b)/4,x=(v+m)/4;return A>y&&A>w?A<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(A),n=S/i,r=C/i):y>w?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=S/n,r=x/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=C/r,n=x/r),this.set(i,n,r,t),this}let E=Math.sqrt((m-v)*(m-v)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(d-b)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wl.prototype.isVector4=!0;var ct=Wl,da=class extends _i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},r=new Ht(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new jn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Et=class extends da{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Is=class extends Ht{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends Ht{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var La=class La{constructor(e,t,i,n,r,a,o,l,c,u,d,h,p,v,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,d,h,p,v,b,m)}set(e,t,i,n,r,a,o,l,c,u,d,h,p,v,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Nn.setFromMatrixColumn(e,0).length(),r=1/Nn.setFromMatrixColumn(e,1).length(),a=1/Nn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*d,v=o*u,b=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,v=c*u,b=c*d;t[0]=h+b*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,v=c*u,b=c*d;t[0]=h-b*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*d,v=o*u,b=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+b,t[1]=l*d,t[5]=b*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-b*d}else if(e.order==="XZY"){let h=a*l,p=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+b,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=b*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Ru)}lookAt(e,t,i){let n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Xi.crossVectors(i,Zt),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Xi.crossVectors(i,Zt)),Xi.normalize(),Tr.crossVectors(Zt,Xi),n[0]=Xi.x,n[4]=Tr.x,n[8]=Zt.x,n[1]=Xi.y,n[5]=Tr.y,n[9]=Zt.y,n[2]=Xi.z,n[6]=Tr.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],b=i[6],m=i[10],f=i[14],E=i[3],A=i[7],y=i[11],w=i[15],S=n[0],C=n[4],x=n[8],M=n[12],R=n[1],P=n[5],N=n[9],W=n[13],q=n[2],O=n[6],H=n[10],G=n[14],K=n[3],Q=n[7],he=n[11],pe=n[15];return r[0]=a*S+o*R+l*q+c*K,r[4]=a*C+o*P+l*O+c*Q,r[8]=a*x+o*N+l*H+c*he,r[12]=a*M+o*W+l*G+c*pe,r[1]=u*S+d*R+h*q+p*K,r[5]=u*C+d*P+h*O+p*Q,r[9]=u*x+d*N+h*H+p*he,r[13]=u*M+d*W+h*G+p*pe,r[2]=v*S+b*R+m*q+f*K,r[6]=v*C+b*P+m*O+f*Q,r[10]=v*x+b*N+m*H+f*he,r[14]=v*M+b*W+m*G+f*pe,r[3]=E*S+A*R+y*q+w*K,r[7]=E*C+A*P+y*O+w*Q,r[11]=E*x+A*N+y*H+w*he,r[15]=E*M+A*W+y*G+w*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],b=e[7],m=e[11],f=e[15],E=l*p-c*h,A=o*p-c*d,y=o*h-l*d,w=a*p-c*u,S=a*h-l*u,C=a*d-o*u;return t*(b*E-m*A+f*y)-i*(v*E-m*w+f*S)+n*(v*A-b*w+f*C)-r*(v*y-b*S+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],b=e[13],m=e[14],f=e[15],E=t*o-i*a,A=t*l-n*a,y=t*c-r*a,w=i*l-n*o,S=i*c-r*o,C=n*c-r*l,x=u*b-d*v,M=u*m-h*v,R=u*f-p*v,P=d*m-h*b,N=d*f-p*b,W=h*f-p*m,q=E*W-A*N+y*P+w*R-S*M+C*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return e[0]=(o*W-l*N+c*P)*O,e[1]=(n*N-i*W-r*P)*O,e[2]=(b*C-m*S+f*w)*O,e[3]=(h*S-d*C-p*w)*O,e[4]=(l*R-a*W-c*M)*O,e[5]=(t*W-n*R+r*M)*O,e[6]=(m*y-v*C-f*A)*O,e[7]=(u*C-h*y+p*A)*O,e[8]=(a*N-o*R+c*x)*O,e[9]=(i*R-t*N-r*x)*O,e[10]=(v*S-b*y+f*E)*O,e[11]=(d*y-u*S-p*E)*O,e[12]=(o*M-a*P-l*x)*O,e[13]=(t*P-i*M+n*x)*O,e[14]=(b*A-v*w-m*E)*O,e[15]=(u*w-d*A+h*E)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,v=r*d,b=a*u,m=a*d,f=o*d,E=l*c,A=l*u,y=l*d,w=i.x,S=i.y,C=i.z;return n[0]=(1-(b+f))*w,n[1]=(p+y)*w,n[2]=(v-A)*w,n[3]=0,n[4]=(p-y)*S,n[5]=(1-(h+f))*S,n[6]=(m+E)*S,n[7]=0,n[8]=(v+A)*C,n[9]=(m-E)*C,n[10]=(1-(h+b))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Nn.set(n[0],n[1],n[2]).length(),o=Nn.set(n[4],n[5],n[6]).length(),l=Nn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),si.copy(this);let c=1/a,u=1/o,d=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=oi,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-n),h=(t+e)/(t-e),p=(i+n)/(i-n),v,b;if(l)v=r/(a-r),b=a*r/(a-r);else if(o===oi)v=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Jn)v=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=oi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-n),h=-(t+e)/(t-e),p=-(i+n)/(i-n),v,b;if(l)v=1/(a-r),b=a/(a-r);else if(o===oi)v=-2/(a-r),b=-(a+r)/(a-r);else if(o===Jn)v=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};La.prototype.isMatrix4=!0;var at=La,Nn=new L,si=new at,Cu=new L(0,0,0),Ru=new L(1,1,1),Xi=new L,Tr=new L,Zt=new L,wc=new at,Ac=new yi,Ui=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],d=n[2],h=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Qn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pu=0,Cc=new L,Un=new yi,Ai=new at,wr=new L,_s=new L,Iu=new L,Lu=new yi,Rc=new L(1,0,0),Pc=new L(0,1,0),Ic=new L(0,0,1),Lc={type:"added"},Du={type:"removed"},Fn={type:"childadded",child:null},Yo={type:"childremoved",child:null},Pt=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Ui,i=new yi,n=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new Ne}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wr.copy(e):wr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(_s,wr,this.up):Ai.lookAt(wr,_s,this.up),this.quaternion.setFromRotationMatrix(Ai),n&&(Ai.extractRotation(n.matrixWorld),Un.setFromRotationMatrix(Ai),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Pt.DEFAULT_UP=new L(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nu={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,i),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Zo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ze.workingColorSpace){if(e=Eu(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Zo(a,r,e+1/3),this.g=Zo(a,r,e),this.b=Zo(a,r,e-1/3)}return ze.colorSpaceToWorking(this,n),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let i=Rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ze.workingToColorSpace(kt.copy(this),e),Math.round(Ge(kt.r*255,0,255))*65536+Math.round(Ge(kt.g*255,0,255))*256+Math.round(Ge(kt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(kt.copy(this),t);let i=kt.r,n=kt.g,r=kt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Nt){ze.workingToColorSpace(kt.copy(this),e);let t=kt.r,i=kt.g,n=kt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Ar);let i=Ho(qi.h,Ar.h,t),n=Ho(qi.s,Ar.s,t),r=Ho(qi.l,Ar.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new Le;Le.NAMES=Rh;var Ls=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ds=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new L,Ci=new L,Jo=new L,Ri=new L,On=new L,Bn=new L,Dc=new L,Ko=new L,jo=new L,Qo=new L,el=new ct,tl=new ct,il=new ct,Li=class s{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ri.subVectors(e,t),n.cross(ri);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ri.subVectors(n,t),Ci.subVectors(i,t),Jo.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Ci),l=ri.dot(Jo),c=Ci.dot(Ci),u=Ci.dot(Jo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return el.setScalar(0),tl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(e,t),tl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(el,r.x),a.addScaledVector(tl,r.y),a.addScaledVector(il,r.z),a}static isFrontFacing(e,t,i,n){return ri.subVectors(i,t),Ci.subVectors(e,t),ri.cross(Ci).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ri.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;On.subVectors(n,i),Bn.subVectors(r,i),Ko.subVectors(e,i);let l=On.dot(Ko),c=Bn.dot(Ko);if(l<=0&&c<=0)return t.copy(i);jo.subVectors(e,n);let u=On.dot(jo),d=Bn.dot(jo);if(u>=0&&d<=u)return t.copy(n);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(On,a);Qo.subVectors(e,r);let p=On.dot(Qo),v=Bn.dot(Qo);if(v>=0&&p<=v)return t.copy(r);let b=p*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Bn,o);let m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Dc.subVectors(r,n),o=(d-u)/(d-u+(p-v)),t.copy(n).addScaledVector(Dc,o);let f=1/(m+b+h);return a=b*f,o=h*f,t.copy(i).addScaledVector(On,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Rr.subVectors(this.max,ys),kn.subVectors(e.a,ys),zn.subVectors(e.b,ys),Vn.subVectors(e.c,ys),$i.subVectors(zn,kn),Yi.subVectors(Vn,zn),gn.subVectors(kn,Vn);let t=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-gn.z,gn.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,gn.z,0,-gn.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-gn.y,gn.x,0];return!nl(t,kn,zn,Vn,Rr)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,kn,zn,Vn,Rr))?!1:(Pr.crossVectors($i,Yi),t=[Pr.x,Pr.y,Pr.z],nl(t,kn,zn,Vn,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new L,new L,new L,new L,new L,new L,new L,new L],ai=new L,Cr=new Qi,kn=new L,zn=new L,Vn=new L,$i=new L,Yi=new L,gn=new L,ys=new L,Rr=new L,Pr=new L,xn=new L;function nl(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){xn.fromArray(s,r);let o=n.x*Math.abs(xn.x)+n.y*Math.abs(xn.y)+n.z*Math.abs(xn.z),l=e.dot(xn),c=t.dot(xn),u=i.dot(xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var bt=new L,Ir=new ye,Uu=0,qt=class extends _i{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ca,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ns=class extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Us=class extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Je=class extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Fu=new Qi,bs=new L,sl=new L,En=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fu.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(bs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(sl)),this.expandByPoint(bs.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ou=0,ti=new at,rl=new Pt,Gn=new L,Jt=new Qi,Ms=new Qi,Ct=new L,Mt=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Us:Ns)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Jt.min,Ms.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,Ms.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(Ms.min),Jt.expandByPoint(Ms.max))}Jt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Gn.fromBufferAttribute(e,c),Ct.add(Gn)),n=Math.max(n,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new L,l[x]=new L;let c=new L,u=new L,d=new L,h=new ye,p=new ye,v=new ye,b=new L,m=new L;function f(x,M,R){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,R),u.sub(c),d.sub(c),p.sub(h),v.sub(h);let P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),o[x].add(b),o[M].add(b),o[R].add(b),l[x].add(m),l[M].add(m),l[R].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,M=E.length;x<M;++x){let R=E[x],P=R.start,N=R.count;for(let W=P,q=P+N;W<q;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let A=new L,y=new L,w=new L,S=new L;function C(x){w.fromBufferAttribute(n,x),S.copy(w);let M=o[x];A.copy(M),A.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(S,M);let P=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,P)}for(let x=0,M=E.length;x<M;++x){let R=E[x],P=R.start,N=R.count;for(let W=P,q=P+N;W<q;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let n=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){let v=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,v),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,v=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new qt(h,u,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ca,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new L,Fs=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bu=0,bi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Mn,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=jr,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Sn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yn,this.stencilZFail=yn,this.stencilZPass=yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mn&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kr&&(i.blendSrc=this.blendSrc),this.blendDst!==jr&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ts=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hn,Ss=new L,Wn=new L,Xn=new L,qn=new ye,Es=new ye,Ph=new at,Lr=new L,Ts=new L,Dr=new L,Nc=new ye,al=new ye,Uc=new ye,Os=class extends Pt{constructor(e=new ts){if(super(),this.isSprite=!0,this.type="Sprite",Hn===void 0){Hn=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pa(t,5);Hn.setIndex([0,1,2,0,2,3]),Hn.setAttribute("position",new Fs(i,3,0,!1)),Hn.setAttribute("uv",new Fs(i,2,3,!1))}this.geometry=Hn,this.material=e,this.center=new ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wn.setFromMatrixScale(this.matrixWorld),Ph.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wn.multiplyScalar(-Xn.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;Nr(Lr.set(-.5,-.5,0),Xn,a,Wn,n,r),Nr(Ts.set(.5,-.5,0),Xn,a,Wn,n,r),Nr(Dr.set(.5,.5,0),Xn,a,Wn,n,r),Nc.set(0,0),al.set(1,0),Uc.set(1,1);let o=e.ray.intersectTriangle(Lr,Ts,Dr,!1,Ss);if(o===null&&(Nr(Ts.set(-.5,.5,0),Xn,a,Wn,n,r),al.set(0,1),o=e.ray.intersectTriangle(Lr,Dr,Ts,!1,Ss),o===null))return;let l=e.ray.origin.distanceTo(Ss);l<e.near||l>e.far||t.push({distance:l,point:Ss.clone(),uv:Li.getInterpolation(Ss,Lr,Ts,Dr,Nc,al,Uc,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Nr(s,e,t,i,n,r){qn.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Es.x=r*qn.x-n*qn.y,Es.y=n*qn.x+r*qn.y):Es.copy(qn),s.copy(e),s.x+=Es.x,s.y+=Es.y,s.applyMatrix4(Ph)}var Ii=new L,ol=new L,Ur=new L,Zi=new L,ll=new L,Fr=new L,cl=new L,is=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ol.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Zi.dot(this.direction),l=-Zi.dot(Ur),c=Zi.lengthSq(),u=Math.abs(1-a*a),d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){let b=1/u;d*=b,h*=b,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ol).addScaledVector(Ur,h),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let i=Ii.dot(this.direction),n=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,n,r){ll.subVectors(t,e),Fr.subVectors(i,e),cl.crossVectors(ll,Fr);let a=this.direction.dot(cl),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);let l=o*this.direction.dot(Fr.crossVectors(Zi,Fr));if(l<0)return null;let c=o*this.direction.dot(ll.cross(Zi));if(c<0||l+c>a)return null;let u=-o*Zi.dot(cl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fc=new at,vn=new is,Or=new En,Oc=new L,Br=new L,kr=new L,zr=new L,hl=new L,Vr=new L,Bc=new L,Gr=new L,Qe=class extends Pt{constructor(e=new Mt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(hl.fromBufferAttribute(d,e),a?Vr.addScaledVector(hl,u):Vr.addScaledVector(hl.sub(t),u))}t.add(Vr)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),vn.copy(e.ray).recast(e.near),!(Or.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Or,Oc)===null||vn.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Fc.copy(r).invert(),vn.copy(e.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vn)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){let m=h[v],f=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,w=A;y<w;y+=3){let S=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);n=Hr(this,f,e,i,c,u,d,S,C,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let v=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=v,f=b;m<f;m+=3){let E=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);n=Hr(this,a,e,i,c,u,d,E,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){let m=h[v],f=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,w=A;y<w;y+=3){let S=y,C=y+1,x=y+2;n=Hr(this,f,e,i,c,u,d,S,C,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let v=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=v,f=b;m<f;m+=3){let E=m,A=m+1,y=m+2;n=Hr(this,a,e,i,c,u,d,E,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function ku(s,e,t,i,n,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Ni,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:s}}function Hr(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Br),s.getVertexPosition(l,kr),s.getVertexPosition(c,zr);let u=ku(s,e,t,i,Br,kr,zr,Bc);if(u){let d=new L;Li.getBarycoord(Bc,Br,kr,zr,d),n&&(u.uv=Li.getInterpolatedAttribute(n,o,l,c,d,new ye)),r&&(u.uv1=Li.getInterpolatedAttribute(r,o,l,c,d,new ye)),a&&(u.normal=Li.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};Li.getNormal(Br,kr,zr,h.normal),u.face=h,u.barycoord=d}return u}var ma=class extends Ht{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Rt,u=Rt,d,h){super(null,a,o,l,c,u,n,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ul=new L,zu=new L,Vu=new Ne,mi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ul.subVectors(i,t).cross(zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(ul),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vu.getNormalMatrix(e),n=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_n=new En,Gu=new ye(.5,.5),Wr=new L,ns=class{constructor(e=new mi,t=new mi,i=new mi,n=new mi,r=new mi,a=new mi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],v=r[8],b=r[9],m=r[10],f=r[11],E=r[12],A=r[13],y=r[14],w=r[15];if(n[0].setComponents(c-a,p-u,f-v,w-E).normalize(),n[1].setComponents(c+a,p+u,f+v,w+E).normalize(),n[2].setComponents(c+o,p+d,f+b,w+A).normalize(),n[3].setComponents(c-o,p-d,f-b,w-A).normalize(),i)n[4].setComponents(l,h,m,y).normalize(),n[5].setComponents(c-l,p-h,f-m,w-y).normalize();else if(n[4].setComponents(c-l,p-h,f-m,w-y).normalize(),t===oi)n[5].setComponents(c+l,p+h,f+m,w+y).normalize();else if(t===Jn)n[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){_n.center.set(0,0,0);let t=Gu.distanceTo(e.center);return _n.radius=.7071067811865476+t,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Wr.x=n.normal.x>0?e.max.x:e.min.x,Wr.y=n.normal.y>0?e.max.y:e.min.y,Wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ss=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kc=new at,vl=new is,Xr=new En,qr=new L,Bs=class extends Pt{constructor(e=new Mt,t=new ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(n),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;kc.copy(n).invert(),vl.copy(e.ray).applyMatrix4(kc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,b=p;v<b;v++){let m=c.getX(v);qr.fromBufferAttribute(d,m),zc(qr,m,l,n,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=h,b=p;v<b;v++)qr.fromBufferAttribute(d,v),zc(qr,v,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zc(s,e,t,i,n,r,a){let o=vl.distanceSqToPoint(s);if(o<t){let l=new L;vl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ks=class extends Ht{constructor(e=[],t=on,i,n,r,a,o,l,c,u){super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rs=class extends Ht{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends Ht{constructor(e,t,i=ci,n,r,a,o=Rt,l=Rt,c,u=vi,d=1){if(u!==vi&&u!==cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ga=class extends Oi{constructor(e,t=ci,i=on,n,r,a=Rt,o=Rt,l,c=vi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zs=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class s extends Mt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,n,a,2),v("x","z","y",1,-1,e,i,-t,n,a,3),v("x","y","z",1,-1,e,t,i,n,r,4),v("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function v(b,m,f,E,A,y,w,S,C,x,M){let R=y/C,P=w/x,N=y/2,W=w/2,q=S/2,O=C+1,H=x+1,G=0,K=0,Q=new L;for(let he=0;he<H;he++){let pe=he*P-W;for(let ve=0;ve<O;ve++){let qe=ve*R-N;Q[b]=qe*E,Q[m]=pe*A,Q[f]=q,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[f]=S>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ve/C),d.push(1-he/x),G+=1}}for(let he=0;he<x;he++)for(let pe=0;pe<C;pe++){let ve=h+pe+O*he,qe=h+pe+O*(he+1),ht=h+(pe+1)+O*(he+1),$e=h+(pe+1)+O*he;l.push(ve,qe,$e),l.push(qe,ht,$e),K+=6}o.addGroup(p,K,M),p+=K,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var as=class s extends Mt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let u=[],d=[],h=[],p=[],v=0,b=[],m=i/2,f=0;E(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(p,2));function E(){let y=new L,w=new L,S=0,C=(t-e)/i;for(let x=0;x<=r;x++){let M=[],R=x/r,P=R*(t-e)+e;for(let N=0;N<=n;N++){let W=N/n,q=W*l+o,O=Math.sin(q),H=Math.cos(q);w.x=P*O,w.y=-R*i+m,w.z=P*H,d.push(w.x,w.y,w.z),y.set(O,C,H).normalize(),h.push(y.x,y.y,y.z),p.push(W,1-R),M.push(v++)}b.push(M)}for(let x=0;x<n;x++)for(let M=0;M<r;M++){let R=b[M][x],P=b[M+1][x],N=b[M+1][x+1],W=b[M][x+1];(e>0||M!==0)&&(u.push(R,P,W),S+=3),(t>0||M!==r-1)&&(u.push(P,N,W),S+=3)}c.addGroup(f,S,0),f+=S}function A(y){let w=v,S=new ye,C=new L,x=0,M=y===!0?e:t,R=y===!0?1:-1;for(let N=1;N<=n;N++)d.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),v++;let P=v;for(let N=0;N<=n;N++){let q=N/n*l+o,O=Math.cos(q),H=Math.sin(q);C.x=M*H,C.y=m*R,C.z=M*O,d.push(C.x,C.y,C.z),h.push(0,R,0),S.x=O*.5+.5,S.y=H*.5*R+.5,p.push(S.x,S.y),v++}for(let N=0;N<n;N++){let W=w+N,q=P+N;y===!0?u.push(q,q+1,W):u.push(q+1,q,W),x+=3}c.addGroup(f,x,y===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vs=class s extends as{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gs=class s extends Mt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let A=new L,y=new L,w=new L;for(let S=0;S<t.length;S+=3)p(t[S+0],A),p(t[S+1],y),p(t[S+2],w),l(A,y,w,E)}function l(E,A,y,w){let S=w+1,C=[];for(let x=0;x<=S;x++){C[x]=[];let M=E.clone().lerp(y,x/S),R=A.clone().lerp(y,x/S),P=S-x;for(let N=0;N<=P;N++)N===0&&x===S?C[x][N]=M:C[x][N]=M.clone().lerp(R,N/P)}for(let x=0;x<S;x++)for(let M=0;M<2*(S-x)-1;M++){let R=Math.floor(M/2);M%2===0?(h(C[x][R+1]),h(C[x+1][R]),h(C[x][R])):(h(C[x][R+1]),h(C[x+1][R+1]),h(C[x+1][R]))}}function c(E){let A=new L;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(E),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function u(){let E=new L;for(let A=0;A<r.length;A+=3){E.x=r[A+0],E.y=r[A+1],E.z=r[A+2];let y=m(E)/2/Math.PI+.5,w=f(E)/Math.PI+.5;a.push(y,1-w)}v(),d()}function d(){for(let E=0;E<a.length;E+=6){let A=a[E+0],y=a[E+2],w=a[E+4],S=Math.max(A,y,w),C=Math.min(A,y,w);S>.9&&C<.1&&(A<.2&&(a[E+0]+=1),y<.2&&(a[E+2]+=1),w<.2&&(a[E+4]+=1))}}function h(E){r.push(E.x,E.y,E.z)}function p(E,A){let y=E*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function v(){let E=new L,A=new L,y=new L,w=new L,S=new ye,C=new ye,x=new ye;for(let M=0,R=0;M<r.length;M+=9,R+=6){E.set(r[M+0],r[M+1],r[M+2]),A.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),w.copy(E).add(A).add(y).divideScalar(3);let P=m(w);b(S,R+0,E,P),b(C,R+2,A,P),b(x,R+4,y,P)}}function b(E,A,y,w){w<0&&E.x===1&&(a[A]=E.x-1),y.x===0&&y.z===0&&(a[A]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},Hs=class s extends Gs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var tn=class s extends Gs{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Tn=class s extends Mt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,d=e/o,h=t/l,p=[],v=[],b=[],m=[];for(let f=0;f<u;f++){let E=f*h-a;for(let A=0;A<c;A++){let y=A*d-r;v.push(y,-E,0),b.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let A=E+c*f,y=E+c*(f+1),w=E+1+c*(f+1),S=E+1+c*f;p.push(A,y,S),p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var os=class s extends Mt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new L,h=new L,p=[],v=[],b=[],m=[];for(let f=0;f<=i;f++){let E=[],A=f/i,y=a+A*o,w=e*Math.cos(y),S=Math.sqrt(e*e-w*w),C=0;f===0&&a===0?C=.5/t:f===i&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let M=x/t,R=n+M*r;d.x=-S*Math.cos(R),d.y=w,d.z=S*Math.sin(R),v.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),m.push(M+C,1-A),E.push(c++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){let A=u[f][E+1],y=u[f][E],w=u[f+1][E],S=u[f+1][E+1];(f!==0||a>0)&&p.push(A,y,S),(f!==i-1||l<Math.PI)&&p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ws=class s extends Mt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],u=[],d=[],h=new L,p=new L,v=new L;for(let b=0;b<=i;b++){let m=a+b/i*o;for(let f=0;f<=n;f++){let E=f/n*r;p.x=(e+t*Math.cos(m))*Math.cos(E),p.y=(e+t*Math.cos(m))*Math.sin(E),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),v.subVectors(p,h).normalize(),u.push(v.x,v.y,v.z),d.push(f/n),d.push(b/i)}}for(let b=1;b<=i;b++)for(let m=1;m<=n;m++){let f=(n+1)*b+m-1,E=(n+1)*(b-1)+m-1,A=(n+1)*(b-1)+m,y=(n+1)*b+m;l.push(f,E,y),l.push(E,A,y)}this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Cn(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(Vc(n))n.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Vc(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Vt(s){let e={};for(let t=0;t<s.length;t++){let i=Cn(s[t]);for(let n in i)e[n]=i[n]}return e}function Vc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Hu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ol(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var ki={clone:Cn,merge:Vt},Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cn(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(n.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(n.value);break;case"m4":this.uniforms[i].value=new at().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ls=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xs=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xa=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},va=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $r(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var nn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends nn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ml:r=e,o=2*t-i;break;case gl:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ml:a=e,l=2*i-t;break;case gl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(n-t),b=v*v,m=b*v,f=-h*m+2*h*b-h*v,E=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*v+1,A=(-1-p)*m+(1.5+p)*b+.5*v,y=p*m-p*b;for(let w=0;w!==o;++w)r[w]=f*a[u+w]+E*a[c+w]+A*a[l+w]+y*a[d+w];return r}},ya=class extends nn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ba=class extends nn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends nn{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let v=(i-t)/(n-t),b=1-v;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*v;return r}let h=o*2,p=e-1;for(let v=0;v!==o;++v){let b=a[c+v],m=a[l+v],f=p*h+v*2,E=d[f],A=d[f+1],y=e*h+v*2,w=u[y],S=u[y+1],C=(i-t)/(n-t),x,M,R,P,N;for(let W=0;W<8;W++){x=C*C,M=x*C,R=1-C,P=R*R,N=P*R;let O=N*t+3*P*C*E+3*R*x*w+M*n-i;if(Math.abs(O)<1e-10)break;let H=3*P*(E-t)+6*R*C*(w-E)+3*x*(n-w);if(Math.abs(H)<1e-10)break;C=C-O/H,C=Math.max(0,Math.min(1,C))}r[v]=N*b+3*P*C*A+3*R*x*S+M*m}return r}},Kt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$r(t,this.TimeBufferType),this.values=$r(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$r(e.times,Array),values:$r(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case la:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break;case fl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Su(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let v=0;v!==i;++v){let b=t[d+v];if(b!==t[h+v]||b!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=la;var sn=class extends Kt{constructor(e,t,i){super(e,t,i)}};sn.prototype.ValueTypeName="bool";sn.prototype.ValueBufferType=Array;sn.prototype.DefaultInterpolation=ws;sn.prototype.InterpolantFactoryMethodLinear=void 0;sn.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}};Sa.prototype.ValueTypeName="color";var Ea=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}};Ea.prototype.ValueTypeName="number";var Ta=class extends nn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let u=c+o;c!==u;c+=4)yi.slerpFlat(r,0,a,c-o,a,c,l);return r}},qs=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}};qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;var rn=class extends Kt{constructor(e,t,i){super(e,t,i)}};rn.prototype.ValueTypeName="string";rn.prototype.ValueBufferType=Array;rn.prototype.DefaultInterpolation=ws;rn.prototype.InterpolantFactoryMethodLinear=void 0;rn.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Kt{constructor(e,t,i,n){super(e,t,i,n)}};wa.prototype.ValueTypeName="vector";var Aa=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ih=new Aa,Ca=class{constructor(e){this.manager=e!==void 0?e:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends cs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},dl=new at,Gc=new L,Hc=new L,Ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Jn||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yr=new L,Zr=new yi,pi=new L,Ys=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Zr,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Yr,Zr,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new L,Wc=new ye,Xc=new ye,Ut=class extends Ys{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var _l=class extends Ra{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},Zs=class extends cs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},an=class extends Ys{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yl=class extends Ra{constructor(){super(new an(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new yl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $n=-90,Yn=1,Pa=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ut($n,Yn,e,t);n.layers=this.layers,this.add(n);let r=new Ut($n,Yn,e,t);r.layers=this.layers,this.add(r);let a=new Ut($n,Yn,e,t);a.layers=this.layers,this.add(a);let o=new Ut($n,Yn,e,t);o.layers=this.layers,this.add(o);let l=new Ut($n,Yn,e,t);l.layers=this.layers,this.add(l);let c=new Ut($n,Yn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jn)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Ia=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ks=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qu.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function qu(){this._document.hidden===!1&&this.reset()}var Bl="\\[\\]\\.:\\/",$u=new RegExp("["+Bl+"]","g"),kl="[^"+Bl+"]",Yu="[^"+Bl.replace("\\.","")+"]",Zu=/((?:WC+[\/:])*)/.source.replace("WC",kl),Ju=/(WCOD+)?/.source.replace("WCOD",Yu),Ku=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),ju=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),Qu=new RegExp("^"+Zu+Ju+Ku+ju+"$"),ed=["material","materials","bones","map"],bl=class{constructor(e,t,i){let n=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ot=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($u,"")}static parseTrackName(e){let t=Qu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);ed.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=bl;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kg=new Float32Array(1);var qc=new at,hs=class{constructor(e,t,i=0,n=1/0){this.ray=new is(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Qn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ce("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(e,t=!0,i=[]){return Ml(e,this,i,t),i.sort($c),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Ml(e[n],this,i,t);return i.sort($c),i}};function $c(s,e){return s.distance-e.distance}function Ml(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Ml(r[a],e,t,!0)}}var Xl=class Xl{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};Xl.prototype.isMatrix2=!0;var Sl=Xl;function zl(s,e,t,i){let n=td(i);switch(t){case Dl:return s*e;case Ul:return s*e/n.components*n.byteLength;case za:return s*e/n.components*n.byteLength;case hn:return s*e*2/n.components*n.byteLength;case Va:return s*e*2/n.components*n.byteLength;case Nl:return s*e*3/n.components*n.byteLength;case ni:return s*e*4/n.components*n.byteLength;case Ga:return s*e*4/n.components*n.byteLength;case lr:case cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wa:case qa:return Math.max(s,16)*Math.max(e,8)/4;case Ha:case Xa:return Math.max(s,8)*Math.max(e,8)/2;case $a:case Ya:case Ja:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Za:case dr:case ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xo:case vo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fr:case _o:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function td(s){switch(s){case $t:case Rl:return{byteLength:1,components:1};case ds:case Pl:case zt:return{byteLength:2,components:1};case Ba:case ka:return{byteLength:2,components:4};case ci:case Oa:case hi:return{byteLength:4,components:1};case Il:case Ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function eu(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nd(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){let v=d[h],b=d[p];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++h,d[h]=b)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){let b=d[p];s.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ep=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:hd,aomap_pars_fragment:ud,batching_pars_vertex:dd,batching_vertex:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:xd,bumpmap_pars_fragment:vd,clipping_planes_fragment:_d,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Md,color_fragment:Sd,color_pars_fragment:Ed,color_pars_vertex:Td,color_vertex:wd,common:Ad,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Id,emissivemap_fragment:Ld,emissivemap_pars_fragment:Dd,colorspace_fragment:Nd,colorspace_pars_fragment:Ud,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Jd,envmap_vertex:zd,fog_vertex:Vd,fog_pars_vertex:Gd,fog_fragment:Hd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:qd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Yd,lights_pars_begin:Zd,lights_toon_fragment:Kd,lights_toon_pars_fragment:jd,lights_phong_fragment:Qd,lights_phong_pars_fragment:ef,lights_physical_fragment:tf,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:rf,lights_fragment_end:af,lightprobes_pars_fragment:of,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:hf,logdepthbuf_vertex:uf,map_fragment:df,map_pars_fragment:ff,map_particle_fragment:pf,map_particle_pars_fragment:mf,metalnessmap_fragment:gf,metalnessmap_pars_fragment:xf,morphinstance_vertex:vf,morphcolor_vertex:_f,morphnormal_vertex:yf,morphtarget_pars_vertex:bf,morphtarget_vertex:Mf,normal_fragment_begin:Sf,normal_fragment_maps:Ef,normal_pars_fragment:Tf,normal_pars_vertex:wf,normal_vertex:Af,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Lf,opaque_fragment:Df,packing:Nf,premultiplied_alpha_fragment:Uf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:Bf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:qf,skinning_vertex:$f,skinnormal_vertex:Yf,specularmap_fragment:Zf,specularmap_pars_fragment:Jf,tonemapping_fragment:Kf,tonemapping_pars_fragment:jf,transmission_fragment:Qf,transmission_pars_fragment:ep,uv_pars_fragment:tp,uv_pars_vertex:ip,uv_vertex:np,worldpos_vertex:sp,background_vert:rp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:lp,cube_vert:cp,cube_frag:hp,depth_vert:up,depth_frag:dp,distance_vert:fp,distance_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:_p,meshbasic_frag:yp,meshlambert_vert:bp,meshlambert_frag:Mp,meshmatcap_vert:Sp,meshmatcap_frag:Ep,meshnormal_vert:Tp,meshnormal_frag:wp,meshphong_vert:Ap,meshphong_frag:Cp,meshphysical_vert:Rp,meshphysical_frag:Pp,meshtoon_vert:Ip,meshtoon_frag:Lp,points_vert:Dp,points_frag:Np,shadow_vert:Up,shadow_frag:Fp,sprite_vert:Op,sprite_frag:Bp},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Ei={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Ei.physical={uniforms:Vt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var So={r:0,b:0,g:0},kp=new at,tu=new Ne;tu.set(-1,0,0,0,1,0,0,0,1);function zp(s,e,t,i,n,r){let a=new Le(0),o=n===!0?0:1,l,c,u=null,d=0,h=null;function p(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let y=E.backgroundBlurriness>0;A=e.get(A,y)}return A}function v(E){let A=!1,y=p(E);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(E,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===ar)?(c===void 0&&(c=new Qe(new en(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Cn(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tu),c.material.toneMapped=ze.getTransfer(y.colorSpace)!==Xe,(u!==y||d!==y.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qe(new Tn(2,2),new vt({name:"BackgroundMaterial",uniforms:Cn(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ze.getTransfer(y.colorSpace)!==Xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(So,Ol(s)),t.buffers.color.setClear(So.r,So.g,So.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:v,addToRenderList:b,dispose:f}}function Vp(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,a=!1;function o(P,N,W,q,O){let H=!1,G=d(P,q,W,N);r!==G&&(r=G,c(r.object)),H=p(P,q,W,O),H&&v(P,q,W,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(P,N,W,q),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function u(P){return s.deleteVertexArray(P)}function d(P,N,W,q){let O=q.wireframe===!0,H=i[N.id];H===void 0&&(H={},i[N.id]=H);let G=P.isInstancedMesh===!0?P.id:0,K=H[G];K===void 0&&(K={},H[G]=K);let Q=K[W.id];Q===void 0&&(Q={},K[W.id]=Q);let he=Q[O];return he===void 0&&(he=h(l()),Q[O]=he),he}function h(P){let N=[],W=[],q=[];for(let O=0;O<t;O++)N[O]=0,W[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,N,W,q){let O=r.attributes,H=N.attributes,G=0,K=W.getAttributes();for(let Q in K)if(K[Q].location>=0){let pe=O[Q],ve=H[Q];if(ve===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),pe===void 0||pe.attribute!==ve||ve&&pe.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==q}function v(P,N,W,q){let O={},H=N.attributes,G=0,K=W.getAttributes();for(let Q in K)if(K[Q].location>=0){let pe=H[Q];pe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));let ve={};ve.attribute=pe,pe&&pe.data&&(ve.data=pe.data),O[Q]=ve,G++}r.attributes=O,r.attributesNum=G,r.index=q}function b(){let P=r.newAttributes;for(let N=0,W=P.length;N<W;N++)P[N]=0}function m(P){f(P,0)}function f(P,N){let W=r.newAttributes,q=r.enabledAttributes,O=r.attributeDivisors;W[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),O[P]!==N&&(s.vertexAttribDivisor(P,N),O[P]=N)}function E(){let P=r.newAttributes,N=r.enabledAttributes;for(let W=0,q=N.length;W<q;W++)N[W]!==P[W]&&(s.disableVertexAttribArray(W),N[W]=0)}function A(P,N,W,q,O,H,G){G===!0?s.vertexAttribIPointer(P,N,W,O,H):s.vertexAttribPointer(P,N,W,q,O,H)}function y(P,N,W,q){b();let O=q.attributes,H=W.getAttributes(),G=N.defaultAttributeValues;for(let K in H){let Q=H[K];if(Q.location>=0){let he=O[K];if(he===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),he!==void 0){let pe=he.normalized,ve=he.itemSize,qe=e.get(he);if(qe===void 0)continue;let ht=qe.buffer,$e=qe.type,J=qe.bytesPerElement,ne=$e===s.INT||$e===s.UNSIGNED_INT||he.gpuType===Oa;if(he.isInterleavedBufferAttribute){let ee=he.data,De=ee.stride,Ue=he.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)f(Q.location+Re,ee.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<Q.locationSize;Re++)m(Q.location+Re);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Re=0;Re<Q.locationSize;Re++)A(Q.location+Re,ve/Q.locationSize,$e,pe,De*J,(Ue+ve/Q.locationSize*Re)*J,ne)}else{if(he.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)f(Q.location+ee,he.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let ee=0;ee<Q.locationSize;ee++)A(Q.location+ee,ve/Q.locationSize,$e,pe,ve*J,ve/Q.locationSize*ee*J,ne)}}else if(G!==void 0){let pe=G[K];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(Q.location,pe);break;case 3:s.vertexAttrib3fv(Q.location,pe);break;case 4:s.vertexAttrib4fv(Q.location,pe);break;default:s.vertexAttrib1fv(Q.location,pe)}}}}E()}function w(){M();for(let P in i){let N=i[P];for(let W in N){let q=N[W];for(let O in q){let H=q[O];for(let G in H)u(H[G].object),delete H[G];delete q[O]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;let N=i[P.id];for(let W in N){let q=N[W];for(let O in q){let H=q[O];for(let G in H)u(H[G].object),delete H[G];delete q[O]}}delete i[P.id]}function C(P){for(let N in i){let W=i[N];for(let q in W){let O=W[q];if(O[P.id]===void 0)continue;let H=O[P.id];for(let G in H)u(H[G].object),delete H[G];delete O[P.id]}}}function x(P){for(let N in i){let W=i[N],q=P.isInstancedMesh===!0?P.id:0,O=W[q];if(O!==void 0){for(let H in O){let G=O[H];for(let K in G)u(G[K].object),delete G[K];delete O[H]}delete W[q],Object.keys(W).length===0&&delete i[N]}}}function M(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:M,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:E}}function Gp(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hp(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==ni&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==$t&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hi&&!x)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:S}}function Wp(s){let e=this,t=null,i=0,n=!1,r=!1,a=new mi,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||n;return n=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let v=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||v===null||v.length===0||r&&!m)r?u(null):c();else{let E=r?0:i,A=E*4,y=f.clippingState||null;l.value=y,y=u(v,h,A,p);for(let w=0;w!==A;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,v!==!0||m===null){let f=p+b*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,y=p;A!==b;++A,y+=4)a.copy(d[A]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var un=4,Lh=[.125,.215,.35,.446,.526,.582],Rn=20,Xp=256,pr=new an,Dh=new Le,ql=null,$l=0,Yl=0,Zl=!1,qp=new L,To=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=qp}=r;ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,$l,Yl),this._renderer.xr.enabled=Zl,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===on||e.mapping===An?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:zt,format:ni,colorSpace:As,depthBuffer:!1},n=Nh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Zp(r,e,t),this._ggxMaterial=Yp(r,e,t)}return n}_compileMaterial(e){let t=new Qe(new Mt,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,n,r){let l=new Ut(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Dh),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new en,new Fi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,f=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,f=!0):(m.color.copy(Dh),f=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;ps(n,y*w,A>2?w:0,w,w),d.setRenderTarget(n),f&&d.render(b,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===on||e.mapping===An;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,pr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:v}=this,b=this._sizeLods[i],m=3*b*(i>v-un?i-v+un:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,ps(r,m,f,3*b,2*b),n.setRenderTarget(r),n.render(o,pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,ps(e,m,f,3*b,2*b),n.setRenderTarget(e),n.render(o,pr)}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[n];d.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Rn-1),b=r/v,m=isFinite(r)?1+Math.floor(u*b):Rn;m>Rn&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rn}`);let f=[],E=0;for(let C=0;C<Rn;++C){let x=C/b,M=Math.exp(-x*x/2);f.push(M),C===0?E+=M:C<m&&(E+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;let y=this._sizeLods[n],w=3*y*(n>A-un?n-A+un:0),S=4*(this._cubeSize-y);ps(t,w,S,3*y,2*y),l.setRenderTarget(t),l.render(d,pr)}};function $p(s){let e=[],t=[],i=[],n=s,r=s-un+1+Lh.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-un?l=Lh[a-s+un-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,b=3,m=2,f=1,E=new Float32Array(b*v*p),A=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let S=0;S<p;S++){let C=S%3*2/3-1,x=S>2?0:-1,M=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];E.set(M,b*v*S),A.set(h,m*v*S);let R=[S,S,S,S,S,S];y.set(R,f*v*S)}let w=new Mt;w.setAttribute("position",new qt(E,b)),w.setAttribute("uv",new qt(A,m)),w.setAttribute("faceIndex",new qt(y,f)),i.push(new Qe(w,null)),n>un&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Nh(s,e,t){let i=new Et(s,e,t);return i.texture.mapping=ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Yp(s,e,t){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Zp(s,e,t){let i=new Float32Array(Rn),n=new L(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Uh(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fh(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var wo=class extends Et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ks(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new en(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Cn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:ii});r.uniforms.tEquirect.value=t;let a=new Qe(n,r),o=t.minFilter;return t.minFilter===ln&&(t.minFilter=Ft),new Pa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}};function Jp(s){let e=new WeakMap,t=new WeakMap,i=null;function n(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Na||p===Ua)if(e.has(h)){let v=e.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let b=new wo(v.height);return b.fromEquirectangularTexture(s,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,v=p===Na||p===Ua,b=p===on||p===An;if(v||b){let m=t.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new To(s)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let E=h.image;return v&&E&&E.height>0||b&&E&&l(E)?(i===null&&(i=new To(s)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Na?h.mapping=on:p===Ua&&(h.mapping=An),h}function l(h){let p=0,v=6;for(let b=0;b<v;b++)h[b]!==void 0&&p++;return p===v}function c(h){let p=h.target;p.removeEventListener("dispose",c);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Kp(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&bn("WebGLRenderer: "+i+" extension not supported."),n}}}function jp(s,e,t,i){let n={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete n[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],s.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,v=d.attributes.position,b=0;if(v===void 0)return;if(p!==null){let E=p.array;b=p.version;for(let A=0,y=E.length;A<y;A+=3){let w=E[A+0],S=E[A+1],C=E[A+2];h.push(w,S,S,C,C,w)}}else{let E=v.array;b=v.version;for(let A=0,y=E.length/3-1;A<y;A+=3){let w=A+0,S=A+1,C=A+2;h.push(w,S,S,C,C,w)}}let m=new(v.count>=65535?Us:Ns)(h,1);m.version=b;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Qp(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){s.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,p){p!==0&&(s.drawElementsInstanced(i,h,r,d*a,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let b=0;for(let m=0;m<p;m++)b+=h[m];t.update(b,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function em(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function tm(s,e,t){let i=new WeakMap,n=new ct;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;p===!0&&(A=1),v===!0&&(A=2),b===!0&&(A=3);let y=o.attributes.position.count*A,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*w*4*d),C=new Is(S,y,w,d);C.type=hi,C.needsUpdate=!0;let x=A*4;for(let R=0;R<d;R++){let P=m[R],N=f[R],W=E[R],q=y*w*4*R;for(let O=0;O<P.count;O++){let H=O*x;p===!0&&(n.fromBufferAttribute(P,O),S[q+H+0]=n.x,S[q+H+1]=n.y,S[q+H+2]=n.z,S[q+H+3]=0),v===!0&&(n.fromBufferAttribute(N,O),S[q+H+4]=n.x,S[q+H+5]=n.y,S[q+H+6]=n.z,S[q+H+7]=0),b===!0&&(n.fromBufferAttribute(W,O),S[q+H+8]=n.x,S[q+H+9]=n.y,S[q+H+10]=n.z,S[q+H+11]=W.itemSize===4?n.w:1)}}h={count:d,texture:C,size:new ye(y,w)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function im(s,e,t,i,n){let r=new WeakMap;function a(c){let u=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var nm={[er]:"LINEAR_TONE_MAPPING",[tr]:"REINHARD_TONE_MAPPING",[ir]:"CINEON_TONE_MAPPING",[wn]:"ACES_FILMIC_TONE_MAPPING",[sr]:"AGX_TONE_MAPPING",[rr]:"NEUTRAL_TONE_MAPPING",[nr]:"CUSTOM_TONE_MAPPING"};function sm(s,e,t,i,n,r){let a=new Et(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,depthTexture:n?new Oi(e,t):void 0}),o=new Et(e,t,{type:zt,depthBuffer:!1,stencilBuffer:!1}),l=new Mt;l.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Je([0,2,0,0,2,0],2));let c=new ls({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Qe(l,c),d=new an(-1,1,1,-1,0,1),h=null,p=null,v=!1,b,m=null,f=[],E=!1;this.setSize=function(A,y){a.setSize(A,y),o.setSize(A,y);for(let w=0;w<f.length;w++){let S=f[w];S.setSize&&S.setSize(A,y)}},this.setEffects=function(A){f=A,E=f.length>0&&f[0].isRenderPass===!0;let y=a.width,w=a.height;for(let S=0;S<f.length;S++){let C=f[S];C.setSize&&C.setSize(y,w)}},this.begin=function(A,y){if(v||A.toneMapping===li&&f.length===0)return!1;if(m=y,y!==null){let w=y.width,S=y.height;(a.width!==w||a.height!==S)&&this.setSize(w,S)}return E===!1&&A.setRenderTarget(a),b=A.toneMapping,A.toneMapping=li,!0},this.hasRenderPass=function(){return E},this.end=function(A,y){A.toneMapping=b,v=!0;let w=a,S=o;for(let C=0;C<f.length;C++){let x=f[C];if(x.enabled!==!1&&(x.render(A,S,w,y),x.needsSwap!==!1)){let M=w;w=S,S=M}}if(h!==A.outputColorSpace||p!==A.toneMapping){h=A.outputColorSpace,p=A.toneMapping,c.defines={},ze.getTransfer(h)===Xe&&(c.defines.SRGB_TRANSFER="");let C=nm[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(m),A.render(u,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var iu=new Ht,jl=new Oi(1,1),nu=new Is,su=new fa,ru=new ks,Oh=[],Bh=[],kh=new Float32Array(16),zh=new Float32Array(9),Vh=new Float32Array(4);function gs(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Oh[n];if(r===void 0&&(r=new Float32Array(n),Oh[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ro(s,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function rm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function am(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function om(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function lm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function cm(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;Vh.set(i),s.uniformMatrix2fv(this.addr,!1,Vh),wt(t,i)}}function hm(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;zh.set(i),s.uniformMatrix3fv(this.addr,!1,zh),wt(t,i)}}function um(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;kh.set(i),s.uniformMatrix4fv(this.addr,!1,kh),wt(t,i)}}function dm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function pm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function mm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function gm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function vm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function _m(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function ym(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(jl.compareFunction=t.isReversedDepthBuffer()?Mo:bo,r=jl):r=iu,t.setTexture2D(e||r,n)}function bm(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||su,n)}function Mm(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ru,n)}function Sm(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||nu,n)}function Em(s){switch(s){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return xm;case 36295:return vm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}function Tm(s,e){s.uniform1fv(this.addr,e)}function wm(s,e){let t=gs(e,this.size,2);s.uniform2fv(this.addr,t)}function Am(s,e){let t=gs(e,this.size,3);s.uniform3fv(this.addr,t)}function Cm(s,e){let t=gs(e,this.size,4);s.uniform4fv(this.addr,t)}function Rm(s,e){let t=gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Pm(s,e){let t=gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Im(s,e){let t=gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Lm(s,e){s.uniform1iv(this.addr,e)}function Dm(s,e){s.uniform2iv(this.addr,e)}function Nm(s,e){s.uniform3iv(this.addr,e)}function Um(s,e){s.uniform4iv(this.addr,e)}function Fm(s,e){s.uniform1uiv(this.addr,e)}function Om(s,e){s.uniform2uiv(this.addr,e)}function Bm(s,e){s.uniform3uiv(this.addr,e)}function km(s,e){s.uniform4uiv(this.addr,e)}function zm(s,e,t){let i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=jl:a=iu;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function Vm(s,e,t){let i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||su,r[a])}function Gm(s,e,t){let i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ru,r[a])}function Hm(s,e,t){let i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||nu,r[a])}function Wm(s){switch(s){case 5126:return Tm;case 35664:return wm;case 35665:return Am;case 35666:return Cm;case 35674:return Rm;case 35675:return Pm;case 35676:return Im;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Om;case 36295:return Bm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}var Ql=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Em(t.type)}},ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wm(t.type)}},tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function Gh(s,e){s.seq.push(e),s.map[e.id]=e}function Xm(s,e,t){let i=s.name,n=i.length;for(Jl.lastIndex=0;;){let r=Jl.exec(i),a=Jl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Gh(t,c===void 0?new Ql(o,s,e):new ec(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new tc(o),Gh(t,d)),t=d}}}var ms=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Xm(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Hh(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var qm=37297,$m=0;function Ym(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Wh=new Ne;function Zm(s){ze._getMatrix(Wh,ze.workingColorSpace,s);let e=`mat3( ${Wh.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(s)){case Cs:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xh(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ym(s.getShaderSource(e),o)}else return r}function Jm(s,e){let t=Zm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Km={[er]:"Linear",[tr]:"Reinhard",[ir]:"Cineon",[wn]:"ACESFilmic",[sr]:"AgX",[rr]:"Neutral",[nr]:"Custom"};function jm(s,e){let t=Km[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eo=new L;function Qm(){ze.getLuminanceCoefficients(Eo);let s=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function tg(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ig(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function gr(s){return s!==""}function qh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(s){return s.replace(ng,rg)}var sg=new Map;function rg(s,e){let t=Be[e];if(t===void 0){let i=sg.get(e);if(i!==void 0)t=Be[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ic(t)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(s){return s.replace(ag,og)}function og(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Zh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var lg={[js]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function cg(s){return lg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hg={[on]:"ENVMAP_TYPE_CUBE",[An]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE_UV"};function ug(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":hg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var dg={[An]:"ENVMAP_MODE_REFRACTION"};function fg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pg={[Al]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function mg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":pg[s.combine]||"ENVMAP_BLENDING_NONE"}function gg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xg(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=cg(t),c=ug(t),u=fg(t),d=mg(t),h=gg(t),p=eg(t),v=tg(r),b=n.createProgram(),m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(gr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(gr).join(`
`),f.length>0&&(f+=`
`)):(m=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),f=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Be.tonemapping_pars_fragment:"",t.toneMapping!==li?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Jm("linearToOutputTexel",t.outputColorSpace),Qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=ic(a),a=qh(a,t),a=$h(a,t),o=ic(o),o=qh(o,t),o=$h(o,t),a=Yh(a),o=Yh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=E+m+a,y=E+f+o,w=Hh(n,n.VERTEX_SHADER,A),S=Hh(n,n.FRAGMENT_SHADER,y);n.attachShader(b,w),n.attachShader(b,S),t.index0AttributeName!==void 0?n.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(b,0,"position"),n.linkProgram(b);function C(P){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(b)||"",W=n.getShaderInfoLog(w)||"",q=n.getShaderInfoLog(S)||"",O=N.trim(),H=W.trim(),G=q.trim(),K=!0,Q=!0;if(n.getProgramParameter(b,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,b,w,S);else{let he=Xh(n,w,"vertex"),pe=Xh(n,S,"fragment");Ce("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(b,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+he+`
`+pe)}else O!==""?Ie("WebGLProgram: Program Info Log:",O):(H===""||G==="")&&(Q=!1);Q&&(P.diagnostics={runnable:K,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:G,prefix:f}})}n.deleteShader(w),n.deleteShader(S),x=new ms(n,b),M=ig(n,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(b,qm)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=S,this}var vg=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sc(e),t.set(e,i)),i}},sc=class{constructor(e){this.id=vg++,this.code=e,this.usedTimes=0}};function _g(s){return s===hn||s===dr||s===fr}function yg(s,e,t,i,n,r){let a=new Qn,o=new nc,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,M,R,P,N,W){let q=P.fog,O=N.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||H,G),Q=K&&K.mapping===ar?K.image.height:null,he=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ve=pe!==void 0?pe.length:0,qe=0;O.morphAttributes.position!==void 0&&(qe=1),O.morphAttributes.normal!==void 0&&(qe=2),O.morphAttributes.color!==void 0&&(qe=3);let ht,$e,J,ne;if(he){let _e=Ei[he];ht=_e.vertexShader,$e=_e.fragmentShader}else{ht=x.vertexShader,$e=x.fragmentShader;let _e=o.getVertexShaderStage(x),dt=o.getFragmentShaderStage(x);o.update(x,_e,dt),J=_e.id,ne=dt.id}let ee=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,mt=!!x.map,Ve=!!x.matcap,et=!!K,Ye=!!x.aoMap,He=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,At=!!x.displacementMap,It=!!x.emissiveMap,ut=!!x.metalnessMap,yt=!!x.roughnessMap,D=x.anisotropy>0,Xt=x.clearcoat>0,Ze=x.dispersion>0,T=x.iridescence>0,g=x.sheen>0,F=x.transmission>0,z=D&&!!x.anisotropyMap,X=Xt&&!!x.clearcoatMap,te=Xt&&!!x.clearcoatNormalMap,se=Xt&&!!x.clearcoatRoughnessMap,$=T&&!!x.iridescenceMap,Z=T&&!!x.iridescenceThicknessMap,re=g&&!!x.sheenColorMap,Ee=g&&!!x.sheenRoughnessMap,le=!!x.specularMap,ae=!!x.specularColorMap,Ae=!!x.specularIntensityMap,Pe=F&&!!x.transmissionMap,Fe=F&&!!x.thicknessMap,I=!!x.gradientMap,ie=!!x.alphaMap,Y=x.alphaTest>0,oe=!!x.alphaHash,fe=!!x.extensions,j=li;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(j=s.toneMapping);let Se={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:$e,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:Ve,envMap:et,envMapMode:et&&K.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:He,bumpMap:_t,normalMap:St,displacementMap:At,emissiveMap:It,normalMapObjectSpace:St&&x.normalMapType===vh,normalMapTangentSpace:St&&x.normalMapType===yo,packedNormalMap:St&&x.normalMapType===yo&&_g(x.normalMap.format),metalnessMap:ut,roughnessMap:yt,anisotropy:D,anisotropyMap:z,clearcoat:Xt,clearcoatMap:X,clearcoatNormalMap:te,clearcoatRoughnessMap:se,dispersion:Ze,iridescence:T,iridescenceMap:$,iridescenceThicknessMap:Z,sheen:g,sheenColorMap:re,sheenRoughnessMap:Ee,specularMap:le,specularColorMap:ae,specularIntensityMap:Ae,transmission:F,transmissionMap:Pe,thicknessMap:Fe,gradientMap:I,opaque:x.transparent===!1&&x.blending===Mn&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Y,alphaHash:oe,combine:x.combine,mapUv:mt&&v(x.map.channel),aoMapUv:Ye&&v(x.aoMap.channel),lightMapUv:He&&v(x.lightMap.channel),bumpMapUv:_t&&v(x.bumpMap.channel),normalMapUv:St&&v(x.normalMap.channel),displacementMapUv:At&&v(x.displacementMap.channel),emissiveMapUv:It&&v(x.emissiveMap.channel),metalnessMapUv:ut&&v(x.metalnessMap.channel),roughnessMapUv:yt&&v(x.roughnessMap.channel),anisotropyMapUv:z&&v(x.anisotropyMap.channel),clearcoatMapUv:X&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(x.sheenRoughnessMap.channel),specularMapUv:le&&v(x.specularMap.channel),specularColorMapUv:ae&&v(x.specularColorMap.channel),specularIntensityMapUv:Ae&&v(x.specularIntensityMap.channel),transmissionMapUv:Pe&&v(x.transmissionMap.channel),thicknessMapUv:Fe&&v(x.thicknessMap.channel),alphaMapUv:ie&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(St||D),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(mt||ie),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:j,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&ze.getTransfer(x.map.colorSpace)===Xe,decodeVideoTextureEmissive:It&&x.emissiveMap.isVideoTexture===!0&&ze.getTransfer(x.emissiveMap.colorSpace)===Xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(M,x),E(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function f(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let M=p[x.type],R;if(M){let P=Ei[M];R=ki.clone(P.uniforms)}else R=x.uniforms;return R}function y(x,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new xg(s,M,x,n),c.push(R),u.set(M,R)),R}function w(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:C}}function bg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Jh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Kh(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,b,m,f){let E=s[e];return E===void 0?(E={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:f},s[e]=E):(E.id=h.id,E.object=h,E.geometry=p,E.material=v,E.materialVariant=a(h),E.groupOrder=b,E.renderOrder=h.renderOrder,E.z=m,E.group=f),e++,E}function l(h,p,v,b,m,f){let E=o(h,p,v,b,m,f);v.transmission>0?i.push(E):v.transparent===!0?n.push(E):t.push(E)}function c(h,p,v,b,m,f){let E=o(h,p,v,b,m,f);v.transmission>0?i.unshift(E):v.transparent===!0?n.unshift(E):t.unshift(E)}function u(h,p,v){t.length>1&&t.sort(h||Mg),i.length>1&&i.sort(p||Jh),n.length>1&&n.sort(p||Jh),v&&(t.reverse(),i.reverse(),n.reverse())}function d(){for(let h=e,p=s.length;h<p;h++){let v=s[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:u}}function Sg(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new Kh,s.set(i,[a])):n>=r.length?(a=new Kh,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Eg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Tg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var wg=0;function Ag(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cg(s){let e=new Eg,t=Tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let n=new L,r=new at,a=new at;function o(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,b=0,m=0,f=0,E=0,A=0,y=0,w=0,S=0,C=0;c.sort(Ag);for(let M=0,R=c.length;M<R;M++){let P=c[M],N=P.color,W=P.intensity,q=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hn?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*W,d+=N.g*W,h+=N.b*W;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],W);C++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=H,p++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(W),H.distance=q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[b]=H;let G=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,G.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[b]=G.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.spotShadow[b]=K,i.spotShadowMap[b]=O,y++}b++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(N).multiplyScalar(W),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,i.pointShadow[v]=K,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=P.shadow.matrix,A++}i.point[v]=H,v++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(W),H.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==b||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==E||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=C,x.directionalLength=p,x.pointLength=v,x.spotLength=b,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=E,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=C,i.version=wg++)}function l(c,u){let d=0,h=0,p=0,v=0,b=0,m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let A=c[f];if(A.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let y=i.rectArea[v];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){let y=i.hemi[b];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function jh(s){let e=new Cg(s),t=[],i=[],n=[];function r(h){d.camera=h,t.length=0,i.length=0,n.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){n.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rg(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new jh(s),e.set(n,[o])):r>=a.length?(o=new jh(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Dg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Qh=new at,mr=new L,Kl=new L;function Ng(s,e,t){let i=new ns,n=new ye,r=new ye,a=new ct,o=new xa,l=new va,c={},u=t.maxTextureSize,d={[Ni]:Wt,[Wt]:Ni,[Mi]:Mi},h=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new Mt;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Qe(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let f=this.type;this.render=function(S,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Da&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);let M=s.getRenderTarget(),R=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ii),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let W=f!==this.type;W&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=S.length;q<O;q++){let H=S[q],G=H.shadow;if(G===void 0){Ie("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let K=G.getFrameExtents();n.multiply(K),r.copy(G.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/K.x),n.x=r.x*K.x,G.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/K.y),n.y=r.y*K.y,G.mapSize.y=r.y));let Q=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===us){if(H.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Et(n.x,n.y,{format:hn,type:zt,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new Oi(n.x,n.y,hi),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=vi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Rt,G.map.depthTexture.magFilter=Rt}else H.isPointLight?(G.map=new wo(n.x),G.map.depthTexture=new ga(n.x,ci)):(G.map=new Et(n.x,n.y),G.map.depthTexture=new Oi(n.x,n.y,ci)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=vi,this.type===js?(G.map.depthTexture.compareFunction=Q?Mo:bo,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Rt,G.map.depthTexture.magFilter=Rt);G.camera.updateProjectionMatrix()}let he=G.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<he;pe++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(G.map),s.clear());let ve=G.getViewport(pe);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),N.viewport(a)}if(H.isPointLight){let ve=G.camera,qe=G.matrix,ht=H.distance||ve.far;ht!==ve.far&&(ve.far=ht,ve.updateProjectionMatrix()),mr.setFromMatrixPosition(H.matrixWorld),ve.position.copy(mr),Kl.copy(ve.position),Kl.add(Lg[pe]),ve.up.copy(Dg[pe]),ve.lookAt(Kl),ve.updateMatrixWorld(),qe.makeTranslation(-mr.x,-mr.y,-mr.z),Qh.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Qh,ve.coordinateSystem,ve.reversedDepth)}else G.updateMatrices(H);i=G.getFrustum(),y(C,x,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===us&&E(G,x),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,R,P)};function E(S,C){let x=e.update(b);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Et(n.x,n.y,{format:hn,type:zt})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,x,h,b,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,x,p,b,null)}function A(S,C,x,M){let R=null,P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=R.uuid,W=C.uuid,q=c[N];q===void 0&&(q={},c[N]=q);let O=q[W];O===void 0&&(O=R.clone(),q[W]=O,C.addEventListener("dispose",w)),R=O}if(R.visible=C.visible,R.wireframe=C.wireframe,M===us?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=x}return R}function y(S,C,x,M,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===us)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let W=e.update(S),q=S.material;if(Array.isArray(q)){let O=W.groups;for(let H=0,G=O.length;H<G;H++){let K=O[H],Q=q[K.materialIndex];if(Q&&Q.visible){let he=A(S,Q,M,R);S.onBeforeShadow(s,S,C,x,W,he,K),s.renderBufferDirect(x,null,W,he,S,K),S.onAfterShadow(s,S,C,x,W,he,K)}}}else if(q.visible){let O=A(S,q,M,R);S.onBeforeShadow(s,S,C,x,W,O,null),s.renderBufferDirect(x,null,W,O,S,null),S.onAfterShadow(s,S,C,x,W,O,null)}}let N=S.children;for(let W=0,q=N.length;W<q;W++)y(N[W],C,x,M,R)}function w(S){S.target.removeEventListener("dispose",w);for(let x in c){let M=c[x],R=S.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function Ug(s,e){function t(){let I=!1,ie=new ct,Y=null,oe=new ct(0,0,0,0);return{setMask:function(fe){Y!==fe&&!I&&(s.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){I=fe},setClear:function(fe,j,Se,_e,dt){dt===!0&&(fe*=_e,j*=_e,Se*=_e),ie.set(fe,j,Se,_e),oe.equals(ie)===!1&&(s.clearColor(fe,j,Se,_e),oe.copy(ie))},reset:function(){I=!1,Y=null,oe.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,Y=null,oe=null,fe=null;return{setReversed:function(j){if(ie!==j){let Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=j;let _e=fe;fe=null,this.setClear(_e)}},getReversed:function(){return ie},setTest:function(j){j?ee(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(j){Y!==j&&!I&&(s.depthMask(j),Y=j)},setFunc:function(j){if(ie&&(j=Ch[j]),oe!==j){switch(j){case Qr:s.depthFunc(s.NEVER);break;case ea:s.depthFunc(s.ALWAYS);break;case ta:s.depthFunc(s.LESS);break;case Sn:s.depthFunc(s.LEQUAL);break;case ia:s.depthFunc(s.EQUAL);break;case na:s.depthFunc(s.GEQUAL);break;case sa:s.depthFunc(s.GREATER);break;case ra:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=j}},setLocked:function(j){I=j},setClear:function(j){fe!==j&&(fe=j,ie&&(j=1-j),s.clearDepth(j))},reset:function(){I=!1,Y=null,oe=null,fe=null,ie=!1}}}function n(){let I=!1,ie=null,Y=null,oe=null,fe=null,j=null,Se=null,_e=null,dt=null;return{setTest:function(st){I||(st?ee(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(st){ie!==st&&!I&&(s.stencilMask(st),ie=st)},setFunc:function(st,ui,di){(Y!==st||oe!==ui||fe!==di)&&(s.stencilFunc(st,ui,di),Y=st,oe=ui,fe=di)},setOp:function(st,ui,di){(j!==st||Se!==ui||_e!==di)&&(s.stencilOp(st,ui,di),j=st,Se=ui,_e=di)},setLocked:function(st){I=st},setClear:function(st){dt!==st&&(s.clearStencil(st),dt=st)},reset:function(){I=!1,ie=null,Y=null,oe=null,fe=null,j=null,Se=null,_e=null,dt=null}}}let r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,v=[],b=null,m=!1,f=null,E=null,A=null,y=null,w=null,S=null,C=null,x=new Le(0,0,0),M=0,R=!1,P=null,N=null,W=null,q=null,O=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=K>=2);let he=null,pe={},ve=s.getParameter(s.SCISSOR_BOX),qe=s.getParameter(s.VIEWPORT),ht=new ct().fromArray(ve),$e=new ct().fromArray(qe);function J(I,ie,Y,oe){let fe=new Uint8Array(4),j=s.createTexture();s.bindTexture(I,j),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<Y;Se++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ie+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return j}let ne={};ne[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(Sn),_t(!1),St(El),ee(s.CULL_FACE),Ye(ii);function ee(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function De(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ue(I,ie){return h[I]!==ie?(s.bindFramebuffer(I,ie),h[I]=ie,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(I,ie){let Y=v,oe=!1;if(I){Y=p.get(ie),Y===void 0&&(Y=[],p.set(ie,Y));let fe=I.textures;if(Y.length!==fe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let j=0,Se=fe.length;j<Se;j++)Y[j]=s.COLOR_ATTACHMENT0+j;Y.length=fe.length,oe=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,oe=!0);oe&&s.drawBuffers(Y)}function mt(I){return b!==I?(s.useProgram(I),b=I,!0):!1}let Ve={[ji]:s.FUNC_ADD,[Kc]:s.FUNC_SUBTRACT,[jc]:s.FUNC_REVERSE_SUBTRACT};Ve[Qc]=s.MIN,Ve[eh]=s.MAX;let et={[th]:s.ZERO,[ih]:s.ONE,[nh]:s.SRC_COLOR,[Kr]:s.SRC_ALPHA,[ch]:s.SRC_ALPHA_SATURATE,[oh]:s.DST_COLOR,[rh]:s.DST_ALPHA,[sh]:s.ONE_MINUS_SRC_COLOR,[jr]:s.ONE_MINUS_SRC_ALPHA,[lh]:s.ONE_MINUS_DST_COLOR,[ah]:s.ONE_MINUS_DST_ALPHA,[hh]:s.CONSTANT_COLOR,[uh]:s.ONE_MINUS_CONSTANT_COLOR,[dh]:s.CONSTANT_ALPHA,[fh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ye(I,ie,Y,oe,fe,j,Se,_e,dt,st){if(I===ii){m===!0&&(De(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),I!==Jc){if(I!==f||st!==R){if((E!==ji||w!==ji)&&(s.blendEquation(s.FUNC_ADD),E=ji,w=ji),st)switch(I){case Mn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFunc(s.ONE,s.ONE);break;case Tl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ce("WebGLState: Invalid blending: ",I);break}else switch(I){case Mn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Tl:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",I);break}A=null,y=null,S=null,C=null,x.set(0,0,0),M=0,f=I,R=st}return}fe=fe||ie,j=j||Y,Se=Se||oe,(ie!==E||fe!==w)&&(s.blendEquationSeparate(Ve[ie],Ve[fe]),E=ie,w=fe),(Y!==A||oe!==y||j!==S||Se!==C)&&(s.blendFuncSeparate(et[Y],et[oe],et[j],et[Se]),A=Y,y=oe,S=j,C=Se),(_e.equals(x)===!1||dt!==M)&&(s.blendColor(_e.r,_e.g,_e.b,dt),x.copy(_e),M=dt),f=I,R=!1}function He(I,ie){I.side===Mi?De(s.CULL_FACE):ee(s.CULL_FACE);let Y=I.side===Wt;ie&&(Y=!Y),_t(Y),I.blending===Mn&&I.transparent===!1?Ye(ii):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let oe=I.stencilWrite;o.setTest(oe),oe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){P!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),P=I)}function St(I){I!==Yc?(ee(s.CULL_FACE),I!==N&&(I===El?s.cullFace(s.BACK):I===Zc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),N=I}function At(I){I!==W&&(G&&s.lineWidth(I),W=I)}function It(I,ie,Y){I?(ee(s.POLYGON_OFFSET_FILL),(q!==ie||O!==Y)&&(q=ie,O=Y,a.getReversed()&&(ie=-ie),s.polygonOffset(ie,Y))):De(s.POLYGON_OFFSET_FILL)}function ut(I){I?ee(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function yt(I){I===void 0&&(I=s.TEXTURE0+H-1),he!==I&&(s.activeTexture(I),he=I)}function D(I,ie,Y){Y===void 0&&(he===null?Y=s.TEXTURE0+H-1:Y=he);let oe=pe[Y];oe===void 0&&(oe={type:void 0,texture:void 0},pe[Y]=oe),(oe.type!==I||oe.texture!==ie)&&(he!==Y&&(s.activeTexture(Y),he=Y),s.bindTexture(I,ie||ne[I]),oe.type=I,oe.texture=ie)}function Xt(){let I=pe[he];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ze(){try{s.compressedTexImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function T(){try{s.compressedTexImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function g(){try{s.texSubImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function F(){try{s.texSubImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function te(){try{s.texStorage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function se(){try{s.texStorage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function $(){try{s.texImage2D(...arguments)}catch(I){Ce("WebGLState:",I)}}function Z(){try{s.texImage3D(...arguments)}catch(I){Ce("WebGLState:",I)}}function re(I){return d[I]!==void 0?d[I]:s.getParameter(I)}function Ee(I,ie){d[I]!==ie&&(s.pixelStorei(I,ie),d[I]=ie)}function le(I){ht.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ht.copy(I))}function ae(I){$e.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),$e.copy(I))}function Ae(I,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let oe=Y.get(I);oe===void 0&&(oe=s.getUniformBlockIndex(ie,I.name),Y.set(I,oe))}function Pe(I,ie){let oe=c.get(ie).get(I);l.get(ie)!==oe&&(s.uniformBlockBinding(ie,oe,I.__bindingPointIndex),l.set(ie,oe))}function Fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},he=null,pe={},h={},p=new WeakMap,v=[],b=null,m=!1,f=null,E=null,A=null,y=null,w=null,S=null,C=null,x=new Le(0,0,0),M=0,R=!1,P=null,N=null,W=null,q=null,O=null,ht.set(0,0,s.canvas.width,s.canvas.height),$e.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:De,bindFramebuffer:Ue,drawBuffers:Re,useProgram:mt,setBlending:Ye,setMaterial:He,setFlipSided:_t,setCullFace:St,setLineWidth:At,setPolygonOffset:It,setScissorTest:ut,activeTexture:yt,bindTexture:D,unbindTexture:Xt,compressedTexImage2D:Ze,compressedTexImage3D:T,texImage2D:$,texImage3D:Z,pixelStorei:Ee,getParameter:re,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:te,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:le,viewport:ae,reset:Fe}}function Fg(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,d=new Set,h,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,g){return v?new OffscreenCanvas(T,g):Rs("canvas")}function m(T,g,F){let z=1,X=Ze(T);if((X.width>F||X.height>F)&&(z=F/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let te=Math.floor(z*X.width),se=Math.floor(z*X.height);h===void 0&&(h=b(te,se));let $=g?b(te,se):h;return $.width=te,$.height=se,$.getContext("2d").drawImage(T,0,0,te,se),Ie("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+te+"x"+se+")."),$}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),T;return T}function f(T){return T.generateMipmaps}function E(T){s.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(T,g,F,z,X,te=!1){if(T!==null){if(s[T]!==void 0)return s[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se;z&&(se=e.get("EXT_texture_norm16"),se||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===s.RED&&(F===s.FLOAT&&($=s.R32F),F===s.HALF_FLOAT&&($=s.R16F),F===s.UNSIGNED_BYTE&&($=s.R8),F===s.UNSIGNED_SHORT&&se&&($=se.R16_EXT),F===s.SHORT&&se&&($=se.R16_SNORM_EXT)),g===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.R8UI),F===s.UNSIGNED_SHORT&&($=s.R16UI),F===s.UNSIGNED_INT&&($=s.R32UI),F===s.BYTE&&($=s.R8I),F===s.SHORT&&($=s.R16I),F===s.INT&&($=s.R32I)),g===s.RG&&(F===s.FLOAT&&($=s.RG32F),F===s.HALF_FLOAT&&($=s.RG16F),F===s.UNSIGNED_BYTE&&($=s.RG8),F===s.UNSIGNED_SHORT&&se&&($=se.RG16_EXT),F===s.SHORT&&se&&($=se.RG16_SNORM_EXT)),g===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RG8UI),F===s.UNSIGNED_SHORT&&($=s.RG16UI),F===s.UNSIGNED_INT&&($=s.RG32UI),F===s.BYTE&&($=s.RG8I),F===s.SHORT&&($=s.RG16I),F===s.INT&&($=s.RG32I)),g===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGB8UI),F===s.UNSIGNED_SHORT&&($=s.RGB16UI),F===s.UNSIGNED_INT&&($=s.RGB32UI),F===s.BYTE&&($=s.RGB8I),F===s.SHORT&&($=s.RGB16I),F===s.INT&&($=s.RGB32I)),g===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGBA8UI),F===s.UNSIGNED_SHORT&&($=s.RGBA16UI),F===s.UNSIGNED_INT&&($=s.RGBA32UI),F===s.BYTE&&($=s.RGBA8I),F===s.SHORT&&($=s.RGBA16I),F===s.INT&&($=s.RGBA32I)),g===s.RGB&&(F===s.UNSIGNED_SHORT&&se&&($=se.RGB16_EXT),F===s.SHORT&&se&&($=se.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),g===s.RGBA){let Z=te?Cs:ze.getTransfer(X);F===s.FLOAT&&($=s.RGBA32F),F===s.HALF_FLOAT&&($=s.RGBA16F),F===s.UNSIGNED_BYTE&&($=Z===Xe?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&se&&($=se.RGBA16_EXT),F===s.SHORT&&se&&($=se.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(T,g){let F;return T?g===null||g===ci||g===fs?F=s.DEPTH24_STENCIL8:g===hi?F=s.DEPTH32F_STENCIL8:g===ds&&(F=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ci||g===fs?F=s.DEPTH_COMPONENT24:g===hi?F=s.DEPTH_COMPONENT32F:g===ds&&(F=s.DEPTH_COMPONENT16),F}function S(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==Ft?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){let g=T.target;g.removeEventListener("dispose",C),M(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(T){let g=T.target;g.removeEventListener("dispose",x),P(g)}function M(T){let g=i.get(T);if(g.__webglInit===void 0)return;let F=T.source,z=p.get(F);if(z){let X=z[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(T),Object.keys(z).length===0&&p.delete(F)}i.remove(T)}function R(T){let g=i.get(T);s.deleteTexture(g.__webglTexture);let F=T.source,z=p.get(F);delete z[g.__cacheKey],a.memory.textures--}function P(T){let g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let X=0;X<g.__webglFramebuffer[z].length;X++)s.deleteFramebuffer(g.__webglFramebuffer[z][X]);else s.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)s.deleteFramebuffer(g.__webglFramebuffer[z]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=T.textures;for(let z=0,X=F.length;z<X;z++){let te=i.get(F[z]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(F[z])}i.remove(T)}let N=0;function W(){N=0}function q(){return N}function O(T){N=T}function H(){let T=N;return T>=n.maxTextures&&Ie("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),N+=1,T}function G(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function K(T,g){let F=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let z=T.image;if(z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,T,g);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+g)}function Q(T,g){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){De(F,T,g);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+g)}function he(T,g){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){De(F,T,g);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+g)}function pe(T,g){let F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Ue(F,T,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+g)}let ve={[aa]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[oa]:s.MIRRORED_REPEAT},qe={[Rt]:s.NEAREST,[gh]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Fa]:s.LINEAR_MIPMAP_NEAREST,[ln]:s.LINEAR_MIPMAP_LINEAR},ht={[_h]:s.NEVER,[Eh]:s.ALWAYS,[yh]:s.LESS,[bo]:s.LEQUAL,[bh]:s.EQUAL,[Mo]:s.GEQUAL,[Mh]:s.GREATER,[Sh]:s.NOTEQUAL};function $e(T,g){if(g.type===hi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ft||g.magFilter===Fa||g.magFilter===or||g.magFilter===ln||g.minFilter===Ft||g.minFilter===Fa||g.minFilter===or||g.minFilter===ln)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ve[g.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ve[g.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ve[g.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,qe[g.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,qe[g.minFilter]),g.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ht[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==or&&g.minFilter!==ln||g.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function J(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));let z=g.source,X=p.get(z);X===void 0&&(X={},p.set(z,X));let te=G(g);if(te!==T.__cacheKey){X[te]===void 0&&(X[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[te].usedTimes++;let se=X[T.__cacheKey];se!==void 0&&(X[T.__cacheKey].usedTimes--,se.usedTimes===0&&R(g)),T.__cacheKey=te,T.__webglTexture=X[te].texture}return F}function ne(T,g,F){return Math.floor(Math.floor(T/F)/g)}function ee(T,g,F,z){let te=T.updateRanges;if(te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,F,z,g.data);else{te.sort((Ee,le)=>Ee.start-le.start);let se=0;for(let Ee=1;Ee<te.length;Ee++){let le=te[se],ae=te[Ee],Ae=le.start+le.count,Pe=ne(ae.start,g.width,4),Fe=ne(le.start,g.width,4);ae.start<=Ae+1&&Pe===Fe&&ne(ae.start+ae.count-1,g.width,4)===Pe?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++se,te[se]=ae)}te.length=se+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),Z=t.getParameter(s.UNPACK_SKIP_PIXELS),re=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,le=te.length;Ee<le;Ee++){let ae=te[Ee],Ae=Math.floor(ae.start/4),Pe=Math.ceil(ae.count/4),Fe=Ae%g.width,I=Math.floor(Ae/g.width),ie=Pe,Y=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Fe,I,ie,Y,F,z,g.data)}T.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(s.UNPACK_SKIP_ROWS,re)}}function De(T,g,F){let z=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=s.TEXTURE_3D);let X=J(T,g),te=g.source;t.bindTexture(z,T.__webglTexture,s.TEXTURE0+F);let se=i.get(te);if(te.version!==se.__version||X===!0){if(t.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Y=ze.getPrimaries(ze.workingColorSpace),oe=g.colorSpace===Bi?null:ze.getPrimaries(g.colorSpace),fe=g.colorSpace===Bi||Y===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment);let Z=m(g.image,!1,n.maxTextureSize);Z=Xt(g,Z);let re=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type),le=y(g.internalFormat,re,Ee,g.normalized,g.colorSpace,g.isVideoTexture);$e(z,g);let ae,Ae=g.mipmaps,Pe=g.isVideoTexture!==!0,Fe=se.__version===void 0||X===!0,I=te.dataReady,ie=S(g,Z);if(g.isDepthTexture)le=w(g.format===cn,g.type),Fe&&(Pe?t.texStorage2D(s.TEXTURE_2D,1,le,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,le,Z.width,Z.height,0,re,Ee,null));else if(g.isDataTexture)if(Ae.length>0){Pe&&Fe&&t.texStorage2D(s.TEXTURE_2D,ie,le,Ae[0].width,Ae[0].height);for(let Y=0,oe=Ae.length;Y<oe;Y++)ae=Ae[Y],Pe?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ae.width,ae.height,re,Ee,ae.data):t.texImage2D(s.TEXTURE_2D,Y,le,ae.width,ae.height,0,re,Ee,ae.data);g.generateMipmaps=!1}else Pe?(Fe&&t.texStorage2D(s.TEXTURE_2D,ie,le,Z.width,Z.height),I&&ee(g,Z,re,Ee)):t.texImage2D(s.TEXTURE_2D,0,le,Z.width,Z.height,0,re,Ee,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,le,Ae[0].width,Ae[0].height,Z.depth);for(let Y=0,oe=Ae.length;Y<oe;Y++)if(ae=Ae[Y],g.format!==ni)if(re!==null)if(Pe){if(I)if(g.layerUpdates.size>0){let fe=zl(ae.width,ae.height,g.format,g.type);for(let j of g.layerUpdates){let Se=ae.data.subarray(j*fe/ae.data.BYTES_PER_ELEMENT,(j+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,j,ae.width,ae.height,1,re,Se)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,Z.depth,re,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,le,ae.width,ae.height,Z.depth,0,ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,Z.depth,re,Ee,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,le,ae.width,ae.height,Z.depth,0,re,Ee,ae.data)}else{Pe&&Fe&&t.texStorage2D(s.TEXTURE_2D,ie,le,Ae[0].width,Ae[0].height);for(let Y=0,oe=Ae.length;Y<oe;Y++)ae=Ae[Y],g.format!==ni?re!==null?Pe?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,le,ae.width,ae.height,0,ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ae.width,ae.height,re,Ee,ae.data):t.texImage2D(s.TEXTURE_2D,Y,le,ae.width,ae.height,0,re,Ee,ae.data)}else if(g.isDataArrayTexture)if(Pe){if(Fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,le,Z.width,Z.height,Z.depth),I)if(g.layerUpdates.size>0){let Y=zl(Z.width,Z.height,g.format,g.type);for(let oe of g.layerUpdates){let fe=Z.data.subarray(oe*Y/Z.data.BYTES_PER_ELEMENT,(oe+1)*Y/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,Z.width,Z.height,1,re,Ee,fe)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,re,Ee,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,le,Z.width,Z.height,Z.depth,0,re,Ee,Z.data);else if(g.isData3DTexture)Pe?(Fe&&t.texStorage3D(s.TEXTURE_3D,ie,le,Z.width,Z.height,Z.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,re,Ee,Z.data)):t.texImage3D(s.TEXTURE_3D,0,le,Z.width,Z.height,Z.depth,0,re,Ee,Z.data);else if(g.isFramebufferTexture){if(Fe)if(Pe)t.texStorage2D(s.TEXTURE_2D,ie,le,Z.width,Z.height);else{let Y=Z.width,oe=Z.height;for(let fe=0;fe<ie;fe++)t.texImage2D(s.TEXTURE_2D,fe,le,Y,oe,0,re,Ee,null),Y>>=1,oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in s){let Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Z.parentNode!==Y){Y.appendChild(Z),d.add(g),Y.onpaint=oe=>{let fe=oe.changedElements;for(let j of d)fe.includes(j.image)&&(j.needsUpdate=!0)},Y.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Z);else{let fe=s.RGBA,j=s.RGBA,Se=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,fe,j,Se,Z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&Fe){let Y=Ze(Ae[0]);t.texStorage2D(s.TEXTURE_2D,ie,le,Y.width,Y.height)}for(let Y=0,oe=Ae.length;Y<oe;Y++)ae=Ae[Y],Pe?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,re,Ee,ae):t.texImage2D(s.TEXTURE_2D,Y,le,re,Ee,ae);g.generateMipmaps=!1}else if(Pe){if(Fe){let Y=Ze(Z);t.texStorage2D(s.TEXTURE_2D,ie,le,Y.width,Y.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,Ee,Z)}else t.texImage2D(s.TEXTURE_2D,0,le,re,Ee,Z);f(g)&&E(z),se.__version=te.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ue(T,g,F){if(g.image.length!==6)return;let z=J(T,g),X=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);let te=i.get(X);if(X.version!==te.__version||z===!0){t.activeTexture(s.TEXTURE0+F);let se=ze.getPrimaries(ze.workingColorSpace),$=g.colorSpace===Bi?null:ze.getPrimaries(g.colorSpace),Z=g.colorSpace===Bi||se===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let re=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!re&&!Ee?le[j]=m(g.image[j],!0,n.maxCubemapSize):le[j]=Ee?g.image[j].image:g.image[j],le[j]=Xt(g,le[j]);let ae=le[0],Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),Fe=y(g.internalFormat,Ae,Pe,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,ie=te.__version===void 0||z===!0,Y=X.dataReady,oe=S(g,ae);$e(s.TEXTURE_CUBE_MAP,g);let fe;if(re){I&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Fe,ae.width,ae.height);for(let j=0;j<6;j++){fe=le[j].mipmaps;for(let Se=0;Se<fe.length;Se++){let _e=fe[Se];g.format!==ni?Ae!==null?I?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,_e.width,_e.height,Ae,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Fe,_e.width,_e.height,0,_e.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,_e.width,_e.height,Ae,Pe,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Fe,_e.width,_e.height,0,Ae,Pe,_e.data)}}}else{if(fe=g.mipmaps,I&&ie){fe.length>0&&oe++;let j=Ze(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Fe,j.width,j.height)}for(let j=0;j<6;j++)if(Ee){I?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,Ae,Pe,le[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,le[j].width,le[j].height,0,Ae,Pe,le[j].data);for(let Se=0;Se<fe.length;Se++){let dt=fe[Se].image[j].image;I?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,dt.width,dt.height,Ae,Pe,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Fe,dt.width,dt.height,0,Ae,Pe,dt.data)}}else{I?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,Pe,le[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,Ae,Pe,le[j]);for(let Se=0;Se<fe.length;Se++){let _e=fe[Se];I?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Ae,Pe,_e.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Fe,Ae,Pe,_e.image[j])}}}f(g)&&E(s.TEXTURE_CUBE_MAP),te.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Re(T,g,F,z,X,te){let se=r.convert(F.format,F.colorSpace),$=r.convert(F.type),Z=y(F.internalFormat,se,$,F.normalized,F.colorSpace),re=i.get(g),Ee=i.get(F);if(Ee.__renderTarget=g,!re.__hasExternalTextures){let le=Math.max(1,g.width>>te),ae=Math.max(1,g.height>>te);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?t.texImage3D(X,te,Z,le,ae,g.depth,0,se,$,null):t.texImage2D(X,te,Z,le,ae,0,se,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),yt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,X,Ee.__webglTexture,0,ut(g)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,z,X,Ee.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(T,g,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),g.depthBuffer){let z=g.depthTexture,X=z&&z.isDepthTexture?z.type:null,te=w(g.stencilBuffer,X),se=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;yt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(g),te,g.width,g.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(g),te,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,te,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,T)}else{let z=g.textures;for(let X=0;X<z.length;X++){let te=z[X],se=r.convert(te.format,te.colorSpace),$=r.convert(te.type),Z=y(te.internalFormat,se,$,te.normalized,te.colorSpace);yt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(g),Z,g.width,g.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(g),Z,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,Z,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(T,g,F){let z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),$e(s.TEXTURE_CUBE_MAP,g.depthTexture);let re=r.convert(g.depthTexture.format),Ee=r.convert(g.depthTexture.type),le;g.depthTexture.format===vi?le=s.DEPTH_COMPONENT24:g.depthTexture.format===cn&&(le=s.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,g.width,g.height,0,re,Ee,null)}}else K(g.depthTexture,0);let te=X.__webglTexture,se=ut(g),$=z?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,Z=g.depthTexture.format===cn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===vi)yt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,te,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,te,0);else if(g.depthTexture.format===cn)yt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,te,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(T){let g=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let z=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=z}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let z=0;z<6;z++)Ve(g.__webglFramebuffer[z],T,z);else{let z=T.texture.mipmaps;z&&z.length>0?Ve(g.__webglFramebuffer[0],T,0):Ve(g.__webglFramebuffer,T,0)}else if(F){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=s.createRenderbuffer(),mt(g.__webglDepthbuffer[z],T,!1);else{let X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[z];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,te)}}else{let z=T.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),mt(g.__webglDepthbuffer,T,!1);else{let X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(T,g,F){let z=i.get(T);g!==void 0&&Re(z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&et(T)}function He(T){let g=T.texture,F=i.get(T),z=i.get(g);T.addEventListener("dispose",x);let X=T.textures,te=T.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture()),z.__version=g.version,a.memory.textures++),te){F.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[$]=[];for(let Z=0;Z<g.mipmaps.length;Z++)F.__webglFramebuffer[$][Z]=s.createFramebuffer()}else F.__webglFramebuffer[$]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)F.__webglFramebuffer[$]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(se)for(let $=0,Z=X.length;$<Z;$++){let re=i.get(X[$]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&yt(T)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let $=0;$<X.length;$++){let Z=X[$];F.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let re=r.convert(Z.format,Z.colorSpace),Ee=r.convert(Z.type),le=y(Z.internalFormat,re,Ee,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),ae=ut(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,le,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,F.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture),$e(s.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Re(F.__webglFramebuffer[$][Z],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Z);else Re(F.__webglFramebuffer[$],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let $=0,Z=X.length;$<Z;$++){let re=X[$],Ee=i.get(re),le=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Ee.__webglTexture),$e(le,re),Re(F.__webglFramebuffer,T,re,s.COLOR_ATTACHMENT0+$,le,0),f(re)&&E(le)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,z.__webglTexture),$e($,g),g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Re(F.__webglFramebuffer[Z],T,g,s.COLOR_ATTACHMENT0,$,Z);else Re(F.__webglFramebuffer,T,g,s.COLOR_ATTACHMENT0,$,0);f(g)&&E($),t.unbindTexture()}T.depthBuffer&&et(T)}function _t(T){let g=T.textures;for(let F=0,z=g.length;F<z;F++){let X=g[F];if(f(X)){let te=A(T),se=i.get(X).__webglTexture;t.bindTexture(te,se),E(te),t.unbindTexture()}}}let St=[],At=[];function It(T){if(T.samples>0){if(yt(T)===!1){let g=T.textures,F=T.width,z=T.height,X=s.COLOR_BUFFER_BIT,te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=i.get(T),$=g.length>1;if($)for(let re=0;re<g.length;re++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let Z=T.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Ee=i.get(g[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,F,z,0,0,F,z,X,s.NEAREST),l===!0&&(St.length=0,At.length=0,St.push(s.COLOR_ATTACHMENT0+re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(St.push(te),At.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,At)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let re=0;re<g.length;re++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Ee=i.get(g[re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function ut(T){return Math.min(n.maxSamples,T.samples)}function yt(T){let g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){let g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Xt(T,g){let F=T.colorSpace,z=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==As&&F!==Bi&&(ze.getTransfer(F)===Xe?(z!==ni||X!==$t)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",F)),g}function Ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=pe,this.rebindTextures=Ye,this.setupRenderTarget=He,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Og(s,e){function t(i,n=Bi){let r,a=ze.getTransfer(n);if(i===$t)return s.UNSIGNED_BYTE;if(i===Ba)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Il)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ll)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rl)return s.BYTE;if(i===Pl)return s.SHORT;if(i===ds)return s.UNSIGNED_SHORT;if(i===Oa)return s.INT;if(i===ci)return s.UNSIGNED_INT;if(i===hi)return s.FLOAT;if(i===zt)return s.HALF_FLOAT;if(i===Dl)return s.ALPHA;if(i===Nl)return s.RGB;if(i===ni)return s.RGBA;if(i===vi)return s.DEPTH_COMPONENT;if(i===cn)return s.DEPTH_STENCIL;if(i===Ul)return s.RED;if(i===za)return s.RED_INTEGER;if(i===hn)return s.RG;if(i===Va)return s.RG_INTEGER;if(i===Ga)return s.RGBA_INTEGER;if(i===lr||i===cr||i===hr||i===ur)if(a===Xe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Wa||i===Xa||i===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Ya||i===Za||i===Ja||i===Ka||i===dr||i===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$a||i===Ya)return a===Xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Za)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ja)return r.COMPRESSED_R11_EAC;if(i===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===dr)return r.COMPRESSED_RG11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qa||i===eo||i===to||i===io||i===no||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qa)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===no)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ro)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ao)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===co)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uo)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fo)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===mo||i===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===po)return a===Xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xo||i===vo||i===fr||i===_o)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:Bg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new Tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends _i{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null,b=typeof XRWebGLBinding<"u",m=new rc,f={},E=t.getContextAttributes(),A=null,y=null,w=[],S=[],C=new ye,x=null,M=new Ut;M.viewport=new ct;let R=new Ut;R.viewport=new ct;let P=[M,R],N=new Ia,W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=w[J];return ne===void 0&&(ne=new es,w[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=w[J];return ne===void 0&&(ne=new es,w[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=w[J];return ne===void 0&&(ne=new es,w[J]=ne),ne.getHandSpace()};function O(J){let ne=S.indexOf(J.inputSource);if(ne===-1)return;let ee=w[ne];ee!==void 0&&(ee.update(J.inputSource,J.frame,c||a),ee.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",G);for(let J=0;J<w.length;J++){let ne=S[J];ne!==null&&(S[J]=null,w[J].disconnect(ne))}W=null,q=null,m.reset();for(let J in f)delete f[J];e.setRenderTarget(A),p=null,h=null,d=null,n=null,y=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",H),n.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,De=null,Ue=null;E.depth&&(Ue=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?cn:vi,De=E.stencil?fs:ci);let Re={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Re),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Et(h.textureWidth,h.textureHeight,{format:ni,type:$t,depthTexture:new Oi(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Et(p.framebufferWidth,p.framebufferHeight,{format:ni,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),$e.setContext(n),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let ne=0;ne<J.removed.length;ne++){let ee=J.removed[ne],De=S.indexOf(ee);De>=0&&(S[De]=null,w[De].disconnect(ee))}for(let ne=0;ne<J.added.length;ne++){let ee=J.added[ne],De=S.indexOf(ee);if(De===-1){for(let Re=0;Re<w.length;Re++)if(Re>=S.length){S.push(ee),De=Re;break}else if(S[Re]===null){S[Re]=ee,De=Re;break}if(De===-1)break}let Ue=w[De];Ue&&Ue.connect(ee)}}let K=new L,Q=new L;function he(J,ne,ee){K.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);let De=K.distanceTo(Q),Ue=ne.projectionMatrix.elements,Re=ee.projectionMatrix.elements,mt=Ue[14]/(Ue[10]-1),Ve=Ue[14]/(Ue[10]+1),et=(Ue[9]+1)/Ue[5],Ye=(Ue[9]-1)/Ue[5],He=(Ue[8]-1)/Ue[0],_t=(Re[8]+1)/Re[0],St=mt*He,At=mt*_t,It=De/(-He+_t),ut=It*-He;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ut),J.translateZ(It),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ue[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let yt=mt+It,D=Ve+It,Xt=St-ut,Ze=At+(De-ut),T=et*Ve/D*yt,g=Ye*Ve/D*yt;J.projectionMatrix.makePerspective(Xt,Ze,T,g,yt,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ne=J.near,ee=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),N.near=R.near=M.near=ne,N.far=R.far=M.far=ee,(W!==N.near||q!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,q=N.far),N.layers.mask=J.layers.mask|6,M.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let De=J.parent,Ue=N.cameras;pe(N,De);for(let Re=0;Re<Ue.length;Re++)pe(Ue[Re],De);Ue.length===2?he(N,M,R):N.projectionMatrix.copy(M.projectionMatrix),ve(J,N,De)};function ve(J,ne,ee){ee===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ha*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return f[J]};let qe=null;function ht(J,ne){if(u=ne.getViewerPose(c||a),v=ne,u!==null){let ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let De=!1;ee.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let Ve=0;Ve<ee.length;Ve++){let et=ee[Ve],Ye=null;if(p!==null)Ye=p.getViewport(et);else{let _t=d.getViewSubImage(h,et);Ye=_t.viewport,Ve===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let He=P[Ve];He===void 0&&(He=new Ut,He.layers.enable(Ve),He.viewport=new ct,P[Ve]=He),He.matrix.fromArray(et.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(et.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ve===0&&(N.matrix.copy(He.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(He)}let Ue=n.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let Ve=d.getDepthInformation(ee[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,n.renderState)}if(Ue&&Ue.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<ee.length;Ve++){let et=ee[Ve].camera;if(et){let Ye=f[et];Ye||(Ye=new zs,f[et]=Ye);let He=d.getCameraImage(et);Ye.sourceTexture=He}}}}for(let ee=0;ee<w.length;ee++){let De=S[ee],Ue=w[ee];De!==null&&Ue!==void 0&&Ue.update(De,ne,c||a)}qe&&qe(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}let $e=new eu;$e.setAnimationLoop(ht),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}},zg=new at,au=new Ne;au.set(-1,0,0,0,1,0,0,0,1);function Vg(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ol(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,E,A,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f),A=E.envMap,y=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(au),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Gg(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let S=w.program;i.uniformBlockBinding(y,S)}function c(y,w){let S=n[y.id];S===void 0&&(m(y),S=u(y),n[y.id]=S,y.addEventListener("dispose",E));let C=w.program;i.updateUBOMapping(y,C);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let w=d();y.__bindingPointIndex=w;let S=s.createBuffer(),C=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,S),S}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=n[y.id],S=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let x=0,M=S.length;x<M;x++){let R=S[x];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)p(R[P],x,P,C);else p(R,x,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,w,S,C){if(b(y,w,S,C)===!0){let x=y.__offset,M=y.value;if(Array.isArray(M)){let R=0;for(let P=0;P<M.length;P++){let N=M[P],W=f(N);v(N,y.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(M,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function v(y,w,S){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,S)}function b(y,w,S,C){let x=y.value,M=w+"_"+S;if(C[M]===void 0)return typeof x=="number"||typeof x=="boolean"?C[M]=x:ArrayBuffer.isView(x)?C[M]=x.slice():C[M]=x.clone(),!0;{let R=C[M];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let w=y.uniforms,S=0,C=16;for(let M=0,R=w.length;M<R;M++){let P=Array.isArray(w[M])?w[M]:[w[M]];for(let N=0,W=P.length;N<W;N++){let q=P[N],O=Array.isArray(q.value)?q.value:[q.value];for(let H=0,G=O.length;H<G;H++){let K=O[H],Q=f(K),he=S%C,pe=he%Q.boundary,ve=he+pe;S+=pe,ve!==0&&C-ve<Q.storage&&(S+=C-ve),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Q.storage}}}let x=S%C;return x>0&&(S+=C-x),y.__size=S,y.__cache={},this}function f(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),w}function E(y){let w=y.target;w.removeEventListener("dispose",E);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function A(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:A}}var Hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Wg(){return Si===null&&(Si=new ma(Hg,16,16,hn,zt),Si.name="DFG_LUT",Si.minFilter=Ft,Si.magFilter=Ft,Si.wrapS=xi,Si.wrapT=xi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var Ao=class{constructor(e={}){let{canvas:t=Th(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=$t}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;let b=p,m=new Set([Ga,Va,za]),f=new Set([$t,ci,ds,fs,Ba,ka]),E=new Uint32Array(4),A=new Int32Array(4),y=new L,w=null,S=null,C=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,W=null,q=null,O=null;this._outputColorSpace=Nt;let H=0,G=0,K=null,Q=-1,he=null,pe=new ct,ve=new ct,qe=null,ht=new Le(0),$e=0,J=t.width,ne=t.height,ee=1,De=null,Ue=null,Re=new ct(0,0,J,ne),mt=new ct(0,0,J,ne),Ve=!1,et=new ns,Ye=!1,He=!1,_t=new at,St=new L,At=new ct,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function yt(){return K===null?ee:1}let D=i;function Xt(_,U){return t.getContext(_,U)}try{let _={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",ui,!1),D===null){let U="webgl2";if(D=Xt(U,_),D===null)throw Xt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw Ce("WebGLRenderer: "+_.message),_}let Ze,T,g,F,z,X,te,se,$,Z,re,Ee,le,ae,Ae,Pe,Fe,I,ie,Y,oe,fe,j;function Se(){Ze=new Kp(D),Ze.init(),oe=new Og(D,Ze),T=new Hp(D,Ze,e,oe),g=new Ug(D,Ze),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),W=D.createFramebuffer(),q=D.createFramebuffer(),O=D.createFramebuffer(),F=new em(D),z=new bg,X=new Fg(D,Ze,g,z,T,oe,F),te=new Jp(R),se=new nd(D),fe=new Vp(D,se),$=new jp(D,se,F,fe),Z=new im(D,$,se,fe,F),I=new tm(D,T,X),Ae=new Wp(z),re=new yg(R,te,Ze,T,fe,Ae),Ee=new Vg(R,z),le=new Sg,ae=new Rg(Ze),Fe=new zp(R,te,g,Z,v,l),Pe=new Ng(R,Z,T),j=new Gg(D,F,T,g),ie=new Gp(D,Ze,F),Y=new Qp(D,Ze,F),F.programs=re.programs,R.capabilities=T,R.extensions=Ze,R.properties=z,R.renderLists=le,R.shadowMap=Pe,R.state=g,R.info=F}Se(),b!==$t&&(M=new sm(b,t.width,t.height,o,n,r));let _e=new ac(R,D);this.xr=_e,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=Ze.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Ze.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(_){_!==void 0&&(ee=_,this.setSize(J,ne,!1))},this.getSize=function(_){return _.set(J,ne)},this.setSize=function(_,U,V=!0){if(_e.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}J=_,ne=U,t.width=Math.floor(_*ee),t.height=Math.floor(U*ee),V===!0&&(t.style.width=_+"px",t.style.height=U+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(J*ee,ne*ee).floor()},this.setDrawingBufferSize=function(_,U,V){J=_,ne=U,ee=V,t.width=Math.floor(_*V),t.height=Math.floor(U*V),this.setViewport(0,0,_,U)},this.setEffects=function(_){if(b===$t){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let U=0;U<_.length;U++)if(_[U].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(pe)},this.getViewport=function(_){return _.copy(Re)},this.setViewport=function(_,U,V,B){_.isVector4?Re.set(_.x,_.y,_.z,_.w):Re.set(_,U,V,B),g.viewport(pe.copy(Re).multiplyScalar(ee).round())},this.getScissor=function(_){return _.copy(mt)},this.setScissor=function(_,U,V,B){_.isVector4?mt.set(_.x,_.y,_.z,_.w):mt.set(_,U,V,B),g.scissor(ve.copy(mt).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(_){g.setScissorTest(Ve=_)},this.setOpaqueSort=function(_){De=_},this.setTransparentSort=function(_){Ue=_},this.getClearColor=function(_){return _.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(_=!0,U=!0,V=!0){let B=0;if(_){let k=!1;if(K!==null){let de=K.texture.format;k=m.has(de)}if(k){let de=K.texture.type,xe=f.has(de),ue=Fe.getClearColor(),Me=Fe.getClearAlpha(),Te=ue.r,Oe=ue.g,ke=ue.b;xe?(E[0]=Te,E[1]=Oe,E[2]=ke,E[3]=Me,D.clearBufferuiv(D.COLOR,0,E)):(A[0]=Te,A[1]=Oe,A[2]=ke,A[3]=Me,D.clearBufferiv(D.COLOR,0,A))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),N=_},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",ui,!1),Fe.dispose(),le.dispose(),ae.dispose(),z.dispose(),te.dispose(),Z.dispose(),fe.dispose(),j.dispose(),re.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",cc),_e.removeEventListener("sessionend",hc),fn.stop()};function dt(_){_.preventDefault(),Ps("WebGLRenderer: Context Lost."),P=!0}function st(){Ps("WebGLRenderer: Context Restored."),P=!1;let _=F.autoReset,U=Pe.enabled,V=Pe.autoUpdate,B=Pe.needsUpdate,k=Pe.type;Se(),F.autoReset=_,Pe.enabled=U,Pe.autoUpdate=V,Pe.needsUpdate=B,Pe.type=k}function ui(_){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function di(_){let U=_.target;U.removeEventListener("dispose",di),cu(U)}function cu(_){hu(_),z.remove(_)}function hu(_){let U=z.get(_).programs;U!==void 0&&(U.forEach(function(V){re.releaseProgram(V)}),_.isShaderMaterial&&re.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,V,B,k,de){U===null&&(U=It);let xe=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=fu(_,U,V,B,k);g.setMaterial(B,xe);let Me=V.index,Te=1;if(B.wireframe===!0){if(Me=$.getWireframeAttribute(V),Me===void 0)return;Te=2}let Oe=V.drawRange,ke=V.attributes.position,we=Oe.start*Te,Ke=(Oe.start+Oe.count)*Te;de!==null&&(we=Math.max(we,de.start*Te),Ke=Math.min(Ke,(de.start+de.count)*Te)),Me!==null?(we=Math.max(we,0),Ke=Math.min(Ke,Me.count)):ke!=null&&(we=Math.max(we,0),Ke=Math.min(Ke,ke.count));let gt=Ke-we;if(gt<0||gt===1/0)return;fe.setup(k,B,ue,V,Me);let ft,tt=ie;if(Me!==null&&(ft=se.get(Me),tt=Y,tt.setIndex(ft)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*yt()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(k.isLine){let Ot=B.linewidth;Ot===void 0&&(Ot=1),g.setLineWidth(Ot*yt()),k.isLineSegments?tt.setMode(D.LINES):k.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else k.isPoints?tt.setMode(D.POINTS):k.isSprite&&tt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ot=k._multiDrawStarts,ge=k._multiDrawCounts,Yt=k._multiDrawCount,We=Me?se.get(Me).bytesPerElement:1,Qt=z.get(B).currentProgram.getUniforms();for(let fi=0;fi<Yt;fi++)Qt.setValue(D,"_gl_DrawID",fi),tt.render(Ot[fi]/We,ge[fi])}else if(k.isInstancedMesh)tt.renderInstances(we,gt,k.count);else if(V.isInstancedBufferGeometry){let Ot=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,Ot);tt.renderInstances(we,gt,ge)}else tt.render(we,gt)};function lc(_,U,V){_.transparent===!0&&_.side===Mi&&_.forceSinglePass===!1?(_.side=Wt,_.needsUpdate=!0,yr(_,U,V),_.side=Ni,_.needsUpdate=!0,yr(_,U,V),_.side=Mi):yr(_,U,V)}this.compile=function(_,U,V=null){V===null&&(V=_),S=ae.get(V),S.init(U),x.push(S),V.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),_!==V&&_.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();let B=new Set;return _.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){let ue=de[xe];lc(ue,V,k),B.add(ue)}else lc(de,V,k),B.add(de)}),S=x.pop(),B},this.compileAsync=function(_,U,V=null){let B=this.compile(_,U,V);return new Promise(k=>{function de(){if(B.forEach(function(xe){z.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){k(_);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ko=null;function uu(_){ko&&ko(_)}function cc(){fn.stop()}function hc(){fn.start()}let fn=new eu;fn.setAnimationLoop(uu),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(_){ko=_,_e.setAnimationLoop(_),_===null?fn.stop():fn.start()},_e.addEventListener("sessionstart",cc),_e.addEventListener("sessionend",hc),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(_,U);let V=_e.enabled===!0&&_e.isPresenting===!0,B=M!==null&&(K===null||V)&&M.begin(R,K);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(U),U=_e.getCamera()),_.isScene===!0&&_.onBeforeRender(R,_,U,K),S=ae.get(_,x.length),S.init(U),S.state.textureUnits=X.getTextureUnits(),x.push(S),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(_t,oi,U.reversedDepth),He=this.localClippingEnabled,Ye=Ae.init(this.clippingPlanes,He),w=le.get(_,C.length),w.init(),C.push(w),_e.enabled===!0&&_e.isPresenting===!0){let xe=R.xr.getDepthSensingMesh();xe!==null&&zo(xe,U,-1/0,R.sortObjects)}zo(_,U,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(De,Ue,U.reversedDepth),ut=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,ut&&Fe.addToRenderList(w,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ae.beginShadows();let k=S.state.shadowsArray;if(Pe.render(k,_,U),Ye===!0&&Ae.endShadows(),(B&&M.hasRenderPass())===!1){let xe=w.opaque,ue=w.transmissive;if(S.setupLights(),U.isArrayCamera){let Me=U.cameras;if(ue.length>0)for(let Te=0,Oe=Me.length;Te<Oe;Te++){let ke=Me[Te];dc(xe,ue,_,ke)}ut&&Fe.render(_);for(let Te=0,Oe=Me.length;Te<Oe;Te++){let ke=Me[Te];uc(w,_,ke,ke.viewport)}}else ue.length>0&&dc(xe,ue,_,U),ut&&Fe.render(_),uc(w,_,U)}K!==null&&G===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),B&&M.end(R),_.isScene===!0&&_.onAfterRender(R,_,U),fe.resetDefaultState(),Q=-1,he=null,x.pop(),x.length>0?(S=x[x.length-1],X.setTextureUnits(S.state.textureUnits),Ye===!0&&Ae.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,N!==null&&N.renderEnd()};function zo(_,U,V,B){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)V=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLightProbeGrid)S.pushLightProbeGrid(_);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||et.intersectsSprite(_)){B&&At.setFromMatrixPosition(_.matrixWorld).applyMatrix4(_t);let xe=Z.update(_),ue=_.material;ue.visible&&w.push(_,xe,ue,V,At.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||et.intersectsObject(_))){let xe=Z.update(_),ue=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),At.copy(_.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),At.copy(xe.boundingSphere.center)),At.applyMatrix4(_.matrixWorld).applyMatrix4(_t)),Array.isArray(ue)){let Me=xe.groups;for(let Te=0,Oe=Me.length;Te<Oe;Te++){let ke=Me[Te],we=ue[ke.materialIndex];we&&we.visible&&w.push(_,xe,we,V,At.z,ke)}}else ue.visible&&w.push(_,xe,ue,V,At.z,null)}}let de=_.children;for(let xe=0,ue=de.length;xe<ue;xe++)zo(de[xe],U,V,B)}function uc(_,U,V,B){let{opaque:k,transmissive:de,transparent:xe}=_;S.setupLightsView(V),Ye===!0&&Ae.setGlobalState(R.clippingPlanes,V),B&&g.viewport(pe.copy(B)),k.length>0&&_r(k,U,V),de.length>0&&_r(de,U,V),xe.length>0&&_r(xe,U,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function dc(_,U,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let we=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new Et(1,1,{generateMipmaps:!0,type:we?zt:$t,minFilter:ln,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let de=S.state.transmissionRenderTarget[B.id],xe=B.viewport||pe;de.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);let ue=R.getRenderTarget(),Me=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(ht),$e=R.getClearAlpha(),$e<1&&R.setClearColor(16777215,.5),R.clear(),ut&&Fe.render(V);let Oe=R.toneMapping;R.toneMapping=li;let ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),Ye===!0&&Ae.setGlobalState(R.clippingPlanes,B),_r(_,V,B),X.updateMultisampleRenderTarget(de),X.updateRenderTargetMipmap(de),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ke=0,gt=U.length;Ke<gt;Ke++){let ft=U[Ke],{object:tt,geometry:Ot,material:ge,group:Yt}=ft;if(ge.side===Mi&&tt.layers.test(B.layers)){let We=ge.side;ge.side=Wt,ge.needsUpdate=!0,fc(tt,V,B,Ot,ge,Yt),ge.side=We,ge.needsUpdate=!0,we=!0}}we===!0&&(X.updateMultisampleRenderTarget(de),X.updateRenderTargetMipmap(de))}R.setRenderTarget(ue,Me,Te),R.setClearColor(ht,$e),ke!==void 0&&(B.viewport=ke),R.toneMapping=Oe}function _r(_,U,V){let B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,de=_.length;k<de;k++){let xe=_[k],{object:ue,geometry:Me,group:Te}=xe,Oe=xe.material;Oe.allowOverride===!0&&B!==null&&(Oe=B),ue.layers.test(V.layers)&&fc(ue,U,V,Me,Oe,Te)}}function fc(_,U,V,B,k,de){_.onBeforeRender(R,U,V,B,k,de),_.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),k.onBeforeRender(R,U,V,B,_,de),k.transparent===!0&&k.side===Mi&&k.forceSinglePass===!1?(k.side=Wt,k.needsUpdate=!0,R.renderBufferDirect(V,U,B,k,_,de),k.side=Ni,k.needsUpdate=!0,R.renderBufferDirect(V,U,B,k,_,de),k.side=Mi):R.renderBufferDirect(V,U,B,k,_,de),_.onAfterRender(R,U,V,B,k,de)}function yr(_,U,V){U.isScene!==!0&&(U=It);let B=z.get(_),k=S.state.lights,de=S.state.shadowsArray,xe=k.state.version,ue=re.getParameters(_,k.state,de,U,V,S.state.lightProbeGridArray),Me=re.getProgramCacheKey(ue),Te=B.programs;B.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Oe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;B.envMap=te.get(_.envMap||B.environment,Oe),B.envMapRotation=B.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Te===void 0&&(_.addEventListener("dispose",di),Te=new Map,B.programs=Te);let ke=Te.get(Me);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===xe)return mc(_,ue),ke}else ue.uniforms=re.getUniforms(_),N!==null&&_.isNodeMaterial&&N.build(_,V,ue),_.onBeforeCompile(ue,R),ke=re.acquireProgram(ue,Me),Te.set(Me,ke),B.uniforms=ue.uniforms;let we=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(we.clippingPlanes=Ae.uniform),mc(_,ue),B.needsLights=mu(_),B.lightsStateVersion=xe,B.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=ke,B.uniformsList=null,ke}function pc(_){if(_.uniformsList===null){let U=_.currentProgram.getUniforms();_.uniformsList=ms.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function mc(_,U){let V=z.get(_);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function du(_,U){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let V=0,B=_.length;V<B;V++){let k=_[V];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function fu(_,U,V,B,k){U.isScene!==!0&&(U=It),X.resetTextureUnits();let de=U.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ue=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ze.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=te.get(B.envMap||xe,Me),Oe=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color,ft=li;B.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ft=R.toneMapping);let tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ot=tt!==void 0?tt.length:0,ge=z.get(B),Yt=S.state.lights;if(Ye===!0&&(He===!0||_!==he)){let rt=_===he&&B.id===Q;Ae.setState(B,_,rt)}let We=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Yt.state.version||ge.outputColorSpace!==ue||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==Te||B.fog===!0&&ge.fog!==de||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ae.numPlanes||ge.numIntersection!==Ae.numIntersection)||ge.vertexAlphas!==Oe||ge.vertexTangents!==ke||ge.morphTargets!==we||ge.morphNormals!==Ke||ge.morphColors!==gt||ge.toneMapping!==ft||ge.morphTargetsCount!==Ot||!!ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,ge.__version=B.version);let Qt=ge.currentProgram;We===!0&&(Qt=yr(B,U,k),N&&B.isNodeMaterial&&N.onUpdateProgram(B,Qt,ge));let fi=!1,Vi=!1,Pn=!1,it=Qt.getUniforms(),xt=ge.uniforms;if(g.useProgram(Qt.program)&&(fi=!0,Vi=!0,Pn=!0),B.id!==Q&&(Q=B.id,Vi=!0),ge.needsLights){let rt=du(S.state.lightProbeGridArray,k);ge.lightProbeGrid!==rt&&(ge.lightProbeGrid=rt,Vi=!0)}if(fi||he!==_){g.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),it.setValue(D,"projectionMatrix",_.projectionMatrix),it.setValue(D,"viewMatrix",_.matrixWorldInverse);let Hi=it.map.cameraPosition;Hi!==void 0&&Hi.setValue(D,St.setFromMatrixPosition(_.matrixWorld)),T.logarithmicDepthBuffer&&it.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),he!==_&&(he=_,Vi=!0,Pn=!0)}if(ge.needsLights&&(Yt.state.directionalShadowMap.length>0&&it.setValue(D,"directionalShadowMap",Yt.state.directionalShadowMap,X),Yt.state.spotShadowMap.length>0&&it.setValue(D,"spotShadowMap",Yt.state.spotShadowMap,X),Yt.state.pointShadowMap.length>0&&it.setValue(D,"pointShadowMap",Yt.state.pointShadowMap,X)),k.isSkinnedMesh){it.setOptional(D,k,"bindMatrix"),it.setOptional(D,k,"bindMatrixInverse");let rt=k.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),it.setValue(D,"boneTexture",rt.boneTexture,X))}k.isBatchedMesh&&(it.setOptional(D,k,"batchingTexture"),it.setValue(D,"batchingTexture",k._matricesTexture,X),it.setOptional(D,k,"batchingIdTexture"),it.setValue(D,"batchingIdTexture",k._indirectTexture,X),it.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&it.setValue(D,"batchingColorTexture",k._colorsTexture,X));let Gi=V.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&I.update(k,V,Qt),(Vi||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,it.setValue(D,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(xt.envMapIntensity.value=U.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Wg()),Vi){if(it.setValue(D,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&pu(xt,Pn),de&&B.fog===!0&&Ee.refreshFogUniforms(xt,de),Ee.refreshMaterialUniforms(xt,B,ee,ne,S.state.transmissionRenderTarget[_.id]),ge.needsLights&&ge.lightProbeGrid){let rt=ge.lightProbeGrid;xt.probesSH.value=rt.texture,xt.probesMin.value.copy(rt.boundingBox.min),xt.probesMax.value.copy(rt.boundingBox.max),xt.probesResolution.value.copy(rt.resolution)}ms.upload(D,pc(ge),xt,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ms.upload(D,pc(ge),xt,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(D,"center",k.center),it.setValue(D,"modelViewMatrix",k.modelViewMatrix),it.setValue(D,"normalMatrix",k.normalMatrix),it.setValue(D,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let rt=B.uniformsGroups;for(let Hi=0,In=rt.length;Hi<In;Hi++){let gc=rt[Hi];j.update(gc,Qt),j.bind(gc,Qt)}}return Qt}function pu(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function mu(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(_,U,V){let B=z.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(_.texture).__webglTexture=U,z.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,U){let V=z.get(_);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(_,U=0,V=0){K=_,H=U,G=V;let B=null,k=!1,de=!1;if(_){let ue=z.get(_);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),pe.copy(_.viewport),ve.copy(_.scissor),qe=_.scissorTest,g.viewport(pe),g.scissor(ve),g.setScissorTest(qe),Q=-1;return}else if(ue.__webglFramebuffer===void 0)X.setupRenderTarget(_);else if(ue.__hasExternalTextures)X.rebindTextures(_,z.get(_.texture).__webglTexture,z.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Oe=_.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&z.has(Oe)&&(_.width!==Oe.image.width||_.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(_)}}let Me=_.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);let Te=z.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?B=Te[U][V]:B=Te[U],k=!0):_.samples>0&&X.useMultisampledRTT(_)===!1?B=z.get(_).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[V]:B=Te,pe.copy(_.viewport),ve.copy(_.scissor),qe=_.scissorTest}else pe.copy(Re).multiplyScalar(ee).floor(),ve.copy(mt).multiplyScalar(ee).floor(),qe=Ve;if(V!==0&&(B=W),g.bindFramebuffer(D.FRAMEBUFFER,B)&&g.drawBuffers(_,B),g.viewport(pe),g.scissor(ve),g.setScissorTest(qe),k){let ue=z.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,V)}else if(de){let ue=U;for(let Me=0;Me<_.textures.length;Me++){let Te=z.get(_.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Te.__webglTexture,V,ue)}}else if(_!==null&&V!==0){let ue=z.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,V)}Q=-1},this.readRenderTargetPixels=function(_,U,V,B,k,de,xe,ue=0){if(!(_&&_.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){g.bindFramebuffer(D.FRAMEBUFFER,Me);try{let Te=_.textures[ue],Oe=Te.format,ke=Te.type;if(_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!T.textureFormatReadable(Oe)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(ke)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-B&&V>=0&&V<=_.height-k&&D.readPixels(U,V,B,k,oe.convert(Oe),oe.convert(ke),de)}finally{let Te=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(_,U,V,B,k,de,xe,ue=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(U>=0&&U<=_.width-B&&V>=0&&V<=_.height-k){g.bindFramebuffer(D.FRAMEBUFFER,Me);let Te=_.textures[ue],Oe=Te.format,ke=Te.type;if(_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!T.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(U,V,B,k,oe.convert(Oe),oe.convert(ke),0);let Ke=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ke);let gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ah(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(we),D.deleteSync(gt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,U=null,V=0){let B=Math.pow(2,-V),k=Math.floor(_.image.width*B),de=Math.floor(_.image.height*B),xe=U!==null?U.x:0,ue=U!==null?U.y:0;X.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xe,ue,k,de),g.unbindTexture()},this.copyTextureToTexture=function(_,U,V=null,B=null,k=0,de=0){let xe,ue,Me,Te,Oe,ke,we,Ke,gt,ft=_.isCompressedTexture?_.mipmaps[de]:_.image;if(V!==null)xe=V.max.x-V.min.x,ue=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Oe=V.min.y,ke=V.isBox3?V.min.z:0;else{let xt=Math.pow(2,-k);xe=Math.floor(ft.width*xt),ue=Math.floor(ft.height*xt),_.isDataArrayTexture?Me=ft.depth:_.isData3DTexture?Me=Math.floor(ft.depth*xt):Me=1,Te=0,Oe=0,ke=0}B!==null?(we=B.x,Ke=B.y,gt=B.z):(we=0,Ke=0,gt=0);let tt=oe.convert(U.format),Ot=oe.convert(U.type),ge;U.isData3DTexture?(X.setTexture3D(U,0),ge=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(X.setTexture2DArray(U,0),ge=D.TEXTURE_2D_ARRAY):(X.setTexture2D(U,0),ge=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Yt=g.getParameter(D.UNPACK_ROW_LENGTH),We=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Qt=g.getParameter(D.UNPACK_SKIP_PIXELS),fi=g.getParameter(D.UNPACK_SKIP_ROWS),Vi=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),g.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);let Pn=_.isDataArrayTexture||_.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(_.isDepthTexture){let xt=z.get(_),Gi=z.get(U),rt=z.get(xt.__renderTarget),Hi=z.get(Gi.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,rt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let In=0;In<Me;In++)Pn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(_).__webglTexture,k,ke+In),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(U).__webglTexture,de,gt+In)),D.blitFramebuffer(Te,Oe,xe,ue,we,Ke,xe,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||_.isRenderTargetTexture||z.has(_)){let xt=z.get(_),Gi=z.get(U);g.bindFramebuffer(D.READ_FRAMEBUFFER,q),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let rt=0;rt<Me;rt++)Pn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,k,ke+rt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,k),it?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gi.__webglTexture,de,gt+rt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gi.__webglTexture,de),k!==0?D.blitFramebuffer(Te,Oe,xe,ue,we,Ke,xe,ue,D.COLOR_BUFFER_BIT,D.NEAREST):it?D.copyTexSubImage3D(ge,de,we,Ke,gt+rt,Te,Oe,xe,ue):D.copyTexSubImage2D(ge,de,we,Ke,Te,Oe,xe,ue);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else it?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(ge,de,we,Ke,gt,xe,ue,Me,tt,Ot,ft.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,de,we,Ke,gt,xe,ue,Me,tt,ft.data):D.texSubImage3D(ge,de,we,Ke,gt,xe,ue,Me,tt,Ot,ft):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,we,Ke,xe,ue,tt,Ot,ft.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,we,Ke,ft.width,ft.height,tt,ft.data):D.texSubImage2D(D.TEXTURE_2D,de,we,Ke,xe,ue,tt,Ot,ft);g.pixelStorei(D.UNPACK_ROW_LENGTH,Yt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,We),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),g.pixelStorei(D.UNPACK_SKIP_ROWS,fi),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Vi),de===0&&U.generateMipmaps&&D.generateMipmap(ge),g.unbindTexture()},this.initRenderTarget=function(_){z.get(_).__webglFramebuffer===void 0&&X.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?X.setTextureCube(_,0):_.isData3DTexture?X.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?X.setTexture2DArray(_,0):X.setTexture2D(_,0),g.unbindTexture()},this.resetState=function(){H=0,G=0,K=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};var xs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var jt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xg=new an(-1,1,1,-1,0,1),oc=class extends Mt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},qg=new oc,dn=class{constructor(e){this._mesh=new Qe(qg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Po=class extends jt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ki.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new dn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xr=class extends jt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Io=class extends jt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ye);this._width=i.width,this._height=i.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Po(xs),this.copyPass.material.blending=ii,this.timer=new Ks}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xr!==void 0&&(a instanceof xr?i=!0:a instanceof Io&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Do=class extends jt{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var lu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var vs=class s extends jt{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(r,a,{type:zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Et(r,a,{type:zt});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Et(r,a,{type:zt});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=lu;this.highPassUniforms=ki.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ki.clone(xs.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:xs.vertexShader,fragmentShader:xs.fragmentShader,premultipliedAlpha:!0,blending:Qs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Fi,this._fsQuad=new dn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};vs.BlurDirectionX=new ye(1,0);vs.BlurDirectionY=new ye(0,1);var vr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var No=class extends jt{constructor(){super(),this.isOutputPass=!0,this.uniforms=ki.clone(vr.uniforms),this.material=new ls({name:vr.name,uniforms:this.uniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader}),this._fsQuad=new dn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===Xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===er?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ir?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zi=L,Uo=class{constructor(e,t){this.state=e,this.canvas=t,this.scene=new Ds,this.scene.background=new Le("#080f18"),this.scene.fog=new Ls("#080f18",.01),this.camera=new Ut(68,innerWidth/innerHeight,.1,250),this.renderer=new Ao({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=Nt,this.renderer.toneMapping=wn,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Da,this.composer=new Lo(this.renderer),this.composer.addPass(new Do(this.scene,this.camera)),this.bloomPass=new vs(new ye(innerWidth,innerHeight),.15,.3,1.25),this.composer.addPass(this.bloomPass),this.composer.addPass(new No),this.clock=0,this.yaw=e.s.position.yaw,this.pitch=e.s.position.pitch,this.player=new zi(0,0,7),this.velY=0,this.grounded=!0,this.keys={},this.moveStick={x:0,y:0},this.interactables=[],this.colliders=[],this.cameraObstacles=[],this.areaGroups={},this.doors=[],this.animators=[],this.machines=[],this.shards=[],this.particles=[],this.current=null,this.zone="lab",this.arena=null,this.paused=!1,this.aim=new ye,this.ray=new hs,this.shake=0,this.pulseScale=0,this.outfitCache=-1,this.materials=new Map,this.effectGroup=new nt,this.scene.add(this.effectGroup),this.geometry={box:new en(1,1,1),sphere:new os(1,24,16),cylinder:new as(1,1,1,12),torus:new Ws(1,.035,8,60)},this.scene.add(new $s("#c4e1ff","#243449",2)),this.sun=new Js("#d1eaff",2.4),this.sun.position.set(15,25,12),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-30,right:30,top:30,bottom:-30,far:100}),this.scene.add(this.sun),this.ambient=new Zs("#79ddf9",40,18,2),this.ambient.position.set(0,4,0),this.scene.add(this.ambient),this.buildSky(),this.buildFacility(),this.buildArenas(),this.buildAvatar(),this.input(),this.sync(),this.applySettings(),window.addEventListener("resize",()=>this.resize()),e.on(i=>{["world","area","machine","collected","skill"].includes(i)&&this.sync()})}mat(e,t=!1,i=.35){let n=e+"-"+t+"-"+i;return this.materials.has(n)||this.materials.set(n,new Xs({color:e,roughness:t?.35:.65,metalness:i,emissive:t?e:"#000000",emissiveIntensity:t?1.8:0})),this.materials.get(n)}box(e,t,i,n,r,a,o,l,c=!1){let u=new Qe(this.geometry.box,this.mat(l,c));return u.position.set(t,i,n),u.scale.set(r,a,o),u.castShadow=!c,u.receiveShadow=!0,e.add(u),a>.3&&(r>4||a>3||o>4)&&this.cameraObstacles.push(u),u}sphere(e,t,i,n,r,a,o=!1){let l=new Qe(this.geometry.sphere,this.mat(a,o));return l.position.set(t,i,n),l.scale.setScalar(r),e.add(l),l}cylinder(e,t,i,n,r,a,o){let l=new Qe(this.geometry.cylinder,this.mat(o));return l.position.set(t,i,n),l.scale.set(r,a,r),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}ring(e,t,i,n,r,a,o=Math.PI/2){let l=new Qe(this.geometry.torus,this.mat(a,!0));return l.position.set(t,i,n),l.scale.setScalar(r),l.rotation.x=o,e.add(l),l}label(e,t,i,n,r,a=4,o="#bfe4ea"){let l=document.createElement("canvas");l.width=768,l.height=128;let c=l.getContext("2d");c.clearRect(0,0,768,128),c.font="600 32px Arial",c.textAlign="center",c.fillStyle=o,c.fillText(t,384,75);let u=new rs(l);u.colorSpace=Nt;let d=new Os(new ts({map:u,transparent:!0,depthWrite:!1}));return d.position.set(i,n,r),d.scale.set(a,a/6,1),e.add(d),d}sign(e,t,i,n,r="#89dacf"){let a=document.createElement("canvas");a.width=512,a.height=128;let o=a.getContext("2d");o.font="bold 35px Arial",o.textAlign="center",o.fillStyle=r,o.fillText(t,256,65),o.fillRect(100,85,312,3);let l=new rs(a);l.colorSpace=Nt;let c=new Qe(new Tn(5,1.25),new Fi({map:l,transparent:!0,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.set(i,.02,n),e.add(c)}bind(e,t,i,n,r=3.5){let a={obj:e,action:t,data:i,label:n,range:r};return e.traverse(o=>{o.isMesh&&(o.userData.interactable=a)}),this.interactables.push(e),a}obstacle(e,t,i,n,r=0,a=3){this.colliders.push({x:e,z:t,w:i,d:n,y:r,h:a})}buildSky(){let e=[];for(let r=0;r<1200;r++){let a=Math.random()*Math.PI*2,o=110+Math.random()*120,l=20+Math.random()*120;e.push(Math.cos(a)*o,l,Math.sin(a)*o)}let t=new Mt;t.setAttribute("position",new Je(e,3)),this.stars=new Bs(t,new ss({color:"#b9d4ec",size:.2,transparent:!0,opacity:.8})),this.scene.add(this.stars);let i=new Qe(new os(24,40,24),this.mat("#344f6e"));i.position.set(-120,55,-160),this.scene.add(i);let n=this.ring(this.scene,-120,55,-160,36,"#495377",1.2);n.rotation.z=.2}buildFacility(){for(let n of lt){let r=new nt;r.position.set(n.x,0,n.z),this.scene.add(r),this.areaGroups[n.id]=r;let a=n.id==="planet"?"#324139":n.id==="dimension"?"#252438":"#243645";this.box(r,0,-.25,0,22,.5,22,a);for(let o=-10;o<=10;o+=2)this.box(r,o,.008,0,.018,.012,22,"#364f5d"),this.box(r,0,.008,o,22,.012,.018,"#364f5d");for(let o of[-10.3,10.3]){this.box(r,o,.03,0,.065,.03,20,n.color,!0);for(let l of[-10.3,10.3])this.box(r,o,2.4,l,.55,4.8,.55,"#344958"),this.box(r,o,2.4,l+.3,.1,3.8,.03,n.color,!0)}this.sign(r,n.name.toUpperCase(),0,8,n.color),this.label(r,n.name.toUpperCase(),0,4.6,-10.8,8,n.color);for(let[o,l]of[[1,0],[-1,0],[0,1],[0,-1]]){let c=lt.find(u=>u.x===n.x+o*28&&u.z===n.z+l*28);if(o?c?(this.box(r,o*11,2.2,-7,.35,4.4,8,"#1a2b39"),this.box(r,o*11,2.2,7,.35,4.4,8,"#1a2b39"),this.box(r,o*11,4.3,0,.35,.8,6,"#354b5c")):this.box(r,o*11,2.2,0,.35,4.4,22,"#1a2b39"):c?(this.box(r,-7,2.2,l*11,8,4.4,.35,"#1a2b39"),this.box(r,7,2.2,l*11,8,4.4,.35,"#1a2b39"),this.box(r,0,4.3,l*11,6,.8,.35,"#354b5c")):this.box(r,0,2.2,l*11,22,4.4,.35,"#1a2b39"),c&&lt.indexOf(n)<lt.indexOf(c)){let u=new nt;u.position.set(n.x+o*14,0,n.z+l*14),this.scene.add(u),this.box(u,0,-.2,0,o?6:5,.4,o?5:6,"#293e4c"),this.box(u,0,.04,0,o?6:.08,.025,o?.08:6,n.color,!0);let d=this.box(u,0,2,0,o?.28:5,4,o?5:.28,"#263748"),h=this.box(u,o?.18:0,3,o?0:.18,o?.04:3.5,.12,o?3.5:.04,"#e78b7b",!0),p=this.label(u,"LOCKED / "+c.name.toUpperCase(),0,4.8,0,5,"#f0b1a2");this.doors.push({a:n.id,b:c.id,gate:d,light:h,text:p,group:u})}}this.decorateArea(r,n)}this.core=new nt,this.core.position.set(0,0,-1.5),this.areaGroups.lab.add(this.core),this.cylinder(this.core,0,.15,0,2.1,.3,"#486477"),this.cylinder(this.core,0,.4,0,1.65,.3,"#263f50"),this.ring(this.core,0,.58,0,1.6,"#72d8ee"),this.cylinder(this.core,0,.75,0,.8,.35,"#3e5d70"),this.coreSphere=this.sphere(this.core,0,2,0,.78,"#72d8ee",!0),this.coreRings=[];for(let n=0;n<5;n++){let r=this.ring(this.core,0,2,0,1.15+n*.13,"#72d8ee",n*.6);r.rotation.z=n*.5,this.coreRings.push(r)}this.label(this.core,"N O V A  /  O R I G I N",0,4,0,5),this.bind(this.core,"core",null,"Pulse energy core",4.4),this.obstacle(0,-1.5,3.3,3.3,0,.8);for(let n=0;n<4;n++){let r=n*Math.PI/2;this.box(this.areaGroups.lab,Math.cos(r)*4,.025,Math.sin(r)*4-1.5,Math.abs(Math.cos(r))>.5?4:.08,.03,Math.abs(Math.sin(r))>.5?4:.08,"#72d8ee",!0)}this.console(this.areaGroups.lab,-6,-4,"SKILL MATRIX","tree","#79dfc4"),this.console(this.areaGroups.lab,6,6,"ARCADE TRANSIT","arcade","#baa3fb"),this.console(this.areaGroups.lab,-6,7,"DAILY SUPPLY","daily","#f3cb82"),this.npc(this.areaGroups.lab,-6,2,"engineer","#f2c58a"),ei.forEach((n,r)=>{let a=lt.find(l=>l.id===n.area),o=new nt;o.position.set(a.x+6,0,a.z-4),this.scene.add(o),this.machineModel(o,r),this.machines.push(o),this.bind(o,"machine",r,n.name,4),this.obstacle(a.x+6,a.z-4,2.5,2.5,0,2)}),this.console(this.areaGroups.research,-6,-4,"RESEARCH TERMINAL","research","#bca5fb"),this.console(this.areaGroups.research,-6,4,"CENTRAL CONTROL","control","#7decc0"),this.npc(this.areaGroups.research,0,5,"scientist","#aab6f8"),this.npc(this.areaGroups.factory,-5,4,"technician","#f4cf88"),this.npc(this.areaGroups.launch,-5,4,"explorer","#afdbb6"),this.console(this.areaGroups.quantum,-5,0,"QUANTUM REBIRTH","rebirth","#f4b3d6"),this.console(this.areaGroups.deep,-6,-4,"CHALLENGE CHAMBER","challenges","#eba586"),this.console(this.areaGroups.factory,-6,-4,"DRONE FOUNDRY","drones","#8be4bf"),this.console(this.areaGroups.dimension,-5,0,"REALITY ENGINE","rebirth","#ddafff"),this.console(this.areaGroups.orbital,-5,0,"ORBITAL TRANSIT","travel","#8cbbfb");let e=this.box(this.areaGroups.lab,-9,.45,-8.5,1.1,.9,.15,"#536b75");this.bind(e,"secret","tunnel","Inspect maintenance vent",2.2),this.label(this.areaGroups.lab,"SERVICE 07",-9,1.2,-8.5,2);let t=this.box(this.areaGroups.deep,8,.6,8,.7,1.2,.6,"#b4f297",!0);this.bind(t,"secret","terminal","Read a hidden terminal",2.4);let i=this.sphere(this.areaGroups.dimension,-8,1.2,-8,.35,"#efd9ff",!0);this.bind(i,"secret","hidden","Recover a strange archive",2.5),lt.forEach((n,r)=>{for(let a=0;a<5;a++){let o=[[-8,-6],[8,6],[-8,7],[3,-8],[-3,-7]][a],l=new Qe(new tn(.22),this.mat(n.color,!0));l.position.set(n.x+o[0],.65+(a===4?.1:0),n.z+o[1]),this.scene.add(l),l.userData.shard=r*5+a,this.shards.push(l),this.bind(l,"shard",r*5+a,"Collect energy shard",2.2)}})}decorateArea(e,t){for(let i=0;i<4;i++){let n=-8+i*4.7;this.box(e,n,2,-10.7,2.6,1.25,.13,"#344d5b"),this.box(e,n,2,-10.6,2.3,.9,.05,"#214253");for(let r=0;r<3;r++)this.box(e,n-.7+r*.5,1.8+r*.12,-10.55,.22,.06+r*.1,.04,t.color,!0)}if(t.id==="factory"){for(let n=0;n<3;n++){this.box(e,-5+n*3,.55,0,2,1,3,"#384d59");let r=this.ring(e,-5+n*3,1.6,0,.65,t.color,0);this.animators.push({obj:r,axis:"z",speed:1})}let i=this.box(e,0,.4,5,10,.5,1.3,"#4b626f");for(let n=0;n<5;n++){let r=this.box(e,-4+n*2,.9,5,.6,.6,.6,t.color);this.animators.push({obj:r,kind:"conveyor",offset:n*2})}}if(t.id==="launch"){this.cylinder(e,0,1.6,-3,1.1,3.2,"#a5b7c4");let i=new Qe(new Vs(1.1,2.1,12),this.mat("#cedee5"));i.position.set(0,4.2,-3),e.add(i),this.ring(e,0,.3,-3,2,t.color)}if(["quantum","orbital","dimension"].includes(t.id)){let i=new nt;i.position.set(0,2,-3),e.add(i);for(let n=0;n<3;n++){let r=this.ring(i,0,0,0,1.8+n*.25,t.color,n*.75);this.animators.push({obj:r,axis:"y",speed:.2+n*.1})}this.sphere(i,0,0,0,.6,t.color,!0)}if(t.id==="planet")for(let[i,n]of[[-5,-4],[4,4],[-6,6]]){let r=new Qe(new Hs(1.4),this.mat("#62755e"));r.position.set(i,.6,n),r.scale.y=1.8,e.add(r),this.sphere(e,i,2.5,n,.4,"#b4ef94",!0)}if(t.id==="deep")for(let i=0;i<3;i++)this.cylinder(e,-5+i*4,1.5,-5,.8,3,"#496376")}machineModel(e,t){this.cylinder(e,0,.15,0,1.45,.3,"#344a5a"),this.box(e,0,.8,0,1.8,1.3,1.8,"#5d7c91"),this.box(e,0,1.05,1,1.2,.7,.06,"#172f3e");let i=this.ring(e,0,1.7,0,.7,"#79e5c3");e.userData.rotor=i,this.cylinder(e,0,1.8,0,.45,.7,"#2c5665"),this.sphere(e,0,2.3,0,.3,"#8af9cf",!0);let n=new nt;e.add(n);for(let a=0;a<4;a++){let o=a*Math.PI/2;this.cylinder(n,Math.cos(o)*1.1,1.1,Math.sin(o)*1.1,.18,2,"#4a6879"),this.ring(n,Math.cos(o)*1.1,1.9,Math.sin(o)*1.1,.2,"#7cdcc4")}e.userData.addons=n;let r=this.label(e,ei[t].name.toUpperCase(),0,3.1,0,4);e.userData.label=r}console(e,t,i,n,r,a){let o=new nt;o.position.set(t,0,i),e.add(o),this.box(o,0,.6,0,1,1.2,.8,"#3d5262"),this.box(o,0,1.5,0,1.8,.95,.18,"#294250");let l=this.box(o,0,1.5,.11,1.5,.72,.02,a,!0);return this.label(o,n,0,2.35,0,4,a),this.bind(o,r,null,n.toLowerCase(),3.4),this.obstacle(e.position.x+t,e.position.z+i,1.5,1),o}npc(e,t,i,n,r){let a=this.person(r);a.position.set(t,0,i),e.add(a),this.label(a,n==="engineer"?"CHIEF ENGINEER":n==="scientist"?"DR. LYRA":n==="technician"?"TECHNICIAN OMI":"EXPLORER VEGA",0,2.55,0,4,r),this.bind(a,"npc",n,"Speak to "+n,3.5),this.animators.push({obj:a,kind:"npc",baseX:t,baseZ:i,offset:t+i})}person(e){let t=new nt;this.box(t,0,1.05,0,.65,.75,.4,e),this.sphere(t,0,1.73,0,.26,"#bfd6de"),this.box(t,0,1.75,.24,.4,.14,.08,"#142e43");let i=[];for(let n of[-.19,.19]){let r=this.box(t,n,.4,0,.24,.7,.26,"#334959");i.push(r),this.box(t,n<0?-.47:.47,1,0,.2,.75,.22,e)}return t.userData.legs=i,t}buildAvatar(){this.avatar=this.person("#b8cbd7"),this.scene.add(this.avatar),this.droneGroup=new nt,this.scene.add(this.droneGroup),this.workerGroup=new nt,this.scene.add(this.workerGroup)}buildArenas(){this.arenaRoots={};for(let[i,n,r,a]of[["target",0,70,"#78dcf9"],["memory",34,70,"#bfa5fd"],["catch",68,70,"#81eac1"],["boss",-34,70,"#f299aa"]]){let o=new nt;o.position.set(n,0,r),this.scene.add(o),this.arenaRoots[i]=o,this.box(o,0,-.2,0,24,.4,24,"#243747");for(let l of[-12,12])this.box(o,l,2,0,.3,4,24,"#172b3b"),this.box(o,0,2,l,24,4,.3,"#172b3b"),this.box(o,l,.1,0,.09,.1,24,a,!0);this.sign(o,(i==="memory"?"STABILISATION":i.toUpperCase())+" CHAMBER",0,9,a),this.console(o,9,8,"RETURN TO FACILITY","return",a)}let e=new nt;e.position.set(108,0,70),this.scene.add(e),this.arenaRoots.parkour=e,this.parkourPlatforms=[],[[0,0,8,5,5],[0,.5,2.5,3.8,3.8],[3,1,-3,3.4,3.4],[-1,1.5,-8,3.5,3.5],[-4,2,-13,3.2,3.2],[1,2.5,-18,3.5,3.5],[3,3,-23,3.2,3.2],[0,3.5,-28,5,5]].forEach(([i,n,r,a,o],l)=>{let c=this.box(e,i,n-.25,r,a,.5,o,"#385467");this.box(c,0,.55,0,.95,.025,.95,"#78eacb",!0),this.parkourPlatforms.push({mesh:c,x:108+i,z:70+r,y:n,w:a,d:o,baseX:108+i,index:l})}),this.parkourFinish=this.ring(e,0,5,-28,1.5,"#93ffcf",0),this.label(e,"FINISH",0,6.8,-28,4);for(let i=0;i<3;i++){let n=this.box(e,0,1.6+i*.9,-5-i*8,7,.1,.1,"#f18b9c",!0);this.animators.push({obj:n,kind:"laser",offset:i})}this.sign(e,"REACTOR PARKOUR",0,9)}sync(){let e=this.state.s;for(let n of lt)this.areaGroups[n.id].visible=e.areas.includes(n.id);for(let[n,r]of Object.entries(this.arenaRoots))r.visible=this.arena===n;this.doors.forEach(n=>{n.open=e.areas.includes(n.a)&&e.areas.includes(n.b),n.group.visible=e.areas.includes(n.a)||e.areas.includes(n.b),n.light.material=this.mat(n.open?"#80e8ba":"#e99888",!0),n.text.visible=!n.open}),this.machines.forEach((n,r)=>{let a=e.machines[r];n.visible=e.areas.includes(ei[r].area),n.scale.setScalar(a?1+Math.min(.65,Math.log10(a+1)*.18):.8),n.userData.addons.visible=a>=10,n.userData.rotor.visible=a>0,n.children[1].material=this.mat(a?e.settings.machineColor:"#334a59"),n.userData.level=a}),this.shards.forEach((n,r)=>n.visible=!e.collected.includes(r)&&e.areas.includes(lt[Math.floor(r/5)].id));let t=Ti.find(n=>n[0]===e.skin);this.coreSkin!==t[0]&&(this.coreSkin&&this.coreSphere.material.dispose(),this.coreSphere.material=this.mat(t[2],!0).clone(),this.coreSphere.material.emissiveIntensity=.35,this.coreSphere.material.roughness=.25,this.coreSkin=t[0]);let i=Math.min(6,Math.floor(Math.log10(Math.max(1,e.lifetime))/2)+e.ascensions);this.coreSphere.scale.setScalar(.78+i*.06),this.coreRings.forEach((n,r)=>{n.visible=r<2+i,n.material=this.mat(t[2],!0)}),this.scene.background.set(e.ascensions?"#100e22":"#080f18"),this.scene.fog.color.copy(this.scene.background),this.rebuildDrones(),this.rebuildWorkers()}clearGroup(e){for(;e.children.length;)e.remove(e.children[0])}rebuildDrones(){if(!this.droneGroup)return;let e=this.state.s.equipped.join(",")+"-"+this.state.s.droneLevels.join(",");e!==this.droneKey&&(this.droneKey=e,this.clearGroup(this.droneGroup),this.state.s.equipped.forEach(t=>{let i=new nt;this.droneGroup.add(i),this.sphere(i,0,0,0,.22,wi[t][2]),this.ring(i,0,0,0,.36,wi[t][2]),this.sphere(i,0,0,.2,.065,"#e8faff",!0),i.userData.i=t}))}rebuildWorkers(){if(!this.workerGroup)return;let e=this.state.fx.workers?Math.min(8,2+Math.floor(this.state.s.machines.reduce((t,i)=>t+i,0)/20)):0;if(this.workerGroup.children.length!==e){this.clearGroup(this.workerGroup);for(let t=0;t<e;t++){let i=this.person("#8ba6ae");i.scale.setScalar(.65),this.workerGroup.add(i)}}}applySettings(){let e=this.state.s.settings,t={low:.75,medium:1,high:1.5,ultra:2};this.renderer.setPixelRatio(Math.min(devicePixelRatio,t[e.quality])),this.composer.setPixelRatio(Math.min(devicePixelRatio,t[e.quality])),this.renderer.shadowMap.enabled=e.shadows&&e.quality!=="low",this.camera.far=e.renderDistance,this.camera.updateProjectionMatrix(),this.scene.fog.density=e.quality==="low"?.016:.009,this.ambient.visible=e.lighting,this.sun.intensity=e.lighting?2.4:1.5,this.stars.visible=e.quality!=="low";for(let i of this.materials.values())i.emissive.getHex()&&(i.emissiveIntensity=e.bloom?1.8:.7)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight)}input(){let e=(r,a)=>{this.paused||(this.yaw-=r*.0024*this.state.s.settings.sensitivity,this.pitch=Math.max(-1.35,Math.min(1.35,this.pitch-a*.0024*this.state.s.settings.sensitivity)))},t=!1,i=0,n=0;document.addEventListener("keydown",r=>{/INPUT|TEXTAREA|SELECT/.test(r.target.tagName)||(this.keys[r.code]=!0,["Space","Tab","KeyT","KeyE"].includes(r.code)&&!this.paused&&r.preventDefault(),r.code==="KeyE"&&!r.repeat&&!this.paused&&this.interact())}),document.addEventListener("keyup",r=>this.keys[r.code]=!1),window.addEventListener("blur",()=>this.keys={}),document.addEventListener("mousemove",r=>{document.pointerLockElement===this.canvas?e(r.movementX,r.movementY):t&&(e(r.clientX-i,r.clientY-n),i=r.clientX,n=r.clientY)}),this.canvas.addEventListener("pointerdown",r=>{if(!this.paused){if(r.pointerType==="touch"){t=!0,i=r.clientX,n=r.clientY,this.canvas.setPointerCapture(r.pointerId);return}document.pointerLockElement===this.canvas?r.button===0&&this.interact():r.button===2?(t=!0,i=r.clientX,n=r.clientY):this.canvas.requestPointerLock?.()?.catch?.(()=>this.state.notice("Mouse capture unavailable. Hold right mouse to look; use E to interact."))}}),this.canvas.addEventListener("pointermove",r=>{r.pointerType==="touch"&&t&&(e(r.clientX-i,r.clientY-n),i=r.clientX,n=r.clientY)}),window.addEventListener("pointerup",()=>t=!1),this.canvas.addEventListener("contextmenu",r=>r.preventDefault())}interact(){this.paused||(this.current?this.state.emit("interact",this.current):(this.arena==="target"||this.arena==="memory"||this.arena==="boss")&&this.state.emit("emptyshot"))}allowed(e,t){if(this.arena==="parkour")return Math.abs(e-108)<15&&t>32&&t<85;if(this.arena){let i=this.arenaRoots[this.arena];return Math.abs(e-i.position.x)<11.5&&Math.abs(t-i.position.z)<11.5}for(let i of lt)if(this.state.s.areas.includes(i.id)&&Math.abs(e-i.x)<10.6&&Math.abs(t-i.z)<10.6)return!0;for(let i of this.doors){if(!i.open)continue;let n=lt.find(a=>a.id===i.a),r=lt.find(a=>a.id===i.b);if(n.x!==r.x&&Math.abs(t-n.z)<2.5&&e>Math.min(n.x,r.x)+9&&e<Math.max(n.x,r.x)-9||n.z!==r.z&&Math.abs(e-n.x)<2.5&&t>Math.min(n.z,r.z)+9&&t<Math.max(n.z,r.z)-9)return!0}return!1}canMove(e,t){return this.allowed(e,t)?this.arena?!0:!this.colliders.some(i=>this.player.y<i.y+i.h-.12&&this.player.y+1.7>i.y&&Math.abs(e-i.x)<i.w/2+.25&&Math.abs(t-i.z)<i.d/2+.25):!1}floorAt(e,t,i){if(this.arena==="parkour"){let r=-30;for(let a of this.parkourPlatforms)!a.disabled&&Math.abs(e-a.x)<a.w/2+.15&&Math.abs(t-a.z)<a.d/2+.15&&i>=a.y-.18&&(r=Math.max(r,a.y));return r}let n=0;if(!this.arena)for(let r of this.colliders)r.h<1&&Math.abs(e-r.x)<r.w/2&&Math.abs(t-r.z)<r.d/2&&i>=r.h-.15&&(n=Math.max(n,r.h));return n}teleport(e){let t=lt.find(i=>i.id===e);t?(this.arena=null,this.zone=e,this.player.set(t.x,0,t.z+7),this.yaw=0,this.pitch=0):this.arenaRoots[e]&&(this.arena=e,this.player.copy(this.arenaRoots[e].position).add(new zi(0,0,e==="parkour"?8:7)),this.yaw=0,this.pitch=0),this.velY=0,this.current=null,this.keys={};for(let[i,n]of Object.entries(this.arenaRoots))n.visible=this.arena===i;this.state.emit("zone",t?t.name:e==="parkour"?"Reactor Parkour":e.charAt(0).toUpperCase()+e.slice(1)+" Chamber")}pulse(e){this.pulseScale=.22,this.shake=e?.09:.025;let t=Ti.find(i=>i[0]===this.state.s.skin)[2];this.burst(new zi(0,2,-1.5),t,e?22:10)}burst(e,t,i=10){if(!(!this.state.s.settings.particles||this.state.s.settings.reduced))for(let n=0;n<i&&this.particles.length<120;n++){let r=new Qe(this.geometry.sphere,this.mat(t,!0));r.scale.setScalar(.035+Math.random()*.045),r.position.copy(e),this.effectGroup.add(r),this.particles.push({m:r,v:new zi((Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*5),life:.7})}}addTarget(e,t,i,n,r=60){this.scene.add(e),this.bind(e,t,i,n,r)}removeTarget(e){this.scene.remove(e);let t=this.interactables.indexOf(e);t>=0&&this.interactables.splice(t,1)}pick(){this.ray.setFromCamera(this.aim,this.camera);let e=this.ray.intersectObjects(this.interactables,!0);this.current=null;for(let t of e){let i=!0,n=t.object;for(;n;)n.visible||(i=!1),n=n.parent;if(!i)continue;let r=t.object.userData.interactable;if(!r)continue;let a=new zi;if(r.obj.getWorldPosition(a),this.player.distanceTo(a)<=r.range){this.current=r;break}}}update(e){let t=this.state.s.settings;this.clock+=e;let i=!t.reduced;if(this.doors.forEach(c=>c.gate.position.y+=(c.open?6:2)-c.gate.position.y>0?Math.min((c.open?6:2)-c.gate.position.y,e*5):Math.max((c.open?6:2)-c.gate.position.y,-e*5)),!this.paused){let c=(this.keys.KeyW||this.keys.ArrowUp?1:0)-(this.keys.KeyS||this.keys.ArrowDown?1:0)-this.moveStick.y,u=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+this.moveStick.x,d=Math.hypot(c,u);d>1&&(c/=d,u/=d);let h=this.keys.ShiftLeft||this.keys.ShiftRight,p=(h?7:4)*(this.keys.KeyC?.6:1),v=(-Math.sin(this.yaw)*c+Math.cos(this.yaw)*u)*p*e,b=(-Math.cos(this.yaw)*c-Math.sin(this.yaw)*u)*p*e;this.canMove(this.player.x+v,this.player.z)&&(this.player.x+=v),this.canMove(this.player.x,this.player.z+b)&&(this.player.z+=b),this.keys.Space&&this.grounded&&(this.velY=7,this.grounded=!1);let m=this.player.y;this.velY-=18*e,this.player.y+=this.velY*e;let f=this.floorAt(this.player.x,this.player.z,m);this.player.y<=f?(this.player.y=f,this.velY=0,this.grounded=!0):this.grounded=!1,this.player.y<-10&&(this.teleport("parkour"),this.state.emit("fall")),!this.arena&&this.player.y>.65&&Math.hypot(this.player.x,this.player.z+1.5)<1.7&&this.state.secret("reactortop"),this.walking=d>.05,this.sprinting=h&&this.walking}this.avatar.position.copy(this.player),this.avatar.rotation.y=this.yaw+Math.PI,this.avatar.visible=t.view==="third",this.avatar.userData.legs.forEach((c,u)=>c.rotation.x=this.walking&&i?Math.sin(this.clock*10+u*Math.PI)*.5:0);let n=["#cadce1","#d4a875","#83aaa9","#eed36c","#d2e2ea","#aaa0e4","#74638c","#e4c16f"];this.outfitCache!==this.state.s.outfit&&(this.outfitCache=this.state.s.outfit,this.avatar.children[0].material=this.mat(n[this.outfitCache]));let r=this.keys.KeyC?1.1:1.65,a=i&&t.bob&&this.walking&&this.grounded?Math.sin(this.clock*(this.sprinting?14:10))*.035:0,o=new zi(this.player.x,this.player.y+r+a,this.player.z);if(this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0),t.view==="third"){let c=new zi(0,1,4.4).applyAxisAngle(new zi(0,1,0),this.yaw),u=o.clone().add(c),d=c.clone().normalize(),p=new hs(o,d,.05,c.length()).intersectObjects(this.cameraObstacles,!1).find(v=>{let b=v.object;for(;b;){if(!b.visible)return!1;b=b.parent}return!0});p&&u.copy(o).addScaledVector(d,Math.max(.2,p.distance-.25)),this.camera.position.lerp(u,1-Math.exp(-e*14)),this.camera.lookAt(o.clone().add(new zi(-Math.sin(this.yaw)*3,this.pitch*4,-Math.cos(this.yaw)*3)))}else this.camera.position.copy(o);let l=this.sprinting&&i?74:68;if(this.camera.fov+=(l-this.camera.fov)*Math.min(1,e*6),this.camera.updateProjectionMatrix(),t.shake&&i&&this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.shake=Math.max(0,this.shake-e*.18),i&&(this.coreRings.forEach((c,u)=>{c.rotation.y+=e*(.2+u*.13),c.rotation.z+=e*.12}),this.coreSphere.position.y=2+Math.sin(this.clock*1.2)*.08,this.machines.forEach(c=>{c.userData.rotor.rotation.z+=e*(.5+Math.log2((c.userData.level||0)+1)*.3)}),this.animators.forEach(c=>{c.kind==="conveyor"?c.obj.position.x=(this.clock*.8+c.offset)%10-5:c.kind==="npc"?(c.obj.position.x=c.baseX+Math.sin(this.clock*.2+c.offset)*.6,c.obj.rotation.y=Math.sin(this.clock*.15+c.offset)*.3):c.kind==="laser"?c.obj.rotation.y=this.clock*.9+c.offset:c.obj.rotation[c.axis]+=e*c.speed})),this.shards.forEach(c=>{c.rotation.y+=e*.8,c.position.y=.8+Math.sin(this.clock*2+c.userData.shard)*.15}),this.droneGroup.children.forEach((c,u)=>{let d=this.clock*.6+u*2;c.position.set(this.player.x+Math.cos(d)*1.3,this.player.y+1.7+Math.sin(this.clock*2+u)*.15,this.player.z+Math.sin(d)*1.3),c.rotation.y=-d}),this.workerGroup.children.forEach((c,u)=>{let d=this.clock*.18+u;c.position.set(28+Math.cos(d)*6,0,Math.sin(d)*6),c.rotation.y=-d}),this.particles=this.particles.filter(c=>(c.life-=e,c.m.position.addScaledVector(c.v,e),c.v.y-=e*3,c.life<=0?(this.effectGroup.remove(c.m),!1):!0)),this.pulseScale=Math.max(0,this.pulseScale-e*1.3),this.core.scale.setScalar(1+this.pulseScale),this.arena==="parkour"){let c=this.parkourPlatforms[3],u=c.x;c.x=c.baseX+Math.sin(this.clock)*1.1,c.mesh.position.x=c.x-108,this.grounded&&Math.abs(this.player.y-c.y)<.05&&Math.abs(this.player.x-u)<c.w/2&&Math.abs(this.player.z-c.z)<c.d/2&&(this.player.x+=c.x-u)}if(!this.arena){let c=lt.find(u=>Math.abs(this.player.x-u.x)<11&&Math.abs(this.player.z-u.z)<11);c&&c.id!==this.zone&&(this.zone=c.id,this.state.emit("zone",c.name))}this.pick(),Object.assign(this.state.s.position,{x:this.player.x,y:this.player.y,z:this.player.z,yaw:this.yaw,pitch:this.pitch}),t.bloom&&t.quality!=="low"?this.composer.render():this.renderer.render(this.scene,this.camera)}};var Fo=class{constructor(e,t){this.state=e,this.world=t,this.active=null,this.objects=[],this.event=null,this.eventObjects=[],this.nextEvent=Date.now()+9e4,this.eventCooldown=0,e.on((i,n)=>{i==="interact"&&this.interact(n),i==="fall"&&this.active?.kind==="parkour"&&(this.active.falls++,e.notice("Back to the start. The timer is still running."))})}clear(){this.objects.forEach(e=>this.world.removeTarget(e)),this.objects=[],this.active=null,this.world.parkourPlatforms.forEach(e=>{e.disabled=!1,e.mesh.visible=!0,e.stood=0}),this.state.emit("activity",null)}leave(){this.clear(),this.world.teleport("lab")}object(e,t,i,n,r=60){return this.objects.push(e),this.world.addTarget(e,t,i,n,r),e}start(e){this.clear(),this.world.teleport(e),this.active={kind:e,score:0,start:Date.now(),end:Date.now()+(e==="parkour"?9e4:e==="boss"?6e4:3e4),spawn:0,items:[],falls:0};let t=this.active,i=this.world;if(e==="target")for(let n=0;n<5;n++){let r=new nt,a=i.cylinder(r,0,0,0,.55,.12,"#75d9f3");a.rotation.x=Math.PI/2,i.ring(r,0,0,.08,.4,"#c4f4ff",0),i.sphere(r,0,0,.1,.09,"#efffff",!0),this.object(r,"target",n,"Hit energy target"),this.retarget(r),t.items.push(r)}if(e==="memory"&&(t.sequence=[],t.index=0,t.round=0,t.phase="wait",t.next=Date.now()+600,t.end=1/0,["#73dbe9","#b89bf8","#f2c776","#81e7b7"].forEach((n,r)=>{let a=new nt;a.position.set(34-4.5+r*3,1.7,65),i.box(a,0,0,0,2,2,.4,n,!0),i.label(a,String(r+1),0,1.5,0,2,n),a.children[0].material=a.children[0].material.clone(),a.children[0].material.emissiveIntensity=0,this.object(a,"memory",r,"Activate panel "+(r+1)),t.items.push(a)}),this.memoryNext()),e==="boss"){t.tier=this.state.s.stats.bosses,t.name=_c[Math.min(6,t.tier)]+(t.tier>6?" "+(t.tier-5):""),t.max=Math.max(100,this.state.manual*35+this.state.cps*8)*(1+t.tier*.2)*(1+this.state.s.reality),t.hp=t.max;let n=new nt;n.position.set(-34,2.3,66),i.sphere(n,0,0,0,1.15,"#e27d99",!0);for(let a=0;a<3;a++)i.ring(n,0,0,0,1.7+a*.2,"#ffb5cc",a*.7);n.scale.setScalar(1+Math.min(1.5,t.tier*.12)),this.object(n,"boss",null,"Attack "+t.name,30),t.boss=n,t.lastHit=0;let r=i.box(i.scene,-34,.5,70,18,.1,.1,"#ff9bba",!0);t.beam=r,this.objects.push(r)}this.state.emit("activity",t),this.state.notice({target:"30 seconds \xB7 Blue +1, purple +3, gold +10, red \u22123",memory:"Watch the control panels, then repeat their sequence.",catch:"30 seconds \xB7 Walk into falling energy crystals to catch them.",parkour:"90 seconds \xB7 Sprint and jump between platforms. Avoid rotating lasers.",boss:"60 seconds \xB7 Attack the core and jump over its rotating beam."}[e])}retarget(e){let t=Math.random(),i=t<.12?"red":t<.2?"gold":t<.4?"purple":"blue";e.userData.type=i,e.children[0].material=this.world.mat({red:"#ec7785",gold:"#ffd471",purple:"#bb98fd",blue:"#75d9f3"}[i],!0),e.position.set((Math.random()-.5)*16,1.1+Math.random()*3,61+Math.random()*5)}memoryNext(){let e=this.active;!e||e.kind!=="memory"||(e.round++,e.sequence.push(Math.floor(Math.random()*4)),e.index=0,e.showIndex=0,e.phase="show",e.next=Date.now()+600,e.lit=-1)}lightPanel(e){let t=this.active;t&&(t.items.forEach((i,n)=>{i.children[0].scale.z=n===e?.9:.4,i.children[0].material.emissiveIntensity=n===e?3:0}),t.lit=e)}interact(e){let t=this.active;if(e.action==="event"){this.collectEvent(e.data);return}if(t){if(e.action==="target"&&t.kind==="target"){let i=t.items[e.data];t.score=Math.max(0,t.score+{blue:1,purple:3,gold:10,red:-3}[i.userData.type]),this.world.burst(i.position,"#b4edff",8),this.retarget(i),this.state.emit("sound",500)}if(e.action==="memory"&&t.kind==="memory"&&t.phase==="input"){let i=e.data;if(this.lightPanel(i),t.unlight=Date.now()+180,this.state.emit("sound",300+i*150),i!==t.sequence[t.index]){this.state.s.stats.memory=Math.max(this.state.s.stats.memory,t.round-1),this.finish((t.round-1)*4,`${t.round-1} rounds stabilised.`);return}t.index++,t.index===t.sequence.length&&(this.state.s.stats.memory=Math.max(this.state.s.stats.memory,t.round),t.round===8?this.finish(40,"Perfect stabilisation. All eight rounds completed."):(t.phase="wait",t.next=Date.now()+600))}if(e.action==="boss"&&t.kind==="boss"){let i=(this.state.manual+this.state.cps*.15)*(1+(this.state.fx.bossDamage||0));t.hp-=i,this.world.burst(t.boss.position,"#f8b7dd",7),this.world.shake=.03,this.state.emit("damage",i),this.state.emit("sound",140),t.hp<=0&&(this.state.s.stats.bosses++,this.state.q("boss"),this.state.s.cores++,this.state.s.coreTotal++,this.state.addPoints(2),this.state.s.dust+=10,this.finish(25,"Boss defeated \xB7 +1 quantum core \xB7 +2 Skill Points \xB7 +10 stardust"))}}}finish(e,t){let i=this.active?.kind;if(!i)return;this.state.s.stats.games++,e>0&&this.state.s.stats.wins++,this.state.q("game");let n=Math.max(0,Math.min(40,Math.floor(e))),r=Math.max(100,this.state.cps*3)*Math.min(60,e);this.state.s.tokens+=n,this.state.gain(r),this.state.xp(Math.min(250,e*5)),this.clear(),this.state.progress(),this.state.save(),this.state.emit("result",{kind:i,score:e,tokens:n,energy:r,message:t})}spawnEvent(){if(this.event||this.active||this.state.s.lifetime<500)return;let e=["surge","storm","meltdown","portal",...this.state.fx.golden?["golden"]:[],...this.state.s.rebirths?["invasion"]:[]],t=e[Math.floor(Math.random()*e.length)];this.event={kind:t,end:Date.now()+(t==="invasion"?9e4:45e3),left:t==="storm"?5:t==="invasion"?4:1,hits:0};let i=this.world,n=this.event,r=n.left;if(t==="surge"){this.state.addBoost("passive",5,30),n.end=Date.now()+3e4,this.state.notice("POWER SURGE \xB7 5\xD7 production for 30 seconds");return}for(let a=0;a<r;a++){let o=new nt;if(o.position.set((a-2)*2,1.3,t==="portal"?-6:4),t==="portal")i.ring(o,0,0,0,1.2,"#b3a0fc",0),i.sphere(o,0,0,0,.6,"#806eb7",!0);else if(t==="golden")i.sphere(o,0,0,0,.4,"#f4d077",!0),i.ring(o,0,0,0,.65,"#f4d077");else{let l=new Qe(new tn(t==="invasion"?.65:.3),i.mat(t==="invasion"?"#ae78ea":"#f1cf8e",!0));o.add(l)}i.addTarget(o,"event",a,t==="meltdown"?"Stabilise the reactor anomaly":t==="invasion"?"Disrupt void anchor":"Collect "+t,t==="golden"?4:3.5),this.eventObjects.push(o)}this.state.notice({storm:"ENERGY STORM \xB7 Five crystals appeared in Origin Laboratory",golden:"GOLDEN DRONE \xB7 Catch the visitor in Origin Laboratory",meltdown:"REACTOR MELTDOWN \xB7 Stabilise the anomaly in Origin Laboratory",portal:"TEMPORAL PORTAL \xB7 Find the bonus portal in Origin Laboratory",invasion:"VOID INVASION \xB7 Disrupt four anchors in Origin Laboratory"}[t])}collectEvent(e){let t=this.event;if(!t||t.end<Date.now())return;if(t.kind==="meltdown"&&(t.hits++,t.hits<10)){this.state.notice(`Stabilisation ${t.hits}/10`);return}let i=this.eventObjects[e];!i||!i.visible||(i.visible=!1,t.left--,this.world.burst(i.position,"#f0cf8f",12),t.kind==="portal"&&(this.state.secret("hidden"),this.state.addBoost("xp",2,300)),this.state.gain(Math.max(500,this.state.cps*30)*(1+(this.state.fx.rare||0))),t.left<=0&&(this.state.s.stats.events++,this.state.s.dust+=t.kind==="invasion"?20:5,t.kind==="invasion"&&this.state.unlockSkin("void"),this.state.notice("World event complete \xB7 energy cache and stardust"),this.clearEvent()))}clearEvent(){this.eventObjects.forEach(e=>this.world.removeTarget(e)),this.eventObjects=[],this.event=null,this.world.scene.fog.color.copy(this.world.scene.background)}update(e){let t=Date.now(),i=this.active,n=this.world;if(i){if(t>=i.end){this.finish(i.kind==="target"||i.kind==="catch"?i.score:0,i.kind==="boss"?"The hostile core escaped.":i.kind==="parkour"?"Time expired. Try the course again.":`${i.score} points collected.`);return}if(i.kind==="memory"&&(i.unlight&&t>i.unlight&&(this.lightPanel(-1),i.unlight=0),t>=i.next&&(i.phase==="show"?i.lit>=0?(this.lightPanel(-1),i.next=t+200):i.showIndex<i.sequence.length?(this.lightPanel(i.sequence[i.showIndex++]),this.state.emit("sound",300+i.lit*150),i.next=t+550):(i.phase="input",i.next=1/0):i.phase==="wait"&&this.memoryNext())),i.kind==="target"&&i.items.forEach((r,a)=>r.position.y+=Math.sin(n.clock*2+a)*e*.15),i.kind==="catch"){if(i.spawn-=e,i.spawn<=0){i.spawn=.4;let r=Math.random(),a=r<.02?15:r<.1?8:r<.27?5:1,o=a===15?"#ba8bfa":a===8?"#c5f4ff":a===5?"#f2d182":"#7ee8c4",l=new Qe(new tn(.3),n.mat(o,!0));l.position.set(68+(Math.random()-.5)*16,7,70+(Math.random()-.5)*16),n.scene.add(l),this.objects.push(l),i.items.push({m:l,value:a})}i.items=i.items.filter(r=>{r.m.position.y-=e*3,r.m.rotation.y+=e;let a=r.m.position;return a.y<1.5&&Math.hypot(a.x-n.player.x,a.z-n.player.z)<1.4?(i.score+=r.value,n.burst(a,"#b0f8d4",5),n.scene.remove(r.m),!1):a.y<0?(n.scene.remove(r.m),!1):!0})}if(i.kind==="parkour"){if(n.player.y>=3.3&&Math.hypot(n.player.x-108,n.player.z-42)<2.7){let a=(t-i.start)/1e3;this.state.s.stats.parkour=this.state.s.stats.parkour?Math.min(a,this.state.s.stats.parkour):a,this.finish(Math.max(10,50-Math.floor(a/2)),`Course completed in ${a.toFixed(1)}s \xB7 ${i.falls} falls`);return}let r=n.parkourPlatforms[5];Math.abs(n.player.y-r.y)<.1&&Math.abs(n.player.x-r.x)<r.w/2&&Math.abs(n.player.z-r.z)<r.d/2&&(r.stood=(r.stood||0)+e,r.stood>1&&(r.disabled=!0,r.mesh.visible=!1));for(let a=0;a<3;a++){let l=65-a*8,c=n.clock*.9+a,u=n.player.x-108,d=n.player.z-l,h=u*Math.cos(c)-d*Math.sin(c),p=u*Math.sin(c)+d*Math.cos(c);Math.abs(p)<.24&&Math.abs(h)<3.5&&Math.abs(n.player.y+.8-(1.6+a*.9))<.65&&t>(i.hazardCooldown||0)&&(i.hazardCooldown=t+1500,i.end-=3e3,n.shake=.06,this.state.notice("Laser contact \xB7 \u22123 seconds"))}}if(i.kind==="boss"){i.boss.rotation.y+=e*.4,i.boss.children.forEach((l,c)=>{c&&(l.rotation.z+=e*(.2+c*.2))}),i.beam.rotation.y=n.clock*.8;let r=n.player.x+34,a=n.player.z-70,o=r*Math.sin(n.clock*.8)+a*Math.cos(n.clock*.8);Math.abs(o)<.25&&n.player.y<.6&&t>(i.lastHit||0)+1800&&(i.lastHit=t,i.end-=2e3,n.shake=.08,this.state.notice("Beam contact \xB7 \u22122 seconds. Jump over the sweep."))}}t>this.nextEvent&&(this.spawnEvent(),this.nextEvent=t+(9e4+Math.random()*6e4)/(1+(this.state.fx.rare||0)*.2)),this.event&&(t>this.event.end?(this.event.kind!=="surge"&&this.state.notice("The world event faded."),this.clearEvent()):(this.eventObjects.forEach((r,a)=>{r.rotation.y+=e*.5,this.event.kind==="golden"&&(r.position.x=Math.sin(n.clock*.5)*6,r.position.z=4+Math.cos(n.clock*.5)*2)}),this.event.kind==="invasion"&&n.scene.fog.color.set("#251233")))}};var me=s=>document.getElementById(s),be=(s,e,t="",i=!1,n="")=>`<button data-action="${e}" ${t} ${i?"disabled":""} class="${n}">${s}</button>`,Oo=class{constructor(e,t,i){this.state=e,this.world=t,this.activities=i,this.page="overview",this.treeType="main",this.selected="power-0",this.transform={x:15,y:20,scale:.7},this.opened=!1,this.started=!1,this.displayEnergy=e.s.energy,this.uiTimer=0,this.lastPrompt="",this.machineIndex=null,this.treeDragging=!1,this.buy=1,this.pages=[["overview","Command"],["tree","Skills"],["travel","Map"],["arcade","Arcade"],["missions","Missions"],["collection","Collection"],["rebirth","Rebirth"],["achievements","Achievements"],["stats","Records"],["settings","Settings"]],this.nav(),this.events(),e.on((n,r)=>this.signal(n,r)),me("loadNote").textContent=e.loadError||"",this.paint()}notice(e){let t=document.createElement("div");t.className="toast",t.textContent=e,me("toasts").append(t),me("toasts").children.length>4&&me("toasts").firstChild.remove(),setTimeout(()=>t.remove(),4400)}nav(){me("menuNav").innerHTML=this.pages.map(([e,t])=>be(t,"open",`data-page="${e}"`,!1,this.page===e?"active":"")).join("")}open(e="overview"){this.page=e,this.opened=!0,this.world.paused=!0,this.world.keys={},document.exitPointerLock?.(),me("menu").classList.remove("hidden"),this.render()}close(){this.opened=!1,this.world.paused=!this.started,me("menu").classList.add("hidden"),me("dialog").close(),this.machineIndex=null,this.world.keys={}}dialog(e){this.world.paused=!0,this.world.keys={},document.exitPointerLock?.(),me("dialogBody").innerHTML=e,me("dialog").open||me("dialog").showModal()}closeDialog(){me("dialog").close(),this.machineIndex=null,this.world.paused=this.opened||!this.started}render(){this.nav();let e={overview:"Your reactor empire.",tree:"The progression matrix.",travel:"A world worth discovering.",arcade:"Step inside the arcade.",missions:"A little direction.",collection:"Make this universe yours.",rebirth:"Every end is a beginning.",achievements:"A record of discovery.",stats:"Every pulse leaves a trace.",settings:"Your control room.",research:"Knowledge becomes power.",control:"Central machine control.",drones:"Your floating crew.",challenges:"Change the rules."};me("menuTitle").textContent=e[this.page]||e.overview,me("menuContent").style.overflow=this.page==="tree"?"hidden":"auto",me("menuContent").innerHTML=this[this.page+"View"]?.()||this.overviewView(),this.page==="tree"&&this.bindTree(),this.paint()}signal(e,t){e==="notice"&&this.notice(t),e==="pulse"&&(this.world.pulse(t.critical),this.floater(t.value,t.critical)),e==="damage"&&this.floater(t,!0),e==="teleport"&&(this.activities.clear(),this.world.teleport(t)),e==="result"&&this.dialog(`<div class="eyebrow">ROUND COMPLETE</div><h2>${t.score?"A little closer to mastery.":"Another attempt awaits."}</h2><p>${t.message}</p><div class="big mint">+${t.tokens} tokens</div><p>+${this.state.fmt(t.energy)} energy</p><div class="actions">${be("Return to facility","return","","","primary")}</div>`),e==="interact"&&this.interact(t),e==="zone"&&(me("areaLabel").textContent=t),e==="skill"&&this.opened&&this.page==="tree"&&this.render()}floater(e,t=!1){let i=document.createElement("div");i.className="floater"+(t?" critical":""),i.textContent=(t?"CRITICAL +":"+")+this.state.fmt(e),i.style.left=48+Math.random()*4+"%",me("floaters").append(i),setTimeout(()=>i.remove(),1050)}interact(e){if(!["target","memory","boss","event"].includes(e.action)){if(e.action==="core"){this.state.pulse();return}if(e.action==="shard"){this.state.collect(e.data);return}if(e.action==="secret"){this.state.secret(e.data);return}if(e.action==="return"){this.activities.leave();return}if(e.action==="machine"){this.machineIndex=e.data,this.showMachine();return}if(e.action==="npc"){this.showNPC(e.data);return}if(e.action==="daily"){this.supplyDialog();return}this.open(e.action)}}overviewView(){let e=this.state.s;return`<div class="notice-panel"><div class="eyebrow">${e.reality?"REALITY "+e.reality:"ORIGIN PROTOCOL"}</div><h2>Your world grows with you.</h2><p>Generate energy at the reactor. Invest Skill Points to choose a path. Build real machines, open new doors, and explore. Each level grants a Skill Point; every tenth level adds three more.</p></div><div class="grid"><div class="card"><div class="icon">\u2727</div><h3>Choose your next discovery</h3><p>${e.points} Skill Points ready to spend. 102 main-tree nodes, plus permanent and endgame research.</p>${be("Open skill tree","open",'data-page="tree"',!1,"primary")}</div><div class="card"><div class="icon">\u2B21</div><h3>Explore the facility</h3><p>${e.areas.length} / 10 rooms currently open. ${e.collected.length} / 50 energy shards found.</p>${be("Facility map","open",'data-page="travel"')}</div><div class="card"><div class="icon">\u25C7</div><h3>Daily supply</h3><p>Energy, boosts, XP, arcade tokens, a drone, quantum cores, then an exclusive cosmetic.</p>${be(e.daily.date===this.state.calendar()?"Collected today":"Collect supply","daily","",e.daily.date===this.state.calendar())}</div><div class="card"><div class="icon">\u25A6</div><h3>Central control</h3><p>Manage your entire machine network after opening the Research Wing.</p>${be("Machine control","open",'data-page="control"',!e.areas.includes("research"))}</div><div class="card"><div class="icon">\u2318</div><h3>Companion drones</h3><p>Adopt, equip and evolve a crew that follows you through the facility.</p>${be("Drone foundry","open",'data-page="drones"',e.lifetime<1e3)}</div><div class="card"><div class="icon">\u2691</div><h3>Challenge chamber</h3><p>Five optional rule sets. Clear each for a permanent +10% energy bonus.</p>${be("Choose a challenge","open",'data-page="challenges"',e.rebirths<1)}</div></div>`}treeView(){let e=this.state.s,t=this.treeType,i=t==="quantum"&&!e.rebirths||t==="ascension"&&!e.ascensions||t==="mastery"&&this.state.level<100;return`<div class="tree-layout"><div class="tree-main"><div class="toolbar">${[["main","Skill tree"],["quantum","Quantum"],["ascension","Ascension"],["mastery","Mastery"]].map(([n,r])=>be(r,"treetype",`data-id="${n}"`,!1,t===n?"selected":"")).join("")}<span style="flex:1"></span>${be("Respec","respec","","","small")}</div>${i?`<div class="card tree-empty"><h2>${t==="quantum"?"Rebirth once":t==="ascension"?"Ascend once":"Reach level 100"}</h2><p>This tree becomes available at that milestone.</p></div>`:`<div class="tree-toolbar">${t==="main"?pn.map(n=>be(n[1],"branch",`data-id="${n[0]}"`,!1)).join(""):""}${be("Fit","treefit")}${be("\u2212","zoom",'data-dir="-1"')}${be("+","zoom",'data-dir="1"')}</div><div id="treeViewport" class="tree-viewport"><div id="treeInner" class="tree-inner">${this.treeGraph()}</div></div><div class="tree-help">Drag to pan \xB7 Scroll to zoom \xB7 Select a node to inspect it \xB7 Lines show prerequisites</div>`}</div><aside class="tree-inspector card" id="inspector">${this.inspector()}</aside></div>`}treeGraph(){let e=Lt.filter(n=>n.tree===this.treeType),t=this.state.s,i="";for(let n of e)for(let r of n.requires){let a=Dt[r];if(a.tree!==n.tree)continue;let o=(t.skills[a.id]||0)>0;i+=`<path class="tree-path ${o?"on":""}" style="--line:${n.color}" d="M${a.x+29},${a.y+58} C${a.x+29},${(a.y+n.y)/2+50} ${n.x+29},${(a.y+n.y)/2} ${n.x+29},${n.y}"/>`}return`<svg width="2200" height="1450">${i}</svg>${this.treeType==="main"?pn.map((n,r)=>`<div class="branch-label" style="left:${r*350+45}px;top:40px;color:${n[2]}">${n[1].toUpperCase()}<small>${n[3]}</small></div>`).join(""):""}${e.map(n=>{let r=t.skills[n.id]||0,a=this.state.available(n),o=n.tree==="quantum"?"cores":n.tree==="ascension"?"shards":"points";return`<button data-action="node" data-id="${n.id}" class="node ${r?"owned":""} ${a&&t[o]>=this.state.nodeCost(n)?"available":""} ${r>=n.max?"maxed":""} ${n.keystone?"keystone":""} ${n.id===this.selected?"chosen":""}" style="left:${n.x}px;top:${n.y}px;--node:${n.color}" title="${n.name} \u2014 ${n.desc}"><strong>${n.keystone?"\u2727":n.tree==="quantum"?"\u2B21":n.tree==="ascension"?"\u25C8":["\u03DF","\u25A6","\u25C7","\u263E","\u27F3","\u2301"][pn.findIndex(l=>l[0]===n.branch)]||"\u2723"}</strong><small>${r}/${n.max>=1e6?"\u221E":n.max}</small><span class="node-label">${n.name}</span></button>`}).join("")}`}inspector(){let e=Dt[this.selected];(!e||e.tree!==this.treeType)&&(e=Lt.find(o=>o.tree===this.treeType),this.selected=e.id);let t=this.state.s,i=t.skills[e.id]||0,n=e.tree==="quantum"?"cores":e.tree==="ascension"?"shards":"points",r=this.state.available(e),a=this.state.nodeCost(e);return`<div class="eyebrow" style="color:${e.color}">${e.keystone?"KEYSTONE":e.tree.toUpperCase()+" RESEARCH"}</div><div class="node-glyph" style="--node:${e.color}">${e.keystone?"\u2727":"\u2B21"}</div><h2>${e.name}</h2><p>${e.desc}</p><div class="tag">LEVEL ${i} / ${e.max>=1e6?"\u221E":e.max}</div><div class="section-title">Requirements</div>${e.requires.length?`<ul class="requirements">${e.requires.map(o=>`<li style="color:${t.skills[o]?"var(--accent)":"var(--muted)"}">${t.skills[o]?"\u2713":"\u25CB"} ${Dt[o].name} Lv. 1</li>`).join("")}</ul>`:"<p>Root node. Start your path here.</p>"}<div class="section-title">Research cost</div><h3>${a} ${n==="points"?"Skill Points":n==="cores"?"Quantum Cores":"Singularity Shards"}</h3><p>${this.state.fmt(t[n])} available</p>${be(i>=e.max?"Maxed":r?"Unlock / upgrade":"Prerequisites needed","skillbuy",`data-id="${e.id}"`,!r||t[n]<a,"primary")}<p class="muted" style="font-size:10px">Main skills survive rebirth and ascension. Quantum research survives rebirth. New Reality resets both.</p>`}applyTree(){let e=me("treeInner");e&&(e.style.transform=`translate(${this.transform.x}px,${this.transform.y}px) scale(${this.transform.scale})`)}bindTree(){let e=me("treeViewport");if(!e)return;this.applyTree();let t=null;e.addEventListener("pointerdown",i=>{i.target.closest(".node")||(t={x:i.clientX,y:i.clientY,tx:this.transform.x,ty:this.transform.y},e.setPointerCapture(i.pointerId))}),e.addEventListener("pointermove",i=>{t&&(this.transform.x=t.tx+i.clientX-t.x,this.transform.y=t.ty+i.clientY-t.y,this.applyTree())}),e.addEventListener("pointerup",()=>t=null),e.addEventListener("wheel",i=>{i.preventDefault();let n=e.getBoundingClientRect();this.zoom(i.deltaY<0?1.12:1/1.12,i.clientX-n.left,i.clientY-n.top)},{passive:!1})}zoom(e,t,i){let n=me("treeViewport");if(!n)return;t??(t=n.clientWidth/2),i??(i=n.clientHeight/2);let r=this.transform.scale,a=Math.max(.22,Math.min(1.8,r*e));this.transform.x=t-(t-this.transform.x)*a/r,this.transform.y=i-(i-this.transform.y)*a/r,this.transform.scale=a,this.applyTree()}fitTree(){let e=me("treeViewport");if(!e)return;let t=Lt.filter(r=>r.tree===this.treeType),i=Math.max(...t.map(r=>r.x))+150,n=Math.max(...t.map(r=>r.y))+150;this.transform={x:20,y:20,scale:Math.min((e.clientWidth-40)/i,(e.clientHeight-40)/n,1)},this.applyTree()}travelView(){let e=this.state.s;return`<div class="notice-panel"><h3>Open doors, follow the floor markings.</h3><p>Every room needs its Exploration skill and enough energy earned this run. Room access resets at rebirth. Fast travel requires Fast Travel Network; Return to Origin is always available.</p></div><div class="grid">${lt.map(t=>{let i=e.areas.includes(t.id),n=t.flag?Lt.find(r=>r.effects[t.flag]):null;return`<div class="card ${i?"done":""}"><div class="eyebrow" style="color:${t.color}">${i?"ACCESS GRANTED":"LOCKED SECTOR"}</div><h3 style="margin-top:9px">${t.name}</h3><p>${t.subtitle}</p><div class="muted" style="font-size:11px">${t.need?`${this.state.fmt(t.need)} run energy + ${n?.name||"exploration research"}`:"Starting location"}</div><div class="cardfooter"><span class="tag">${e.discovered.includes(t.id)?"DISCOVERED":"UNKNOWN"}</span>${be("Travel","travel",`data-id="${t.id}"`,!i||t.id!=="lab"&&!this.state.fx.fastTravel,"small")}</div></div>`}).join("")}</div>`}showMachine(){let e=this.machineIndex,t=ei[e],i=this.state.s,n=i.machines[e];this.dialog(`<div class="eyebrow">MACHINE CONTROL / ${t.area.toUpperCase()}</div><h2>${t.name}</h2><div class="big">LEVEL ${n}</div><p>${this.state.fmt(this.state.machineRate(e))} base energy/sec \xB7 ${this.state.milestone(n)}\xD7 milestone bonus</p><div class="thin-bar"><i style="width:${n%10*10}%"></i></div><p>Milestones at 10, 25, 50, 100, 250, 500 and 1,000 double production and evolve the machine.</p>${this.state.fx.automation?"":'<p class="gold">Unlock Basic automation in the skill tree first.</p>'}<div class="machine-bulk">${[1,10,100,"max"].map(r=>{let a=this.state.quote(e,r);return be(`\xD7${r==="max"?"MAX":r} \xB7 ${this.state.fmt(a.cost)} \u03DF`,"machinebuy",`data-i="${e}" data-n="${r}"`,!this.state.fx.automation||i.energy<a.cost||!a.n,"small")}).join("")}</div><div class="actions">${be("Close panel","closedialog")}</div>`)}controlView(){return this.state.s.areas.includes("research")?`<div class="toolbar">${[1,10,100,"max"].map(e=>be("\xD7"+String(e).toUpperCase(),"bulk",`data-n="${e}"`,!1,this.buy===e?"selected":"")).join("")}</div><div class="grid">${ei.map((e,t)=>{let i=this.state.quote(t,this.buy),n=this.state.s;return`<div class="card"><div class="row between"><h3>${e.name}</h3><span class="tag">LV ${n.machines[t]}</span></div><p>${this.state.fmt(this.state.machineRate(t))} base energy/sec</p><div class="cardfooter"><span class="mint">${this.state.fmt(i.cost)} \u03DF</span>${be("Buy \xD7"+i.n,"machinebuy",`data-i="${t}" data-n="${this.buy}"`,!this.state.fx.automation||!n.areas.includes(e.area)||n.energy<i.cost||!i.n)}</div></div>`}).join("")}</div><div class="section-title">Facility infrastructure</div><div class="grid">${Mr.map((e,t)=>`<div class="card"><h3>${e[0]} \xB7 Lv ${this.state.s.facility[t]}</h3><p>${e[1]} per level.</p>${be(`${this.state.fmt(1e3*2**this.state.s.facility[t])} energy`,"facility",`data-i="${t}"`,this.state.s.energy<1e3*2**this.state.s.facility[t]||this.state.s.facility[t]>=50)}</div>`).join("")}</div>`:'<div class="card"><h2>Open the Research Wing first.</h2><p>You can still walk to individual machines and press E to upgrade them.</p></div>'}researchView(){let e=this.state.s;return`<div class="notice-panel"><h3>Research takes time. Knowledge stays.</h3><p>Research levels survive rebirth and reset on ascension. One project can run at a time, including while offline.</p>${e.researchJob?`<p class="mint">${mn[e.researchJob.i][0]} \xB7 <span data-research-time>${Wi((e.researchJob.end-Date.now())/1e3)}</span> remaining</p>`:""}</div><div class="grid">${mn.map((t,i)=>`<div class="card"><h3>${t[0]} \xB7 Lv ${e.research[i]}</h3><p>${t[1]} per level. Research time: ${t[3]} seconds.</p>${be(`${this.state.fmt(t[2]*2**e.research[i])} energy`,"researchbuy",`data-i="${i}"`,!!e.researchJob||e.energy<t[2]*2**e.research[i]||e.research[i]>=20)}</div>`).join("")}</div>`}arcadeView(){let e=this.state.s.lifetime<1e3;return`<div class="notice-panel"><h3>Games live inside the world.</h3><p>Enter a physical chamber and play with the same movement and interaction controls. ${e?"The arcade opens at 1K lifetime energy.":"Timers continue if you open a menu. Leaving a round forfeits its reward."}</p></div><div class="grid">${[["target","Target range","30 seconds. Aim at floating targets. Blue +1, purple +3, gold +10, red \u22123."],["memory","Reactor stabilisation","Watch the four control panels. Repeat increasingly long sequences."],["catch","Energy catch","Move around the chamber to catch falling crystals. Gold, diamond and void crystals score more."],["parkour","Reactor parkour","Sprint and jump between 3D platforms. One moves, one falls, and lasers cost time."],["boss","Boss chamber","Attack a hostile reactor. Jump over its sweep beam. Rewards include Quantum Cores and Skill Points."]].map(([t,i,n])=>`<div class="card"><div class="icon">${t==="boss"?"\u2739":"\u229E"}</div><h3>${i}</h3><p>${n}</p>${be("Enter chamber","startgame",`data-id="${t}"`,e||t==="boss"&&this.state.s.rebirths<1,"primary")}${t==="boss"&&!this.state.s.rebirths?"<p>Boss chamber opens after your first rebirth.</p>":""}</div>`).join("")}</div><div class="section-title">Arcade exchange \xB7 ${this.state.s.tokens} tokens</div><div class="grid">${[["all","2\xD7 Energy","Five minutes of doubled energy.",10],["click","5\xD7 Manual energy","60 seconds of overcharged pulses.",8],["xp","2\xD7 XP","Five minutes of accelerated learning.",15]].map(([t,i,n,r])=>`<div class="card"><h3>${i}</h3><p>${n}</p>${be(r+" tokens","tokenboost",`data-id="${t}"`,this.state.s.tokens<r)}</div>`).join("")}</div>`}missionsView(){let e=this.state.s;return this.state.calendar(),`<div class="notice-panel"><h3>Your next assignment is out there.</h3><p>Speak to the engineer in Origin Laboratory, the scientist in Research, the technician in the Factory, and the explorer at Launch for permanent assignments.</p></div>${["daily","weekly"].map(t=>`<div class="section-title">${t} missions \xB7 ${t==="daily"?"00:00 UTC":"Monday 00:00 UTC"} reset</div><div class="grid">${this.state.missions().filter(i=>i[1]===t).map(i=>{let n=e.quests[t][i[2]]||0,r=e.quests.claims.includes(i[0]);return`<div class="card ${r?"done":""}"><h3>${i[4]}</h3><div class="progress-label"><span>${this.state.fmt(Math.min(n,i[3]))} / ${this.state.fmt(i[3])}</span><span>${t==="daily"?1:3} SP</span></div><div class="thin-bar"><i style="width:${Math.min(100,n/i[3]*100)}%"></i></div><div class="cardfooter">${be(r?"Claimed":"Claim reward","mission",`data-id="${i[0]}"`,r||n<i[3])}</div></div>`}).join("")}</div>`).join("")}`}showNPC(e){let t=this.state.npcTalk(e),i=this.state.npcValue(t),n=this.state.s.npcClaims.includes(e);this.dialog(`<div class="eyebrow">FACILITY ASSIGNMENT</div><h2>${t[1]}</h2><p>\u201C${t[2]}. A little progress today goes a long way tomorrow.\u201D</p><div class="progress-label"><span>${this.state.fmt(Math.min(i,t[4]))} / ${this.state.fmt(t[4])}</span><span>${n?"Complete":"In progress"}</span></div><div class="thin-bar"><i style="width:${Math.min(100,i/t[4]*100)}%"></i></div><p>Reward: 3 Skill Points \xB7 15 stardust \xB7 100 base XP</p><div class="actions">${be("Goodbye","closedialog")}${be(n?"Claimed":"Complete assignment","npcclaim",`data-id="${e}"`,n||i<t[4],"primary")}</div>`)}supplyDialog(){this.dialog(`<div class="eyebrow">DAILY SUPPLY</div><h2>A little help from the stars.</h2><p>Day 1: energy \xB7 Day 2: boost \xB7 Day 3: XP \xB7 Day 4: tokens \xB7 Day 5: drone \xB7 Day 6: quantum core \xB7 Day 7: Galaxy skin + 25 stardust.</p><div class="actions">${be("Later","closedialog")}${be(this.state.s.daily.date===this.state.calendar()?"Collected":"Collect","daily","",this.state.s.daily.date===this.state.calendar(),"primary")}</div>`)}collectionView(){let e=this.state.s;return`<div class="notice-panel"><div class="row between"><div><h3>Energy shards \xB7 ${e.collected.length} / 50</h3><p>Five shards are hidden in each sector. Every five grants a Skill Point. Collect all fifty for the Reality core.</p></div>${be("Drones","open",'data-page="drones"')}</div></div><div class="section-title">Reactor appearances \xB7 ${e.dust} stardust</div><div class="grid">${Ti.map(t=>`<div class="card" style="text-align:center;--skin:${t[2]}"><div class="skin-preview"></div><span class="tag">${t[3]}</span><h3 style="margin-top:8px">${e.skins.includes(t[0])?t[1]:t[4]<0?"Undiscovered signal":t[1]}</h3><p>${t[0]==="gold"?"+2% all energy.":t[4]<0?"Explore the world to discover this core.":"A cosmetic signature for your reactor."}</p>${be(e.skin===t[0]?"Equipped":e.skins.includes(t[0])?"Equip":t[4]<0?"Locked":t[4]+" \u25C7","skin",`data-id="${t[0]}"`,e.skin===t[0]||!e.skins.includes(t[0])&&(t[4]<0||e.dust<t[4]),"small")}</div>`).join("")}</div><div class="section-title">Character appearance</div><div class="grid">${vc.map((t,i)=>{let n=i<3||i===3&&e.lifetime>=1e4||i===4&&e.discovered.includes("orbital")||i===5&&e.rebirths>=1||i===6&&e.ascensions>=1||i===7&&e.dust>=100;return`<div class="card"><h3>${t}</h3><p>${i<3?"Starter uniform.":i===3?"Generate 10K lifetime energy.":i===4?"Discover the Orbital Station.":i===5?"Rebirth once.":i===6?"Ascend once.":"Hold 100 stardust to equip."}</p>${be(e.outfit===i?"Equipped":"Equip","outfit",`data-i="${i}"`,!n||e.outfit===i)}</div>`}).join("")}</div>`}dronesView(){let e=this.state.s;return`<div class="notice-panel"><h3>Your floating crew \xB7 ${e.equipped.length} / ${e.slots} equipped</h3><p>Drones physically follow you. Fuse three copies into one improved drone; each evolution adds 50% to its base bonus. Up to ten evolutions per type.</p>${be("Extra slot \xB7 50 tokens","droneslot","",e.slots>=3||e.tokens<50,"small")}</div><div class="grid">${wi.map((t,i)=>`<div class="card"><div class="icon" style="color:${t[2]}">\u2318</div><h3>${t[0]}</h3><p>${t[1]} \xB7 bonus multiplier ${(1+e.droneLevels[i]*.5).toFixed(1)}\xD7</p><div class="tag">${e.droneCopies[i]} COPIES \xB7 EVOLUTION ${e.droneLevels[i]}</div><div class="cardfooter">${be(t[3]+" \u25C7","dronebuy",`data-i="${i}"`,e.dust<t[3],"small")}${be(e.equipped.includes(i)?"Unequip":"Equip","droneequip",`data-i="${i}"`,e.droneCopies[i]<1,"small")}${be("Fuse 3","dronefuse",`data-i="${i}"`,e.droneCopies[i]<3||e.droneLevels[i]>=10,"small")}</div></div>`).join("")}</div>`}rebirthView(){let e=this.state.s;return`<div class="grid"><div class="card"><div class="eyebrow">QUANTUM REBIRTH</div><div class="big gold" id="rebirthGain">+${this.state.fmt(this.state.rebirthGain)} \u2B21</div><p>Minimum ${this.state.fmt(this.state.rebirthRequirement)} energy earned this run. Resets energy, machine levels (except memory), facility infrastructure, room access, temporary boosts and current challenges.</p><p>Keeps skills, XP, research, cosmetics, drones, quests, discoveries and lifetime records.</p><div class="progress-label"><span id="rebirthProgress">${this.state.fmt(e.run)} / ${this.state.fmt(this.state.rebirthRequirement)}</span><span>${e.rebirths} rebirths</span></div>${be("Rebirth","rebirthconfirm","",e.run<this.state.rebirthRequirement,"primary")}<div class="cardfooter">${be("Quantum skill tree","qtree","",!e.rebirths,"small")}</div></div><div class="card"><div class="eyebrow">ASCENSION</div><div class="big">${e.cycle} / 10</div><p>Complete ten rebirths in this cycle. Gain 3 Singularity Shards and a permanent +200% energy bonus.</p><p>Also resets quantum currency and research, timed research levels, facility upgrades and cycle count. Main skills, XP, cosmetics and records remain.</p>${be("Ascend","ascendconfirm","",e.cycle<10,"primary")}<div class="cardfooter">${be("Ascension tree","atree","",!e.ascensions,"small")}<span class="muted">${e.shards} shards</span></div></div><div class="card"><div class="eyebrow">NEW REALITY</div><div class="big">REALITY ${e.reality}</div><p>Requires 3 ascensions, BREAK REALITY and Multiverse Access. Resets progression and all trees. Keeps cosmetics, achievements, settings and lifetime statistics.</p><p>Gain +1,000% all-energy multiplier per reality, bonus starting Skill Points and the Reality core.</p>${be("Enter a New Reality","realityconfirm","",e.ascensions<3||!this.state.fx.breakReality||!this.state.fx.multiverse)}</div></div>`}challengesView(){let e=this.state.s;return`<div class="notice-panel"><h3>A new rule. One million energy.</h3><p>Starting resets current energy, machines, run earnings and boosts. Your skills remain. First clears grant 3 SP and +10% permanent energy; every clear grants 20 stardust.</p>${e.challenge?`<p class="mint">Active: ${e.challenge.id} \xB7 ${this.state.fmt(e.challenge.earned)} / 1M</p>${be("Abandon","abandon")}`:""}</div><div class="grid">${[["manual","Manual only","Machine production and automatic pulses are disabled."],["machine","Machine only","Manual pulses are disabled. Start with one collector; requires Basic automation."],["instability","Reactor instability","Machine production oscillates from 30% to 170%."],["speed","Speed challenge","Reach 1M energy within 180 seconds."],["branch","One branch","During the challenge, new main-tree research must stay within your existing branch. Start after a respec for a single-branch run."]].map(([t,i,n])=>`<div class="card ${e.completedChallenges.includes(t)?"done":""}"><h3>${i}</h3><p>${n}</p>${be("Begin challenge","challengeconfirm",`data-id="${t}"`,!!e.challenge||e.rebirths<1||t==="branch"&&new Set(Object.keys(e.skills).filter(r=>Dt[r].tree==="main").map(r=>Dt[r].branch)).size>1)}</div>`).join("")}</div>`}achievementsView(){let e=this.state.s;return`<div class="notice-panel"><h3>${e.achievements.length} / ${this.state.achDefs.length} achievements</h3><p>Each grants stardust and +0.5% permanent energy. Every five completed achievements grants a Skill Point.</p></div><div class="grid">${this.state.achDefs.map(t=>{let i=e.achievements.includes(t.id),n=Math.min(t.goal,t.value());return`<div class="card ${i?"done":""}"><div class="row between"><h3>${t.name}</h3><span class="mint">${i?"\u2713":"\u2727"}</span></div><p>${t.desc}</p><div class="progress-label"><span>${this.state.fmt(n)} / ${this.state.fmt(t.goal)}</span><span>${t.reward} \u25C7</span></div><div class="thin-bar"><i style="width:${n/t.goal*100}%"></i></div></div>`}).join("")}</div>`}statsView(){let e=this.state.s;return`<div class="grid">${[["Current energy",e.energy],["Lifetime energy",e.lifetime],["Run energy",e.run],["Energy/sec",this.state.cps],["Interactions",e.stats.clicks],["Critical interactions",e.stats.criticals],["Highest pulse",e.stats.highest],["Machine levels",e.machines.reduce((i,n)=>i+n,0)],["Machines upgraded",e.stats.purchases],["Player level",this.state.level],["Skill Points earned",e.pointsEarned],["Nodes unlocked",Object.keys(e.skills).length],["Rebirths",e.rebirths],["Ascensions",e.ascensions],["Quantum cores",e.cores],["Singularity shards",e.shards],["Bosses defeated",e.stats.bosses],["Games completed",e.stats.games],["Quests completed",e.stats.quests],["Reactor skins",e.skins.length],["Drones owned",e.droneCopies.reduce((i,n)=>i+n,0)],["Time played",Wi(e.stats.time)],["Offline energy",e.stats.offline],["Areas discovered",e.discovered.length],["Energy shards",e.collected.length+" / 50"],["Secrets discovered",e.secrets.length],["Best memory round",e.stats.memory],["Fastest parkour",e.stats.parkour?e.stats.parkour.toFixed(1)+"s":"\u2014"],["Highest combo",e.stats.combo.toFixed(1)+"\xD7"],["Realities",e.reality]].map(([i,n])=>`<div class="card"><div class="muted">${i}</div><div class="stat">${typeof n=="number"?this.state.fmt(n):n}</div></div>`).join("")}</div>`}setting(e,t,i){let n=this.state.s.settings;return`<label class="settings-row"><span>${e}</span><select data-setting="${t}">${i.map(([r,a])=>`<option value="${r}" ${n[t]===r?"selected":""}>${a}</option>`).join("")}</select></label>`}toggle(e,t){return`<label class="settings-row"><span>${e}</span><input type="checkbox" data-setting="${t}" ${this.state.s.settings[t]?"checked":""}></label>`}range(e,t,i,n,r){return`<label class="settings-row"><span>${e}</span><input aria-label="${e}" type="range" data-setting="${t}" min="${i}" max="${n}" step="${r}" value="${this.state.s.settings[t]}"></label>`}settingsView(){return`<div class="grid"><div class="card"><h3>Camera & controls</h3>${this.setting("Camera","view",[["first","First person"],["third","Third person"]])}${this.range("Mouse sensitivity","sensitivity",.2,3,.1)}${this.toggle("Camera bob","bob")}${this.toggle("Camera shake","shake")}${this.toggle("Reduced motion","reduced")}${this.toggle("Show guidance","tutorial")}<p>WASD move \xB7 Shift sprint \xB7 Space jump \xB7 C crouch \xB7 E interact \xB7 T skill tree \xB7 M map \xB7 Tab menu. Hold right mouse to look if mouse capture is unavailable.</p></div><div class="card"><h3>Graphics</h3>${this.setting("Quality","quality",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]])}${this.setting("FPS limit","fps",[[30,"30"],[60,"60"],[120,"120"]])}${this.setting("Render distance","renderDistance",[[75,"75 m"],[150,"150 m"],[250,"250 m"]])}${this.toggle("Energy particles","particles")}${this.toggle("Bloom","bloom")}${this.toggle("Shadows","shadows")}${this.toggle("Dynamic lighting","lighting")}<p>Anti-aliasing is enabled. Quality controls render resolution. Motion blur is omitted for clear movement.</p></div><div class="card"><h3>Sound</h3>${this.toggle("Sound effects","sound")}${this.toggle("Ambient music","music")}${this.range("Master","master",0,1,.05)}${this.range("Sound effects","sfx",0,1,.05)}${this.range("Music","musicVolume",0,1,.05)}<p>Synthesised reactor ambience changes with your sector and during boss encounters.</p></div><div class="card"><h3>Visual signature</h3>${this.setting("UI accent","accent",[["#79dfc4","Mint"],["#72d8ee","Glacier"],["#c2a4ff","Violet"],["#f3c87d","Solar"]])}${this.setting("Machine finish","machineColor",[["#6f8fa5","Titanium"],["#bf815e","Copper"],["#849a71","Sage"],["#9982b2","Amethyst"]])}${this.setting("Number format","notation",[["short","Compact (1.23M)"],["scientific","Scientific (1.23e6)"]])}${be("Fullscreen","fullscreen","","","small")}</div><div class="card"><h3>Your save</h3><p>Autosaves every five seconds. Export a backup before moving folders or clearing browser data. Classic Nova Foundry v1 saves can be imported; transferable currency and XP are retained.</p><div class="toolbar">${be("Save now","save")}${be("Export","export")}${be("Import","importdialog")}</div>${be("Reset all progress","resetconfirm","","","danger small")}<p>Offline: ${Math.round(this.state.offlineEfficiency*100)}% efficiency \xB7 ${this.state.offlineHours}h maximum. Unlock Offline Production to earn while away.</p></div></div>`}events(){document.addEventListener("click",r=>{let a=r.target.closest("[data-action]");a&&!a.disabled&&this.action(a.dataset)}),document.addEventListener("change",r=>{let a=r.target.dataset.setting;a&&(this.state.s.settings[a]=r.target.type==="checkbox"?r.target.checked:["fps","renderDistance","master","sfx","musicVolume","sensitivity"].includes(a)?Number(r.target.value):r.target.value,document.documentElement.style.setProperty("--accent",this.state.s.settings.accent),document.body.classList.toggle("reduced",this.state.s.settings.reduced),this.world.applySettings(),this.world.sync(),this.state.emit("audio-settings"),this.state.save())}),document.addEventListener("keydown",r=>{if(!(/INPUT|TEXTAREA|SELECT/.test(r.target.tagName)||!this.started)){if(r.code==="Tab"||r.code==="KeyT"||r.code==="KeyM"){if(r.preventDefault(),me("dialog").open)return;let a=r.code==="KeyT"?"tree":r.code==="KeyM"?"travel":"overview";this.opened&&this.page===a?this.close():this.open(a)}r.code==="KeyV"&&!this.opened&&(this.state.s.settings.view=this.state.s.settings.view==="first"?"third":"first"),r.code==="Escape"&&this.opened&&!me("dialog").open&&this.close()}}),me("dialog").addEventListener("cancel",()=>{this.world.paused=this.opened,this.machineIndex=null}),me("enter").addEventListener("click",()=>{if(this.started=!0,this.world.paused=!1,me("welcome").classList.add("hidden"),this.state.pendingOffline){let r=this.state.pendingOffline;this.notice(`Welcome back \xB7 ${Wi(r.seconds)} away \xB7 +${this.state.fmt(r.amount)} energy`),this.state.pendingOffline=null}this.state.emit("audio-settings"),this.state.save()});let e=!1,t=me("stick");t.addEventListener("pointerdown",r=>{e=!0,t.setPointerCapture(r.pointerId),i(r)});let i=r=>{if(!e)return;let a=t.getBoundingClientRect(),o=(r.clientX-a.left-a.width/2)/40,l=(r.clientY-a.top-a.height/2)/40,c=Math.max(1,Math.hypot(o,l));this.world.moveStick={x:o/c,y:l/c},me("stickKnob").style.transform=`translate(${o/c*30}px,${l/c*30}px)`};t.addEventListener("pointermove",i);let n=()=>{e=!1,this.world.moveStick={x:0,y:0},me("stickKnob").style.transform=""};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),me("touchJump").addEventListener("pointerdown",r=>{r.preventDefault(),this.world.keys.Space=!0});for(let r of["pointerup","pointercancel"])me("touchJump").addEventListener(r,()=>this.world.keys.Space=!1);me("touchInteract").addEventListener("click",()=>this.world.interact())}async action(e){let t=e.action,i=e.id,n=Number(e.i),r=this.state.s;if(t==="open"){this.open(e.page);return}if(t==="close"){this.close();return}if(t==="closedialog"){this.closeDialog();return}if(t==="camera"){r.settings.view=r.settings.view==="first"?"third":"first";return}if(t==="node"){this.selected=i,me("inspector").innerHTML=this.inspector(),document.querySelectorAll(".node").forEach(a=>a.classList.toggle("chosen",a.dataset.id===i));return}if(t==="skillbuy"){this.state.skillBuy(i);return}if(t==="treetype"){this.treeType=i,this.selected=Lt.find(a=>a.tree===i).id,this.transform={x:10,y:10,scale:i==="main"?.6:.7},this.render();return}if(t==="branch"){let a=pn.findIndex(o=>o[0]===i);this.transform={x:35-a*350*.85,y:-40,scale:.85},this.applyTree();return}if(t==="treefit"){this.fitTree();return}if(t==="zoom"){this.zoom(Number(e.dir)>0?1.2:1/1.2);return}if(t==="respec"){this.dialog(`<h2>Rethink your path?</h2><p>Refund all main-tree Skill Points. Quantum, Ascension and Mastery trees remain. World access is recalculated and you return to Origin. XP for previously discovered nodes cannot be earned again.</p><p>${r.respecs?"Cost: 25 stardust.":"Your first respec is free."}</p><div class="actions">${be("Keep my path","closedialog")}${be("Respec main tree","respecdo","",r.respecs>0&&r.dust<25,"primary")}</div>`);return}if(t==="respecdo"){this.state.respec(),this.closeDialog(),this.render();return}if(t==="travel"){if(!r.areas.includes(i)||i!=="lab"&&!this.state.fx.fastTravel)return;this.activities.clear(),this.world.teleport(i),this.close();return}if(t==="machinebuy"){this.state.buyMachine(n,e.n==="max"?"max":Number(e.n)),this.machineIndex!==null?this.showMachine():this.render();return}if(t==="bulk"){this.buy=e.n==="max"?"max":Number(e.n),this.render();return}if(t==="facility"){this.state.facilityBuy(n),this.render();return}if(t==="researchbuy"){this.state.startResearch(n),this.render();return}if(t==="startgame"){if(r.lifetime<1e3||i==="boss"&&!r.rebirths)return;this.close(),this.activities.start(i);return}if(t==="return"){this.closeDialog(),this.close(),this.activities.leave();return}if(t==="tokenboost"){let a={all:10,click:8,xp:15};if(r.tokens<a[i])return;r.tokens-=a[i],this.state.addBoost(i,i==="click"?5:2,i==="click"?60:300),this.notice("Boost activated"),this.render();return}if(t==="mission"){this.state.claimMission(i),this.render();return}if(t==="npcclaim"){this.state.npcClaim(i),this.closeDialog();return}if(t==="daily"){this.state.dailyClaim(),me("dialog").open&&this.closeDialog(),this.opened&&this.render();return}if(t==="skin"){this.state.buySkin(i),this.render();return}if(t==="outfit"){r.outfit=n,this.render();return}if(t==="dronebuy"){this.state.droneBuy(n),this.render();return}if(t==="dronefuse"){this.state.droneFuse(n),this.render();return}if(t==="droneequip"){r.equipped.includes(n)?r.equipped=r.equipped.filter(a=>a!==n):r.droneCopies[n]&&r.equipped.length<r.slots?r.equipped.push(n):this.notice("All slots are full. Unequip a drone first."),this.world.sync(),this.render();return}if(t==="droneslot"&&r.tokens>=50&&r.slots<3){r.tokens-=50,r.slots++,this.render();return}if(t==="qtree"||t==="atree"){this.treeType=t==="qtree"?"quantum":"ascension",this.selected=t==="qtree"?"q-0":"a-0",this.transform={x:0,y:0,scale:.7},this.open("tree");return}if(["rebirthconfirm","ascendconfirm","realityconfirm"].includes(t)){let a=t.replace("confirm",""),o=a==="rebirth"?"Reset the current facility and earn "+this.state.fmt(this.state.rebirthGain)+" Quantum Cores? Main skills, research, cosmetics and lifetime records remain.":a==="ascend"?"Reset this ascension cycle, quantum research, machine levels and research projects? Gain 3 Singularity Shards and +200% permanent energy.":"Reset all progression trees and the facility? Cosmetics, achievements, settings and lifetime records remain. Gain a New Reality multiplier.";this.dialog(`<h2>${a==="rebirth"?"Reignite your universe?":a==="ascend"?"Ascend beyond the facility?":"Create a New Reality?"}</h2><p>${o}</p><div class="actions">${be("Keep building","closedialog")}${be("Confirm "+a,a,"",!1,"primary")}</div>`);return}if(t==="rebirth"){if(r.run<this.state.rebirthRequirement)return;this.closeDialog(),this.close(),this.world.paused=!0,this.state.resetting=!0,me("transition").classList.remove("hidden"),me("transitionText").textContent="The universe is holding its breath.",this.state.emit("sound",90),setTimeout(()=>{me("transitionText").textContent="+"+this.state.performRebirth()+" QUANTUM CORES"},2100),setTimeout(()=>{me("transition").classList.add("hidden"),this.state.resetting=!1,this.world.paused=!1},3300);return}if(t==="ascend"){this.state.ascend()&&(this.close(),this.world.sync(),this.notice("ASCENSION COMPLETE \xB7 +3 Singularity Shards"));return}if(t==="reality"){this.state.newReality()&&(this.close(),this.world.sync());return}if(t==="challengeconfirm"){this.dialog(`<h2>Begin this challenge?</h2><p>Current energy, machine levels, run earnings and boosts reset. Earn 1M energy under the new rule to complete it.</p><div class="actions">${be("Cancel","closedialog")}${be("Begin","challengedo",`data-id="${i}"`,!1,"primary")}</div>`);return}if(t==="challengedo"){this.state.challengeStart(i),this.close();return}if(t==="abandon"){r.challenge=null,this.render();return}if(t==="save"){this.state.save(),this.notice(this.state.storageFailed?"Export a backup to keep your progress.":"Universe saved");return}if(t==="export"){this.state.save(),this.dialog(`<h2>Back up your universe.</h2><p>Download or copy this save before moving to another browser.</p><textarea id="saveText" aria-label="Save text"></textarea><div class="actions">${be("Copy","copysave")}${be("Download JSON","downloadsave")}${be("Done","closedialog","","","primary")}</div>`),me("saveText").value=JSON.stringify(r);return}if(t==="copysave"){try{await navigator.clipboard.writeText(me("saveText").value),this.notice("Save copied")}catch{me("saveText").select(),this.notice("Save selected. Press Ctrl+C / Cmd+C.")}return}if(t==="downloadsave"){let a=document.createElement("a"),o=URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"}));a.href=o,a.download="Nova-Foundry-3D-save.json",a.click(),setTimeout(()=>URL.revokeObjectURL(o),2e3);return}if(t==="importdialog"){this.dialog(`<h2>Restore your universe.</h2><p>Paste a 3D save or a Classic Nova Foundry v1 export. Validated data replaces your current progress; a local backup is kept.</p><textarea id="saveText" aria-label="Save to import"></textarea><p id="importError" class="gold"></p><div class="actions">${be("Cancel","closedialog")}${be("Import","importdo","","","primary")}</div>`);return}if(t==="importdo"){try{this.activities.clear(),this.activities.clearEvent(),this.state.import(me("saveText").value),this.close(),this.world.sync(),this.notice("Save restored")}catch(a){me("importError").textContent=a.message}return}if(t==="resetconfirm"){this.dialog(`<h2>Delete all local progress?</h2><p>This removes all 3D progression. Export a backup first if you want to keep it. Type RESET to confirm.</p><input type="text" id="resetText" aria-label="Reset confirmation"><div class="actions">${be("Cancel","closedialog")}${be("Delete progress","resetdo","","","danger")}</div>`);return}if(t==="resetdo"){if(me("resetText").value!=="RESET")return;this.activities.clear(),this.activities.clearEvent(),this.state.s=Ln(),this.state.recompute(),this.state.save(),this.world.sync(),this.world.teleport("lab"),this.close(),this.notice("A new universe begins.");return}if(t==="fullscreen"){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{this.notice("Fullscreen unavailable in this browser.")}return}}paint(){let e=this.state.s;this.displayEnergy+=(e.energy-this.displayEnergy)*.3,Math.abs(this.displayEnergy-e.energy)<1&&(this.displayEnergy=e.energy),me("energy").textContent=this.state.fmt(this.displayEnergy),me("production").textContent=this.state.fmt(this.state.cps),me("dust").textContent=this.state.fmt(e.dust),me("cores").textContent=this.state.fmt(e.cores),me("points").textContent=this.state.fmt(e.points),me("playerLevel").textContent="LEVEL "+this.state.level,me("combo").textContent=(1+this.state.combo/100*(2+(this.state.fx.combo||0))).toFixed(1)+"\xD7 pulse";let t=this.state.level,i=35*(t-1)**2,n=35*t*t;me("xpBar").style.width=(e.xp-i)/(n-i)*100+"%",me("menuBalance").textContent=this.state.fmt(e.energy)+" \u03DF   \xB7   "+e.points+" SP",me("boosts").innerHTML=e.boosts.filter(d=>d.end>Date.now()).map(d=>`<span class="boost">${d.mult}\xD7 ${d.type} \xB7 ${Wi((d.end-Date.now())/1e3)}</span>`).join("");let r="YOUR FIRST SPARK",a="Approach the reactor. Press E to generate energy.",o=Math.min(100,e.stats.clicks/5*100);if(e.stats.clicks>=5&&!this.state.fx.automation)r="A PATH OF YOUR OWN",a="Press T. Unlock Basic automation to build your first machine.",o=100;else if(this.state.fx.automation&&!e.machines[0])r="LET THE MACHINES WORK",a="Visit the Energy collector beside the reactor. Build it for 20 energy.",o=Math.min(100,e.energy/20*100);else if(e.machines[0]){let d=lt.find(h=>!e.areas.includes(h.id));r=d?"YOUR NEXT SECTOR":"THE NEXT BEGINNING",a=d?`${d.name} \xB7 ${this.state.fmt(d.need)} run energy + ${Lt.find(h=>h.effects[d.flag])?.name}`:`Rebirth at ${this.state.fmt(this.state.rebirthRequirement)} run energy.`,o=Math.min(100,e.run/(d?d.need:this.state.rebirthRequirement)*100)}this.activities.active&&(r="ARCADE CHAMBER",a="Aim with the mouse. E or left click interacts. Menu \u2192 Arcade to leave."),e.challenge&&(r="CHALLENGE / "+e.challenge.id.toUpperCase(),a=this.state.fmt(e.challenge.earned)+" / 1M energy"+(e.challenge.id==="speed"?" \xB7 "+Wi(Math.max(0,180-(Date.now()-e.challenge.start)/1e3)):"")),!e.settings.tutorial&&!this.activities.active&&(r="NOVA FOUNDRY",a=this.state.fmt(e.lifetime)+" lifetime energy \xB7 "+e.discovered.length+" sectors discovered"),me("objectiveLabel").textContent=r,me("objectiveText").textContent=a,me("objectiveBar").style.width=o+"%";let l=this.world.current;me("interaction").style.opacity=l&&!this.opened&&this.started&&!me("dialog").open?"1":"0",me("reticle").classList.toggle("ready",!!l),l&&(me("interactLabel").textContent=l.label,me("interactSub").textContent=l.action==="core"?"+"+this.state.fmt(this.state.manual*(1+this.state.combo/100*(2+(this.state.fx.combo||0))))+" energy per pulse":l.action==="machine"?"Build and upgrade physical machinery":"E or left click");let c=this.activities.active;me("activityHud").classList.toggle("hidden",!c),c&&(me("activityHud").innerHTML=c.kind==="memory"?`STABILISATION \xB7 Round <strong>${c.round}/8</strong><br>${c.phase==="input"?"Your turn \xB7 Repeat the sequence":"Watch the panels"}`:c.kind==="boss"?`${c.name}<br><strong>${this.state.fmt(Math.max(0,c.hp))}</strong> / ${this.state.fmt(c.max)} HP \xB7 ${Math.ceil((c.end-Date.now())/1e3)}s`:c.kind.toUpperCase()+` \xB7 <strong>${Math.ceil((c.end-Date.now())/1e3)}s</strong>`+(c.kind==="parkour"?` \xB7 ${c.falls} falls`:` \xB7 ${c.score} points`));let u=this.activities.event;if(me("eventHud").classList.toggle("hidden",!u),u&&(me("eventHud").textContent=u.kind.toUpperCase()+" / ORIGIN LAB \xB7 "+Wi((u.end-Date.now())/1e3)+(u.kind!=="surge"?" \xB7 "+u.left+" remaining":"")),this.opened&&this.page==="rebirth"){me("rebirthGain").textContent="+"+this.state.fmt(this.state.rebirthGain)+" \u2B21",me("rebirthProgress").textContent=this.state.fmt(e.run)+" / "+this.state.fmt(this.state.rebirthRequirement);let d=document.querySelector('[data-action="rebirthconfirm"]');d&&(d.disabled=e.run<this.state.rebirthRequirement)}if(this.opened&&this.page==="tree"){let d=Dt[this.selected],h=d.tree==="quantum"?"cores":d.tree==="ascension"?"shards":"points",p=document.querySelector('[data-action="skillbuy"]');p&&(p.disabled=!this.state.available(d)||e[h]<this.state.nodeCost(d))}document.querySelectorAll('[data-action="machinebuy"]').forEach(d=>{let h=Number(d.dataset.i),p=d.dataset.n==="max"?"max":Number(d.dataset.n),v=this.state.quote(h,p);d.disabled=!this.state.fx.automation||!e.areas.includes(ei[h].area)||e.energy<v.cost||v.n<1,this.machineIndex!==null?d.textContent="\xD7"+(p==="max"?"MAX":p)+" \xB7 "+this.state.fmt(v.cost)+" \u03DF":p==="max"&&(d.textContent="Buy \xD7"+v.n)}),document.querySelectorAll('[data-action="mission"]').forEach(d=>{let h=this.state.missions().find(p=>p[0]===d.dataset.id);h&&(d.disabled=e.quests.claims.includes(h[0])||(e.quests[h[1]][h[2]]||0)<h[3])}),e.researchJob&&document.querySelectorAll("[data-research-time]").forEach(d=>d.textContent=Wi(Math.max(0,(e.researchJob.end-Date.now())/1e3))),this.drawMap()}drawMap(){let e=me("minimap"),t=e.getContext("2d");t.clearRect(0,0,190,110);let i=1.35,n=95,r=65;for(let a of lt)t.fillStyle=this.state.s.areas.includes(a.id)?"#335b60":"#243541",t.fillRect(n+a.x*i-12,r+a.z*i-12,24,24),t.strokeStyle=this.state.s.areas.includes(a.id)?"#82cab5":"#415460",t.strokeRect(n+a.x*i-12,r+a.z*i-12,24,24);if(this.state.fx.scanner&&!this.world.arena){t.fillStyle="#f2d382";for(let a of this.world.shards)a.visible&&t.fillRect(n+a.position.x*i-1,r+a.position.z*i-1,2,2)}this.world.arena||(t.fillStyle="#edfff6",t.beginPath(),t.arc(n+this.world.player.x*i,r+this.world.player.z*i,3,0,Math.PI*2),t.fill()),t.fillStyle="#a2c2ca",t.font="8px Arial",t.fillText("FACILITY / "+this.state.s.areas.length+" SECTORS",10,103)}update(e){this.uiTimer+=e,this.uiTimer>.12&&(this.uiTimer=0,this.paint())}};var Bo=class{constructor(e,t){this.state=e,this.world=t,this.ctx=null,this.musicNodes=[],this.lastTheme="",this.lastHum=0,e.on((i,n)=>{i==="pulse"&&this.tone(n.critical?620:210,.12,this.pan(0,-1.5)),i==="sound"&&this.tone(n,.14),i==="skill"&&this.tone(780,.22),i==="machine"&&this.tone(390,.16),i==="level"&&this.tone(900,.2),i==="area"&&this.tone(280,.4),i==="audio-settings"&&this.music(!0)})}init(){try{return this.ctx??(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume(),!0}catch{return!1}}pan(e,t){let i=e-this.world.player.x,n=t-this.world.player.z;return Math.max(-1,Math.min(1,(i*Math.cos(this.world.yaw)-n*Math.sin(this.world.yaw))/8))}tone(e=300,t=.13,i=0){let n=this.state.s.settings;if(!n.sound||!n.master||!this.init())return;let r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=this.ctx.createStereoPanner();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime),r.frequency.exponentialRampToValueAtTime(Math.max(30,e*.55),this.ctx.currentTime+t),a.gain.setValueAtTime(Math.max(.001,n.master*n.sfx*.13),this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+t),o.pan.value=i,r.connect(a).connect(o).connect(this.ctx.destination),r.start(),r.stop(this.ctx.currentTime+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect()}}music(e=!1){let t=this.state.s.settings,i=this.world.arena==="boss"?"boss":this.world.zone;if(!e&&this.lastTheme===i||(this.lastTheme=i,this.musicNodes.forEach(r=>{try{r.stop(),r.disconnect()}catch{}}),this.musicNodes=[],!t.music||!t.master||!this.init()))return;let n=i==="boss"?[65.4,77.78,98]:["dimension","quantum","deep"].includes(i)?[110,130.81,164.81]:i==="factory"?[98,123.47,146.83]:[130.81,164.81,196];this.musicNodes=n.map((r,a)=>{let o=this.ctx.createOscillator(),l=this.ctx.createGain();return o.type="sine",o.frequency.value=r,l.gain.value=t.master*t.musicVolume*.028,o.connect(l).connect(this.ctx.destination),o.start(),o})}update(e){this.music(),this.lastHum+=e,this.lastHum>4&&(this.lastHum=0,this.state.s.settings.sound&&this.state.s.settings.music&&this.world.player.distanceTo({x:0,y:0,z:-1.5})<10&&this.tone(75,.4,this.pan(0,-1.5)))}};function $g(s){console.error(s);let e=document.createElement("div");e.className="error-panel";let t=document.createElement("h1");t.textContent="The 3D renderer could not start.";let i=document.createElement("p");i.textContent="Open index.html in a browser with WebGL 2 enabled, such as Chrome, Edge or Firefox. Enable browser graphics acceleration if it is disabled. The game runs locally after extracting the whole ZIP.";let n=document.createElement("p");n.textContent="Details: "+s.message,e.append(t,i,n),document.body.append(e)}try{let d=function(h){requestAnimationFrame(d);let p=Math.max(0,(h-a)/1e3);if(a=h,u||(o+=Math.min(p,.5),o<1/s.s.settings.fps))return;let v=Math.min(o,5),b=Math.min(o,.08);o=0,n.started&&(s.tick(v),i.update(Math.min(v,.2)),r.update(b),l+=v,c+=v,l>=5&&(l=0,s.save()),c>=30&&(c=0,s.calendar())),t.update(b),n.update(b)},s=new Er,e={...s.s.position},t=new Uo(s,document.getElementById("world")),i=new Fo(s,t),n=new Oo(s,t,i),r=new Bo(s,t);t.paused=!0,t.allowed(e.x,e.z)&&(t.player.set(e.x,Math.max(0,e.y),e.z),t.yaw=e.yaw,t.pitch=e.pitch),document.documentElement.style.setProperty("--accent",s.s.settings.accent),document.body.classList.toggle("reduced",s.s.settings.reduced),new URLSearchParams(location.search).has("qa")&&(window.__NOVA={state:s,world:t,activities:i,ui:n,nodes:Lt,areas:lt});let a=performance.now(),o=0,l=0,c=0,u=!1;requestAnimationFrame(d),document.addEventListener("visibilitychange",()=>{u=document.hidden,u?(s.save(),t.keys={},r.ctx?.suspend()):(s.offline(),s.pendingOffline&&(n.notice("Offline energy collected: +"+s.fmt(s.pendingOffline.amount)),s.pendingOffline=null),a=performance.now(),o=0,n.started&&r.ctx?.resume())}),window.addEventListener("pagehide",()=>s.save()),window.addEventListener("beforeunload",()=>s.save()),document.getElementById("world").addEventListener("webglcontextlost",h=>{h.preventDefault(),n.notice("Graphics context lost. Save your progress and reload to restore the world.")}),document.body.dataset.ready="true"}catch(s){$g(s)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
