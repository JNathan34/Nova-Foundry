(()=>{var er="nova-foundry-3d-v2";var wn=[["power","Power","#6ad9ff","Manual energy and reactor control"],["auto","Automation","#77edbd","Machines, workers and passive income"],["luck","Fortune","#f4ce78","Critical energy and rare signals"],["offline","Offline","#aaa3ff","Storage and away-time production"],["rebirth","Rebirth","#f799c9","Faster, stronger new beginnings"],["explore","Exploration","#ffac79","Rooms, research and new worlds"]],Wh=[["Stronger pulse","Compression","Critical energy","Combo capacitor","Overcharged interaction","Critical mastery","Focused beam","Core resonance","Critical overload","Nuclear fingers","Plasma feedback","Hyperactive core","GOD TOUCH","Solar hands","Pulse echo","Reactor mastery"],["Basic automation","Faster generators","Improved machinery","Robot workers","AI management","Self-improving machines","Assembly line","Precision bearings","Autonomous empire","Machine empire","Quantum timing","Distributed network","FULL AUTOMATION","Machine learning","Clean energy","Industrial mastery"],["Lucky energy","Better criticals","Lucky generator","Golden signal","Jackpot energy","Fortune master","Stardust pockets","Lucky research","Impossible luck","Crystal magnet","Rare circuitry","Double salvage","GOLDEN UNIVERSE","Probability wave","Fortunate pulse","Fortune mastery"],["Offline production","Better storage","Efficient shutdown","Backup cells","Extended storage","Sleep mode","Coolant reserve","Battery farm","Eternal production","Deep sleep","Hibernate","Long-term archive","NEVER OFFLINE","Chrono vault","Time crystal","Storage mastery"],["Rebirth knowledge","Permanent energy","Faster recovery","Core affinity","Rebirth memory","Eternal skill","Quantum rhythm","Rapid reboot","Rebirth master","Ancestral spark","Machine memory","Clean restart","IMMORTAL CORE","Quantum yield","Core scientist","Prestige mastery"],["Facility expansion","Survey scanner","Research access","Factory logistics","Deep facility","Quantum access","Launch technology","Wayfinding","Orbital engineering","Planetary survey","Dimensional research","Fast travel network","MULTIVERSE ACCESS","Explorer insight","Research network","Frontier mastery"]],Xh={"power:0":["+10% manual energy per level.",{click:.1}],"power:1":["+25% manual energy.",{click:.25}],"power:3":["Maximum combo +1\xD7.",{combo:1}],"auto:1":["+15% passive income.",{passive:.15}],"auto:2":["+25% passive income.",{passive:.25}],"auto:4":["+50% passive income.",{passive:.5}],"luck:0":["+2% critical chance.",{crit:.02}],"luck:1":["Critical multiplier +5\xD7.",{critMult:5}],"rebirth:8":["+100% quantum yield.",{prestige:1}],"explore:1":["Shows uncollected energy shards on the minimap.",{scanner:1}],"power:2":["Critical interactions unlocked at 5% chance.",{critUnlock:1}],"power:4":["Every tenth interaction earns 5\xD7 energy.",{tenth:1}],"power:5":["+10% critical chance.",{crit:.1}],"power:8":["Critical multiplier +5\xD7.",{critMult:5}],"power:9":["Manual energy +500%.",{click:5}],"power:11":["Manual energy \xD710, passive energy \xD70.5.",{manualKeystone:1}],"power:12":["Manual energy \xD78.",{god:1}],"auto:0":["Unlocks machine production and construction.",{automation:1}],"auto:3":["Robot workers join the facility; +2 automatic pulses/sec.",{workers:1,autoClicks:2}],"auto:5":["Passive income grows +1% per active minute, up to +100%.",{selfImprove:1}],"auto:9":["Passive energy \xD75, manual energy \xD70.2.",{machineKeystone:1}],"auto:12":["Passive production \xD78.",{fullAuto:1}],"luck:2":["Machines have a 5% chance each second to produce a bonus tick.",{luckyMachine:1}],"luck:3":["Golden drones can visit your facility.",{golden:1}],"luck:4":["Each manual pulse has a 0.2% chance of a 100\xD7 jackpot.",{jackpot:1}],"luck:8":["Rare event rewards \xD72.",{rare:1}],"luck:9":["World shards can be collected from farther away.",{magnet:1}],"luck:12":["Critical chance +15%; event rewards \xD72.",{crit:.15,rare:1}],"offline:0":["Unlock offline earnings at 25% efficiency.",{offline:.25}],"offline:1":["Offline storage +4 hours.",{hours:4}],"offline:2":["Offline efficiency +25%.",{offline:.25}],"offline:4":["Offline storage +12 hours.",{hours:12}],"offline:5":["Offline efficiency +25%.",{offline:.25}],"offline:8":["Offline storage +24 hours (48h maximum).",{hours:24}],"offline:12":["Offline efficiency becomes 100%.",{neverOffline:1}],"rebirth:1":["Each rebirth starts with 500 extra energy.",{startEnergy:500}],"rebirth:4":["Keep 10% of each machine level through rebirth.",{memory:.1}],"rebirth:5":["Earn 3 extra Skill Points each rebirth.",{rebirthPoints:3}],"rebirth:10":["Start with one extra collector per rebirth.",{startMachine:1}],"rebirth:12":["Quantum core passive bonus doubles.",{immortal:1}],"explore:0":["Allows the Generator Hall to open at 250 run energy.",{access:1}],"explore:2":["Allows the Research Wing to open at 3K run energy.",{research:1}],"explore:3":["Allows the Factory to open at 1.5K run energy.",{factory:1}],"explore:4":["Allows the Deep Facility to open at 10K run energy.",{deep:1}],"explore:5":["Allows the Quantum Chamber to open at 25K run energy.",{quantum:1}],"explore:6":["Allows the Launch Platform to open at 100K run energy.",{launch:1}],"explore:8":["Allows the Orbital Station to open at 1M run energy.",{orbital:1}],"explore:9":["Allows the Alien Outpost to open at 10M run energy.",{planet:1}],"explore:10":["Allows the Dimensional Realm to open at 100M run energy.",{dimension:1}],"explore:11":["Overview network: +25% all energy. All open plots can always be focused.",{fastTravel:1,global:.25}],"explore:12":["New Reality becomes available after BREAK REALITY.",{multiverse:1}]},Ct=[],Yl=[[1,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3],[1,4],[0,5],[1,5],[2,5]],qh=[[],[0],[0],[0],[1],[2],[2],[3],[4],[5],[6],[7],[8,9,10],[12],[12],[12]];wn.forEach((s,e)=>Wh[e].forEach((t,i)=>{let n,r,a=Xh[s[0]+":"+i];if(a)[r,n]=a;else{let o=["click","passive","crit","offlineProduction","prestige","xp"][e],l=o==="crit"?.015:i>12?.3:.15;n={[o]:l},r=`+${Math.round(l*100)}% ${["manual energy","passive income","critical chance","offline-only production","quantum yield","XP gain"][e]} per level.`}Ct.push({id:`${s[0]}-${i}`,name:t,desc:r,branch:s[0],tree:"main",color:s[2],x:e*350+Yl[i][0]*76+36,y:140+Yl[i][1]*158,max:e===0&&i===0?10:a?1:5,cost:i===12?10:i>=8?3:i>=4?2:1,requires:qh[i].map(o=>`${s[0]}-${o}`),effects:n,keystone:[11,12].includes(i)})}));var $h=[["Quantum automation",["auto-4","power-5"],{luckyMachine:1,passive:.5},"Machine bonus ticks unlocked and +50% passive energy."],["Eternal reactor",["offline-8","rebirth-12"],{memory:.2},"Keep an additional 20% of machine levels after rebirth."],["Explorer drones",["auto-3","explore-4"],{dronePower:1},"Equipped drone bonuses double."],["Sleeping giant",["offline-5","power-9"],{offlineProduction:1},"Offline-only production +100%."],["Fortunate rebirth",["luck-8","rebirth-8"],{prestige:1},"Quantum yield +100%."],["Dimensional network",["explore-10","auto-12"],{global:2},"All energy +200%."]];$h.forEach((s,e)=>Ct.push({id:"cross-"+e,name:s[0],requires:s[1],effects:s[2],desc:s[3],tree:"main",branch:"cross",color:"#dce7ff",x:110+e*335,y:1220,max:1,cost:8,keystone:!0}));var Yh=[["Permanent production",{global:.1},"+10% all energy per level."],["Faster beginning",{startEnergy:1e4},"+10K starting energy per level."],["Core memory",{startMachine:1},"+1 starting collector per level."],["Quantum knowledge",{rebirthPoints:1},"+1 Skill Point per rebirth per level."],["Rebirth efficiency",{prestige:.15},"+15% quantum yield per level."],["Permanent criticals",{crit:.01},"+1% critical chance per level."],["Machine memory",{memory:.02},"Keep +2% machine levels per level."],["Quantum cooling",{click:.25},"+25% manual energy per level."],["Stellar factory",{passive:.25},"+25% passive energy per level."],["Timeless network",{hours:2},"+2h offline capacity per level, up to 48h."],["Ancestral fortune",{rare:.1},"+10% rare event rewards per level."],["Quantum architect",{global:.5},"+50% all energy per level."]];Yh.forEach((s,e)=>Ct.push({id:"q-"+e,name:s[0],effects:s[1],desc:s[2],tree:"quantum",branch:"quantum",color:"#f4ce78",x:180+e%3*220,y:130+Math.floor(e/3)*170,max:100,cost:1+Math.floor(e/3),requires:e<3?[]:["q-"+(e-3)],keystone:e>=9}));var Zh=[["Infinite energy",{global:2},"+200% all energy."],["Rebirth memory+",{memory:.2},"Keep +20% of machine levels."],["Dimensional production",{dimensionProduction:1},"+100% passive income per ascension."],["Temporal automation",{temporal:1},"Production continues during rebirth animations."],["Infinite knowledge",{levelPoints:1},"+1 additional Skill Point on future level-ups."],["Reality armour",{bossDamage:2},"+200% boss damage."],["Infinite storage",{neverOffline:1},"100% offline efficiency."],["BREAK REALITY",{breakReality:1},"Unlock New Reality at 3 ascensions with Multiverse Access."]];Zh.forEach((s,e)=>Ct.push({id:"a-"+e,name:s[0],effects:s[1],desc:s[2],tree:"ascension",branch:"ascension",color:"#c0a1ff",x:220+e%2*260,y:130+Math.floor(e/2)*180,max:1,cost:e===7?3:1,requires:e<2?[]:["a-"+(e-2)],keystone:e===7}));wn.forEach((s,e)=>[0,1].forEach(t=>Ct.push({id:`m-${e}-${t}`,name:s[1]+(t?" transcendence":" mastery"),desc:`+${t?40:20}% ${["manual energy","passive income","rare rewards","offline-only production","quantum yield","XP"][e]} per level. Unlimited research; costs increase each level.`,effects:{[["click","passive","rare","offlineProduction","prestige","xp"][e]]:t?.4:.2},tree:"mastery",branch:s[0],color:s[2],x:110+e*180,y:180+t*230,max:1e6,cost:t?5:3,requires:t?[`m-${e}-0`]:[],keystone:!!t})));var Rt=Object.fromEntries(Ct.map(s=>[s.id,s])),xt=[{id:"lab",name:"Origin Laboratory",x:0,z:0,need:0,flag:null,color:"#72d8ee",subtitle:"Where a universe begins."},{id:"generator",name:"Generator Hall",x:28,z:0,need:250,flag:"access",color:"#78edbc",subtitle:"The first step toward independence."},{id:"factory",name:"Robot Factory",x:56,z:0,need:1500,flag:"factory",color:"#f4c67b",subtitle:"An empire in motion."},{id:"research",name:"Research Wing",x:28,z:-28,need:3e3,flag:"research",color:"#a79df8",subtitle:"Curiosity becomes power."},{id:"quantum",name:"Quantum Chamber",x:56,z:-28,need:25e3,flag:"quantum",color:"#f49fcb",subtitle:"Beyond ordinary physics."},{id:"deep",name:"Deep Facility",x:0,z:-28,need:1e4,flag:"deep",color:"#67d7bf",subtitle:"Forgotten infrastructure. New possibilities."},{id:"launch",name:"Launch Platform",x:-28,z:0,need:1e5,flag:"launch",color:"#efb086",subtitle:"Your world is getting smaller."},{id:"orbital",name:"Orbital Station",x:-56,z:0,need:1e6,flag:"orbital",color:"#9ccdfc",subtitle:"A foundry among the stars."},{id:"planet",name:"Alien Outpost",x:-56,z:-28,need:1e7,flag:"planet",color:"#aeed9c",subtitle:"A different sun. The same ambition."},{id:"dimension",name:"Dimensional Realm",x:-28,z:-28,need:1e8,flag:"dimension",color:"#dc99ff",subtitle:"The edge of what is possible."}],di=[["collector","Energy collector","lab",20,1.15,1],["generator","Ion generator","generator",150,1.16,9],["fusion","Fusion engine","factory",1800,1.17,110],["research","Photon processor","research",12e3,1.18,800],["deep","Dark matter drill","deep",65e3,1.19,4500],["quantum","Quantum reactor","quantum",3e5,1.2,24e3],["launch","Stellar turbine","launch",2e6,1.2,17e4],["orbital","Dyson relay","orbital",2e7,1.21,18e5],["planet","Planetary engine","planet",3e8,1.22,3e7],["dimension","Dimensional engine","dimension",5e9,1.23,5e8]].map((s,e)=>({id:s[0],name:s[1],area:s[2],base:s[3],growth:s[4],rate:s[5],i:e})),zi=[["azure","Origin blue","#72d8ee","Common",0],["inferno","Inferno","#ff8658","Rare",20],["frozen","Frozen star","#c0f1ff","Rare",20],["toxic","Toxic glow","#a1ff72","Uncommon",12],["gold","Golden core","#ffd16b","Epic",35],["void","Void heart","#ae78fb","Legendary",60],["galaxy","Galaxy","#ff9ee2","Epic",40],["blackhole","Black hole","#7363c5","Mythic",80],["developer","Developer signal","#ddfc8b","Secret",-1],["reality","Reality core","#ffffff","Mythic",-1]];var Si=[["Maintenance drone","+5% passive income","#7decc0",20],["Lucky drone","+2% critical chance","#f7d477",25],["Mining drone","Periodic energy deliveries","#72d9f9",30],["Quantum drone","+10% quantum yield","#e49dd7",40],["Void drone","+8% all energy","#bd8aff",60]],tr=[["Cooling system","+10% manual energy","click"],["Power grid","+10% passive energy","passive"],["Network system","+1 automatic pulse/sec","autoClicks"],["Storage system","+1h offline capacity (48h maximum)","hours"],["Research network","+10% XP gain","xp"]],cn=[["Energy compression","+25% manual energy",1500,30,"click"],["Robot intelligence","+25% passive energy",7500,60,"passive"],["Quantum physics","+25% quantum yield",5e4,90,"prestige"],["Advanced materials","+25% all energy",25e4,120,"global"],["Dimensional science","+25% XP gain",1e6,180,"xp"]],ir=[["engineer","Chief engineer","Generate 100K lifetime energy","lifetime",1e5],["scientist","Dr. Lyra","Unlock 12 skill nodes","nodes",12],["technician","Technician Omi","Own 25 machine levels","machines",25],["explorer","Explorer Vega","Discover 6 facility areas","areas",6]],Zl=["Corrupted Core","Rogue AI","Quantum Guardian","Void Machine","Planet Eater","Dimensional Titan","Reality Breaker"];var dt=s=>Math.min(1e280,Math.max(0,Number.isFinite(s)?s:1e280));function Jl(s,e="short"){if(!Number.isFinite(s))return"MAX";if(s<1e3)return s<10?Number(s.toFixed(1)).toString():Math.floor(s).toLocaleString("en");if(e==="scientific")return s.toExponential(2);let t=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"],i=Math.floor(Math.log10(s)/3);return i<t.length?(s/1e3**i).toFixed(2).replace(/\.?0+$/,"")+t[i]:s.toExponential(2)}var Vi=s=>s>=3600?`${Math.floor(s/3600)}h ${Math.floor(s%3600/60)}m`:s>=60?`${Math.floor(s/60)}m ${Math.floor(s%60)}s`:`${Math.ceil(s)}s`;function Tn(){return{version:2,energy:0,lifetime:0,run:0,dust:0,tokens:0,cores:0,coreTotal:0,shards:0,xp:0,points:1,pointsEarned:1,rebirths:0,cycle:0,ascensions:0,reality:0,skills:{},firstSkills:[],machines:Array(10).fill(0),facility:Array(5).fill(0),research:Array(5).fill(0),researchJob:null,areas:["lab"],discovered:["lab"],collected:[],secrets:[],skins:["azure"],skin:"azure",outfit:0,droneCopies:Array(5).fill(0),droneLevels:Array(5).fill(0),equipped:[],slots:1,achievements:[],npcClaims:[],boosts:[],respecs:0,challenge:null,completedChallenges:[],last:Date.now(),position:{x:0,y:0,z:7,yaw:0,pitch:0},daily:{date:"",streak:0},quests:{day:"",week:"",daily:{},weekly:{},claims:[]},stats:{clicks:0,criticals:0,highest:0,passive:0,time:0,offline:0,purchases:0,games:0,wins:0,bosses:0,quests:0,events:0,npcTalks:0,memory:0,parkour:0,combo:1},settings:{view:"aerial",quality:"high",particles:!0,bloom:!0,shadows:!0,antialias:!0,lighting:!0,renderDistance:150,motionBlur:!1,shake:!0,bob:!0,reduced:!1,fps:60,sensitivity:1,sound:!0,music:!1,master:.4,sfx:.5,musicVolume:.18,notation:"short",accent:"#3f7861",machineColor:"#6f8fa5",trail:!0,tutorial:!0}}}var nr=class{constructor(){this.s=Tn(),this.listeners=[],this.fx={},this.combo=0,this.lastClick=0,this.lastProductionRoll=0,this.lastMining=0,this.resetting=!1,this.storageFailed=!1,this.achDefs=this.makeAchievements(),this.load(),this.calendar(),this.recompute()}on(e){this.listeners.push(e)}emit(e,t){this.listeners.forEach(i=>i(e,t))}notice(e){this.emit("notice",e)}get level(){return 1+Math.floor(Math.sqrt(this.s.xp/35))}fmt(e){return Jl(e,this.s.settings.notation)}recompute(){let e={};for(let[t,i]of Object.entries(this.s.skills)){let n=Rt[t];if(n)for(let[r,a]of Object.entries(n.effects))e[r]=(e[r]||0)+a*i}this.s.facility.forEach((t,i)=>{let n=tr[i][2];e[n]=(e[n]||0)+t*(i===2||i===3?1:.1)}),this.s.research.forEach((t,i)=>{let n=cn[i][4];e[n]=(e[n]||0)+t*.25}),this.fx=e,this.emit("change")}buff(e){return this.s.boosts.filter(t=>t.type===e&&t.end>Date.now()).reduce((t,i)=>Math.max(t,i.mult),1)}drone(e){return this.s.equipped.includes(e)?(1+this.s.droneLevels[e]*.5)*(1+(this.fx.dronePower||0)):0}get global(){return dt((1+this.s.coreTotal*.08*(this.fx.immortal?2:1))*(1+this.s.ascensions*2)*(1+this.s.reality*10)*(1+(this.fx.global||0))*(1+this.s.achievements.length*.005)*(1+this.s.completedChallenges.length*.1)*(1+.08*this.drone(4))*(this.s.skin==="gold"?1.02:1)*this.buff("all"))}get manual(){let e=(1+(this.fx.click||0))*this.global*this.buff("click");return this.fx.manualKeystone&&(e*=10),this.fx.machineKeystone&&(e*=.2),this.fx.god&&(e*=8),dt(e)}get crit(){return Math.min(.85,(this.fx.critUnlock?.05:0)+(this.fx.crit||0)+this.drone(1)*.02+(this.buff("luck")>1?.3:0))}get critMult(){return 5+(this.fx.critMult||0)}milestone(e){return 2**[10,25,50,100,250,500,1e3].filter(t=>e>=t).length}machineRate(e){return dt(this.s.machines[e]*di[e].rate*this.milestone(this.s.machines[e]))}get passive(){if(!this.fx.automation||this.s.challenge?.id==="manual")return 0;let e=this.s.machines.reduce((t,i,n)=>dt(t+this.machineRate(n)),0)*(1+(this.fx.passive||0))*this.global*(1+this.drone(0)*.05)*this.buff("passive");return this.fx.selfImprove&&(e*=1+Math.min(1,this.s.stats.time/6e3)),this.fx.machineKeystone&&(e*=5),this.fx.manualKeystone&&(e*=.5),this.fx.fullAuto&&(e*=8),this.fx.dimensionProduction&&(e*=1+this.s.ascensions*this.fx.dimensionProduction),this.s.challenge?.id==="instability"&&(e*=1+.7*Math.sin(this.s.stats.time)),dt(e)}get auto(){return this.s.challenge?.id==="manual"?0:dt((this.fx.autoClicks||0)*this.manual)}get cps(){return dt(this.passive+this.auto)}get offlineEfficiency(){return this.fx.neverOffline?1:Math.min(1,this.fx.offline||0)}get offlineHours(){return Math.min(48,8+(this.fx.hours||0))}gain(e,t=!1){e=dt(e);for(let i of["energy","lifetime","run"])this.s[i]=dt(this.s[i]+e);t&&(this.s.stats.passive=dt(this.s.stats.passive+e)),this.q("earn",e),this.s.challenge&&(this.s.challenge.earned=dt(this.s.challenge.earned+e))}xp(e){let t=this.level;this.s.xp=dt(this.s.xp+e*(1+(this.fx.xp||0))*this.buff("xp"));let i=this.level-t;if(i){let n=i*(1+(this.fx.levelPoints||0));for(let r=t+1;r<=this.level;r++)r%10===0&&(n+=3);this.addPoints(n),this.s.dust+=i,this.q("level",i),this.notice(`Level ${this.level} \xB7 +${n} Skill Points`),this.emit("level")}}addPoints(e){this.s.points+=e,this.s.pointsEarned+=e}pulse(){if(this.s.challenge?.id==="machine")return{value:0,critical:!1};let e=performance.now();this.combo=Math.min(100,this.combo+(e-this.lastClick<550?8:3)),this.lastClick=e;let t=Math.random()<this.crit;this.s.stats.clicks++;let i=this.manual*(1+this.combo/100*(2+(this.fx.combo||0)))*(t?this.critMult:1);return this.fx.tenth&&this.s.stats.clicks%10===0&&(i*=5),this.fx.jackpot&&Math.random()<.002&&(i*=100,this.notice("JACKPOT PULSE \xB7 100\xD7 energy")),this.gain(i),this.s.stats.highest=Math.max(this.s.stats.highest,dt(i)),this.s.stats.combo=Math.max(this.s.stats.combo,1+this.combo/50),this.q("click"),t&&(this.s.stats.criticals++,this.q("crit")),this.xp(4),this.emit("pulse",{value:dt(i),critical:t}),{value:dt(i),critical:t}}nodeCost(e){let t=this.s.skills[e.id]||0;return e.tree==="mastery"?Math.ceil(e.cost*(1+t*.35)):e.tree==="quantum"?Math.ceil(e.cost*1.35**t):e.cost}available(e){if((this.s.skills[e.id]||0)>=e.max||e.tree==="quantum"&&!this.s.rebirths||e.tree==="ascension"&&!this.s.ascensions||e.tree==="mastery"&&this.level<100)return!1;if(this.s.challenge?.id==="branch"&&e.tree==="main"&&e.branch!=="cross"){let t=new Set(Object.keys(this.s.skills).filter(i=>Rt[i]?.tree==="main").map(i=>Rt[i].branch));if(t.size&&!t.has(e.branch))return!1}return e.requires.every(t=>(this.s.skills[t]||0)>0)}skillBuy(e){let t=Rt[e];if(!t||!this.available(t))return!1;let i=t.tree==="quantum"?"cores":t.tree==="ascension"?"shards":"points",n=this.nodeCost(t);return this.s[i]<n?!1:(this.s[i]-=n,this.s.skills[e]=(this.s.skills[e]||0)+1,this.s.firstSkills.includes(e)||(this.s.firstSkills.push(e),this.xp(8),this.q("node")),this.recompute(),this.notice(`${t.name} \xB7 level ${this.s.skills[e]}`),this.emit("skill",e),this.progress(),this.save(),!0)}respec(){if(this.s.respecs&&this.s.dust<25)return!1;let e=Object.keys(this.s.skills).filter(i=>Rt[i].tree==="main"),t=0;return e.forEach(i=>{t+=this.s.skills[i]*Rt[i].cost,delete this.s.skills[i]}),this.s.respecs&&(this.s.dust-=25),this.s.points+=t,this.s.respecs++,this.recompute(),this.s.areas=["lab"],this.progress(),this.emit("teleport","lab"),this.notice(`${t} Skill Points refunded`),this.save(),!0}quote(e,t=1){let i=di[e],n=this.s.machines[e],r=1e4-n,a=l=>dt(i.base*i.growth**n*(i.growth**l-1)/(i.growth-1)),o=Math.min(t==="max"?r:t,r);if(t==="max"){let l=0,c=r;for(;l<c;){let u=Math.ceil((c+l)/2);a(u)<=this.s.energy?l=u:c=u-1}o=l}return{n:o,cost:o?a(o):0}}buyMachine(e,t){if(!this.fx.automation||!this.s.areas.includes(di[e].area))return!1;let i=this.quote(e,t);return i.n<1||this.s.energy<i.cost?!1:(this.s.energy-=i.cost,this.s.machines[e]+=i.n,this.s.stats.purchases+=i.n,this.q("buy",i.n),this.xp(i.n*6),this.emit("machine",e),this.progress(),!0)}facilityBuy(e){let t=1e3*2**this.s.facility[e];this.s.energy<t||this.s.facility[e]>=50||(this.s.energy-=t,this.s.facility[e]++,this.recompute(),this.emit("world"),this.xp(15))}startResearch(e){if(this.s.researchJob)return;let t=cn[e],i=t[2]*2**this.s.research[e];this.s.energy<i||this.s.research[e]>=20||(this.s.energy-=i,this.s.researchJob={i:e,end:Date.now()+t[3]*1e3},this.notice("Research started \xB7 "+t[0]),this.emit("change"))}get rebirthRequirement(){return 1e6*Math.pow(1.15,this.s.cycle)}get rebirthGain(){return Math.floor(Math.sqrt(this.s.run/this.rebirthRequirement)*(1+(this.fx.prestige||0))*(1+.1*this.drone(3)))}performRebirth(){if(this.s.run<this.rebirthRequirement)return 0;let e=this.rebirthGain;this.s.cores+=e,this.s.coreTotal+=e,this.s.rebirths++,this.s.cycle++,this.addPoints(2+(this.fx.rebirthPoints||0)),this.s.energy=this.fx.startEnergy||0,this.s.run=0;let t=Math.min(.8,this.fx.memory||0);return this.s.machines=this.s.machines.map(i=>Math.floor(i*t)),this.s.machines[0]+=this.fx.startMachine||0,this.s.facility.fill(0),this.s.areas=["lab"],this.s.boosts=[],this.s.challenge=null,this.s.researchJob=null,this.combo=0,this.q("rebirth"),this.xp(150),this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.progress(),this.save(),e}ascend(){if(this.s.cycle<10)return!1;this.s.ascensions++,this.s.shards+=3,this.s.cycle=0,this.s.cores=0,this.s.coreTotal=0;for(let e of Object.keys(this.s.skills))Rt[e].tree==="quantum"&&delete this.s.skills[e];return this.s.energy=0,this.s.run=0,this.s.machines.fill(0),this.s.facility.fill(0),this.s.research.fill(0),this.s.researchJob=null,this.s.boosts=[],this.s.challenge=null,this.s.areas=["lab"],this.addPoints(5),this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.progress(),this.save(),!0}newReality(){if(this.s.ascensions<3||!this.fx.breakReality||!this.fx.multiverse)return!1;let e=this.s;return this.s=Tn(),this.s.reality=e.reality+1,this.s.skins=[...new Set([...e.skins,"reality"])],this.s.skin="reality",this.s.settings=e.settings,this.s.achievements=e.achievements,this.s.stats=e.stats,this.s.lifetime=e.lifetime,this.s.secrets=e.secrets,this.s.points=6+this.s.reality*2,this.s.pointsEarned=this.s.points,this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.notice("NEW REALITY \xB7 All-energy multiplier increased"),this.save(),!0}challengeStart(e){if(this.s.challenge={id:e,start:Date.now(),earned:0},this.s.energy=0,this.s.run=0,this.s.machines.fill(0),this.s.boosts=[],e==="machine"&&(this.s.machines[0]=1,!this.fx.automation)){this.s.challenge=null,this.notice("Unlock Basic automation first.");return}this.emit("world"),this.emit("teleport","lab")}addBoost(e,t,i){let n=this.s.boosts.find(r=>r.type===e&&r.mult===t);n?n.end=Math.max(Date.now(),n.end)+i*1e3:this.s.boosts.push({type:e,mult:t,end:Date.now()+i*1e3}),this.emit("change")}collect(e){this.s.collected.includes(e)||(this.s.collected.push(e),this.s.dust+=2,this.xp(15),this.q("shard"),this.s.collected.length%5===0&&this.addPoints(1),this.s.collected.length>=50&&this.unlockSkin("reality"),this.notice(`Energy shard ${this.s.collected.length}/50 \xB7 +2 stardust`),this.emit("collected",e),this.progress())}secret(e){this.s.secrets.includes(e)||(this.s.secrets.push(e),this.addPoints(2),this.s.dust+=10,this.notice("Hidden discovery \xB7 +2 Skill Points \xB7 +10 stardust"),e==="terminal"&&this.unlockSkin("developer"),this.progress())}unlockSkin(e){this.s.skins.includes(e)||(this.s.skins.push(e),this.notice("Reactor skin unlocked \xB7 "+zi.find(t=>t[0]===e)[1]))}buySkin(e){let t=zi.find(i=>i[0]===e);if(t){if(!this.s.skins.includes(e)){if(t[4]<0||this.s.dust<t[4])return;this.s.dust-=t[4],this.unlockSkin(e)}this.s.skin=e,this.emit("world")}}droneBuy(e){this.s.dust<Si[e][3]||(this.s.dust-=Si[e][3],this.s.droneCopies[e]++,!this.s.equipped.includes(e)&&this.s.equipped.length<this.s.slots&&this.s.equipped.push(e),this.emit("world"))}droneFuse(e){this.s.droneCopies[e]<3||this.s.droneLevels[e]>=10||(this.s.droneCopies[e]-=2,this.s.droneLevels[e]++,this.notice("Drone evolved \xB7 "+Si[e][0]),this.emit("world"))}npcTalk(e){return this.s.stats.npcTalks++,this.s.stats.npcTalks>=100&&this.secret("social"),ir.find(t=>t[0]===e)}npcValue(e){return e[3]==="lifetime"?this.s.lifetime:e[3]==="nodes"?Object.keys(this.s.skills).length:e[3]==="machines"?this.s.machines.reduce((t,i)=>t+i,0):this.s.discovered.length}npcClaim(e){let t=ir.find(i=>i[0]===e);!t||this.npcValue(t)<t[4]||this.s.npcClaims.includes(e)||(this.s.npcClaims.push(e),this.addPoints(3),this.s.dust+=15,this.s.stats.quests++,this.xp(100),this.notice("Assignment complete \xB7 +3 Skill Points \xB7 +15 stardust"))}calendar(){let e=new Date,t=e.toISOString().slice(0,10);e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+6)%7);let i=e.toISOString().slice(0,10);return this.s.quests.day!==t&&(this.s.quests.day=t,this.s.quests.daily={},this.s.quests.claims=this.s.quests.claims.filter(n=>n.startsWith("w"))),this.s.quests.week!==i&&(this.s.quests.week=i,this.s.quests.weekly={},this.s.quests.claims=this.s.quests.claims.filter(n=>n.startsWith("d"))),t}q(e,t=1){for(let i of["daily","weekly"])this.s.quests[i][e]=dt((this.s.quests[i][e]||0)+t)}missions(){return[["d0","daily","earn",1e7,"Generate 10M energy"],["d1","daily","buy",25,"Buy 25 machine levels"],["d2","daily","node",2,"Unlock 2 skill nodes"],["d3","daily","game",1,"Complete a minigame"],["d4","daily","shard",3,"Find 3 energy shards"],["w0","weekly","rebirth",5,"Rebirth 5 times"],["w1","weekly","boss",10,"Defeat 10 bosses"],["w2","weekly","game",20,"Complete 20 minigames"],["w3","weekly","level",20,"Gain 20 levels"]]}claimMission(e){let t=this.missions().find(n=>n[0]===e);if(!t||this.s.quests.claims.includes(e)||(this.s.quests[t[1]][t[2]]||0)<t[3])return;this.s.quests.claims.push(e);let i=t[1]==="daily"?1:3;this.addPoints(i),this.s.dust+=i*5,this.s.stats.quests++,this.xp(i*50),this.notice(`Mission complete \xB7 +${i} Skill Points`)}dailyClaim(){let e=this.calendar();if(this.s.daily.date===e)return!1;let t=new Date(Date.now()-864e5).toISOString().slice(0,10);this.s.daily.streak=this.s.daily.date===t?this.s.daily.streak+1:1,this.s.daily.date=e;let i=(this.s.daily.streak-1)%7+1;return i===1&&this.gain(Math.max(100,this.cps*60)),i===2&&this.addBoost("all",2,300),i===3&&this.xp(200),i===4&&(this.s.tokens+=20),i===5&&this.s.droneCopies[0]++,i===6&&(this.s.cores++,this.s.coreTotal++),i===7&&(this.unlockSkin("galaxy"),this.s.dust+=25),this.notice("Day "+i+" supply claimed"),this.save(),!0}progress(){for(let e of xt)!this.s.areas.includes(e.id)&&this.s.run>=e.need&&(!e.flag||this.fx[e.flag])&&(this.s.areas.push(e.id),this.s.discovered.includes(e.id)||(this.s.discovered.push(e.id),this.xp(60),this.addPoints(1)),this.notice("AREA UNLOCKED \xB7 "+e.name),this.emit("area",e.id));for(let e of this.achDefs)!this.s.achievements.includes(e.id)&&e.value()>=e.goal&&(this.s.achievements.push(e.id),this.s.dust+=e.reward,this.s.achievements.length%5===0&&this.addPoints(1),this.notice("Achievement \xB7 "+e.name));if(this.s.rebirths>=1&&this.unlockSkin("toxic"),this.s.rebirths>=10&&this.unlockSkin("void"),this.s.ascensions>=1&&this.unlockSkin("blackhole"),this.level>=50&&this.unlockSkin("frozen"),this.s.challenge){let e=this.s.challenge;e.earned>=1e6?(this.s.completedChallenges.includes(e.id)||(this.s.completedChallenges.push(e.id),this.addPoints(3)),this.s.dust+=20,this.s.challenge=null,this.notice("Challenge complete \xB7 +20 stardust")):e.id==="speed"&&Date.now()-e.start>18e4&&(this.s.challenge=null,this.notice("Speed challenge expired."))}}tick(e){if((!this.resetting||this.fx.temporal)&&this.gain(this.cps*e,!0),this.s.stats.time+=e,performance.now()-this.lastClick>450&&(this.combo=Math.max(0,this.combo-e*16)),this.lastProductionRoll+=e,this.lastProductionRoll>=1&&(this.lastProductionRoll=0,this.fx.luckyMachine&&Math.random()<.05&&this.gain(this.passive,!0),this.progress()),this.lastMining+=e,this.lastMining>=60&&(this.lastMining=0,this.drone(2)&&(this.gain(Math.max(100,this.cps*10)*this.drone(2)),this.notice("Mining drone delivered an energy cache"))),this.s.researchJob&&Date.now()>=this.s.researchJob.end){let t=this.s.researchJob.i;this.s.research[t]++,this.s.researchJob=null,this.recompute(),this.xp(80),this.notice("Research complete \xB7 "+cn[t][0])}}makeAchievements(){let e=[],t=(i,n,r,a)=>r.forEach((o,l)=>e.push({id:i+l,name:`${n} ${l+1}`,goal:o,value:a,reward:2+l,desc:`${n} \xB7 ${Jl(o)}`}));return t("energy","Energy pioneer",[1,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e12,1e15,1e18],()=>this.s.lifetime),t("click","Pulse technician",[10,100,500,1e3,5e3,1e4,5e4,1e5,1e6],()=>this.s.stats.clicks),t("machine","Industrial revolution",[1,10,25,50,100,250,500,1e3],()=>this.s.machines.reduce((i,n)=>i+n,0)),t("node","Knowledge is power",[1,5,10,25,50,75,100,130],()=>Object.keys(this.s.skills).length),t("rebirth","Reborn",[1,3,5,10,25,50,100],()=>this.s.rebirths),t("area","Explorer",[2,3,5,7,10],()=>this.s.discovered.length),t("shard","Crystal collector",[1,5,10,25,50],()=>this.s.collected.length),t("boss","Boss slayer",[1,3,7,10,25,50],()=>this.s.stats.bosses),t("game","Arcade regular",[1,5,10,25,50,100],()=>this.s.stats.games),t("crit","Critical thinker",[10,100,1e3,1e4],()=>this.s.stats.criticals),t("time","Dedicated engineer",[600,3600,18e3],()=>this.s.stats.time),t("asc","Ascended",[1,3,10],()=>this.s.ascensions),e.push({id:"memory",name:"Perfect stabilisation",goal:8,value:()=>this.s.stats.memory,reward:15,desc:"Complete eight stabilisation rounds."},{id:"secret",name:"Under the surface",goal:3,value:()=>this.s.secrets.length,reward:20,desc:"Find three world secrets."},{id:"reality",name:"Reality breaker",goal:1,value:()=>this.s.reality,reward:30,desc:"Enter a New Reality."}),e}validate(e){if(e?.version===1)return this.migrate(e);if(!e||e.version!==2)throw Error("This is not a Nova Foundry 3D save.");let t=Tn(),i=(o,l=1e280,c=!1)=>{if(typeof o!="number"||!Number.isFinite(o)||o<0||o>l||c&&!Number.isInteger(o))throw Error("Invalid numeric data in save.");return o};for(let o of["energy","lifetime","run","dust","tokens","cores","coreTotal","shards","xp","points","pointsEarned","rebirths","cycle","ascensions","reality","respecs","last"])t[o]=i(e[o]);for(let o of["machines","facility","research","droneCopies","droneLevels"]){if(!Array.isArray(e[o])||e[o].length!==t[o].length)throw Error("Invalid array: "+o);t[o]=e[o].map(l=>i(l,o==="machines"?1e4:o==="droneLevels"?10:1e6,!0))}if(!e.skills||typeof e.skills!="object")throw Error("Missing skills.");for(let[o,l]of Object.entries(e.skills)){if(!Rt[o])throw Error("Unknown skill.");t.skills[o]=i(l,Rt[o].max,!0)}let n={firstSkills:Ct.map(o=>o.id),areas:xt.map(o=>o.id),discovered:xt.map(o=>o.id),skins:zi.map(o=>o[0]),equipped:[0,1,2,3,4],achievements:this.achDefs.map(o=>o.id),npcClaims:ir.map(o=>o[0]),completedChallenges:["manual","machine","instability","speed","branch"],secrets:["reactortop","tunnel","terminal","social","hidden"]};for(let[o,l]of Object.entries(n)){if(!Array.isArray(e[o]))throw Error("Missing "+o);t[o]=[...new Set(e[o].filter(c=>l.includes(c)))]}if(!Array.isArray(e.collected))throw Error("Missing shard data.");t.collected=[...new Set(e.collected.map(o=>i(o,49,!0)))],t.slots=i(e.slots,3,!0)||1,t.equipped=t.equipped.filter(o=>t.droneCopies[o]>0).slice(0,t.slots),t.skin=t.skins.includes(e.skin)?e.skin:"azure",t.skins.includes("azure")||t.skins.push("azure"),t.outfit=i(e.outfit,7,!0);for(let o of Object.keys(t.stats))t.stats[o]=i(e.stats?.[o]);for(let o of Object.keys(t.settings)){let l=e.settings?.[o];typeof t.settings[o]=="boolean"&&typeof l=="boolean"&&(t.settings[o]=l)}for(let o of["master","sfx","musicVolume"])t.settings[o]=i(e.settings?.[o],1);t.settings.sensitivity=i(e.settings?.sensitivity,3);let r={view:["aerial"],quality:["low","medium","high","ultra"],notation:["short","scientific"],fps:[30,60,120],renderDistance:[75,150,250],accent:["#3f7861","#416e82","#796489","#8b743c"],machineColor:["#6f8fa5","#bf815e","#849a71","#9982b2"]};for(let[o,l]of Object.entries(r))l.includes(e.settings?.[o])&&(t.settings[o]=e.settings[o]);let a=o=>typeof o=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(o)?o:"";t.daily={date:a(e.daily?.date),streak:i(e.daily?.streak??0,1e6,!0)},t.quests.day=a(e.quests?.day),t.quests.week=a(e.quests?.week);for(let o of["daily","weekly"])for(let l of["earn","click","crit","buy","node","game","shard","rebirth","boss","level"])t.quests[o][l]=i(e.quests?.[o]?.[l]??0);if(t.quests.claims=(e.quests?.claims||[]).filter(o=>this.missions().some(l=>l[0]===o)),!Array.isArray(e.boosts)||e.boosts.length>50)throw Error("Invalid boosts.");if(t.boosts=e.boosts.map(o=>{if(!["all","click","passive","xp","luck"].includes(o.type))throw Error("Invalid boost type.");return{type:o.type,mult:i(o.mult,10),end:i(o.end,Date.now()+7*864e5)}}),e.researchJob&&(t.researchJob={i:i(e.researchJob.i,4,!0),end:i(e.researchJob.end,Date.now()+864e5)}),e.challenge&&["manual","machine","instability","speed","branch"].includes(e.challenge.id)&&(t.challenge={id:e.challenge.id,start:i(e.challenge.start,Date.now()+864e5),earned:i(e.challenge.earned)}),e.position)for(let o of["x","y","z","yaw","pitch"]){let l=e.position[o];typeof l=="number"&&Number.isFinite(l)&&Math.abs(l)<1e3&&(t.position[o]=l)}return t}migrate(e){let t=Tn();for(let i of["energy","lifetime","run","xp","cores","coreTotal","tokens","rebirths","ascensions"]){if(typeof e[i]!="number"||!Number.isFinite(e[i])||e[i]<0)throw Error("Invalid classic save.");t[i]=dt(e[i])}return t.dust=dt(e.gems||0),t.points=1+Math.floor(Math.sqrt(t.xp/35))+t.rebirths*2,t.pointsEarned=t.points,t.machines[0]=Math.min(1e4,Math.max(0,Math.floor(e.generators?.[0]||0))),t.machines[0]&&(t.skills["auto-0"]=1),t.stats.clicks=dt(e.stats?.clicks||0),t}offline(){this.recompute();let e=Math.min(this.offlineHours*3600,Math.max(0,(Date.now()-this.s.last)/1e3)),t=this.s.boosts;this.s.boosts=[];let i=this.cps*e*this.offlineEfficiency*(1+(this.fx.offlineProduction||0));this.s.boosts=t.filter(n=>n.end>Date.now()),e>20&&i>0&&(this.gain(i,!0),this.s.stats.offline=dt(this.s.stats.offline+i),this.pendingOffline={seconds:e,amount:dt(i)}),this.s.last=Date.now()}save(){this.s.last=Date.now();try{localStorage.setItem(er,JSON.stringify(this.s)),this.storageFailed=!1}catch{this.storageFailed||this.notice("Browser storage unavailable. Export your save from Settings."),this.storageFailed=!0}}load(){try{let e=localStorage.getItem(er);e&&(this.s=this.validate(JSON.parse(e)),this.offline())}catch{this.loadError="Your stored save could not be loaded. A fresh session is ready. Use Import to restore a backup."}}import(e){let t=this.validate(JSON.parse(e));try{localStorage.setItem(er+"-backup",JSON.stringify(this.s))}catch{}this.s=t,this.calendar(),this.offline(),this.recompute(),this.progress(),this.emit("world"),this.emit("teleport","lab"),this.save()}};var Mc=0,Zo=1,Sc=2;var ks=1,ha=2,ts=3,Pi=0,zt=1,ei=2,vi=0,gn=1,Jo=2,Ko=3,jo=4,Ec=5;var Zi=100,wc=101,Tc=102,Ac=103,Cc=104,Rc=200,Ic=201,Pc=202,Lc=203,Cr=204,Rr=205,Dc=206,Nc=207,Uc=208,Fc=209,Oc=210,Bc=211,kc=212,zc=213,Vc=214,Ir=0,Pr=1,Lr=2,xn=3,Dr=4,Nr=5,Ur=6,Fr=7,Qo=0,Gc=1,Hc=2,ai=0,el=1,tl=2,il=3,zs=4,nl=5,sl=6,rl=7;var al=300,nn=301,yn=302,ua=303,da=304,Vs=306,Wn=1e3,mi=1001,Or=1002,Tt=1003,Wc=1004;var Gs=1005;var Pt=1006,fa=1007;var sn=1008;var Wt=1009,ol=1010,ll=1011,is=1012,pa=1013,oi=1014,li=1015,yi=1016,ma=1017,ga=1018,ns=1020,cl=35902,hl=35899,ul=1021,dl=1022,ti=1023,gi=1026,rn=1027,fl=1028,xa=1029,an=1030,_a=1031;var va=1033,Hs=33776,Ws=33777,Xs=33778,qs=33779,ya=35840,ba=35841,Ma=35842,Sa=35843,Ea=36196,wa=37492,Ta=37496,Aa=37488,Ca=37489,$s=37490,Ra=37491,Ia=37808,Pa=37809,La=37810,Da=37811,Na=37812,Ua=37813,Fa=37814,Oa=37815,Ba=37816,ka=37817,za=37818,Va=37819,Ga=37820,Ha=37821,Wa=36492,Xa=36494,qa=36495,$a=36283,Ya=36284,Ys=36285,Za=36286;var ps=2300,Br=2301,Ar=2302,ko=2303,zo=2400,Vo=2401,Go=2402;var Xc=3200;var Ja=0,qc=1,Ui="",It="srgb",ms="srgb-linear",gs="linear",Ze="srgb";var pn=7680;var Ho=519,$c=512,Yc=513,Zc=514,Ka=515,Jc=516,Kc=517,ja=518,jc=519,kr=35044;var pl="300 es",ri=2e3,Xn=2001;function Jh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kh(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qc(){let s=xs("canvas");return s.style.display="block",s}var jl={},qn=null;function _s(...s){let e="THREE."+s.shift();qn?qn("log",e,...s):console.log(e,...s)}function eh(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=eh(s);let e="THREE."+s.shift();if(qn)qn("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ae(...s){s=eh(s);let e="THREE."+s.shift();if(qn)qn("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function mn(...s){let e=s.join(" ");e in jl||(jl[e]=!0,Ie(...s))}function th(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ih={[Ir]:Pr,[Lr]:Ur,[Dr]:Fr,[xn]:Nr,[Pr]:Ir,[Ur]:Lr,[Fr]:Dr,[Nr]:xn},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var po=Math.PI/180,zr=180/Math.PI;function Yi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ge(s,e,t){return Math.max(e,Math.min(t,s))}function jh(s,e){return(s%e+e)%e}function mo(s,e,t){return(1-t)*s+t*e}function pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vl=class vl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vl.prototype.isVector2=!0;var Pe=vl,_i=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],d=i[n+3],h=r[a+0],p=r[a+1],_=r[a+2],b=r[a+3];if(d!==b||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+d*b;m<0&&(h=-h,p=-p,_=-_,b=-b,m=-m);let f=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);f=Math.sin(f*M)/A,o=Math.sin(o*M)/A,l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+b*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+b*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],d=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*h,e[t+1]=l*_+u*h+c*d-o*p,e[t+2]=c*_+u*p+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),d=o(r/2),h=l(i/2),p=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yl=class yl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=n+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yl.prototype.isVector3=!0;var U=yl,go=new U,Ql=new _i,bl=class bl{constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],b=n[0],m=n[3],f=n[6],M=n[1],A=n[4],y=n[7],T=n[2],S=n[5],C=n[8];return r[0]=a*b+o*M+l*T,r[3]=a*m+o*A+l*S,r[6]=a*f+o*y+l*C,r[1]=c*b+u*M+d*T,r[4]=c*m+u*A+d*S,r[7]=c*f+u*y+d*C,r[2]=h*b+p*M+_*T,r[5]=h*m+p*A+_*S,r[8]=h*f+p*y+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*d+i*h+n*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=d*b,e[1]=(n*c-u*i)*b,e[2]=(o*i-n*a)*b,e[3]=h*b,e[4]=(u*t-n*l)*b,e[5]=(n*r-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return mn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(e,t)),this}rotate(e){return mn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return mn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bl.prototype.isMatrix3=!0;var De=bl,xo=new De,ec=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qh(){let s={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(n.r=Ii(n.r),n.g=Ii(n.g),n.b=Ii(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(n.r=Hn(n.r),n.g=Hn(n.g),n.b=Hn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?gs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return mn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return mn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ms]:{primaries:e,whitePoint:i,transfer:gs,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:Ze,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}var Ve=Qh();function Ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var An,Vr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{An===void 0&&(An=xs("canvas")),An.width=e.width,An.height=e.height;let n=An.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=An}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eu=0,$n=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(_o(n[a].image)):r.push(_o(n[a]))}else r=_o(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function _o(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var tu=0,vo=new U,kt=class s extends xi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=mi,n=mi,r=Pt,a=sn,o=ti,l=Wt,c=s.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Yi(),this.name="",this.source=new $n(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=al;kt.DEFAULT_ANISOTROPY=1;var Ml=class Ml{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(p+1)/2,T=(f+1)/2,S=(u+h)/4,C=(d+b)/4,x=(_+m)/4;return A>y&&A>T?A<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(A),n=S/i,r=C/i):y>T?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=S/n,r=x/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=C/r,n=x/r),this.set(i,n,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(d-b)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ml.prototype.isVector4=!0;var ot=Ml,Gr=class extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},r=new kt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $n(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Gr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vs=class extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ca=class ca{constructor(e,t,i,n,r,a,o,l,c,u,d,h,p,_,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,d,h,p,_,b,m)}set(e,t,i,n,r,a,o,l,c,u,d,h,p,_,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Cn.setFromMatrixColumn(e,0).length(),r=1/Cn.setFromMatrixColumn(e,1).length(),a=1/Cn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*d,_=o*u,b=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,_=c*u,b=c*d;t[0]=h+b*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,_=c*u,b=c*d;t[0]=h-b*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*d,_=o*u,b=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+b,t[1]=l*d,t[5]=b*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=b-h*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=h-b*d}else if(e.order==="XZY"){let h=a*l,p=a*c,_=o*l,b=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+b,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=b*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iu,e,nu)}lookAt(e,t,i){let n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Gi.crossVectors(i,qt),Gi.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Gi.crossVectors(i,qt)),Gi.normalize(),sr.crossVectors(qt,Gi),n[0]=Gi.x,n[4]=sr.x,n[8]=qt.x,n[1]=Gi.y,n[5]=sr.y,n[9]=qt.y,n[2]=Gi.z,n[6]=sr.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],b=i[6],m=i[10],f=i[14],M=i[3],A=i[7],y=i[11],T=i[15],S=n[0],C=n[4],x=n[8],E=n[12],R=n[1],I=n[5],D=n[9],W=n[13],q=n[2],O=n[6],H=n[10],G=n[14],K=n[3],Q=n[7],he=n[11],me=n[15];return r[0]=a*S+o*R+l*q+c*K,r[4]=a*C+o*I+l*O+c*Q,r[8]=a*x+o*D+l*H+c*he,r[12]=a*E+o*W+l*G+c*me,r[1]=u*S+d*R+h*q+p*K,r[5]=u*C+d*I+h*O+p*Q,r[9]=u*x+d*D+h*H+p*he,r[13]=u*E+d*W+h*G+p*me,r[2]=_*S+b*R+m*q+f*K,r[6]=_*C+b*I+m*O+f*Q,r[10]=_*x+b*D+m*H+f*he,r[14]=_*E+b*W+m*G+f*me,r[3]=M*S+A*R+y*q+T*K,r[7]=M*C+A*I+y*O+T*Q,r[11]=M*x+A*D+y*H+T*he,r[15]=M*E+A*W+y*G+T*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],b=e[7],m=e[11],f=e[15],M=l*p-c*h,A=o*p-c*d,y=o*h-l*d,T=a*p-c*u,S=a*h-l*u,C=a*d-o*u;return t*(b*M-m*A+f*y)-i*(_*M-m*T+f*S)+n*(_*A-b*T+f*C)-r*(_*y-b*S+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],b=e[13],m=e[14],f=e[15],M=t*o-i*a,A=t*l-n*a,y=t*c-r*a,T=i*l-n*o,S=i*c-r*o,C=n*c-r*l,x=u*b-d*_,E=u*m-h*_,R=u*f-p*_,I=d*m-h*b,D=d*f-p*b,W=h*f-p*m,q=M*W-A*D+y*I+T*R-S*E+C*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return e[0]=(o*W-l*D+c*I)*O,e[1]=(n*D-i*W-r*I)*O,e[2]=(b*C-m*S+f*T)*O,e[3]=(h*S-d*C-p*T)*O,e[4]=(l*R-a*W-c*E)*O,e[5]=(t*W-n*R+r*E)*O,e[6]=(m*y-_*C-f*A)*O,e[7]=(u*C-h*y+p*A)*O,e[8]=(a*D-o*R+c*x)*O,e[9]=(i*R-t*D-r*x)*O,e[10]=(_*S-b*y+f*M)*O,e[11]=(d*y-u*S-p*M)*O,e[12]=(o*E-a*I-l*x)*O,e[13]=(t*I-i*E+n*x)*O,e[14]=(b*A-_*T-m*M)*O,e[15]=(u*T-d*A+h*M)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,_=r*d,b=a*u,m=a*d,f=o*d,M=l*c,A=l*u,y=l*d,T=i.x,S=i.y,C=i.z;return n[0]=(1-(b+f))*T,n[1]=(p+y)*T,n[2]=(_-A)*T,n[3]=0,n[4]=(p-y)*S,n[5]=(1-(h+f))*S,n[6]=(m+M)*S,n[7]=0,n[8]=(_+A)*C,n[9]=(m-M)*C,n[10]=(1-(h+b))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Cn.set(n[0],n[1],n[2]).length(),o=Cn.set(n[4],n[5],n[6]).length(),l=Cn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),ii.copy(this);let c=1/a,u=1/o,d=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=ri,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-n),h=(t+e)/(t-e),p=(i+n)/(i-n),_,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===ri)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Xn)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=ri,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-n),h=-(t+e)/(t-e),p=-(i+n)/(i-n),_,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===ri)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===Xn)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ca.prototype.isMatrix4=!0;var at=ca,Cn=new U,ii=new at,iu=new U(0,0,0),nu=new U(1,1,1),Gi=new U,sr=new U,qt=new U,ic=new at,nc=new _i,Li=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],d=n[2],h=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Yn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},su=0,sc=new U,Rn=new _i,Ei=new at,rr=new U,os=new U,ru=new U,au=new _i,rc=new U(1,0,0),ac=new U(0,1,0),oc=new U(0,0,1),lc={type:"added"},ou={type:"removed"},In={type:"childadded",child:null},yo={type:"childremoved",child:null},Lt=class s extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new Li,i=new _i,n=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new De}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.premultiply(Rn),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rr.copy(e):rr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(os,rr,this.up):Ei.lookAt(rr,os,this.up),this.quaternion.setFromRotationMatrix(Ei),n&&(Ei.extractRotation(n.matrixWorld),Rn.setFromRotationMatrix(Ei),this.quaternion.premultiply(Rn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ae("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lc),In.child=e,this.dispatchEvent(In),In.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ou),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lc),In.child=e,this.dispatchEvent(In),In.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lu={type:"move"},Zn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,i),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ye;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ar={h:0,s:0,l:0};function bo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=jh(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=bo(a,r,e+1/3),this.g=bo(a,r,e),this.b=bo(a,r,e-1/3)}return Ve.colorSpaceToWorking(this,n),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ve.workingToColorSpace(Ut.copy(this),e),Math.round(Ge(Ut.r*255,0,255))*65536+Math.round(Ge(Ut.g*255,0,255))*256+Math.round(Ge(Ut.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Ut.copy(this),t);let i=Ut.r,n=Ut.g,r=Ut.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=It){Ve.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,i=Ut.g,n=Ut.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(ar);let i=mo(Hi.h,ar.h,t),n=mo(Hi.s,ar.s,t),r=mo(Hi.l,ar.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Oe;Oe.NAMES=nh;var ys=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new U,wi=new U,Mo=new U,Ti=new U,Pn=new U,Ln=new U,cc=new U,So=new U,Eo=new U,wo=new U,To=new ot,Ao=new ot,Co=new ot,Ri=class s{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ni.subVectors(e,t),n.cross(ni);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ni.subVectors(n,t),wi.subVectors(i,t),Mo.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(wi),l=ni.dot(Mo),c=wi.dot(wi),u=wi.dot(Mo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return To.setScalar(0),Ao.setScalar(0),Co.setScalar(0),To.fromBufferAttribute(e,t),Ao.fromBufferAttribute(e,i),Co.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(e,t,i,n){return ni.subVectors(i,t),wi.subVectors(e,t),ni.cross(wi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ni.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Pn.subVectors(n,i),Ln.subVectors(r,i),So.subVectors(e,i);let l=Pn.dot(So),c=Ln.dot(So);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,n);let u=Pn.dot(Eo),d=Ln.dot(Eo);if(u>=0&&d<=u)return t.copy(n);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Pn,a);wo.subVectors(e,r);let p=Pn.dot(wo),_=Ln.dot(wo);if(_>=0&&p<=_)return t.copy(r);let b=p*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ln,o);let m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return cc.subVectors(r,n),o=(d-u)/(d-u+(p-_)),t.copy(n).addScaledVector(cc,o);let f=1/(m+b+h);return a=b*f,o=h*f,t.copy(i).addScaledVector(Pn,a).addScaledVector(Ln,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ji=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),lr.subVectors(this.max,ls),Dn.subVectors(e.a,ls),Nn.subVectors(e.b,ls),Un.subVectors(e.c,ls),Wi.subVectors(Nn,Dn),Xi.subVectors(Un,Nn),hn.subVectors(Dn,Un);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-hn.z,hn.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,hn.z,0,-hn.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-hn.y,hn.x,0];return!Ro(t,Dn,Nn,Un,lr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Dn,Nn,Un,lr))?!1:(cr.crossVectors(Wi,Xi),t=[cr.x,cr.y,cr.z],Ro(t,Dn,Nn,Un,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new U,new U,new U,new U,new U,new U,new U,new U],si=new U,or=new Ji,Dn=new U,Nn=new U,Un=new U,Wi=new U,Xi=new U,hn=new U,ls=new U,lr=new U,cr=new U,un=new U;function Ro(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){un.fromArray(s,r);let o=n.x*Math.abs(un.x)+n.y*Math.abs(un.y)+n.z*Math.abs(un.z),l=e.dot(un),c=t.dot(un),u=i.dot(un);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var yt=new U,hr=new Pe,cu=0,Ht=class extends xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kr,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kr&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var bs=class extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ms=class extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var it=class extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},hu=new Ji,cs=new U,Io=new U,Jn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):hu.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);let t=cs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(cs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Io)),this.expandByPoint(cs.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},uu=0,jt=new at,Po=new Lt,Fn=new U,$t=new Ji,hs=new Ji,wt=new U,Ft=class s extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?Ms:bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,hs.min),$t.expandByPoint(wt),wt.addVectors($t.max,hs.max),$t.expandByPoint(wt)):($t.expandByPoint(hs.min),$t.expandByPoint(hs.max))}$t.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(Fn.fromBufferAttribute(e,c),wt.add(Fn)),n=Math.max(n,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new U,l[x]=new U;let c=new U,u=new U,d=new U,h=new Pe,p=new Pe,_=new Pe,b=new U,m=new U;function f(x,E,R){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,R),u.sub(c),d.sub(c),p.sub(h),_.sub(h);let I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),o[x].add(b),o[E].add(b),o[R].add(b),l[x].add(m),l[E].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,E=M.length;x<E;++x){let R=M[x],I=R.start,D=R.count;for(let W=I,q=I+D;W<q;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let A=new U,y=new U,T=new U,S=new U;function C(x){T.fromBufferAttribute(n,x),S.copy(T);let E=o[x];A.copy(E),A.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(S,E);let I=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,E=M.length;x<E;++x){let R=M[x],I=R.start,D=R.count;for(let W=I,q=I+D;W<q;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let n=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(n,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Ht(h,u,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kr,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bt=new U,Ss=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},du=0,Di=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=gn,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Rr,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pn,this.stencilZFail=pn,this.stencilZPass=pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gn&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cr&&(i.blendSrc=this.blendSrc),this.blendDst!==Rr&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kn=class extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},On,us=new U,Bn=new U,kn=new U,zn=new Pe,ds=new Pe,sh=new at,ur=new U,fs=new U,dr=new U,hc=new Pe,Lo=new Pe,uc=new Pe,Es=class extends Lt{constructor(e=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",On===void 0){On=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wr(t,5);On.setIndex([0,1,2,0,2,3]),On.setAttribute("position",new Ss(i,3,0,!1)),On.setAttribute("uv",new Ss(i,2,3,!1))}this.geometry=On,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bn.setFromMatrixScale(this.matrixWorld),sh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bn.multiplyScalar(-kn.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;fr(ur.set(-.5,-.5,0),kn,a,Bn,n,r),fr(fs.set(.5,-.5,0),kn,a,Bn,n,r),fr(dr.set(.5,.5,0),kn,a,Bn,n,r),hc.set(0,0),Lo.set(1,0),uc.set(1,1);let o=e.ray.intersectTriangle(ur,fs,dr,!1,us);if(o===null&&(fr(fs.set(-.5,.5,0),kn,a,Bn,n,r),Lo.set(0,1),o=e.ray.intersectTriangle(ur,dr,fs,!1,us),o===null))return;let l=e.ray.origin.distanceTo(us);l<e.near||l>e.far||t.push({distance:l,point:us.clone(),uv:Ri.getInterpolation(us,ur,fs,dr,hc,Lo,uc,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fr(s,e,t,i,n,r){zn.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(ds.x=r*zn.x-n*zn.y,ds.y=n*zn.x+r*zn.y):ds.copy(zn),s.copy(e),s.x+=ds.x,s.y+=ds.y,s.applyMatrix4(sh)}var Ci=new U,Do=new U,pr=new U,qi=new U,No=new U,mr=new U,Uo=new U,ws=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Do.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=qi.dot(this.direction),l=-qi.dot(pr),c=qi.lengthSq(),u=Math.abs(1-a*a),d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){let b=1/u;d*=b,h*=b,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Do).addScaledVector(pr,h),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),n=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,n,r){No.subVectors(t,e),mr.subVectors(i,e),Uo.crossVectors(No,mr);let a=this.direction.dot(Uo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);let l=o*this.direction.dot(mr.crossVectors(qi,mr));if(l<0)return null;let c=o*this.direction.dot(No.cross(qi));if(c<0||l+c>a)return null;let u=-o*qi.dot(Uo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_n=class extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dc=new at,dn=new ws,gr=new Jn,fc=new U,xr=new U,_r=new U,vr=new U,Fo=new U,yr=new U,pc=new U,br=new U,ft=class extends Lt{constructor(e=new Ft,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Fo.fromBufferAttribute(d,e),a?yr.addScaledVector(Fo,u):yr.addScaledVector(Fo.sub(t),u))}t.add(yr)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(r),dn.copy(e.ray).recast(e.near),!(gr.containsPoint(dn.origin)===!1&&(dn.intersectSphere(gr,fc)===null||dn.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(r).invert(),dn.copy(e.ray).applyMatrix4(dc),!(i.boundingBox!==null&&dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,dn)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=h.length;_<b;_++){let m=h[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,T=A;y<T;y+=3){let S=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);n=Mr(this,f,e,i,c,u,d,S,C,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=_,f=b;m<f;m+=3){let M=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);n=Mr(this,a,e,i,c,u,d,M,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=h.length;_<b;_++){let m=h[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,T=A;y<T;y+=3){let S=y,C=y+1,x=y+2;n=Mr(this,f,e,i,c,u,d,S,C,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=_,f=b;m<f;m+=3){let M=m,A=m+1,y=m+2;n=Mr(this,a,e,i,c,u,d,M,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function fu(s,e,t,i,n,r,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Pi,o),l===null)return null;br.copy(o),br.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:s}}function Mr(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,xr),s.getVertexPosition(l,_r),s.getVertexPosition(c,vr);let u=fu(s,e,t,i,xr,_r,vr,pc);if(u){let d=new U;Ri.getBarycoord(pc,xr,_r,vr,d),n&&(u.uv=Ri.getInterpolatedAttribute(n,o,l,c,d,new Pe)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,l,c,d,new Pe)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new U,materialIndex:0};Ri.getNormal(xr,_r,vr,h.normal),u.face=h,u.barycoord=d}return u}var Xr=class extends kt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Tt,u=Tt,d,h){super(null,a,o,l,c,u,n,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oo=new U,pu=new U,mu=new De,Qt=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Oo.subVectors(i,t).cross(pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Oo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mu.getNormalMatrix(e),n=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fn=new Jn,gu=new Pe(.5,.5),Sr=new U,jn=class{constructor(e=new Qt,t=new Qt,i=new Qt,n=new Qt,r=new Qt,a=new Qt){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],b=r[9],m=r[10],f=r[11],M=r[12],A=r[13],y=r[14],T=r[15];if(n[0].setComponents(c-a,p-u,f-_,T-M).normalize(),n[1].setComponents(c+a,p+u,f+_,T+M).normalize(),n[2].setComponents(c+o,p+d,f+b,T+A).normalize(),n[3].setComponents(c-o,p-d,f-b,T-A).normalize(),i)n[4].setComponents(l,h,m,y).normalize(),n[5].setComponents(c-l,p-h,f-m,T-y).normalize();else if(n[4].setComponents(c-l,p-h,f-m,T-y).normalize(),t===ri)n[5].setComponents(c+l,p+h,f+m,T+y).normalize();else if(t===Xn)n[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fn)}intersectsSprite(e){fn.center.set(0,0,0);let t=gu.distanceTo(e.center);return fn.radius=.7071067811865476+t,fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(fn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Sr.x=n.normal.x>0?e.max.x:e.min.x,Sr.y=n.normal.y>0?e.max.y:e.min.y,Sr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ts=class extends kt{constructor(e=[],t=nn,i,n,r,a,o,l,c,u){super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qn=class extends kt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends kt{constructor(e,t,i=oi,n,r,a,o=Tt,l=Tt,c,u=gi,d=1){if(u!==gi&&u!==rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $n(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qr=class extends Ni{constructor(e,t=oi,i=nn,n,r,a=Tt,o=Tt,l,c=gi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},As=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class s extends Ft{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(d,2));function _(b,m,f,M,A,y,T,S,C,x,E){let R=y/C,I=T/x,D=y/2,W=T/2,q=S/2,O=C+1,H=x+1,G=0,K=0,Q=new U;for(let he=0;he<H;he++){let me=he*I-W;for(let _e=0;_e<O;_e++){let Xe=_e*R-D;Q[b]=Xe*M,Q[m]=me*A,Q[f]=q,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[f]=S>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(_e/C),d.push(1-he/x),G+=1}}for(let he=0;he<x;he++)for(let me=0;me<C;me++){let _e=h+me+O*he,Xe=h+me+O*(he+1),lt=h+(me+1)+O*(he+1),qe=h+(me+1)+O*he;l.push(_e,Xe,qe),l.push(Xe,lt,qe),K+=6}o.addGroup(p,K,E),p+=K,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cs=class s extends Ft{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let u=[],d=[],h=[],p=[],_=0,b=[],m=i/2,f=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(p,2));function M(){let y=new U,T=new U,S=0,C=(t-e)/i;for(let x=0;x<=r;x++){let E=[],R=x/r,I=R*(t-e)+e;for(let D=0;D<=n;D++){let W=D/n,q=W*l+o,O=Math.sin(q),H=Math.cos(q);T.x=I*O,T.y=-R*i+m,T.z=I*H,d.push(T.x,T.y,T.z),y.set(O,C,H).normalize(),h.push(y.x,y.y,y.z),p.push(W,1-R),E.push(_++)}b.push(E)}for(let x=0;x<n;x++)for(let E=0;E<r;E++){let R=b[E][x],I=b[E+1][x],D=b[E+1][x+1],W=b[E][x+1];(e>0||E!==0)&&(u.push(R,I,W),S+=3),(t>0||E!==r-1)&&(u.push(I,D,W),S+=3)}c.addGroup(f,S,0),f+=S}function A(y){let T=_,S=new Pe,C=new U,x=0,E=y===!0?e:t,R=y===!0?1:-1;for(let D=1;D<=n;D++)d.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),_++;let I=_;for(let D=0;D<=n;D++){let q=D/n*l+o,O=Math.cos(q),H=Math.sin(q);C.x=E*H,C.y=m*R,C.z=E*O,d.push(C.x,C.y,C.z),h.push(0,R,0),S.x=O*.5+.5,S.y=H*.5*R+.5,p.push(S.x,S.y),_++}for(let D=0;D<n;D++){let W=T+D,q=I+D;y===!0?u.push(q,q+1,W):u.push(q+1,q,W),x+=3}c.addGroup(f,x,y===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $r=class s extends Ft{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),c(i),u(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new U,y=new U,T=new U;for(let S=0;S<t.length;S+=3)p(t[S+0],A),p(t[S+1],y),p(t[S+2],T),l(A,y,T,M)}function l(M,A,y,T){let S=T+1,C=[];for(let x=0;x<=S;x++){C[x]=[];let E=M.clone().lerp(y,x/S),R=A.clone().lerp(y,x/S),I=S-x;for(let D=0;D<=I;D++)D===0&&x===S?C[x][D]=E:C[x][D]=E.clone().lerp(R,D/I)}for(let x=0;x<S;x++)for(let E=0;E<2*(S-x)-1;E++){let R=Math.floor(E/2);E%2===0?(h(C[x][R+1]),h(C[x+1][R]),h(C[x][R])):(h(C[x][R+1]),h(C[x+1][R+1]),h(C[x+1][R]))}}function c(M){let A=new U;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(M),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function u(){let M=new U;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let y=m(M)/2/Math.PI+.5,T=f(M)/Math.PI+.5;a.push(y,1-T)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){let A=a[M+0],y=a[M+2],T=a[M+4],S=Math.max(A,y,T),C=Math.min(A,y,T);S>.9&&C<.1&&(A<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function p(M,A){let y=M*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function _(){let M=new U,A=new U,y=new U,T=new U,S=new Pe,C=new Pe,x=new Pe;for(let E=0,R=0;E<r.length;E+=9,R+=6){M.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),T.copy(M).add(A).add(y).divideScalar(3);let I=m(T);b(S,R+0,M,I),b(C,R+2,A,I),b(x,R+4,y,I)}}function b(M,A,y,T){T<0&&M.x===1&&(a[A]=M.x-1),y.x===0&&y.z===0&&(a[A]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var vn=class s extends $r{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Rs=class s extends Ft{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,d=e/o,h=t/l,p=[],_=[],b=[],m=[];for(let f=0;f<u;f++){let M=f*h-a;for(let A=0;A<c;A++){let y=A*d-r;_.push(y,-M,0),b.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let A=M+c*f,y=M+c*(f+1),T=M+1+c*(f+1),S=M+1+c*f;p.push(A,y,S),p.push(y,T,S)}this.setIndex(p),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Is=class s extends Ft{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/n,p=new U,_=new Pe;for(let b=0;b<=n;b++){for(let m=0;m<=i;m++){let f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=h}for(let b=0;b<n;b++){let m=b*(i+1);for(let f=0;f<i;f++){let M=f+m,A=M,y=M+i+1,T=M+i+2,S=M+1;o.push(A,y,S),o.push(y,T,S)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ps=class s extends Ft{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new U,h=new U,p=[],_=[],b=[],m=[];for(let f=0;f<=i;f++){let M=[],A=f/i,y=a+A*o,T=e*Math.cos(y),S=Math.sqrt(e*e-T*T),C=0;f===0&&a===0?C=.5/t:f===i&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let E=x/t,R=n+E*r;d.x=-S*Math.cos(R),d.y=T,d.z=S*Math.sin(R),_.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),m.push(E+C,1-A),M.push(c++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let A=u[f][M+1],y=u[f][M],T=u[f+1][M],S=u[f+1][M+1];(f!==0||a>0)&&p.push(A,y,S),(f!==i-1||l<Math.PI)&&p.push(y,T,S)}this.setIndex(p),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ls=class s extends Ft{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],u=[],d=[],h=new U,p=new U,_=new U;for(let b=0;b<=i;b++){let m=a+b/i*o;for(let f=0;f<=n;f++){let M=f/n*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),d.push(f/n),d.push(b/i)}}for(let b=1;b<=i;b++)for(let m=1;m<=n;m++){let f=(n+1)*b+m-1,M=(n+1)*(b-1)+m-1,A=(n+1)*(b-1)+m,y=(n+1)*b+m;l.push(f,M,y),l.push(M,A,y)}this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function bn(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(mc(n))n.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(mc(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ot(s){let e={};for(let t=0;t<s.length;t++){let i=bn(s[t]);for(let n in i)e[n]=i[n]}return e}function mc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ml(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var rh={clone:bn,merge:Ot},_u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bn(e.uniforms),this.uniformsGroups=xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(n.value);break;case"v2":this.uniforms[i].value=new Pe().fromArray(n.value);break;case"v3":this.uniforms[i].value=new U().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ot().fromArray(n.value);break;case"m3":this.uniforms[i].value=new De().fromArray(n.value);break;case"m4":this.uniforms[i].value=new at().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yr=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},es=class extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zr=class extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jr=class extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var ji=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kr=class extends ji{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zo,endingEnd:zo}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vo:r=e,o=2*t-i;break;case Go:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vo:a=e,l=2*i-t;break;case Go:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-t)/(n-t),b=_*_,m=b*_,f=-h*m+2*h*b-h*_,M=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*_+1,A=(-1-p)*m+(1.5+p)*b+.5*_,y=p*m-p*b;for(let T=0;T!==o;++T)r[T]=f*a[u+T]+M*a[c+T]+A*a[l+T]+y*a[d+T];return r}},jr=class extends ji{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Qr=class extends ji{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ea=class extends ji{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-t)/(n-t),b=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*_;return r}let h=o*2,p=e-1;for(let _=0;_!==o;++_){let b=a[c+_],m=a[l+_],f=p*h+_*2,M=d[f],A=d[f+1],y=e*h+_*2,T=u[y],S=u[y+1],C=(i-t)/(n-t),x,E,R,I,D;for(let W=0;W<8;W++){x=C*C,E=x*C,R=1-C,I=R*R,D=I*R;let O=D*t+3*I*C*M+3*R*x*T+E*n-i;if(Math.abs(O)<1e-10)break;let H=3*I*(M-t)+6*R*C*(T-M)+3*x*(n-T);if(Math.abs(H)<1e-10)break;C=C-O/H,C=Math.max(0,Math.min(1,C))}r[_]=D*b+3*I*C*A+3*R*x*S+E*m}return r}},Jt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case Ar:t=this.InterpolantFactoryMethodSmooth;break;case ko:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Ar;case this.InterpolantFactoryMethodBezier:return ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ae("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ae("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ae("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ae("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Kh(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ae("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ar,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let _=0;_!==i;++_){let b=t[d+_];if(b!==t[h+_]||b!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Br;var Qi=class extends Jt{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=ps;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Jt{constructor(e,t,i,n){super(e,t,i,n)}};ta.prototype.ValueTypeName="color";var ia=class extends Jt{constructor(e,t,i,n){super(e,t,i,n)}};ia.prototype.ValueTypeName="number";var na=class extends ji{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let u=c+o;c!==u;c+=4)_i.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ds=class extends Jt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var en=class extends Jt{constructor(e,t,i){super(e,t,i)}};en.prototype.ValueTypeName="string";en.prototype.ValueBufferType=Array;en.prototype.DefaultInterpolation=ps;en.prototype.InterpolantFactoryMethodLinear=void 0;en.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Jt{constructor(e,t,i,n){super(e,t,i,n)}};sa.prototype.ValueTypeName="vector";var ra=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ah=new ra,aa=class{constructor(e){this.manager=e!==void 0?e:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Us=class extends Ns{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bo=new at,gc=new U,xc=new U,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jn,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xc),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Xn||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wr=new U,Tr=new _i,fi=new U,Fs=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wr,Tr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wr,Tr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new U,_c=new Pe,vc=new Pe,Gt=class extends Fs{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,_c,vc),t.subVectors(vc,_c)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var tn=class extends Fs{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xo=class extends Wo{constructor(){super(new tn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Xo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vn=-90,Gn=1,oa=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Gt(Vn,Gn,e,t);n.layers=this.layers,this.add(n);let r=new Gt(Vn,Gn,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Vn,Gn,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Vn,Gn,e,t);o.layers=this.layers,this.add(o);let l=new Gt(Vn,Gn,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Vn,Gn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xn)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},la=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gl="\\[\\]\\.:\\/",yu=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",bu="[^"+gl.replace("\\.","")+"]",Mu=/((?:WC+[\/:])*)/.source.replace("WC",xl),Su=/(WCOD+)?/.source.replace("WCOD",bu),Eu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),wu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Tu=new RegExp("^"+Mu+Su+Eu+wu+"$"),Au=["material","materials","bones","map"],qo=class{constructor(e,t,i){let n=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},rt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yu,"")}static parseTrackName(e){let t=Tu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Au.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Ae("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=qo;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mg=new Float32Array(1);var yc=new at,Bs=class{constructor(e,t,i=0,n=1/0){this.ray=new ws(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Yn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ae("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yc),this}intersectObject(e,t=!0,i=[]){return $o(e,this,i,t),i.sort(bc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)$o(e[n],this,i,t);return i.sort(bc),i}};function bc(s,e){return s.distance-e.distance}function $o(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)$o(r[a],e,t,!0)}}var Sl=class Sl{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};Sl.prototype.isMatrix2=!0;var Yo=Sl;function _l(s,e,t,i){let n=Cu(i);switch(t){case ul:return s*e;case fl:return s*e/n.components*n.byteLength;case xa:return s*e/n.components*n.byteLength;case an:return s*e*2/n.components*n.byteLength;case _a:return s*e*2/n.components*n.byteLength;case dl:return s*e*3/n.components*n.byteLength;case ti:return s*e*4/n.components*n.byteLength;case va:return s*e*4/n.components*n.byteLength;case Hs:case Ws:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ba:case Sa:return Math.max(s,16)*Math.max(e,8)/4;case ya:case Ma:return Math.max(s,8)*Math.max(e,8)/2;case Ea:case wa:case Aa:case Ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ta:case $s:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $a:case Ya:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ys:case Za:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cu(s){switch(s){case Wt:case ol:return{byteLength:1,components:1};case is:case ll:case yi:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case oi:case pa:case li:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Rh(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Iu(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],b=d[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++h,d[h]=b)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let b=d[p];s.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lu=`#ifdef USE_ALPHAHASH
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
#endif`,Du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
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
#endif`,zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ed=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
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
}`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Rd=`uniform sampler2D dfgLUT;
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
}`,Id=`
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
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
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
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
}`,kf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,$f=`uniform vec3 diffuse;
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,Jf=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,np=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,rp=`#define TOON
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
}`,ap=`uniform float size;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,up=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Pu,alphahash_pars_fragment:Lu,alphamap_fragment:Du,alphamap_pars_fragment:Nu,alphatest_fragment:Uu,alphatest_pars_fragment:Fu,aomap_fragment:Ou,aomap_pars_fragment:Bu,batching_pars_vertex:ku,batching_vertex:zu,begin_vertex:Vu,beginnormal_vertex:Gu,bsdfs:Hu,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Zu,color_fragment:Ju,color_pars_fragment:Ku,color_pars_vertex:ju,color_vertex:Qu,common:ed,cube_uv_reflection_fragment:td,defaultnormal_vertex:id,displacementmap_pars_vertex:nd,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Sd,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:xd,gradientmap_pars_fragment:_d,lightmap_pars_fragment:vd,lights_lambert_fragment:yd,lights_lambert_pars_fragment:bd,lights_pars_begin:Md,lights_toon_fragment:Ed,lights_toon_pars_fragment:wd,lights_phong_fragment:Td,lights_phong_pars_fragment:Ad,lights_physical_fragment:Cd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Id,lights_fragment_maps:Pd,lights_fragment_end:Ld,lightprobes_pars_fragment:Dd,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:kd,map_particle_fragment:zd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:qd,morphtarget_pars_vertex:$d,morphtarget_vertex:Yd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:Kd,normal_pars_vertex:jd,normal_vertex:Qd,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,opaque_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:xf,skinbase_vertex:_f,skinning_pars_vertex:vf,skinning_vertex:yf,skinnormal_vertex:bf,specularmap_fragment:Mf,specularmap_pars_fragment:Sf,tonemapping_fragment:Ef,tonemapping_pars_fragment:wf,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:Cf,uv_pars_vertex:Rf,uv_vertex:If,worldpos_vertex:Pf,background_vert:Lf,background_frag:Df,backgroundCube_vert:Nf,backgroundCube_frag:Uf,cube_vert:Ff,cube_frag:Of,depth_vert:Bf,depth_frag:kf,distance_vert:zf,distance_frag:Vf,equirect_vert:Gf,equirect_frag:Hf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:$f,meshlambert_vert:Yf,meshlambert_frag:Zf,meshmatcap_vert:Jf,meshmatcap_frag:Kf,meshnormal_vert:jf,meshnormal_frag:Qf,meshphong_vert:ep,meshphong_frag:tp,meshphysical_vert:ip,meshphysical_frag:np,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:cp,sprite_vert:hp,sprite_frag:up},ce={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Mi={basic:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ot([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ot([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ot([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ot([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ot([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ot([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Ot([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Ot([ce.lights,ce.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Mi.physical={uniforms:Ot([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Qa={r:0,b:0,g:0},dp=new at,Ih=new De;Ih.set(-1,0,0,0,1,0,0,0,1);function fp(s,e,t,i,n,r){let a=new Oe(0),o=n===!0?0:1,l,c,u=null,d=0,h=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function _(M){let A=!1,y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(M,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===Vs)?(c===void 0&&(c=new ft(new Ki(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:bn(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ih),c.material.toneMapped=Ve.getTransfer(y.colorSpace)!==Ze,(u!==y||d!==y.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ft(new Rs(2,2),new Zt({name:"BackgroundMaterial",uniforms:bn(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(y.colorSpace)!==Ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(Qa,ml(s)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:b,dispose:f}}function pp(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,a=!1;function o(I,D,W,q,O){let H=!1,G=d(I,q,W,D);r!==G&&(r=G,c(r.object)),H=p(I,q,W,O),H&&_(I,q,W,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(I,D,W,q),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function d(I,D,W,q){let O=q.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let G=I.isInstancedMesh===!0?I.id:0,K=H[G];K===void 0&&(K={},H[G]=K);let Q=K[W.id];Q===void 0&&(Q={},K[W.id]=Q);let he=Q[O];return he===void 0&&(he=h(l()),Q[O]=he),he}function h(I){let D=[],W=[],q=[];for(let O=0;O<t;O++)D[O]=0,W[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:q,object:I,attributes:{},index:null}}function p(I,D,W,q){let O=r.attributes,H=D.attributes,G=0,K=W.getAttributes();for(let Q in K)if(K[Q].location>=0){let me=O[Q],_e=H[Q];if(_e===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;G++}return r.attributesNum!==G||r.index!==q}function _(I,D,W,q){let O={},H=D.attributes,G=0,K=W.getAttributes();for(let Q in K)if(K[Q].location>=0){let me=H[Q];me===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(me=I.instanceColor));let _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),O[Q]=_e,G++}r.attributes=O,r.attributesNum=G,r.index=q}function b(){let I=r.newAttributes;for(let D=0,W=I.length;D<W;D++)I[D]=0}function m(I){f(I,0)}function f(I,D){let W=r.newAttributes,q=r.enabledAttributes,O=r.attributeDivisors;W[I]=1,q[I]===0&&(s.enableVertexAttribArray(I),q[I]=1),O[I]!==D&&(s.vertexAttribDivisor(I,D),O[I]=D)}function M(){let I=r.newAttributes,D=r.enabledAttributes;for(let W=0,q=D.length;W<q;W++)D[W]!==I[W]&&(s.disableVertexAttribArray(W),D[W]=0)}function A(I,D,W,q,O,H,G){G===!0?s.vertexAttribIPointer(I,D,W,O,H):s.vertexAttribPointer(I,D,W,q,O,H)}function y(I,D,W,q){b();let O=q.attributes,H=W.getAttributes(),G=D.defaultAttributeValues;for(let K in H){let Q=H[K];if(Q.location>=0){let he=O[K];if(he===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),he!==void 0){let me=he.normalized,_e=he.itemSize,Xe=e.get(he);if(Xe===void 0)continue;let lt=Xe.buffer,qe=Xe.type,J=Xe.bytesPerElement,ne=qe===s.INT||qe===s.UNSIGNED_INT||he.gpuType===pa;if(he.isInterleavedBufferAttribute){let ee=he.data,Le=ee.stride,Ne=he.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)f(Q.location+Ce,ee.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Ce=0;Ce<Q.locationSize;Ce++)A(Q.location+Ce,_e/Q.locationSize,qe,me,Le*J,(Ne+_e/Q.locationSize*Ce)*J,ne)}else{if(he.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)f(Q.location+ee,he.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let ee=0;ee<Q.locationSize;ee++)A(Q.location+ee,_e/Q.locationSize,qe,me,_e*J,_e/Q.locationSize*ee*J,ne)}}else if(G!==void 0){let me=G[K];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(Q.location,me);break;case 3:s.vertexAttrib3fv(Q.location,me);break;case 4:s.vertexAttrib4fv(Q.location,me);break;default:s.vertexAttrib1fv(Q.location,me)}}}}M()}function T(){E();for(let I in i){let D=i[I];for(let W in D){let q=D[W];for(let O in q){let H=q[O];for(let G in H)u(H[G].object),delete H[G];delete q[O]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let D=i[I.id];for(let W in D){let q=D[W];for(let O in q){let H=q[O];for(let G in H)u(H[G].object),delete H[G];delete q[O]}}delete i[I.id]}function C(I){for(let D in i){let W=i[D];for(let q in W){let O=W[q];if(O[I.id]===void 0)continue;let H=O[I.id];for(let G in H)u(H[G].object),delete H[G];delete O[I.id]}}}function x(I){for(let D in i){let W=i[D],q=I.isInstancedMesh===!0?I.id:0,O=W[q];if(O!==void 0){for(let H in O){let G=O[H];for(let K in G)u(G[K].object),delete G[K];delete O[H]}delete W[q],Object.keys(W).length===0&&delete i[D]}}}function E(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:M}}function mp(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gp(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==ti&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wt&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!x)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:T,samples:S}}function xp(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Qt,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||n;return n=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let _=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||_===null||_.length===0||r&&!m)r?u(null):c();else{let M=r?0:i,A=M*4,y=f.clippingState||null;l.value=y,y=u(_,h,A,p);for(let T=0;T!==A;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,_){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,_!==!0||m===null){let f=p+b*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,y=p;A!==b;++A,y+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var on=4,oh=[.125,.215,.35,.446,.526,.582],Mn=20,_p=256,Zs=new tn,lh=new Oe,El=null,wl=0,Tl=0,Al=!1,vp=new U,to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=vp}=r;El=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(El,wl,Tl),this._renderer.xr.enabled=Al,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nn||e.mapping===yn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:yi,format:ti,colorSpace:ms,depthBuffer:!1},n=ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yp(r)),this._blurMaterial=Mp(r,e,t),this._ggxMaterial=bp(r,e,t)}return n}_compileMaterial(e){let t=new ft(new Ft,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,n,r){let l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(lh),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new Ki,new _n({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(lh),f=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let T=this._cubeSize;ss(n,y*T,A>2?T:0,T,T),d.setRenderTarget(n),f&&d.render(b,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===nn||e.mapping===yn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:_}=this,b=this._sizeLods[i],m=3*b*(i>_-on?i-_+on:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,ss(r,m,f,3*b,2*b),n.setRenderTarget(r),n.render(o,Zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ss(e,m,f,3*b,2*b),n.setRenderTarget(e),n.render(o,Zs)}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[n];d.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mn-1),b=r/_,m=isFinite(r)?1+Math.floor(u*b):Mn;m>Mn&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mn}`);let f=[],M=0;for(let C=0;C<Mn;++C){let x=C/b,E=Math.exp(-x*x/2);f.push(E),C===0?M+=E:C<m&&(M+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;let y=this._sizeLods[n],T=3*y*(n>A-on?n-A+on:0),S=4*(this._cubeSize-y);ss(t,T,S,3*y,2*y),l.setRenderTarget(t),l.render(d,Zs)}};function yp(s){let e=[],t=[],i=[],n=s,r=s-on+1+oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-on?l=oh[a-s+on-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,b=3,m=2,f=1,M=new Float32Array(b*_*p),A=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let S=0;S<p;S++){let C=S%3*2/3-1,x=S>2?0:-1,E=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(E,b*_*S),A.set(h,m*_*S);let R=[S,S,S,S,S,S];y.set(R,f*_*S)}let T=new Ft;T.setAttribute("position",new Ht(M,b)),T.setAttribute("uv",new Ht(A,m)),T.setAttribute("faceIndex",new Ht(y,f)),i.push(new ft(T,null)),n>on&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ch(s,e,t){let i=new Yt(s,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function bp(s,e,t){return new Zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_p,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Mp(s,e,t){let i=new Float32Array(Mn),n=new U(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:so(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function hh(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function uh(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}var io=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ts(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ki(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:bn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:vi});r.uniforms.tEquirect.value=t;let a=new ft(n,r),o=t.minFilter;return t.minFilter===sn&&(t.minFilter=Pt),new oa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}};function Sp(s){let e=new WeakMap,t=new WeakMap,i=null;function n(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ua||p===da)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let b=new io(_.height);return b.fromEquirectangularTexture(s,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===ua||p===da,b=p===nn||p===yn;if(_||b){let m=t.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new to(s)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return _&&M&&M.height>0||b&&M&&l(M)?(i===null&&(i=new to(s)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===ua?h.mapping=nn:p===da&&(h.mapping=yn),h}function l(h){let p=0,_=6;for(let b=0;b<_;b++)h[b]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Ep(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&mn("WebGLRenderer: "+i+" extension not supported."),n}}}function wp(s,e,t,i){let n={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete n[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],s.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,_=d.attributes.position,b=0;if(_===void 0)return;if(p!==null){let M=p.array;b=p.version;for(let A=0,y=M.length;A<y;A+=3){let T=M[A+0],S=M[A+1],C=M[A+2];h.push(T,S,S,C,C,T)}}else{let M=_.array;b=_.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let T=A+0,S=A+1,C=A+2;h.push(T,S,S,C,C,T)}}let m=new(_.count>=65535?Ms:bs)(h,1);m.version=b;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Tp(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){s.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,p){p!==0&&(s.drawElementsInstanced(i,h,r,d*a,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let b=0;for(let m=0;m<p;m++)b+=h[m];t.update(b,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ap(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ae("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Cp(s,e,t){let i=new WeakMap,n=new ot;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),b===!0&&(A=3);let y=o.attributes.position.count*A,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*T*4*d),C=new vs(S,y,T,d);C.type=li,C.needsUpdate=!0;let x=A*4;for(let R=0;R<d;R++){let I=m[R],D=f[R],W=M[R],q=y*T*4*R;for(let O=0;O<I.count;O++){let H=O*x;p===!0&&(n.fromBufferAttribute(I,O),S[q+H+0]=n.x,S[q+H+1]=n.y,S[q+H+2]=n.z,S[q+H+3]=0),_===!0&&(n.fromBufferAttribute(D,O),S[q+H+4]=n.x,S[q+H+5]=n.y,S[q+H+6]=n.z,S[q+H+7]=0),b===!0&&(n.fromBufferAttribute(W,O),S[q+H+8]=n.x,S[q+H+9]=n.y,S[q+H+10]=n.z,S[q+H+11]=W.itemSize===4?n.w:1)}}h={count:d,texture:C,size:new Pe(y,T)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Rp(s,e,t,i,n){let r=new WeakMap;function a(c){let u=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ip={[el]:"LINEAR_TONE_MAPPING",[tl]:"REINHARD_TONE_MAPPING",[il]:"CINEON_TONE_MAPPING",[zs]:"ACES_FILMIC_TONE_MAPPING",[sl]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function Pp(s,e,t,i,n,r){let a=new Yt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,depthTexture:n?new Ni(e,t):void 0}),o=new Yt(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new Ft;l.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new it([0,2,0,0,2,0],2));let c=new Yr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ft(l,c),d=new tn(-1,1,1,-1,0,1),h=null,p=null,_=!1,b,m=null,f=[],M=!1;this.setSize=function(A,y){a.setSize(A,y),o.setSize(A,y);for(let T=0;T<f.length;T++){let S=f[T];S.setSize&&S.setSize(A,y)}},this.setEffects=function(A){f=A,M=f.length>0&&f[0].isRenderPass===!0;let y=a.width,T=a.height;for(let S=0;S<f.length;S++){let C=f[S];C.setSize&&C.setSize(y,T)}},this.begin=function(A,y){if(_||A.toneMapping===ai&&f.length===0)return!1;if(m=y,y!==null){let T=y.width,S=y.height;(a.width!==T||a.height!==S)&&this.setSize(T,S)}return M===!1&&A.setRenderTarget(a),b=A.toneMapping,A.toneMapping=ai,!0},this.hasRenderPass=function(){return M},this.end=function(A,y){A.toneMapping=b,_=!0;let T=a,S=o;for(let C=0;C<f.length;C++){let x=f[C];if(x.enabled!==!1&&(x.render(A,S,T,y),x.needsSwap!==!1)){let E=T;T=S,S=E}}if(h!==A.outputColorSpace||p!==A.toneMapping){h=A.outputColorSpace,p=A.toneMapping,c.defines={},Ve.getTransfer(h)===Ze&&(c.defines.SRGB_TRANSFER="");let C=Ip[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(m),A.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Ph=new kt,Il=new Ni(1,1),Lh=new vs,Dh=new Hr,Nh=new Ts,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function as(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=dh[n];if(r===void 0&&(r=new Float32Array(n),dh[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ro(s,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Lp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function Np(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function Up(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function Fp(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;gh.set(i),s.uniformMatrix2fv(this.addr,!1,gh),St(t,i)}}function Op(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;mh.set(i),s.uniformMatrix3fv(this.addr,!1,mh),St(t,i)}}function Bp(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;ph.set(i),s.uniformMatrix4fv(this.addr,!1,ph),St(t,i)}}function kp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function zp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function Vp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function Gp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function Hp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function Xp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function qp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function $p(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Il.compareFunction=t.isReversedDepthBuffer()?ja:Ka,r=Il):r=Ph,t.setTexture2D(e||r,n)}function Yp(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Dh,n)}function Zp(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Nh,n)}function Jp(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Lh,n)}function Kp(s){switch(s){case 5126:return Lp;case 35664:return Dp;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return kp;case 35667:case 35671:return zp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function jp(s,e){s.uniform1fv(this.addr,e)}function Qp(s,e){let t=as(e,this.size,2);s.uniform2fv(this.addr,t)}function em(s,e){let t=as(e,this.size,3);s.uniform3fv(this.addr,t)}function tm(s,e){let t=as(e,this.size,4);s.uniform4fv(this.addr,t)}function im(s,e){let t=as(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nm(s,e){let t=as(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sm(s,e){let t=as(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rm(s,e){s.uniform1iv(this.addr,e)}function am(s,e){s.uniform2iv(this.addr,e)}function om(s,e){s.uniform3iv(this.addr,e)}function lm(s,e){s.uniform4iv(this.addr,e)}function cm(s,e){s.uniform1uiv(this.addr,e)}function hm(s,e){s.uniform2uiv(this.addr,e)}function um(s,e){s.uniform3uiv(this.addr,e)}function dm(s,e){s.uniform4uiv(this.addr,e)}function fm(s,e,t){let i=this.cache,n=e.length,r=ro(t,n);Mt(i,r)||(s.uniform1iv(this.addr,r),St(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Il:a=Ph;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function pm(s,e,t){let i=this.cache,n=e.length,r=ro(t,n);Mt(i,r)||(s.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Dh,r[a])}function mm(s,e,t){let i=this.cache,n=e.length,r=ro(t,n);Mt(i,r)||(s.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Nh,r[a])}function gm(s,e,t){let i=this.cache,n=e.length,r=ro(t,n);Mt(i,r)||(s.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Lh,r[a])}function xm(s){switch(s){case 5126:return jp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return im;case 35675:return nm;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}var Pl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}},Ll=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xm(t.type)}},Dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function xh(s,e){s.seq.push(e),s.map[e.id]=e}function _m(s,e,t){let i=s.name,n=i.length;for(Cl.lastIndex=0;;){let r=Cl.exec(i),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){xh(t,c===void 0?new Pl(o,s,e):new Ll(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Dl(o),xh(t,d)),t=d}}}var rs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_m(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function _h(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var vm=37297,ym=0;function bm(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var vh=new De;function Mm(s){Ve._getMatrix(vh,Ve.workingColorSpace,s);let e=`mat3( ${vh.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(s)){case gs:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yh(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bm(s.getShaderSource(e),o)}else return r}function Sm(s,e){let t=Mm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Em={[el]:"Linear",[tl]:"Reinhard",[il]:"Cineon",[zs]:"ACESFilmic",[sl]:"AgX",[rl]:"Neutral",[nl]:"Custom"};function wm(s,e){let t=Em[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var eo=new U;function Tm(){Ve.getLuminanceCoefficients(eo);let s=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Cm(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rm(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ks(s){return s!==""}function bh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(s){return s.replace(Im,Lm)}var Pm=new Map;function Lm(s,e){let t=Be[e];if(t===void 0){let i=Pm.get(e);if(i!==void 0)t=Be[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nl(t)}var Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(s){return s.replace(Dm,Nm)}function Nm(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Eh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Um={[ks]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function Fm(s){return Um[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Om={[nn]:"ENVMAP_TYPE_CUBE",[yn]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function Bm(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Om[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var km={[yn]:"ENVMAP_MODE_REFRACTION"};function zm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":km[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vm={[Qo]:"ENVMAP_BLENDING_MULTIPLY",[Gc]:"ENVMAP_BLENDING_MIX",[Hc]:"ENVMAP_BLENDING_ADD"};function Gm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Vm[s.combine]||"ENVMAP_BLENDING_NONE"}function Hm(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Wm(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Fm(t),c=Bm(t),u=zm(t),d=Gm(t),h=Hm(t),p=Am(t),_=Cm(r),b=n.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ks).join(`
`),f.length>0&&(f+=`
`)):(m=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),f=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Be.tonemapping_pars_fragment:"",t.toneMapping!==ai?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Sm("linearToOutputTexel",t.outputColorSpace),Tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Nl(a),a=bh(a,t),a=Mh(a,t),o=Nl(o),o=bh(o,t),o=Mh(o,t),a=Sh(a),o=Sh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=M+m+a,y=M+f+o,T=_h(n,n.VERTEX_SHADER,A),S=_h(n,n.FRAGMENT_SHADER,y);n.attachShader(b,T),n.attachShader(b,S),t.index0AttributeName!==void 0?n.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(b,0,"position"),n.linkProgram(b);function C(I){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(b)||"",W=n.getShaderInfoLog(T)||"",q=n.getShaderInfoLog(S)||"",O=D.trim(),H=W.trim(),G=q.trim(),K=!0,Q=!0;if(n.getProgramParameter(b,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,b,T,S);else{let he=yh(n,T,"vertex"),me=yh(n,S,"fragment");Ae("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(b,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+he+`
`+me)}else O!==""?Ie("WebGLProgram: Program Info Log:",O):(H===""||G==="")&&(Q=!1);Q&&(I.diagnostics={runnable:K,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:G,prefix:f}})}n.deleteShader(T),n.deleteShader(S),x=new rs(n,b),E=Rm(n,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(b,vm)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=S,this}var Xm=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fl(e),t.set(e,i)),i}},Fl=class{constructor(e){this.id=Xm++,this.code=e,this.usedTimes=0}};function qm(s){return s===an||s===$s||s===Ys}function $m(s,e,t,i,n,r){let a=new Yn,o=new Ul,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,E,R,I,D,W){let q=I.fog,O=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||H,G),Q=K&&K.mapping===Vs?K.image.height:null,he=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let me=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_e=me!==void 0?me.length:0,Xe=0;O.morphAttributes.position!==void 0&&(Xe=1),O.morphAttributes.normal!==void 0&&(Xe=2),O.morphAttributes.color!==void 0&&(Xe=3);let lt,qe,J,ne;if(he){let ye=Mi[he];lt=ye.vertexShader,qe=ye.fragmentShader}else{lt=x.vertexShader,qe=x.fragmentShader;let ye=o.getVertexShaderStage(x),ht=o.getFragmentShaderStage(x);o.update(x,ye,ht),J=ye.id,ne=ht.id}let ee=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,Ce=D.isBatchedMesh===!0,pt=!!x.map,ze=!!x.matcap,Qe=!!K,$e=!!x.aoMap,He=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,bt=!!x.normalMap,Et=!!x.displacementMap,At=!!x.emissiveMap,ct=!!x.metalnessMap,vt=!!x.roughnessMap,L=x.anisotropy>0,Vt=x.clearcoat>0,Je=x.dispersion>0,w=x.iridescence>0,g=x.sheen>0,F=x.transmission>0,z=L&&!!x.anisotropyMap,X=Vt&&!!x.clearcoatMap,te=Vt&&!!x.clearcoatNormalMap,se=Vt&&!!x.clearcoatRoughnessMap,$=w&&!!x.iridescenceMap,Z=w&&!!x.iridescenceThicknessMap,re=g&&!!x.sheenColorMap,Se=g&&!!x.sheenRoughnessMap,le=!!x.specularMap,ae=!!x.specularColorMap,Te=!!x.specularIntensityMap,Re=F&&!!x.transmissionMap,Ue=F&&!!x.thicknessMap,P=!!x.gradientMap,ie=!!x.alphaMap,Y=x.alphaTest>0,oe=!!x.alphaHash,fe=!!x.extensions,j=ai;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(j=s.toneMapping);let Me={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:lt,fragmentShader:qe,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ce,batchingColor:Ce&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:ze,envMap:Qe,envMapMode:Qe&&K.mapping,envMapCubeUVHeight:Q,aoMap:$e,lightMap:He,bumpMap:_t,normalMap:bt,displacementMap:Et,emissiveMap:At,normalMapObjectSpace:bt&&x.normalMapType===qc,normalMapTangentSpace:bt&&x.normalMapType===Ja,packedNormalMap:bt&&x.normalMapType===Ja&&qm(x.normalMap.format),metalnessMap:ct,roughnessMap:vt,anisotropy:L,anisotropyMap:z,clearcoat:Vt,clearcoatMap:X,clearcoatNormalMap:te,clearcoatRoughnessMap:se,dispersion:Je,iridescence:w,iridescenceMap:$,iridescenceThicknessMap:Z,sheen:g,sheenColorMap:re,sheenRoughnessMap:Se,specularMap:le,specularColorMap:ae,specularIntensityMap:Te,transmission:F,transmissionMap:Re,thicknessMap:Ue,gradientMap:P,opaque:x.transparent===!1&&x.blending===gn&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Y,alphaHash:oe,combine:x.combine,mapUv:pt&&_(x.map.channel),aoMapUv:$e&&_(x.aoMap.channel),lightMapUv:He&&_(x.lightMap.channel),bumpMapUv:_t&&_(x.bumpMap.channel),normalMapUv:bt&&_(x.normalMap.channel),displacementMapUv:Et&&_(x.displacementMap.channel),emissiveMapUv:At&&_(x.emissiveMap.channel),metalnessMapUv:ct&&_(x.metalnessMap.channel),roughnessMapUv:vt&&_(x.roughnessMap.channel),anisotropyMapUv:z&&_(x.anisotropyMap.channel),clearcoatMapUv:X&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(x.sheenRoughnessMap.channel),specularMapUv:le&&_(x.specularMap.channel),specularColorMapUv:ae&&_(x.specularColorMap.channel),specularIntensityMapUv:Te&&_(x.specularIntensityMap.channel),transmissionMapUv:Re&&_(x.transmissionMap.channel),thicknessMapUv:Ue&&_(x.thicknessMap.channel),alphaMapUv:ie&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||L),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(pt||ie),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:j,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&Ve.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:At&&x.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ei,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(E,x),M(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let E=p[x.type],R;if(E){let I=Mi[E];R=rh.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new Wm(s,E,x,n),c.push(R),u.set(E,R)),R}function T(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:C}}function Ym(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function wh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Th(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,b,m,f){let M=s[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:f},s[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=_,M.materialVariant=a(h),M.groupOrder=b,M.renderOrder=h.renderOrder,M.z=m,M.group=f),e++,M}function l(h,p,_,b,m,f){let M=o(h,p,_,b,m,f);_.transmission>0?i.push(M):_.transparent===!0?n.push(M):t.push(M)}function c(h,p,_,b,m,f){let M=o(h,p,_,b,m,f);_.transmission>0?i.unshift(M):_.transparent===!0?n.unshift(M):t.unshift(M)}function u(h,p,_){t.length>1&&t.sort(h||Zm),i.length>1&&i.sort(p||wh),n.length>1&&n.sort(p||wh),_&&(t.reverse(),i.reverse(),n.reverse())}function d(){for(let h=e,p=s.length;h<p;h++){let _=s[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:u}}function Jm(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new Th,s.set(i,[a])):n>=r.length?(a=new Th,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Km(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Oe};break;case"SpotLight":t={position:new U,direction:new U,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function jm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Qm=0;function eg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tg(s){let e=new Km,t=jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let n=new U,r=new at,a=new at;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,b=0,m=0,f=0,M=0,A=0,y=0,T=0,S=0,C=0;c.sort(eg);for(let E=0,R=c.length;E<R;E++){let I=c[E],D=I.color,W=I.intensity,q=I.distance,O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===an?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=D.r*W,d+=D.g*W,h+=D.b*W;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],W);C++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,K=t.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=I.shadow.matrix,M++}i.directional[p]=H,p++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(D).multiplyScalar(W),H.distance=q,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[b]=H;let G=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,G.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[b]=G.matrix,I.castShadow){let K=t.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.spotShadow[b]=K,i.spotShadowMap[b]=O,y++}b++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(D).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let G=I.shadow,K=t.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=I.shadow.matrix,A++}i.point[_]=H,_++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(W),H.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==b||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==T||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=C,x.directionalLength=p,x.pointLength=_,x.spotLength=b,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=T,x.numLightProbes=C,i.version=Qm++)}function l(c,u){let d=0,h=0,p=0,_=0,b=0,m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let A=c[f];if(A.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let y=i.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){let y=i.hemi[b];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function Ah(s){let e=new tg(s),t=[],i=[],n=[];function r(h){d.camera=h,t.length=0,i.length=0,n.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){n.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ig(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new Ah(s),e.set(n,[o])):r>=a.length?(o=new Ah(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
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
}`,rg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ag=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ch=new at,Js=new U,Rl=new U;function og(s,e,t){let i=new jn,n=new Pe,r=new Pe,a=new ot,o=new Zr,l=new Jr,c={},u=t.maxTextureSize,d={[Pi]:zt,[zt]:Pi,[ei]:ei},h=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:ng,fragmentShader:sg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ft;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ft(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let f=this.type;this.render=function(S,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===ha&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ks);let E=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(vi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let W=f!==this.type;W&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=S.length;q<O;q++){let H=S[q],G=H.shadow;if(G===void 0){Ie("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let K=G.getFrameExtents();n.multiply(K),r.copy(G.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/K.x),n.x=r.x*K.x,G.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/K.y),n.y=r.y*K.y,G.mapSize.y=r.y));let Q=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ts){if(H.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yt(n.x,n.y,{format:an,type:yi,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new Ni(n.x,n.y,li),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=gi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Tt,G.map.depthTexture.magFilter=Tt}else H.isPointLight?(G.map=new io(n.x),G.map.depthTexture=new qr(n.x,oi)):(G.map=new Yt(n.x,n.y),G.map.depthTexture=new Ni(n.x,n.y,oi)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=gi,this.type===ks?(G.map.depthTexture.compareFunction=Q?ja:Ka,G.map.depthTexture.minFilter=Pt,G.map.depthTexture.magFilter=Pt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Tt,G.map.depthTexture.magFilter=Tt);G.camera.updateProjectionMatrix()}let he=G.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<he;me++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,me),s.clear();else{me===0&&(s.setRenderTarget(G.map),s.clear());let _e=G.getViewport(me);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),D.viewport(a)}if(H.isPointLight){let _e=G.camera,Xe=G.matrix,lt=H.distance||_e.far;lt!==_e.far&&(_e.far=lt,_e.updateProjectionMatrix()),Js.setFromMatrixPosition(H.matrixWorld),_e.position.copy(Js),Rl.copy(_e.position),Rl.add(rg[me]),_e.up.copy(ag[me]),_e.lookAt(Rl),_e.updateMatrixWorld(),Xe.makeTranslation(-Js.x,-Js.y,-Js.z),Ch.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ch,_e.coordinateSystem,_e.reversedDepth)}else G.updateMatrices(H);i=G.getFrustum(),y(C,x,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===ts&&M(G,x),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,R,I)};function M(S,C){let x=e.update(b);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Yt(n.x,n.y,{format:an,type:yi})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,x,h,b,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,x,p,b,null)}function A(S,C,x,E){let R=null,I=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=R.uuid,W=C.uuid,q=c[D];q===void 0&&(q={},c[D]=q);let O=q[W];O===void 0&&(O=R.clone(),q[W]=O,C.addEventListener("dispose",T)),R=O}if(R.visible=C.visible,R.wireframe=C.wireframe,E===ts?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=x}return R}function y(S,C,x,E,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===ts)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let W=e.update(S),q=S.material;if(Array.isArray(q)){let O=W.groups;for(let H=0,G=O.length;H<G;H++){let K=O[H],Q=q[K.materialIndex];if(Q&&Q.visible){let he=A(S,Q,E,R);S.onBeforeShadow(s,S,C,x,W,he,K),s.renderBufferDirect(x,null,W,he,S,K),S.onAfterShadow(s,S,C,x,W,he,K)}}}else if(q.visible){let O=A(S,q,E,R);S.onBeforeShadow(s,S,C,x,W,O,null),s.renderBufferDirect(x,null,W,O,S,null),S.onAfterShadow(s,S,C,x,W,O,null)}}let D=S.children;for(let W=0,q=D.length;W<q;W++)y(D[W],C,x,E,R)}function T(S){S.target.removeEventListener("dispose",T);for(let x in c){let E=c[x],R=S.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function lg(s,e){function t(){let P=!1,ie=new ot,Y=null,oe=new ot(0,0,0,0);return{setMask:function(fe){Y!==fe&&!P&&(s.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){P=fe},setClear:function(fe,j,Me,ye,ht){ht===!0&&(fe*=ye,j*=ye,Me*=ye),ie.set(fe,j,Me,ye),oe.equals(ie)===!1&&(s.clearColor(fe,j,Me,ye),oe.copy(ie))},reset:function(){P=!1,Y=null,oe.set(-1,0,0,0)}}}function i(){let P=!1,ie=!1,Y=null,oe=null,fe=null;return{setReversed:function(j){if(ie!==j){let Me=e.get("EXT_clip_control");j?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=j;let ye=fe;fe=null,this.setClear(ye)}},getReversed:function(){return ie},setTest:function(j){j?ee(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(j){Y!==j&&!P&&(s.depthMask(j),Y=j)},setFunc:function(j){if(ie&&(j=ih[j]),oe!==j){switch(j){case Ir:s.depthFunc(s.NEVER);break;case Pr:s.depthFunc(s.ALWAYS);break;case Lr:s.depthFunc(s.LESS);break;case xn:s.depthFunc(s.LEQUAL);break;case Dr:s.depthFunc(s.EQUAL);break;case Nr:s.depthFunc(s.GEQUAL);break;case Ur:s.depthFunc(s.GREATER);break;case Fr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=j}},setLocked:function(j){P=j},setClear:function(j){fe!==j&&(fe=j,ie&&(j=1-j),s.clearDepth(j))},reset:function(){P=!1,Y=null,oe=null,fe=null,ie=!1}}}function n(){let P=!1,ie=null,Y=null,oe=null,fe=null,j=null,Me=null,ye=null,ht=null;return{setTest:function(nt){P||(nt?ee(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(nt){ie!==nt&&!P&&(s.stencilMask(nt),ie=nt)},setFunc:function(nt,ci,hi){(Y!==nt||oe!==ci||fe!==hi)&&(s.stencilFunc(nt,ci,hi),Y=nt,oe=ci,fe=hi)},setOp:function(nt,ci,hi){(j!==nt||Me!==ci||ye!==hi)&&(s.stencilOp(nt,ci,hi),j=nt,Me=ci,ye=hi)},setLocked:function(nt){P=nt},setClear:function(nt){ht!==nt&&(s.clearStencil(nt),ht=nt)},reset:function(){P=!1,ie=null,Y=null,oe=null,fe=null,j=null,Me=null,ye=null,ht=null}}}let r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,_=[],b=null,m=!1,f=null,M=null,A=null,y=null,T=null,S=null,C=null,x=new Oe(0,0,0),E=0,R=!1,I=null,D=null,W=null,q=null,O=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=K>=2);let he=null,me={},_e=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),lt=new ot().fromArray(_e),qe=new ot().fromArray(Xe);function J(P,ie,Y,oe){let fe=new Uint8Array(4),j=s.createTexture();s.bindTexture(P,j),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<Y;Me++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ie+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return j}let ne={};ne[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(xn),_t(!1),bt(Zo),ee(s.CULL_FACE),$e(vi);function ee(P){u[P]!==!0&&(s.enable(P),u[P]=!0)}function Le(P){u[P]!==!1&&(s.disable(P),u[P]=!1)}function Ne(P,ie){return h[P]!==ie?(s.bindFramebuffer(P,ie),h[P]=ie,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ce(P,ie){let Y=_,oe=!1;if(P){Y=p.get(ie),Y===void 0&&(Y=[],p.set(ie,Y));let fe=P.textures;if(Y.length!==fe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let j=0,Me=fe.length;j<Me;j++)Y[j]=s.COLOR_ATTACHMENT0+j;Y.length=fe.length,oe=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,oe=!0);oe&&s.drawBuffers(Y)}function pt(P){return b!==P?(s.useProgram(P),b=P,!0):!1}let ze={[Zi]:s.FUNC_ADD,[wc]:s.FUNC_SUBTRACT,[Tc]:s.FUNC_REVERSE_SUBTRACT};ze[Ac]=s.MIN,ze[Cc]=s.MAX;let Qe={[Rc]:s.ZERO,[Ic]:s.ONE,[Pc]:s.SRC_COLOR,[Cr]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Uc]:s.DST_COLOR,[Dc]:s.DST_ALPHA,[Lc]:s.ONE_MINUS_SRC_COLOR,[Rr]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Nc]:s.ONE_MINUS_DST_ALPHA,[Bc]:s.CONSTANT_COLOR,[kc]:s.ONE_MINUS_CONSTANT_COLOR,[zc]:s.CONSTANT_ALPHA,[Vc]:s.ONE_MINUS_CONSTANT_ALPHA};function $e(P,ie,Y,oe,fe,j,Me,ye,ht,nt){if(P===vi){m===!0&&(Le(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),P!==Ec){if(P!==f||nt!==R){if((M!==Zi||T!==Zi)&&(s.blendEquation(s.FUNC_ADD),M=Zi,T=Zi),nt)switch(P){case gn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jo:s.blendFunc(s.ONE,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ae("WebGLState: Invalid blending: ",P);break}else switch(P){case gn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ko:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",P);break}A=null,y=null,S=null,C=null,x.set(0,0,0),E=0,f=P,R=nt}return}fe=fe||ie,j=j||Y,Me=Me||oe,(ie!==M||fe!==T)&&(s.blendEquationSeparate(ze[ie],ze[fe]),M=ie,T=fe),(Y!==A||oe!==y||j!==S||Me!==C)&&(s.blendFuncSeparate(Qe[Y],Qe[oe],Qe[j],Qe[Me]),A=Y,y=oe,S=j,C=Me),(ye.equals(x)===!1||ht!==E)&&(s.blendColor(ye.r,ye.g,ye.b,ht),x.copy(ye),E=ht),f=P,R=!1}function He(P,ie){P.side===ei?Le(s.CULL_FACE):ee(s.CULL_FACE);let Y=P.side===zt;ie&&(Y=!Y),_t(Y),P.blending===gn&&P.transparent===!1?$e(vi):$e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),At(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(P){I!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),I=P)}function bt(P){P!==Mc?(ee(s.CULL_FACE),P!==D&&(P===Zo?s.cullFace(s.BACK):P===Sc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),D=P}function Et(P){P!==W&&(G&&s.lineWidth(P),W=P)}function At(P,ie,Y){P?(ee(s.POLYGON_OFFSET_FILL),(q!==ie||O!==Y)&&(q=ie,O=Y,a.getReversed()&&(ie=-ie),s.polygonOffset(ie,Y))):Le(s.POLYGON_OFFSET_FILL)}function ct(P){P?ee(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function vt(P){P===void 0&&(P=s.TEXTURE0+H-1),he!==P&&(s.activeTexture(P),he=P)}function L(P,ie,Y){Y===void 0&&(he===null?Y=s.TEXTURE0+H-1:Y=he);let oe=me[Y];oe===void 0&&(oe={type:void 0,texture:void 0},me[Y]=oe),(oe.type!==P||oe.texture!==ie)&&(he!==Y&&(s.activeTexture(Y),he=Y),s.bindTexture(P,ie||ne[P]),oe.type=P,oe.texture=ie)}function Vt(){let P=me[he];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Je(){try{s.compressedTexImage2D(...arguments)}catch(P){Ae("WebGLState:",P)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(P){Ae("WebGLState:",P)}}function g(){try{s.texSubImage2D(...arguments)}catch(P){Ae("WebGLState:",P)}}function F(){try{s.texSubImage3D(...arguments)}catch(P){Ae("WebGLState:",P)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(P){Ae("WebGLState:",P)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(P){Ae("WebGLState:",P)}}function te(){try{s.texStorage2D(...arguments)}catch(P){Ae("WebGLState:",P)}}function se(){try{s.texStorage3D(...arguments)}catch(P){Ae("WebGLState:",P)}}function $(){try{s.texImage2D(...arguments)}catch(P){Ae("WebGLState:",P)}}function Z(){try{s.texImage3D(...arguments)}catch(P){Ae("WebGLState:",P)}}function re(P){return d[P]!==void 0?d[P]:s.getParameter(P)}function Se(P,ie){d[P]!==ie&&(s.pixelStorei(P,ie),d[P]=ie)}function le(P){lt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function ae(P){qe.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),qe.copy(P))}function Te(P,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let oe=Y.get(P);oe===void 0&&(oe=s.getUniformBlockIndex(ie,P.name),Y.set(P,oe))}function Re(P,ie){let oe=c.get(ie).get(P);l.get(ie)!==oe&&(s.uniformBlockBinding(ie,oe,P.__bindingPointIndex),l.set(ie,oe))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},he=null,me={},h={},p=new WeakMap,_=[],b=null,m=!1,f=null,M=null,A=null,y=null,T=null,S=null,C=null,x=new Oe(0,0,0),E=0,R=!1,I=null,D=null,W=null,q=null,O=null,lt.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Le,bindFramebuffer:Ne,drawBuffers:Ce,useProgram:pt,setBlending:$e,setMaterial:He,setFlipSided:_t,setCullFace:bt,setLineWidth:Et,setPolygonOffset:At,setScissorTest:ct,activeTexture:vt,bindTexture:L,unbindTexture:Vt,compressedTexImage2D:Je,compressedTexImage3D:w,texImage2D:$,texImage3D:Z,pixelStorei:Se,getParameter:re,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:te,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:le,viewport:ae,reset:Ue}}function cg(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap,d=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,g){return _?new OffscreenCanvas(w,g):xs("canvas")}function m(w,g,F){let z=1,X=Je(w);if((X.width>F||X.height>F)&&(z=F/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let te=Math.floor(z*X.width),se=Math.floor(z*X.height);h===void 0&&(h=b(te,se));let $=g?b(te,se):h;return $.width=te,$.height=se,$.getContext("2d").drawImage(w,0,0,te,se),Ie("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+te+"x"+se+")."),$}else return"data"in w&&Ie("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function f(w){return w.generateMipmaps}function M(w){s.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(w,g,F,z,X,te=!1){if(w!==null){if(s[w]!==void 0)return s[w];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se;z&&(se=e.get("EXT_texture_norm16"),se||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===s.RED&&(F===s.FLOAT&&($=s.R32F),F===s.HALF_FLOAT&&($=s.R16F),F===s.UNSIGNED_BYTE&&($=s.R8),F===s.UNSIGNED_SHORT&&se&&($=se.R16_EXT),F===s.SHORT&&se&&($=se.R16_SNORM_EXT)),g===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.R8UI),F===s.UNSIGNED_SHORT&&($=s.R16UI),F===s.UNSIGNED_INT&&($=s.R32UI),F===s.BYTE&&($=s.R8I),F===s.SHORT&&($=s.R16I),F===s.INT&&($=s.R32I)),g===s.RG&&(F===s.FLOAT&&($=s.RG32F),F===s.HALF_FLOAT&&($=s.RG16F),F===s.UNSIGNED_BYTE&&($=s.RG8),F===s.UNSIGNED_SHORT&&se&&($=se.RG16_EXT),F===s.SHORT&&se&&($=se.RG16_SNORM_EXT)),g===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RG8UI),F===s.UNSIGNED_SHORT&&($=s.RG16UI),F===s.UNSIGNED_INT&&($=s.RG32UI),F===s.BYTE&&($=s.RG8I),F===s.SHORT&&($=s.RG16I),F===s.INT&&($=s.RG32I)),g===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGB8UI),F===s.UNSIGNED_SHORT&&($=s.RGB16UI),F===s.UNSIGNED_INT&&($=s.RGB32UI),F===s.BYTE&&($=s.RGB8I),F===s.SHORT&&($=s.RGB16I),F===s.INT&&($=s.RGB32I)),g===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&($=s.RGBA8UI),F===s.UNSIGNED_SHORT&&($=s.RGBA16UI),F===s.UNSIGNED_INT&&($=s.RGBA32UI),F===s.BYTE&&($=s.RGBA8I),F===s.SHORT&&($=s.RGBA16I),F===s.INT&&($=s.RGBA32I)),g===s.RGB&&(F===s.UNSIGNED_SHORT&&se&&($=se.RGB16_EXT),F===s.SHORT&&se&&($=se.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),g===s.RGBA){let Z=te?gs:Ve.getTransfer(X);F===s.FLOAT&&($=s.RGBA32F),F===s.HALF_FLOAT&&($=s.RGBA16F),F===s.UNSIGNED_BYTE&&($=Z===Ze?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&se&&($=se.RGBA16_EXT),F===s.SHORT&&se&&($=se.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(w,g){let F;return w?g===null||g===oi||g===ns?F=s.DEPTH24_STENCIL8:g===li?F=s.DEPTH32F_STENCIL8:g===is&&(F=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===oi||g===ns?F=s.DEPTH_COMPONENT24:g===li?F=s.DEPTH_COMPONENT32F:g===is&&(F=s.DEPTH_COMPONENT16),F}function S(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==Pt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){let g=w.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(w){let g=w.target;g.removeEventListener("dispose",x),I(g)}function E(w){let g=i.get(w);if(g.__webglInit===void 0)return;let F=w.source,z=p.get(F);if(z){let X=z[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(w),Object.keys(z).length===0&&p.delete(F)}i.remove(w)}function R(w){let g=i.get(w);s.deleteTexture(g.__webglTexture);let F=w.source,z=p.get(F);delete z[g.__cacheKey],a.memory.textures--}function I(w){let g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let X=0;X<g.__webglFramebuffer[z].length;X++)s.deleteFramebuffer(g.__webglFramebuffer[z][X]);else s.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)s.deleteFramebuffer(g.__webglFramebuffer[z]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=w.textures;for(let z=0,X=F.length;z<X;z++){let te=i.get(F[z]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(F[z])}i.remove(w)}let D=0;function W(){D=0}function q(){return D}function O(w){D=w}function H(){let w=D;return w>=n.maxTextures&&Ie("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),D+=1,w}function G(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function K(w,g){let F=i.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let z=w.image;if(z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(F,w,g);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+g)}function Q(w,g){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Le(F,w,g);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+g)}function he(w,g){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Le(F,w,g);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+g)}function me(w,g){let F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Ne(F,w,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+g)}let _e={[Wn]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[Or]:s.MIRRORED_REPEAT},Xe={[Tt]:s.NEAREST,[Wc]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[fa]:s.LINEAR_MIPMAP_NEAREST,[sn]:s.LINEAR_MIPMAP_LINEAR},lt={[$c]:s.NEVER,[jc]:s.ALWAYS,[Yc]:s.LESS,[Ka]:s.LEQUAL,[Zc]:s.EQUAL,[ja]:s.GEQUAL,[Jc]:s.GREATER,[Kc]:s.NOTEQUAL};function qe(w,g){if(g.type===li&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pt||g.magFilter===fa||g.magFilter===Gs||g.magFilter===sn||g.minFilter===Pt||g.minFilter===fa||g.minFilter===Gs||g.minFilter===sn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,_e[g.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,_e[g.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,_e[g.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Xe[g.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Xe[g.minFilter]),g.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,lt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Tt||g.minFilter!==Gs&&g.minFilter!==sn||g.type===li&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function J(w,g){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));let z=g.source,X=p.get(z);X===void 0&&(X={},p.set(z,X));let te=G(g);if(te!==w.__cacheKey){X[te]===void 0&&(X[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[te].usedTimes++;let se=X[w.__cacheKey];se!==void 0&&(X[w.__cacheKey].usedTimes--,se.usedTimes===0&&R(g)),w.__cacheKey=te,w.__webglTexture=X[te].texture}return F}function ne(w,g,F){return Math.floor(Math.floor(w/F)/g)}function ee(w,g,F,z){let te=w.updateRanges;if(te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,F,z,g.data);else{te.sort((Se,le)=>Se.start-le.start);let se=0;for(let Se=1;Se<te.length;Se++){let le=te[se],ae=te[Se],Te=le.start+le.count,Re=ne(ae.start,g.width,4),Ue=ne(le.start,g.width,4);ae.start<=Te+1&&Re===Ue&&ne(ae.start+ae.count-1,g.width,4)===Re?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++se,te[se]=ae)}te.length=se+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),Z=t.getParameter(s.UNPACK_SKIP_PIXELS),re=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let Se=0,le=te.length;Se<le;Se++){let ae=te[Se],Te=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Ue=Te%g.width,P=Math.floor(Te/g.width),ie=Re,Y=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,P),t.texSubImage2D(s.TEXTURE_2D,0,Ue,P,ie,Y,F,z,g.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(s.UNPACK_SKIP_ROWS,re)}}function Le(w,g,F){let z=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=s.TEXTURE_3D);let X=J(w,g),te=g.source;t.bindTexture(z,w.__webglTexture,s.TEXTURE0+F);let se=i.get(te);if(te.version!==se.__version||X===!0){if(t.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Y=Ve.getPrimaries(Ve.workingColorSpace),oe=g.colorSpace===Ui?null:Ve.getPrimaries(g.colorSpace),fe=g.colorSpace===Ui||Y===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment);let Z=m(g.image,!1,n.maxTextureSize);Z=Vt(g,Z);let re=r.convert(g.format,g.colorSpace),Se=r.convert(g.type),le=y(g.internalFormat,re,Se,g.normalized,g.colorSpace,g.isVideoTexture);qe(z,g);let ae,Te=g.mipmaps,Re=g.isVideoTexture!==!0,Ue=se.__version===void 0||X===!0,P=te.dataReady,ie=S(g,Z);if(g.isDepthTexture)le=T(g.format===rn,g.type),Ue&&(Re?t.texStorage2D(s.TEXTURE_2D,1,le,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,le,Z.width,Z.height,0,re,Se,null));else if(g.isDataTexture)if(Te.length>0){Re&&Ue&&t.texStorage2D(s.TEXTURE_2D,ie,le,Te[0].width,Te[0].height);for(let Y=0,oe=Te.length;Y<oe;Y++)ae=Te[Y],Re?P&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ae.width,ae.height,re,Se,ae.data):t.texImage2D(s.TEXTURE_2D,Y,le,ae.width,ae.height,0,re,Se,ae.data);g.generateMipmaps=!1}else Re?(Ue&&t.texStorage2D(s.TEXTURE_2D,ie,le,Z.width,Z.height),P&&ee(g,Z,re,Se)):t.texImage2D(s.TEXTURE_2D,0,le,Z.width,Z.height,0,re,Se,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,le,Te[0].width,Te[0].height,Z.depth);for(let Y=0,oe=Te.length;Y<oe;Y++)if(ae=Te[Y],g.format!==ti)if(re!==null)if(Re){if(P)if(g.layerUpdates.size>0){let fe=_l(ae.width,ae.height,g.format,g.type);for(let j of g.layerUpdates){let Me=ae.data.subarray(j*fe/ae.data.BYTES_PER_ELEMENT,(j+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,j,ae.width,ae.height,1,re,Me)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,Z.depth,re,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,le,ae.width,ae.height,Z.depth,0,ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,Z.depth,re,Se,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,le,ae.width,ae.height,Z.depth,0,re,Se,ae.data)}else{Re&&Ue&&t.texStorage2D(s.TEXTURE_2D,ie,le,Te[0].width,Te[0].height);for(let Y=0,oe=Te.length;Y<oe;Y++)ae=Te[Y],g.format!==ti?re!==null?Re?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,le,ae.width,ae.height,0,ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?P&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ae.width,ae.height,re,Se,ae.data):t.texImage2D(s.TEXTURE_2D,Y,le,ae.width,ae.height,0,re,Se,ae.data)}else if(g.isDataArrayTexture)if(Re){if(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,le,Z.width,Z.height,Z.depth),P)if(g.layerUpdates.size>0){let Y=_l(Z.width,Z.height,g.format,g.type);for(let oe of g.layerUpdates){let fe=Z.data.subarray(oe*Y/Z.data.BYTES_PER_ELEMENT,(oe+1)*Y/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,Z.width,Z.height,1,re,Se,fe)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,re,Se,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,le,Z.width,Z.height,Z.depth,0,re,Se,Z.data);else if(g.isData3DTexture)Re?(Ue&&t.texStorage3D(s.TEXTURE_3D,ie,le,Z.width,Z.height,Z.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,re,Se,Z.data)):t.texImage3D(s.TEXTURE_3D,0,le,Z.width,Z.height,Z.depth,0,re,Se,Z.data);else if(g.isFramebufferTexture){if(Ue)if(Re)t.texStorage2D(s.TEXTURE_2D,ie,le,Z.width,Z.height);else{let Y=Z.width,oe=Z.height;for(let fe=0;fe<ie;fe++)t.texImage2D(s.TEXTURE_2D,fe,le,Y,oe,0,re,Se,null),Y>>=1,oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in s){let Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Z.parentNode!==Y){Y.appendChild(Z),d.add(g),Y.onpaint=oe=>{let fe=oe.changedElements;for(let j of d)fe.includes(j.image)&&(j.needsUpdate=!0)},Y.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Z);else{let fe=s.RGBA,j=s.RGBA,Me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,fe,j,Me,Z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Re&&Ue){let Y=Je(Te[0]);t.texStorage2D(s.TEXTURE_2D,ie,le,Y.width,Y.height)}for(let Y=0,oe=Te.length;Y<oe;Y++)ae=Te[Y],Re?P&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,re,Se,ae):t.texImage2D(s.TEXTURE_2D,Y,le,re,Se,ae);g.generateMipmaps=!1}else if(Re){if(Ue){let Y=Je(Z);t.texStorage2D(s.TEXTURE_2D,ie,le,Y.width,Y.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,Se,Z)}else t.texImage2D(s.TEXTURE_2D,0,le,re,Se,Z);f(g)&&M(z),se.__version=te.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ne(w,g,F){if(g.image.length!==6)return;let z=J(w,g),X=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);let te=i.get(X);if(X.version!==te.__version||z===!0){t.activeTexture(s.TEXTURE0+F);let se=Ve.getPrimaries(Ve.workingColorSpace),$=g.colorSpace===Ui?null:Ve.getPrimaries(g.colorSpace),Z=g.colorSpace===Ui||se===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let re=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!re&&!Se?le[j]=m(g.image[j],!0,n.maxCubemapSize):le[j]=Se?g.image[j].image:g.image[j],le[j]=Vt(g,le[j]);let ae=le[0],Te=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),Ue=y(g.internalFormat,Te,Re,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,ie=te.__version===void 0||z===!0,Y=X.dataReady,oe=S(g,ae);qe(s.TEXTURE_CUBE_MAP,g);let fe;if(re){P&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ue,ae.width,ae.height);for(let j=0;j<6;j++){fe=le[j].mipmaps;for(let Me=0;Me<fe.length;Me++){let ye=fe[Me];g.format!==ti?Te!==null?P?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Ue,ye.width,ye.height,0,ye.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,ye.width,ye.height,Te,Re,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Ue,ye.width,ye.height,0,Te,Re,ye.data)}}}else{if(fe=g.mipmaps,P&&ie){fe.length>0&&oe++;let j=Je(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(Se){P?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,Te,Re,le[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,le[j].width,le[j].height,0,Te,Re,le[j].data);for(let Me=0;Me<fe.length;Me++){let ht=fe[Me].image[j].image;P?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,ht.width,ht.height,Te,Re,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Ue,ht.width,ht.height,0,Te,Re,ht.data)}}else{P?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,Re,le[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,Te,Re,le[j]);for(let Me=0;Me<fe.length;Me++){let ye=fe[Me];P?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,Te,Re,ye.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Ue,Te,Re,ye.image[j])}}}f(g)&&M(s.TEXTURE_CUBE_MAP),te.__version=X.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ce(w,g,F,z,X,te){let se=r.convert(F.format,F.colorSpace),$=r.convert(F.type),Z=y(F.internalFormat,se,$,F.normalized,F.colorSpace),re=i.get(g),Se=i.get(F);if(Se.__renderTarget=g,!re.__hasExternalTextures){let le=Math.max(1,g.width>>te),ae=Math.max(1,g.height>>te);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?t.texImage3D(X,te,Z,le,ae,g.depth,0,se,$,null):t.texImage2D(X,te,Z,le,ae,0,se,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),vt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,X,Se.__webglTexture,0,ct(g)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,z,X,Se.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(w,g,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),g.depthBuffer){let z=g.depthTexture,X=z&&z.isDepthTexture?z.type:null,te=T(g.stencilBuffer,X),se=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(g),te,g.width,g.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(g),te,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,te,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,w)}else{let z=g.textures;for(let X=0;X<z.length;X++){let te=z[X],se=r.convert(te.format,te.colorSpace),$=r.convert(te.type),Z=y(te.internalFormat,se,$,te.normalized,te.colorSpace);vt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(g),Z,g.width,g.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(g),Z,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,Z,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(w,g,F){let z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),qe(s.TEXTURE_CUBE_MAP,g.depthTexture);let re=r.convert(g.depthTexture.format),Se=r.convert(g.depthTexture.type),le;g.depthTexture.format===gi?le=s.DEPTH_COMPONENT24:g.depthTexture.format===rn&&(le=s.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,g.width,g.height,0,re,Se,null)}}else K(g.depthTexture,0);let te=X.__webglTexture,se=ct(g),$=z?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,Z=g.depthTexture.format===rn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===gi)vt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,te,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,te,0);else if(g.depthTexture.format===rn)vt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,te,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(w){let g=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=z}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let z=0;z<6;z++)ze(g.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?ze(g.__webglFramebuffer[0],w,0):ze(g.__webglFramebuffer,w,0)}else if(F){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=s.createRenderbuffer(),pt(g.__webglDepthbuffer[z],w,!1);else{let X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[z];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,te)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),pt(g.__webglDepthbuffer,w,!1);else{let X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(w,g,F){let z=i.get(w);g!==void 0&&Ce(z.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Qe(w)}function He(w){let g=w.texture,F=i.get(w),z=i.get(g);w.addEventListener("dispose",x);let X=w.textures,te=w.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture()),z.__version=g.version,a.memory.textures++),te){F.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[$]=[];for(let Z=0;Z<g.mipmaps.length;Z++)F.__webglFramebuffer[$][Z]=s.createFramebuffer()}else F.__webglFramebuffer[$]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)F.__webglFramebuffer[$]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(se)for(let $=0,Z=X.length;$<Z;$++){let re=i.get(X[$]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&vt(w)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let $=0;$<X.length;$++){let Z=X[$];F.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let re=r.convert(Z.format,Z.colorSpace),Se=r.convert(Z.type),le=y(Z.internalFormat,re,Se,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),ae=ct(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,le,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,F.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture),qe(s.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Ce(F.__webglFramebuffer[$][Z],w,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Z);else Ce(F.__webglFramebuffer[$],w,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let $=0,Z=X.length;$<Z;$++){let re=X[$],Se=i.get(re),le=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Se.__webglTexture),qe(le,re),Ce(F.__webglFramebuffer,w,re,s.COLOR_ATTACHMENT0+$,le,0),f(re)&&M(le)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,z.__webglTexture),qe($,g),g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Ce(F.__webglFramebuffer[Z],w,g,s.COLOR_ATTACHMENT0,$,Z);else Ce(F.__webglFramebuffer,w,g,s.COLOR_ATTACHMENT0,$,0);f(g)&&M($),t.unbindTexture()}w.depthBuffer&&Qe(w)}function _t(w){let g=w.textures;for(let F=0,z=g.length;F<z;F++){let X=g[F];if(f(X)){let te=A(w),se=i.get(X).__webglTexture;t.bindTexture(te,se),M(te),t.unbindTexture()}}}let bt=[],Et=[];function At(w){if(w.samples>0){if(vt(w)===!1){let g=w.textures,F=w.width,z=w.height,X=s.COLOR_BUFFER_BIT,te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=i.get(w),$=g.length>1;if($)for(let re=0;re<g.length;re++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let Z=w.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Se=i.get(g[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,F,z,0,0,F,z,X,s.NEAREST),l===!0&&(bt.length=0,Et.length=0,bt.push(s.COLOR_ATTACHMENT0+re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(bt.push(te),Et.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let re=0;re<g.length;re++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Se=i.get(g[re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let g=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function ct(w){return Math.min(n.maxSamples,w.samples)}function vt(w){let g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(w){let g=a.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function Vt(w,g){let F=w.colorSpace,z=w.format,X=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==ms&&F!==Ui&&(Ve.getTransfer(F)===Ze?(z!==ti||X!==Wt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",F)),g}function Je(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=me,this.rebindTextures=$e,this.setupRenderTarget=He,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hg(s,e){function t(i,n=Ui){let r,a=Ve.getTransfer(n);if(i===Wt)return s.UNSIGNED_BYTE;if(i===ma)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return s.UNSIGNED_SHORT_5_5_5_1;if(i===cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===ol)return s.BYTE;if(i===ll)return s.SHORT;if(i===is)return s.UNSIGNED_SHORT;if(i===pa)return s.INT;if(i===oi)return s.UNSIGNED_INT;if(i===li)return s.FLOAT;if(i===yi)return s.HALF_FLOAT;if(i===ul)return s.ALPHA;if(i===dl)return s.RGB;if(i===ti)return s.RGBA;if(i===gi)return s.DEPTH_COMPONENT;if(i===rn)return s.DEPTH_STENCIL;if(i===fl)return s.RED;if(i===xa)return s.RED_INTEGER;if(i===an)return s.RG;if(i===_a)return s.RG_INTEGER;if(i===va)return s.RGBA_INTEGER;if(i===Hs||i===Ws||i===Xs||i===qs)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ya||i===ba||i===Ma||i===Sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===$s||i===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===wa)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ta)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Aa)return r.COMPRESSED_R11_EAC;if(i===Ca)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$s)return r.COMPRESSED_RG11_EAC;if(i===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ia||i===Pa||i===La||i===Da||i===Na||i===Ua||i===Fa||i===Oa||i===Ba||i===ka||i===za||i===Va||i===Ga||i===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ia)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===La)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Da)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Na)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ua)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ba)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ka)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Va)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ga)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===Xa||i===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wa)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$a||i===Ya||i===Ys||i===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ys)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
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

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new As(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zt({vertexShader:ug,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends xi{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null,b=typeof XRWebGLBinding<"u",m=new Ol,f={},M=t.getContextAttributes(),A=null,y=null,T=[],S=[],C=new Pe,x=null,E=new Gt;E.viewport=new ot;let R=new Gt;R.viewport=new ot;let I=[E,R],D=new la,W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=T[J];return ne===void 0&&(ne=new Zn,T[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=T[J];return ne===void 0&&(ne=new Zn,T[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=T[J];return ne===void 0&&(ne=new Zn,T[J]=ne),ne.getHandSpace()};function O(J){let ne=S.indexOf(J.inputSource);if(ne===-1)return;let ee=T[ne];ee!==void 0&&(ee.update(J.inputSource,J.frame,c||a),ee.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",G);for(let J=0;J<T.length;J++){let ne=S[J];ne!==null&&(S[J]=null,T[J].disconnect(ne))}W=null,q=null,m.reset();for(let J in f)delete f[J];e.setRenderTarget(A),p=null,h=null,d=null,n=null,y=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",H),n.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Le=null,Ne=null;M.depth&&(Ne=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=M.stencil?rn:gi,Le=M.stencil?ns:oi);let Ce={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ce),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Yt(h.textureWidth,h.textureHeight,{format:ti,type:Wt,depthTexture:new Ni(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Yt(p.framebufferWidth,p.framebufferHeight,{format:ti,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),qe.setContext(n),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let ne=0;ne<J.removed.length;ne++){let ee=J.removed[ne],Le=S.indexOf(ee);Le>=0&&(S[Le]=null,T[Le].disconnect(ee))}for(let ne=0;ne<J.added.length;ne++){let ee=J.added[ne],Le=S.indexOf(ee);if(Le===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=S.length){S.push(ee),Le=Ce;break}else if(S[Ce]===null){S[Ce]=ee,Le=Ce;break}if(Le===-1)break}let Ne=T[Le];Ne&&Ne.connect(ee)}}let K=new U,Q=new U;function he(J,ne,ee){K.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);let Le=K.distanceTo(Q),Ne=ne.projectionMatrix.elements,Ce=ee.projectionMatrix.elements,pt=Ne[14]/(Ne[10]-1),ze=Ne[14]/(Ne[10]+1),Qe=(Ne[9]+1)/Ne[5],$e=(Ne[9]-1)/Ne[5],He=(Ne[8]-1)/Ne[0],_t=(Ce[8]+1)/Ce[0],bt=pt*He,Et=pt*_t,At=Le/(-He+_t),ct=At*-He;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ct),J.translateZ(At),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let vt=pt+At,L=ze+At,Vt=bt-ct,Je=Et+(Le-ct),w=Qe*ze/L*vt,g=$e*ze/L*vt;J.projectionMatrix.makePerspective(Vt,Je,w,g,vt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function me(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ne=J.near,ee=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),D.near=R.near=E.near=ne,D.far=R.far=E.far=ee,(W!==D.near||q!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),W=D.near,q=D.far),D.layers.mask=J.layers.mask|6,E.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let Le=J.parent,Ne=D.cameras;me(D,Le);for(let Ce=0;Ce<Ne.length;Ce++)me(Ne[Ce],Le);Ne.length===2?he(D,E,R):D.projectionMatrix.copy(E.projectionMatrix),_e(J,D,Le)};function _e(J,ne,ee){ee===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(J){return f[J]};let Xe=null;function lt(J,ne){if(u=ne.getViewerPose(c||a),_=ne,u!==null){let ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Le=!1;ee.length!==D.cameras.length&&(D.cameras.length=0,Le=!0);for(let ze=0;ze<ee.length;ze++){let Qe=ee[ze],$e=null;if(p!==null)$e=p.getViewport(Qe);else{let _t=d.getViewSubImage(h,Qe);$e=_t.viewport,ze===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let He=I[ze];He===void 0&&(He=new Gt,He.layers.enable(ze),He.viewport=new ot,I[ze]=He),He.matrix.fromArray(Qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set($e.x,$e.y,$e.width,$e.height),ze===0&&(D.matrix.copy(He.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Le===!0&&D.cameras.push(He)}let Ne=n.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let ze=d.getDepthInformation(ee[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,n.renderState)}if(Ne&&Ne.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<ee.length;ze++){let Qe=ee[ze].camera;if(Qe){let $e=f[Qe];$e||($e=new As,f[Qe]=$e);let He=d.getCameraImage(Qe);$e.sourceTexture=He}}}}for(let ee=0;ee<T.length;ee++){let Le=S[ee],Ne=T[ee];Le!==null&&Ne!==void 0&&Ne.update(Le,ne,c||a)}Xe&&Xe(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}let qe=new Rh;qe.setAnimationLoop(lt),this.setAnimationLoop=function(J){Xe=J},this.dispose=function(){}}},fg=new at,Uh=new De;Uh.set(-1,0,0,0,1,0,0,0,1);function pg(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ml(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,M,A,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),A=M.envMap,y=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(fg.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function mg(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let S=T.program;i.uniformBlockBinding(y,S)}function c(y,T){let S=n[y.id];S===void 0&&(m(y),S=u(y),n[y.id]=S,y.addEventListener("dispose",M));let C=T.program;i.updateUBOMapping(y,C);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let T=d();y.__bindingPointIndex=T;let S=s.createBuffer(),C=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=n[y.id],S=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let x=0,E=S.length;x<E;x++){let R=S[x];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)p(R[I],x,I,C);else p(R,x,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,T,S,C){if(b(y,T,S,C)===!0){let x=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){let D=E[I],W=f(D);_(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function _(y,T,S){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,S)}function b(y,T,S,C){let x=y.value,E=T+"_"+S;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let R=C[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let T=y.uniforms,S=0,C=16;for(let E=0,R=T.length;E<R;E++){let I=Array.isArray(T[E])?T[E]:[T[E]];for(let D=0,W=I.length;D<W;D++){let q=I[D],O=Array.isArray(q.value)?q.value:[q.value];for(let H=0,G=O.length;H<G;H++){let K=O[H],Q=f(K),he=S%C,me=he%Q.boundary,_e=he+me;S+=me,_e!==0&&C-_e<Q.storage&&(S+=C-_e),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Q.storage}}}let x=S%C;return x>0&&(S+=C-x),y.__size=S,y.__cache={},this}function f(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),T}function M(y){let T=y.target;T.removeEventListener("dispose",M);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function A(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:A}}var gg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function xg(){return bi===null&&(bi=new Xr(gg,16,16,an,yi),bi.name="DFG_LUT",bi.minFilter=Pt,bi.magFilter=Pt,bi.wrapS=mi,bi.wrapT=mi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var no=class{constructor(e={}){let{canvas:t=Qc(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Wt}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let b=p,m=new Set([va,_a,xa]),f=new Set([Wt,oi,is,ns,ma,ga]),M=new Uint32Array(4),A=new Int32Array(4),y=new U,T=null,S=null,C=[],x=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,D=null,W=null,q=null,O=null;this._outputColorSpace=It;let H=0,G=0,K=null,Q=-1,he=null,me=new ot,_e=new ot,Xe=null,lt=new Oe(0),qe=0,J=t.width,ne=t.height,ee=1,Le=null,Ne=null,Ce=new ot(0,0,J,ne),pt=new ot(0,0,J,ne),ze=!1,Qe=new jn,$e=!1,He=!1,_t=new at,bt=new U,Et=new ot,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function vt(){return K===null?ee:1}let L=i;function Vt(v,N){return t.getContext(v,N)}try{let v={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",ci,!1),L===null){let N="webgl2";if(L=Vt(N,v),L===null)throw Vt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ae("WebGLRenderer: "+v.message),v}let Je,w,g,F,z,X,te,se,$,Z,re,Se,le,ae,Te,Re,Ue,P,ie,Y,oe,fe,j;function Me(){Je=new Ep(L),Je.init(),oe=new hg(L,Je),w=new gp(L,Je,e,oe),g=new lg(L,Je),w.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),W=L.createFramebuffer(),q=L.createFramebuffer(),O=L.createFramebuffer(),F=new Ap(L),z=new Ym,X=new cg(L,Je,g,z,w,oe,F),te=new Sp(R),se=new Iu(L),fe=new pp(L,se),$=new wp(L,se,F,fe),Z=new Rp(L,$,se,fe,F),P=new Cp(L,w,X),Te=new xp(z),re=new $m(R,te,Je,w,fe,Te),Se=new pg(R,z),le=new Jm,ae=new ig(Je),Ue=new fp(R,te,g,Z,_,l),Re=new og(R,Z,w),j=new mg(L,F,w,g),ie=new mp(L,Je,F),Y=new Tp(L,Je,F),F.programs=re.programs,R.capabilities=w,R.extensions=Je,R.properties=z,R.renderLists=le,R.shadowMap=Re,R.state=g,R.info=F}Me(),b!==Wt&&(E=new Pp(b,t.width,t.height,o,n,r));let ye=new Bl(R,L);this.xr=ye,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=Je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(J,ne,!1))},this.getSize=function(v){return v.set(J,ne)},this.setSize=function(v,N,V=!0){if(ye.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}J=v,ne=N,t.width=Math.floor(v*ee),t.height=Math.floor(N*ee),V===!0&&(t.style.width=v+"px",t.style.height=N+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(J*ee,ne*ee).floor()},this.setDrawingBufferSize=function(v,N,V){J=v,ne=N,ee=V,t.width=Math.floor(v*V),t.height=Math.floor(N*V),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(b===Wt){Ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(me)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,N,V,B){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,N,V,B),g.viewport(me.copy(Ce).multiplyScalar(ee).round())},this.getScissor=function(v){return v.copy(pt)},this.setScissor=function(v,N,V,B){v.isVector4?pt.set(v.x,v.y,v.z,v.w):pt.set(v,N,V,B),g.scissor(_e.copy(pt).multiplyScalar(ee).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(v){g.setScissorTest(ze=v)},this.setOpaqueSort=function(v){Le=v},this.setTransparentSort=function(v){Ne=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,V=!0){let B=0;if(v){let k=!1;if(K!==null){let de=K.texture.format;k=m.has(de)}if(k){let de=K.texture.type,xe=f.has(de),ue=Ue.getClearColor(),be=Ue.getClearAlpha(),Ee=ue.r,Fe=ue.g,ke=ue.b;xe?(M[0]=Ee,M[1]=Fe,M[2]=ke,M[3]=be,L.clearBufferuiv(L.COLOR,0,M)):(A[0]=Ee,A[1]=Fe,A[2]=ke,A[3]=be,L.clearBufferiv(L.COLOR,0,A))}else B|=L.COLOR_BUFFER_BIT}N&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),D=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",ci,!1),Ue.dispose(),le.dispose(),ae.dispose(),z.dispose(),te.dispose(),Z.dispose(),fe.dispose(),j.dispose(),re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",zl),ye.removeEventListener("sessionend",Vl),ln.stop()};function ht(v){v.preventDefault(),_s("WebGLRenderer: Context Lost."),I=!0}function nt(){_s("WebGLRenderer: Context Restored."),I=!1;let v=F.autoReset,N=Re.enabled,V=Re.autoUpdate,B=Re.needsUpdate,k=Re.type;Me(),F.autoReset=v,Re.enabled=N,Re.autoUpdate=V,Re.needsUpdate=B,Re.type=k}function ci(v){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function hi(v){let N=v.target;N.removeEventListener("dispose",hi),Oh(N)}function Oh(v){Bh(v),z.remove(v)}function Bh(v){let N=z.get(v).programs;N!==void 0&&(N.forEach(function(V){re.releaseProgram(V)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,V,B,k,de){N===null&&(N=At);let xe=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=Vh(v,N,V,B,k);g.setMaterial(B,xe);let be=V.index,Ee=1;if(B.wireframe===!0){if(be=$.getWireframeAttribute(V),be===void 0)return;Ee=2}let Fe=V.drawRange,ke=V.attributes.position,we=Fe.start*Ee,Ke=(Fe.start+Fe.count)*Ee;de!==null&&(we=Math.max(we,de.start*Ee),Ke=Math.min(Ke,(de.start+de.count)*Ee)),be!==null?(we=Math.max(we,0),Ke=Math.min(Ke,be.count)):ke!=null&&(we=Math.max(we,0),Ke=Math.min(Ke,ke.count));let mt=Ke-we;if(mt<0||mt===1/0)return;fe.setup(k,B,ue,V,be);let ut,et=ie;if(be!==null&&(ut=se.get(be),et=Y,et.setIndex(ut)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*vt()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(k.isLine){let Dt=B.linewidth;Dt===void 0&&(Dt=1),g.setLineWidth(Dt*vt()),k.isLineSegments?et.setMode(L.LINES):k.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else k.isPoints?et.setMode(L.POINTS):k.isSprite&&et.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Dt=k._multiDrawStarts,ge=k._multiDrawCounts,Xt=k._multiDrawCount,We=be?se.get(be).bytesPerElement:1,Kt=z.get(B).currentProgram.getUniforms();for(let ui=0;ui<Xt;ui++)Kt.setValue(L,"_gl_DrawID",ui),et.render(Dt[ui]/We,ge[ui])}else if(k.isInstancedMesh)et.renderInstances(we,mt,k.count);else if(V.isInstancedBufferGeometry){let Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,Dt);et.renderInstances(we,mt,ge)}else et.render(we,mt)};function kl(v,N,V){v.transparent===!0&&v.side===ei&&v.forceSinglePass===!1?(v.side=zt,v.needsUpdate=!0,Qs(v,N,V),v.side=Pi,v.needsUpdate=!0,Qs(v,N,V),v.side=ei):Qs(v,N,V)}this.compile=function(v,N,V=null){V===null&&(V=v),S=ae.get(V),S.init(N),x.push(S),V.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),v!==V&&v.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();let B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){let ue=de[xe];kl(ue,V,k),B.add(ue)}else kl(de,V,k),B.add(de)}),S=x.pop(),B},this.compileAsync=function(v,N,V=null){let B=this.compile(v,N,V);return new Promise(k=>{function de(){if(B.forEach(function(xe){z.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){k(v);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ho=null;function kh(v){ho&&ho(v)}function zl(){ln.stop()}function Vl(){ln.start()}let ln=new Rh;ln.setAnimationLoop(kh),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(v){ho=v,ye.setAnimationLoop(v),v===null?ln.stop():ln.start()},ye.addEventListener("sessionstart",zl),ye.addEventListener("sessionend",Vl),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(v,N);let V=ye.enabled===!0&&ye.isPresenting===!0,B=E!==null&&(K===null||V)&&E.begin(R,K);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(N),N=ye.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,N,K),S=ae.get(v,x.length),S.init(N),S.state.textureUnits=X.getTextureUnits(),x.push(S),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(_t,ri,N.reversedDepth),He=this.localClippingEnabled,$e=Te.init(this.clippingPlanes,He),T=le.get(v,C.length),T.init(),C.push(T),ye.enabled===!0&&ye.isPresenting===!0){let xe=R.xr.getDepthSensingMesh();xe!==null&&uo(xe,N,-1/0,R.sortObjects)}uo(v,N,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Le,Ne,N.reversedDepth),ct=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ct&&Ue.addToRenderList(T,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Te.beginShadows();let k=S.state.shadowsArray;if(Re.render(k,v,N),$e===!0&&Te.endShadows(),(B&&E.hasRenderPass())===!1){let xe=T.opaque,ue=T.transmissive;if(S.setupLights(),N.isArrayCamera){let be=N.cameras;if(ue.length>0)for(let Ee=0,Fe=be.length;Ee<Fe;Ee++){let ke=be[Ee];Hl(xe,ue,v,ke)}ct&&Ue.render(v);for(let Ee=0,Fe=be.length;Ee<Fe;Ee++){let ke=be[Ee];Gl(T,v,ke,ke.viewport)}}else ue.length>0&&Hl(xe,ue,v,N),ct&&Ue.render(v),Gl(T,v,N)}K!==null&&G===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),B&&E.end(R),v.isScene===!0&&v.onAfterRender(R,v,N),fe.resetDefaultState(),Q=-1,he=null,x.pop(),x.length>0?(S=x[x.length-1],X.setTextureUnits(S.state.textureUnits),$e===!0&&Te.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,D!==null&&D.renderEnd()};function uo(v,N,V,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){B&&Et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(_t);let xe=Z.update(v),ue=v.material;ue.visible&&T.push(v,xe,ue,V,Et.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){let xe=Z.update(v),ue=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Et.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Et.copy(xe.boundingSphere.center)),Et.applyMatrix4(v.matrixWorld).applyMatrix4(_t)),Array.isArray(ue)){let be=xe.groups;for(let Ee=0,Fe=be.length;Ee<Fe;Ee++){let ke=be[Ee],we=ue[ke.materialIndex];we&&we.visible&&T.push(v,xe,we,V,Et.z,ke)}}else ue.visible&&T.push(v,xe,ue,V,Et.z,null)}}let de=v.children;for(let xe=0,ue=de.length;xe<ue;xe++)uo(de[xe],N,V,B)}function Gl(v,N,V,B){let{opaque:k,transmissive:de,transparent:xe}=v;S.setupLightsView(V),$e===!0&&Te.setGlobalState(R.clippingPlanes,V),B&&g.viewport(me.copy(B)),k.length>0&&js(k,N,V),de.length>0&&js(de,N,V),xe.length>0&&js(xe,N,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Hl(v,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let we=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new Yt(1,1,{generateMipmaps:!0,type:we?yi:Wt,minFilter:sn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let de=S.state.transmissionRenderTarget[B.id],xe=B.viewport||me;de.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);let ue=R.getRenderTarget(),be=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(lt),qe=R.getClearAlpha(),qe<1&&R.setClearColor(16777215,.5),R.clear(),ct&&Ue.render(V);let Fe=R.toneMapping;R.toneMapping=ai;let ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),$e===!0&&Te.setGlobalState(R.clippingPlanes,B),js(v,V,B),X.updateMultisampleRenderTarget(de),X.updateRenderTargetMipmap(de),Je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ke=0,mt=N.length;Ke<mt;Ke++){let ut=N[Ke],{object:et,geometry:Dt,material:ge,group:Xt}=ut;if(ge.side===ei&&et.layers.test(B.layers)){let We=ge.side;ge.side=zt,ge.needsUpdate=!0,Wl(et,V,B,Dt,ge,Xt),ge.side=We,ge.needsUpdate=!0,we=!0}}we===!0&&(X.updateMultisampleRenderTarget(de),X.updateRenderTargetMipmap(de))}R.setRenderTarget(ue,be,Ee),R.setClearColor(lt,qe),ke!==void 0&&(B.viewport=ke),R.toneMapping=Fe}function js(v,N,V){let B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,de=v.length;k<de;k++){let xe=v[k],{object:ue,geometry:be,group:Ee}=xe,Fe=xe.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),ue.layers.test(V.layers)&&Wl(ue,N,V,be,Fe,Ee)}}function Wl(v,N,V,B,k,de){v.onBeforeRender(R,N,V,B,k,de),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(R,N,V,B,v,de),k.transparent===!0&&k.side===ei&&k.forceSinglePass===!1?(k.side=zt,k.needsUpdate=!0,R.renderBufferDirect(V,N,B,k,v,de),k.side=Pi,k.needsUpdate=!0,R.renderBufferDirect(V,N,B,k,v,de),k.side=ei):R.renderBufferDirect(V,N,B,k,v,de),v.onAfterRender(R,N,V,B,k,de)}function Qs(v,N,V){N.isScene!==!0&&(N=At);let B=z.get(v),k=S.state.lights,de=S.state.shadowsArray,xe=k.state.version,ue=re.getParameters(v,k.state,de,N,V,S.state.lightProbeGridArray),be=re.getProgramCacheKey(ue),Ee=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Fe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=te.get(v.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",hi),Ee=new Map,B.programs=Ee);let ke=Ee.get(be);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===xe)return ql(v,ue),ke}else ue.uniforms=re.getUniforms(v),D!==null&&v.isNodeMaterial&&D.build(v,V,ue),v.onBeforeCompile(ue,R),ke=re.acquireProgram(ue,be),Ee.set(be,ke),B.uniforms=ue.uniforms;let we=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=Te.uniform),ql(v,ue),B.needsLights=Hh(v),B.lightsStateVersion=xe,B.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=ke,B.uniformsList=null,ke}function Xl(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=rs.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function ql(v,N){let V=z.get(v);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function zh(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=v.length;V<B;V++){let k=v[V];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function Vh(v,N,V,B,k){N.isScene!==!0&&(N=At),X.resetTextureUnits();let de=N.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ue=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ve.workingColorSpace,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ee=te.get(B.envMap||xe,be),Fe=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color,ut=ai;B.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ut=R.toneMapping);let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Dt=et!==void 0?et.length:0,ge=z.get(B),Xt=S.state.lights;if($e===!0&&(He===!0||v!==he)){let st=v===he&&B.id===Q;Te.setState(B,v,st)}let We=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Xt.state.version||ge.outputColorSpace!==ue||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==Ee||B.fog===!0&&ge.fog!==de||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Te.numPlanes||ge.numIntersection!==Te.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==ke||ge.morphTargets!==we||ge.morphNormals!==Ke||ge.morphColors!==mt||ge.toneMapping!==ut||ge.morphTargetsCount!==Dt||!!ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,ge.__version=B.version);let Kt=ge.currentProgram;We===!0&&(Kt=Qs(B,N,k),D&&B.isNodeMaterial&&D.onUpdateProgram(B,Kt,ge));let ui=!1,Oi=!1,Sn=!1,tt=Kt.getUniforms(),gt=ge.uniforms;if(g.useProgram(Kt.program)&&(ui=!0,Oi=!0,Sn=!0),B.id!==Q&&(Q=B.id,Oi=!0),ge.needsLights){let st=zh(S.state.lightProbeGridArray,k);ge.lightProbeGrid!==st&&(ge.lightProbeGrid=st,Oi=!0)}if(ui||he!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),tt.setValue(L,"projectionMatrix",v.projectionMatrix),tt.setValue(L,"viewMatrix",v.matrixWorldInverse);let ki=tt.map.cameraPosition;ki!==void 0&&ki.setValue(L,bt.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&tt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),he!==v&&(he=v,Oi=!0,Sn=!0)}if(ge.needsLights&&(Xt.state.directionalShadowMap.length>0&&tt.setValue(L,"directionalShadowMap",Xt.state.directionalShadowMap,X),Xt.state.spotShadowMap.length>0&&tt.setValue(L,"spotShadowMap",Xt.state.spotShadowMap,X),Xt.state.pointShadowMap.length>0&&tt.setValue(L,"pointShadowMap",Xt.state.pointShadowMap,X)),k.isSkinnedMesh){tt.setOptional(L,k,"bindMatrix"),tt.setOptional(L,k,"bindMatrixInverse");let st=k.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),tt.setValue(L,"boneTexture",st.boneTexture,X))}k.isBatchedMesh&&(tt.setOptional(L,k,"batchingTexture"),tt.setValue(L,"batchingTexture",k._matricesTexture,X),tt.setOptional(L,k,"batchingIdTexture"),tt.setValue(L,"batchingIdTexture",k._indirectTexture,X),tt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&tt.setValue(L,"batchingColorTexture",k._colorsTexture,X));let Bi=V.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&P.update(k,V,Kt),(Oi||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,tt.setValue(L,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(gt.envMapIntensity.value=N.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=xg()),Oi){if(tt.setValue(L,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&Gh(gt,Sn),de&&B.fog===!0&&Se.refreshFogUniforms(gt,de),Se.refreshMaterialUniforms(gt,B,ee,ne,S.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){let st=ge.lightProbeGrid;gt.probesSH.value=st.texture,gt.probesMin.value.copy(st.boundingBox.min),gt.probesMax.value.copy(st.boundingBox.max),gt.probesResolution.value.copy(st.resolution)}rs.upload(L,Xl(ge),gt,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(rs.upload(L,Xl(ge),gt,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tt.setValue(L,"center",k.center),tt.setValue(L,"modelViewMatrix",k.modelViewMatrix),tt.setValue(L,"normalMatrix",k.normalMatrix),tt.setValue(L,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let st=B.uniformsGroups;for(let ki=0,En=st.length;ki<En;ki++){let $l=st[ki];j.update($l,Kt),j.bind($l,Kt)}}return Kt}function Gh(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Hh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(v,N,V){let B=z.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(v.texture).__webglTexture=N,z.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let V=z.get(v);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,V=0){K=v,H=N,G=V;let B=null,k=!1,de=!1;if(v){let ue=z.get(v);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),me.copy(v.viewport),_e.copy(v.scissor),Xe=v.scissorTest,g.viewport(me),g.scissor(_e),g.setScissorTest(Xe),Q=-1;return}else if(ue.__webglFramebuffer===void 0)X.setupRenderTarget(v);else if(ue.__hasExternalTextures)X.rebindTextures(v,z.get(v.texture).__webglTexture,z.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Fe=v.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&z.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}let be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(de=!0);let Ee=z.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?B=Ee[N][V]:B=Ee[N],k=!0):v.samples>0&&X.useMultisampledRTT(v)===!1?B=z.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?B=Ee[V]:B=Ee,me.copy(v.viewport),_e.copy(v.scissor),Xe=v.scissorTest}else me.copy(Ce).multiplyScalar(ee).floor(),_e.copy(pt).multiplyScalar(ee).floor(),Xe=ze;if(V!==0&&(B=W),g.bindFramebuffer(L.FRAMEBUFFER,B)&&g.drawBuffers(v,B),g.viewport(me),g.scissor(_e),g.setScissorTest(Xe),k){let ue=z.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,V)}else if(de){let ue=N;for(let be=0;be<v.textures.length;be++){let Ee=z.get(v.textures[be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+be,Ee.__webglTexture,V,ue)}}else if(v!==null&&V!==0){let ue=z.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,V)}Q=-1},this.readRenderTargetPixels=function(v,N,V,B,k,de,xe,ue=0){if(!(v&&v.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){g.bindFramebuffer(L.FRAMEBUFFER,be);try{let Ee=v.textures[ue],Fe=Ee.format,ke=Ee.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!w.textureFormatReadable(Fe)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ke)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-B&&V>=0&&V<=v.height-k&&L.readPixels(N,V,B,k,oe.convert(Fe),oe.convert(ke),de)}finally{let Ee=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,N,V,B,k,de,xe,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(N>=0&&N<=v.width-B&&V>=0&&V<=v.height-k){g.bindFramebuffer(L.FRAMEBUFFER,be);let Ee=v.textures[ue],Fe=Ee.format,ke=Ee.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!w.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(N,V,B,k,oe.convert(Fe),oe.convert(ke),0);let Ke=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ke);let mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await th(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(we),L.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,V=0){let B=Math.pow(2,-V),k=Math.floor(v.image.width*B),de=Math.floor(v.image.height*B),xe=N!==null?N.x:0,ue=N!==null?N.y:0;X.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,xe,ue,k,de),g.unbindTexture()},this.copyTextureToTexture=function(v,N,V=null,B=null,k=0,de=0){let xe,ue,be,Ee,Fe,ke,we,Ke,mt,ut=v.isCompressedTexture?v.mipmaps[de]:v.image;if(V!==null)xe=V.max.x-V.min.x,ue=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Ee=V.min.x,Fe=V.min.y,ke=V.isBox3?V.min.z:0;else{let gt=Math.pow(2,-k);xe=Math.floor(ut.width*gt),ue=Math.floor(ut.height*gt),v.isDataArrayTexture?be=ut.depth:v.isData3DTexture?be=Math.floor(ut.depth*gt):be=1,Ee=0,Fe=0,ke=0}B!==null?(we=B.x,Ke=B.y,mt=B.z):(we=0,Ke=0,mt=0);let et=oe.convert(N.format),Dt=oe.convert(N.type),ge;N.isData3DTexture?(X.setTexture3D(N,0),ge=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),ge=L.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),ge=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Xt=g.getParameter(L.UNPACK_ROW_LENGTH),We=g.getParameter(L.UNPACK_IMAGE_HEIGHT),Kt=g.getParameter(L.UNPACK_SKIP_PIXELS),ui=g.getParameter(L.UNPACK_SKIP_ROWS),Oi=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);let Sn=v.isDataArrayTexture||v.isData3DTexture,tt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let gt=z.get(v),Bi=z.get(N),st=z.get(gt.__renderTarget),ki=z.get(Bi.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,st.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let En=0;En<be;En++)Sn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(v).__webglTexture,k,ke+En),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(N).__webglTexture,de,mt+En)),L.blitFramebuffer(Ee,Fe,xe,ue,we,Ke,xe,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||z.has(v)){let gt=z.get(v),Bi=z.get(N);g.bindFramebuffer(L.READ_FRAMEBUFFER,q),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let st=0;st<be;st++)Sn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,k,ke+st):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,k),tt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bi.__webglTexture,de,mt+st):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bi.__webglTexture,de),k!==0?L.blitFramebuffer(Ee,Fe,xe,ue,we,Ke,xe,ue,L.COLOR_BUFFER_BIT,L.NEAREST):tt?L.copyTexSubImage3D(ge,de,we,Ke,mt+st,Ee,Fe,xe,ue):L.copyTexSubImage2D(ge,de,we,Ke,Ee,Fe,xe,ue);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tt?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(ge,de,we,Ke,mt,xe,ue,be,et,Dt,ut.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,de,we,Ke,mt,xe,ue,be,et,ut.data):L.texSubImage3D(ge,de,we,Ke,mt,xe,ue,be,et,Dt,ut):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,we,Ke,xe,ue,et,Dt,ut.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,we,Ke,ut.width,ut.height,et,ut.data):L.texSubImage2D(L.TEXTURE_2D,de,we,Ke,xe,ue,et,Dt,ut);g.pixelStorei(L.UNPACK_ROW_LENGTH,Xt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,We),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Kt),g.pixelStorei(L.UNPACK_SKIP_ROWS,ui),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Oi),de===0&&N.generateMipmaps&&L.generateMipmap(ge),g.unbindTexture()},this.initRenderTarget=function(v){z.get(v).__webglFramebuffer===void 0&&X.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?X.setTextureCube(v,0):v.isData3DTexture?X.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?X.setTexture2DArray(v,0):X.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){H=0,G=0,K=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};var Fi=U,ao=class{constructor(e,t){this.state=e,this.canvas=t,this.scene=new ys,this.scene.background=new Oe("#dce6cb"),this.camera=new tn(-20,20,15,-15,.1,220),this.renderer=new no({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=It,this.renderer.toneMapping=zs,this.renderer.toneMappingExposure=.9,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ha,this.renderer.shadowMap.autoUpdate=!1,this.clock=0,this.target=new Fi(0,0,0),this.goal=new Fi(0,0,0),this.size=Math.max(29,26/(innerWidth/innerHeight)),this.goalSize=this.size,this.player=new Fi(0,0,0),this.yaw=0,this.pitch=0,this.paused=!0,this.keys={},this.moveStick={x:0,y:0},this.arena=null,this.zone="lab",this.current=null,this.pointer={x:innerWidth/2,y:innerHeight/2,inside:!1},this.ray=new Bs,this.interactables=[],this.areaGroups={},this.plotGroups={},this.machineGroups=[],this.machines=this.machineGroups,this.shards=[],this.animators=[],this.particles=[],this.materials=new Map,this.geometry={box:new Ki(1,1,1),sphere:new Ps(1,16,12),cylinder:new Cs(1,1,1,16),torus:new Ls(1,.05,6,40)},this.scene.add(new Us("#fff9df","#90a277",1.8)),this.sun=new Os("#fff3d4",2.1),this.sun.position.set(-15,32,20),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-80,right:80,top:60,bottom:-60,near:1,far:120}),this.sun.shadow.normalBias=.04,this.scene.add(this.sun),this.floorMat=this.grassMaterial();let i=this.box(this.scene,0,-.7,0,210,.2,200,"#b8cd91");i.material=this.floorMat,this.buildFacility(),this.buildArenas(),this.droneGroup=new Ye,this.scene.add(this.droneGroup),this.hoverRing=new ft(new Is(1.3,1.4,48),new _n({color:"#fffbe1",transparent:!0,opacity:.9,side:ei,depthWrite:!1})),this.hoverRing.rotation.x=-Math.PI/2,this.hoverRing.visible=!1,this.scene.add(this.hoverRing),this.input(),this.sync(),this.applySettings(),this.resize(),window.addEventListener("resize",()=>this.resize()),e.on(n=>{["world","area","machine","collected","skill"].includes(n)&&this.sync()})}mat(e,t=!1){let i=e+t;return this.materials.has(i)||this.materials.set(i,new es({color:e,roughness:.85,metalness:.03,emissive:t?e:"#000000",emissiveIntensity:t?.18:0})),this.materials.get(i)}box(e,t,i,n,r,a,o,l,c=!1){let u=new ft(this.geometry.box,this.mat(l,c));return u.position.set(t,i,n),u.scale.set(r,a,o),u.castShadow=!c&&a>.2,u.receiveShadow=!0,e.add(u),u}sphere(e,t,i,n,r,a,o=!1){let l=new ft(this.geometry.sphere,this.mat(a,o));return l.position.set(t,i,n),l.scale.setScalar(r),l.castShadow=!o,e.add(l),l}cylinder(e,t,i,n,r,a,o){let l=new ft(this.geometry.cylinder,this.mat(o));return l.position.set(t,i,n),l.scale.set(r,a,r),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}ring(e,t,i,n,r,a,o=Math.PI/2){let l=new ft(this.geometry.torus,this.mat(a,!0));return l.position.set(t,i,n),l.scale.setScalar(r),l.rotation.x=o,e.add(l),l}grassMaterial(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#a7c87d",t.fillRect(0,0,128,128);let i=624,n=()=>(i=i*16807%2147483647,i/2147483647);for(let a=0;a<900;a++)t.fillStyle=["#a2c278","#b1ce87","#a6c67e","#9fbe76"][a%4],t.fillRect(Math.floor(n()*128),Math.floor(n()*128),2,2);let r=new Qn(e);return r.colorSpace=It,r.wrapS=r.wrapT=Wn,r.repeat.set(25,25),new es({map:r,roughness:1})}label(e,t,i,n,r,a=4,o="#244638"){let l=document.createElement("canvas");l.width=512,l.height=128;let c=l.getContext("2d");c.fillStyle="#fff9e8",c.beginPath(),c.roundRect(10,20,492,86,15),c.fill(),c.strokeStyle="#d5d7bd",c.lineWidth=3,c.stroke(),c.font="600 40px Arial",c.textAlign="center",c.fillStyle=o,c.measureText(t).width>465&&(c.font="600 "+Math.floor(40*465/c.measureText(t).width)+"px Arial"),c.fillText(t,256,77);let u=new Qn(l);u.colorSpace=It;let d=new Es(new Kn({map:u,depthWrite:!1}));return d.position.set(i,n,r),d.scale.set(a,a*128/512,1),e.add(d),d}bind(e,t,i,n,r=1/0){let a={obj:e,action:t,data:i,label:n,range:r};return e.traverse(o=>{o.isMesh&&(o.userData.interactable=a)}),this.interactables.push(e),a}house(e,t,i,n,r,a="#bf6e46",o=4.5,l=3.6){let c=new Ye;c.position.set(t,0,i),e.add(c),this.box(c,0,.18,0,o+.4,.35,l+.4,"#ac9670"),this.box(c,0,1.2,0,o,2.1,l,"#ead9b0"),this.box(c,0,.45,l/2+.25,1.1,.5,.6,"#bc9561"),this.box(c,0,1,l/2+.02,.8,1.5,.06,"#796246");for(let u of[-1.45,1.45])this.box(c,u,1.35,l/2+.03,.85,.9,.08,"#f6edcd"),this.box(c,u,1.35,l/2+.1,.65,.7,.05,"#70a7ae"),this.box(c,u,1.35,l/2+.14,.05,.74,.03,"#eadfbc");for(let u of[-1,1]){let d=this.box(c,u*o*.25,2.65,0,o*.57,.18,l+.6,a);d.rotation.z=u*-.4;for(let h=0;h<5;h++){let p=this.box(c,u*o*.25,2.76,-l/2+h*l/4,o*.58,.04,.045,"#a65d3c");p.rotation.z=u*-.4}}return this.box(c,o*.3,3.1,-l*.2,.5,1,.6,"#bb9971"),this.label(c,n,0,3.65,0,o+1),this.bind(c,r,null,n),c}tree(e,t,i,n=1,r="#568653"){let a=new Ye;return a.position.set(t,0,i),a.scale.setScalar(n),e.add(a),this.cylinder(a,0,.75,0,.15,1.5,"#96714d"),this.sphere(a,0,1.65,0,.8,r),this.sphere(a,-.3,1.35,.2,.62,"#69974f"),this.sphere(a,.35,1.4,-.2,.62,"#73a358"),a}flowerbed(e,t,i,n=2.8,r=2){this.box(e,t,.05,i,n,.12,r,"#aa865c");for(let a=0;a<3;a++)for(let o=0;o<4;o++){let l=t-n*.36+o*n*.24,c=i-r*.32+a*r*.32;this.sphere(e,l,.22,c,.13,"#527c43"),(a+o)%3===0&&this.sphere(e,l,.4,c,.1,"#e8bd65")}}fence(e){for(let t of[-10.5,10.5])for(let i=-10;i<=10;i+=2)Math.abs(i)<3||(this.box(e,i,.55,t,.16,1.1,.16,"#bd9462"),this.box(e,i,.65,t,2,.12,.12,"#caab7c"),this.box(e,i,.3,t,2,.12,.12,"#caab7c"));for(let t of[-10.5,10.5])for(let i=-10;i<=10;i+=2)Math.abs(i)<3||(this.box(e,t,.55,i,.16,1.1,.16,"#bd9462"),this.box(e,t,.65,i,.12,.12,2,"#caab7c"),this.box(e,t,.3,i,.12,.12,2,"#caab7c"))}buildFacility(){for(let i of xt){let n=new Ye;n.position.set(i.x,0,i.z),this.scene.add(n),this.plotGroups[i.id]=n,this.box(n,0,-.3,0,22,.5,22,"#8db471");let r=this.box(n,0,-.025,0,22,.06,2.5,"#d7bc86");this.box(n,0,-.02,0,2.5,.06,22,"#d7bc86"),this.fence(n);let a=new Ye;n.add(a),this.areaGroups[i.id]=a;let o=new Ye;n.add(o),this.box(o,0,.01,0,12,.06,9,"#b2bc91");let l=this.label(o,i.name.toUpperCase(),0,1.1,0,8,"#687257");this.label(o,"EXPAND TO UNLOCK",0,.5,3,5,"#778061"),this.bind(o,"locked",i.id,i.name+" \xB7 expand to unlock"),n.userData.sealed=o;for(let[c,u,d]of[[-9,-8,1.1],[9,-9,.9],[-9,8,.85],[9,8,1.05]])this.tree(n,c,u,d,i.id==="dimension"?"#8c84a6":i.id==="planet"?"#638d68":"#58884e");if(i.id!=="lab"){let c=this.house(a,-5,-4,i.name,i.id==="research"?"research":i.id==="quantum"||i.id==="dimension"?"rebirth":i.id==="factory"?"drones":i.id==="deep"?"challenges":"travel",["#bf7750","#6688a0","#9a869f"][xt.indexOf(i)%3],5,4);this.flowerbed(a,-6,5,4,3),this.flowerbed(a,6,5,4,3)}}for(let i of xt)for(let n of xt)if(n.x===i.x+28&&n.z===i.z||n.z===i.z+28&&n.x===i.x){let r=(i.x+n.x)/2,a=(i.z+n.z)/2;this.box(this.scene,r,-.03,a,i.x===n.x?2.5:6,.12,i.z===n.z?2.5:6,"#d7bc86")}let e=this.areaGroups.lab;this.house(e,-6,-5,"Skill workshop","tree","#b56c45",4.8,4),this.house(e,-6,5,"Daily supplies","daily","#899d71",3.5,3),this.house(e,6,5,"Arcade","arcade","#788fa3",3.8,3.3),this.flowerbed(e,-5,0,3,2),this.flowerbed(e,5,0,3,2),this.core=new Ye,this.core.position.set(0,0,-2),e.add(this.core),this.box(e,0,.03,-2,5.5,.1,5.5,"#d7c797"),this.cylinder(this.core,0,.2,0,1.7,.4,"#aaa98d"),this.cylinder(this.core,0,.55,0,1.3,.3,"#ece2c5"),this.ring(this.core,0,.75,0,1.15,"#67afac"),this.coreSphere=this.sphere(this.core,0,1.65,0,.82,"#78d1cd",!0),this.coreRings=[];for(let i=0;i<4;i++){let n=this.ring(this.core,0,1.65,0,1.1+i*.12,"#80bbac",i*.6);this.coreRings.push(n)}this.bind(this.core,"core",null,"Energy core"),this.label(this.core,"Energy core",0,3.3,0,4.3);let t=this.person("#d8ba77");t.position.set(-3,0,5),e.add(t),this.bind(t,"npc","engineer","Chief engineer"),this.label(t,"Engineer",0,1.5,0,2.5),this.npcs=[t],di.forEach((i,n)=>{let r=xt.find(h=>h.id===i.area),a=new Ye;a.position.set(6,0,-5),this.areaGroups[r.id].add(a);let o=this.box(a,0,.12,0,4.4,.25,4.4,"#a7a38a");this.box(a,0,.3,0,3.8,.12,3.8,"#d0c5a3");let l=new Ye;a.add(l),this.box(l,0,.95,0,1.4,1.3,1.4,"#708e8a"),this.cylinder(l,0,1.8,0,.55,.5,"#d8ddc2");let c=this.ring(l,0,2.05,0,.66,"#73b9ae");this.sphere(l,0,2.12,0,.28,"#b6dfc6",!0);for(let h of[-1.4,1.4]){let p=this.box(l,h,.65,.2,.95,.12,2.5,"#426e80");p.rotation.z=h<0?.22:-.22;for(let _=0;_<5;_++)this.box(l,h,.73,-.8+_*.48,.9,.015,.03,"#91b4bb")}let u=new Ye;l.add(u);for(let h of[-1.2,1.2])this.cylinder(u,h,.8,-1.3,.3,1.5,"#b8b28e");let d=new Ye;a.add(d);for(let h of[-1.4,1.4])for(let p of[-1.4,1.4])this.box(d,h,.6,p,.18,1.2,.18,"#b3986c");this.label(d,"BUILD",0,1.2,0,2.5,"#6f7b5c"),this.label(a,i.name,0,3.5,0,5.8),a.userData={built:l,scaffold:d,upgrades:u,rotor:c},this.bind(a,"machine",n,i.name),this.machineGroups.push(a)});for(let[i,n,r,a]of[["research","scientist",0,5],["factory","technician",-4,3],["launch","explorer",-3,4]]){let o=this.person("#a0b4bc");o.position.set(r,0,a),this.areaGroups[i].add(o),this.bind(o,"npc",n,n.charAt(0).toUpperCase()+n.slice(1)),this.npcs.push(o)}this.secretObject(this.areaGroups.lab,-9,4,"tunnel"),this.secretObject(this.areaGroups.deep,-8,-7,"terminal"),this.secretObject(this.areaGroups.dimension,4,7,"hidden"),xt.forEach((i,n)=>{for(let r=0;r<5;r++){let a=[[-8,-2],[8,3],[-8,7],[3,-8],[-3,-7]][r],o=new ft(new vn(.25),this.mat("#e3c276",!0));o.position.set(i.x+a[0],.5,i.z+a[1]),this.scene.add(o),o.userData.shard=n*5+r,this.shards.push(o),this.bind(o,"shard",n*5+r,"Collect energy shard")}})}secretObject(e,t,i,n){let r=this.box(e,t,.25,i,.8,.5,.8,"#b99773");this.bind(r,"secret",n,"Inspect hidden supply")}person(e){let t=new Ye;return this.cylinder(t,0,.4,0,.18,.65,e),this.sphere(t,0,.9,0,.22,"#e0c49c"),this.cylinder(t,0,1.08,0,.28,.1,"#b19a70"),t}buildArenas(){this.arenaRoots={};for(let[e,t,i]of[["target",0,70],["memory",34,70],["catch",68,70],["parkour",108,70],["boss",-34,70]]){let n=new Ye;n.position.set(t,0,i),this.scene.add(n),this.arenaRoots[e]=n,this.box(n,0,-.2,0,22,.4,20,"#c8c4a1"),this.box(n,0,.02,0,20,.06,18,"#e4d4aa");for(let r of[-10.5,10.5])this.box(n,r,.35,0,.18,.7,20,"#9aaf87");this.label(n,e==="parkour"?"Reactor relay":e==="memory"?"Reactor stabilisation":e==="target"?"Target garden":e==="catch"?"Crystal catch":"Boss arena",0,.7,-8,9),n.visible=!1}this.catchTray=new Ye,this.box(this.catchTray,0,.15,0,2,.25,1.5,"#638d7d"),this.box(this.catchTray,0,.35,-.7,2,.3,.15,"#b7ceb0"),this.arenaRoots.catch.add(this.catchTray),this.parkourPlatforms=[]}sync(){let e=this.state.s;for(let i of xt){let n=e.areas.includes(i.id);this.areaGroups[i.id].visible=n,this.plotGroups[i.id].userData.sealed.visible=!n,this.plotGroups[i.id].children[0].material=this.mat(n?"#97ba77":"#b9c59e")}this.machineGroups.forEach((i,n)=>{let r=e.machines[n];i.userData.built.visible=r>0,i.userData.scaffold.visible=!r,i.userData.upgrades.visible=r>=10,i.userData.level=r,i.userData.built.scale.setScalar(1+Math.min(.28,Math.log10(r+1)*.1))}),this.shards.forEach((i,n)=>i.visible=!e.collected.includes(n)&&e.areas.includes(xt[Math.floor(n/5)].id));let t=zi.find(i=>i[0]===e.skin);this.coreSphere.material=this.mat(t[2],!0),this.coreRings.forEach((i,n)=>i.visible=n<2+Math.min(2,Math.floor(Math.log10(Math.max(1,e.lifetime))/3))),this.droneSync(),this.renderer.shadowMap.needsUpdate=!0}droneSync(){let e=this.state.s.equipped.join(",");if(this.droneKey!==e){this.droneKey=e,this.droneGroup.clear();for(let t of this.state.s.equipped){let i=new Ye;this.droneGroup.add(i),this.sphere(i,0,0,0,.2,Si[t][2]),this.ring(i,0,0,0,.35,Si[t][2])}}}applySettings(){let e=this.state.s.settings;this.renderer.setPixelRatio(Math.min(devicePixelRatio,{low:.8,medium:1,high:1.5,ultra:2}[e.quality])),this.renderer.shadowMap.enabled=e.shadows&&e.quality!=="low",this.renderer.shadowMap.needsUpdate=!0,this.sun.intensity=e.lighting?2.1:1.5,this.machineGroups.forEach(t=>t.userData.built.children[0].material=this.mat(e.machineColor)),this.resize()}resize(){let e=innerWidth/innerHeight;this.camera.left=-this.size*e/2,this.camera.right=this.size*e/2,this.camera.top=this.size/2,this.camera.bottom=-this.size/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}frame(){let e=innerWidth/innerHeight;this.camera.left=-this.size*e/2,this.camera.right=this.size*e/2,this.camera.top=this.size/2,this.camera.bottom=-this.size/2,this.camera.updateProjectionMatrix(),this.camera.position.copy(this.target).add(new Fi(0,42,32)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}input(){let e=null,t=new Map,i=null,n=r=>{this.pointer.x=r.clientX,this.pointer.y=r.clientY,this.pointer.inside=!0};this.canvas.addEventListener("pointerdown",r=>{if(!this.paused){if(n(r),t.set(r.pointerId,{x:r.clientX,y:r.clientY}),this.canvas.setPointerCapture(r.pointerId),t.size===2){let[a,o]=[...t.values()];i={distance:Math.hypot(a.x-o.x,a.y-o.y),size:this.goalSize},e=null;return}e={id:r.pointerId,x:r.clientX,y:r.clientY,gx:this.goal.x,gz:this.goal.z,moved:!1,button:r.button}}}),this.canvas.addEventListener("pointermove",r=>{if(n(r),t.has(r.pointerId)&&t.set(r.pointerId,{x:r.clientX,y:r.clientY}),i&&t.size===2){let[l,c]=[...t.values()];this.goalSize=Math.max(17,Math.min(100,i.size*i.distance/Math.max(10,Math.hypot(l.x-c.x,l.y-c.y))));return}if(!e)return;let a=r.clientX-e.x,o=r.clientY-e.y;if(Math.hypot(a,o)>6&&(e.moved=!0),e.moved&&!this.arena){let l=this.size/innerHeight;this.goal.x=Math.max(-75,Math.min(75,e.gx-a*l)),this.goal.z=Math.max(-45,Math.min(20,e.gz-o*l*1.26))}}),this.canvas.addEventListener("pointerup",r=>{if(t.delete(r.pointerId),i){i=null,e=null;return}e&&e.id===r.pointerId&&!e.moved&&e.button===0&&(this.pick(),this.current?this.interact():this.state.emit("groundclick",this.groundPointer())),e=null}),this.canvas.addEventListener("pointercancel",()=>{e=null,i=null,t.clear()}),this.canvas.addEventListener("pointerleave",()=>{e||(this.pointer.inside=!1)}),this.canvas.addEventListener("wheel",r=>{this.paused||(r.preventDefault(),this.zoom(r.deltaY>0?1.1:1/1.1))},{passive:!1}),this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),document.addEventListener("keydown",r=>{/INPUT|SELECT|TEXTAREA/.test(r.target.tagName)||(this.keys[r.code]=!0,r.code==="Home"&&!this.paused&&this.teleport("lab"))}),document.addEventListener("keyup",r=>this.keys[r.code]=!1),window.addEventListener("blur",()=>this.keys={})}zoom(e){this.goalSize=Math.max(17,Math.min(100,this.goalSize*e))}overview(){this.arena=null,this.goal.set(0,0,-14),this.goalSize=Math.max(59,130/(innerWidth/innerHeight)),this.toggleArenas()}home(){this.teleport(this.zone||"lab")}teleport(e){let t=xt.find(i=>i.id===e);t?(this.arena=null,this.zone=e,this.goal.set(t.x,0,t.z),this.player.set(t.x,0,t.z),this.goalSize=Math.max(29,26/(innerWidth/innerHeight))):this.arenaRoots[e]&&(this.arena=e,this.goal.copy(this.arenaRoots[e].position),this.goalSize=Math.max(e==="parkour"?31:28,25/(innerWidth/innerHeight)),this.player.copy(this.goal)),this.target.copy(this.goal),this.size=this.goalSize,this.frame(),this.toggleArenas(),this.current=null,this.keys={},this.state.emit("zone",t?t.name:e==="parkour"?"Reactor relay":e.charAt(0).toUpperCase()+e.slice(1))}toggleArenas(){for(let[e,t]of Object.entries(this.arenaRoots))t.visible=this.arena===e;this.renderer.shadowMap.needsUpdate=!0}allowed(){return!0}groundPointer(){this.ray.setFromCamera(new Pe(this.pointer.x/innerWidth*2-1,-this.pointer.y/innerHeight*2+1),this.camera);let e=new Fi;return this.ray.ray.intersectPlane(new Qt(new Fi(0,1,0),0),e)?e:null}pick(){if(this.current=null,!(!this.pointer.inside||this.paused)){this.ray.setFromCamera(new Pe(this.pointer.x/innerWidth*2-1,-this.pointer.y/innerHeight*2+1),this.camera);for(let e of this.ray.intersectObjects(this.interactables,!0)){let t=!0,i=e.object;for(;i;)i.visible||(t=!1),i=i.parent;if(!t)continue;let n=e.object.userData.interactable;if(n){if(this.arena&&!["target","memory","boss","shield","relay","event"].includes(n.action))continue;this.current=n;break}}}}interact(){!this.paused&&this.current&&this.state.emit("interact",this.current)}addTarget(e,t,i,n,r=1/0){this.scene.add(e),this.bind(e,t,i,n,r)}removeTarget(e){this.scene.remove(e);let t=this.interactables.indexOf(e);t>=0&&this.interactables.splice(t,1)}pulse(){this.corePulse=.16,this.burst(new Fi(0,1.8,-2),"#91d8bc",8)}burst(e,t,i=10){if(!(!this.state.s.settings.particles||this.state.s.settings.reduced))for(let n=0;n<i&&this.particles.length<70;n++){let r=new ft(this.geometry.sphere,this.mat(t));r.position.copy(e),r.scale.setScalar(.05),this.scene.add(r),this.particles.push({m:r,v:new Fi((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3),life:.65})}}update(e){this.clock+=e;let t=this.state.s.settings.reduced;if(!this.paused&&!this.arena){let i=e*this.size*.6;this.keys.ArrowLeft&&(this.goal.x-=i),this.keys.ArrowRight&&(this.goal.x+=i),this.keys.ArrowUp&&(this.goal.z-=i),this.keys.ArrowDown&&(this.goal.z+=i)}if(this.target.lerp(this.goal,t?1:1-Math.exp(-e*8)),this.size+=(this.goalSize-this.size)*(t?1:1-Math.exp(-e*9)),this.frame(),t||(this.coreRings.forEach((i,n)=>{i.rotation.y+=e*(.3+n*.15),i.rotation.z+=e*.12}),this.coreSphere.position.y=1.65+Math.sin(this.clock*2)*.05,this.machineGroups.forEach(i=>i.userData.rotor.rotation.z+=e*(.5+Math.log2((i.userData.level||0)+1)*.2)),this.shards.forEach(i=>{i.rotation.y+=e,i.position.y=.5+Math.sin(this.clock*2+i.userData.shard)*.06})),this.corePulse=Math.max(0,(this.corePulse||0)-e),this.core.scale.setScalar(1+this.corePulse),this.droneGroup.children.forEach((i,n)=>{let r=this.clock*.6+n*2;i.position.set(this.goal.x+Math.cos(r)*3,2,this.goal.z+Math.sin(r)*3)}),this.particles=this.particles.filter(i=>(i.m.position.addScaledVector(i.v,e),i.life-=e,i.life<=0?(this.scene.remove(i.m),!1):!0)),this.arena==="catch"&&!this.paused){let i=this.groundPointer();i&&(this.player.x=Math.max(59,Math.min(77,i.x)),this.player.z=Math.max(63,Math.min(77,i.z)),this.catchTray.position.set(this.player.x-68,.1,this.player.z-70))}if(this.pick(),this.hoverRing.visible=!!this.current&&!this.arena,this.canvas.style.cursor=this.current?"pointer":this.arena==="catch"?"crosshair":"grab",this.current){let i=new Fi;this.current.obj.getWorldPosition(i),this.hoverRing.position.set(i.x,.11,i.z),this.hoverRing.scale.setScalar(this.current.action==="core"?1.55:this.current.action==="machine"?1.8:.8)}this.renderer.render(this.scene,this.camera)}};var oo=class{constructor(e,t){this.state=e,this.world=t,this.active=null,this.objects=[],this.event=null,this.eventObjects=[],this.nextEvent=Date.now()+9e4,e.on((i,n)=>{i==="interact"&&this.interact(n)})}clear(){this.objects.forEach(e=>this.world.removeTarget(e)),this.objects=[],this.active=null,this.state.emit("activity",null)}leave(){this.clear(),this.world.teleport("lab")}object(e,t,i,n){return this.objects.push(e),this.world.addTarget(e,t,i,n),e}start(e){this.clear(),this.world.teleport(e);let t=Date.now(),i=this.world;this.active={kind:e,start:t,end:t+(e==="memory"?18e4:e==="parkour"?45e3:e==="boss"?6e4:3e4),score:0,items:[],spawn:0,falls:0};let n=this.active;if(e==="target")for(let r=0;r<5;r++){let a=new Ye;i.cylinder(a,0,.35,0,.85,.3,"#62b7c1"),i.ring(a,0,.53,0,.55,"#eaf7d6"),this.object(a,"target",r,"Click target"),this.retarget(a),n.items.push(a)}if(e==="memory"&&(n.sequence=[],n.index=0,n.round=0,n.phase="wait",n.next=t+600,["#71adb2","#a595bc","#d6b160","#7baf7a"].forEach((r,a)=>{let o=new Ye;o.position.set(34+(a%2?3:-3),0,70+(a<2?-3:3)),i.box(o,0,.3,0,4,.5,3.5,r),o.children[0].material=o.children[0].material.clone(),i.label(o,String(a+1),0,.9,0,1.3),this.object(o,"memory",a,"Panel "+(a+1)),n.items.push(o)}),this.memoryNext()),e==="parkour"&&(n.step=0,n.phaseStart=t,[[-7,3],[-3,3],[1,3],[5,3],[7,0],[3,0],[-1,0],[-5,0],[-7,-3],[-3,-3],[1,-3],[5,-3]].forEach(([a,o],l)=>{let c=new Ye;c.position.set(108+a,0,70+o),i.box(c,0,.2,0,2.5,.4,2,"#a9ae8d"),i.label(c,String(l+1),0,.7,0,1.15),this.object(c,"relay",l,"Relay "+(l+1)),n.items.push(c)})),e==="boss"){n.tier=this.state.s.stats.bosses,n.name=Zl[Math.min(6,n.tier)]+(n.tier>6?" "+(n.tier-5):""),n.max=Math.max(100,this.state.manual*35+this.state.cps*8)*(1+n.tier*.2)*(1+this.state.s.reality),n.hp=n.max,n.warning=!1,n.nextAttack=t+6e3;let r=new Ye;r.position.set(-34,1.4,68),i.sphere(r,0,0,0,1.6,"#aa798f");for(let o=0;o<3;o++)i.ring(r,0,0,0,2+o*.25,"#d9b2b1",o*.7);this.object(r,"boss",null,"Attack "+n.name),n.boss=r;let a=new Ye;a.position.set(-34,0,75),i.cylinder(a,0,.35,0,1.4,.6,"#7c9da6"),i.label(a,"SHIELD",0,1.2,0,3.2),this.object(a,"shield",null,"Activate shield when the attack warning appears"),n.shield=a}this.state.emit("activity",n),this.state.notice({target:"Click targets: blue +1, purple +3, gold +10, red \u22123.",memory:"Watch the four panels, then click them in the same order.",catch:"Move your pointer or finger to guide the tray under falling crystals.",parkour:"Click the numbered relays in order when the next one turns green.",boss:"Click the boss to attack. Click SHIELD when an attack warning appears."}[e])}retarget(e){let t=Math.random(),i=t<.12?"red":t<.2?"gold":t<.4?"purple":"blue";e.userData.type=i,e.children[0].material=this.world.mat({red:"#c77b78",gold:"#d9b251",purple:"#a18bbe",blue:"#68acbb"}[i]),e.position.set((Math.random()-.5)*15,0,70+(Math.random()-.5)*11)}memoryNext(){let e=this.active;!e||e.kind!=="memory"||(e.round++,e.sequence.push(Math.floor(Math.random()*4)),e.index=0,e.showIndex=0,e.phase="show",e.next=Date.now()+600,e.lit=-1)}lightPanel(e){let t=this.active;!t||t.kind!=="memory"||(t.items.forEach((i,n)=>{let r=i.children[0].material;r.emissive.set(n===e?"#f0e9bc":"#000000"),r.emissiveIntensity=n===e?.6:0,i.children[0].scale.y=n===e?.9:.5}),t.lit=e)}interact(e){if(e.action==="event"){this.collectEvent(e.data);return}let t=this.active;if(!(!t||Date.now()>t.end)){if(e.action==="target"&&t.kind==="target"){let i=t.items[e.data];t.score=Math.max(0,t.score+{blue:1,purple:3,gold:10,red:-3}[i.userData.type]),this.world.burst(i.position,"#f5e7bc",7),this.retarget(i),this.state.emit("sound",500)}if(e.action==="memory"&&t.kind==="memory"&&t.phase==="input"){let i=e.data;if(this.lightPanel(i),t.unlight=Date.now()+180,this.state.emit("sound",300+i*150),i!==t.sequence[t.index]){this.state.s.stats.memory=Math.max(this.state.s.stats.memory,t.round-1),this.finish((t.round-1)*4,`${t.round-1} sequences completed.`);return}t.index++,t.index===t.sequence.length&&(this.state.s.stats.memory=Math.max(this.state.s.stats.memory,t.round),t.round===8?this.finish(40,"Perfect stabilisation. All eight sequences completed."):(t.phase="wait",t.next=Date.now()+600))}if(e.action==="relay"&&t.kind==="parkour"){let i=(Date.now()-t.phaseStart)%1400<900;if(e.data!==t.step||!i){t.end-=2e3,this.state.notice("Wait for the next green relay. \u22122 seconds.");return}if(t.items[t.step].children[0].material=this.world.mat("#679580"),t.step++,t.score=t.step*3,this.state.emit("sound",350+t.step*30),t.step===12){let n=(Date.now()-t.start)/1e3;this.state.s.stats.parkour=this.state.s.stats.parkour?Math.min(n,this.state.s.stats.parkour):n,this.finish(Math.max(15,45-Math.floor(n/2)),`All 12 relays linked in ${n.toFixed(1)} seconds.`)}}e.action==="shield"&&t.kind==="boss"&&t.warning&&(t.warning=!1,t.nextAttack=Date.now()+6e3,this.state.notice("Attack blocked"),this.state.emit("sound",650)),e.action==="boss"&&t.kind==="boss"&&(t.hp-=(this.state.manual+this.state.cps*.15)*(1+(this.state.fx.bossDamage||0)),this.world.burst(t.boss.position,"#e5c599",6),this.state.emit("sound",140),t.hp<=0&&(this.state.s.stats.bosses++,this.state.q("boss"),this.state.s.cores++,this.state.s.coreTotal++,this.state.addPoints(2),this.state.s.dust+=10,this.finish(25,"Boss defeated \xB7 +1 Quantum Core \xB7 +2 Skill Points \xB7 +10 stardust")))}}finish(e,t){let i=this.active?.kind;if(!i)return;this.state.s.stats.games++,e>0&&this.state.s.stats.wins++,this.state.q("game");let n=Math.max(0,Math.min(40,Math.floor(e))),r=Math.max(100,this.state.cps*3)*Math.min(60,e);this.state.s.tokens+=n,this.state.gain(r),this.state.xp(Math.min(250,e*5)),this.clear(),this.state.progress(),this.state.save(),this.state.emit("result",{kind:i,score:e,tokens:n,energy:r,message:t})}spawnEvent(){if(this.event||this.active||this.state.s.lifetime<500)return;let e=["surge","storm","golden",...this.state.s.rebirths?["invasion"]:[]],t=e[Math.floor(Math.random()*e.length)];if(this.event={kind:t,end:Date.now()+45e3,left:t==="storm"?5:t==="invasion"?4:1},t==="surge"){this.state.addBoost("passive",5,30),this.event.end=Date.now()+3e4,this.state.notice("Power surge \xB7 5\xD7 production for 30 seconds");return}for(let i=0;i<this.event.left;i++){let n=new Ye;n.position.set(-3+i*1.8,1,1.5),this.world.sphere(n,0,0,0,.4,t==="invasion"?"#a48ab3":"#dfbc66"),this.world.ring(n,0,0,0,.65,t==="invasion"?"#b69ac4":"#edd697"),this.world.addTarget(n,"event",i,t==="invasion"?"Disrupt void anchor":"Collect bonus energy"),this.eventObjects.push(n)}this.state.notice(t==="invasion"?"Void anchors appeared in Origin. Click all four.":"Bonus visitors appeared near the energy core. Click to collect.")}collectEvent(e){let t=this.event,i=this.eventObjects[e];!t||!i||!i.visible||t.end<Date.now()||(i.visible=!1,t.left--,this.state.gain(Math.max(500,this.state.cps*30)*(1+(this.state.fx.rare||0))),this.world.burst(i.position,"#e5c380",8),t.left===0&&(this.state.s.stats.events++,this.state.s.dust+=t.kind==="invasion"?20:5,t.kind==="invasion"&&this.state.unlockSkin("void"),this.state.notice("Event complete \xB7 energy and stardust collected"),this.clearEvent()))}clearEvent(){this.eventObjects.forEach(e=>this.world.removeTarget(e)),this.eventObjects=[],this.event=null}update(e){let t=Date.now(),i=this.active,n=this.world;if(i){if(t>=i.end){this.finish(["target","catch","parkour"].includes(i.kind)?i.score:0,i.kind==="boss"?"The boss escaped.":`Time is up. ${i.score} points scored.`);return}if(i.kind==="memory"&&(i.unlight&&t>i.unlight&&(this.lightPanel(-1),i.unlight=0),t>=i.next&&(i.phase==="show"?i.lit>=0?(this.lightPanel(-1),i.next=t+240):i.showIndex<i.sequence.length?(this.lightPanel(i.sequence[i.showIndex++]),this.state.emit("sound",300+i.lit*150),i.next=t+650):(i.phase="input",i.next=1/0):i.phase==="wait"&&this.memoryNext())),i.kind==="catch"){if(i.spawn-=e,i.spawn<=0){i.spawn=.5;let r=Math.random(),a=r<.02?15:r<.1?8:r<.25?5:1,o=new ft(new vn(.35),n.mat(a===15?"#a28bb7":a===8?"#a5c7cb":a===5?"#d8b566":"#86bca0"));o.position.set(68+(Math.random()-.5)*15,5.5,70+(Math.random()-.5)*11),n.scene.add(o),this.objects.push(o),i.items.push({m:o,value:a})}i.items=i.items.filter(r=>{r.m.position.y-=e*2.4,r.m.rotation.y+=e;let a=r.m.position;return a.y<.8&&Math.abs(a.x-n.player.x)<1.5&&Math.abs(a.z-n.player.z)<1.3?(i.score+=r.value,n.scene.remove(r.m),!1):a.y<0?(n.scene.remove(r.m),!1):!0})}if(i.kind==="parkour"){let r=(t-i.phaseStart)%1400<900;i.items.forEach((a,o)=>a.children[0].material=n.mat(o<i.step?"#7fa58c":o===i.step?r?"#90c77d":"#ddb85e":"#bbb79a"))}i.kind==="boss"&&(i.boss.rotation.y+=e*.35,!i.warning&&t>i.nextAttack&&(i.warning=!0,i.warningEnd=t+2e3),i.warning&&t>i.warningEnd&&(i.warning=!1,i.end-=3e3,i.nextAttack=t+6e3,this.state.notice("Attack hit \xB7 \u22123 seconds. Click SHIELD during warnings.")),i.shield.children[0].material=n.mat(i.warning?"#ddb55e":"#7c9da6"))}t>this.nextEvent&&(this.spawnEvent(),this.nextEvent=t+9e4+Math.random()*6e4),this.event&&(t>this.event.end?this.clearEvent():this.eventObjects.forEach(r=>r.rotation.y+=e*.5))}};var pe=s=>document.getElementById(s),ve=(s,e,t="",i=!1,n="")=>`<button data-action="${e}" ${t} ${i?"disabled":""} class="${n}">${s}</button>`,lo=class{constructor(e,t,i){this.state=e,this.world=t,this.activities=i,this.page="overview",this.treeType="main",this.selected="power-0",this.transform={x:20,y:20,scale:1},this.branch="power",this.opened=!1,this.started=!1,this.displayEnergy=e.s.energy,this.uiTimer=0,this.lastPrompt="",this.machineIndex=null,this.treeDragging=!1,this.buy=1,this.pages=[["overview","Command"],["tree","Skills"],["travel","Map"],["arcade","Arcade"],["missions","Missions"],["collection","Collection"],["rebirth","Rebirth"],["achievements","Achievements"],["stats","Records"],["settings","Settings"]],this.nav(),this.events(),e.on((n,r)=>this.signal(n,r)),pe("loadNote").textContent=e.loadError||"",this.paint()}notice(e){let t=document.createElement("div");t.className="toast",t.textContent=e,pe("toasts").append(t),pe("toasts").children.length>4&&pe("toasts").firstChild.remove(),setTimeout(()=>t.remove(),4400)}nav(){pe("menuNav").innerHTML=this.pages.map(([e,t])=>ve(t,"open",`data-page="${e}"`,!1,this.page===e?"active":"")).join("")}open(e="overview"){this.page=e,this.opened=!0,this.world.paused=!0,this.world.keys={},document.exitPointerLock?.(),pe("menu").classList.remove("hidden"),this.render()}close(){this.opened=!1,this.world.paused=!this.started,pe("menu").classList.add("hidden"),pe("dialog").close(),this.machineIndex=null,this.world.keys={}}dialog(e){this.world.paused=!0,this.world.keys={},document.exitPointerLock?.(),pe("dialogBody").innerHTML=e,pe("dialog").open||pe("dialog").showModal()}closeDialog(){pe("dialog").close(),this.machineIndex=null,this.world.paused=this.opened||!this.started}render(){this.nav();let e={overview:"Your foundry",tree:"Skill tree",travel:"Facility map",arcade:"Minigames",missions:"Missions",collection:"Collection",rebirth:"Rebirth & ascension",achievements:"Achievements",stats:"Statistics",settings:"Settings",research:"Research",control:"Central machine control.",drones:"Companion drones",challenges:"Change the rules."};pe("menuTitle").textContent=e[this.page]||e.overview,pe("menuContent").style.overflow=this.page==="tree"?"hidden":"auto",pe("menuContent").innerHTML=this[this.page+"View"]?.()||this.overviewView(),this.page==="tree"&&this.bindTree(),this.paint()}signal(e,t){e==="notice"&&this.notice(t),e==="pulse"&&(this.world.pulse(t.critical),this.floater(t.value,t.critical)),e==="damage"&&this.floater(t,!0),e==="teleport"&&(this.activities.clear(),this.world.teleport(t)),e==="result"&&this.dialog(`<div class="eyebrow">ROUND COMPLETE</div><h2>${t.score?"A little closer to mastery.":"Another attempt awaits."}</h2><p>${t.message}</p><div class="big mint">+${t.tokens} tokens</div><p>+${this.state.fmt(t.energy)} energy</p><div class="actions">${ve("Return to facility","return","","","primary")}</div>`),e==="interact"&&this.interact(t),e==="zone"&&(pe("areaLabel").textContent=t),e==="skill"&&this.opened&&this.page==="tree"&&this.render()}floater(e,t=!1){let i=document.createElement("div");i.className="floater"+(t?" critical":""),i.textContent=(t?"CRITICAL +":"+")+this.state.fmt(e),i.style.left=this.world.pointer.x+"px",i.style.top=this.world.pointer.y-25+"px",pe("floaters").append(i),setTimeout(()=>i.remove(),1050)}interact(e){if(e.action==="locked"){let t=xt.find(n=>n.id===e.data),i=Ct.find(n=>n.effects[t.flag]);this.dialog(`<div class="eyebrow">FACILITY EXPANSION</div><h2>${t.name}</h2><p>Earn ${this.state.fmt(t.need)} energy this run and unlock <strong>${i.name}</strong> in Exploration.</p><div class="actions">${ve("Close","closedialog")}${ve("View required skill","requiredskill",`data-id="${i.id}"`,!1,"primary")}</div>`);return}if(!["target","memory","boss","shield","relay","event"].includes(e.action)){if(e.action==="core"){this.state.pulse();return}if(e.action==="shard"){this.state.collect(e.data);return}if(e.action==="secret"){this.state.secret(e.data);return}if(e.action==="return"){this.activities.leave();return}if(e.action==="machine"){this.machineIndex=e.data,this.showMachine();return}if(e.action==="npc"){this.showNPC(e.data);return}if(e.action==="daily"){this.supplyDialog();return}if(e.action==="travel"){this.open("travel");return}this.open(e.action)}}overviewView(){let e=this.state.s;return`<div class="notice-panel"><div class="eyebrow">${e.reality?"REALITY "+e.reality:"ORIGIN PROTOCOL"}</div><h2>Your world grows with you.</h2><p>Click the core to generate energy. Spend Skill Points, build machines and expand into new plots. Each level grants one Skill Point. Every tenth level grants three extra.</p></div><div class="grid"><div class="card"><div class="icon">\u2727</div><h3>Choose your next discovery</h3><p>${e.points} Skill Points ready to spend. 102 main-tree nodes, plus permanent and endgame research.</p>${ve("Open skill tree","open",'data-page="tree"',!1,"primary")}</div><div class="card"><div class="icon">\u2B21</div><h3>Explore the facility</h3><p>${e.areas.length} / 10 plots currently open. ${e.collected.length} / 50 energy shards found.</p>${ve("Facility map","open",'data-page="travel"')}</div><div class="card"><div class="icon">\u25C7</div><h3>Daily supply</h3><p>Energy, boosts, XP, arcade tokens, a drone, quantum cores, then an exclusive cosmetic.</p>${ve(e.daily.date===this.state.calendar()?"Collected today":"Collect supply","daily","",e.daily.date===this.state.calendar())}</div><div class="card"><div class="icon">\u25A6</div><h3>Central control</h3><p>Manage your entire machine network after opening the Research Wing.</p>${ve("Machine control","open",'data-page="control"',!e.areas.includes("research"))}</div><div class="card"><div class="icon">\u2318</div><h3>Companion drones</h3><p>Adopt, equip and evolve a crew that works around your facility.</p>${ve("Drone foundry","open",'data-page="drones"',e.lifetime<1e3)}</div><div class="card"><div class="icon">\u2691</div><h3>Challenge chamber</h3><p>Five optional rule sets. Clear each for a permanent +10% energy bonus.</p>${ve("Choose a challenge","open",'data-page="challenges"',e.rebirths<1)}</div></div>`}treeView(){let e=this.state.s,t=this.treeType,i=t==="quantum"&&!e.rebirths||t==="ascension"&&!e.ascensions||t==="mastery"&&this.state.level<100;return`<div class="tree-layout"><div class="tree-main"><div class="toolbar">${[["main","Skill tree"],["quantum","Quantum"],["ascension","Ascension"],["mastery","Mastery"]].map(([n,r])=>ve(r,"treetype",`data-id="${n}"`,!1,t===n?"selected":"")).join("")}<span style="flex:1"></span>${ve("Respec","respec","","","small")}</div>${i?`<div class="card tree-empty"><h2>${t==="quantum"?"Rebirth once":t==="ascension"?"Ascend once":"Reach level 100"}</h2><p>This tree becomes available at that milestone.</p></div>`:`<div class="tree-toolbar">${t==="main"?wn.map(n=>ve(n[1],"branch",`data-id="${n[0]}"`,!1,this.branch===n[0]?"selected":"")).join("")+ve("Shared","branch",'data-id="cross"',!1,this.branch==="cross"?"selected":""):""}${ve("Fit","treefit")}${ve("\u2212","zoom",'data-dir="-1"')}${ve("+","zoom",'data-dir="1"')}</div><div id="treeViewport" class="tree-viewport"><div id="treeInner" class="tree-inner">${this.treeGraph()}</div></div><div class="tree-help">Choose a branch above. Drag to see more. Click a node for its effect and cost.</div>`}</div><aside class="tree-inspector card" id="inspector">${this.inspector()}</aside></div>`}treeGraph(){let e=this.treeType,t=Ct.filter(l=>l.tree===e&&(e!=="main"||l.branch===this.branch)),i=this.state.s,n=wn.findIndex(l=>l[0]===this.branch),r=l=>e==="main"&&this.branch!=="cross"?{x:90+(l.x-n*350-36)*1.55,y:115+(l.y-140)*1.17}:e==="main"?{x:100+Number(l.id.split("-")[1])%3*210,y:130+Math.floor(Number(l.id.split("-")[1])/3)*210}:{x:l.x,y:l.y};this.treeBox={width:Math.max(...t.map(l=>r(l).x))+160,height:Math.max(...t.map(l=>r(l).y))+160};let a="";for(let l of t)for(let c of l.requires){let u=Rt[c];if(!t.includes(u))continue;let d=r(l),h=r(u);a+=`<path class="tree-path ${i.skills[c]?"on":""}" d="M${h.x+32},${h.y+64} C${h.x+32},${(h.y+d.y)/2+50} ${d.x+32},${(h.y+d.y)/2} ${d.x+32},${d.y}"/>`}let o=wn[n];return`<svg width="2200" height="1600">${a}</svg>${e==="main"?`<div class="branch-label" style="left:90px;top:25px">${o?o[1]:"Shared upgrades"}<small>${o?o[3]:"Powerful upgrades that connect multiple branches"}</small></div>`:""}${t.map(l=>{let c=i.skills[l.id]||0,u=this.state.available(l),d=l.tree==="quantum"?"cores":l.tree==="ascension"?"shards":"points",h=r(l);return`<button data-action="node" data-id="${l.id}" class="node ${c?"owned":""} ${u&&i[d]>=this.state.nodeCost(l)?"available":""} ${c>=l.max?"maxed":""} ${l.keystone?"keystone":""} ${l.id===this.selected?"chosen":""}" style="left:${h.x}px;top:${h.y}px" title="${l.name} \u2014 ${l.desc}"><strong>${l.keystone?"\u2727":l.tree==="quantum"?"\u2B21":["\u03DF","\u25A6","\u25C7","\u263E","\u27F3","\u2301"][n]||"\u2723"}</strong><small>${c}/${l.max>=1e6?"\u221E":l.max}</small><span class="node-label">${l.name}</span></button>`}).join("")}`}inspector(){let e=Rt[this.selected];(!e||e.tree!==this.treeType)&&(e=Ct.find(o=>o.tree===this.treeType),this.selected=e.id);let t=this.state.s,i=t.skills[e.id]||0,n=e.tree==="quantum"?"cores":e.tree==="ascension"?"shards":"points",r=this.state.available(e),a=this.state.nodeCost(e);return`<div class="eyebrow" style="color:${e.color}">${e.keystone?"KEYSTONE":e.tree.toUpperCase()+" RESEARCH"}</div><div class="node-glyph" style="--node:${e.color}">${e.keystone?"\u2727":"\u2B21"}</div><h2>${e.name}</h2><p>${e.desc}</p><div class="tag">LEVEL ${i} / ${e.max>=1e6?"\u221E":e.max}</div><div class="section-title">Requirements</div>${e.requires.length?`<ul class="requirements">${e.requires.map(o=>`<li style="color:${t.skills[o]?"var(--accent)":"var(--muted)"}">${t.skills[o]?"\u2713":"\u25CB"} ${Rt[o].name} Lv. 1</li>`).join("")}</ul>`:"<p>Root node. Start your path here.</p>"}<div class="section-title">Research cost</div><h3>${a} ${n==="points"?"Skill Points":n==="cores"?"Quantum Cores":"Singularity Shards"}</h3><p>${this.state.fmt(t[n])} available</p>${ve(i>=e.max?"Maxed":r?"Unlock / upgrade":"Prerequisites needed","skillbuy",`data-id="${e.id}"`,!r||t[n]<a,"primary")}<p class="muted" style="font-size:10px">Skills remain after rebirth and ascension. New Reality resets them.</p>`}applyTree(){let e=pe("treeInner");e&&(e.style.transform=`translate(${this.transform.x}px,${this.transform.y}px) scale(${this.transform.scale})`)}bindTree(){let e=pe("treeViewport");if(!e)return;this.applyTree();let t=null;e.addEventListener("pointerdown",i=>{i.target.closest(".node")||(t={x:i.clientX,y:i.clientY,tx:this.transform.x,ty:this.transform.y},e.setPointerCapture(i.pointerId))}),e.addEventListener("pointermove",i=>{t&&(this.transform.x=t.tx+i.clientX-t.x,this.transform.y=t.ty+i.clientY-t.y,this.applyTree())}),e.addEventListener("pointerup",()=>t=null),e.addEventListener("wheel",i=>{i.preventDefault();let n=e.getBoundingClientRect();this.zoom(i.deltaY<0?1.12:1/1.12,i.clientX-n.left,i.clientY-n.top)},{passive:!1})}zoom(e,t,i){let n=pe("treeViewport");if(!n)return;t??(t=n.clientWidth/2),i??(i=n.clientHeight/2);let r=this.transform.scale,a=Math.max(.22,Math.min(1.8,r*e));this.transform.x=t-(t-this.transform.x)*a/r,this.transform.y=i-(i-this.transform.y)*a/r,this.transform.scale=a,this.applyTree()}fitTree(){let e=pe("treeViewport");if(!e)return;let{width:t,height:i}=this.treeBox;this.transform={x:20,y:20,scale:Math.min((e.clientWidth-40)/t,(e.clientHeight-40)/i,1.2)},this.applyTree()}travelView(){let e=this.state.s;return`<div class="notice-panel"><h3>Choose a plot to focus on.</h3><p>Plots open when you unlock their Exploration skill and earn enough energy this run. Click Focus to move the camera to any open plot. Room access resets at rebirth.</p></div><div class="grid">${xt.map(t=>{let i=e.areas.includes(t.id),n=t.flag?Ct.find(r=>r.effects[t.flag]):null;return`<div class="card ${i?"done":""}"><div class="eyebrow" style="color:${t.color}">${i?"ACCESS GRANTED":"LOCKED SECTOR"}</div><h3 style="margin-top:9px">${t.name}</h3><p>${t.subtitle}</p><div class="muted" style="font-size:11px">${t.need?`${this.state.fmt(t.need)} run energy + ${n?.name||"exploration research"}`:"Starting location"}</div><div class="cardfooter"><span class="tag">${e.discovered.includes(t.id)?"DISCOVERED":"UNKNOWN"}</span>${ve("Focus","travel",`data-id="${t.id}"`,!i,"small")}</div></div>`}).join("")}</div>`}showMachine(){let e=this.machineIndex,t=di[e],i=this.state.s,n=i.machines[e];this.dialog(`<div class="eyebrow">MACHINE CONTROL / ${t.area.toUpperCase()}</div><h2>${t.name}</h2><div class="big">LEVEL ${n}</div><p>${this.state.fmt(this.state.machineRate(e))} base energy/sec \xB7 ${this.state.milestone(n)}\xD7 milestone bonus</p><div class="thin-bar"><i style="width:${n%10*10}%"></i></div><p>Milestones at 10, 25, 50, 100, 250, 500 and 1,000 double production and evolve the machine.</p>${this.state.fx.automation?"":'<p class="gold">Unlock Basic automation in the skill tree first.</p>'}<div class="machine-bulk">${[1,10,100,"max"].map(r=>{let a=this.state.quote(e,r);return ve(`\xD7${r==="max"?"MAX":r} \xB7 ${this.state.fmt(a.cost)} \u03DF`,"machinebuy",`data-i="${e}" data-n="${r}"`,!this.state.fx.automation||i.energy<a.cost||!a.n,"small")}).join("")}</div><div class="actions">${ve("Close panel","closedialog")}</div>`)}controlView(){return this.state.s.areas.includes("research")?`<div class="toolbar">${[1,10,100,"max"].map(e=>ve("\xD7"+String(e).toUpperCase(),"bulk",`data-n="${e}"`,!1,this.buy===e?"selected":"")).join("")}</div><div class="grid">${di.map((e,t)=>{let i=this.state.quote(t,this.buy),n=this.state.s;return`<div class="card"><div class="row between"><h3>${e.name}</h3><span class="tag">LV ${n.machines[t]}</span></div><p>${this.state.fmt(this.state.machineRate(t))} base energy/sec</p><div class="cardfooter"><span class="mint">${this.state.fmt(i.cost)} \u03DF</span>${ve("Buy \xD7"+i.n,"machinebuy",`data-i="${t}" data-n="${this.buy}"`,!this.state.fx.automation||!n.areas.includes(e.area)||n.energy<i.cost||!i.n)}</div></div>`}).join("")}</div><div class="section-title">Facility infrastructure</div><div class="grid">${tr.map((e,t)=>`<div class="card"><h3>${e[0]} \xB7 Lv ${this.state.s.facility[t]}</h3><p>${e[1]} per level.</p>${ve(`${this.state.fmt(1e3*2**this.state.s.facility[t])} energy`,"facility",`data-i="${t}"`,this.state.s.energy<1e3*2**this.state.s.facility[t]||this.state.s.facility[t]>=50)}</div>`).join("")}</div>`:'<div class="card"><h2>Open the Research Wing first.</h2><p>Click any machine on the map to build or upgrade it.</p></div>'}researchView(){let e=this.state.s;return`<div class="notice-panel"><h3>Research takes time. Knowledge stays.</h3><p>Research levels survive rebirth and reset on ascension. One project can run at a time, including while offline.</p>${e.researchJob?`<p class="mint">${cn[e.researchJob.i][0]} \xB7 <span data-research-time>${Vi((e.researchJob.end-Date.now())/1e3)}</span> remaining</p>`:""}</div><div class="grid">${cn.map((t,i)=>`<div class="card"><h3>${t[0]} \xB7 Lv ${e.research[i]}</h3><p>${t[1]} per level. Research time: ${t[3]} seconds.</p>${ve(`${this.state.fmt(t[2]*2**e.research[i])} energy`,"researchbuy",`data-i="${i}"`,!!e.researchJob||e.energy<t[2]*2**e.research[i]||e.research[i]>=20)}</div>`).join("")}</div>`}arcadeView(){let e=this.state.s.lifetime<1e3;return`<div class="notice-panel"><h3>A short break from building.</h3><p>Every minigame uses clicks, taps or a pointer-controlled tray. ${e?"The arcade opens at 1K lifetime energy.":"Timers continue if you open a menu. Leaving a round forfeits its reward."}</p></div><div class="grid">${[["target","Target range","30 seconds. Click the targets. Blue +1, purple +3, gold +10, red \u22123."],["memory","Reactor stabilisation","Watch the four control panels. Repeat increasingly long sequences."],["catch","Energy catch","Move your mouse or finger to slide the tray under falling crystals. Rarer crystals score more."],["parkour","Reactor relay","Click the 12 numbered relays in order when the next one turns green. Wrong clicks cost time."],["boss","Boss chamber","Click the boss to attack. Click SHIELD during attack warnings. Rewards include Quantum Cores and Skill Points."]].map(([t,i,n])=>`<div class="card"><div class="icon">${t==="boss"?"\u2739":"\u229E"}</div><h3>${i}</h3><p>${n}</p>${ve("Play","startgame",`data-id="${t}"`,e||t==="boss"&&this.state.s.rebirths<1,"primary")}${t==="boss"&&!this.state.s.rebirths?"<p>Boss chamber opens after your first rebirth.</p>":""}</div>`).join("")}</div><div class="section-title">Arcade exchange \xB7 ${this.state.s.tokens} tokens</div><div class="grid">${[["all","2\xD7 Energy","Five minutes of doubled energy.",10],["click","5\xD7 Manual energy","60 seconds of overcharged pulses.",8],["xp","2\xD7 XP","Five minutes of accelerated learning.",15]].map(([t,i,n,r])=>`<div class="card"><h3>${i}</h3><p>${n}</p>${ve(r+" tokens","tokenboost",`data-id="${t}"`,this.state.s.tokens<r)}</div>`).join("")}</div>`}missionsView(){let e=this.state.s;return this.state.calendar(),`<div class="notice-panel"><h3>Your next assignment is out there.</h3><p>Click the engineer in Origin, scientist in Research, technician in the Factory or explorer at Launch for special assignments.</p></div>${["daily","weekly"].map(t=>`<div class="section-title">${t} missions \xB7 ${t==="daily"?"00:00 UTC":"Monday 00:00 UTC"} reset</div><div class="grid">${this.state.missions().filter(i=>i[1]===t).map(i=>{let n=e.quests[t][i[2]]||0,r=e.quests.claims.includes(i[0]);return`<div class="card ${r?"done":""}"><h3>${i[4]}</h3><div class="progress-label"><span>${this.state.fmt(Math.min(n,i[3]))} / ${this.state.fmt(i[3])}</span><span>${t==="daily"?1:3} SP</span></div><div class="thin-bar"><i style="width:${Math.min(100,n/i[3]*100)}%"></i></div><div class="cardfooter">${ve(r?"Claimed":"Claim reward","mission",`data-id="${i[0]}"`,r||n<i[3])}</div></div>`}).join("")}</div>`).join("")}`}showNPC(e){let t=this.state.npcTalk(e),i=this.state.npcValue(t),n=this.state.s.npcClaims.includes(e);this.dialog(`<div class="eyebrow">FACILITY ASSIGNMENT</div><h2>${t[1]}</h2><p>\u201C${t[2]}. A little progress today goes a long way tomorrow.\u201D</p><div class="progress-label"><span>${this.state.fmt(Math.min(i,t[4]))} / ${this.state.fmt(t[4])}</span><span>${n?"Complete":"In progress"}</span></div><div class="thin-bar"><i style="width:${Math.min(100,i/t[4]*100)}%"></i></div><p>Reward: 3 Skill Points \xB7 15 stardust \xB7 100 base XP</p><div class="actions">${ve("Goodbye","closedialog")}${ve(n?"Claimed":"Complete assignment","npcclaim",`data-id="${e}"`,n||i<t[4],"primary")}</div>`)}supplyDialog(){this.dialog(`<div class="eyebrow">DAILY SUPPLY</div><h2>A little help from the stars.</h2><p>Day 1: energy \xB7 Day 2: boost \xB7 Day 3: XP \xB7 Day 4: tokens \xB7 Day 5: drone \xB7 Day 6: quantum core \xB7 Day 7: Galaxy skin + 25 stardust.</p><div class="actions">${ve("Later","closedialog")}${ve(this.state.s.daily.date===this.state.calendar()?"Collected":"Collect","daily","",this.state.s.daily.date===this.state.calendar(),"primary")}</div>`)}collectionView(){let e=this.state.s;return`<div class="notice-panel"><div class="row between"><div><h3>Energy shards \xB7 ${e.collected.length} / 50</h3><p>Five shards are hidden in each sector. Every five grants a Skill Point. Collect all fifty for the Reality core.</p></div>${ve("Drones","open",'data-page="drones"')}</div></div><div class="section-title">Reactor appearances \xB7 ${e.dust} stardust</div><div class="grid">${zi.map(t=>`<div class="card" style="text-align:center;--skin:${t[2]}"><div class="skin-preview"></div><span class="tag">${t[3]}</span><h3 style="margin-top:8px">${e.skins.includes(t[0])?t[1]:t[4]<0?"Undiscovered signal":t[1]}</h3><p>${t[0]==="gold"?"+2% all energy.":t[4]<0?"Explore the world to discover this core.":"A cosmetic signature for your reactor."}</p>${ve(e.skin===t[0]?"Equipped":e.skins.includes(t[0])?"Equip":t[4]<0?"Locked":t[4]+" \u25C7","skin",`data-id="${t[0]}"`,e.skin===t[0]||!e.skins.includes(t[0])&&(t[4]<0||e.dust<t[4]),"small")}</div>`).join("")}</div>`}dronesView(){let e=this.state.s;return`<div class="notice-panel"><h3>Your floating crew \xB7 ${e.equipped.length} / ${e.slots} equipped</h3><p>Drones circle your focused plot. Fuse three copies into one improved drone; each evolution adds 50% to its base bonus. Up to ten evolutions per type.</p>${ve("Extra slot \xB7 50 tokens","droneslot","",e.slots>=3||e.tokens<50,"small")}</div><div class="grid">${Si.map((t,i)=>`<div class="card"><div class="icon" style="color:${t[2]}">\u2318</div><h3>${t[0]}</h3><p>${t[1]} \xB7 bonus multiplier ${(1+e.droneLevels[i]*.5).toFixed(1)}\xD7</p><div class="tag">${e.droneCopies[i]} COPIES \xB7 EVOLUTION ${e.droneLevels[i]}</div><div class="cardfooter">${ve(t[3]+" \u25C7","dronebuy",`data-i="${i}"`,e.dust<t[3],"small")}${ve(e.equipped.includes(i)?"Unequip":"Equip","droneequip",`data-i="${i}"`,e.droneCopies[i]<1,"small")}${ve("Fuse 3","dronefuse",`data-i="${i}"`,e.droneCopies[i]<3||e.droneLevels[i]>=10,"small")}</div></div>`).join("")}</div>`}rebirthView(){let e=this.state.s;return`<div class="grid"><div class="card"><div class="eyebrow">QUANTUM REBIRTH</div><div class="big gold" id="rebirthGain">+${this.state.fmt(this.state.rebirthGain)} \u2B21</div><p>Minimum ${this.state.fmt(this.state.rebirthRequirement)} energy earned this run. Resets energy, machine levels (except memory), facility infrastructure, room access, temporary boosts and current challenges.</p><p>Keeps skills, XP, research, cosmetics, drones, quests, discoveries and lifetime records.</p><div class="progress-label"><span id="rebirthProgress">${this.state.fmt(e.run)} / ${this.state.fmt(this.state.rebirthRequirement)}</span><span>${e.rebirths} rebirths</span></div>${ve("Rebirth","rebirthconfirm","",e.run<this.state.rebirthRequirement,"primary")}<div class="cardfooter">${ve("Quantum skill tree","qtree","",!e.rebirths,"small")}</div></div><div class="card"><div class="eyebrow">ASCENSION</div><div class="big">${e.cycle} / 10</div><p>Complete ten rebirths in this cycle. Gain 3 Singularity Shards and a permanent +200% energy bonus.</p><p>Also resets quantum currency and research, timed research levels, facility upgrades and cycle count. Main skills, XP, cosmetics and records remain.</p>${ve("Ascend","ascendconfirm","",e.cycle<10,"primary")}<div class="cardfooter">${ve("Ascension tree","atree","",!e.ascensions,"small")}<span class="muted">${e.shards} shards</span></div></div><div class="card"><div class="eyebrow">NEW REALITY</div><div class="big">REALITY ${e.reality}</div><p>Requires 3 ascensions, BREAK REALITY and Multiverse Access. Resets progression and all trees. Keeps cosmetics, achievements, settings and lifetime statistics.</p><p>Gain +1,000% all-energy multiplier per reality, bonus starting Skill Points and the Reality core.</p>${ve("Enter a New Reality","realityconfirm","",e.ascensions<3||!this.state.fx.breakReality||!this.state.fx.multiverse)}</div></div>`}challengesView(){let e=this.state.s;return`<div class="notice-panel"><h3>A new rule. One million energy.</h3><p>Starting resets current energy, machines, run earnings and boosts. Your skills remain. First clears grant 3 SP and +10% permanent energy; every clear grants 20 stardust.</p>${e.challenge?`<p class="mint">Active: ${e.challenge.id} \xB7 ${this.state.fmt(e.challenge.earned)} / 1M</p>${ve("Abandon","abandon")}`:""}</div><div class="grid">${[["manual","Manual only","Machine production and automatic pulses are disabled."],["machine","Machine only","Manual pulses are disabled. Start with one collector; requires Basic automation."],["instability","Reactor instability","Machine production oscillates from 30% to 170%."],["speed","Speed challenge","Reach 1M energy within 180 seconds."],["branch","One branch","During the challenge, new main-tree research must stay within your existing branch. Start after a respec for a single-branch run."]].map(([t,i,n])=>`<div class="card ${e.completedChallenges.includes(t)?"done":""}"><h3>${i}</h3><p>${n}</p>${ve("Begin challenge","challengeconfirm",`data-id="${t}"`,!!e.challenge||e.rebirths<1||t==="branch"&&new Set(Object.keys(e.skills).filter(r=>Rt[r].tree==="main").map(r=>Rt[r].branch)).size>1)}</div>`).join("")}</div>`}achievementsView(){let e=this.state.s;return`<div class="notice-panel"><h3>${e.achievements.length} / ${this.state.achDefs.length} achievements</h3><p>Each grants stardust and +0.5% permanent energy. Every five completed achievements grants a Skill Point.</p></div><div class="grid">${this.state.achDefs.map(t=>{let i=e.achievements.includes(t.id),n=Math.min(t.goal,t.value());return`<div class="card ${i?"done":""}"><div class="row between"><h3>${t.name}</h3><span class="mint">${i?"\u2713":"\u2727"}</span></div><p>${t.desc}</p><div class="progress-label"><span>${this.state.fmt(n)} / ${this.state.fmt(t.goal)}</span><span>${t.reward} \u25C7</span></div><div class="thin-bar"><i style="width:${n/t.goal*100}%"></i></div></div>`}).join("")}</div>`}statsView(){let e=this.state.s;return`<div class="grid">${[["Current energy",e.energy],["Lifetime energy",e.lifetime],["Run energy",e.run],["Energy/sec",this.state.cps],["Interactions",e.stats.clicks],["Critical interactions",e.stats.criticals],["Highest pulse",e.stats.highest],["Machine levels",e.machines.reduce((i,n)=>i+n,0)],["Machines upgraded",e.stats.purchases],["Player level",this.state.level],["Skill Points earned",e.pointsEarned],["Nodes unlocked",Object.keys(e.skills).length],["Rebirths",e.rebirths],["Ascensions",e.ascensions],["Quantum cores",e.cores],["Singularity shards",e.shards],["Bosses defeated",e.stats.bosses],["Games completed",e.stats.games],["Quests completed",e.stats.quests],["Reactor skins",e.skins.length],["Drones owned",e.droneCopies.reduce((i,n)=>i+n,0)],["Time played",Vi(e.stats.time)],["Offline energy",e.stats.offline],["Areas discovered",e.discovered.length],["Energy shards",e.collected.length+" / 50"],["Secrets discovered",e.secrets.length],["Best memory round",e.stats.memory],["Fastest relay",e.stats.parkour?e.stats.parkour.toFixed(1)+"s":"\u2014"],["Highest combo",e.stats.combo.toFixed(1)+"\xD7"],["Realities",e.reality]].map(([i,n])=>`<div class="card"><div class="muted">${i}</div><div class="stat">${typeof n=="number"?this.state.fmt(n):n}</div></div>`).join("")}</div>`}setting(e,t,i){let n=this.state.s.settings;return`<label class="settings-row"><span>${e}</span><select data-setting="${t}">${i.map(([r,a])=>`<option value="${r}" ${n[t]===r?"selected":""}>${a}</option>`).join("")}</select></label>`}toggle(e,t){return`<label class="settings-row"><span>${e}</span><input type="checkbox" data-setting="${t}" ${this.state.s.settings[t]?"checked":""}></label>`}range(e,t,i,n,r){return`<label class="settings-row"><span>${e}</span><input aria-label="${e}" type="range" data-setting="${t}" min="${i}" max="${n}" step="${r}" value="${this.state.s.settings[t]}"></label>`}settingsView(){return`<div class="grid"><div class="card"><h3>Map controls</h3><p>Click objects to interact. Drag empty ground to pan. Scroll or pinch to zoom. Use Origin to return to the core and All plots for an overview.</p>${this.toggle("Reduced motion","reduced")}${this.toggle("Show guidance","tutorial")}<p>Keyboard shortcuts: T opens Skills, M opens the Map, Tab opens the menu. Arrow keys pan the map. Home focuses Origin.</p></div><div class="card"><h3>Graphics</h3>${this.setting("Quality","quality",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]])}${this.setting("FPS limit","fps",[[30,"30"],[60,"60"],[120,"120"]])}${this.setting("Render distance","renderDistance",[[75,"75 m"],[150,"150 m"],[250,"250 m"]])}${this.toggle("Energy particles","particles")}${this.toggle("Shadows","shadows")}${this.toggle("Dynamic lighting","lighting")}<p>Anti-aliasing is enabled. Quality controls render resolution. Motion blur is omitted for clear movement.</p></div><div class="card"><h3>Sound</h3>${this.toggle("Sound effects","sound")}${this.toggle("Ambient music","music")}${this.range("Master","master",0,1,.05)}${this.range("Sound effects","sfx",0,1,.05)}${this.range("Music","musicVolume",0,1,.05)}<p>Quiet ambient music and optional feedback for clicks and upgrades.</p></div><div class="card"><h3>Visual signature</h3>${this.setting("UI accent","accent",[["#3f7861","Forest"],["#416e82","Slate blue"],["#796489","Plum"],["#8b743c","Ochre"]])}${this.setting("Machine finish","machineColor",[["#6f8fa5","Titanium"],["#bf815e","Copper"],["#849a71","Sage"],["#9982b2","Amethyst"]])}${this.setting("Number format","notation",[["short","Compact (1.23M)"],["scientific","Scientific (1.23e6)"]])}${ve("Fullscreen","fullscreen","","","small")}</div><div class="card"><h3>Your save</h3><p>Autosaves every five seconds. Export a backup before moving folders or clearing browser data. Classic Nova Foundry v1 saves can be imported; transferable currency and XP are retained.</p><div class="toolbar">${ve("Save now","save")}${ve("Export","export")}${ve("Import","importdialog")}</div>${ve("Reset all progress","resetconfirm","","","danger small")}<p>Offline: ${Math.round(this.state.offlineEfficiency*100)}% efficiency \xB7 ${this.state.offlineHours}h maximum. Unlock Offline Production to earn while away.</p></div></div>`}events(){document.addEventListener("click",r=>{let a=r.target.closest("[data-action]");a&&!a.disabled&&this.action(a.dataset)}),document.addEventListener("change",r=>{let a=r.target.dataset.setting;a&&(this.state.s.settings[a]=r.target.type==="checkbox"?r.target.checked:["fps","renderDistance","master","sfx","musicVolume","sensitivity"].includes(a)?Number(r.target.value):r.target.value,document.documentElement.style.setProperty("--accent",this.state.s.settings.accent),document.body.classList.toggle("reduced",this.state.s.settings.reduced),this.world.applySettings(),this.world.sync(),this.state.emit("audio-settings"),this.state.save())}),document.addEventListener("keydown",r=>{if(!(/INPUT|TEXTAREA|SELECT/.test(r.target.tagName)||!this.started)){if(r.code==="Tab"||r.code==="KeyT"||r.code==="KeyM"){if(r.preventDefault(),pe("dialog").open)return;let a=r.code==="KeyT"?"tree":r.code==="KeyM"?"travel":"overview";this.opened&&this.page===a?this.close():this.open(a)}r.code==="Escape"&&this.opened&&!pe("dialog").open&&this.close()}}),pe("dialog").addEventListener("cancel",()=>{this.world.paused=this.opened,this.machineIndex=null}),pe("enter").addEventListener("click",()=>{if(this.started=!0,this.world.paused=!1,pe("welcome").classList.add("hidden"),this.state.pendingOffline){let r=this.state.pendingOffline;this.notice(`Welcome back \xB7 ${Vi(r.seconds)} away \xB7 +${this.state.fmt(r.amount)} energy`),this.state.pendingOffline=null}this.state.emit("audio-settings"),this.state.save()});let e=!1,t=pe("stick");t.addEventListener("pointerdown",r=>{e=!0,t.setPointerCapture(r.pointerId),i(r)});let i=r=>{if(!e)return;let a=t.getBoundingClientRect(),o=(r.clientX-a.left-a.width/2)/40,l=(r.clientY-a.top-a.height/2)/40,c=Math.max(1,Math.hypot(o,l));this.world.moveStick={x:o/c,y:l/c},pe("stickKnob").style.transform=`translate(${o/c*30}px,${l/c*30}px)`};t.addEventListener("pointermove",i);let n=()=>{e=!1,this.world.moveStick={x:0,y:0},pe("stickKnob").style.transform=""};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),pe("touchJump").addEventListener("pointerdown",r=>{r.preventDefault(),this.world.keys.Space=!0});for(let r of["pointerup","pointercancel"])pe("touchJump").addEventListener(r,()=>this.world.keys.Space=!1);pe("touchInteract").addEventListener("click",()=>this.world.interact())}async action(e){let t=e.action,i=e.id,n=Number(e.i),r=this.state.s;if(t==="open"){this.open(e.page);return}if(t==="close"){this.close();return}if(t==="closedialog"){this.closeDialog();return}if(t==="maphome"){this.activities.clear(),this.world.teleport("lab");return}if(t==="mapoverview"){this.activities.clear(),this.world.overview();return}if(t==="mapzoom"){this.world.zoom(Number(e.dir)>0?1/1.2:1.2);return}if(t==="node"){this.selected=i,pe("inspector").innerHTML=this.inspector(),document.querySelectorAll(".node").forEach(a=>a.classList.toggle("chosen",a.dataset.id===i));return}if(t==="requiredskill"){this.closeDialog(),this.treeType="main",this.branch="explore",this.selected=i,this.transform={x:20,y:20,scale:1},this.open("tree");return}if(t==="skillbuy"){this.state.skillBuy(i);return}if(t==="treetype"){this.treeType=i,this.selected=i==="main"?this.branch==="cross"?"cross-0":this.branch+"-0":Ct.find(a=>a.tree===i).id,this.transform={x:20,y:20,scale:i==="main"?1:.8},this.render();return}if(t==="branch"){this.branch=i,this.selected=i==="cross"?"cross-0":i+"-0",this.transform={x:20,y:20,scale:1},this.render();return}if(t==="treefit"){this.fitTree();return}if(t==="zoom"){this.zoom(Number(e.dir)>0?1.2:1/1.2);return}if(t==="respec"){this.dialog(`<h2>Rethink your path?</h2><p>Refund all main-tree Skill Points. Quantum, Ascension and Mastery trees remain. World access is recalculated and you return to Origin. XP for previously discovered nodes cannot be earned again.</p><p>${r.respecs?"Cost: 25 stardust.":"Your first respec is free."}</p><div class="actions">${ve("Keep my path","closedialog")}${ve("Respec main tree","respecdo","",r.respecs>0&&r.dust<25,"primary")}</div>`);return}if(t==="respecdo"){this.state.respec(),this.closeDialog(),this.render();return}if(t==="travel"){if(!r.areas.includes(i))return;this.activities.clear(),this.world.teleport(i),this.close();return}if(t==="machinebuy"){this.state.buyMachine(n,e.n==="max"?"max":Number(e.n)),this.machineIndex!==null?this.showMachine():this.render();return}if(t==="bulk"){this.buy=e.n==="max"?"max":Number(e.n),this.render();return}if(t==="facility"){this.state.facilityBuy(n),this.render();return}if(t==="researchbuy"){this.state.startResearch(n),this.render();return}if(t==="startgame"){if(r.lifetime<1e3||i==="boss"&&!r.rebirths)return;this.close(),this.activities.start(i);return}if(t==="return"){this.closeDialog(),this.close(),this.activities.leave();return}if(t==="tokenboost"){let a={all:10,click:8,xp:15};if(r.tokens<a[i])return;r.tokens-=a[i],this.state.addBoost(i,i==="click"?5:2,i==="click"?60:300),this.notice("Boost activated"),this.render();return}if(t==="mission"){this.state.claimMission(i),this.render();return}if(t==="npcclaim"){this.state.npcClaim(i),this.closeDialog();return}if(t==="daily"){this.state.dailyClaim(),pe("dialog").open&&this.closeDialog(),this.opened&&this.render();return}if(t==="skin"){this.state.buySkin(i),this.render();return}if(t==="outfit"){r.outfit=n,this.render();return}if(t==="dronebuy"){this.state.droneBuy(n),this.render();return}if(t==="dronefuse"){this.state.droneFuse(n),this.render();return}if(t==="droneequip"){r.equipped.includes(n)?r.equipped=r.equipped.filter(a=>a!==n):r.droneCopies[n]&&r.equipped.length<r.slots?r.equipped.push(n):this.notice("All slots are full. Unequip a drone first."),this.world.sync(),this.render();return}if(t==="droneslot"&&r.tokens>=50&&r.slots<3){r.tokens-=50,r.slots++,this.render();return}if(t==="qtree"||t==="atree"){this.treeType=t==="qtree"?"quantum":"ascension",this.selected=t==="qtree"?"q-0":"a-0",this.transform={x:0,y:0,scale:.7},this.open("tree");return}if(["rebirthconfirm","ascendconfirm","realityconfirm"].includes(t)){let a=t.replace("confirm",""),o=a==="rebirth"?"Reset the current facility and earn "+this.state.fmt(this.state.rebirthGain)+" Quantum Cores? Main skills, research, cosmetics and lifetime records remain.":a==="ascend"?"Reset this ascension cycle, quantum research, machine levels and research projects? Gain 3 Singularity Shards and +200% permanent energy.":"Reset all progression trees and the facility? Cosmetics, achievements, settings and lifetime records remain. Gain a New Reality multiplier.";this.dialog(`<h2>${a==="rebirth"?"Reignite your universe?":a==="ascend"?"Ascend beyond the facility?":"Create a New Reality?"}</h2><p>${o}</p><div class="actions">${ve("Keep building","closedialog")}${ve("Confirm "+a,a,"",!1,"primary")}</div>`);return}if(t==="rebirth"){if(r.run<this.state.rebirthRequirement)return;this.closeDialog(),this.close(),this.world.paused=!0,this.state.resetting=!0,pe("transition").classList.remove("hidden"),pe("transitionText").textContent="The universe is holding its breath.",this.state.emit("sound",90),setTimeout(()=>{pe("transitionText").textContent="+"+this.state.performRebirth()+" QUANTUM CORES"},2100),setTimeout(()=>{pe("transition").classList.add("hidden"),this.state.resetting=!1,this.world.paused=!1},3300);return}if(t==="ascend"){this.state.ascend()&&(this.close(),this.world.sync(),this.notice("ASCENSION COMPLETE \xB7 +3 Singularity Shards"));return}if(t==="reality"){this.state.newReality()&&(this.close(),this.world.sync());return}if(t==="challengeconfirm"){this.dialog(`<h2>Begin this challenge?</h2><p>Current energy, machine levels, run earnings and boosts reset. Earn 1M energy under the new rule to complete it.</p><div class="actions">${ve("Cancel","closedialog")}${ve("Begin","challengedo",`data-id="${i}"`,!1,"primary")}</div>`);return}if(t==="challengedo"){this.state.challengeStart(i),this.close();return}if(t==="abandon"){r.challenge=null,this.render();return}if(t==="save"){this.state.save(),this.notice(this.state.storageFailed?"Export a backup to keep your progress.":"Universe saved");return}if(t==="export"){this.state.save(),this.dialog(`<h2>Back up your universe.</h2><p>Download or copy this save before moving to another browser.</p><textarea id="saveText" aria-label="Save text"></textarea><div class="actions">${ve("Copy","copysave")}${ve("Download JSON","downloadsave")}${ve("Done","closedialog","","","primary")}</div>`),pe("saveText").value=JSON.stringify(r);return}if(t==="copysave"){try{await navigator.clipboard.writeText(pe("saveText").value),this.notice("Save copied")}catch{pe("saveText").select(),this.notice("Save selected. Press Ctrl+C / Cmd+C.")}return}if(t==="downloadsave"){let a=document.createElement("a"),o=URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"}));a.href=o,a.download="Nova-Foundry-3D-save.json",a.click(),setTimeout(()=>URL.revokeObjectURL(o),2e3);return}if(t==="importdialog"){this.dialog(`<h2>Restore your universe.</h2><p>Paste a 3D save or a Classic Nova Foundry v1 export. Validated data replaces your current progress; a local backup is kept.</p><textarea id="saveText" aria-label="Save to import"></textarea><p id="importError" class="gold"></p><div class="actions">${ve("Cancel","closedialog")}${ve("Import","importdo","","","primary")}</div>`);return}if(t==="importdo"){try{this.activities.clear(),this.activities.clearEvent(),this.state.import(pe("saveText").value),this.close(),this.world.sync(),this.notice("Save restored")}catch(a){pe("importError").textContent=a.message}return}if(t==="resetconfirm"){this.dialog(`<h2>Delete all local progress?</h2><p>This removes all 3D progression. Export a backup first if you want to keep it. Type RESET to confirm.</p><input type="text" id="resetText" aria-label="Reset confirmation"><div class="actions">${ve("Cancel","closedialog")}${ve("Delete progress","resetdo","","","danger")}</div>`);return}if(t==="resetdo"){if(pe("resetText").value!=="RESET")return;this.activities.clear(),this.activities.clearEvent(),this.state.s=Tn(),this.state.recompute(),this.state.save(),this.world.sync(),this.world.teleport("lab"),this.close(),this.notice("A new universe begins.");return}if(t==="fullscreen"){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{this.notice("Fullscreen unavailable in this browser.")}return}}paint(){let e=this.state.s;this.displayEnergy+=(e.energy-this.displayEnergy)*.3,Math.abs(this.displayEnergy-e.energy)<1&&(this.displayEnergy=e.energy),pe("energy").textContent=this.state.fmt(this.displayEnergy),pe("production").textContent=this.state.fmt(this.state.cps),pe("dust").textContent=this.state.fmt(e.dust),pe("cores").textContent=this.state.fmt(e.cores),pe("points").textContent=this.state.fmt(e.points),pe("playerLevel").textContent="LEVEL "+this.state.level,pe("combo").textContent=(1+this.state.combo/100*(2+(this.state.fx.combo||0))).toFixed(1)+"\xD7 pulse";let t=this.state.level,i=35*(t-1)**2,n=35*t*t;pe("xpBar").style.width=(e.xp-i)/(n-i)*100+"%",pe("menuBalance").textContent=this.state.fmt(e.energy)+" \u03DF   \xB7   "+e.points+" SP",pe("boosts").innerHTML=e.boosts.filter(d=>d.end>Date.now()).map(d=>`<span class="boost">${d.mult}\xD7 ${d.type} \xB7 ${Vi((d.end-Date.now())/1e3)}</span>`).join("");let r="YOUR FIRST SPARK",a="Click the energy core to get started.",o=Math.min(100,e.stats.clicks/5*100);if(e.stats.clicks>=5&&!this.state.fx.automation)r="A PATH OF YOUR OWN",a="Open Skills and choose Basic automation to start producing energy automatically.",o=100;else if(this.state.fx.automation&&!e.machines[0])r="LET THE MACHINES WORK",a="Click the collector in the upper-right plot. Build it for 20 energy.",o=Math.min(100,e.energy/20*100);else if(e.machines[0]){let d=xt.find(h=>!e.areas.includes(h.id));r=d?"YOUR NEXT SECTOR":"THE NEXT BEGINNING",a=d?`${d.name} \xB7 ${this.state.fmt(d.need)} run energy + ${Ct.find(h=>h.effects[d.flag])?.name}`:`Rebirth at ${this.state.fmt(this.state.rebirthRequirement)} run energy.`,o=Math.min(100,e.run/(d?d.need:this.state.rebirthRequirement)*100)}this.activities.active&&(r="ARCADE CHAMBER",a="Play directly with your mouse or touch. Use Leave minigame to return."),e.challenge&&(r="CHALLENGE / "+e.challenge.id.toUpperCase(),a=this.state.fmt(e.challenge.earned)+" / 1M energy"+(e.challenge.id==="speed"?" \xB7 "+Vi(Math.max(0,180-(Date.now()-e.challenge.start)/1e3)):"")),!e.settings.tutorial&&!this.activities.active&&(r="NOVA FOUNDRY",a=this.state.fmt(e.lifetime)+" lifetime energy \xB7 "+e.discovered.length+" sectors discovered"),pe("objectiveLabel").textContent=r,pe("objectiveText").textContent=a,pe("objectiveBar").style.width=o+"%";let l=this.world.current;pe("interaction").style.left=Math.min(innerWidth-270,this.world.pointer.x+18)+"px",pe("interaction").style.top=Math.min(innerHeight-140,this.world.pointer.y+18)+"px",pe("interaction").style.opacity=l&&!this.opened&&this.started&&!pe("dialog").open?"1":"0",pe("reticle").classList.toggle("ready",!!l),l&&(pe("interactLabel").textContent=l.label,pe("interactSub").textContent=l.action==="core"?"+"+this.state.fmt(this.state.manual*(1+this.state.combo/100*(2+(this.state.fx.combo||0))))+" energy \xB7 click to collect":l.action==="machine"?"Click to build or upgrade":"Click to open");let c=this.activities.active;pe("activityHud").classList.toggle("hidden",!c),pe("leaveGame").classList.toggle("hidden",!c),c&&(pe("activityHud").innerHTML=c.kind==="memory"?`STABILISATION \xB7 Round <strong>${c.round}/8</strong><br>${c.phase==="input"?"Your turn \xB7 Repeat the sequence":"Watch the panels"}`:c.kind==="boss"?`${c.warning?"\u26A0 Click SHIELD now":c.name}<br><strong>${this.state.fmt(Math.max(0,c.hp))}</strong> / ${this.state.fmt(c.max)} HP \xB7 ${Math.ceil((c.end-Date.now())/1e3)}s`:c.kind.toUpperCase()+` \xB7 <strong>${Math.ceil((c.end-Date.now())/1e3)}s</strong>`+(c.kind==="parkour"?` \xB7 ${c.step}/12 relays`:` \xB7 ${c.score} points`));let u=this.activities.event;if(pe("eventHud").classList.toggle("hidden",!u),u&&(pe("eventHud").textContent=u.kind.toUpperCase()+" / ORIGIN LAB \xB7 "+Vi((u.end-Date.now())/1e3)+(u.kind!=="surge"?" \xB7 "+u.left+" remaining":"")),this.opened&&this.page==="rebirth"){pe("rebirthGain").textContent="+"+this.state.fmt(this.state.rebirthGain)+" \u2B21",pe("rebirthProgress").textContent=this.state.fmt(e.run)+" / "+this.state.fmt(this.state.rebirthRequirement);let d=document.querySelector('[data-action="rebirthconfirm"]');d&&(d.disabled=e.run<this.state.rebirthRequirement)}if(this.opened&&this.page==="tree"){let d=Rt[this.selected],h=d.tree==="quantum"?"cores":d.tree==="ascension"?"shards":"points",p=document.querySelector('[data-action="skillbuy"]');p&&(p.disabled=!this.state.available(d)||e[h]<this.state.nodeCost(d))}document.querySelectorAll('[data-action="machinebuy"]').forEach(d=>{let h=Number(d.dataset.i),p=d.dataset.n==="max"?"max":Number(d.dataset.n),_=this.state.quote(h,p);d.disabled=!this.state.fx.automation||!e.areas.includes(di[h].area)||e.energy<_.cost||_.n<1,this.machineIndex!==null?d.textContent="\xD7"+(p==="max"?"MAX":p)+" \xB7 "+this.state.fmt(_.cost)+" \u03DF":p==="max"&&(d.textContent="Buy \xD7"+_.n)}),document.querySelectorAll('[data-action="mission"]').forEach(d=>{let h=this.state.missions().find(p=>p[0]===d.dataset.id);h&&(d.disabled=e.quests.claims.includes(h[0])||(e.quests[h[1]][h[2]]||0)<h[3])}),e.researchJob&&document.querySelectorAll("[data-research-time]").forEach(d=>d.textContent=Vi(Math.max(0,(e.researchJob.end-Date.now())/1e3))),this.drawMap()}drawMap(){let e=pe("minimap"),t=e.getContext("2d");t.clearRect(0,0,190,110);let i=1.35,n=95,r=65;for(let a of xt)t.fillStyle=this.state.s.areas.includes(a.id)?"#335b60":"#243541",t.fillRect(n+a.x*i-12,r+a.z*i-12,24,24),t.strokeStyle=this.state.s.areas.includes(a.id)?"#82cab5":"#415460",t.strokeRect(n+a.x*i-12,r+a.z*i-12,24,24);if(this.state.fx.scanner&&!this.world.arena){t.fillStyle="#f2d382";for(let a of this.world.shards)a.visible&&t.fillRect(n+a.position.x*i-1,r+a.position.z*i-1,2,2)}this.world.arena||(t.fillStyle="#edfff6",t.beginPath(),t.arc(n+this.world.player.x*i,r+this.world.player.z*i,3,0,Math.PI*2),t.fill()),t.fillStyle="#a2c2ca",t.font="8px Arial",t.fillText("FACILITY / "+this.state.s.areas.length+" SECTORS",10,103)}update(e){this.uiTimer+=e,this.uiTimer>.12&&(this.uiTimer=0,this.paint())}};var co=class{constructor(e,t){this.state=e,this.world=t,this.ctx=null,this.musicNodes=[],this.lastTheme="",this.lastHum=0,e.on((i,n)=>{i==="pulse"&&this.tone(n.critical?620:210,.12,this.pan(0,-1.5)),i==="sound"&&this.tone(n,.14),i==="skill"&&this.tone(780,.22),i==="machine"&&this.tone(390,.16),i==="level"&&this.tone(900,.2),i==="area"&&this.tone(280,.4),i==="audio-settings"&&this.music(!0)})}init(){try{return this.ctx??(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume(),!0}catch{return!1}}pan(e,t){let i=e-this.world.player.x,n=t-this.world.player.z;return Math.max(-1,Math.min(1,(i*Math.cos(this.world.yaw)-n*Math.sin(this.world.yaw))/8))}tone(e=300,t=.13,i=0){let n=this.state.s.settings;if(!n.sound||!n.master||!this.init())return;let r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=this.ctx.createStereoPanner();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime),r.frequency.exponentialRampToValueAtTime(Math.max(30,e*.55),this.ctx.currentTime+t),a.gain.setValueAtTime(Math.max(.001,n.master*n.sfx*.13),this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+t),o.pan.value=i,r.connect(a).connect(o).connect(this.ctx.destination),r.start(),r.stop(this.ctx.currentTime+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect()}}music(e=!1){let t=this.state.s.settings,i=this.world.arena==="boss"?"boss":this.world.zone;if(!e&&this.lastTheme===i||(this.lastTheme=i,this.musicNodes.forEach(r=>{try{r.stop(),r.disconnect()}catch{}}),this.musicNodes=[],!t.music||!t.master||!this.init()))return;let n=i==="boss"?[65.4,77.78,98]:["dimension","quantum","deep"].includes(i)?[110,130.81,164.81]:i==="factory"?[98,123.47,146.83]:[130.81,164.81,196];this.musicNodes=n.map((r,a)=>{let o=this.ctx.createOscillator(),l=this.ctx.createGain();return o.type="sine",o.frequency.value=r,l.gain.value=t.master*t.musicVolume*.028,o.connect(l).connect(this.ctx.destination),o.start(),o})}update(e){this.music(),this.lastHum+=e,this.lastHum>4&&(this.lastHum=0,this.state.s.settings.sound&&this.state.s.settings.music&&this.world.player.distanceTo({x:0,y:0,z:-1.5})<10&&this.tone(75,.4,this.pan(0,-1.5)))}};function _g(s){console.error(s);let e=document.createElement("div");e.className="error-panel";let t=document.createElement("h1");t.textContent="The 3D renderer could not start.";let i=document.createElement("p");i.textContent="Open index.html in a browser with WebGL 2 enabled, such as Chrome, Edge or Firefox. Enable browser graphics acceleration if it is disabled. The game runs locally after extracting the whole ZIP.";let n=document.createElement("p");n.textContent="Details: "+s.message,e.append(t,i,n),document.body.append(e)}try{let d=function(h){requestAnimationFrame(d);let p=Math.max(0,(h-a)/1e3);if(a=h,u||(o+=Math.min(p,.5),o<1/s.s.settings.fps))return;let _=Math.min(o,5),b=Math.min(o,.08);o=0,n.started&&(s.tick(_),i.update(Math.min(_,.2)),r.update(b),l+=_,c+=_,l>=5&&(l=0,s.save()),c>=30&&(c=0,s.calendar())),t.update(b),n.update(b)},s=new nr,e={...s.s.position},t=new ao(s,document.getElementById("world")),i=new oo(s,t),n=new lo(s,t,i),r=new co(s,t);t.paused=!0,document.documentElement.style.setProperty("--accent",s.s.settings.accent),document.body.classList.toggle("reduced",s.s.settings.reduced),window.__NOVA={state:s,world:t,activities:i,ui:n,nodes:Ct,areas:xt};let a=performance.now(),o=0,l=0,c=0,u=!1;requestAnimationFrame(d),document.addEventListener("visibilitychange",()=>{u=document.hidden,u?(s.save(),t.keys={},r.ctx?.suspend()):(s.offline(),s.pendingOffline&&(n.notice("Offline energy collected: +"+s.fmt(s.pendingOffline.amount)),s.pendingOffline=null),a=performance.now(),o=0,n.started&&r.ctx?.resume())}),window.addEventListener("pagehide",()=>s.save()),window.addEventListener("beforeunload",()=>s.save()),document.getElementById("world").addEventListener("webglcontextlost",h=>{h.preventDefault(),n.notice("Graphics context lost. Save your progress and reload to restore the world.")}),document.body.dataset.ready="true"}catch(s){_g(s)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
