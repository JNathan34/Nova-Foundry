(()=>{var wn="nova-foundry-3d-v2";var Tn=[["power","Power","#6ad9ff","Manual energy and reactor control"],["auto","Automation","#77edbd","Machines, workers and passive income"],["luck","Fortune","#f4ce78","Critical energy and rare signals"],["offline","Offline","#aaa3ff","Storage and away-time production"],["rebirth","Rebirth","#f799c9","Faster, stronger new beginnings"],["explore","Exploration","#ffac79","Rooms, research and new worlds"]],Xh=[["Stronger pulse","Compression","Critical energy","Combo capacitor","Overcharged interaction","Critical mastery","Focused beam","Core resonance","Critical overload","Nuclear fingers","Plasma feedback","Hyperactive core","GOD TOUCH","Solar hands","Pulse echo","Reactor mastery"],["Basic automation","Faster generators","Improved machinery","Robot workers","AI management","Self-improving machines","Assembly line","Precision bearings","Autonomous empire","Machine empire","Quantum timing","Distributed network","FULL AUTOMATION","Machine learning","Clean energy","Industrial mastery"],["Lucky energy","Better criticals","Lucky generator","Golden signal","Jackpot energy","Fortune master","Stardust pockets","Lucky research","Impossible luck","Crystal magnet","Rare circuitry","Double salvage","GOLDEN UNIVERSE","Probability wave","Fortunate pulse","Fortune mastery"],["Offline production","Better storage","Efficient shutdown","Backup cells","Extended storage","Sleep mode","Coolant reserve","Battery farm","Eternal production","Deep sleep","Hibernate","Long-term archive","NEVER OFFLINE","Chrono vault","Time crystal","Storage mastery"],["Rebirth knowledge","Permanent energy","Faster recovery","Core affinity","Rebirth memory","Eternal skill","Quantum rhythm","Rapid reboot","Rebirth master","Ancestral spark","Machine memory","Clean restart","IMMORTAL CORE","Quantum yield","Core scientist","Prestige mastery"],["Facility expansion","Survey scanner","Research access","Factory logistics","Deep facility","Quantum access","Launch technology","Wayfinding","Orbital engineering","Planetary survey","Dimensional research","Fast travel network","MULTIVERSE ACCESS","Explorer insight","Research network","Frontier mastery"]],qh={"power:0":["+10% manual energy per level.",{click:.1}],"power:1":["+25% manual energy.",{click:.25}],"power:3":["Maximum combo +1\xD7.",{combo:1}],"auto:1":["+15% passive income.",{passive:.15}],"auto:2":["+25% passive income.",{passive:.25}],"auto:4":["+50% passive income.",{passive:.5}],"luck:0":["+2% critical chance.",{crit:.02}],"luck:1":["Critical multiplier +5\xD7.",{critMult:5}],"rebirth:8":["+100% quantum yield.",{prestige:1}],"explore:1":["Shows uncollected energy shards on the minimap.",{scanner:1}],"power:2":["Critical interactions unlocked at 5% chance.",{critUnlock:1}],"power:4":["Every tenth interaction earns 5\xD7 energy.",{tenth:1}],"power:5":["+10% critical chance.",{crit:.1}],"power:8":["Critical multiplier +5\xD7.",{critMult:5}],"power:9":["Manual energy +500%.",{click:5}],"power:11":["Manual energy \xD710, passive energy \xD70.5.",{manualKeystone:1}],"power:12":["Manual energy \xD78.",{god:1}],"auto:0":["Unlocks machine production and construction.",{automation:1}],"auto:3":["Robot workers join the facility; +2 automatic pulses/sec.",{workers:1,autoClicks:2}],"auto:5":["Passive income grows +1% per active minute, up to +100%.",{selfImprove:1}],"auto:9":["Passive energy \xD75, manual energy \xD70.2.",{machineKeystone:1}],"auto:12":["Passive production \xD78.",{fullAuto:1}],"luck:2":["Machines have a 5% chance each second to produce a bonus tick.",{luckyMachine:1}],"luck:3":["Golden drones can visit your facility.",{golden:1}],"luck:4":["Each manual pulse has a 0.2% chance of a 100\xD7 jackpot.",{jackpot:1}],"luck:8":["Rare event rewards \xD72.",{rare:1}],"luck:9":["World shards can be collected from farther away.",{magnet:1}],"luck:12":["Critical chance +15%; event rewards \xD72.",{crit:.15,rare:1}],"offline:0":["Unlock offline earnings at 25% efficiency.",{offline:.25}],"offline:1":["Offline storage +4 hours.",{hours:4}],"offline:2":["Offline efficiency +25%.",{offline:.25}],"offline:4":["Offline storage +12 hours.",{hours:12}],"offline:5":["Offline efficiency +25%.",{offline:.25}],"offline:8":["Offline storage +24 hours (48h maximum).",{hours:24}],"offline:12":["Offline efficiency becomes 100%.",{neverOffline:1}],"rebirth:1":["Each rebirth starts with 500 extra energy.",{startEnergy:500}],"rebirth:4":["Keep 10% of each machine level through rebirth.",{memory:.1}],"rebirth:5":["Earn 3 extra Skill Points each rebirth.",{rebirthPoints:3}],"rebirth:10":["Start with one extra collector per rebirth.",{startMachine:1}],"rebirth:12":["Quantum core passive bonus doubles.",{immortal:1}],"explore:0":["Allows the Generator Hall to open at 250 run energy.",{access:1}],"explore:2":["Allows the Research Wing to open at 3K run energy.",{research:1}],"explore:3":["Allows the Factory to open at 1.5K run energy.",{factory:1}],"explore:4":["Allows the Deep Facility to open at 10K run energy.",{deep:1}],"explore:5":["Allows the Quantum Chamber to open at 25K run energy.",{quantum:1}],"explore:6":["Allows the Launch Platform to open at 100K run energy.",{launch:1}],"explore:8":["Allows the Orbital Station to open at 1M run energy.",{orbital:1}],"explore:9":["Allows the Alien Outpost to open at 10M run energy.",{planet:1}],"explore:10":["Allows the Dimensional Realm to open at 100M run energy.",{dimension:1}],"explore:11":["Overview network: +25% all energy. All open plots can always be focused.",{fastTravel:1,global:.25}],"explore:12":["New Reality becomes available after BREAK REALITY.",{multiverse:1}]},Rt=[],Yl=[[1,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3],[1,4],[0,5],[1,5],[2,5]],Yh=[[],[0],[0],[0],[1],[2],[2],[3],[4],[5],[6],[7],[8,9,10],[12],[12],[12]];Tn.forEach((n,e)=>Xh[e].forEach((t,i)=>{let s,r,a=qh[n[0]+":"+i];if(a)[r,s]=a;else{let o=["click","passive","crit","offlineProduction","prestige","xp"][e],l=o==="crit"?.015:i>12?.3:.15;s={[o]:l},r=`+${Math.round(l*100)}% ${["manual energy","passive income","critical chance","offline-only production","quantum yield","XP gain"][e]} per level.`}Rt.push({id:`${n[0]}-${i}`,name:t,desc:r,branch:n[0],tree:"main",color:n[2],x:e*350+Yl[i][0]*76+36,y:140+Yl[i][1]*158,max:e===0&&i===0?10:a?1:5,cost:i===12?10:i>=8?3:i>=4?2:1,requires:Yh[i].map(o=>`${n[0]}-${o}`),effects:s,keystone:[11,12].includes(i)})}));var Jh=[["Quantum automation",["auto-4","power-5"],{luckyMachine:1,passive:.5},"Machine bonus ticks unlocked and +50% passive energy."],["Eternal reactor",["offline-8","rebirth-12"],{memory:.2},"Keep an additional 20% of machine levels after rebirth."],["Explorer drones",["auto-3","explore-4"],{dronePower:1},"Equipped drone bonuses double."],["Sleeping giant",["offline-5","power-9"],{offlineProduction:1},"Offline-only production +100%."],["Fortunate rebirth",["luck-8","rebirth-8"],{prestige:1},"Quantum yield +100%."],["Dimensional network",["explore-10","auto-12"],{global:2},"All energy +200%."]];Jh.forEach((n,e)=>Rt.push({id:"cross-"+e,name:n[0],requires:n[1],effects:n[2],desc:n[3],tree:"main",branch:"cross",color:"#dce7ff",x:110+e*335,y:1220,max:1,cost:8,keystone:!0}));var Zh=[["Permanent production",{global:.1},"+10% all energy per level."],["Faster beginning",{startEnergy:1e4},"+10K starting energy per level."],["Core memory",{startMachine:1},"+1 starting collector per level."],["Quantum knowledge",{rebirthPoints:1},"+1 Skill Point per rebirth per level."],["Rebirth efficiency",{prestige:.15},"+15% quantum yield per level."],["Permanent criticals",{crit:.01},"+1% critical chance per level."],["Machine memory",{memory:.02},"Keep +2% machine levels per level."],["Quantum cooling",{click:.25},"+25% manual energy per level."],["Stellar factory",{passive:.25},"+25% passive energy per level."],["Timeless network",{hours:2},"+2h offline capacity per level, up to 48h."],["Ancestral fortune",{rare:.1},"+10% rare event rewards per level."],["Quantum architect",{global:.5},"+50% all energy per level."]];Zh.forEach((n,e)=>Rt.push({id:"q-"+e,name:n[0],effects:n[1],desc:n[2],tree:"quantum",branch:"quantum",color:"#f4ce78",x:180+e%3*220,y:130+Math.floor(e/3)*170,max:100,cost:1+Math.floor(e/3),requires:e<3?[]:["q-"+(e-3)],keystone:e>=9}));var Kh=[["Infinite energy",{global:2},"+200% all energy."],["Rebirth memory+",{memory:.2},"Keep +20% of machine levels."],["Dimensional production",{dimensionProduction:1},"+100% passive income per ascension."],["Temporal automation",{temporal:1},"Production continues during rebirth animations."],["Infinite knowledge",{levelPoints:1},"+1 additional Skill Point on future level-ups."],["Reality armour",{bossDamage:2},"+200% boss damage."],["Infinite storage",{neverOffline:1},"100% offline efficiency."],["BREAK REALITY",{breakReality:1},"Unlock New Reality at 3 ascensions with Multiverse Access."]];Kh.forEach((n,e)=>Rt.push({id:"a-"+e,name:n[0],effects:n[1],desc:n[2],tree:"ascension",branch:"ascension",color:"#c0a1ff",x:220+e%2*260,y:130+Math.floor(e/2)*180,max:1,cost:e===7?3:1,requires:e<2?[]:["a-"+(e-2)],keystone:e===7}));Tn.forEach((n,e)=>[0,1].forEach(t=>Rt.push({id:`m-${e}-${t}`,name:n[1]+(t?" transcendence":" mastery"),desc:`+${t?40:20}% ${["manual energy","passive income","rare rewards","offline-only production","quantum yield","XP"][e]} per level. Unlimited research; costs increase each level.`,effects:{[["click","passive","rare","offlineProduction","prestige","xp"][e]]:t?.4:.2},tree:"mastery",branch:n[0],color:n[2],x:110+e*180,y:180+t*230,max:1e6,cost:t?5:3,requires:t?[`m-${e}-0`]:[],keystone:!!t})));var It=Object.fromEntries(Rt.map(n=>[n.id,n])),lt=[{id:"lab",name:"Origin Laboratory",x:0,z:0,need:0,flag:null,color:"#72d8ee",subtitle:"Where a universe begins."},{id:"generator",name:"Generator Hall",x:28,z:0,need:250,flag:"access",color:"#78edbc",subtitle:"The first step toward independence."},{id:"factory",name:"Robot Factory",x:56,z:0,need:1500,flag:"factory",color:"#f4c67b",subtitle:"An empire in motion."},{id:"research",name:"Research Wing",x:28,z:-28,need:3e3,flag:"research",color:"#a79df8",subtitle:"Curiosity becomes power."},{id:"quantum",name:"Quantum Chamber",x:56,z:-28,need:25e3,flag:"quantum",color:"#f49fcb",subtitle:"Beyond ordinary physics."},{id:"deep",name:"Deep Facility",x:0,z:-28,need:1e4,flag:"deep",color:"#67d7bf",subtitle:"Forgotten infrastructure. New possibilities."},{id:"launch",name:"Launch Platform",x:-28,z:0,need:1e5,flag:"launch",color:"#efb086",subtitle:"Your world is getting smaller."},{id:"orbital",name:"Orbital Station",x:-56,z:0,need:1e6,flag:"orbital",color:"#9ccdfc",subtitle:"A foundry among the stars."},{id:"planet",name:"Alien Outpost",x:-56,z:-28,need:1e7,flag:"planet",color:"#aeed9c",subtitle:"A different sun. The same ambition."},{id:"dimension",name:"Dimensional Realm",x:-28,z:-28,need:1e8,flag:"dimension",color:"#dc99ff",subtitle:"The edge of what is possible."}],Xt=[["collector","Energy collector","lab",20,1.15,1],["generator","Ion generator","generator",150,1.16,9],["fusion","Fusion engine","factory",1800,1.17,110],["research","Photon processor","research",12e3,1.18,800],["deep","Dark matter drill","deep",65e3,1.19,4500],["quantum","Quantum reactor","quantum",3e5,1.2,24e3],["launch","Stellar turbine","launch",2e6,1.2,17e4],["orbital","Dyson relay","orbital",2e7,1.21,18e5],["planet","Planetary engine","planet",3e8,1.22,3e7],["dimension","Dimensional engine","dimension",5e9,1.23,5e8]].map((n,e)=>({id:n[0],name:n[1],area:n[2],base:n[3],growth:n[4],rate:n[5],i:e})),zi=[["azure","Origin blue","#72d8ee","Common",0],["inferno","Inferno","#ff8658","Rare",20],["frozen","Frozen star","#c0f1ff","Rare",20],["toxic","Toxic glow","#a1ff72","Uncommon",12],["gold","Golden core","#ffd16b","Epic",35],["void","Void heart","#ae78fb","Legendary",60],["galaxy","Galaxy","#ff9ee2","Epic",40],["blackhole","Black hole","#7363c5","Mythic",80],["developer","Developer signal","#ddfc8b","Secret",-1],["reality","Reality core","#ffffff","Mythic",-1]];var Si=[["Maintenance drone","+5% passive income","#7decc0",20],["Lucky drone","+2% critical chance","#f7d477",25],["Mining drone","Periodic energy deliveries","#72d9f9",30],["Quantum drone","+10% quantum yield","#e49dd7",40],["Void drone","+8% all energy","#bd8aff",60]],tr=[["Cooling system","+10% manual energy","click"],["Power grid","+10% passive energy","passive"],["Network system","+1 automatic pulse/sec","autoClicks"],["Storage system","+1h offline capacity (48h maximum)","hours"],["Research network","+10% XP gain","xp"]],cn=[["Energy compression","+25% manual energy",1500,30,"click"],["Robot intelligence","+25% passive energy",7500,60,"passive"],["Quantum physics","+25% quantum yield",5e4,90,"prestige"],["Advanced materials","+25% all energy",25e4,120,"global"],["Dimensional science","+25% XP gain",1e6,180,"xp"]],ir=[["engineer","Chief engineer","Generate 100K lifetime energy","lifetime",1e5],["scientist","Dr. Lyra","Unlock 12 skill nodes","nodes",12],["technician","Technician Omi","Own 25 machine levels","machines",25],["explorer","Explorer Vega","Discover 6 facility areas","areas",6]],Jl=["Corrupted Core","Rogue AI","Quantum Guardian","Void Machine","Planet Eater","Dimensional Titan","Reality Breaker"];var gt=n=>Math.min(1e280,Math.max(0,Number.isFinite(n)?n:1e280));function Zl(n,e="short"){if(!Number.isFinite(n))return"MAX";if(n<1e3)return n<10?Number(n.toFixed(1)).toString():Math.floor(n).toLocaleString("en");if(e==="scientific")return n.toExponential(2);let t=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"],i=Math.floor(Math.log10(n)/3);return i<t.length?(n/1e3**i).toFixed(2).replace(/\.?0+$/,"")+t[i]:n.toExponential(2)}var Vi=n=>n>=3600?`${Math.floor(n/3600)}h ${Math.floor(n%3600/60)}m`:n>=60?`${Math.floor(n/60)}m ${Math.floor(n%60)}s`:`${Math.ceil(n)}s`;function An(){return{version:2,energy:0,lifetime:0,run:0,dust:0,tokens:0,cores:0,coreTotal:0,shards:0,xp:0,points:1,pointsEarned:1,rebirths:0,cycle:0,ascensions:0,reality:0,skills:{},firstSkills:[],machines:Array(10).fill(0),facility:Array(5).fill(0),research:Array(5).fill(0),researchJob:null,areas:["lab"],discovered:["lab"],collected:[],secrets:[],skins:["azure"],skin:"azure",outfit:0,droneCopies:Array(5).fill(0),droneLevels:Array(5).fill(0),equipped:[],slots:1,achievements:[],npcClaims:[],boosts:[],respecs:0,challenge:null,completedChallenges:[],last:Date.now(),position:{x:0,y:0,z:7,yaw:0,pitch:0},daily:{date:"",streak:0},quests:{day:"",week:"",daily:{},weekly:{},claims:[]},stats:{clicks:0,criticals:0,highest:0,passive:0,time:0,offline:0,purchases:0,games:0,wins:0,bosses:0,quests:0,events:0,npcTalks:0,memory:0,parkour:0,combo:1},settings:{view:"aerial",quality:"high",particles:!0,bloom:!0,shadows:!0,antialias:!0,lighting:!0,renderDistance:150,motionBlur:!1,shake:!0,bob:!0,reduced:!1,fps:60,sensitivity:1,sound:!0,music:!1,master:.4,sfx:.5,musicVolume:.18,notation:"short",accent:"#3f7861",machineColor:"#6f8fa5",trail:!0,tutorial:!0}}}var nr=class{constructor(){this.s=An(),this.listeners=[],this.fx={},this.combo=0,this.lastClick=0,this.lastProductionRoll=0,this.lastMining=0,this.resetting=!1,this.storageFailed=!1,this.achDefs=this.makeAchievements(),this.load(),this.calendar(),this.recompute()}on(e){this.listeners.push(e)}emit(e,t){this.listeners.forEach(i=>i(e,t))}notice(e){this.emit("notice",e)}get level(){return 1+Math.floor(Math.sqrt(this.s.xp/35))}fmt(e){return Zl(e,this.s.settings.notation)}recompute(){let e={};for(let[t,i]of Object.entries(this.s.skills)){let s=It[t];if(s)for(let[r,a]of Object.entries(s.effects))e[r]=(e[r]||0)+a*i}this.s.facility.forEach((t,i)=>{let s=tr[i][2];e[s]=(e[s]||0)+t*(i===2||i===3?1:.1)}),this.s.research.forEach((t,i)=>{let s=cn[i][4];e[s]=(e[s]||0)+t*.25}),this.fx=e,this.emit("change")}buff(e){return this.s.boosts.filter(t=>t.type===e&&t.end>Date.now()).reduce((t,i)=>Math.max(t,i.mult),1)}drone(e){return this.s.equipped.includes(e)?(1+this.s.droneLevels[e]*.5)*(1+(this.fx.dronePower||0)):0}get global(){return gt((1+this.s.coreTotal*.08*(this.fx.immortal?2:1))*(1+this.s.ascensions*2)*(1+this.s.reality*10)*(1+(this.fx.global||0))*(1+this.s.achievements.length*.005)*(1+this.s.completedChallenges.length*.1)*(1+.08*this.drone(4))*(this.s.skin==="gold"?1.02:1)*this.buff("all"))}get manual(){let e=(1+(this.fx.click||0))*this.global*this.buff("click");return this.fx.manualKeystone&&(e*=10),this.fx.machineKeystone&&(e*=.2),this.fx.god&&(e*=8),gt(e)}get crit(){return Math.min(.85,(this.fx.critUnlock?.05:0)+(this.fx.crit||0)+this.drone(1)*.02+(this.buff("luck")>1?.3:0))}get critMult(){return 5+(this.fx.critMult||0)}milestone(e){return 2**[10,25,50,100,250,500,1e3].filter(t=>e>=t).length}machineRate(e){return gt(this.s.machines[e]*Xt[e].rate*this.milestone(this.s.machines[e]))}get passive(){if(!this.fx.automation||this.s.challenge?.id==="manual")return 0;let e=this.s.machines.reduce((t,i,s)=>gt(t+this.machineRate(s)),0)*(1+(this.fx.passive||0))*this.global*(1+this.drone(0)*.05)*this.buff("passive");return this.fx.selfImprove&&(e*=1+Math.min(1,this.s.stats.time/6e3)),this.fx.machineKeystone&&(e*=5),this.fx.manualKeystone&&(e*=.5),this.fx.fullAuto&&(e*=8),this.fx.dimensionProduction&&(e*=1+this.s.ascensions*this.fx.dimensionProduction),this.s.challenge?.id==="instability"&&(e*=1+.7*Math.sin(this.s.stats.time)),gt(e)}get auto(){return this.s.challenge?.id==="manual"?0:gt((this.fx.autoClicks||0)*this.manual)}get cps(){return gt(this.passive+this.auto)}get offlineEfficiency(){return this.fx.neverOffline?1:Math.min(1,this.fx.offline||0)}get offlineHours(){return Math.min(48,8+(this.fx.hours||0))}gain(e,t=!1){e=gt(e);for(let i of["energy","lifetime","run"])this.s[i]=gt(this.s[i]+e);t&&(this.s.stats.passive=gt(this.s.stats.passive+e)),this.q("earn",e),this.s.challenge&&(this.s.challenge.earned=gt(this.s.challenge.earned+e))}xp(e){let t=this.level;this.s.xp=gt(this.s.xp+e*(1+(this.fx.xp||0))*this.buff("xp"));let i=this.level-t;if(i){let s=i*(1+(this.fx.levelPoints||0));for(let r=t+1;r<=this.level;r++)r%10===0&&(s+=3);this.addPoints(s),this.s.dust+=i,this.q("level",i),this.notice(`Level ${this.level} \xB7 +${s} Skill Points`),this.emit("level")}}addPoints(e){this.s.points+=e,this.s.pointsEarned+=e}pulse(){if(this.s.challenge?.id==="machine")return{value:0,critical:!1};let e=performance.now();this.combo=Math.min(100,this.combo+(e-this.lastClick<550?8:3)),this.lastClick=e;let t=Math.random()<this.crit;this.s.stats.clicks++;let i=this.manual*(1+this.combo/100*(2+(this.fx.combo||0)))*(t?this.critMult:1);return this.fx.tenth&&this.s.stats.clicks%10===0&&(i*=5),this.fx.jackpot&&Math.random()<.002&&(i*=100,this.notice("JACKPOT PULSE \xB7 100\xD7 energy")),this.gain(i),this.s.stats.highest=Math.max(this.s.stats.highest,gt(i)),this.s.stats.combo=Math.max(this.s.stats.combo,1+this.combo/50),this.q("click"),t&&(this.s.stats.criticals++,this.q("crit")),this.xp(4),this.emit("pulse",{value:gt(i),critical:t}),{value:gt(i),critical:t}}nodeCost(e){let t=this.s.skills[e.id]||0;return e.tree==="mastery"?Math.ceil(e.cost*(1+t*.35)):e.tree==="quantum"?Math.ceil(e.cost*1.35**t):e.cost}available(e){if((this.s.skills[e.id]||0)>=e.max||e.tree==="quantum"&&!this.s.rebirths||e.tree==="ascension"&&!this.s.ascensions||e.tree==="mastery"&&this.level<100)return!1;if(this.s.challenge?.id==="branch"&&e.tree==="main"&&e.branch!=="cross"){let t=new Set(Object.keys(this.s.skills).filter(i=>It[i]?.tree==="main").map(i=>It[i].branch));if(t.size&&!t.has(e.branch))return!1}return e.requires.every(t=>(this.s.skills[t]||0)>0)}skillBuy(e){let t=It[e];if(!t||!this.available(t))return!1;let i=t.tree==="quantum"?"cores":t.tree==="ascension"?"shards":"points",s=this.nodeCost(t);return this.s[i]<s?!1:(this.s[i]-=s,this.s.skills[e]=(this.s.skills[e]||0)+1,this.s.firstSkills.includes(e)||(this.s.firstSkills.push(e),this.xp(8),this.q("node")),this.recompute(),this.notice(`${t.name} \xB7 level ${this.s.skills[e]}`),this.emit("skill",e),this.progress(),this.save(),!0)}respec(){if(this.s.respecs&&this.s.dust<25)return!1;let e=Object.keys(this.s.skills).filter(i=>It[i].tree==="main"),t=0;return e.forEach(i=>{t+=this.s.skills[i]*It[i].cost,delete this.s.skills[i]}),this.s.respecs&&(this.s.dust-=25),this.s.points+=t,this.s.respecs++,this.recompute(),this.s.areas=["lab"],this.progress(),this.emit("teleport","lab"),this.notice(`${t} Skill Points refunded`),this.save(),!0}quote(e,t=1){let i=Xt[e],s=this.s.machines[e],r=1e4-s,a=l=>gt(i.base*i.growth**s*(i.growth**l-1)/(i.growth-1)),o=Math.min(t==="max"?r:t,r);if(t==="max"){let l=0,c=r;for(;l<c;){let u=Math.ceil((c+l)/2);a(u)<=this.s.energy?l=u:c=u-1}o=l}return{n:o,cost:o?a(o):0}}buyMachine(e,t){if(!this.fx.automation||!this.s.areas.includes(Xt[e].area))return!1;let i=this.quote(e,t);return i.n<1||this.s.energy<i.cost?!1:(this.s.energy-=i.cost,this.s.machines[e]+=i.n,this.s.stats.purchases+=i.n,this.q("buy",i.n),this.xp(i.n*6),this.emit("machine",e),this.progress(),!0)}facilityBuy(e){let t=1e3*2**this.s.facility[e];this.s.energy<t||this.s.facility[e]>=50||(this.s.energy-=t,this.s.facility[e]++,this.recompute(),this.emit("world"),this.xp(15))}startResearch(e){if(this.s.researchJob)return;let t=cn[e],i=t[2]*2**this.s.research[e];this.s.energy<i||this.s.research[e]>=20||(this.s.energy-=i,this.s.researchJob={i:e,end:Date.now()+t[3]*1e3},this.notice("Research started \xB7 "+t[0]),this.emit("change"))}get rebirthRequirement(){return 1e6*Math.pow(1.15,this.s.cycle)}get rebirthGain(){return Math.floor(Math.sqrt(this.s.run/this.rebirthRequirement)*(1+(this.fx.prestige||0))*(1+.1*this.drone(3)))}performRebirth(){if(this.s.run<this.rebirthRequirement)return 0;let e=this.rebirthGain;this.s.cores+=e,this.s.coreTotal+=e,this.s.rebirths++,this.s.cycle++,this.addPoints(2+(this.fx.rebirthPoints||0)),this.s.energy=this.fx.startEnergy||0,this.s.run=0;let t=Math.min(.8,this.fx.memory||0);return this.s.machines=this.s.machines.map(i=>Math.floor(i*t)),this.s.machines[0]+=this.fx.startMachine||0,this.s.facility.fill(0),this.s.areas=["lab"],this.s.boosts=[],this.s.challenge=null,this.s.researchJob=null,this.combo=0,this.q("rebirth"),this.xp(150),this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.progress(),this.save(),e}ascend(){if(this.s.cycle<10)return!1;this.s.ascensions++,this.s.shards+=3,this.s.cycle=0,this.s.cores=0,this.s.coreTotal=0;for(let e of Object.keys(this.s.skills))It[e].tree==="quantum"&&delete this.s.skills[e];return this.s.energy=0,this.s.run=0,this.s.machines.fill(0),this.s.facility.fill(0),this.s.research.fill(0),this.s.researchJob=null,this.s.boosts=[],this.s.challenge=null,this.s.areas=["lab"],this.addPoints(5),this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.progress(),this.save(),!0}newReality(){if(this.s.ascensions<3||!this.fx.breakReality||!this.fx.multiverse)return!1;let e=this.s;return this.s=An(),this.s.reality=e.reality+1,this.s.skins=[...new Set([...e.skins,"reality"])],this.s.skin="reality",this.s.settings=e.settings,this.s.achievements=e.achievements,this.s.stats=e.stats,this.s.lifetime=e.lifetime,this.s.secrets=e.secrets,this.s.points=6+this.s.reality*2,this.s.pointsEarned=this.s.points,this.recompute(),this.emit("world"),this.emit("teleport","lab"),this.notice("NEW REALITY \xB7 All-energy multiplier increased"),this.save(),!0}challengeStart(e){if(this.s.challenge={id:e,start:Date.now(),earned:0},this.s.energy=0,this.s.run=0,this.s.machines.fill(0),this.s.boosts=[],e==="machine"&&(this.s.machines[0]=1,!this.fx.automation)){this.s.challenge=null,this.notice("Unlock Basic automation first.");return}this.emit("world"),this.emit("teleport","lab")}addBoost(e,t,i){let s=this.s.boosts.find(r=>r.type===e&&r.mult===t);s?s.end=Math.max(Date.now(),s.end)+i*1e3:this.s.boosts.push({type:e,mult:t,end:Date.now()+i*1e3}),this.emit("change")}collect(e){this.s.collected.includes(e)||(this.s.collected.push(e),this.s.dust+=2,this.xp(15),this.q("shard"),this.s.collected.length%5===0&&this.addPoints(1),this.s.collected.length>=50&&this.unlockSkin("reality"),this.notice(`Energy shard ${this.s.collected.length}/50 \xB7 +2 stardust`),this.emit("collected",e),this.progress())}secret(e){this.s.secrets.includes(e)||(this.s.secrets.push(e),this.addPoints(2),this.s.dust+=10,this.notice("Hidden discovery \xB7 +2 Skill Points \xB7 +10 stardust"),e==="terminal"&&this.unlockSkin("developer"),this.progress())}unlockSkin(e){this.s.skins.includes(e)||(this.s.skins.push(e),this.notice("Reactor skin unlocked \xB7 "+zi.find(t=>t[0]===e)[1]))}buySkin(e){let t=zi.find(i=>i[0]===e);if(t){if(!this.s.skins.includes(e)){if(t[4]<0||this.s.dust<t[4])return;this.s.dust-=t[4],this.unlockSkin(e)}this.s.skin=e,this.emit("world")}}droneBuy(e){this.s.dust<Si[e][3]||(this.s.dust-=Si[e][3],this.s.droneCopies[e]++,!this.s.equipped.includes(e)&&this.s.equipped.length<this.s.slots&&this.s.equipped.push(e),this.emit("world"))}droneFuse(e){this.s.droneCopies[e]<3||this.s.droneLevels[e]>=10||(this.s.droneCopies[e]-=2,this.s.droneLevels[e]++,this.notice("Drone evolved \xB7 "+Si[e][0]),this.emit("world"))}npcTalk(e){return this.s.stats.npcTalks++,this.s.stats.npcTalks>=100&&this.secret("social"),ir.find(t=>t[0]===e)}npcValue(e){return e[3]==="lifetime"?this.s.lifetime:e[3]==="nodes"?Object.keys(this.s.skills).length:e[3]==="machines"?this.s.machines.reduce((t,i)=>t+i,0):this.s.discovered.length}npcClaim(e){let t=ir.find(i=>i[0]===e);!t||this.npcValue(t)<t[4]||this.s.npcClaims.includes(e)||(this.s.npcClaims.push(e),this.addPoints(3),this.s.dust+=15,this.s.stats.quests++,this.xp(100),this.notice("Assignment complete \xB7 +3 Skill Points \xB7 +15 stardust"))}calendar(){let e=new Date,t=e.toISOString().slice(0,10);e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+6)%7);let i=e.toISOString().slice(0,10);return this.s.quests.day!==t&&(this.s.quests.day=t,this.s.quests.daily={},this.s.quests.claims=this.s.quests.claims.filter(s=>s.startsWith("w"))),this.s.quests.week!==i&&(this.s.quests.week=i,this.s.quests.weekly={},this.s.quests.claims=this.s.quests.claims.filter(s=>s.startsWith("d"))),t}q(e,t=1){for(let i of["daily","weekly"])this.s.quests[i][e]=gt((this.s.quests[i][e]||0)+t)}missions(){return[["d0","daily","earn",1e7,"Generate 10M energy"],["d1","daily","buy",25,"Buy 25 machine levels"],["d2","daily","node",2,"Unlock 2 skill nodes"],["d3","daily","game",1,"Complete a minigame"],["d4","daily","shard",3,"Find 3 energy shards"],["w0","weekly","rebirth",5,"Rebirth 5 times"],["w1","weekly","boss",10,"Defeat 10 bosses"],["w2","weekly","game",20,"Complete 20 minigames"],["w3","weekly","level",20,"Gain 20 levels"]]}claimMission(e){let t=this.missions().find(s=>s[0]===e);if(!t||this.s.quests.claims.includes(e)||(this.s.quests[t[1]][t[2]]||0)<t[3])return;this.s.quests.claims.push(e);let i=t[1]==="daily"?1:3;this.addPoints(i),this.s.dust+=i*5,this.s.stats.quests++,this.xp(i*50),this.notice(`Mission complete \xB7 +${i} Skill Points`)}dailyClaim(){let e=this.calendar();if(this.s.daily.date===e)return!1;let t=new Date(Date.now()-864e5).toISOString().slice(0,10);this.s.daily.streak=this.s.daily.date===t?this.s.daily.streak+1:1,this.s.daily.date=e;let i=(this.s.daily.streak-1)%7+1;return i===1&&this.gain(Math.max(100,this.cps*60)),i===2&&this.addBoost("all",2,300),i===3&&this.xp(200),i===4&&(this.s.tokens+=20),i===5&&this.s.droneCopies[0]++,i===6&&(this.s.cores++,this.s.coreTotal++),i===7&&(this.unlockSkin("galaxy"),this.s.dust+=25),this.notice("Day "+i+" supply claimed"),this.save(),!0}progress(){for(let e of lt)!this.s.areas.includes(e.id)&&this.s.run>=e.need&&(!e.flag||this.fx[e.flag])&&(this.s.areas.push(e.id),this.s.discovered.includes(e.id)||(this.s.discovered.push(e.id),this.xp(60),this.addPoints(1)),this.notice("AREA UNLOCKED \xB7 "+e.name),this.emit("area",e.id));for(let e of this.achDefs)!this.s.achievements.includes(e.id)&&e.value()>=e.goal&&(this.s.achievements.push(e.id),this.s.dust+=e.reward,this.s.achievements.length%5===0&&this.addPoints(1),this.notice("Achievement \xB7 "+e.name));if(this.s.rebirths>=1&&this.unlockSkin("toxic"),this.s.rebirths>=10&&this.unlockSkin("void"),this.s.ascensions>=1&&this.unlockSkin("blackhole"),this.level>=50&&this.unlockSkin("frozen"),this.s.challenge){let e=this.s.challenge;e.earned>=1e6?(this.s.completedChallenges.includes(e.id)||(this.s.completedChallenges.push(e.id),this.addPoints(3)),this.s.dust+=20,this.s.challenge=null,this.notice("Challenge complete \xB7 +20 stardust")):e.id==="speed"&&Date.now()-e.start>18e4&&(this.s.challenge=null,this.notice("Speed challenge expired."))}}tick(e){if((!this.resetting||this.fx.temporal)&&this.gain(this.cps*e,!0),this.s.stats.time+=e,performance.now()-this.lastClick>450&&(this.combo=Math.max(0,this.combo-e*16)),this.lastProductionRoll+=e,this.lastProductionRoll>=1&&(this.lastProductionRoll=0,this.fx.luckyMachine&&Math.random()<.05&&this.gain(this.passive,!0),this.progress()),this.lastMining+=e,this.lastMining>=60&&(this.lastMining=0,this.drone(2)&&(this.gain(Math.max(100,this.cps*10)*this.drone(2)),this.notice("Mining drone delivered an energy cache"))),this.s.researchJob&&Date.now()>=this.s.researchJob.end){let t=this.s.researchJob.i;this.s.research[t]++,this.s.researchJob=null,this.recompute(),this.xp(80),this.notice("Research complete \xB7 "+cn[t][0])}}makeAchievements(){let e=[],t=(i,s,r,a)=>r.forEach((o,l)=>e.push({id:i+l,name:`${s} ${l+1}`,goal:o,value:a,reward:2+l,desc:`${s} \xB7 ${Zl(o)}`}));return t("energy","Energy pioneer",[1,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e12,1e15,1e18],()=>this.s.lifetime),t("click","Pulse technician",[10,100,500,1e3,5e3,1e4,5e4,1e5,1e6],()=>this.s.stats.clicks),t("machine","Industrial revolution",[1,10,25,50,100,250,500,1e3],()=>this.s.machines.reduce((i,s)=>i+s,0)),t("node","Knowledge is power",[1,5,10,25,50,75,100,130],()=>Object.keys(this.s.skills).length),t("rebirth","Reborn",[1,3,5,10,25,50,100],()=>this.s.rebirths),t("area","Explorer",[2,3,5,7,10],()=>this.s.discovered.length),t("shard","Crystal collector",[1,5,10,25,50],()=>this.s.collected.length),t("boss","Boss slayer",[1,3,7,10,25,50],()=>this.s.stats.bosses),t("game","Arcade regular",[1,5,10,25,50,100],()=>this.s.stats.games),t("crit","Critical thinker",[10,100,1e3,1e4],()=>this.s.stats.criticals),t("time","Dedicated engineer",[600,3600,18e3],()=>this.s.stats.time),t("asc","Ascended",[1,3,10],()=>this.s.ascensions),e.push({id:"memory",name:"Perfect stabilisation",goal:8,value:()=>this.s.stats.memory,reward:15,desc:"Complete eight stabilisation rounds."},{id:"secret",name:"Under the surface",goal:3,value:()=>this.s.secrets.length,reward:20,desc:"Find three world secrets."},{id:"reality",name:"Reality breaker",goal:1,value:()=>this.s.reality,reward:30,desc:"Enter a New Reality."}),e}validate(e){if(e?.version===1)return this.migrate(e);if(!e||e.version!==2)throw Error("This is not a Nova Foundry 3D save.");let t=An(),i=(o,l=1e280,c=!1)=>{if(typeof o!="number"||!Number.isFinite(o)||o<0||o>l||c&&!Number.isInteger(o))throw Error("Invalid numeric data in save.");return o};for(let o of["energy","lifetime","run","dust","tokens","cores","coreTotal","shards","xp","points","pointsEarned","rebirths","cycle","ascensions","reality","respecs","last"])t[o]=i(e[o]);for(let o of["machines","facility","research","droneCopies","droneLevels"]){if(!Array.isArray(e[o])||e[o].length!==t[o].length)throw Error("Invalid array: "+o);t[o]=e[o].map(l=>i(l,o==="machines"?1e4:o==="droneLevels"?10:1e6,!0))}if(!e.skills||typeof e.skills!="object")throw Error("Missing skills.");for(let[o,l]of Object.entries(e.skills)){if(!It[o])throw Error("Unknown skill.");t.skills[o]=i(l,It[o].max,!0)}let s={firstSkills:Rt.map(o=>o.id),areas:lt.map(o=>o.id),discovered:lt.map(o=>o.id),skins:zi.map(o=>o[0]),equipped:[0,1,2,3,4],achievements:this.achDefs.map(o=>o.id),npcClaims:ir.map(o=>o[0]),completedChallenges:["manual","machine","instability","speed","branch"],secrets:["reactortop","tunnel","terminal","social","hidden"]};for(let[o,l]of Object.entries(s)){if(!Array.isArray(e[o]))throw Error("Missing "+o);t[o]=[...new Set(e[o].filter(c=>l.includes(c)))]}if(!Array.isArray(e.collected))throw Error("Missing shard data.");t.collected=[...new Set(e.collected.map(o=>i(o,49,!0)))],t.slots=i(e.slots,3,!0)||1,t.equipped=t.equipped.filter(o=>t.droneCopies[o]>0).slice(0,t.slots),t.skin=t.skins.includes(e.skin)?e.skin:"azure",t.skins.includes("azure")||t.skins.push("azure"),t.outfit=i(e.outfit,7,!0);for(let o of Object.keys(t.stats))t.stats[o]=i(e.stats?.[o]);for(let o of Object.keys(t.settings)){let l=e.settings?.[o];typeof t.settings[o]=="boolean"&&typeof l=="boolean"&&(t.settings[o]=l)}for(let o of["master","sfx","musicVolume"])t.settings[o]=i(e.settings?.[o],1);t.settings.sensitivity=i(e.settings?.sensitivity,3);let r={view:["aerial"],quality:["low","medium","high","ultra"],notation:["short","scientific"],fps:[30,60,120],renderDistance:[75,150,250],accent:["#3f7861","#416e82","#796489","#8b743c"],machineColor:["#6f8fa5","#bf815e","#849a71","#9982b2"]};for(let[o,l]of Object.entries(r))l.includes(e.settings?.[o])&&(t.settings[o]=e.settings[o]);let a=o=>typeof o=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(o)?o:"";t.daily={date:a(e.daily?.date),streak:i(e.daily?.streak??0,1e6,!0)},t.quests.day=a(e.quests?.day),t.quests.week=a(e.quests?.week);for(let o of["daily","weekly"])for(let l of["earn","click","crit","buy","node","game","shard","rebirth","boss","level"])t.quests[o][l]=i(e.quests?.[o]?.[l]??0);if(t.quests.claims=(e.quests?.claims||[]).filter(o=>this.missions().some(l=>l[0]===o)),!Array.isArray(e.boosts)||e.boosts.length>50)throw Error("Invalid boosts.");if(t.boosts=e.boosts.map(o=>{if(!["all","click","passive","xp","luck"].includes(o.type))throw Error("Invalid boost type.");return{type:o.type,mult:i(o.mult,10),end:i(o.end,Date.now()+7*864e5)}}),e.researchJob&&(t.researchJob={i:i(e.researchJob.i,4,!0),end:i(e.researchJob.end,Date.now()+864e5)}),e.challenge&&["manual","machine","instability","speed","branch"].includes(e.challenge.id)&&(t.challenge={id:e.challenge.id,start:i(e.challenge.start,Date.now()+864e5),earned:i(e.challenge.earned)}),e.position)for(let o of["x","y","z","yaw","pitch"]){let l=e.position[o];typeof l=="number"&&Number.isFinite(l)&&Math.abs(l)<1e3&&(t.position[o]=l)}return t}migrate(e){let t=An();for(let i of["energy","lifetime","run","xp","cores","coreTotal","tokens","rebirths","ascensions"]){if(typeof e[i]!="number"||!Number.isFinite(e[i])||e[i]<0)throw Error("Invalid classic save.");t[i]=gt(e[i])}return t.dust=gt(e.gems||0),t.points=1+Math.floor(Math.sqrt(t.xp/35))+t.rebirths*2,t.pointsEarned=t.points,t.machines[0]=Math.min(1e4,Math.max(0,Math.floor(e.generators?.[0]||0))),t.machines[0]&&(t.skills["auto-0"]=1),t.stats.clicks=gt(e.stats?.clicks||0),t}offline(){this.recompute();let e=Math.min(this.offlineHours*3600,Math.max(0,(Date.now()-this.s.last)/1e3)),t=this.s.boosts;this.s.boosts=[];let i=this.cps*e*this.offlineEfficiency*(1+(this.fx.offlineProduction||0));this.s.boosts=t.filter(s=>s.end>Date.now()),e>20&&i>0&&(this.gain(i,!0),this.s.stats.offline=gt(this.s.stats.offline+i),this.pendingOffline={seconds:e,amount:gt(i)}),this.s.last=Date.now()}save(){this.s.last=Date.now();try{localStorage.setItem(wn,JSON.stringify(this.s)),this.storageFailed=!1}catch{this.storageFailed||this.notice("Browser storage unavailable. Export your save from Settings."),this.storageFailed=!0}}load(){try{let e=localStorage.getItem(wn);e&&(this.s=this.validate(JSON.parse(e)),this.offline())}catch{this.loadError="Your stored save could not be loaded. A fresh session is ready. Use Import to restore a backup."}}import(e){let t=this.validate(JSON.parse(e));try{localStorage.setItem(wn+"-backup",JSON.stringify(this.s))}catch{}this.s=t,this.calendar(),this.offline(),this.recompute(),this.progress(),this.emit("world"),this.emit("teleport","lab"),this.save()}};var Mc=0,Jo=1,Sc=2;var zs=1,ha=2,is=3,Pi=0,Vt=1,ti=2,_i=0,gn=1,Zo=2,Ko=3,jo=4,Ec=5;var Ji=100,wc=101,Tc=102,Ac=103,Cc=104,Rc=200,Ic=201,Pc=202,Lc=203,Cr=204,Rr=205,Dc=206,Nc=207,Uc=208,Fc=209,Oc=210,Bc=211,kc=212,zc=213,Vc=214,Ir=0,Pr=1,Lr=2,xn=3,Dr=4,Nr=5,Ur=6,Fr=7,Qo=0,Gc=1,Hc=2,oi=0,el=1,tl=2,il=3,Vs=4,nl=5,sl=6,rl=7;var al=300,nn=301,yn=302,ua=303,da=304,Gs=306,$n=1e3,mi=1001,Or=1002,Ct=1003,Wc=1004;var Hs=1005;var Lt=1006,fa=1007;var sn=1008;var Wt=1009,ol=1010,ll=1011,ns=1012,pa=1013,li=1014,ci=1015,yi=1016,ma=1017,ga=1018,ss=1020,cl=35902,hl=35899,ul=1021,dl=1022,ii=1023,gi=1026,rn=1027,fl=1028,xa=1029,an=1030,va=1031;var _a=1033,Ws=33776,$s=33777,Xs=33778,qs=33779,ya=35840,ba=35841,Ma=35842,Sa=35843,Ea=36196,wa=37492,Ta=37496,Aa=37488,Ca=37489,Ys=37490,Ra=37491,Ia=37808,Pa=37809,La=37810,Da=37811,Na=37812,Ua=37813,Fa=37814,Oa=37815,Ba=37816,ka=37817,za=37818,Va=37819,Ga=37820,Ha=37821,Wa=36492,$a=36494,Xa=36495,qa=36283,Ya=36284,Js=36285,Ja=36286;var ms=2300,Br=2301,Ar=2302,ko=2303,zo=2400,Vo=2401,Go=2402;var $c=3200;var Za=0,Xc=1,Ui="",Pt="srgb",gs="srgb-linear",xs="linear",Ke="srgb";var pn=7680;var Ho=519,qc=512,Yc=513,Jc=514,Ka=515,Zc=516,Kc=517,ja=518,jc=519,kr=35044;var pl="300 es",ai=2e3,Xn=2001;function jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qc(){let n=vs("canvas");return n.style.display="block",n}var jl={},qn=null;function _s(...n){let e="THREE."+n.shift();qn?qn("log",e,...n):console.log(e,...n)}function eh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=eh(n);let e="THREE."+n.shift();if(qn)qn("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ie(...n){n=eh(n);let e="THREE."+n.shift();if(qn)qn("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function mn(...n){let e=n.join(" ");e in jl||(jl[e]=!0,Le(...n))}function th(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ih={[Ir]:Pr,[Lr]:Ur,[Dr]:Fr,[xn]:Nr,[Pr]:Ir,[Ur]:Lr,[Fr]:Dr,[Nr]:xn},xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var po=Math.PI/180,zr=180/Math.PI;function Yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function eu(n,e){return(n%e+e)%e}function mo(n,e,t){return(1-t)*n+t*e}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _l=class _l{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_l.prototype.isVector2=!0;var De=_l,vi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],v=r[a+2],M=r[a+3];if(d!==M||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+d*M;m<0&&(h=-h,p=-p,v=-v,M=-M,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),C=Math.sin(S);f=Math.sin(f*S)/C,o=Math.sin(o*S)/C,l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+M*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+M*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-o*p,e[t+2]=c*v+u*p+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yl=class yl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yl.prototype.isVector3=!0;var k=yl,go=new k,Ql=new vi,bl=class bl{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],M=s[0],m=s[3],f=s[6],S=s[1],C=s[4],y=s[7],T=s[2],E=s[5],I=s[8];return r[0]=a*M+o*S+l*T,r[3]=a*m+o*C+l*E,r[6]=a*f+o*y+l*I,r[1]=c*M+u*S+d*T,r[4]=c*m+u*C+d*E,r[7]=c*f+u*y+d*I,r[2]=h*M+p*S+v*T,r[5]=h*m+p*C+v*E,r[8]=h*f+p*y+v*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,v=t*d+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return e[0]=d*M,e[1]=(s*c-u*i)*M,e[2]=(o*i-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return mn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(e,t)),this}rotate(e){return mn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return mn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bl.prototype.isMatrix3=!0;var Ne=bl,xo=new Ne,ec=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tu(){let n={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gs]:{primaries:e,whitePoint:i,transfer:xs,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:Ke,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}var We=tu();function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cn,Vr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cn===void 0&&(Cn=vs("canvas")),Cn.width=e.width,Cn.height=e.height;let s=Cn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Cn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iu=0,Yn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vo(s[a].image)):r.push(vo(s[a]))}else r=vo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var nu=0,_o=new k,zt=class n extends xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=mi,s=mi,r=Lt,a=sn,o=ii,l=Wt,c=n.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Yi(),this.name="",this.source=new Yn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=al;zt.DEFAULT_ANISOTROPY=1;var Ml=class Ml{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,y=(p+1)/2,T=(f+1)/2,E=(u+h)/4,I=(d+M)/4,x=(v+m)/4;return C>y&&C>T?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=E/i,r=I/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=I/r,s=x/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-v)*(m-v)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(d-M)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ml.prototype.isVector4=!0;var dt=Ml,Gr=class extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new zt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yn(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Gr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ys=class extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ca=class ca{constructor(e,t,i,s,r,a,o,l,c,u,d,h,p,v,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,p,v,M,m)}set(e,t,i,s,r,a,o,l,c,u,d,h,p,v,M,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Rn.setFromMatrixColumn(e,0).length(),r=1/Rn.setFromMatrixColumn(e,1).length(),a=1/Rn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h+M*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h-M*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+M,t[1]=l*d,t[5]=M*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=M-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-M*d}else if(e.order==="XZY"){let h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+M,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ru)}lookAt(e,t,i){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Gi.crossVectors(i,qt),Gi.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Gi.crossVectors(i,qt)),Gi.normalize(),sr.crossVectors(qt,Gi),s[0]=Gi.x,s[4]=sr.x,s[8]=qt.x,s[1]=Gi.y,s[5]=sr.y,s[9]=qt.y,s[2]=Gi.z,s[6]=sr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],M=i[6],m=i[10],f=i[14],S=i[3],C=i[7],y=i[11],T=i[15],E=s[0],I=s[4],x=s[8],w=s[12],L=s[1],b=s[5],P=s[9],G=s[13],X=s[2],O=s[6],H=s[10],z=s[14],J=s[3],ie=s[7],ne=s[11],me=s[15];return r[0]=a*E+o*L+l*X+c*J,r[4]=a*I+o*b+l*O+c*ie,r[8]=a*x+o*P+l*H+c*ne,r[12]=a*w+o*G+l*z+c*me,r[1]=u*E+d*L+h*X+p*J,r[5]=u*I+d*b+h*O+p*ie,r[9]=u*x+d*P+h*H+p*ne,r[13]=u*w+d*G+h*z+p*me,r[2]=v*E+M*L+m*X+f*J,r[6]=v*I+M*b+m*O+f*ie,r[10]=v*x+M*P+m*H+f*ne,r[14]=v*w+M*G+m*z+f*me,r[3]=S*E+C*L+y*X+T*J,r[7]=S*I+C*b+y*O+T*ie,r[11]=S*x+C*P+y*H+T*ne,r[15]=S*w+C*G+y*z+T*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],M=e[7],m=e[11],f=e[15],S=l*p-c*h,C=o*p-c*d,y=o*h-l*d,T=a*p-c*u,E=a*h-l*u,I=a*d-o*u;return t*(M*S-m*C+f*y)-i*(v*S-m*T+f*E)+s*(v*C-M*T+f*I)-r*(v*y-M*E+m*I)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],M=e[13],m=e[14],f=e[15],S=t*o-i*a,C=t*l-s*a,y=t*c-r*a,T=i*l-s*o,E=i*c-r*o,I=s*c-r*l,x=u*M-d*v,w=u*m-h*v,L=u*f-p*v,b=d*m-h*M,P=d*f-p*M,G=h*f-p*m,X=S*G-C*P+y*b+T*L-E*w+I*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/X;return e[0]=(o*G-l*P+c*b)*O,e[1]=(s*P-i*G-r*b)*O,e[2]=(M*I-m*E+f*T)*O,e[3]=(h*E-d*I-p*T)*O,e[4]=(l*L-a*G-c*w)*O,e[5]=(t*G-s*L+r*w)*O,e[6]=(m*y-v*I-f*C)*O,e[7]=(u*I-h*y+p*C)*O,e[8]=(a*P-o*L+c*x)*O,e[9]=(i*L-t*P-r*x)*O,e[10]=(v*E-M*y+f*S)*O,e[11]=(d*y-u*E-p*S)*O,e[12]=(o*w-a*b-l*x)*O,e[13]=(t*b-i*w+s*x)*O,e[14]=(M*C-v*T-m*S)*O,e[15]=(u*T-d*C+h*S)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,v=r*d,M=a*u,m=a*d,f=o*d,S=l*c,C=l*u,y=l*d,T=i.x,E=i.y,I=i.z;return s[0]=(1-(M+f))*T,s[1]=(p+y)*T,s[2]=(v-C)*T,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(h+f))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(v+C)*I,s[9]=(m-S)*I,s[10]=(1-(h+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Rn.set(s[0],s[1],s[2]).length(),o=Rn.set(s[4],s[5],s[6]).length(),l=Rn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ni.copy(this);let c=1/a,u=1/o,d=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ai,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),v,M;if(l)v=r/(a-r),M=a*r/(a-r);else if(o===ai)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Xn)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ai,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),v,M;if(l)v=1/(a-r),M=a/(a-r);else if(o===ai)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===Xn)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ca.prototype.isMatrix4=!0;var ht=ca,Rn=new k,ni=new ht,su=new k(0,0,0),ru=new k(1,1,1),Gi=new k,sr=new k,qt=new k,ic=new ht,nc=new vi,Li=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Jn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},au=0,sc=new k,In=new vi,Ei=new ht,rr=new k,ls=new k,ou=new k,lu=new vi,rc=new k(1,0,0),ac=new k(0,1,0),oc=new k(0,0,1),lc={type:"added"},cu={type:"removed"},Pn={type:"childadded",child:null},yo={type:"childremoved",child:null},Dt=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Li,i=new vi,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rr.copy(e):rr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ls,rr,this.up):Ei.lookAt(rr,ls,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),In.setFromRotationMatrix(Ei),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lc),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lc),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new k(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hu={type:"move"},Zn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ar={h:0,s:0,l:0};function bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=We.workingColorSpace){if(e=eu(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=bo(a,r,e+1/3),this.g=bo(a,r,e),this.b=bo(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let i=nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return We.workingToColorSpace(Ft.copy(this),e),Math.round(Xe(Ft.r*255,0,255))*65536+Math.round(Xe(Ft.g*255,0,255))*256+Math.round(Xe(Ft.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ft.copy(this),t);let i=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Pt){We.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,s=Ft.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(ar);let i=mo(Hi.h,ar.h,t),s=mo(Hi.s,ar.s,t),r=mo(Hi.l,ar.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new ke;ke.NAMES=nh;var bs=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new k,wi=new k,Mo=new k,Ti=new k,Ln=new k,Dn=new k,cc=new k,So=new k,Eo=new k,wo=new k,To=new dt,Ao=new dt,Co=new dt,Ri=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){si.subVectors(s,t),wi.subVectors(i,t),Mo.subVectors(e,t);let a=si.dot(si),o=si.dot(wi),l=si.dot(Mo),c=wi.dot(wi),u=wi.dot(Mo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return To.setScalar(0),Ao.setScalar(0),Co.setScalar(0),To.fromBufferAttribute(e,t),Ao.fromBufferAttribute(e,i),Co.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(e,t,i,s){return si.subVectors(i,t),wi.subVectors(e,t),si.cross(wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),si.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ln.subVectors(s,i),Dn.subVectors(r,i),So.subVectors(e,i);let l=Ln.dot(So),c=Dn.dot(So);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,s);let u=Ln.dot(Eo),d=Dn.dot(Eo);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ln,a);wo.subVectors(e,r);let p=Ln.dot(wo),v=Dn.dot(wo);if(v>=0&&p<=v)return t.copy(r);let M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Dn,o);let m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return cc.subVectors(r,s),o=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(cc,o);let f=1/(m+M+h);return a=M*f,o=h*f,t.copy(i).addScaledVector(Ln,a).addScaledVector(Dn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),lr.subVectors(this.max,cs),Nn.subVectors(e.a,cs),Un.subVectors(e.b,cs),Fn.subVectors(e.c,cs),Wi.subVectors(Un,Nn),$i.subVectors(Fn,Un),hn.subVectors(Nn,Fn);let t=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-hn.z,hn.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,hn.z,0,-hn.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-hn.y,hn.x,0];return!Ro(t,Nn,Un,Fn,lr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Nn,Un,Fn,lr))?!1:(cr.crossVectors(Wi,$i),t=[cr.x,cr.y,cr.z],Ro(t,Nn,Un,Fn,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new k,new k,new k,new k,new k,new k,new k,new k],ri=new k,or=new Zi,Nn=new k,Un=new k,Fn=new k,Wi=new k,$i=new k,hn=new k,cs=new k,lr=new k,cr=new k,un=new k;function Ro(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){un.fromArray(n,r);let o=s.x*Math.abs(un.x)+s.y*Math.abs(un.y)+s.z*Math.abs(un.z),l=e.dot(un),c=t.dot(un),u=i.dot(un);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var St=new k,hr=new De,uu=0,Ht=class extends xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kr,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kr&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ms=class extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ss=class extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},du=new Zi,hs=new k,Io=new k,Kn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):du.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);let t=hs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(hs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Io)),this.expandByPoint(hs.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fu=0,Qt=new ht,Po=new Dt,On=new k,Yt=new Zi,us=new Zi,At=new k,Ot=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?Ss:Ms)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Yt.min,us.min),Yt.expandByPoint(At),At.addVectors(Yt.max,us.max),Yt.expandByPoint(At)):(Yt.expandByPoint(us.min),Yt.expandByPoint(us.max))}Yt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(On.fromBufferAttribute(e,c),At.add(On)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new k,l[x]=new k;let c=new k,u=new k,d=new k,h=new De,p=new De,v=new De,M=new k,m=new k;function f(x,w,L){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,L),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),u.sub(c),d.sub(c),p.sub(h),v.sub(h);let b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(b),o[x].add(M),o[w].add(M),o[L].add(M),l[x].add(m),l[w].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,w=S.length;x<w;++x){let L=S[x],b=L.start,P=L.count;for(let G=b,X=b+P;G<X;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let C=new k,y=new k,T=new k,E=new k;function I(x){T.fromBufferAttribute(s,x),E.copy(T);let w=o[x];C.copy(w),C.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(E,w);let b=y.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,b)}for(let x=0,w=S.length;x<w;++x){let L=S[x],b=L.start,P=L.count;for(let G=b,X=b+P;G<X;G+=3)I(e.getX(G+0)),I(e.getX(G+1)),I(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){let v=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,v=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Ht(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kr,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kt=new k,Es=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pu=0,Di=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=gn,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Rr,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pn,this.stencilZFail=pn,this.stencilZPass=pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gn&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cr&&(i.blendSrc=this.blendSrc),this.blendDst!==Rr&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jn=class extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bn,ds=new k,kn=new k,zn=new k,Vn=new De,fs=new De,sh=new ht,ur=new k,ps=new k,dr=new k,hc=new De,Lo=new De,uc=new De,ws=class extends Dt{constructor(e=new jn){if(super(),this.isSprite=!0,this.type="Sprite",Bn===void 0){Bn=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wr(t,5);Bn.setIndex([0,1,2,0,2,3]),Bn.setAttribute("position",new Es(i,3,0,!1)),Bn.setAttribute("uv",new Es(i,2,3,!1))}this.geometry=Bn,this.material=e,this.center=new De(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kn.setFromMatrixScale(this.matrixWorld),sh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kn.multiplyScalar(-zn.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;fr(ur.set(-.5,-.5,0),zn,a,kn,s,r),fr(ps.set(.5,-.5,0),zn,a,kn,s,r),fr(dr.set(.5,.5,0),zn,a,kn,s,r),hc.set(0,0),Lo.set(1,0),uc.set(1,1);let o=e.ray.intersectTriangle(ur,ps,dr,!1,ds);if(o===null&&(fr(ps.set(-.5,.5,0),zn,a,kn,s,r),Lo.set(0,1),o=e.ray.intersectTriangle(ur,dr,ps,!1,ds),o===null))return;let l=e.ray.origin.distanceTo(ds);l<e.near||l>e.far||t.push({distance:l,point:ds.clone(),uv:Ri.getInterpolation(ds,ur,ps,dr,hc,Lo,uc,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fr(n,e,t,i,s,r){Vn.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(fs.x=r*Vn.x-s*Vn.y,fs.y=s*Vn.x+r*Vn.y):fs.copy(Vn),n.copy(e),n.x+=fs.x,n.y+=fs.y,n.applyMatrix4(sh)}var Ci=new k,Do=new k,pr=new k,Xi=new k,No=new k,mr=new k,Uo=new k,Ts=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Do.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=Xi.dot(this.direction),l=-Xi.dot(pr),c=Xi.lengthSq(),u=Math.abs(1-a*a),d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){let M=1/u;d*=M,h*=M,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(pr,h),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){No.subVectors(t,e),mr.subVectors(i,e),Uo.crossVectors(No,mr);let a=this.direction.dot(Uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);let l=o*this.direction.dot(mr.crossVectors(Xi,mr));if(l<0)return null;let c=o*this.direction.dot(No.cross(Xi));if(c<0||l+c>a)return null;let u=-o*Xi.dot(Uo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dc=new ht,dn=new Ts,gr=new Kn,fc=new k,xr=new k,vr=new k,_r=new k,Fo=new k,yr=new k,pc=new k,br=new k,xt=class extends Dt{constructor(e=new Ot,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Fo.fromBufferAttribute(d,e),a?yr.addScaledVector(Fo,u):yr.addScaledVector(Fo.sub(t),u))}t.add(yr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(r),dn.copy(e.ray).recast(e.near),!(gr.containsPoint(dn.origin)===!1&&(dn.intersectSphere(gr,fc)===null||dn.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(r).invert(),dn.copy(e.ray).applyMatrix4(dc),!(i.boundingBox!==null&&dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,dn)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){let m=h[v],f=a[m.materialIndex],S=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,T=C;y<T;y+=3){let E=o.getX(y),I=o.getX(y+1),x=o.getX(y+2);s=Mr(this,f,e,i,c,u,d,E,I,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){let S=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);s=Mr(this,a,e,i,c,u,d,S,C,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){let m=h[v],f=a[m.materialIndex],S=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,T=C;y<T;y+=3){let E=y,I=y+1,x=y+2;s=Mr(this,f,e,i,c,u,d,E,I,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){let S=m,C=m+1,y=m+2;s=Mr(this,a,e,i,c,u,d,S,C,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function mu(n,e,t,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Pi,o),l===null)return null;br.copy(o),br.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:n}}function Mr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,xr),n.getVertexPosition(l,vr),n.getVertexPosition(c,_r);let u=mu(n,e,t,i,xr,vr,_r,pc);if(u){let d=new k;Ri.getBarycoord(pc,xr,vr,_r,d),s&&(u.uv=Ri.getInterpolatedAttribute(s,o,l,c,d,new De)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,l,c,d,new De)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new k,materialIndex:0};Ri.getNormal(xr,vr,_r,h.normal),u.face=h,u.barycoord=d}return u}var $r=class extends zt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ct,u=Ct,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oo=new k,gu=new k,xu=new Ne,ei=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Oo.subVectors(i,t).cross(gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||xu.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fn=new Kn,vu=new De(.5,.5),Sr=new k,Qn=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],v=r[8],M=r[9],m=r[10],f=r[11],S=r[12],C=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,p-u,f-v,T-S).normalize(),s[1].setComponents(c+a,p+u,f+v,T+S).normalize(),s[2].setComponents(c+o,p+d,f+M,T+C).normalize(),s[3].setComponents(c-o,p-d,f-M,T-C).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,f-m,T-y).normalize();else if(s[4].setComponents(c-l,p-h,f-m,T-y).normalize(),t===ai)s[5].setComponents(c+l,p+h,f+m,T+y).normalize();else if(t===Xn)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fn)}intersectsSprite(e){fn.center.set(0,0,0);let t=vu.distanceTo(e.center);return fn.radius=.7071067811865476+t,fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(fn)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Sr.x=s.normal.x>0?e.max.x:e.min.x,Sr.y=s.normal.y>0?e.max.y:e.min.y,Sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends zt{constructor(e=[],t=nn,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},es=class extends zt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends zt{constructor(e,t,i=li,s,r,a,o=Ct,l=Ct,c,u=gi,d=1){if(u!==gi&&u!==rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xr=class extends Ni{constructor(e,t=li,i=nn,s,r,a=Ct,o=Ct,l,c=gi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Cs=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ki=class n extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function v(M,m,f,S,C,y,T,E,I,x,w){let L=y/I,b=T/x,P=y/2,G=T/2,X=E/2,O=I+1,H=x+1,z=0,J=0,ie=new k;for(let ne=0;ne<H;ne++){let me=ne*b-G;for(let be=0;be<O;be++){let qe=be*L-P;ie[M]=qe*S,ie[m]=me*C,ie[f]=X,c.push(ie.x,ie.y,ie.z),ie[M]=0,ie[m]=0,ie[f]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(be/I),d.push(1-ne/x),z+=1}}for(let ne=0;ne<x;ne++)for(let me=0;me<I;me++){let be=h+me+O*ne,qe=h+me+O*(ne+1),ut=h+(me+1)+O*(ne+1),Ye=h+(me+1)+O*ne;l.push(be,qe,Ye),l.push(qe,ut,Ye),J+=6}o.addGroup(p,J,w),p+=J,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Rs=class n extends Ot{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],v=0,M=[],m=i/2,f=0;S(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(p,2));function S(){let y=new k,T=new k,E=0,I=(t-e)/i;for(let x=0;x<=r;x++){let w=[],L=x/r,b=L*(t-e)+e;for(let P=0;P<=s;P++){let G=P/s,X=G*l+o,O=Math.sin(X),H=Math.cos(X);T.x=b*O,T.y=-L*i+m,T.z=b*H,d.push(T.x,T.y,T.z),y.set(O,I,H).normalize(),h.push(y.x,y.y,y.z),p.push(G,1-L),w.push(v++)}M.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let L=M[w][x],b=M[w+1][x],P=M[w+1][x+1],G=M[w][x+1];(e>0||w!==0)&&(u.push(L,b,G),E+=3),(t>0||w!==r-1)&&(u.push(b,P,G),E+=3)}c.addGroup(f,E,0),f+=E}function C(y){let T=v,E=new De,I=new k,x=0,w=y===!0?e:t,L=y===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,m*L,0),h.push(0,L,0),p.push(.5,.5),v++;let b=v;for(let P=0;P<=s;P++){let X=P/s*l+o,O=Math.cos(X),H=Math.sin(X);I.x=w*H,I.y=m*L,I.z=w*O,d.push(I.x,I.y,I.z),h.push(0,L,0),E.x=O*.5+.5,E.y=H*.5*L+.5,p.push(E.x,E.y),v++}for(let P=0;P<s;P++){let G=T+P,X=b+P;y===!0?u.push(X,X+1,G):u.push(X+1,X,G),x+=3}c.addGroup(f,x,y===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qr=class n extends Ot{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let C=new k,y=new k,T=new k;for(let E=0;E<t.length;E+=3)p(t[E+0],C),p(t[E+1],y),p(t[E+2],T),l(C,y,T,S)}function l(S,C,y,T){let E=T+1,I=[];for(let x=0;x<=E;x++){I[x]=[];let w=S.clone().lerp(y,x/E),L=C.clone().lerp(y,x/E),b=E-x;for(let P=0;P<=b;P++)P===0&&x===E?I[x][P]=w:I[x][P]=w.clone().lerp(L,P/b)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let L=Math.floor(w/2);w%2===0?(h(I[x][L+1]),h(I[x+1][L]),h(I[x][L])):(h(I[x][L+1]),h(I[x+1][L+1]),h(I[x+1][L]))}}function c(S){let C=new k;for(let y=0;y<r.length;y+=3)C.x=r[y+0],C.y=r[y+1],C.z=r[y+2],C.normalize().multiplyScalar(S),r[y+0]=C.x,r[y+1]=C.y,r[y+2]=C.z}function u(){let S=new k;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];let y=m(S)/2/Math.PI+.5,T=f(S)/Math.PI+.5;a.push(y,1-T)}v(),d()}function d(){for(let S=0;S<a.length;S+=6){let C=a[S+0],y=a[S+2],T=a[S+4],E=Math.max(C,y,T),I=Math.min(C,y,T);E>.9&&I<.1&&(C<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,C){let y=S*3;C.x=e[y+0],C.y=e[y+1],C.z=e[y+2]}function v(){let S=new k,C=new k,y=new k,T=new k,E=new De,I=new De,x=new De;for(let w=0,L=0;w<r.length;w+=9,L+=6){S.set(r[w+0],r[w+1],r[w+2]),C.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(a[L+0],a[L+1]),I.set(a[L+2],a[L+3]),x.set(a[L+4],a[L+5]),T.copy(S).add(C).add(y).divideScalar(3);let b=m(T);M(E,L+0,S,b),M(I,L+2,C,b),M(x,L+4,y,b)}}function M(S,C,y,T){T<0&&S.x===1&&(a[C]=S.x-1),y.x===0&&y.z===0&&(a[C]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var _n=class n extends qr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Is=class n extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,p=[],v=[],M=[],m=[];for(let f=0;f<u;f++){let S=f*h-a;for(let C=0;C<c;C++){let y=C*d-r;v.push(y,-S,0),M.push(0,0,1),m.push(C/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let C=S+c*f,y=S+c*(f+1),T=S+1+c*(f+1),E=S+1+c*f;p.push(C,y,E),p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new nt(v,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ps=class n extends Ot{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new k,v=new De;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}d+=h}for(let M=0;M<s;M++){let m=M*(i+1);for(let f=0;f<i;f++){let S=f+m,C=S,y=S+i+1,T=S+i+2,E=S+1;o.push(C,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ls=class n extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new k,h=new k,p=[],v=[],M=[],m=[];for(let f=0;f<=i;f++){let S=[],C=f/i,y=a+C*o,T=e*Math.cos(y),E=Math.sqrt(e*e-T*T),I=0;f===0&&a===0?I=.5/t:f===i&&l===Math.PI&&(I=-.5/t);for(let x=0;x<=t;x++){let w=x/t,L=s+w*r;d.x=-E*Math.cos(L),d.y=T,d.z=E*Math.sin(L),v.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(w+I,1-C),S.push(c++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let C=u[f][S+1],y=u[f][S],T=u[f+1][S],E=u[f+1][S+1];(f!==0||a>0)&&p.push(C,y,E),(f!==i-1||l<Math.PI)&&p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new nt(v,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ds=class n extends Ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new k,p=new k,v=new k;for(let M=0;M<=i;M++){let m=a+M/i*o;for(let f=0;f<=s;f++){let S=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(S),p.y=(e+t*Math.cos(m))*Math.sin(S),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),v.subVectors(p,h).normalize(),u.push(v.x,v.y,v.z),d.push(f/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,C=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(f,S,y),l.push(S,C,y)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function bn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(mc(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(mc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Bt(n){let e={};for(let t=0;t<n.length;t++){let i=bn(n[t]);for(let s in i)e[s]=i[s]}return e}function mc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _u(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ml(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var rh={clone:bn,merge:Bt},yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bn(e.uniforms),this.uniformsGroups=_u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new De().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yr=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ts=class extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Jr=class extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zr=class extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kr=class extends ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zo,endingEnd:zo}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vo:r=e,o=2*t-i;break;case Go:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vo:a=e,l=2*i-t;break;case Go:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(s-t),M=v*v,m=M*v,f=-h*m+2*h*M-h*v,S=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*v+1,C=(-1-p)*m+(1.5+p)*M+.5*v,y=p*m-p*M;for(let T=0;T!==o;++T)r[T]=f*a[u+T]+S*a[c+T]+C*a[l+T]+y*a[d+T];return r}},jr=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Qr=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ea=class extends ji{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let v=(i-t)/(s-t),M=1-v;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*v;return r}let h=o*2,p=e-1;for(let v=0;v!==o;++v){let M=a[c+v],m=a[l+v],f=p*h+v*2,S=d[f],C=d[f+1],y=e*h+v*2,T=u[y],E=u[y+1],I=(i-t)/(s-t),x,w,L,b,P;for(let G=0;G<8;G++){x=I*I,w=x*I,L=1-I,b=L*L,P=b*L;let O=P*t+3*b*I*S+3*L*x*T+w*s-i;if(Math.abs(O)<1e-10)break;let H=3*b*(S-t)+6*L*I*(T-S)+3*x*(s-T);if(Math.abs(H)<1e-10)break;I=I-O/H,I=Math.max(0,Math.min(1,I))}r[v]=P*M+3*b*I*C+3*L*x*E+w*m}return r}},Kt=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case Ar:t=this.InterpolantFactoryMethodSmooth;break;case ko:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Ar;case this.InterpolantFactoryMethodBezier:return ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Qh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ar,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let v=0;v!==i;++v){let M=t[d+v];if(M!==t[h+v]||M!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=Br;var Qi=class extends Kt{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=ms;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Kt{constructor(e,t,i,s){super(e,t,i,s)}};ta.prototype.ValueTypeName="color";var ia=class extends Kt{constructor(e,t,i,s){super(e,t,i,s)}};ia.prototype.ValueTypeName="number";var na=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ns=class extends Kt{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var en=class extends Kt{constructor(e,t,i){super(e,t,i)}};en.prototype.ValueTypeName="string";en.prototype.ValueBufferType=Array;en.prototype.DefaultInterpolation=ms;en.prototype.InterpolantFactoryMethodLinear=void 0;en.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Kt{constructor(e,t,i,s){super(e,t,i,s)}};sa.prototype.ValueTypeName="vector";var ra=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ah=new ra,aa=class{constructor(e){this.manager=e!==void 0?e:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fs=class extends Us{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bo=new ht,gc=new k,xc=new k,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qn,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xc),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Xn||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wr=new k,Tr=new vi,fi=new k,Os=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wr,Tr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wr,Tr,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new k,vc=new De,_c=new De,Gt=class extends Os{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,vc,_c),t.subVectors(_c,vc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var tn=class extends Os{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$o=class extends Wo{constructor(){super(new tn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Gn=-90,Hn=1,oa=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Gn,Hn,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Gn,Hn,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Gn,Hn,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Gn,Hn,e,t);o.layers=this.layers,this.add(o);let l=new Gt(Gn,Hn,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Gn,Hn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},la=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gl="\\[\\]\\.:\\/",Mu=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",Su="[^"+gl.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",xl),wu=/(WCOD+)?/.source.replace("WCOD",Su),Tu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Au=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Cu=new RegExp("^"+Eu+wu+Tu+Au+"$"),Ru=["material","materials","bones","map"],Xo=class{constructor(e,t,i){let s=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mu,"")}static parseTrackName(e){let t=Cu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ru.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Xo;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Eg=new Float32Array(1);var yc=new ht,ks=class{constructor(e,t,i=0,s=1/0){this.ray=new Ts(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yc),this}intersectObject(e,t=!0,i=[]){return qo(e,this,i,t),i.sort(bc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)qo(e[s],this,i,t);return i.sort(bc),i}};function bc(n,e){return n.distance-e.distance}function qo(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)qo(r[a],e,t,!0)}}var Sl=class Sl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Sl.prototype.isMatrix2=!0;var Yo=Sl;function vl(n,e,t,i){let s=Iu(i);switch(t){case ul:return n*e;case fl:return n*e/s.components*s.byteLength;case xa:return n*e/s.components*s.byteLength;case an:return n*e*2/s.components*s.byteLength;case va:return n*e*2/s.components*s.byteLength;case dl:return n*e*3/s.components*s.byteLength;case ii:return n*e*4/s.components*s.byteLength;case _a:return n*e*4/s.components*s.byteLength;case Ws:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:case Sa:return Math.max(n,16)*Math.max(e,8)/4;case ya:case Ma:return Math.max(n,8)*Math.max(e,8)/2;case Ea:case wa:case Aa:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Ys:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wa:case $a:case Xa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qa:case Ya:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Js:case Ja:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iu(n){switch(n){case Wt:case ol:return{byteLength:1,components:1};case ns:case ll:case yi:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case li:case pa:case ci:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Rh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Lu(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){let v=d[h],M=d[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){let M=d[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
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
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`#ifdef USE_BATCHING
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
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,id=`#define PI 3.141592653589793
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
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sd=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Pd=`uniform sampler2D dfgLUT;
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
}`,Ld=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hd=`#if defined( USE_POINTS_UV )
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
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
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
#endif`,sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,Kf=`#define LAMBERT
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
}`,jf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
}`,ep=`#define NORMAL
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
}`,tp=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,np=`#define PHONG
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
}`,sp=`#define STANDARD
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
}`,rp=`#define STANDARD
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
}`,ap=`#define TOON
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
}`,op=`#define TOON
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
}`,lp=`uniform float size;
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,up=`uniform vec3 color;
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
}`,dp=`uniform float rotation;
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
}`,fp=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Du,alphahash_pars_fragment:Nu,alphamap_fragment:Uu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:ku,aomap_pars_fragment:zu,batching_pars_vertex:Vu,batching_vertex:Gu,begin_vertex:Hu,beginnormal_vertex:Wu,bsdfs:$u,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Ku,color_fragment:ju,color_pars_fragment:Qu,color_pars_vertex:ed,color_vertex:td,common:id,cube_uv_reflection_fragment:nd,defaultnormal_vertex:sd,displacementmap_pars_vertex:rd,displacementmap_vertex:ad,emissivemap_fragment:od,emissivemap_pars_fragment:ld,colorspace_fragment:cd,colorspace_pars_fragment:hd,envmap_fragment:ud,envmap_common_pars_fragment:dd,envmap_pars_fragment:fd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:wd,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:xd,fog_fragment:vd,fog_pars_fragment:_d,gradientmap_pars_fragment:yd,lightmap_pars_fragment:bd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:Sd,lights_pars_begin:Ed,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:Cd,lights_phong_pars_fragment:Rd,lights_physical_fragment:Id,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Dd,lights_fragment_end:Nd,lightprobes_pars_fragment:Ud,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:kd,map_fragment:zd,map_pars_fragment:Vd,map_particle_fragment:Gd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:$d,morphinstance_vertex:Xd,morphcolor_vertex:qd,morphnormal_vertex:Yd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Zd,normal_fragment_begin:Kd,normal_fragment_maps:jd,normal_pars_fragment:Qd,normal_pars_vertex:ef,normal_vertex:tf,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:sf,clearcoat_normal_fragment_maps:rf,clearcoat_pars_fragment:af,iridescence_pars_fragment:of,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:hf,project_vertex:uf,dithering_fragment:df,dithering_pars_fragment:ff,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:xf,shadowmap_vertex:vf,shadowmask_pars_fragment:_f,skinbase_vertex:yf,skinning_pars_vertex:bf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:Ef,specularmap_pars_fragment:wf,tonemapping_fragment:Tf,tonemapping_pars_fragment:Af,transmission_fragment:Cf,transmission_pars_fragment:Rf,uv_pars_fragment:If,uv_pars_vertex:Pf,uv_vertex:Lf,worldpos_vertex:Df,background_vert:Nf,background_frag:Uf,backgroundCube_vert:Ff,backgroundCube_frag:Of,cube_vert:Bf,cube_frag:kf,depth_vert:zf,depth_frag:Vf,distance_vert:Gf,distance_frag:Hf,equirect_vert:Wf,equirect_frag:$f,linedashed_vert:Xf,linedashed_frag:qf,meshbasic_vert:Yf,meshbasic_frag:Jf,meshlambert_vert:Zf,meshlambert_frag:Kf,meshmatcap_vert:jf,meshmatcap_frag:Qf,meshnormal_vert:ep,meshnormal_frag:tp,meshphong_vert:ip,meshphong_frag:np,meshphysical_vert:sp,meshphysical_frag:rp,meshtoon_vert:ap,meshtoon_frag:op,points_vert:lp,points_frag:cp,shadow_vert:hp,shadow_frag:up,sprite_vert:dp,sprite_frag:fp},fe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Mi={basic:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Bt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Bt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Bt([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Bt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Bt([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Bt([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Bt([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Bt([fe.lights,fe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Mi.physical={uniforms:Bt([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Qa={r:0,b:0,g:0},pp=new ht,Ih=new Ne;Ih.set(-1,0,0,0,1,0,0,0,1);function mp(n,e,t,i,s,r){let a=new ke(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){let y=S.backgroundBlurriness>0;C=e.get(C,y)}return C}function v(S){let C=!1,y=p(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(S,C){let y=p(C);y&&(y.isCubeTexture||y.mapping===Gs)?(c===void 0&&(c=new xt(new Ki(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:bn(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pp.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ih),c.material.toneMapped=We.getTransfer(y.colorSpace)!==Ke,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xt(new Is(2,2),new Zt({name:"BackgroundMaterial",uniforms:bn(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=We.getTransfer(y.colorSpace)!==Ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,C){S.getRGB(Qa,ml(n)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,C,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:v,addToRenderList:M,dispose:f}}function gp(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(b,P,G,X,O){let H=!1,z=d(b,X,G,P);r!==z&&(r=z,c(r.object)),H=p(b,X,G,O),H&&v(b,X,G,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(b,P,G,X),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,P,G,X){let O=X.wireframe===!0,H=i[P.id];H===void 0&&(H={},i[P.id]=H);let z=b.isInstancedMesh===!0?b.id:0,J=H[z];J===void 0&&(J={},H[z]=J);let ie=J[G.id];ie===void 0&&(ie={},J[G.id]=ie);let ne=ie[O];return ne===void 0&&(ne=h(l()),ie[O]=ne),ne}function h(b){let P=[],G=[],X=[];for(let O=0;O<t;O++)P[O]=0,G[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:X,object:b,attributes:{},index:null}}function p(b,P,G,X){let O=r.attributes,H=P.attributes,z=0,J=G.getAttributes();for(let ie in J)if(J[ie].location>=0){let me=O[ie],be=H[ie];if(be===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),me===void 0||me.attribute!==be||be&&me.data!==be.data)return!0;z++}return r.attributesNum!==z||r.index!==X}function v(b,P,G,X){let O={},H=P.attributes,z=0,J=G.getAttributes();for(let ie in J)if(J[ie].location>=0){let me=H[ie];me===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));let be={};be.attribute=me,me&&me.data&&(be.data=me.data),O[ie]=be,z++}r.attributes=O,r.attributesNum=z,r.index=X}function M(){let b=r.newAttributes;for(let P=0,G=b.length;P<G;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){let G=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;G[b]=1,X[b]===0&&(n.enableVertexAttribArray(b),X[b]=1),O[b]!==P&&(n.vertexAttribDivisor(b,P),O[b]=P)}function S(){let b=r.newAttributes,P=r.enabledAttributes;for(let G=0,X=P.length;G<X;G++)P[G]!==b[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function C(b,P,G,X,O,H,z){z===!0?n.vertexAttribIPointer(b,P,G,O,H):n.vertexAttribPointer(b,P,G,X,O,H)}function y(b,P,G,X){M();let O=X.attributes,H=G.getAttributes(),z=P.defaultAttributeValues;for(let J in H){let ie=H[J];if(ie.location>=0){let ne=O[J];if(ne===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){let me=ne.normalized,be=ne.itemSize,qe=e.get(ne);if(qe===void 0)continue;let ut=qe.buffer,Ye=qe.type,R=qe.bytesPerElement,D=Ye===n.INT||Ye===n.UNSIGNED_INT||ne.gpuType===pa;if(ne.isInterleavedBufferAttribute){let F=ne.data,Y=F.stride,se=ne.offset;if(F.isInstancedInterleavedBuffer){for(let ae=0;ae<ie.locationSize;ae++)f(ie.location+ae,F.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ae=0;ae<ie.locationSize;ae++)m(ie.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let ae=0;ae<ie.locationSize;ae++)C(ie.location+ae,be/ie.locationSize,Ye,me,Y*R,(se+be/ie.locationSize*ae)*R,D)}else{if(ne.isInstancedBufferAttribute){for(let F=0;F<ie.locationSize;F++)f(ie.location+F,ne.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let F=0;F<ie.locationSize;F++)m(ie.location+F);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let F=0;F<ie.locationSize;F++)C(ie.location+F,be/ie.locationSize,Ye,me,be*R,be/ie.locationSize*F*R,D)}}else if(z!==void 0){let me=z[J];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(ie.location,me);break;case 3:n.vertexAttrib3fv(ie.location,me);break;case 4:n.vertexAttrib4fv(ie.location,me);break;default:n.vertexAttrib1fv(ie.location,me)}}}}S()}function T(){w();for(let b in i){let P=i[b];for(let G in P){let X=P[G];for(let O in X){let H=X[O];for(let z in H)u(H[z].object),delete H[z];delete X[O]}}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let P=i[b.id];for(let G in P){let X=P[G];for(let O in X){let H=X[O];for(let z in H)u(H[z].object),delete H[z];delete X[O]}}delete i[b.id]}function I(b){for(let P in i){let G=i[P];for(let X in G){let O=G[X];if(O[b.id]===void 0)continue;let H=O[b.id];for(let z in H)u(H[z].object),delete H[z];delete O[b.id]}}}function x(b){for(let P in i){let G=i[P],X=b.isInstancedMesh===!0?b.id:0,O=G[X];if(O!==void 0){for(let H in O){let z=O[H];for(let J in z)u(z[J].object),delete z[J];delete O[H]}delete G[X],Object.keys(G).length===0&&delete i[P]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function xp(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==ii&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let x=I===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Wt&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ci&&!x)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:y,maxSamples:T,samples:E}}function _p(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ei,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let v=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,C=S*4,y=f.clippingState||null;l.value=y,y=u(v,h,C,p);for(let T=0;T!==C;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,v!==!0||m===null){let f=p+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,y=p;C!==M;++C,y+=4)a.copy(d[C]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var on=4,oh=[.125,.215,.35,.446,.526,.582],Mn=20,yp=256,Zs=new tn,lh=new ke,El=null,wl=0,Tl=0,Al=!1,bp=new k,to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=bp}=r;El=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(El,wl,Tl),this._renderer.xr.enabled=Al,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nn||e.mapping===yn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:yi,format:ii,colorSpace:gs,depthBuffer:!1},s=ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=Ep(r,e,t),this._ggxMaterial=Sp(r,e,t)}return s}_compileMaterial(e){let t=new xt(new Ot,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,s,r){let l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(lh),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Ki,new vn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(lh),f=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));let T=this._cubeSize;rs(s,y*T,C>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===nn||e.mapping===yn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:v}=this,M=this._sizeLods[i],m=3*M*(i>v-on?i-v+on:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,rs(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,Zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,rs(e,m,f,3*M,2*M),s.setRenderTarget(e),s.render(o,Zs)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ie("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mn-1),M=r/v,m=isFinite(r)?1+Math.floor(u*M):Mn;m>Mn&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mn}`);let f=[],S=0;for(let I=0;I<Mn;++I){let x=I/M,w=Math.exp(-x*x/2);f.push(w),I===0?S+=w:I<m&&(S+=2*w)}for(let I=0;I<f.length;I++)f[I]=f[I]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:C}=this;h.dTheta.value=v,h.mipInt.value=C-i;let y=this._sizeLods[s],T=3*y*(s>C-on?s-C+on:0),E=4*(this._cubeSize-y);rs(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(d,Zs)}};function Mp(n){let e=[],t=[],i=[],s=n,r=n-on+1+oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-on?l=oh[a-n+on-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,M=3,m=2,f=1,S=new Float32Array(M*v*p),C=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let E=0;E<p;E++){let I=E%3*2/3-1,x=E>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];S.set(w,M*v*E),C.set(h,m*v*E);let L=[E,E,E,E,E,E];y.set(L,f*v*E)}let T=new Ot;T.setAttribute("position",new Ht(S,M)),T.setAttribute("uv",new Ht(C,m)),T.setAttribute("faceIndex",new Ht(y,f)),i.push(new xt(T,null)),s>on&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ch(n,e,t){let i=new Jt(n,e,t);return i.texture.mapping=Gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sp(n,e,t){return new Zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ep(n,e,t){let i=new Float32Array(Mn),s=new k(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:so(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function hh(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function uh(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}var io=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new As(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ki(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:bn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:_i});r.uniforms.tEquirect.value=t;let a=new xt(s,r),o=t.minFilter;return t.minFilter===sn&&(t.minFilter=Lt),new oa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function wp(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ua||p===da)if(e.has(h)){let v=e.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let M=new io(v.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,v=p===ua||p===da,M=p===nn||p===yn;if(v||M){let m=t.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new to(n)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return v&&S&&S.height>0||M&&S&&l(S)?(i===null&&(i=new to(n)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===ua?h.mapping=nn:p===da&&(h.mapping=yn),h}function l(h){let p=0,v=6;for(let M=0;M<v;M++)h[M]!==void 0&&p++;return p===v}function c(h){let p=h.target;p.removeEventListener("dispose",c);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Tp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&mn("WebGLRenderer: "+i+" extension not supported."),s}}}function Ap(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,v=d.attributes.position,M=0;if(v===void 0)return;if(p!==null){let S=p.array;M=p.version;for(let C=0,y=S.length;C<y;C+=3){let T=S[C+0],E=S[C+1],I=S[C+2];h.push(T,E,E,I,I,T)}}else{let S=v.array;M=v.version;for(let C=0,y=S.length/3-1;C<y;C+=3){let T=C+0,E=C+1,I=C+2;h.push(T,E,E,I,I,T)}}let m=new(v.count>=65535?Ss:Ms)(h,1);m.version=M;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Cp(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*a,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];t.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Rp(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ip(n,e,t){let i=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let w=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],C=0;p===!0&&(C=1),v===!0&&(C=2),M===!0&&(C=3);let y=o.attributes.position.count*C,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*d),I=new ys(E,y,T,d);I.type=ci,I.needsUpdate=!0;let x=C*4;for(let L=0;L<d;L++){let b=m[L],P=f[L],G=S[L],X=y*T*4*L;for(let O=0;O<b.count;O++){let H=O*x;p===!0&&(s.fromBufferAttribute(b,O),E[X+H+0]=s.x,E[X+H+1]=s.y,E[X+H+2]=s.z,E[X+H+3]=0),v===!0&&(s.fromBufferAttribute(P,O),E[X+H+4]=s.x,E[X+H+5]=s.y,E[X+H+6]=s.z,E[X+H+7]=0),M===!0&&(s.fromBufferAttribute(G,O),E[X+H+8]=s.x,E[X+H+9]=s.y,E[X+H+10]=s.z,E[X+H+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:I,size:new De(y,T)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Pp(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Lp={[el]:"LINEAR_TONE_MAPPING",[tl]:"REINHARD_TONE_MAPPING",[il]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[sl]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function Dp(n,e,t,i,s,r){let a=new Jt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Ni(e,t):void 0}),o=new Jt(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new Ot;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));let c=new Yr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new xt(l,c),d=new tn(-1,1,1,-1,0,1),h=null,p=null,v=!1,M,m=null,f=[],S=!1;this.setSize=function(C,y){a.setSize(C,y),o.setSize(C,y);for(let T=0;T<f.length;T++){let E=f[T];E.setSize&&E.setSize(C,y)}},this.setEffects=function(C){f=C,S=f.length>0&&f[0].isRenderPass===!0;let y=a.width,T=a.height;for(let E=0;E<f.length;E++){let I=f[E];I.setSize&&I.setSize(y,T)}},this.begin=function(C,y){if(v||C.toneMapping===oi&&f.length===0)return!1;if(m=y,y!==null){let T=y.width,E=y.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return S===!1&&C.setRenderTarget(a),M=C.toneMapping,C.toneMapping=oi,!0},this.hasRenderPass=function(){return S},this.end=function(C,y){C.toneMapping=M,v=!0;let T=a,E=o;for(let I=0;I<f.length;I++){let x=f[I];if(x.enabled!==!1&&(x.render(C,E,T,y),x.needsSwap!==!1)){let w=T;T=E,E=w}}if(h!==C.outputColorSpace||p!==C.toneMapping){h=C.outputColorSpace,p=C.toneMapping,c.defines={},We.getTransfer(h)===Ke&&(c.defines.SRGB_TRANSFER="");let I=Lp[p];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,C.setRenderTarget(m),C.render(u,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Ph=new zt,Il=new Ni(1,1),Lh=new ys,Dh=new Hr,Nh=new As,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function os(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ro(n,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Np(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Up(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Fp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Op(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Bp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),wt(t,i)}}function kp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;mh.set(i),n.uniformMatrix3fv(this.addr,!1,mh),wt(t,i)}}function zp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;ph.set(i),n.uniformMatrix4fv(this.addr,!1,ph),wt(t,i)}}function Vp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Hp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Wp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function $p(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function qp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Yp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Jp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Il.compareFunction=t.isReversedDepthBuffer()?ja:Ka,r=Il):r=Ph,t.setTexture2D(e||r,s)}function Zp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Dh,s)}function Kp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nh,s)}function jp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lh,s)}function Qp(n){switch(n){case 5126:return Np;case 35664:return Up;case 35665:return Fp;case 35666:return Op;case 35674:return Bp;case 35675:return kp;case 35676:return zp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Hp;case 35669:case 35673:return Wp;case 5125:return $p;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return jp}}function em(n,e){n.uniform1fv(this.addr,e)}function tm(n,e){let t=os(e,this.size,2);n.uniform2fv(this.addr,t)}function im(n,e){let t=os(e,this.size,3);n.uniform3fv(this.addr,t)}function nm(n,e){let t=os(e,this.size,4);n.uniform4fv(this.addr,t)}function sm(n,e){let t=os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rm(n,e){let t=os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function am(n,e){let t=os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function om(n,e){n.uniform1iv(this.addr,e)}function lm(n,e){n.uniform2iv(this.addr,e)}function cm(n,e){n.uniform3iv(this.addr,e)}function hm(n,e){n.uniform4iv(this.addr,e)}function um(n,e){n.uniform1uiv(this.addr,e)}function dm(n,e){n.uniform2uiv(this.addr,e)}function fm(n,e){n.uniform3uiv(this.addr,e)}function pm(n,e){n.uniform4uiv(this.addr,e)}function mm(n,e,t){let i=this.cache,s=e.length,r=ro(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Il:a=Ph;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function gm(n,e,t){let i=this.cache,s=e.length,r=ro(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Dh,r[a])}function xm(n,e,t){let i=this.cache,s=e.length,r=ro(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nh,r[a])}function vm(n,e,t){let i=this.cache,s=e.length,r=ro(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lh,r[a])}function _m(n){switch(n){case 5126:return em;case 35664:return tm;case 35665:return im;case 35666:return nm;case 35674:return sm;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return dm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return vm}}var Pl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qp(t.type)}},Ll=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}},Dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function xh(n,e){n.seq.push(e),n.map[e.id]=e}function ym(n,e,t){let i=n.name,s=i.length;for(Cl.lastIndex=0;;){let r=Cl.exec(i),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xh(t,c===void 0?new Pl(o,n,e):new Ll(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Dl(o),xh(t,d)),t=d}}}var as=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ym(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function vh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var bm=37297,Mm=0;function Sm(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var _h=new Ne;function Em(n){We._getMatrix(_h,We.workingColorSpace,n);let e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case xs:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sm(n.getShaderSource(e),o)}else return r}function wm(n,e){let t=Em(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Tm={[el]:"Linear",[tl]:"Reinhard",[il]:"Cineon",[Vs]:"ACESFilmic",[sl]:"AgX",[rl]:"Neutral",[nl]:"Custom"};function Am(n,e){let t=Tm[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var eo=new k;function Cm(){We.getLuminanceCoefficients(eo);let n=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Im(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pm(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function js(n){return n!==""}function bh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace(Lm,Nm)}var Dm=new Map;function Nm(n,e){let t=ze[e];if(t===void 0){let i=Dm.get(e);if(i!==void 0)t=ze[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nl(t)}var Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(n){return n.replace(Um,Fm)}function Fm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Om={[zs]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function Bm(n){return Om[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var km={[nn]:"ENVMAP_TYPE_CUBE",[yn]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE_UV"};function zm(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":km[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Vm={[yn]:"ENVMAP_MODE_REFRACTION"};function Gm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Vm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hm={[Qo]:"ENVMAP_BLENDING_MULTIPLY",[Gc]:"ENVMAP_BLENDING_MIX",[Hc]:"ENVMAP_BLENDING_ADD"};function Wm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Hm[n.combine]||"ENVMAP_BLENDING_NONE"}function $m(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Xm(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Bm(t),c=zm(t),u=Gm(t),d=Wm(t),h=$m(t),p=Rm(t),v=Im(r),M=s.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(js).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(js).join(`
`),f.length>0&&(f+=`
`)):(m=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),f=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?ze.tonemapping_pars_fragment:"",t.toneMapping!==oi?Am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,wm("linearToOutputTexel",t.outputColorSpace),Cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=Nl(a),a=bh(a,t),a=Mh(a,t),o=Nl(o),o=bh(o,t),o=Mh(o,t),a=Sh(a),o=Sh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=S+m+a,y=S+f+o,T=vh(s,s.VERTEX_SHADER,C),E=vh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,T),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(b){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(E)||"",O=P.trim(),H=G.trim(),z=X.trim(),J=!0,ie=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,E);else{let ne=yh(s,T,"vertex"),me=yh(s,E,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+O+`
`+ne+`
`+me)}else O!==""?Le("WebGLProgram: Program Info Log:",O):(H===""||z==="")&&(ie=!1);ie&&(b.diagnostics={runnable:J,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:f}})}s.deleteShader(T),s.deleteShader(E),x=new as(s,M),w=Pm(s,M)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,bm)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}var qm=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fl(e),t.set(e,i)),i}},Fl=class{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}};function Ym(n){return n===an||n===Ys||n===Js}function Jm(n,e,t,i,s,r){let a=new Jn,o=new Ul,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,L,b,P,G){let X=b.fog,O=P.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||H,z),ie=J&&J.mapping===Gs?J.image.height:null,ne=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let me=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,be=me!==void 0?me.length:0,qe=0;O.morphAttributes.position!==void 0&&(qe=1),O.morphAttributes.normal!==void 0&&(qe=2),O.morphAttributes.color!==void 0&&(qe=3);let ut,Ye,R,D;if(ne){let Se=Mi[ne];ut=Se.vertexShader,Ye=Se.fragmentShader}else{ut=x.vertexShader,Ye=x.fragmentShader;let Se=o.getVertexShaderStage(x),pt=o.getFragmentShaderStage(x);o.update(x,Se,pt),R=Se.id,D=pt.id}let F=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),se=P.isInstancedMesh===!0,ae=P.isBatchedMesh===!0,Ge=!!x.map,Ue=!!x.matcap,Fe=!!J,He=!!x.aoMap,$e=!!x.lightMap,ot=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,_t=!!x.displacementMap,yt=!!x.emissiveMap,st=!!x.metalnessMap,ft=!!x.roughnessMap,U=x.anisotropy>0,Tt=x.clearcoat>0,je=x.dispersion>0,A=x.iridescence>0,g=x.sheen>0,V=x.transmission>0,q=U&&!!x.anisotropyMap,K=Tt&&!!x.clearcoatMap,re=Tt&&!!x.clearcoatNormalMap,le=Tt&&!!x.clearcoatRoughnessMap,j=A&&!!x.iridescenceMap,ee=A&&!!x.iridescenceThicknessMap,ce=g&&!!x.sheenColorMap,Te=g&&!!x.sheenRoughnessMap,de=!!x.specularMap,he=!!x.specularColorMap,Re=!!x.specularIntensityMap,Pe=V&&!!x.transmissionMap,Oe=V&&!!x.thicknessMap,N=!!x.gradientMap,oe=!!x.alphaMap,Q=x.alphaTest>0,ue=!!x.alphaHash,xe=!!x.extensions,te=oi;x.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(te=n.toneMapping);let we={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:ut,fragmentShader:Ye,defines:x.defines,customVertexShaderID:R,customFragmentShaderID:D,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ae,batchingColor:ae&&P._colorsTexture!==null,instancing:se,instancingColor:se&&P.instanceColor!==null,instancingMorph:se&&P.morphTexture!==null,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:Ue,envMap:Fe,envMapMode:Fe&&J.mapping,envMapCubeUVHeight:ie,aoMap:He,lightMap:$e,bumpMap:ot,normalMap:vt,displacementMap:_t,emissiveMap:yt,normalMapObjectSpace:vt&&x.normalMapType===Xc,normalMapTangentSpace:vt&&x.normalMapType===Za,packedNormalMap:vt&&x.normalMapType===Za&&Ym(x.normalMap.format),metalnessMap:st,roughnessMap:ft,anisotropy:U,anisotropyMap:q,clearcoat:Tt,clearcoatMap:K,clearcoatNormalMap:re,clearcoatRoughnessMap:le,dispersion:je,iridescence:A,iridescenceMap:j,iridescenceThicknessMap:ee,sheen:g,sheenColorMap:ce,sheenRoughnessMap:Te,specularMap:de,specularColorMap:he,specularIntensityMap:Re,transmission:V,transmissionMap:Pe,thicknessMap:Oe,gradientMap:N,opaque:x.transparent===!1&&x.blending===gn&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:Q,alphaHash:ue,combine:x.combine,mapUv:Ge&&v(x.map.channel),aoMapUv:He&&v(x.aoMap.channel),lightMapUv:$e&&v(x.lightMap.channel),bumpMapUv:ot&&v(x.bumpMap.channel),normalMapUv:vt&&v(x.normalMap.channel),displacementMapUv:_t&&v(x.displacementMap.channel),emissiveMapUv:yt&&v(x.emissiveMap.channel),metalnessMapUv:st&&v(x.metalnessMap.channel),roughnessMapUv:ft&&v(x.roughnessMap.channel),anisotropyMapUv:q&&v(x.anisotropyMap.channel),clearcoatMapUv:K&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(x.sheenRoughnessMap.channel),specularMapUv:de&&v(x.specularMap.channel),specularColorMapUv:he&&v(x.specularColorMap.channel),specularIntensityMapUv:Re&&v(x.specularIntensityMap.channel),transmissionMapUv:Pe&&v(x.transmissionMap.channel),thicknessMapUv:Oe&&v(x.thicknessMap.channel),alphaMapUv:oe&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(vt||U),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Ge||oe),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Y,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:qe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===Ke,decodeVideoTextureEmissive:yt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===Ke,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ti,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(f(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let w=p[x.type],L;if(w){let b=Mi[w];L=rh.clone(b.uniforms)}else L=x.uniforms;return L}function y(x,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new Xm(n,w,x,s),c.push(L),u.set(w,L)),L}function T(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:I}}function Zm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Km(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Th(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,M,m,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=v,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=f),e++,S}function l(h,p,v,M,m,f){let S=o(h,p,v,M,m,f);v.transmission>0?i.push(S):v.transparent===!0?s.push(S):t.push(S)}function c(h,p,v,M,m,f){let S=o(h,p,v,M,m,f);v.transmission>0?i.unshift(S):v.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,p,v){t.length>1&&t.sort(h||Km),i.length>1&&i.sort(p||wh),s.length>1&&s.sort(p||wh),v&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let h=e,p=n.length;h<p;h++){let v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function jm(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Th,n.set(i,[a])):s>=r.length?(a=new Th,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ke};break;case"SpotLight":t={position:new k,direction:new k,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function eg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tg=0;function ig(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ng(n){let e=new Qm,t=eg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new ht,a=new ht;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,M=0,m=0,f=0,S=0,C=0,y=0,T=0,E=0,I=0;c.sort(ig);for(let w=0,L=c.length;w<L;w++){let b=c[w],P=b.color,G=b.intensity,X=b.distance,O=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===an?O=b.shadow.map.texture:O=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=P.r*G,d+=P.g*G,h+=P.b*G;else if(b.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(b.sh.coefficients[H],G);I++}else if(b.isDirectionalLight){let H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let z=b.shadow,J=t.get(b);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=b.shadow.matrix,S++}i.directional[p]=H,p++}else if(b.isSpotLight){let H=e.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(P).multiplyScalar(G),H.distance=X,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,i.spot[M]=H;let z=b.shadow;if(b.map&&(i.spotLightMap[T]=b.map,T++,z.updateMatrices(b),b.castShadow&&E++),i.spotLightMatrix[M]=z.matrix,b.castShadow){let J=t.get(b);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=O,y++}M++}else if(b.isRectAreaLight){let H=e.get(b);H.color.copy(P).multiplyScalar(G),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=H,m++}else if(b.isPointLight){let H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){let z=b.shadow,J=t.get(b);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=b.shadow.matrix,C++}i.point[v]=H,v++}else if(b.isHemisphereLight){let H=e.get(b);H.skyColor.copy(b.color).multiplyScalar(G),H.groundColor.copy(b.groundColor).multiplyScalar(G),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==M||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==S||x.numPointShadows!==C||x.numSpotShadows!==y||x.numSpotMaps!==T||x.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=y+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,x.directionalLength=p,x.pointLength=v,x.spotLength=M,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=S,x.numPointShadows=C,x.numSpotShadows=y,x.numSpotMaps=T,x.numLightProbes=I,i.version=tg++)}function l(c,u){let d=0,h=0,p=0,v=0,M=0,m=u.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let C=c[f];if(C.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(C.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(C.isRectAreaLight){let y=i.rectArea[v];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(C.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(C.width*.5,0,0),y.halfHeight.set(0,C.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(m),h++}else if(C.isHemisphereLight){let y=i.hemi[M];y.direction.setFromMatrixPosition(C.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Ah(n){let e=new ng(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function sg(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ah(n),e.set(s,[o])):r>=a.length?(o=new Ah(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`,og=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],lg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ch=new ht,Ks=new k,Rl=new k;function cg(n,e,t){let i=new Qn,s=new De,r=new De,a=new dt,o=new Jr,l=new Zr,c={},u=t.maxTextureSize,d={[Pi]:Vt,[Vt]:Pi,[ti]:ti},h=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new Ot;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new xt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let f=this.type;this.render=function(E,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ha&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zs);let w=n.getRenderTarget(),L=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),P=n.state;P.setBlending(_i),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let G=f!==this.type;G&&I.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=E.length;X<O;X++){let H=E[X],z=H.shadow;if(z===void 0){Le("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));let ie=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ie,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===is){if(H.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Jt(s.x,s.y,{format:an,type:yi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Ni(s.x,s.y,ci),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=gi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct}else H.isPointLight?(z.map=new io(s.x),z.map.depthTexture=new Xr(s.x,li)):(z.map=new Jt(s.x,s.y),z.map.depthTexture=new Ni(s.x,s.y,li)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=gi,this.type===zs?(z.map.depthTexture.compareFunction=ie?ja:Ka,z.map.depthTexture.minFilter=Lt,z.map.depthTexture.magFilter=Lt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct);z.camera.updateProjectionMatrix()}let ne=z.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ne;me++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,me),n.clear();else{me===0&&(n.setRenderTarget(z.map),n.clear());let be=z.getViewport(me);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),P.viewport(a)}if(H.isPointLight){let be=z.camera,qe=z.matrix,ut=H.distance||be.far;ut!==be.far&&(be.far=ut,be.updateProjectionMatrix()),Ks.setFromMatrixPosition(H.matrixWorld),be.position.copy(Ks),Rl.copy(be.position),Rl.add(og[me]),be.up.copy(lg[me]),be.lookAt(Rl),be.updateMatrixWorld(),qe.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Ch.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ch,be.coordinateSystem,be.reversedDepth)}else z.updateMatrices(H);i=z.getFrustum(),y(I,x,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===is&&S(z,x),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,L,b)};function S(E,I){let x=e.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jt(s.x,s.y,{format:an,type:yi})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(I,null,x,h,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(I,null,x,p,M,null)}function C(E,I,x,w){let L=null,b=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)L=b;else if(L=x.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let P=L.uuid,G=I.uuid,X=c[P];X===void 0&&(X={},c[P]=X);let O=X[G];O===void 0&&(O=L.clone(),X[G]=O,I.addEventListener("dispose",T)),L=O}if(L.visible=I.visible,L.wireframe=I.wireframe,w===is?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:d[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let P=n.properties.get(L);P.light=x}return L}function y(E,I,x,w,L){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===is)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let G=e.update(E),X=E.material;if(Array.isArray(X)){let O=G.groups;for(let H=0,z=O.length;H<z;H++){let J=O[H],ie=X[J.materialIndex];if(ie&&ie.visible){let ne=C(E,ie,w,L);E.onBeforeShadow(n,E,I,x,G,ne,J),n.renderBufferDirect(x,null,G,ne,E,J),E.onAfterShadow(n,E,I,x,G,ne,J)}}}else if(X.visible){let O=C(E,X,w,L);E.onBeforeShadow(n,E,I,x,G,O,null),n.renderBufferDirect(x,null,G,O,E,null),E.onAfterShadow(n,E,I,x,G,O,null)}}let P=E.children;for(let G=0,X=P.length;G<X;G++)y(P[G],I,x,w,L)}function T(E){E.target.removeEventListener("dispose",T);for(let x in c){let w=c[x],L=E.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function hg(n,e){function t(){let N=!1,oe=new dt,Q=null,ue=new dt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!N&&(n.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){N=xe},setClear:function(xe,te,we,Se,pt){pt===!0&&(xe*=Se,te*=Se,we*=Se),oe.set(xe,te,we,Se),ue.equals(oe)===!1&&(n.clearColor(xe,te,we,Se),ue.copy(oe))},reset:function(){N=!1,Q=null,ue.set(-1,0,0,0)}}}function i(){let N=!1,oe=!1,Q=null,ue=null,xe=null;return{setReversed:function(te){if(oe!==te){let we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=te;let Se=xe;xe=null,this.setClear(Se)}},getReversed:function(){return oe},setTest:function(te){te?F(n.DEPTH_TEST):Y(n.DEPTH_TEST)},setMask:function(te){Q!==te&&!N&&(n.depthMask(te),Q=te)},setFunc:function(te){if(oe&&(te=ih[te]),ue!==te){switch(te){case Ir:n.depthFunc(n.NEVER);break;case Pr:n.depthFunc(n.ALWAYS);break;case Lr:n.depthFunc(n.LESS);break;case xn:n.depthFunc(n.LEQUAL);break;case Dr:n.depthFunc(n.EQUAL);break;case Nr:n.depthFunc(n.GEQUAL);break;case Ur:n.depthFunc(n.GREATER);break;case Fr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=te}},setLocked:function(te){N=te},setClear:function(te){xe!==te&&(xe=te,oe&&(te=1-te),n.clearDepth(te))},reset:function(){N=!1,Q=null,ue=null,xe=null,oe=!1}}}function s(){let N=!1,oe=null,Q=null,ue=null,xe=null,te=null,we=null,Se=null,pt=null;return{setTest:function(rt){N||(rt?F(n.STENCIL_TEST):Y(n.STENCIL_TEST))},setMask:function(rt){oe!==rt&&!N&&(n.stencilMask(rt),oe=rt)},setFunc:function(rt,hi,ui){(Q!==rt||ue!==hi||xe!==ui)&&(n.stencilFunc(rt,hi,ui),Q=rt,ue=hi,xe=ui)},setOp:function(rt,hi,ui){(te!==rt||we!==hi||Se!==ui)&&(n.stencilOp(rt,hi,ui),te=rt,we=hi,Se=ui)},setLocked:function(rt){N=rt},setClear:function(rt){pt!==rt&&(n.clearStencil(rt),pt=rt)},reset:function(){N=!1,oe=null,Q=null,ue=null,xe=null,te=null,we=null,Se=null,pt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,v=[],M=null,m=!1,f=null,S=null,C=null,y=null,T=null,E=null,I=null,x=new ke(0,0,0),w=0,L=!1,b=null,P=null,G=null,X=null,O=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,J=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ie)[1]),z=J>=1):ie.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),z=J>=2);let ne=null,me={},be=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),ut=new dt().fromArray(be),Ye=new dt().fromArray(qe);function R(N,oe,Q,ue){let xe=new Uint8Array(4),te=n.createTexture();n.bindTexture(N,te),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<Q;we++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(oe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return te}let D={};D[n.TEXTURE_2D]=R(n.TEXTURE_2D,n.TEXTURE_2D,1),D[n.TEXTURE_CUBE_MAP]=R(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[n.TEXTURE_2D_ARRAY]=R(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),D[n.TEXTURE_3D]=R(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(n.DEPTH_TEST),a.setFunc(xn),ot(!1),vt(Jo),F(n.CULL_FACE),He(_i);function F(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Y(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function se(N,oe){return h[N]!==oe?(n.bindFramebuffer(N,oe),h[N]=oe,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=oe),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function ae(N,oe){let Q=v,ue=!1;if(N){Q=p.get(oe),Q===void 0&&(Q=[],p.set(oe,Q));let xe=N.textures;if(Q.length!==xe.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let te=0,we=xe.length;te<we;te++)Q[te]=n.COLOR_ATTACHMENT0+te;Q.length=xe.length,ue=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Q)}function Ge(N){return M!==N?(n.useProgram(N),M=N,!0):!1}let Ue={[Ji]:n.FUNC_ADD,[wc]:n.FUNC_SUBTRACT,[Tc]:n.FUNC_REVERSE_SUBTRACT};Ue[Ac]=n.MIN,Ue[Cc]=n.MAX;let Fe={[Rc]:n.ZERO,[Ic]:n.ONE,[Pc]:n.SRC_COLOR,[Cr]:n.SRC_ALPHA,[Oc]:n.SRC_ALPHA_SATURATE,[Uc]:n.DST_COLOR,[Dc]:n.DST_ALPHA,[Lc]:n.ONE_MINUS_SRC_COLOR,[Rr]:n.ONE_MINUS_SRC_ALPHA,[Fc]:n.ONE_MINUS_DST_COLOR,[Nc]:n.ONE_MINUS_DST_ALPHA,[Bc]:n.CONSTANT_COLOR,[kc]:n.ONE_MINUS_CONSTANT_COLOR,[zc]:n.CONSTANT_ALPHA,[Vc]:n.ONE_MINUS_CONSTANT_ALPHA};function He(N,oe,Q,ue,xe,te,we,Se,pt,rt){if(N===_i){m===!0&&(Y(n.BLEND),m=!1);return}if(m===!1&&(F(n.BLEND),m=!0),N!==Ec){if(N!==f||rt!==L){if((S!==Ji||T!==Ji)&&(n.blendEquation(n.FUNC_ADD),S=Ji,T=Ji),rt)switch(N){case gn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zo:n.blendFunc(n.ONE,n.ONE);break;case Ko:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ie("WebGLState: Invalid blending: ",N);break}else switch(N){case gn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ko:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",N);break}C=null,y=null,E=null,I=null,x.set(0,0,0),w=0,f=N,L=rt}return}xe=xe||oe,te=te||Q,we=we||ue,(oe!==S||xe!==T)&&(n.blendEquationSeparate(Ue[oe],Ue[xe]),S=oe,T=xe),(Q!==C||ue!==y||te!==E||we!==I)&&(n.blendFuncSeparate(Fe[Q],Fe[ue],Fe[te],Fe[we]),C=Q,y=ue,E=te,I=we),(Se.equals(x)===!1||pt!==w)&&(n.blendColor(Se.r,Se.g,Se.b,pt),x.copy(Se),w=pt),f=N,L=!1}function $e(N,oe){N.side===ti?Y(n.CULL_FACE):F(n.CULL_FACE);let Q=N.side===Vt;oe&&(Q=!Q),ot(Q),N.blending===gn&&N.transparent===!1?He(_i):He(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ue=N.stencilWrite;o.setTest(ue),ue&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):Y(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function vt(N){N!==Mc?(F(n.CULL_FACE),N!==P&&(N===Jo?n.cullFace(n.BACK):N===Sc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Y(n.CULL_FACE),P=N}function _t(N){N!==G&&(z&&n.lineWidth(N),G=N)}function yt(N,oe,Q){N?(F(n.POLYGON_OFFSET_FILL),(X!==oe||O!==Q)&&(X=oe,O=Q,a.getReversed()&&(oe=-oe),n.polygonOffset(oe,Q))):Y(n.POLYGON_OFFSET_FILL)}function st(N){N?F(n.SCISSOR_TEST):Y(n.SCISSOR_TEST)}function ft(N){N===void 0&&(N=n.TEXTURE0+H-1),ne!==N&&(n.activeTexture(N),ne=N)}function U(N,oe,Q){Q===void 0&&(ne===null?Q=n.TEXTURE0+H-1:Q=ne);let ue=me[Q];ue===void 0&&(ue={type:void 0,texture:void 0},me[Q]=ue),(ue.type!==N||ue.texture!==oe)&&(ne!==Q&&(n.activeTexture(Q),ne=Q),n.bindTexture(N,oe||D[N]),ue.type=N,ue.texture=oe)}function Tt(){let N=me[ne];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(N){Ie("WebGLState:",N)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(N){Ie("WebGLState:",N)}}function g(){try{n.texSubImage2D(...arguments)}catch(N){Ie("WebGLState:",N)}}function V(){try{n.texSubImage3D(...arguments)}catch(N){Ie("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ie("WebGLState:",N)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ie("WebGLState:",N)}}function re(){try{n.texStorage2D(...arguments)}catch(N){Ie("WebGLState:",N)}}function le(){try{n.texStorage3D(...arguments)}catch(N){Ie("WebGLState:",N)}}function j(){try{n.texImage2D(...arguments)}catch(N){Ie("WebGLState:",N)}}function ee(){try{n.texImage3D(...arguments)}catch(N){Ie("WebGLState:",N)}}function ce(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Te(N,oe){d[N]!==oe&&(n.pixelStorei(N,oe),d[N]=oe)}function de(N){ut.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ut.copy(N))}function he(N){Ye.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ye.copy(N))}function Re(N,oe){let Q=c.get(oe);Q===void 0&&(Q=new WeakMap,c.set(oe,Q));let ue=Q.get(N);ue===void 0&&(ue=n.getUniformBlockIndex(oe,N.name),Q.set(N,ue))}function Pe(N,oe){let ue=c.get(oe).get(N);l.get(oe)!==ue&&(n.uniformBlockBinding(oe,ue,N.__bindingPointIndex),l.set(oe,ue))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,me={},h={},p=new WeakMap,v=[],M=null,m=!1,f=null,S=null,C=null,y=null,T=null,E=null,I=null,x=new ke(0,0,0),w=0,L=!1,b=null,P=null,G=null,X=null,O=null,ut.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:F,disable:Y,bindFramebuffer:se,drawBuffers:ae,useProgram:Ge,setBlending:He,setMaterial:$e,setFlipSided:ot,setCullFace:vt,setLineWidth:_t,setPolygonOffset:yt,setScissorTest:st,activeTexture:ft,bindTexture:U,unbindTexture:Tt,compressedTexImage2D:je,compressedTexImage3D:A,texImage2D:j,texImage3D:ee,pixelStorei:Te,getParameter:ce,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:le,texSubImage2D:g,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:de,viewport:he,reset:Oe}}function ug(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap,d=new Set,h,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return v?new OffscreenCanvas(A,g):vs("canvas")}function m(A,g,V){let q=1,K=je(A);if((K.width>V||K.height>V)&&(q=V/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let re=Math.floor(q*K.width),le=Math.floor(q*K.height);h===void 0&&(h=M(re,le));let j=g?M(re,le):h;return j.width=re,j.height=le,j.getContext("2d").drawImage(A,0,0,re,le),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+re+"x"+le+")."),j}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function f(A){return A.generateMipmaps}function S(A){n.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,g,V,q,K,re=!1){if(A!==null){if(n[A]!==void 0)return n[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;q&&(le=e.get("EXT_texture_norm16"),le||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8),V===n.UNSIGNED_SHORT&&le&&(j=le.R16_EXT),V===n.SHORT&&le&&(j=le.R16_SNORM_EXT)),g===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),g===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8),V===n.UNSIGNED_SHORT&&le&&(j=le.RG16_EXT),V===n.SHORT&&le&&(j=le.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),g===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),g===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),g===n.RGB&&(V===n.UNSIGNED_SHORT&&le&&(j=le.RGB16_EXT),V===n.SHORT&&le&&(j=le.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),g===n.RGBA){let ee=re?xs:We.getTransfer(K);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=ee===Ke?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&le&&(j=le.RGBA16_EXT),V===n.SHORT&&le&&(j=le.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function T(A,g){let V;return A?g===null||g===li||g===ss?V=n.DEPTH24_STENCIL8:g===ci?V=n.DEPTH32F_STENCIL8:g===ns&&(V=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===li||g===ss?V=n.DEPTH_COMPONENT24:g===ci?V=n.DEPTH_COMPONENT32F:g===ns&&(V=n.DEPTH_COMPONENT16),V}function E(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==Lt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function I(A){let g=A.target;g.removeEventListener("dispose",I),w(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(A){let g=A.target;g.removeEventListener("dispose",x),b(g)}function w(A){let g=i.get(A);if(g.__webglInit===void 0)return;let V=A.source,q=p.get(V);if(q){let K=q[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(A),Object.keys(q).length===0&&p.delete(V)}i.remove(A)}function L(A){let g=i.get(A);n.deleteTexture(g.__webglTexture);let V=A.source,q=p.get(V);delete q[g.__cacheKey],a.memory.textures--}function b(A){let g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let K=0;K<g.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[q][K]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let V=A.textures;for(let q=0,K=V.length;q<K;q++){let re=i.get(V[q]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(V[q])}i.remove(A)}let P=0;function G(){P=0}function X(){return P}function O(A){P=A}function H(){let A=P;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function z(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function J(A,g){let V=i.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let q=A.image;if(q===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,A,g);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+g)}function ie(A,g){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Y(V,A,g);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+g)}function ne(A,g){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Y(V,A,g);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+g)}function me(A,g){let V=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){se(V,A,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+g)}let be={[$n]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[Or]:n.MIRRORED_REPEAT},qe={[Ct]:n.NEAREST,[Wc]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[fa]:n.LINEAR_MIPMAP_NEAREST,[sn]:n.LINEAR_MIPMAP_LINEAR},ut={[qc]:n.NEVER,[jc]:n.ALWAYS,[Yc]:n.LESS,[Ka]:n.LEQUAL,[Jc]:n.EQUAL,[ja]:n.GEQUAL,[Zc]:n.GREATER,[Kc]:n.NOTEQUAL};function Ye(A,g){if(g.type===ci&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Lt||g.magFilter===fa||g.magFilter===Hs||g.magFilter===sn||g.minFilter===Lt||g.minFilter===fa||g.minFilter===Hs||g.minFilter===sn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,be[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,be[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,be[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,qe[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,qe[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ut[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ct||g.minFilter!==Hs&&g.minFilter!==sn||g.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function R(A,g){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",I));let q=g.source,K=p.get(q);K===void 0&&(K={},p.set(q,K));let re=z(g);if(re!==A.__cacheKey){K[re]===void 0&&(K[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[re].usedTimes++;let le=K[A.__cacheKey];le!==void 0&&(K[A.__cacheKey].usedTimes--,le.usedTimes===0&&L(g)),A.__cacheKey=re,A.__webglTexture=K[re].texture}return V}function D(A,g,V){return Math.floor(Math.floor(A/V)/g)}function F(A,g,V,q){let re=A.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,V,q,g.data);else{re.sort((Te,de)=>Te.start-de.start);let le=0;for(let Te=1;Te<re.length;Te++){let de=re[le],he=re[Te],Re=de.start+de.count,Pe=D(he.start,g.width,4),Oe=D(de.start,g.width,4);he.start<=Re+1&&Pe===Oe&&D(he.start+he.count-1,g.width,4)===Pe?de.count=Math.max(de.count,he.start+he.count-de.start):(++le,re[le]=he)}re.length=le+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Te=0,de=re.length;Te<de;Te++){let he=re[Te],Re=Math.floor(he.start/4),Pe=Math.ceil(he.count/4),Oe=Re%g.width,N=Math.floor(Re/g.width),oe=Pe,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Oe,N,oe,Q,V,q,g.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Y(A,g,V){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);let K=R(A,g),re=g.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+V);let le=i.get(re);if(re.version!==le.__version||K===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Q=We.getPrimaries(We.workingColorSpace),ue=g.colorSpace===Ui?null:We.getPrimaries(g.colorSpace),xe=g.colorSpace===Ui||Q===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let ee=m(g.image,!1,s.maxTextureSize);ee=Tt(g,ee);let ce=r.convert(g.format,g.colorSpace),Te=r.convert(g.type),de=y(g.internalFormat,ce,Te,g.normalized,g.colorSpace,g.isVideoTexture);Ye(q,g);let he,Re=g.mipmaps,Pe=g.isVideoTexture!==!0,Oe=le.__version===void 0||K===!0,N=re.dataReady,oe=E(g,ee);if(g.isDepthTexture)de=T(g.format===rn,g.type),Oe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,de,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,de,ee.width,ee.height,0,ce,Te,null));else if(g.isDataTexture)if(Re.length>0){Pe&&Oe&&t.texStorage2D(n.TEXTURE_2D,oe,de,Re[0].width,Re[0].height);for(let Q=0,ue=Re.length;Q<ue;Q++)he=Re[Q],Pe?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,ce,Te,he.data):t.texImage2D(n.TEXTURE_2D,Q,de,he.width,he.height,0,ce,Te,he.data);g.generateMipmaps=!1}else Pe?(Oe&&t.texStorage2D(n.TEXTURE_2D,oe,de,ee.width,ee.height),N&&F(g,ee,ce,Te)):t.texImage2D(n.TEXTURE_2D,0,de,ee.width,ee.height,0,ce,Te,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,de,Re[0].width,Re[0].height,ee.depth);for(let Q=0,ue=Re.length;Q<ue;Q++)if(he=Re[Q],g.format!==ii)if(ce!==null)if(Pe){if(N)if(g.layerUpdates.size>0){let xe=vl(he.width,he.height,g.format,g.type);for(let te of g.layerUpdates){let we=he.data.subarray(te*xe/he.data.BYTES_PER_ELEMENT,(te+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,te,he.width,he.height,1,ce,we)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ce,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,de,he.width,he.height,ee.depth,0,he.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ce,Te,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,de,he.width,he.height,ee.depth,0,ce,Te,he.data)}else{Pe&&Oe&&t.texStorage2D(n.TEXTURE_2D,oe,de,Re[0].width,Re[0].height);for(let Q=0,ue=Re.length;Q<ue;Q++)he=Re[Q],g.format!==ii?ce!==null?Pe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,de,he.width,he.height,0,he.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he.width,he.height,ce,Te,he.data):t.texImage2D(n.TEXTURE_2D,Q,de,he.width,he.height,0,ce,Te,he.data)}else if(g.isDataArrayTexture)if(Pe){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,de,ee.width,ee.height,ee.depth),N)if(g.layerUpdates.size>0){let Q=vl(ee.width,ee.height,g.format,g.type);for(let ue of g.layerUpdates){let xe=ee.data.subarray(ue*Q/ee.data.BYTES_PER_ELEMENT,(ue+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,ce,Te,xe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Te,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,ee.width,ee.height,ee.depth,0,ce,Te,ee.data);else if(g.isData3DTexture)Pe?(Oe&&t.texStorage3D(n.TEXTURE_3D,oe,de,ee.width,ee.height,ee.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Te,ee.data)):t.texImage3D(n.TEXTURE_3D,0,de,ee.width,ee.height,ee.depth,0,ce,Te,ee.data);else if(g.isFramebufferTexture){if(Oe)if(Pe)t.texStorage2D(n.TEXTURE_2D,oe,de,ee.width,ee.height);else{let Q=ee.width,ue=ee.height;for(let xe=0;xe<oe;xe++)t.texImage2D(n.TEXTURE_2D,xe,de,Q,ue,0,ce,Te,null),Q>>=1,ue>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),d.add(g),Q.onpaint=ue=>{let xe=ue.changedElements;for(let te of d)xe.includes(te.image)&&(te.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let xe=n.RGBA,te=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,te,we,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&Oe){let Q=je(Re[0]);t.texStorage2D(n.TEXTURE_2D,oe,de,Q.width,Q.height)}for(let Q=0,ue=Re.length;Q<ue;Q++)he=Re[Q],Pe?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce,Te,he):t.texImage2D(n.TEXTURE_2D,Q,de,ce,Te,he);g.generateMipmaps=!1}else if(Pe){if(Oe){let Q=je(ee);t.texStorage2D(n.TEXTURE_2D,oe,de,Q.width,Q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Te,ee)}else t.texImage2D(n.TEXTURE_2D,0,de,ce,Te,ee);f(g)&&S(q),le.__version=re.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function se(A,g,V){if(g.image.length!==6)return;let q=R(A,g),K=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+V);let re=i.get(K);if(K.version!==re.__version||q===!0){t.activeTexture(n.TEXTURE0+V);let le=We.getPrimaries(We.workingColorSpace),j=g.colorSpace===Ui?null:We.getPrimaries(g.colorSpace),ee=g.colorSpace===Ui||le===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ce=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!ce&&!Te?de[te]=m(g.image[te],!0,s.maxCubemapSize):de[te]=Te?g.image[te].image:g.image[te],de[te]=Tt(g,de[te]);let he=de[0],Re=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),Oe=y(g.internalFormat,Re,Pe,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,oe=re.__version===void 0||q===!0,Q=K.dataReady,ue=E(g,he);Ye(n.TEXTURE_CUBE_MAP,g);let xe;if(ce){N&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Oe,he.width,he.height);for(let te=0;te<6;te++){xe=de[te].mipmaps;for(let we=0;we<xe.length;we++){let Se=xe[we];g.format!==ii?Re!==null?N?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Se.width,Se.height,Re,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Oe,Se.width,Se.height,0,Se.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Se.width,Se.height,Re,Pe,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Oe,Se.width,Se.height,0,Re,Pe,Se.data)}}}else{if(xe=g.mipmaps,N&&oe){xe.length>0&&ue++;let te=je(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Oe,te.width,te.height)}for(let te=0;te<6;te++)if(Te){N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,Re,Pe,de[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,de[te].width,de[te].height,0,Re,Pe,de[te].data);for(let we=0;we<xe.length;we++){let pt=xe[we].image[te].image;N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,pt.width,pt.height,Re,Pe,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Oe,pt.width,pt.height,0,Re,Pe,pt.data)}}else{N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re,Pe,de[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,Re,Pe,de[te]);for(let we=0;we<xe.length;we++){let Se=xe[we];N?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Re,Pe,Se.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Oe,Re,Pe,Se.image[te])}}}f(g)&&S(n.TEXTURE_CUBE_MAP),re.__version=K.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function ae(A,g,V,q,K,re){let le=r.convert(V.format,V.colorSpace),j=r.convert(V.type),ee=y(V.internalFormat,le,j,V.normalized,V.colorSpace),ce=i.get(g),Te=i.get(V);if(Te.__renderTarget=g,!ce.__hasExternalTextures){let de=Math.max(1,g.width>>re),he=Math.max(1,g.height>>re);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,re,ee,de,he,g.depth,0,le,j,null):t.texImage2D(K,re,ee,de,he,0,le,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ft(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,Te.__webglTexture,0,st(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,Te.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(A,g,V){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){let q=g.depthTexture,K=q&&q.isDepthTexture?q.type:null,re=T(g.stencilBuffer,K),le=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(g),re,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,A)}else{let q=g.textures;for(let K=0;K<q.length;K++){let re=q[K],le=r.convert(re.format,re.colorSpace),j=r.convert(re.type),ee=y(re.internalFormat,le,j,re.normalized,re.colorSpace);ft(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(g),ee,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(g),ee,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ee,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(A,g,V){let q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,g.depthTexture);let ce=r.convert(g.depthTexture.format),Te=r.convert(g.depthTexture.type),de;g.depthTexture.format===gi?de=n.DEPTH_COMPONENT24:g.depthTexture.format===rn&&(de=n.DEPTH24_STENCIL8);for(let he=0;he<6;he++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,de,g.width,g.height,0,ce,Te,null)}}else J(g.depthTexture,0);let re=K.__webglTexture,le=st(g),j=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ee=g.depthTexture.format===rn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===gi)ft(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,j,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ee,j,re,0);else if(g.depthTexture.format===rn)ft(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,j,re,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ee,j,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(A){let g=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=q}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)Ue(g.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?Ue(g.__webglFramebuffer[0],A,0):Ue(g.__webglFramebuffer,A,0)}else if(V){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),Ge(g.__webglDepthbuffer[q],A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,re)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ge(g.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(A,g,V){let q=i.get(A);g!==void 0&&ae(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Fe(A)}function $e(A){let g=A.texture,V=i.get(A),q=i.get(g);A.addEventListener("dispose",x);let K=A.textures,re=A.isWebGLCubeRenderTarget===!0,le=K.length>1;if(le||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++),re){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let ee=0;ee<g.mipmaps.length;ee++)V.__webglFramebuffer[j][ee]=n.createFramebuffer()}else V.__webglFramebuffer[j]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)V.__webglFramebuffer[j]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(le)for(let j=0,ee=K.length;j<ee;j++){let ce=i.get(K[j]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ft(A)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let ee=K[j];V.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[j]);let ce=r.convert(ee.format,ee.colorSpace),Te=r.convert(ee.type),de=y(ee.internalFormat,ce,Te,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),he=st(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,de,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,V.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)ae(V.__webglFramebuffer[j][ee],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else ae(V.__webglFramebuffer[j],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(g)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let j=0,ee=K.length;j<ee;j++){let ce=K[j],Te=i.get(ce),de=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),Ye(de,ce),ae(V.__webglFramebuffer,A,ce,n.COLOR_ATTACHMENT0+j,de,0),f(ce)&&S(de)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Ye(j,g),g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)ae(V.__webglFramebuffer[ee],A,g,n.COLOR_ATTACHMENT0,j,ee);else ae(V.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,j,0);f(g)&&S(j),t.unbindTexture()}A.depthBuffer&&Fe(A)}function ot(A){let g=A.textures;for(let V=0,q=g.length;V<q;V++){let K=g[V];if(f(K)){let re=C(A),le=i.get(K).__webglTexture;t.bindTexture(re,le),S(re),t.unbindTexture()}}}let vt=[],_t=[];function yt(A){if(A.samples>0){if(ft(A)===!1){let g=A.textures,V=A.width,q=A.height,K=n.COLOR_BUFFER_BIT,re=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(A),j=g.length>1;if(j)for(let ce=0;ce<g.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Te=i.get(g[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,V,q,0,0,V,q,K,n.NEAREST),l===!0&&(vt.length=0,_t.length=0,vt.push(n.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(re),_t.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<g.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Te=i.get(g[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function ft(A){let g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(A){let g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function Tt(A,g){let V=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==gs&&V!==Ui&&(We.getTransfer(V)===Ke?(q!==ii||K!==Wt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",V)),g}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=me,this.rebindTextures=He,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dg(n,e){function t(i,s=Ui){let r,a=We.getTransfer(s);if(i===Wt)return n.UNSIGNED_BYTE;if(i===ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ol)return n.BYTE;if(i===ll)return n.SHORT;if(i===ns)return n.UNSIGNED_SHORT;if(i===pa)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===ul)return n.ALPHA;if(i===dl)return n.RGB;if(i===ii)return n.RGBA;if(i===gi)return n.DEPTH_COMPONENT;if(i===rn)return n.DEPTH_STENCIL;if(i===fl)return n.RED;if(i===xa)return n.RED_INTEGER;if(i===an)return n.RG;if(i===va)return n.RG_INTEGER;if(i===_a)return n.RGBA_INTEGER;if(i===Ws||i===$s||i===Xs||i===qs)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ya||i===ba||i===Ma||i===Sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ys||i===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===wa)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ta)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Aa)return r.COMPRESSED_R11_EAC;if(i===Ca)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ys)return r.COMPRESSED_RG11_EAC;if(i===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ia||i===Pa||i===La||i===Da||i===Na||i===Ua||i===Fa||i===Oa||i===Ba||i===ka||i===za||i===Va||i===Ga||i===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ia)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===La)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Da)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Na)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ua)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ba)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ka)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Va)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ga)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===$a||i===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wa)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qa||i===Ya||i===Js||i===Ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
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

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Cs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zt({vertexShader:fg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends xi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null,M=typeof XRWebGLBinding<"u",m=new Ol,f={},S=t.getContextAttributes(),C=null,y=null,T=[],E=[],I=new De,x=null,w=new Gt;w.viewport=new dt;let L=new Gt;L.viewport=new dt;let b=[w,L],P=new la,G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let D=T[R];return D===void 0&&(D=new Zn,T[R]=D),D.getTargetRaySpace()},this.getControllerGrip=function(R){let D=T[R];return D===void 0&&(D=new Zn,T[R]=D),D.getGripSpace()},this.getHand=function(R){let D=T[R];return D===void 0&&(D=new Zn,T[R]=D),D.getHandSpace()};function O(R){let D=E.indexOf(R.inputSource);if(D===-1)return;let F=T[D];F!==void 0&&(F.update(R.inputSource,R.frame,c||a),F.dispatchEvent({type:R.type,data:R.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let R=0;R<T.length;R++){let D=E[R];D!==null&&(E[R]=null,T[R].disconnect(D))}G=null,X=null,m.reset();for(let R in f)delete f[R];e.setRenderTarget(C),p=null,h=null,d=null,s=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,Y=null,se=null;S.depth&&(se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=S.stencil?rn:gi,Y=S.stencil?ss:li);let ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ae),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Jt(h.textureWidth,h.textureHeight,{format:ii,type:Wt,depthTexture:new Ni(h.textureWidth,h.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let F={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,F),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Jt(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(R){for(let D=0;D<R.removed.length;D++){let F=R.removed[D],Y=E.indexOf(F);Y>=0&&(E[Y]=null,T[Y].disconnect(F))}for(let D=0;D<R.added.length;D++){let F=R.added[D],Y=E.indexOf(F);if(Y===-1){for(let ae=0;ae<T.length;ae++)if(ae>=E.length){E.push(F),Y=ae;break}else if(E[ae]===null){E[ae]=F,Y=ae;break}if(Y===-1)break}let se=T[Y];se&&se.connect(F)}}let J=new k,ie=new k;function ne(R,D,F){J.setFromMatrixPosition(D.matrixWorld),ie.setFromMatrixPosition(F.matrixWorld);let Y=J.distanceTo(ie),se=D.projectionMatrix.elements,ae=F.projectionMatrix.elements,Ge=se[14]/(se[10]-1),Ue=se[14]/(se[10]+1),Fe=(se[9]+1)/se[5],He=(se[9]-1)/se[5],$e=(se[8]-1)/se[0],ot=(ae[8]+1)/ae[0],vt=Ge*$e,_t=Ge*ot,yt=Y/(-$e+ot),st=yt*-$e;if(D.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(st),R.translateZ(yt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),se[10]===-1)R.projectionMatrix.copy(D.projectionMatrix),R.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let ft=Ge+yt,U=Ue+yt,Tt=vt-st,je=_t+(Y-st),A=Fe*Ue/U*ft,g=He*Ue/U*ft;R.projectionMatrix.makePerspective(Tt,je,A,g,ft,U),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function me(R,D){D===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(D.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let D=R.near,F=R.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&(F=m.depthFar)),P.near=L.near=w.near=D,P.far=L.far=w.far=F,(G!==P.near||X!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),G=P.near,X=P.far),P.layers.mask=R.layers.mask|6,w.layers.mask=P.layers.mask&-5,L.layers.mask=P.layers.mask&-3;let Y=R.parent,se=P.cameras;me(P,Y);for(let ae=0;ae<se.length;ae++)me(se[ae],Y);se.length===2?ne(P,w,L):P.projectionMatrix.copy(w.projectionMatrix),be(R,P,Y)};function be(R,D,F){F===null?R.matrix.copy(D.matrixWorld):(R.matrix.copy(F.matrixWorld),R.matrix.invert(),R.matrix.multiply(D.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(D.projectionMatrix),R.projectionMatrixInverse.copy(D.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=zr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(R){l=R,h!==null&&(h.fixedFoveation=R),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=R)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(R){return f[R]};let qe=null;function ut(R,D){if(u=D.getViewerPose(c||a),v=D,u!==null){let F=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Y=!1;F.length!==P.cameras.length&&(P.cameras.length=0,Y=!0);for(let Ue=0;Ue<F.length;Ue++){let Fe=F[Ue],He=null;if(p!==null)He=p.getViewport(Fe);else{let ot=d.getViewSubImage(h,Fe);He=ot.viewport,Ue===0&&(e.setRenderTargetTextures(y,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(y))}let $e=b[Ue];$e===void 0&&($e=new Gt,$e.layers.enable(Ue),$e.viewport=new dt,b[Ue]=$e),$e.matrix.fromArray(Fe.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Fe.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(He.x,He.y,He.width,He.height),Ue===0&&(P.matrix.copy($e.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Y===!0&&P.cameras.push($e)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let Ue=d.getDepthInformation(F[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(se&&se.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let Ue=0;Ue<F.length;Ue++){let Fe=F[Ue].camera;if(Fe){let He=f[Fe];He||(He=new Cs,f[Fe]=He);let $e=d.getCameraImage(Fe);He.sourceTexture=$e}}}}for(let F=0;F<T.length;F++){let Y=E[F],se=T[F];Y!==null&&se!==void 0&&se.update(Y,D,c||a)}qe&&qe(R,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),v=null}let Ye=new Rh;Ye.setAnimationLoop(ut),this.setAnimationLoop=function(R){qe=R},this.dispose=function(){}}},mg=new ht,Uh=new Ne;Uh.set(-1,0,0,0,1,0,0,0,1);function gg(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ml(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,C,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,C):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),C=S.envMap,y=S.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xg(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let E=T.program;i.uniformBlockBinding(y,E)}function c(y,T){let E=s[y.id];E===void 0&&(m(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",S));let I=T.program;i.updateUBOMapping(y,I);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let T=d();y.__bindingPointIndex=T;let E=n.createBuffer(),I=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=s[y.id],E=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let L=E[x];if(Array.isArray(L))for(let b=0,P=L.length;b<P;b++)p(L[b],x,b,I);else p(L,x,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,T,E,I){if(M(y,T,E,I)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let L=0;for(let b=0;b<w.length;b++){let P=w[b],G=f(P);v(P,y.__data,L),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,y.__data)}}function v(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function M(y,T,E,I){let x=y.value,w=T+"_"+E;if(I[w]===void 0)return typeof x=="number"||typeof x=="boolean"?I[w]=x:ArrayBuffer.isView(x)?I[w]=x.slice():I[w]=x.clone(),!0;{let L=I[w];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return I[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(y){let T=y.uniforms,E=0,I=16;for(let w=0,L=T.length;w<L;w++){let b=Array.isArray(T[w])?T[w]:[T[w]];for(let P=0,G=b.length;P<G;P++){let X=b[P],O=Array.isArray(X.value)?X.value:[X.value];for(let H=0,z=O.length;H<z;H++){let J=O[H],ie=f(J),ne=E%I,me=ne%ie.boundary,be=ne+me;E+=me,be!==0&&I-be<ie.storage&&(E+=I-be),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=ie.storage}}}let x=E%I;return x>0&&(E+=I-x),y.__size=E,y.__cache={},this}function f(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",y),T}function S(y){let T=y.target;T.removeEventListener("dispose",S);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function C(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function _g(){return bi===null&&(bi=new $r(vg,16,16,an,yi),bi.name="DFG_LUT",bi.minFilter=Lt,bi.magFilter=Lt,bi.wrapS=mi,bi.wrapT=mi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var no=class{constructor(e={}){let{canvas:t=Qc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Wt}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;let M=p,m=new Set([_a,va,xa]),f=new Set([Wt,li,ns,ss,ma,ga]),S=new Uint32Array(4),C=new Int32Array(4),y=new k,T=null,E=null,I=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,b=!1,P=null,G=null,X=null,O=null;this._outputColorSpace=Pt;let H=0,z=0,J=null,ie=-1,ne=null,me=new dt,be=new dt,qe=null,ut=new ke(0),Ye=0,R=t.width,D=t.height,F=1,Y=null,se=null,ae=new dt(0,0,R,D),Ge=new dt(0,0,R,D),Ue=!1,Fe=new Qn,He=!1,$e=!1,ot=new ht,vt=new k,_t=new dt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function ft(){return J===null?F:1}let U=i;function Tt(_,B){return t.getContext(_,B)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",hi,!1),U===null){let B="webgl2";if(U=Tt(B,_),U===null)throw Tt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw Ie("WebGLRenderer: "+_.message),_}let je,A,g,V,q,K,re,le,j,ee,ce,Te,de,he,Re,Pe,Oe,N,oe,Q,ue,xe,te;function we(){je=new Tp(U),je.init(),ue=new dg(U,je),A=new vp(U,je,e,ue),g=new hg(U,je),A.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=U.createFramebuffer(),X=U.createFramebuffer(),O=U.createFramebuffer(),V=new Rp(U),q=new Zm,K=new ug(U,je,g,q,A,ue,V),re=new wp(L),le=new Lu(U),xe=new gp(U,le),j=new Ap(U,le,V,xe),ee=new Pp(U,j,le,xe,V),N=new Ip(U,A,K),Re=new _p(q),ce=new Jm(L,re,je,A,xe,Re),Te=new gg(L,q),de=new jm,he=new sg(je),Oe=new mp(L,re,g,ee,v,l),Pe=new cg(L,ee,A),te=new xg(U,V,A,g),oe=new xp(U,je,V),Q=new Cp(U,je,V),V.programs=ce.programs,L.capabilities=A,L.extensions=je,L.properties=q,L.renderLists=de,L.shadowMap=Pe,L.state=g,L.info=V}we(),M!==Wt&&(w=new Dp(M,t.width,t.height,o,s,r));let Se=new Bl(L,U);this.xr=Se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let _=je.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=je.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(_){_!==void 0&&(F=_,this.setSize(R,D,!1))},this.getSize=function(_){return _.set(R,D)},this.setSize=function(_,B,Z=!0){if(Se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}R=_,D=B,t.width=Math.floor(_*F),t.height=Math.floor(B*F),Z===!0&&(t.style.width=_+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,_,B)},this.getDrawingBufferSize=function(_){return _.set(R*F,D*F).floor()},this.setDrawingBufferSize=function(_,B,Z){R=_,D=B,F=Z,t.width=Math.floor(_*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,_,B)},this.setEffects=function(_){if(M===Wt){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let B=0;B<_.length;B++)if(_[B].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(me)},this.getViewport=function(_){return _.copy(ae)},this.setViewport=function(_,B,Z,W){_.isVector4?ae.set(_.x,_.y,_.z,_.w):ae.set(_,B,Z,W),g.viewport(me.copy(ae).multiplyScalar(F).round())},this.getScissor=function(_){return _.copy(Ge)},this.setScissor=function(_,B,Z,W){_.isVector4?Ge.set(_.x,_.y,_.z,_.w):Ge.set(_,B,Z,W),g.scissor(be.copy(Ge).multiplyScalar(F).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(_){g.setScissorTest(Ue=_)},this.setOpaqueSort=function(_){Y=_},this.setTransparentSort=function(_){se=_},this.getClearColor=function(_){return _.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(_=!0,B=!0,Z=!0){let W=0;if(_){let $=!1;if(J!==null){let ge=J.texture.format;$=m.has(ge)}if($){let ge=J.texture.type,ye=f.has(ge),pe=Oe.getClearColor(),Ee=Oe.getClearAlpha(),Ae=pe.r,Be=pe.g,Ve=pe.b;ye?(S[0]=Ae,S[1]=Be,S[2]=Ve,S[3]=Ee,U.clearBufferuiv(U.COLOR,0,S)):(C[0]=Ae,C[1]=Be,C[2]=Ve,C[3]=Ee,U.clearBufferiv(U.COLOR,0,C))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),P=_},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),Oe.dispose(),de.dispose(),he.dispose(),q.dispose(),re.dispose(),ee.dispose(),xe.dispose(),te.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",zl),Se.removeEventListener("sessionend",Vl),ln.stop()};function pt(_){_.preventDefault(),_s("WebGLRenderer: Context Lost."),b=!0}function rt(){_s("WebGLRenderer: Context Restored."),b=!1;let _=V.autoReset,B=Pe.enabled,Z=Pe.autoUpdate,W=Pe.needsUpdate,$=Pe.type;we(),V.autoReset=_,Pe.enabled=B,Pe.autoUpdate=Z,Pe.needsUpdate=W,Pe.type=$}function hi(_){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ui(_){let B=_.target;B.removeEventListener("dispose",ui),kh(B)}function kh(_){zh(_),q.remove(_)}function zh(_){let B=q.get(_).programs;B!==void 0&&(B.forEach(function(Z){ce.releaseProgram(Z)}),_.isShaderMaterial&&ce.releaseShaderCache(_))}this.renderBufferDirect=function(_,B,Z,W,$,ge){B===null&&(B=yt);let ye=$.isMesh&&$.matrixWorld.determinantAffine()<0,pe=Hh(_,B,Z,W,$);g.setMaterial(W,ye);let Ee=Z.index,Ae=1;if(W.wireframe===!0){if(Ee=j.getWireframeAttribute(Z),Ee===void 0)return;Ae=2}let Be=Z.drawRange,Ve=Z.attributes.position,Ce=Be.start*Ae,Qe=(Be.start+Be.count)*Ae;ge!==null&&(Ce=Math.max(Ce,ge.start*Ae),Qe=Math.min(Qe,(ge.start+ge.count)*Ae)),Ee!==null?(Ce=Math.max(Ce,0),Qe=Math.min(Qe,Ee.count)):Ve!=null&&(Ce=Math.max(Ce,0),Qe=Math.min(Qe,Ve.count));let bt=Qe-Ce;if(bt<0||bt===1/0)return;xe.setup($,W,pe,Z,Ee);let mt,tt=oe;if(Ee!==null&&(mt=le.get(Ee),tt=Q,tt.setIndex(mt)),$.isMesh)W.wireframe===!0?(g.setLineWidth(W.wireframeLinewidth*ft()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if($.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),g.setLineWidth(Nt*ft()),$.isLineSegments?tt.setMode(U.LINES):$.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else $.isPoints?tt.setMode(U.POINTS):$.isSprite&&tt.setMode(U.TRIANGLES);if($.isBatchedMesh)if(je.get("WEBGL_multi_draw"))tt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Nt=$._multiDrawStarts,_e=$._multiDrawCounts,$t=$._multiDrawCount,Je=Ee?le.get(Ee).bytesPerElement:1,jt=q.get(W).currentProgram.getUniforms();for(let di=0;di<$t;di++)jt.setValue(U,"_gl_DrawID",di),tt.render(Nt[di]/Je,_e[di])}else if($.isInstancedMesh)tt.renderInstances(Ce,bt,$.count);else if(Z.isInstancedBufferGeometry){let Nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_e=Math.min(Z.instanceCount,Nt);tt.renderInstances(Ce,bt,_e)}else tt.render(Ce,bt)};function kl(_,B,Z){_.transparent===!0&&_.side===ti&&_.forceSinglePass===!1?(_.side=Vt,_.needsUpdate=!0,er(_,B,Z),_.side=Pi,_.needsUpdate=!0,er(_,B,Z),_.side=ti):er(_,B,Z)}this.compile=function(_,B,Z=null){Z===null&&(Z=_),E=he.get(Z),E.init(B),x.push(E),Z.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),_!==Z&&_.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();let W=new Set;return _.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ge=$.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){let pe=ge[ye];kl(pe,Z,$),W.add(pe)}else kl(ge,Z,$),W.add(ge)}),E=x.pop(),W},this.compileAsync=function(_,B,Z=null){let W=this.compile(_,B,Z);return new Promise($=>{function ge(){if(W.forEach(function(ye){q.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){$(_);return}setTimeout(ge,10)}je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ho=null;function Vh(_){ho&&ho(_)}function zl(){ln.stop()}function Vl(){ln.start()}let ln=new Rh;ln.setAnimationLoop(Vh),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(_){ho=_,Se.setAnimationLoop(_),_===null?ln.stop():ln.start()},Se.addEventListener("sessionstart",zl),Se.addEventListener("sessionend",Vl),this.render=function(_,B){if(B!==void 0&&B.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;P!==null&&P.renderStart(_,B);let Z=Se.enabled===!0&&Se.isPresenting===!0,W=w!==null&&(J===null||Z)&&w.begin(L,J);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(B),B=Se.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,B,J),E=he.get(_,x.length),E.init(B),E.state.textureUnits=K.getTextureUnits(),x.push(E),ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(ot,ai,B.reversedDepth),$e=this.localClippingEnabled,He=Re.init(this.clippingPlanes,$e),T=de.get(_,I.length),T.init(),I.push(T),Se.enabled===!0&&Se.isPresenting===!0){let ye=L.xr.getDepthSensingMesh();ye!==null&&uo(ye,B,-1/0,L.sortObjects)}uo(_,B,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(Y,se,B.reversedDepth),st=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,st&&Oe.addToRenderList(T,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Re.beginShadows();let $=E.state.shadowsArray;if(Pe.render($,_,B),He===!0&&Re.endShadows(),(W&&w.hasRenderPass())===!1){let ye=T.opaque,pe=T.transmissive;if(E.setupLights(),B.isArrayCamera){let Ee=B.cameras;if(pe.length>0)for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){let Ve=Ee[Ae];Hl(ye,pe,_,Ve)}st&&Oe.render(_);for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){let Ve=Ee[Ae];Gl(T,_,Ve,Ve.viewport)}}else pe.length>0&&Hl(ye,pe,_,B),st&&Oe.render(_),Gl(T,_,B)}J!==null&&z===0&&(K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J)),W&&w.end(L),_.isScene===!0&&_.onAfterRender(L,_,B),xe.resetDefaultState(),ie=-1,ne=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),He===!0&&Re.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,P!==null&&P.renderEnd()};function uo(_,B,Z,W){if(_.visible===!1)return;if(_.layers.test(B.layers)){if(_.isGroup)Z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(B);else if(_.isLightProbeGrid)E.pushLightProbeGrid(_);else if(_.isLight)E.pushLight(_),_.castShadow&&E.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Fe.intersectsSprite(_)){W&&_t.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ot);let ye=ee.update(_),pe=_.material;pe.visible&&T.push(_,ye,pe,Z,_t.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Fe.intersectsObject(_))){let ye=ee.update(_),pe=_.material;if(W&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),_t.copy(_.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),_t.copy(ye.boundingSphere.center)),_t.applyMatrix4(_.matrixWorld).applyMatrix4(ot)),Array.isArray(pe)){let Ee=ye.groups;for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){let Ve=Ee[Ae],Ce=pe[Ve.materialIndex];Ce&&Ce.visible&&T.push(_,ye,Ce,Z,_t.z,Ve)}}else pe.visible&&T.push(_,ye,pe,Z,_t.z,null)}}let ge=_.children;for(let ye=0,pe=ge.length;ye<pe;ye++)uo(ge[ye],B,Z,W)}function Gl(_,B,Z,W){let{opaque:$,transmissive:ge,transparent:ye}=_;E.setupLightsView(Z),He===!0&&Re.setGlobalState(L.clippingPlanes,Z),W&&g.viewport(me.copy(W)),$.length>0&&Qs($,B,Z),ge.length>0&&Qs(ge,B,Z),ye.length>0&&Qs(ye,B,Z),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Hl(_,B,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Ce=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Jt(1,1,{generateMipmaps:!0,type:Ce?yi:Wt,minFilter:sn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}let ge=E.state.transmissionRenderTarget[W.id],ye=W.viewport||me;ge.setSize(ye.z*L.transmissionResolutionScale,ye.w*L.transmissionResolutionScale);let pe=L.getRenderTarget(),Ee=L.getActiveCubeFace(),Ae=L.getActiveMipmapLevel();L.setRenderTarget(ge),L.getClearColor(ut),Ye=L.getClearAlpha(),Ye<1&&L.setClearColor(16777215,.5),L.clear(),st&&Oe.render(Z);let Be=L.toneMapping;L.toneMapping=oi;let Ve=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),He===!0&&Re.setGlobalState(L.clippingPlanes,W),Qs(_,Z,W),K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Qe=0,bt=B.length;Qe<bt;Qe++){let mt=B[Qe],{object:tt,geometry:Nt,material:_e,group:$t}=mt;if(_e.side===ti&&tt.layers.test(W.layers)){let Je=_e.side;_e.side=Vt,_e.needsUpdate=!0,Wl(tt,Z,W,Nt,_e,$t),_e.side=Je,_e.needsUpdate=!0,Ce=!0}}Ce===!0&&(K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge))}L.setRenderTarget(pe,Ee,Ae),L.setClearColor(ut,Ye),Ve!==void 0&&(W.viewport=Ve),L.toneMapping=Be}function Qs(_,B,Z){let W=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ge=_.length;$<ge;$++){let ye=_[$],{object:pe,geometry:Ee,group:Ae}=ye,Be=ye.material;Be.allowOverride===!0&&W!==null&&(Be=W),pe.layers.test(Z.layers)&&Wl(pe,B,Z,Ee,Be,Ae)}}function Wl(_,B,Z,W,$,ge){_.onBeforeRender(L,B,Z,W,$,ge),_.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),$.onBeforeRender(L,B,Z,W,_,ge),$.transparent===!0&&$.side===ti&&$.forceSinglePass===!1?($.side=Vt,$.needsUpdate=!0,L.renderBufferDirect(Z,B,W,$,_,ge),$.side=Pi,$.needsUpdate=!0,L.renderBufferDirect(Z,B,W,$,_,ge),$.side=ti):L.renderBufferDirect(Z,B,W,$,_,ge),_.onAfterRender(L,B,Z,W,$,ge)}function er(_,B,Z){B.isScene!==!0&&(B=yt);let W=q.get(_),$=E.state.lights,ge=E.state.shadowsArray,ye=$.state.version,pe=ce.getParameters(_,$.state,ge,B,Z,E.state.lightProbeGridArray),Ee=ce.getProgramCacheKey(pe),Ae=W.programs;W.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let Be=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;W.envMap=re.get(_.envMap||W.environment,Be),W.envMapRotation=W.environment!==null&&_.envMap===null?B.environmentRotation:_.envMapRotation,Ae===void 0&&(_.addEventListener("dispose",ui),Ae=new Map,W.programs=Ae);let Ve=Ae.get(Ee);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===ye)return Xl(_,pe),Ve}else pe.uniforms=ce.getUniforms(_),P!==null&&_.isNodeMaterial&&P.build(_,Z,pe),_.onBeforeCompile(pe,L),Ve=ce.acquireProgram(pe,Ee),Ae.set(Ee,Ve),W.uniforms=pe.uniforms;let Ce=W.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ce.clippingPlanes=Re.uniform),Xl(_,pe),W.needsLights=$h(_),W.lightsStateVersion=ye,W.needsLights&&(Ce.ambientLightColor.value=$.state.ambient,Ce.lightProbe.value=$.state.probe,Ce.directionalLights.value=$.state.directional,Ce.directionalLightShadows.value=$.state.directionalShadow,Ce.spotLights.value=$.state.spot,Ce.spotLightShadows.value=$.state.spotShadow,Ce.rectAreaLights.value=$.state.rectArea,Ce.ltc_1.value=$.state.rectAreaLTC1,Ce.ltc_2.value=$.state.rectAreaLTC2,Ce.pointLights.value=$.state.point,Ce.pointLightShadows.value=$.state.pointShadow,Ce.hemisphereLights.value=$.state.hemi,Ce.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ce.spotLightMatrix.value=$.state.spotLightMatrix,Ce.spotLightMap.value=$.state.spotLightMap,Ce.pointShadowMatrix.value=$.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=Ve,W.uniformsList=null,Ve}function $l(_){if(_.uniformsList===null){let B=_.currentProgram.getUniforms();_.uniformsList=as.seqWithValue(B.seq,_.uniforms)}return _.uniformsList}function Xl(_,B){let Z=q.get(_);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Gh(_,B){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let Z=0,W=_.length;Z<W;Z++){let $=_[Z];if($.texture!==null&&$.boundingBox.containsPoint(y))return $}return null}function Hh(_,B,Z,W,$){B.isScene!==!0&&(B=yt),K.resetTextureUnits();let ge=B.fog,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,pe=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:We.workingColorSpace,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ae=re.get(W.envMap||ye,Ee),Be=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,bt=!!Z.morphAttributes.color,mt=oi;W.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(mt=L.toneMapping);let tt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Nt=tt!==void 0?tt.length:0,_e=q.get(W),$t=E.state.lights;if(He===!0&&($e===!0||_!==ne)){let at=_===ne&&W.id===ie;Re.setState(W,_,at)}let Je=!1;W.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==$t.state.version||_e.outputColorSpace!==pe||$.isBatchedMesh&&_e.batching===!1||!$.isBatchedMesh&&_e.batching===!0||$.isBatchedMesh&&_e.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&_e.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&_e.instancing===!1||!$.isInstancedMesh&&_e.instancing===!0||$.isSkinnedMesh&&_e.skinning===!1||!$.isSkinnedMesh&&_e.skinning===!0||$.isInstancedMesh&&_e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&_e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&_e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&_e.instancingMorph===!1&&$.morphTexture!==null||_e.envMap!==Ae||W.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==Be||_e.vertexTangents!==Ve||_e.morphTargets!==Ce||_e.morphNormals!==Qe||_e.morphColors!==bt||_e.toneMapping!==mt||_e.morphTargetsCount!==Nt||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=W.version);let jt=_e.currentProgram;Je===!0&&(jt=er(W,B,$),P&&W.isNodeMaterial&&P.onUpdateProgram(W,jt,_e));let di=!1,Oi=!1,Sn=!1,it=jt.getUniforms(),Mt=_e.uniforms;if(g.useProgram(jt.program)&&(di=!0,Oi=!0,Sn=!0),W.id!==ie&&(ie=W.id,Oi=!0),_e.needsLights){let at=Gh(E.state.lightProbeGridArray,$);_e.lightProbeGrid!==at&&(_e.lightProbeGrid=at,Oi=!0)}if(di||ne!==_){g.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),it.setValue(U,"projectionMatrix",_.projectionMatrix),it.setValue(U,"viewMatrix",_.matrixWorldInverse);let ki=it.map.cameraPosition;ki!==void 0&&ki.setValue(U,vt.setFromMatrixPosition(_.matrixWorld)),A.logarithmicDepthBuffer&&it.setValue(U,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(U,"isOrthographic",_.isOrthographicCamera===!0),ne!==_&&(ne=_,Oi=!0,Sn=!0)}if(_e.needsLights&&($t.state.directionalShadowMap.length>0&&it.setValue(U,"directionalShadowMap",$t.state.directionalShadowMap,K),$t.state.spotShadowMap.length>0&&it.setValue(U,"spotShadowMap",$t.state.spotShadowMap,K),$t.state.pointShadowMap.length>0&&it.setValue(U,"pointShadowMap",$t.state.pointShadowMap,K)),$.isSkinnedMesh){it.setOptional(U,$,"bindMatrix"),it.setOptional(U,$,"bindMatrixInverse");let at=$.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),it.setValue(U,"boneTexture",at.boneTexture,K))}$.isBatchedMesh&&(it.setOptional(U,$,"batchingTexture"),it.setValue(U,"batchingTexture",$._matricesTexture,K),it.setOptional(U,$,"batchingIdTexture"),it.setValue(U,"batchingIdTexture",$._indirectTexture,K),it.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&it.setValue(U,"batchingColorTexture",$._colorsTexture,K));let Bi=Z.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&N.update($,Z,jt),(Oi||_e.receiveShadow!==$.receiveShadow)&&(_e.receiveShadow=$.receiveShadow,it.setValue(U,"receiveShadow",$.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Mt.envMapIntensity.value=B.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=_g()),Oi){if(it.setValue(U,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&Wh(Mt,Sn),ge&&W.fog===!0&&Te.refreshFogUniforms(Mt,ge),Te.refreshMaterialUniforms(Mt,W,F,D,E.state.transmissionRenderTarget[_.id]),_e.needsLights&&_e.lightProbeGrid){let at=_e.lightProbeGrid;Mt.probesSH.value=at.texture,Mt.probesMin.value.copy(at.boundingBox.min),Mt.probesMax.value.copy(at.boundingBox.max),Mt.probesResolution.value.copy(at.resolution)}as.upload(U,$l(_e),Mt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(as.upload(U,$l(_e),Mt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(U,"center",$.center),it.setValue(U,"modelViewMatrix",$.modelViewMatrix),it.setValue(U,"normalMatrix",$.normalMatrix),it.setValue(U,"modelMatrix",$.matrixWorld),W.uniformsGroups!==void 0){let at=W.uniformsGroups;for(let ki=0,En=at.length;ki<En;ki++){let ql=at[ki];te.update(ql,jt),te.bind(ql,jt)}}return jt}function Wh(_,B){_.ambientLightColor.needsUpdate=B,_.lightProbe.needsUpdate=B,_.directionalLights.needsUpdate=B,_.directionalLightShadows.needsUpdate=B,_.pointLights.needsUpdate=B,_.pointLightShadows.needsUpdate=B,_.spotLights.needsUpdate=B,_.spotLightShadows.needsUpdate=B,_.rectAreaLights.needsUpdate=B,_.hemisphereLights.needsUpdate=B}function $h(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(_,B,Z){let W=q.get(_);W.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(_.texture).__webglTexture=B,q.get(_.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,B){let Z=q.get(_);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(_,B=0,Z=0){J=_,H=B,z=Z;let W=null,$=!1,ge=!1;if(_){let pe=q.get(_);if(pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),me.copy(_.viewport),be.copy(_.scissor),qe=_.scissorTest,g.viewport(me),g.scissor(be),g.setScissorTest(qe),ie=-1;return}else if(pe.__webglFramebuffer===void 0)K.setupRenderTarget(_);else if(pe.__hasExternalTextures)K.rebindTextures(_,q.get(_.texture).__webglTexture,q.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Be=_.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&q.has(Be)&&(_.width!==Be.image.width||_.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(_)}}let Ee=_.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Ae=q.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?W=Ae[B][Z]:W=Ae[B],$=!0):_.samples>0&&K.useMultisampledRTT(_)===!1?W=q.get(_).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[Z]:W=Ae,me.copy(_.viewport),be.copy(_.scissor),qe=_.scissorTest}else me.copy(ae).multiplyScalar(F).floor(),be.copy(Ge).multiplyScalar(F).floor(),qe=Ue;if(Z!==0&&(W=G),g.bindFramebuffer(U.FRAMEBUFFER,W)&&g.drawBuffers(_,W),g.viewport(me),g.scissor(be),g.setScissorTest(qe),$){let pe=q.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,Z)}else if(ge){let pe=B;for(let Ee=0;Ee<_.textures.length;Ee++){let Ae=q.get(_.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,Z,pe)}}else if(_!==null&&Z!==0){let pe=q.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,Z)}ie=-1},this.readRenderTargetPixels=function(_,B,Z,W,$,ge,ye,pe=0){if(!(_&&_.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=q.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){g.bindFramebuffer(U.FRAMEBUFFER,Ee);try{let Ae=_.textures[pe],Be=Ae.format,Ve=Ae.type;if(_.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Be)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ve)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=_.width-W&&Z>=0&&Z<=_.height-$&&U.readPixels(B,Z,W,$,ue.convert(Be),ue.convert(Ve),ge)}finally{let Ae=J!==null?q.get(J).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(_,B,Z,W,$,ge,ye,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=q.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(B>=0&&B<=_.width-W&&Z>=0&&Z<=_.height-$){g.bindFramebuffer(U.FRAMEBUFFER,Ee);let Ae=_.textures[pe],Be=Ae.format,Ve=Ae.type;if(_.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ce),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(B,Z,W,$,ue.convert(Be),ue.convert(Ve),0);let Qe=J!==null?q.get(J).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Qe);let bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await th(U,bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.deleteBuffer(Ce),U.deleteSync(bt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,B=null,Z=0){let W=Math.pow(2,-Z),$=Math.floor(_.image.width*W),ge=Math.floor(_.image.height*W),ye=B!==null?B.x:0,pe=B!==null?B.y:0;K.setTexture2D(_,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,ye,pe,$,ge),g.unbindTexture()},this.copyTextureToTexture=function(_,B,Z=null,W=null,$=0,ge=0){let ye,pe,Ee,Ae,Be,Ve,Ce,Qe,bt,mt=_.isCompressedTexture?_.mipmaps[ge]:_.image;if(Z!==null)ye=Z.max.x-Z.min.x,pe=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Ae=Z.min.x,Be=Z.min.y,Ve=Z.isBox3?Z.min.z:0;else{let Mt=Math.pow(2,-$);ye=Math.floor(mt.width*Mt),pe=Math.floor(mt.height*Mt),_.isDataArrayTexture?Ee=mt.depth:_.isData3DTexture?Ee=Math.floor(mt.depth*Mt):Ee=1,Ae=0,Be=0,Ve=0}W!==null?(Ce=W.x,Qe=W.y,bt=W.z):(Ce=0,Qe=0,bt=0);let tt=ue.convert(B.format),Nt=ue.convert(B.type),_e;B.isData3DTexture?(K.setTexture3D(B,0),_e=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),_e=U.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),_e=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let $t=g.getParameter(U.UNPACK_ROW_LENGTH),Je=g.getParameter(U.UNPACK_IMAGE_HEIGHT),jt=g.getParameter(U.UNPACK_SKIP_PIXELS),di=g.getParameter(U.UNPACK_SKIP_ROWS),Oi=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),g.pixelStorei(U.UNPACK_SKIP_ROWS,Be),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);let Sn=_.isDataArrayTexture||_.isData3DTexture,it=B.isDataArrayTexture||B.isData3DTexture;if(_.isDepthTexture){let Mt=q.get(_),Bi=q.get(B),at=q.get(Mt.__renderTarget),ki=q.get(Bi.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,at.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let En=0;En<Ee;En++)Sn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(_).__webglTexture,$,Ve+En),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(B).__webglTexture,ge,bt+En)),U.blitFramebuffer(Ae,Be,ye,pe,Ce,Qe,ye,pe,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||_.isRenderTargetTexture||q.has(_)){let Mt=q.get(_),Bi=q.get(B);g.bindFramebuffer(U.READ_FRAMEBUFFER,X),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let at=0;at<Ee;at++)Sn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,$,Ve+at):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,$),it?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bi.__webglTexture,ge,bt+at):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bi.__webglTexture,ge),$!==0?U.blitFramebuffer(Ae,Be,ye,pe,Ce,Qe,ye,pe,U.COLOR_BUFFER_BIT,U.NEAREST):it?U.copyTexSubImage3D(_e,ge,Ce,Qe,bt+at,Ae,Be,ye,pe):U.copyTexSubImage2D(_e,ge,Ce,Qe,Ae,Be,ye,pe);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else it?_.isDataTexture||_.isData3DTexture?U.texSubImage3D(_e,ge,Ce,Qe,bt,ye,pe,Ee,tt,Nt,mt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(_e,ge,Ce,Qe,bt,ye,pe,Ee,tt,mt.data):U.texSubImage3D(_e,ge,Ce,Qe,bt,ye,pe,Ee,tt,Nt,mt):_.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,Ce,Qe,ye,pe,tt,Nt,mt.data):_.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,Ce,Qe,mt.width,mt.height,tt,mt.data):U.texSubImage2D(U.TEXTURE_2D,ge,Ce,Qe,ye,pe,tt,Nt,mt);g.pixelStorei(U.UNPACK_ROW_LENGTH,$t),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),g.pixelStorei(U.UNPACK_SKIP_PIXELS,jt),g.pixelStorei(U.UNPACK_SKIP_ROWS,di),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Oi),ge===0&&B.generateMipmaps&&U.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(_){q.get(_).__webglFramebuffer===void 0&&K.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?K.setTextureCube(_,0):_.isData3DTexture?K.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?K.setTexture2DArray(_,0):K.setTexture2D(_,0),g.unbindTexture()},this.resetState=function(){H=0,z=0,J=null,g.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var Fi=k,ao=class{constructor(e,t){this.state=e,this.canvas=t,this.scene=new bs,this.scene.background=new ke("#dce6cb"),this.camera=new tn(-20,20,15,-15,.1,220),this.renderer=new no({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=Pt,this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=.9,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ha,this.renderer.shadowMap.autoUpdate=!1,this.clock=0,this.target=new Fi(0,0,0),this.goal=new Fi(0,0,0),this.size=Math.max(29,26/(innerWidth/innerHeight)),this.goalSize=this.size,this.player=new Fi(0,0,0),this.yaw=0,this.pitch=0,this.paused=!0,this.keys={},this.moveStick={x:0,y:0},this.arena=null,this.zone="lab",this.current=null,this.pointer={x:innerWidth/2,y:innerHeight/2,inside:!1},this.ray=new ks,this.interactables=[],this.areaGroups={},this.plotGroups={},this.machineGroups=[],this.machines=this.machineGroups,this.shards=[],this.animators=[],this.particles=[],this.materials=new Map,this.geometry={box:new Ki(1,1,1),sphere:new Ls(1,16,12),cylinder:new Rs(1,1,1,16),torus:new Ds(1,.05,6,40)},this.scene.add(new Fs("#fff9df","#90a277",1.8)),this.sun=new Bs("#fff3d4",2.1),this.sun.position.set(-15,32,20),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-80,right:80,top:60,bottom:-60,near:1,far:120}),this.sun.shadow.normalBias=.04,this.scene.add(this.sun),this.floorMat=this.grassMaterial();let i=this.box(this.scene,0,-.7,0,210,.2,200,"#b8cd91");i.material=this.floorMat,this.buildFacility(),this.buildArenas(),this.droneGroup=new Ze,this.scene.add(this.droneGroup),this.hoverRing=new xt(new Ps(1.3,1.4,48),new vn({color:"#fffbe1",transparent:!0,opacity:.9,side:ti,depthWrite:!1})),this.hoverRing.rotation.x=-Math.PI/2,this.hoverRing.visible=!1,this.scene.add(this.hoverRing),this.input(),this.sync(),this.applySettings(),this.resize(),window.addEventListener("resize",()=>this.resize()),e.on(s=>{["world","area","machine","collected","skill"].includes(s)&&this.sync()})}mat(e,t=!1){let i=e+t;return this.materials.has(i)||this.materials.set(i,new ts({color:e,roughness:.85,metalness:.03,emissive:t?e:"#000000",emissiveIntensity:t?.18:0})),this.materials.get(i)}box(e,t,i,s,r,a,o,l,c=!1){let u=new xt(this.geometry.box,this.mat(l,c));return u.position.set(t,i,s),u.scale.set(r,a,o),u.castShadow=!c&&a>.2,u.receiveShadow=!0,e.add(u),u}sphere(e,t,i,s,r,a,o=!1){let l=new xt(this.geometry.sphere,this.mat(a,o));return l.position.set(t,i,s),l.scale.setScalar(r),l.castShadow=!o,e.add(l),l}cylinder(e,t,i,s,r,a,o){let l=new xt(this.geometry.cylinder,this.mat(o));return l.position.set(t,i,s),l.scale.set(r,a,r),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}ring(e,t,i,s,r,a,o=Math.PI/2){let l=new xt(this.geometry.torus,this.mat(a,!0));return l.position.set(t,i,s),l.scale.setScalar(r),l.rotation.x=o,e.add(l),l}grassMaterial(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#a7c87d",t.fillRect(0,0,128,128);let i=624,s=()=>(i=i*16807%2147483647,i/2147483647);for(let a=0;a<900;a++)t.fillStyle=["#a2c278","#b1ce87","#a6c67e","#9fbe76"][a%4],t.fillRect(Math.floor(s()*128),Math.floor(s()*128),2,2);let r=new es(e);return r.colorSpace=Pt,r.wrapS=r.wrapT=$n,r.repeat.set(25,25),new ts({map:r,roughness:1})}label(e,t,i,s,r,a=4,o="#244638"){let l=document.createElement("canvas");l.width=512,l.height=128;let c=l.getContext("2d");c.fillStyle="#fff9e8",c.beginPath(),c.roundRect(10,20,492,86,15),c.fill(),c.strokeStyle="#d5d7bd",c.lineWidth=3,c.stroke(),c.font="600 40px Arial",c.textAlign="center",c.fillStyle=o,c.measureText(t).width>465&&(c.font="600 "+Math.floor(40*465/c.measureText(t).width)+"px Arial"),c.fillText(t,256,77);let u=new es(l);u.colorSpace=Pt;let d=new ws(new jn({map:u,depthWrite:!1}));return d.position.set(i,s,r),d.scale.set(a,a*128/512,1),e.add(d),d}bind(e,t,i,s,r=1/0){let a={obj:e,action:t,data:i,label:s,range:r};return e.traverse(o=>{o.isMesh&&(o.userData.interactable=a)}),this.interactables.push(e),a}house(e,t,i,s,r,a="#bf6e46",o=4.5,l=3.6){let c=new Ze;c.position.set(t,0,i),e.add(c),this.box(c,0,.18,0,o+.4,.35,l+.4,"#ac9670"),this.box(c,0,1.2,0,o,2.1,l,"#ead9b0"),this.box(c,0,.45,l/2+.25,1.1,.5,.6,"#bc9561"),this.box(c,0,1,l/2+.02,.8,1.5,.06,"#796246");for(let u of[-1.45,1.45])this.box(c,u,1.35,l/2+.03,.85,.9,.08,"#f6edcd"),this.box(c,u,1.35,l/2+.1,.65,.7,.05,"#70a7ae"),this.box(c,u,1.35,l/2+.14,.05,.74,.03,"#eadfbc");for(let u of[-1,1]){let d=this.box(c,u*o*.25,2.65,0,o*.57,.18,l+.6,a);d.rotation.z=u*-.4;for(let h=0;h<5;h++){let p=this.box(c,u*o*.25,2.76,-l/2+h*l/4,o*.58,.04,.045,"#a65d3c");p.rotation.z=u*-.4}}return this.box(c,o*.3,3.1,-l*.2,.5,1,.6,"#bb9971"),this.label(c,s,0,3.65,0,o+1),this.bind(c,r,null,s),c}tree(e,t,i,s=1,r="#568653"){let a=new Ze;return a.position.set(t,0,i),a.scale.setScalar(s),e.add(a),this.cylinder(a,0,.75,0,.15,1.5,"#96714d"),this.sphere(a,0,1.65,0,.8,r),this.sphere(a,-.3,1.35,.2,.62,"#69974f"),this.sphere(a,.35,1.4,-.2,.62,"#73a358"),a}flowerbed(e,t,i,s=2.8,r=2){this.box(e,t,.05,i,s,.12,r,"#aa865c");for(let a=0;a<3;a++)for(let o=0;o<4;o++){let l=t-s*.36+o*s*.24,c=i-r*.32+a*r*.32;this.sphere(e,l,.22,c,.13,"#527c43"),(a+o)%3===0&&this.sphere(e,l,.4,c,.1,"#e8bd65")}}fence(e){for(let t of[-10.5,10.5])for(let i=-10;i<=10;i+=2)Math.abs(i)<3||(this.box(e,i,.55,t,.16,1.1,.16,"#bd9462"),this.box(e,i,.65,t,2,.12,.12,"#caab7c"),this.box(e,i,.3,t,2,.12,.12,"#caab7c"));for(let t of[-10.5,10.5])for(let i=-10;i<=10;i+=2)Math.abs(i)<3||(this.box(e,t,.55,i,.16,1.1,.16,"#bd9462"),this.box(e,t,.65,i,.12,.12,2,"#caab7c"),this.box(e,t,.3,i,.12,.12,2,"#caab7c"))}buildFacility(){for(let i of lt){let s=new Ze;s.position.set(i.x,0,i.z),this.scene.add(s),this.plotGroups[i.id]=s,this.box(s,0,-.3,0,22,.5,22,"#8db471");let r=this.box(s,0,-.025,0,22,.06,2.5,"#d7bc86");this.box(s,0,-.02,0,2.5,.06,22,"#d7bc86"),this.fence(s);let a=new Ze;s.add(a),this.areaGroups[i.id]=a;let o=new Ze;s.add(o),this.box(o,0,.01,0,12,.06,9,"#b2bc91");let l=this.label(o,i.name.toUpperCase(),0,1.1,0,8,"#687257");this.label(o,"EXPAND TO UNLOCK",0,.5,3,5,"#778061"),this.bind(o,"locked",i.id,i.name+" \xB7 expand to unlock"),s.userData.sealed=o;for(let[c,u,d]of[[-9,-8,1.1],[9,-9,.9],[-9,8,.85],[9,8,1.05]])this.tree(s,c,u,d,i.id==="dimension"?"#8c84a6":i.id==="planet"?"#638d68":"#58884e");if(i.id!=="lab"){let c=this.house(a,-5,-4,i.name,i.id==="research"?"research":i.id==="quantum"||i.id==="dimension"?"rebirth":i.id==="factory"?"drones":i.id==="deep"?"challenges":"travel",["#bf7750","#6688a0","#9a869f"][lt.indexOf(i)%3],5,4);this.flowerbed(a,-6,5,4,3),this.flowerbed(a,6,5,4,3)}}for(let i of lt)for(let s of lt)if(s.x===i.x+28&&s.z===i.z||s.z===i.z+28&&s.x===i.x){let r=(i.x+s.x)/2,a=(i.z+s.z)/2;this.box(this.scene,r,-.03,a,i.x===s.x?2.5:6,.12,i.z===s.z?2.5:6,"#d7bc86")}let e=this.areaGroups.lab;this.house(e,-6,-5,"Skill workshop","tree","#b56c45",4.8,4),this.house(e,-6,5,"Daily supplies","daily","#899d71",3.5,3),this.house(e,6,5,"Arcade","arcade","#788fa3",3.8,3.3),this.flowerbed(e,-5,0,3,2),this.flowerbed(e,5,0,3,2),this.core=new Ze,this.core.position.set(0,0,-2),e.add(this.core),this.box(e,0,.03,-2,5.5,.1,5.5,"#d7c797"),this.cylinder(this.core,0,.2,0,1.7,.4,"#aaa98d"),this.cylinder(this.core,0,.55,0,1.3,.3,"#ece2c5"),this.ring(this.core,0,.75,0,1.15,"#67afac"),this.coreSphere=this.sphere(this.core,0,1.65,0,.82,"#78d1cd",!0),this.coreRings=[];for(let i=0;i<4;i++){let s=this.ring(this.core,0,1.65,0,1.1+i*.12,"#80bbac",i*.6);this.coreRings.push(s)}this.bind(this.core,"core",null,"Energy core"),this.label(this.core,"Energy core",0,3.3,0,4.3);let t=this.person("#d8ba77");t.position.set(-3,0,5),e.add(t),this.bind(t,"npc","engineer","Chief engineer"),this.label(t,"Engineer",0,1.5,0,2.5),this.npcs=[t],Xt.forEach((i,s)=>{let r=lt.find(h=>h.id===i.area),a=new Ze;a.position.set(6,0,-5),this.areaGroups[r.id].add(a);let o=this.box(a,0,.12,0,4.4,.25,4.4,"#a7a38a");this.box(a,0,.3,0,3.8,.12,3.8,"#d0c5a3");let l=new Ze;a.add(l),this.box(l,0,.95,0,1.4,1.3,1.4,"#708e8a"),this.cylinder(l,0,1.8,0,.55,.5,"#d8ddc2");let c=this.ring(l,0,2.05,0,.66,"#73b9ae");this.sphere(l,0,2.12,0,.28,"#b6dfc6",!0);for(let h of[-1.4,1.4]){let p=this.box(l,h,.65,.2,.95,.12,2.5,"#426e80");p.rotation.z=h<0?.22:-.22;for(let v=0;v<5;v++)this.box(l,h,.73,-.8+v*.48,.9,.015,.03,"#91b4bb")}let u=new Ze;l.add(u);for(let h of[-1.2,1.2])this.cylinder(u,h,.8,-1.3,.3,1.5,"#b8b28e");let d=new Ze;a.add(d);for(let h of[-1.4,1.4])for(let p of[-1.4,1.4])this.box(d,h,.6,p,.18,1.2,.18,"#b3986c");this.label(d,"BUILD",0,1.2,0,2.5,"#6f7b5c"),this.label(a,i.name,0,3.5,0,5.8),a.userData={built:l,scaffold:d,upgrades:u,rotor:c},this.bind(a,"machine",s,i.name),this.machineGroups.push(a)});for(let[i,s,r,a]of[["research","scientist",0,5],["factory","technician",-4,3],["launch","explorer",-3,4]]){let o=this.person("#a0b4bc");o.position.set(r,0,a),this.areaGroups[i].add(o),this.bind(o,"npc",s,s.charAt(0).toUpperCase()+s.slice(1)),this.npcs.push(o)}this.secretObject(this.areaGroups.lab,-9,4,"tunnel"),this.secretObject(this.areaGroups.deep,-8,-7,"terminal"),this.secretObject(this.areaGroups.dimension,4,7,"hidden"),lt.forEach((i,s)=>{for(let r=0;r<5;r++){let a=[[-8,-2],[8,3],[-8,7],[3,-8],[-3,-7]][r],o=new xt(new _n(.25),this.mat("#e3c276",!0));o.position.set(i.x+a[0],.5,i.z+a[1]),this.scene.add(o),o.userData.shard=s*5+r,this.shards.push(o),this.bind(o,"shard",s*5+r,"Collect energy shard")}})}secretObject(e,t,i,s){let r=this.box(e,t,.25,i,.8,.5,.8,"#b99773");this.bind(r,"secret",s,"Inspect hidden supply")}person(e){let t=new Ze;return this.cylinder(t,0,.4,0,.18,.65,e),this.sphere(t,0,.9,0,.22,"#e0c49c"),this.cylinder(t,0,1.08,0,.28,.1,"#b19a70"),t}buildArenas(){this.arenaRoots={};for(let[e,t,i]of[["target",0,70],["memory",34,70],["catch",68,70],["parkour",108,70],["boss",-34,70]]){let s=new Ze;s.position.set(t,0,i),this.scene.add(s),this.arenaRoots[e]=s,this.box(s,0,-.2,0,22,.4,20,"#c8c4a1"),this.box(s,0,.02,0,20,.06,18,"#e4d4aa");for(let r of[-10.5,10.5])this.box(s,r,.35,0,.18,.7,20,"#9aaf87");this.label(s,e==="parkour"?"Reactor relay":e==="memory"?"Reactor stabilisation":e==="target"?"Target garden":e==="catch"?"Crystal catch":"Boss arena",0,.7,-8,9),s.visible=!1}this.catchTray=new Ze,this.box(this.catchTray,0,.15,0,2,.25,1.5,"#638d7d"),this.box(this.catchTray,0,.35,-.7,2,.3,.15,"#b7ceb0"),this.arenaRoots.catch.add(this.catchTray),this.parkourPlatforms=[]}sync(){let e=this.state.s;for(let i of lt){let s=e.areas.includes(i.id);this.areaGroups[i.id].visible=s,this.plotGroups[i.id].userData.sealed.visible=!s,this.plotGroups[i.id].children[0].material=this.mat(s?"#97ba77":"#b9c59e")}this.machineGroups.forEach((i,s)=>{let r=e.machines[s];i.userData.built.visible=r>0,i.userData.scaffold.visible=!r,i.userData.upgrades.visible=r>=10,i.userData.level=r,i.userData.built.scale.setScalar(1+Math.min(.28,Math.log10(r+1)*.1))}),this.shards.forEach((i,s)=>i.visible=!e.collected.includes(s)&&e.areas.includes(lt[Math.floor(s/5)].id));let t=zi.find(i=>i[0]===e.skin);this.coreSphere.material=this.mat(t[2],!0),this.coreRings.forEach((i,s)=>i.visible=s<2+Math.min(2,Math.floor(Math.log10(Math.max(1,e.lifetime))/3))),this.droneSync(),this.renderer.shadowMap.needsUpdate=!0}droneSync(){let e=this.state.s.equipped.join(",");if(this.droneKey!==e){this.droneKey=e,this.droneGroup.clear();for(let t of this.state.s.equipped){let i=new Ze;this.droneGroup.add(i),this.sphere(i,0,0,0,.2,Si[t][2]),this.ring(i,0,0,0,.35,Si[t][2])}}}applySettings(){let e=this.state.s.settings;this.renderer.setPixelRatio(Math.min(devicePixelRatio,{low:.8,medium:1,high:1.5,ultra:2}[e.quality])),this.renderer.shadowMap.enabled=e.shadows&&e.quality!=="low",this.renderer.shadowMap.needsUpdate=!0,this.sun.intensity=e.lighting?2.1:1.5,this.machineGroups.forEach(t=>t.userData.built.children[0].material=this.mat(e.machineColor)),this.resize()}resize(){let e=innerWidth/innerHeight;this.camera.left=-this.size*e/2,this.camera.right=this.size*e/2,this.camera.top=this.size/2,this.camera.bottom=-this.size/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}frame(){let e=innerWidth/innerHeight;this.camera.left=-this.size*e/2,this.camera.right=this.size*e/2,this.camera.top=this.size/2,this.camera.bottom=-this.size/2,this.camera.updateProjectionMatrix(),this.camera.position.copy(this.target).add(new Fi(0,42,32)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}input(){let e=null,t=new Map,i=null,s=r=>{this.pointer.x=r.clientX,this.pointer.y=r.clientY,this.pointer.inside=!0};this.canvas.addEventListener("pointerdown",r=>{if(!this.paused){if(s(r),t.set(r.pointerId,{x:r.clientX,y:r.clientY}),this.canvas.setPointerCapture(r.pointerId),t.size===2){let[a,o]=[...t.values()];i={distance:Math.hypot(a.x-o.x,a.y-o.y),size:this.goalSize},e=null;return}e={id:r.pointerId,x:r.clientX,y:r.clientY,gx:this.goal.x,gz:this.goal.z,moved:!1,button:r.button}}}),this.canvas.addEventListener("pointermove",r=>{if(s(r),t.has(r.pointerId)&&t.set(r.pointerId,{x:r.clientX,y:r.clientY}),i&&t.size===2){let[l,c]=[...t.values()];this.goalSize=Math.max(17,Math.min(100,i.size*i.distance/Math.max(10,Math.hypot(l.x-c.x,l.y-c.y))));return}if(!e)return;let a=r.clientX-e.x,o=r.clientY-e.y;if(Math.hypot(a,o)>6&&(e.moved=!0),e.moved&&!this.arena){let l=this.size/innerHeight;this.goal.x=Math.max(-75,Math.min(75,e.gx-a*l)),this.goal.z=Math.max(-45,Math.min(48,e.gz-o*l*1.26))}}),this.canvas.addEventListener("pointerup",r=>{if(t.delete(r.pointerId),i){i=null,e=null;return}e&&e.id===r.pointerId&&!e.moved&&e.button===0&&(this.pick(),this.current?this.interact():this.state.emit("groundclick",this.groundPointer())),e=null}),this.canvas.addEventListener("pointercancel",()=>{e=null,i=null,t.clear()}),this.canvas.addEventListener("pointerleave",()=>{e||(this.pointer.inside=!1)}),this.canvas.addEventListener("wheel",r=>{this.paused||(r.preventDefault(),this.zoom(r.deltaY>0?1.1:1/1.1))},{passive:!1}),this.canvas.addEventListener("contextmenu",r=>r.preventDefault()),document.addEventListener("keydown",r=>{/INPUT|SELECT|TEXTAREA/.test(r.target.tagName)||(this.keys[r.code]=!0,r.code==="Home"&&!this.paused&&this.teleport("lab"))}),document.addEventListener("keyup",r=>this.keys[r.code]=!1),window.addEventListener("blur",()=>this.keys={})}zoom(e){this.goalSize=Math.max(17,Math.min(100,this.goalSize*e))}overview(){this.arena=null,this.goal.set(0,0,-14),this.goalSize=Math.max(59,130/(innerWidth/innerHeight)),this.toggleArenas()}home(){this.teleport(this.zone||"lab")}teleport(e){let t=lt.find(i=>i.id===e);t?(this.arena=null,this.zone=e,this.goal.set(t.x,0,t.z),this.player.set(t.x,0,t.z),this.goalSize=Math.max(29,26/(innerWidth/innerHeight))):this.arenaRoots[e]&&(this.arena=e,this.goal.copy(this.arenaRoots[e].position),this.goalSize=Math.max(e==="parkour"?31:28,25/(innerWidth/innerHeight)),this.player.copy(this.goal)),this.target.copy(this.goal),this.size=this.goalSize,this.frame(),this.toggleArenas(),this.current=null,this.keys={},this.state.emit("zone",t?t.name:e==="parkour"?"Reactor relay":e.charAt(0).toUpperCase()+e.slice(1))}toggleArenas(){for(let[e,t]of Object.entries(this.arenaRoots))t.visible=this.arena===e;this.renderer.shadowMap.needsUpdate=!0}allowed(){return!0}groundPointer(){this.ray.setFromCamera(new De(this.pointer.x/innerWidth*2-1,-this.pointer.y/innerHeight*2+1),this.camera);let e=new Fi;return this.ray.ray.intersectPlane(new ei(new Fi(0,1,0),0),e)?e:null}pick(){if(this.current=null,!(!this.pointer.inside||this.paused)){this.ray.setFromCamera(new De(this.pointer.x/innerWidth*2-1,-this.pointer.y/innerHeight*2+1),this.camera);for(let e of this.ray.intersectObjects(this.interactables,!0)){let t=!0,i=e.object;for(;i;)i.visible||(t=!1),i=i.parent;if(!t)continue;let s=e.object.userData.interactable;if(s){if(this.arena&&!["target","memory","boss","shield","relay","event"].includes(s.action))continue;this.current=s;break}}}}interact(){!this.paused&&this.current&&this.state.emit("interact",this.current)}addTarget(e,t,i,s,r=1/0){this.scene.add(e),this.bind(e,t,i,s,r)}removeTarget(e){this.scene.remove(e);let t=this.interactables.indexOf(e);t>=0&&this.interactables.splice(t,1)}pulse(){this.corePulse=.16,this.burst(new Fi(0,1.8,-2),"#91d8bc",8)}burst(e,t,i=10){if(!(!this.state.s.settings.particles||this.state.s.settings.reduced))for(let s=0;s<i&&this.particles.length<70;s++){let r=new xt(this.geometry.sphere,this.mat(t));r.position.copy(e),r.scale.setScalar(.05),this.scene.add(r),this.particles.push({m:r,v:new Fi((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3),life:.65})}}update(e){this.clock+=e;let t=this.state.s.settings.reduced;if(!this.paused&&!this.arena){let i=e*this.size*.6;this.keys.ArrowLeft&&(this.goal.x-=i),this.keys.ArrowRight&&(this.goal.x+=i),this.keys.ArrowUp&&(this.goal.z-=i),this.keys.ArrowDown&&(this.goal.z+=i)}if(this.target.lerp(this.goal,t?1:1-Math.exp(-e*8)),this.size+=(this.goalSize-this.size)*(t?1:1-Math.exp(-e*9)),this.frame(),t||(this.coreRings.forEach((i,s)=>{i.rotation.y+=e*(.3+s*.15),i.rotation.z+=e*.12}),this.coreSphere.position.y=1.65+Math.sin(this.clock*2)*.05,this.machineGroups.forEach(i=>i.userData.rotor.rotation.z+=e*(.5+Math.log2((i.userData.level||0)+1)*.2)),this.shards.forEach(i=>{i.rotation.y+=e,i.position.y=.5+Math.sin(this.clock*2+i.userData.shard)*.06})),this.corePulse=Math.max(0,(this.corePulse||0)-e),this.core.scale.setScalar(1+this.corePulse),this.droneGroup.children.forEach((i,s)=>{let r=this.clock*.6+s*2;i.position.set(this.goal.x+Math.cos(r)*3,2,this.goal.z+Math.sin(r)*3)}),this.particles=this.particles.filter(i=>(i.m.position.addScaledVector(i.v,e),i.life-=e,i.life<=0?(this.scene.remove(i.m),!1):!0)),this.arena==="catch"&&!this.paused){let i=this.groundPointer();i&&(this.player.x=Math.max(59,Math.min(77,i.x)),this.player.z=Math.max(63,Math.min(77,i.z)),this.catchTray.position.set(this.player.x-68,.1,this.player.z-70))}if(this.pick(),this.hoverRing.visible=!!this.current&&!this.arena,this.canvas.style.cursor=this.current?"pointer":this.arena==="catch"?"crosshair":"grab",this.current){let i=new Fi;this.current.obj.getWorldPosition(i),this.hoverRing.position.set(i.x,.11,i.z),this.hoverRing.scale.setScalar(this.current.action==="core"?1.55:this.current.action==="machine"?1.8:.8)}this.renderer.render(this.scene,this.camera)}};var oo=class{constructor(e,t){this.state=e,this.world=t,this.active=null,this.objects=[],this.event=null,this.eventObjects=[],this.nextEvent=Date.now()+9e4,e.on((i,s)=>{i==="interact"&&this.interact(s)})}clear(){this.objects.forEach(e=>this.world.removeTarget(e)),this.objects=[],this.active=null,this.state.emit("activity",null)}leave(){this.clear(),this.world.teleport("lab")}object(e,t,i,s){return this.objects.push(e),this.world.addTarget(e,t,i,s),e}start(e){this.clear(),this.world.teleport(e);let t=Date.now(),i=this.world;this.active={kind:e,start:t,end:t+(e==="memory"?18e4:e==="parkour"?45e3:e==="boss"?6e4:3e4),score:0,items:[],spawn:0,falls:0};let s=this.active;if(e==="target")for(let r=0;r<5;r++){let a=new Ze;i.cylinder(a,0,.35,0,.85,.3,"#62b7c1"),i.ring(a,0,.53,0,.55,"#eaf7d6"),this.object(a,"target",r,"Click target"),this.retarget(a),s.items.push(a)}if(e==="memory"&&(s.sequence=[],s.index=0,s.round=0,s.phase="wait",s.next=t+600,["#71adb2","#a595bc","#d6b160","#7baf7a"].forEach((r,a)=>{let o=new Ze;o.position.set(34+(a%2?3:-3),0,70+(a<2?-3:3)),i.box(o,0,.3,0,4,.5,3.5,r),o.children[0].material=o.children[0].material.clone(),i.label(o,String(a+1),0,.9,0,1.3),this.object(o,"memory",a,"Panel "+(a+1)),s.items.push(o)}),this.memoryNext()),e==="parkour"&&(s.step=0,s.phaseStart=t,[[-7,3],[-3,3],[1,3],[5,3],[7,0],[3,0],[-1,0],[-5,0],[-7,-3],[-3,-3],[1,-3],[5,-3]].forEach(([a,o],l)=>{let c=new Ze;c.position.set(108+a,0,70+o),i.box(c,0,.2,0,2.5,.4,2,"#a9ae8d"),i.label(c,String(l+1),0,.7,0,1.15),this.object(c,"relay",l,"Relay "+(l+1)),s.items.push(c)})),e==="boss"){s.tier=this.state.s.stats.bosses,s.name=Jl[Math.min(6,s.tier)]+(s.tier>6?" "+(s.tier-5):""),s.max=Math.max(100,this.state.manual*35+this.state.cps*8)*(1+s.tier*.2)*(1+this.state.s.reality),s.hp=s.max,s.warning=!1,s.nextAttack=t+6e3;let r=new Ze;r.position.set(-34,1.4,68),i.sphere(r,0,0,0,1.6,"#aa798f");for(let o=0;o<3;o++)i.ring(r,0,0,0,2+o*.25,"#d9b2b1",o*.7);this.object(r,"boss",null,"Attack "+s.name),s.boss=r;let a=new Ze;a.position.set(-34,0,75),i.cylinder(a,0,.35,0,1.4,.6,"#7c9da6"),i.label(a,"SHIELD",0,1.2,0,3.2),this.object(a,"shield",null,"Activate shield when the attack warning appears"),s.shield=a}this.state.emit("activity",s),this.state.notice({target:"Click targets: blue +1, purple +3, gold +10, red \u22123.",memory:"Watch the four panels, then click them in the same order.",catch:"Move your pointer or finger to guide the tray under falling crystals.",parkour:"Click the numbered relays in order when the next one turns green.",boss:"Click the boss to attack. Click SHIELD when an attack warning appears."}[e])}retarget(e){let t=Math.random(),i=t<.12?"red":t<.2?"gold":t<.4?"purple":"blue";e.userData.type=i,e.children[0].material=this.world.mat({red:"#c77b78",gold:"#d9b251",purple:"#a18bbe",blue:"#68acbb"}[i]),e.position.set((Math.random()-.5)*15,0,70+(Math.random()-.5)*11)}memoryNext(){let e=this.active;!e||e.kind!=="memory"||(e.round++,e.sequence.push(Math.floor(Math.random()*4)),e.index=0,e.showIndex=0,e.phase="show",e.next=Date.now()+600,e.lit=-1)}lightPanel(e){let t=this.active;!t||t.kind!=="memory"||(t.items.forEach((i,s)=>{let r=i.children[0].material;r.emissive.set(s===e?"#f0e9bc":"#000000"),r.emissiveIntensity=s===e?.6:0,i.children[0].scale.y=s===e?.9:.5}),t.lit=e)}interact(e){if(e.action==="event"){this.collectEvent(e.data);return}let t=this.active;if(!(!t||Date.now()>t.end)){if(e.action==="target"&&t.kind==="target"){let i=t.items[e.data];t.score=Math.max(0,t.score+{blue:1,purple:3,gold:10,red:-3}[i.userData.type]),this.world.burst(i.position,"#f5e7bc",7),this.retarget(i),this.state.emit("sound",500)}if(e.action==="memory"&&t.kind==="memory"&&t.phase==="input"){let i=e.data;if(this.lightPanel(i),t.unlight=Date.now()+180,this.state.emit("sound",300+i*150),i!==t.sequence[t.index]){this.state.s.stats.memory=Math.max(this.state.s.stats.memory,t.round-1),this.finish((t.round-1)*4,`${t.round-1} sequences completed.`);return}t.index++,t.index===t.sequence.length&&(this.state.s.stats.memory=Math.max(this.state.s.stats.memory,t.round),t.round===8?this.finish(40,"Perfect stabilisation. All eight sequences completed."):(t.phase="wait",t.next=Date.now()+600))}if(e.action==="relay"&&t.kind==="parkour"){let i=(Date.now()-t.phaseStart)%1400<900;if(e.data!==t.step||!i){t.end-=2e3,this.state.notice("Wait for the next green relay. \u22122 seconds.");return}if(t.items[t.step].children[0].material=this.world.mat("#679580"),t.step++,t.score=t.step*3,this.state.emit("sound",350+t.step*30),t.step===12){let s=(Date.now()-t.start)/1e3;this.state.s.stats.parkour=this.state.s.stats.parkour?Math.min(s,this.state.s.stats.parkour):s,this.finish(Math.max(15,45-Math.floor(s/2)),`All 12 relays linked in ${s.toFixed(1)} seconds.`)}}e.action==="shield"&&t.kind==="boss"&&t.warning&&(t.warning=!1,t.nextAttack=Date.now()+6e3,this.state.notice("Attack blocked"),this.state.emit("sound",650)),e.action==="boss"&&t.kind==="boss"&&(t.hp-=(this.state.manual+this.state.cps*.15)*(1+(this.state.fx.bossDamage||0)),this.world.burst(t.boss.position,"#e5c599",6),this.state.emit("sound",140),t.hp<=0&&(this.state.s.stats.bosses++,this.state.q("boss"),this.state.s.cores++,this.state.s.coreTotal++,this.state.addPoints(2),this.state.s.dust+=10,this.finish(25,"Boss defeated \xB7 +1 Quantum Core \xB7 +2 Skill Points \xB7 +10 stardust")))}}finish(e,t){let i=this.active?.kind;if(!i)return;this.state.s.stats.games++,e>0&&this.state.s.stats.wins++,this.state.q("game");let s=Math.max(0,Math.min(40,Math.floor(e))),r=Math.max(100,this.state.cps*3)*Math.min(60,e);this.state.s.tokens+=s,this.state.gain(r),this.state.xp(Math.min(250,e*5)),this.clear(),this.state.progress(),this.state.save(),this.state.emit("result",{kind:i,score:e,tokens:s,energy:r,message:t})}spawnEvent(){if(this.event||this.active||this.state.s.lifetime<500)return;let e=["surge","storm","golden",...this.state.s.rebirths?["invasion"]:[]],t=e[Math.floor(Math.random()*e.length)];if(this.event={kind:t,end:Date.now()+45e3,left:t==="storm"?5:t==="invasion"?4:1},t==="surge"){this.state.addBoost("passive",5,30),this.event.end=Date.now()+3e4,this.state.notice("Power surge \xB7 5\xD7 production for 30 seconds");return}for(let i=0;i<this.event.left;i++){let s=new Ze;s.position.set(-3+i*1.8,1,1.5),this.world.sphere(s,0,0,0,.4,t==="invasion"?"#a48ab3":"#dfbc66"),this.world.ring(s,0,0,0,.65,t==="invasion"?"#b69ac4":"#edd697"),this.world.addTarget(s,"event",i,t==="invasion"?"Disrupt void anchor":"Collect bonus energy"),this.eventObjects.push(s)}this.state.notice(t==="invasion"?"Void anchors appeared in Origin. Click all four.":"Bonus visitors appeared near the energy core. Click to collect.")}collectEvent(e){let t=this.event,i=this.eventObjects[e];!t||!i||!i.visible||t.end<Date.now()||(i.visible=!1,t.left--,this.state.gain(Math.max(500,this.state.cps*30)*(1+(this.state.fx.rare||0))),this.world.burst(i.position,"#e5c380",8),t.left===0&&(this.state.s.stats.events++,this.state.s.dust+=t.kind==="invasion"?20:5,t.kind==="invasion"&&this.state.unlockSkin("void"),this.state.notice("Event complete \xB7 energy and stardust collected"),this.clearEvent()))}clearEvent(){this.eventObjects.forEach(e=>this.world.removeTarget(e)),this.eventObjects=[],this.event=null}update(e){let t=Date.now(),i=this.active,s=this.world;if(i){if(t>=i.end){this.finish(["target","catch","parkour"].includes(i.kind)?i.score:0,i.kind==="boss"?"The boss escaped.":`Time is up. ${i.score} points scored.`);return}if(i.kind==="memory"&&(i.unlight&&t>i.unlight&&(this.lightPanel(-1),i.unlight=0),t>=i.next&&(i.phase==="show"?i.lit>=0?(this.lightPanel(-1),i.next=t+240):i.showIndex<i.sequence.length?(this.lightPanel(i.sequence[i.showIndex++]),this.state.emit("sound",300+i.lit*150),i.next=t+650):(i.phase="input",i.next=1/0):i.phase==="wait"&&this.memoryNext())),i.kind==="catch"){if(i.spawn-=e,i.spawn<=0){i.spawn=.5;let r=Math.random(),a=r<.02?15:r<.1?8:r<.25?5:1,o=new xt(new _n(.35),s.mat(a===15?"#a28bb7":a===8?"#a5c7cb":a===5?"#d8b566":"#86bca0"));o.position.set(68+(Math.random()-.5)*15,5.5,70+(Math.random()-.5)*11),s.scene.add(o),this.objects.push(o),i.items.push({m:o,value:a})}i.items=i.items.filter(r=>{r.m.position.y-=e*2.4,r.m.rotation.y+=e;let a=r.m.position;return a.y<.8&&Math.abs(a.x-s.player.x)<1.5&&Math.abs(a.z-s.player.z)<1.3?(i.score+=r.value,s.scene.remove(r.m),!1):a.y<0?(s.scene.remove(r.m),!1):!0})}if(i.kind==="parkour"){let r=(t-i.phaseStart)%1400<900;i.items.forEach((a,o)=>a.children[0].material=s.mat(o<i.step?"#7fa58c":o===i.step?r?"#90c77d":"#ddb85e":"#bbb79a"))}i.kind==="boss"&&(i.boss.rotation.y+=e*.35,!i.warning&&t>i.nextAttack&&(i.warning=!0,i.warningEnd=t+2e3),i.warning&&t>i.warningEnd&&(i.warning=!1,i.end-=3e3,i.nextAttack=t+6e3,this.state.notice("Attack hit \xB7 \u22123 seconds. Click SHIELD during warnings.")),i.shield.children[0].material=s.mat(i.warning?"#ddb55e":"#7c9da6"))}t>this.nextEvent&&(this.spawnEvent(),this.nextEvent=t+9e4+Math.random()*6e4),this.event&&(t>this.event.end?this.clearEvent():this.eventObjects.forEach(r=>r.rotation.y+=e*.5))}};var ve=n=>document.getElementById(n),Me=(n,e,t="",i=!1,s="")=>`<button data-action="${e}" ${t} ${i?"disabled":""} class="${s}">${n}</button>`,lo=class{constructor(e,t,i){this.state=e,this.world=t,this.activities=i,this.page="overview",this.treeType="main",this.selected="power-0",this.transform={x:20,y:20,scale:1},this.branch="power",this.opened=!1,this.started=!1,this.displayEnergy=e.s.energy,this.uiTimer=0,this.lastPrompt="",this.machineIndex=null,this.treeDragging=!1,this.buy=1,this.pages=[["overview","Command"],["tree","Skills"],["travel","Map"],["arcade","Arcade"],["missions","Missions"],["collection","Collection"],["rebirth","Rebirth"],["achievements","Achievements"],["stats","Records"],["settings","Settings"]],this.nav(),this.events(),e.on((s,r)=>this.signal(s,r)),ve("loadNote").textContent=e.loadError||"",this.paint()}notice(e){let t=document.createElement("div");t.className="toast",t.textContent=e,ve("toasts").append(t),ve("toasts").children.length>4&&ve("toasts").firstChild.remove(),setTimeout(()=>t.remove(),4400)}nav(){ve("menuNav").innerHTML=this.pages.map(([e,t])=>Me(t,"open",`data-page="${e}"`,!1,this.page===e?"active":"")).join("")}open(e="overview"){this.page=e,this.opened=!0,this.world.paused=!0,this.world.keys={},document.exitPointerLock?.(),ve("menu").classList.remove("hidden"),this.render()}close(){this.opened=!1,this.world.paused=!this.started,ve("menu").classList.add("hidden"),ve("dialog").close(),this.machineIndex=null,this.world.keys={}}dialog(e){this.world.paused=!0,this.world.keys={},document.exitPointerLock?.(),ve("dialogBody").innerHTML=e,ve("dialog").open||ve("dialog").showModal()}closeDialog(){ve("dialog").close(),this.machineIndex=null,this.world.paused=this.opened||!this.started}render(){this.nav();let e={overview:"Your foundry",tree:"Skill tree",travel:"Facility map",arcade:"Minigames",missions:"Missions",collection:"Collection",rebirth:"Rebirth & ascension",achievements:"Achievements",stats:"Statistics",settings:"Settings",research:"Research",control:"Central machine control.",drones:"Companion drones",challenges:"Change the rules."};ve("menuTitle").textContent=e[this.page]||e.overview,ve("menuContent").style.overflow=this.page==="tree"?"hidden":"auto",ve("menuContent").innerHTML=this[this.page+"View"]?.()||this.overviewView(),this.page==="tree"&&this.bindTree(),this.paint()}signal(e,t){e==="notice"&&this.notice(t),e==="pulse"&&(this.world.pulse(t.critical),this.floater(t.value,t.critical)),e==="damage"&&this.floater(t,!0),e==="teleport"&&(this.activities.clear(),this.world.teleport(t)),e==="result"&&this.dialog(`<div class="eyebrow">ROUND COMPLETE</div><h2>${t.score?"A little closer to mastery.":"Another attempt awaits."}</h2><p>${t.message}</p><div class="big mint">+${t.tokens} tokens</div><p>+${this.state.fmt(t.energy)} energy</p><div class="actions">${Me("Return to facility","return","","","primary")}</div>`),e==="interact"&&this.interact(t),e==="zone"&&(ve("areaLabel").textContent=t),e==="skill"&&this.opened&&this.page==="tree"&&this.render()}floater(e,t=!1){let i=document.createElement("div");i.className="floater"+(t?" critical":""),i.textContent=(t?"CRITICAL +":"+")+this.state.fmt(e),i.style.left=this.world.pointer.x+"px",i.style.top=this.world.pointer.y-25+"px",ve("floaters").append(i),setTimeout(()=>i.remove(),1050)}interact(e){if(e.action==="locked"){let t=lt.find(s=>s.id===e.data),i=Rt.find(s=>s.effects[t.flag]);this.dialog(`<div class="eyebrow">FACILITY EXPANSION</div><h2>${t.name}</h2><p>Earn ${this.state.fmt(t.need)} energy this run and unlock <strong>${i.name}</strong> in Exploration.</p><div class="actions">${Me("Close","closedialog")}${Me("View required skill","requiredskill",`data-id="${i.id}"`,!1,"primary")}</div>`);return}if(!["target","memory","boss","shield","relay","event"].includes(e.action)){if(e.action==="core"){this.state.pulse();return}if(e.action==="shard"){this.state.collect(e.data);return}if(e.action==="secret"){this.state.secret(e.data);return}if(e.action==="return"){this.activities.leave();return}if(e.action==="machine"){this.machineIndex=e.data,this.showMachine();return}if(e.action==="npc"){this.showNPC(e.data);return}if(e.action==="daily"){this.supplyDialog();return}if(e.action==="travel"){this.open("travel");return}this.open(e.action)}}overviewView(){let e=this.state.s;return`<div class="notice-panel"><div class="eyebrow">${e.reality?"REALITY "+e.reality:"ORIGIN PROTOCOL"}</div><h2>Your world grows with you.</h2><p>Click the core to generate energy. Spend Skill Points, build machines and expand into new plots. Each level grants one Skill Point. Every tenth level grants three extra.</p></div><div class="grid"><div class="card"><div class="icon">\u2727</div><h3>Choose your next discovery</h3><p>${e.points} Skill Points ready to spend. 102 main-tree nodes, plus permanent and endgame research.</p>${Me("Open skill tree","open",'data-page="tree"',!1,"primary")}</div><div class="card"><div class="icon">\u2B21</div><h3>Explore the facility</h3><p>${e.areas.length} / 10 plots currently open. ${e.collected.length} / 50 energy shards found.</p>${Me("Facility map","open",'data-page="travel"')}</div><div class="card"><div class="icon">\u25C7</div><h3>Daily supply</h3><p>Energy, boosts, XP, arcade tokens, a drone, quantum cores, then an exclusive cosmetic.</p>${Me(e.daily.date===this.state.calendar()?"Collected today":"Collect supply","daily","",e.daily.date===this.state.calendar())}</div><div class="card"><div class="icon">\u25A6</div><h3>Central control</h3><p>Manage your entire machine network after opening the Research Wing.</p>${Me("Machine control","open",'data-page="control"',!e.areas.includes("research"))}</div><div class="card"><div class="icon">\u2318</div><h3>Companion drones</h3><p>Adopt, equip and evolve a crew that works around your facility.</p>${Me("Drone foundry","open",'data-page="drones"',e.lifetime<1e3)}</div><div class="card"><div class="icon">\u2691</div><h3>Challenge chamber</h3><p>Five optional rule sets. Clear each for a permanent +10% energy bonus.</p>${Me("Choose a challenge","open",'data-page="challenges"',e.rebirths<1)}</div></div>`}treeView(){let e=this.state.s,t=this.treeType,i=t==="quantum"&&!e.rebirths||t==="ascension"&&!e.ascensions||t==="mastery"&&this.state.level<100;return`<div class="tree-layout"><div class="tree-main"><div class="toolbar">${[["main","Skill tree"],["quantum","Quantum"],["ascension","Ascension"],["mastery","Mastery"]].map(([s,r])=>Me(r,"treetype",`data-id="${s}"`,!1,t===s?"selected":"")).join("")}<span style="flex:1"></span>${Me("Respec","respec","","","small")}</div>${i?`<div class="card tree-empty"><h2>${t==="quantum"?"Rebirth once":t==="ascension"?"Ascend once":"Reach level 100"}</h2><p>This tree becomes available at that milestone.</p></div>`:`<div class="tree-toolbar">${t==="main"?Tn.map(s=>Me(s[1],"branch",`data-id="${s[0]}"`,!1,this.branch===s[0]?"selected":"")).join("")+Me("Shared","branch",'data-id="cross"',!1,this.branch==="cross"?"selected":""):""}${Me("Fit","treefit")}${Me("\u2212","zoom",'data-dir="-1"')}${Me("+","zoom",'data-dir="1"')}</div><div id="treeViewport" class="tree-viewport"><div id="treeInner" class="tree-inner">${this.treeGraph()}</div></div><div class="tree-help">Choose a branch above. Drag to see more. Click a node for its effect and cost.</div>`}</div><aside class="tree-inspector card" id="inspector">${this.inspector()}</aside></div>`}treeGraph(){let e=this.treeType,t=Rt.filter(l=>l.tree===e&&(e!=="main"||l.branch===this.branch)),i=this.state.s,s=Tn.findIndex(l=>l[0]===this.branch),r=l=>e==="main"&&this.branch!=="cross"?{x:90+(l.x-s*350-36)*1.55,y:115+(l.y-140)*1.17}:e==="main"?{x:100+Number(l.id.split("-")[1])%3*210,y:130+Math.floor(Number(l.id.split("-")[1])/3)*210}:{x:l.x,y:l.y};this.treeBox={width:Math.max(...t.map(l=>r(l).x))+160,height:Math.max(...t.map(l=>r(l).y))+160};let a="";for(let l of t)for(let c of l.requires){let u=It[c];if(!t.includes(u))continue;let d=r(l),h=r(u);a+=`<path class="tree-path ${i.skills[c]?"on":""}" d="M${h.x+32},${h.y+64} C${h.x+32},${(h.y+d.y)/2+50} ${d.x+32},${(h.y+d.y)/2} ${d.x+32},${d.y}"/>`}let o=Tn[s];return`<svg width="2200" height="1600">${a}</svg>${e==="main"?`<div class="branch-label" style="left:90px;top:25px">${o?o[1]:"Shared upgrades"}<small>${o?o[3]:"Powerful upgrades that connect multiple branches"}</small></div>`:""}${t.map(l=>{let c=i.skills[l.id]||0,u=this.state.available(l),d=l.tree==="quantum"?"cores":l.tree==="ascension"?"shards":"points",h=r(l);return`<button data-action="node" data-id="${l.id}" class="node ${c?"owned":""} ${u&&i[d]>=this.state.nodeCost(l)?"available":""} ${c>=l.max?"maxed":""} ${l.keystone?"keystone":""} ${l.id===this.selected?"chosen":""}" style="left:${h.x}px;top:${h.y}px" title="${l.name} \u2014 ${l.desc}"><strong>${l.keystone?"\u2727":l.tree==="quantum"?"\u2B21":["\u03DF","\u25A6","\u25C7","\u263E","\u27F3","\u2301"][s]||"\u2723"}</strong><small>${c}/${l.max>=1e6?"\u221E":l.max}</small><span class="node-label">${l.name}</span></button>`}).join("")}`}inspector(){let e=It[this.selected];(!e||e.tree!==this.treeType)&&(e=Rt.find(o=>o.tree===this.treeType),this.selected=e.id);let t=this.state.s,i=t.skills[e.id]||0,s=e.tree==="quantum"?"cores":e.tree==="ascension"?"shards":"points",r=this.state.available(e),a=this.state.nodeCost(e);return`<div class="eyebrow" style="color:${e.color}">${e.keystone?"KEYSTONE":e.tree.toUpperCase()+" RESEARCH"}</div><div class="node-glyph" style="--node:${e.color}">${e.keystone?"\u2727":"\u2B21"}</div><h2>${e.name}</h2><p>${e.desc}</p><div class="tag">LEVEL ${i} / ${e.max>=1e6?"\u221E":e.max}</div><div class="section-title">Requirements</div>${e.requires.length?`<ul class="requirements">${e.requires.map(o=>`<li style="color:${t.skills[o]?"var(--accent)":"var(--muted)"}">${t.skills[o]?"\u2713":"\u25CB"} ${It[o].name} Lv. 1</li>`).join("")}</ul>`:"<p>Root node. Start your path here.</p>"}<div class="section-title">Research cost</div><h3>${a} ${s==="points"?"Skill Points":s==="cores"?"Quantum Cores":"Singularity Shards"}</h3><p>${this.state.fmt(t[s])} available</p>${Me(i>=e.max?"Maxed":r?"Unlock / upgrade":"Prerequisites needed","skillbuy",`data-id="${e.id}"`,!r||t[s]<a,"primary")}<p class="muted" style="font-size:10px">Skills remain after rebirth and ascension. New Reality resets them.</p>`}applyTree(){let e=ve("treeInner");e&&(e.style.transform=`translate(${this.transform.x}px,${this.transform.y}px) scale(${this.transform.scale})`)}bindTree(){let e=ve("treeViewport");if(!e)return;this.applyTree();let t=null;e.addEventListener("pointerdown",i=>{i.target.closest(".node")||(t={x:i.clientX,y:i.clientY,tx:this.transform.x,ty:this.transform.y},e.setPointerCapture(i.pointerId))}),e.addEventListener("pointermove",i=>{t&&(this.transform.x=t.tx+i.clientX-t.x,this.transform.y=t.ty+i.clientY-t.y,this.applyTree())}),e.addEventListener("pointerup",()=>t=null),e.addEventListener("wheel",i=>{i.preventDefault();let s=e.getBoundingClientRect();this.zoom(i.deltaY<0?1.12:1/1.12,i.clientX-s.left,i.clientY-s.top)},{passive:!1})}zoom(e,t,i){let s=ve("treeViewport");if(!s)return;t??(t=s.clientWidth/2),i??(i=s.clientHeight/2);let r=this.transform.scale,a=Math.max(.22,Math.min(1.8,r*e));this.transform.x=t-(t-this.transform.x)*a/r,this.transform.y=i-(i-this.transform.y)*a/r,this.transform.scale=a,this.applyTree()}fitTree(){let e=ve("treeViewport");if(!e)return;let{width:t,height:i}=this.treeBox;this.transform={x:20,y:20,scale:Math.min((e.clientWidth-40)/t,(e.clientHeight-40)/i,1.2)},this.applyTree()}travelView(){let e=this.state.s;return`<div class="notice-panel"><h3>Choose a plot to focus on.</h3><p>Plots open when you unlock their Exploration skill and earn enough energy this run. Click Focus to move the camera to any open plot. Room access resets at rebirth.</p></div><div class="grid">${lt.map(t=>{let i=e.areas.includes(t.id),s=t.flag?Rt.find(r=>r.effects[t.flag]):null;return`<div class="card ${i?"done":""}"><div class="eyebrow" style="color:${t.color}">${i?"ACCESS GRANTED":"LOCKED SECTOR"}</div><h3 style="margin-top:9px">${t.name}</h3><p>${t.subtitle}</p><div class="muted" style="font-size:11px">${t.need?`${this.state.fmt(t.need)} run energy + ${s?.name||"exploration research"}`:"Starting location"}</div><div class="cardfooter"><span class="tag">${e.discovered.includes(t.id)?"DISCOVERED":"UNKNOWN"}</span>${Me("Focus","travel",`data-id="${t.id}"`,!i,"small")}</div></div>`}).join("")}</div>`}showMachine(){let e=this.machineIndex,t=Xt[e],i=this.state.s,s=i.machines[e];this.dialog(`<div class="eyebrow">MACHINE CONTROL / ${t.area.toUpperCase()}</div><h2>${t.name}</h2><div class="big">LEVEL ${s}</div><p>${this.state.fmt(this.state.machineRate(e))} base energy/sec \xB7 ${this.state.milestone(s)}\xD7 milestone bonus</p><div class="thin-bar"><i style="width:${s%10*10}%"></i></div><p>Milestones at 10, 25, 50, 100, 250, 500 and 1,000 double production and evolve the machine.</p>${this.state.fx.automation?"":'<p class="gold">Unlock Basic automation in the skill tree first.</p>'}<div class="machine-bulk">${[1,10,100,"max"].map(r=>{let a=this.state.quote(e,r);return Me(`\xD7${r==="max"?"MAX":r} \xB7 ${this.state.fmt(a.cost)} \u03DF`,"machinebuy",`data-i="${e}" data-n="${r}"`,!this.state.fx.automation||i.energy<a.cost||!a.n,"small")}).join("")}</div><div class="actions">${Me("Close panel","closedialog")}</div>`)}controlView(){return this.state.s.areas.includes("research")?`<div class="toolbar">${[1,10,100,"max"].map(e=>Me("\xD7"+String(e).toUpperCase(),"bulk",`data-n="${e}"`,!1,this.buy===e?"selected":"")).join("")}</div><div class="grid">${Xt.map((e,t)=>{let i=this.state.quote(t,this.buy),s=this.state.s;return`<div class="card"><div class="row between"><h3>${e.name}</h3><span class="tag">LV ${s.machines[t]}</span></div><p>${this.state.fmt(this.state.machineRate(t))} base energy/sec</p><div class="cardfooter"><span class="mint">${this.state.fmt(i.cost)} \u03DF</span>${Me("Buy \xD7"+i.n,"machinebuy",`data-i="${t}" data-n="${this.buy}"`,!this.state.fx.automation||!s.areas.includes(e.area)||s.energy<i.cost||!i.n)}</div></div>`}).join("")}</div><div class="section-title">Facility infrastructure</div><div class="grid">${tr.map((e,t)=>`<div class="card"><h3>${e[0]} \xB7 Lv ${this.state.s.facility[t]}</h3><p>${e[1]} per level.</p>${Me(`${this.state.fmt(1e3*2**this.state.s.facility[t])} energy`,"facility",`data-i="${t}"`,this.state.s.energy<1e3*2**this.state.s.facility[t]||this.state.s.facility[t]>=50)}</div>`).join("")}</div>`:'<div class="card"><h2>Open the Research Wing first.</h2><p>Click any machine on the map to build or upgrade it.</p></div>'}researchView(){let e=this.state.s;return`<div class="notice-panel"><h3>Research takes time. Knowledge stays.</h3><p>Research levels survive rebirth and reset on ascension. One project can run at a time, including while offline.</p>${e.researchJob?`<p class="mint">${cn[e.researchJob.i][0]} \xB7 <span data-research-time>${Vi((e.researchJob.end-Date.now())/1e3)}</span> remaining</p>`:""}</div><div class="grid">${cn.map((t,i)=>`<div class="card"><h3>${t[0]} \xB7 Lv ${e.research[i]}</h3><p>${t[1]} per level. Research time: ${t[3]} seconds.</p>${Me(`${this.state.fmt(t[2]*2**e.research[i])} energy`,"researchbuy",`data-i="${i}"`,!!e.researchJob||e.energy<t[2]*2**e.research[i]||e.research[i]>=20)}</div>`).join("")}</div>`}arcadeView(){let e=this.state.s.lifetime<1e3;return`<div class="notice-panel"><h3>A short break from building.</h3><p>Every minigame uses clicks, taps or a pointer-controlled tray. ${e?"The arcade opens at 1K lifetime energy.":"Timers continue if you open a menu. Leaving a round forfeits its reward."}</p></div><div class="grid">${[["target","Target range","30 seconds. Click the targets. Blue +1, purple +3, gold +10, red \u22123."],["memory","Reactor stabilisation","Watch the four control panels. Repeat increasingly long sequences."],["catch","Energy catch","Move your mouse or finger to slide the tray under falling crystals. Rarer crystals score more."],["parkour","Reactor relay","Click the 12 numbered relays in order when the next one turns green. Wrong clicks cost time."],["boss","Boss chamber","Click the boss to attack. Click SHIELD during attack warnings. Rewards include Quantum Cores and Skill Points."]].map(([t,i,s])=>`<div class="card"><div class="icon">${t==="boss"?"\u2739":"\u229E"}</div><h3>${i}</h3><p>${s}</p>${Me("Play","startgame",`data-id="${t}"`,e||t==="boss"&&this.state.s.rebirths<1,"primary")}${t==="boss"&&!this.state.s.rebirths?"<p>Boss chamber opens after your first rebirth.</p>":""}</div>`).join("")}</div><div class="section-title">Arcade exchange \xB7 ${this.state.s.tokens} tokens</div><div class="grid">${[["all","2\xD7 Energy","Five minutes of doubled energy.",10],["click","5\xD7 Manual energy","60 seconds of overcharged pulses.",8],["xp","2\xD7 XP","Five minutes of accelerated learning.",15]].map(([t,i,s,r])=>`<div class="card"><h3>${i}</h3><p>${s}</p>${Me(r+" tokens","tokenboost",`data-id="${t}"`,this.state.s.tokens<r)}</div>`).join("")}</div>`}missionsView(){let e=this.state.s;return this.state.calendar(),`<div class="notice-panel"><h3>Your next assignment is out there.</h3><p>Click the engineer in Origin, scientist in Research, technician in the Factory or explorer at Launch for special assignments.</p></div>${["daily","weekly"].map(t=>`<div class="section-title">${t} missions \xB7 ${t==="daily"?"00:00 UTC":"Monday 00:00 UTC"} reset</div><div class="grid">${this.state.missions().filter(i=>i[1]===t).map(i=>{let s=e.quests[t][i[2]]||0,r=e.quests.claims.includes(i[0]);return`<div class="card ${r?"done":""}"><h3>${i[4]}</h3><div class="progress-label"><span>${this.state.fmt(Math.min(s,i[3]))} / ${this.state.fmt(i[3])}</span><span>${t==="daily"?1:3} SP</span></div><div class="thin-bar"><i style="width:${Math.min(100,s/i[3]*100)}%"></i></div><div class="cardfooter">${Me(r?"Claimed":"Claim reward","mission",`data-id="${i[0]}"`,r||s<i[3])}</div></div>`}).join("")}</div>`).join("")}`}showNPC(e){let t=this.state.npcTalk(e),i=this.state.npcValue(t),s=this.state.s.npcClaims.includes(e);this.dialog(`<div class="eyebrow">FACILITY ASSIGNMENT</div><h2>${t[1]}</h2><p>\u201C${t[2]}. A little progress today goes a long way tomorrow.\u201D</p><div class="progress-label"><span>${this.state.fmt(Math.min(i,t[4]))} / ${this.state.fmt(t[4])}</span><span>${s?"Complete":"In progress"}</span></div><div class="thin-bar"><i style="width:${Math.min(100,i/t[4]*100)}%"></i></div><p>Reward: 3 Skill Points \xB7 15 stardust \xB7 100 base XP</p><div class="actions">${Me("Goodbye","closedialog")}${Me(s?"Claimed":"Complete assignment","npcclaim",`data-id="${e}"`,s||i<t[4],"primary")}</div>`)}supplyDialog(){this.dialog(`<div class="eyebrow">DAILY SUPPLY</div><h2>A little help from the stars.</h2><p>Day 1: energy \xB7 Day 2: boost \xB7 Day 3: XP \xB7 Day 4: tokens \xB7 Day 5: drone \xB7 Day 6: quantum core \xB7 Day 7: Galaxy skin + 25 stardust.</p><div class="actions">${Me("Later","closedialog")}${Me(this.state.s.daily.date===this.state.calendar()?"Collected":"Collect","daily","",this.state.s.daily.date===this.state.calendar(),"primary")}</div>`)}collectionView(){let e=this.state.s;return`<div class="notice-panel"><div class="row between"><div><h3>Energy shards \xB7 ${e.collected.length} / 50</h3><p>Five shards are hidden in each sector. Every five grants a Skill Point. Collect all fifty for the Reality core.</p></div>${Me("Drones","open",'data-page="drones"')}</div></div><div class="section-title">Reactor appearances \xB7 ${e.dust} stardust</div><div class="grid">${zi.map(t=>`<div class="card" style="text-align:center;--skin:${t[2]}"><div class="skin-preview"></div><span class="tag">${t[3]}</span><h3 style="margin-top:8px">${e.skins.includes(t[0])?t[1]:t[4]<0?"Undiscovered signal":t[1]}</h3><p>${t[0]==="gold"?"+2% all energy.":t[4]<0?"Explore the world to discover this core.":"A cosmetic signature for your reactor."}</p>${Me(e.skin===t[0]?"Equipped":e.skins.includes(t[0])?"Equip":t[4]<0?"Locked":t[4]+" \u25C7","skin",`data-id="${t[0]}"`,e.skin===t[0]||!e.skins.includes(t[0])&&(t[4]<0||e.dust<t[4]),"small")}</div>`).join("")}</div>`}dronesView(){let e=this.state.s;return`<div class="notice-panel"><h3>Your floating crew \xB7 ${e.equipped.length} / ${e.slots} equipped</h3><p>Drones circle your focused plot. Fuse three copies into one improved drone; each evolution adds 50% to its base bonus. Up to ten evolutions per type.</p>${Me("Extra slot \xB7 50 tokens","droneslot","",e.slots>=3||e.tokens<50,"small")}</div><div class="grid">${Si.map((t,i)=>`<div class="card"><div class="icon" style="color:${t[2]}">\u2318</div><h3>${t[0]}</h3><p>${t[1]} \xB7 bonus multiplier ${(1+e.droneLevels[i]*.5).toFixed(1)}\xD7</p><div class="tag">${e.droneCopies[i]} COPIES \xB7 EVOLUTION ${e.droneLevels[i]}</div><div class="cardfooter">${Me(t[3]+" \u25C7","dronebuy",`data-i="${i}"`,e.dust<t[3],"small")}${Me(e.equipped.includes(i)?"Unequip":"Equip","droneequip",`data-i="${i}"`,e.droneCopies[i]<1,"small")}${Me("Fuse 3","dronefuse",`data-i="${i}"`,e.droneCopies[i]<3||e.droneLevels[i]>=10,"small")}</div></div>`).join("")}</div>`}rebirthView(){let e=this.state.s;return`<div class="grid"><div class="card"><div class="eyebrow">QUANTUM REBIRTH</div><div class="big gold" id="rebirthGain">+${this.state.fmt(this.state.rebirthGain)} \u2B21</div><p>Minimum ${this.state.fmt(this.state.rebirthRequirement)} energy earned this run. Resets energy, machine levels (except memory), facility infrastructure, room access, temporary boosts and current challenges.</p><p>Keeps skills, XP, research, cosmetics, drones, quests, discoveries and lifetime records.</p><div class="progress-label"><span id="rebirthProgress">${this.state.fmt(e.run)} / ${this.state.fmt(this.state.rebirthRequirement)}</span><span>${e.rebirths} rebirths</span></div>${Me("Rebirth","rebirthconfirm","",e.run<this.state.rebirthRequirement,"primary")}<div class="cardfooter">${Me("Quantum skill tree","qtree","",!e.rebirths,"small")}</div></div><div class="card"><div class="eyebrow">ASCENSION</div><div class="big">${e.cycle} / 10</div><p>Complete ten rebirths in this cycle. Gain 3 Singularity Shards and a permanent +200% energy bonus.</p><p>Also resets quantum currency and research, timed research levels, facility upgrades and cycle count. Main skills, XP, cosmetics and records remain.</p>${Me("Ascend","ascendconfirm","",e.cycle<10,"primary")}<div class="cardfooter">${Me("Ascension tree","atree","",!e.ascensions,"small")}<span class="muted">${e.shards} shards</span></div></div><div class="card"><div class="eyebrow">NEW REALITY</div><div class="big">REALITY ${e.reality}</div><p>Requires 3 ascensions, BREAK REALITY and Multiverse Access. Resets progression and all trees. Keeps cosmetics, achievements, settings and lifetime statistics.</p><p>Gain +1,000% all-energy multiplier per reality, bonus starting Skill Points and the Reality core.</p>${Me("Enter a New Reality","realityconfirm","",e.ascensions<3||!this.state.fx.breakReality||!this.state.fx.multiverse)}</div></div>`}challengesView(){let e=this.state.s;return`<div class="notice-panel"><h3>A new rule. One million energy.</h3><p>Starting resets current energy, machines, run earnings and boosts. Your skills remain. First clears grant 3 SP and +10% permanent energy; every clear grants 20 stardust.</p>${e.challenge?`<p class="mint">Active: ${e.challenge.id} \xB7 ${this.state.fmt(e.challenge.earned)} / 1M</p>${Me("Abandon","abandon")}`:""}</div><div class="grid">${[["manual","Manual only","Machine production and automatic pulses are disabled."],["machine","Machine only","Manual pulses are disabled. Start with one collector; requires Basic automation."],["instability","Reactor instability","Machine production oscillates from 30% to 170%."],["speed","Speed challenge","Reach 1M energy within 180 seconds."],["branch","One branch","During the challenge, new main-tree research must stay within your existing branch. Start after a respec for a single-branch run."]].map(([t,i,s])=>`<div class="card ${e.completedChallenges.includes(t)?"done":""}"><h3>${i}</h3><p>${s}</p>${Me("Begin challenge","challengeconfirm",`data-id="${t}"`,!!e.challenge||e.rebirths<1||t==="branch"&&new Set(Object.keys(e.skills).filter(r=>It[r].tree==="main").map(r=>It[r].branch)).size>1)}</div>`).join("")}</div>`}achievementsView(){let e=this.state.s;return`<div class="notice-panel"><h3>${e.achievements.length} / ${this.state.achDefs.length} achievements</h3><p>Each grants stardust and +0.5% permanent energy. Every five completed achievements grants a Skill Point.</p></div><div class="grid">${this.state.achDefs.map(t=>{let i=e.achievements.includes(t.id),s=Math.min(t.goal,t.value());return`<div class="card ${i?"done":""}"><div class="row between"><h3>${t.name}</h3><span class="mint">${i?"\u2713":"\u2727"}</span></div><p>${t.desc}</p><div class="progress-label"><span>${this.state.fmt(s)} / ${this.state.fmt(t.goal)}</span><span>${t.reward} \u25C7</span></div><div class="thin-bar"><i style="width:${s/t.goal*100}%"></i></div></div>`}).join("")}</div>`}statsView(){let e=this.state.s;return`<div class="grid">${[["Current energy",e.energy],["Lifetime energy",e.lifetime],["Run energy",e.run],["Energy/sec",this.state.cps],["Interactions",e.stats.clicks],["Critical interactions",e.stats.criticals],["Highest pulse",e.stats.highest],["Machine levels",e.machines.reduce((i,s)=>i+s,0)],["Machines upgraded",e.stats.purchases],["Player level",this.state.level],["Skill Points earned",e.pointsEarned],["Nodes unlocked",Object.keys(e.skills).length],["Rebirths",e.rebirths],["Ascensions",e.ascensions],["Quantum cores",e.cores],["Singularity shards",e.shards],["Bosses defeated",e.stats.bosses],["Games completed",e.stats.games],["Quests completed",e.stats.quests],["Reactor skins",e.skins.length],["Drones owned",e.droneCopies.reduce((i,s)=>i+s,0)],["Time played",Vi(e.stats.time)],["Offline energy",e.stats.offline],["Areas discovered",e.discovered.length],["Energy shards",e.collected.length+" / 50"],["Secrets discovered",e.secrets.length],["Best memory round",e.stats.memory],["Fastest relay",e.stats.parkour?e.stats.parkour.toFixed(1)+"s":"\u2014"],["Highest combo",e.stats.combo.toFixed(1)+"\xD7"],["Realities",e.reality]].map(([i,s])=>`<div class="card"><div class="muted">${i}</div><div class="stat">${typeof s=="number"?this.state.fmt(s):s}</div></div>`).join("")}</div>`}setting(e,t,i){let s=this.state.s.settings;return`<label class="settings-row"><span>${e}</span><select data-setting="${t}">${i.map(([r,a])=>`<option value="${r}" ${s[t]===r?"selected":""}>${a}</option>`).join("")}</select></label>`}toggle(e,t){return`<label class="settings-row"><span>${e}</span><input type="checkbox" data-setting="${t}" ${this.state.s.settings[t]?"checked":""}></label>`}range(e,t,i,s,r){return`<label class="settings-row"><span>${e}</span><input aria-label="${e}" type="range" data-setting="${t}" min="${i}" max="${s}" step="${r}" value="${this.state.s.settings[t]}"></label>`}settingsView(){return`<div class="grid"><div class="card"><h3>Map controls</h3><p>Click objects to interact. Drag empty ground to pan. Scroll or pinch to zoom. Use Origin to return to the core and All plots for an overview.</p>${this.toggle("Reduced motion","reduced")}${this.toggle("Show guidance","tutorial")}<p>Keyboard shortcuts: T opens Skills, M opens the Map, Tab opens the menu. Arrow keys pan the map. Home focuses Origin.</p></div><div class="card"><h3>Graphics</h3>${this.setting("Quality","quality",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"]])}${this.setting("FPS limit","fps",[[30,"30"],[60,"60"],[120,"120"]])}${this.setting("Render distance","renderDistance",[[75,"75 m"],[150,"150 m"],[250,"250 m"]])}${this.toggle("Energy particles","particles")}${this.toggle("Shadows","shadows")}${this.toggle("Dynamic lighting","lighting")}<p>Anti-aliasing is enabled. Quality controls render resolution. Motion blur is omitted for clear movement.</p></div><div class="card"><h3>Sound</h3>${this.toggle("Sound effects","sound")}${this.toggle("Ambient music","music")}${this.range("Master","master",0,1,.05)}${this.range("Sound effects","sfx",0,1,.05)}${this.range("Music","musicVolume",0,1,.05)}<p>Quiet ambient music and optional feedback for clicks and upgrades.</p></div><div class="card"><h3>Visual signature</h3>${this.setting("UI accent","accent",[["#3f7861","Forest"],["#416e82","Slate blue"],["#796489","Plum"],["#8b743c","Ochre"]])}${this.setting("Machine finish","machineColor",[["#6f8fa5","Titanium"],["#bf815e","Copper"],["#849a71","Sage"],["#9982b2","Amethyst"]])}${this.setting("Number format","notation",[["short","Compact (1.23M)"],["scientific","Scientific (1.23e6)"]])}${Me("Fullscreen","fullscreen","","","small")}</div><div class="card"><h3>Your save</h3><p>Autosaves every five seconds. Export a backup before moving folders or clearing browser data. Classic Nova Foundry v1 saves can be imported; transferable currency and XP are retained.</p><div class="toolbar">${Me("Save now","save")}${Me("Export","export")}${Me("Import","importdialog")}</div>${Me("Reset all progress","resetconfirm","","","danger small")}<p>Offline: ${Math.round(this.state.offlineEfficiency*100)}% efficiency \xB7 ${this.state.offlineHours}h maximum. Unlock Offline Production to earn while away.</p></div></div>`}events(){document.addEventListener("click",r=>{let a=r.target.closest("[data-action]");a&&!a.disabled&&this.action(a.dataset)}),document.addEventListener("change",r=>{let a=r.target.dataset.setting;a&&(this.state.s.settings[a]=r.target.type==="checkbox"?r.target.checked:["fps","renderDistance","master","sfx","musicVolume","sensitivity"].includes(a)?Number(r.target.value):r.target.value,document.documentElement.style.setProperty("--accent",this.state.s.settings.accent),document.body.classList.toggle("reduced",this.state.s.settings.reduced),this.world.applySettings(),this.world.sync(),this.state.emit("audio-settings"),this.state.save())}),document.addEventListener("keydown",r=>{if(!(/INPUT|TEXTAREA|SELECT/.test(r.target.tagName)||!this.started)){if(r.code==="Tab"||r.code==="KeyT"||r.code==="KeyM"){if(r.preventDefault(),ve("dialog").open)return;let a=r.code==="KeyT"?"tree":r.code==="KeyM"?"travel":"overview";this.opened&&this.page===a?this.close():this.open(a)}r.code==="Escape"&&this.opened&&!ve("dialog").open&&this.close()}}),ve("dialog").addEventListener("cancel",()=>{this.world.paused=this.opened,this.machineIndex=null}),ve("enter").addEventListener("click",()=>{if(this.started=!0,this.world.paused=!1,ve("welcome").classList.add("hidden"),this.state.pendingOffline){let r=this.state.pendingOffline;this.notice(`Welcome back \xB7 ${Vi(r.seconds)} away \xB7 +${this.state.fmt(r.amount)} energy`),this.state.pendingOffline=null}this.state.emit("audio-settings"),this.state.save()});let e=!1,t=ve("stick");t.addEventListener("pointerdown",r=>{e=!0,t.setPointerCapture(r.pointerId),i(r)});let i=r=>{if(!e)return;let a=t.getBoundingClientRect(),o=(r.clientX-a.left-a.width/2)/40,l=(r.clientY-a.top-a.height/2)/40,c=Math.max(1,Math.hypot(o,l));this.world.moveStick={x:o/c,y:l/c},ve("stickKnob").style.transform=`translate(${o/c*30}px,${l/c*30}px)`};t.addEventListener("pointermove",i);let s=()=>{e=!1,this.world.moveStick={x:0,y:0},ve("stickKnob").style.transform=""};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),ve("touchJump").addEventListener("pointerdown",r=>{r.preventDefault(),this.world.keys.Space=!0});for(let r of["pointerup","pointercancel"])ve("touchJump").addEventListener(r,()=>this.world.keys.Space=!1);ve("touchInteract").addEventListener("click",()=>this.world.interact())}async action(e){let t=e.action,i=e.id,s=Number(e.i),r=this.state.s;if(t==="open"){this.open(e.page);return}if(t==="close"){this.close();return}if(t==="closedialog"){this.closeDialog();return}if(t==="maphome"){this.activities.clear(),this.world.teleport("lab");return}if(t==="mapoverview"){this.activities.clear(),this.world.overview();return}if(t==="mapzoom"){this.world.zoom(Number(e.dir)>0?1/1.2:1.2);return}if(t==="node"){this.selected=i,ve("inspector").innerHTML=this.inspector(),document.querySelectorAll(".node").forEach(a=>a.classList.toggle("chosen",a.dataset.id===i));return}if(t==="requiredskill"){this.closeDialog(),this.treeType="main",this.branch="explore",this.selected=i,this.transform={x:20,y:20,scale:1},this.open("tree");return}if(t==="skillbuy"){this.state.skillBuy(i);return}if(t==="treetype"){this.treeType=i,this.selected=i==="main"?this.branch==="cross"?"cross-0":this.branch+"-0":Rt.find(a=>a.tree===i).id,this.transform={x:20,y:20,scale:i==="main"?1:.8},this.render();return}if(t==="branch"){this.branch=i,this.selected=i==="cross"?"cross-0":i+"-0",this.transform={x:20,y:20,scale:1},this.render();return}if(t==="treefit"){this.fitTree();return}if(t==="zoom"){this.zoom(Number(e.dir)>0?1.2:1/1.2);return}if(t==="respec"){this.dialog(`<h2>Rethink your path?</h2><p>Refund all main-tree Skill Points. Quantum, Ascension and Mastery trees remain. World access is recalculated and you return to Origin. XP for previously discovered nodes cannot be earned again.</p><p>${r.respecs?"Cost: 25 stardust.":"Your first respec is free."}</p><div class="actions">${Me("Keep my path","closedialog")}${Me("Respec main tree","respecdo","",r.respecs>0&&r.dust<25,"primary")}</div>`);return}if(t==="respecdo"){this.state.respec(),this.closeDialog(),this.render();return}if(t==="travel"){if(!r.areas.includes(i))return;this.activities.clear(),this.world.teleport(i),this.close();return}if(t==="machinebuy"){this.state.buyMachine(s,e.n==="max"?"max":Number(e.n)),this.machineIndex!==null?this.showMachine():this.render();return}if(t==="bulk"){this.buy=e.n==="max"?"max":Number(e.n),this.render();return}if(t==="facility"){this.state.facilityBuy(s),this.render();return}if(t==="researchbuy"){this.state.startResearch(s),this.render();return}if(t==="startgame"){if(r.lifetime<1e3||i==="boss"&&!r.rebirths)return;this.close(),this.activities.start(i);return}if(t==="return"){this.closeDialog(),this.close(),this.activities.leave();return}if(t==="tokenboost"){let a={all:10,click:8,xp:15};if(r.tokens<a[i])return;r.tokens-=a[i],this.state.addBoost(i,i==="click"?5:2,i==="click"?60:300),this.notice("Boost activated"),this.render();return}if(t==="mission"){this.state.claimMission(i),this.render();return}if(t==="npcclaim"){this.state.npcClaim(i),this.closeDialog();return}if(t==="daily"){this.state.dailyClaim(),ve("dialog").open&&this.closeDialog(),this.opened&&this.render();return}if(t==="skin"){this.state.buySkin(i),this.render();return}if(t==="outfit"){r.outfit=s,this.render();return}if(t==="dronebuy"){this.state.droneBuy(s),this.render();return}if(t==="dronefuse"){this.state.droneFuse(s),this.render();return}if(t==="droneequip"){r.equipped.includes(s)?r.equipped=r.equipped.filter(a=>a!==s):r.droneCopies[s]&&r.equipped.length<r.slots?r.equipped.push(s):this.notice("All slots are full. Unequip a drone first."),this.world.sync(),this.render();return}if(t==="droneslot"&&r.tokens>=50&&r.slots<3){r.tokens-=50,r.slots++,this.render();return}if(t==="qtree"||t==="atree"){this.treeType=t==="qtree"?"quantum":"ascension",this.selected=t==="qtree"?"q-0":"a-0",this.transform={x:0,y:0,scale:.7},this.open("tree");return}if(["rebirthconfirm","ascendconfirm","realityconfirm"].includes(t)){let a=t.replace("confirm",""),o=a==="rebirth"?"Reset the current facility and earn "+this.state.fmt(this.state.rebirthGain)+" Quantum Cores? Main skills, research, cosmetics and lifetime records remain.":a==="ascend"?"Reset this ascension cycle, quantum research, machine levels and research projects? Gain 3 Singularity Shards and +200% permanent energy.":"Reset all progression trees and the facility? Cosmetics, achievements, settings and lifetime records remain. Gain a New Reality multiplier.";this.dialog(`<h2>${a==="rebirth"?"Reignite your universe?":a==="ascend"?"Ascend beyond the facility?":"Create a New Reality?"}</h2><p>${o}</p><div class="actions">${Me("Keep building","closedialog")}${Me("Confirm "+a,a,"",!1,"primary")}</div>`);return}if(t==="rebirth"){if(r.run<this.state.rebirthRequirement)return;this.closeDialog(),this.close(),this.world.paused=!0,this.state.resetting=!0,ve("transition").classList.remove("hidden"),ve("transitionText").textContent="The universe is holding its breath.",this.state.emit("sound",90),setTimeout(()=>{ve("transitionText").textContent="+"+this.state.performRebirth()+" QUANTUM CORES"},2100),setTimeout(()=>{ve("transition").classList.add("hidden"),this.state.resetting=!1,this.world.paused=!1},3300);return}if(t==="ascend"){this.state.ascend()&&(this.close(),this.world.sync(),this.notice("ASCENSION COMPLETE \xB7 +3 Singularity Shards"));return}if(t==="reality"){this.state.newReality()&&(this.close(),this.world.sync());return}if(t==="challengeconfirm"){this.dialog(`<h2>Begin this challenge?</h2><p>Current energy, machine levels, run earnings and boosts reset. Earn 1M energy under the new rule to complete it.</p><div class="actions">${Me("Cancel","closedialog")}${Me("Begin","challengedo",`data-id="${i}"`,!1,"primary")}</div>`);return}if(t==="challengedo"){this.state.challengeStart(i),this.close();return}if(t==="abandon"){r.challenge=null,this.render();return}if(t==="save"){this.state.save(),this.notice(this.state.storageFailed?"Export a backup to keep your progress.":"Universe saved");return}if(t==="export"){this.state.save(),this.dialog(`<h2>Back up your universe.</h2><p>Download or copy this save before moving to another browser.</p><textarea id="saveText" aria-label="Save text"></textarea><div class="actions">${Me("Copy","copysave")}${Me("Download JSON","downloadsave")}${Me("Done","closedialog","","","primary")}</div>`),ve("saveText").value=JSON.stringify(r);return}if(t==="copysave"){try{await navigator.clipboard.writeText(ve("saveText").value),this.notice("Save copied")}catch{ve("saveText").select(),this.notice("Save selected. Press Ctrl+C / Cmd+C.")}return}if(t==="downloadsave"){let a=document.createElement("a"),o=URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"}));a.href=o,a.download="Nova-Foundry-3D-save.json",a.click(),setTimeout(()=>URL.revokeObjectURL(o),2e3);return}if(t==="importdialog"){this.dialog(`<h2>Restore your universe.</h2><p>Paste a 3D save or a Classic Nova Foundry v1 export. Validated data replaces your current progress; a local backup is kept.</p><textarea id="saveText" aria-label="Save to import"></textarea><p id="importError" class="gold"></p><div class="actions">${Me("Cancel","closedialog")}${Me("Import","importdo","","","primary")}</div>`);return}if(t==="importdo"){try{this.activities.clear(),this.activities.clearEvent(),this.state.import(ve("saveText").value),this.close(),this.world.sync(),this.notice("Save restored")}catch(a){ve("importError").textContent=a.message}return}if(t==="resetconfirm"){this.dialog(`<h2>Delete all local progress?</h2><p>This removes all 3D progression. Export a backup first if you want to keep it. Type RESET to confirm.</p><input type="text" id="resetText" aria-label="Reset confirmation"><div class="actions">${Me("Cancel","closedialog")}${Me("Delete progress","resetdo","","","danger")}</div>`);return}if(t==="resetdo"){if(ve("resetText").value!=="RESET")return;this.activities.clear(),this.activities.clearEvent(),this.state.s=An(),this.state.recompute(),this.state.save(),this.world.sync(),this.world.teleport("lab"),this.close(),this.notice("A new universe begins.");return}if(t==="fullscreen"){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{this.notice("Fullscreen unavailable in this browser.")}return}}paint(){let e=this.state.s;this.displayEnergy+=(e.energy-this.displayEnergy)*.3,Math.abs(this.displayEnergy-e.energy)<1&&(this.displayEnergy=e.energy),ve("energy").textContent=this.state.fmt(this.displayEnergy),ve("production").textContent=this.state.fmt(this.state.cps),ve("dust").textContent=this.state.fmt(e.dust),ve("cores").textContent=this.state.fmt(e.cores),ve("points").textContent=this.state.fmt(e.points),ve("playerLevel").textContent="LEVEL "+this.state.level,ve("combo").textContent=(1+this.state.combo/100*(2+(this.state.fx.combo||0))).toFixed(1)+"\xD7 pulse";let t=this.state.level,i=35*(t-1)**2,s=35*t*t;ve("xpBar").style.width=(e.xp-i)/(s-i)*100+"%",ve("menuBalance").textContent=this.state.fmt(e.energy)+" \u03DF   \xB7   "+e.points+" SP",ve("boosts").innerHTML=e.boosts.filter(d=>d.end>Date.now()).map(d=>`<span class="boost">${d.mult}\xD7 ${d.type} \xB7 ${Vi((d.end-Date.now())/1e3)}</span>`).join("");let r="YOUR FIRST SPARK",a="Click the energy core to get started.",o=Math.min(100,e.stats.clicks/5*100);if(e.stats.clicks>=5&&!this.state.fx.automation)r="A PATH OF YOUR OWN",a="Open Skills and choose Basic automation to start producing energy automatically.",o=100;else if(this.state.fx.automation&&!e.machines[0])r="LET THE MACHINES WORK",a="Click the collector in the upper-right plot. Build it for 20 energy.",o=Math.min(100,e.energy/20*100);else if(e.machines[0]){let d=lt.find(h=>!e.areas.includes(h.id));r=d?"YOUR NEXT SECTOR":"THE NEXT BEGINNING",a=d?`${d.name} \xB7 ${this.state.fmt(d.need)} run energy + ${Rt.find(h=>h.effects[d.flag])?.name}`:`Rebirth at ${this.state.fmt(this.state.rebirthRequirement)} run energy.`,o=Math.min(100,e.run/(d?d.need:this.state.rebirthRequirement)*100)}this.activities.active&&(r="ARCADE CHAMBER",a="Play directly with your mouse or touch. Use Leave minigame to return."),e.challenge&&(r="CHALLENGE / "+e.challenge.id.toUpperCase(),a=this.state.fmt(e.challenge.earned)+" / 1M energy"+(e.challenge.id==="speed"?" \xB7 "+Vi(Math.max(0,180-(Date.now()-e.challenge.start)/1e3)):"")),!e.settings.tutorial&&!this.activities.active&&(r="NOVA FOUNDRY",a=this.state.fmt(e.lifetime)+" lifetime energy \xB7 "+e.discovered.length+" sectors discovered"),ve("objectiveLabel").textContent=r,ve("objectiveText").textContent=a,ve("objectiveBar").style.width=o+"%";let l=this.world.current;ve("interaction").style.left=Math.min(innerWidth-270,this.world.pointer.x+18)+"px",ve("interaction").style.top=Math.min(innerHeight-140,this.world.pointer.y+18)+"px",ve("interaction").style.opacity=l&&!this.opened&&this.started&&!ve("dialog").open?"1":"0",ve("reticle").classList.toggle("ready",!!l),l&&(ve("interactLabel").textContent=l.label,ve("interactSub").textContent=l.action==="core"?"+"+this.state.fmt(this.state.manual*(1+this.state.combo/100*(2+(this.state.fx.combo||0))))+" energy \xB7 click to collect":l.action==="machine"?"Click to build or upgrade":"Click to open");let c=this.activities.active;ve("activityHud").classList.toggle("hidden",!c),ve("leaveGame").classList.toggle("hidden",!c),c&&(ve("activityHud").innerHTML=c.kind==="memory"?`STABILISATION \xB7 Round <strong>${c.round}/8</strong><br>${c.phase==="input"?"Your turn \xB7 Repeat the sequence":"Watch the panels"}`:c.kind==="boss"?`${c.warning?"\u26A0 Click SHIELD now":c.name}<br><strong>${this.state.fmt(Math.max(0,c.hp))}</strong> / ${this.state.fmt(c.max)} HP \xB7 ${Math.ceil((c.end-Date.now())/1e3)}s`:c.kind.toUpperCase()+` \xB7 <strong>${Math.ceil((c.end-Date.now())/1e3)}s</strong>`+(c.kind==="parkour"?` \xB7 ${c.step}/12 relays`:` \xB7 ${c.score} points`));let u=this.activities.event;if(ve("eventHud").classList.toggle("hidden",!u),u&&(ve("eventHud").textContent=u.kind.toUpperCase()+" / ORIGIN LAB \xB7 "+Vi((u.end-Date.now())/1e3)+(u.kind!=="surge"?" \xB7 "+u.left+" remaining":"")),this.opened&&this.page==="rebirth"){ve("rebirthGain").textContent="+"+this.state.fmt(this.state.rebirthGain)+" \u2B21",ve("rebirthProgress").textContent=this.state.fmt(e.run)+" / "+this.state.fmt(this.state.rebirthRequirement);let d=document.querySelector('[data-action="rebirthconfirm"]');d&&(d.disabled=e.run<this.state.rebirthRequirement)}if(this.opened&&this.page==="tree"){let d=It[this.selected],h=d.tree==="quantum"?"cores":d.tree==="ascension"?"shards":"points",p=document.querySelector('[data-action="skillbuy"]');p&&(p.disabled=!this.state.available(d)||e[h]<this.state.nodeCost(d))}document.querySelectorAll('[data-action="machinebuy"]').forEach(d=>{let h=Number(d.dataset.i),p=d.dataset.n==="max"?"max":Number(d.dataset.n),v=this.state.quote(h,p);d.disabled=!this.state.fx.automation||!e.areas.includes(Xt[h].area)||e.energy<v.cost||v.n<1,this.machineIndex!==null?d.textContent="\xD7"+(p==="max"?"MAX":p)+" \xB7 "+this.state.fmt(v.cost)+" \u03DF":p==="max"&&(d.textContent="Buy \xD7"+v.n)}),document.querySelectorAll('[data-action="mission"]').forEach(d=>{let h=this.state.missions().find(p=>p[0]===d.dataset.id);h&&(d.disabled=e.quests.claims.includes(h[0])||(e.quests[h[1]][h[2]]||0)<h[3])}),e.researchJob&&document.querySelectorAll("[data-research-time]").forEach(d=>d.textContent=Vi(Math.max(0,(e.researchJob.end-Date.now())/1e3))),this.drawMap()}drawMap(){let e=ve("minimap"),t=e.getContext("2d");t.clearRect(0,0,190,110);let i=1.35,s=95,r=65;for(let a of lt)t.fillStyle=this.state.s.areas.includes(a.id)?"#335b60":"#243541",t.fillRect(s+a.x*i-12,r+a.z*i-12,24,24),t.strokeStyle=this.state.s.areas.includes(a.id)?"#82cab5":"#415460",t.strokeRect(s+a.x*i-12,r+a.z*i-12,24,24);if(this.state.fx.scanner&&!this.world.arena){t.fillStyle="#f2d382";for(let a of this.world.shards)a.visible&&t.fillRect(s+a.position.x*i-1,r+a.position.z*i-1,2,2)}this.world.arena||(t.fillStyle="#edfff6",t.beginPath(),t.arc(s+this.world.player.x*i,r+this.world.player.z*i,3,0,Math.PI*2),t.fill()),t.fillStyle="#a2c2ca",t.font="8px Arial",t.fillText("FACILITY / "+this.state.s.areas.length+" SECTORS",10,103)}update(e){this.uiTimer+=e,this.uiTimer>.12&&(this.uiTimer=0,this.paint())}};var co=class{constructor(e,t){this.state=e,this.world=t,this.ctx=null,this.musicNodes=[],this.lastTheme="",this.lastHum=0,e.on((i,s)=>{i==="pulse"&&this.tone(s.critical?620:210,.12,this.pan(0,-1.5)),i==="sound"&&this.tone(s,.14),i==="skill"&&this.tone(780,.22),i==="machine"&&this.tone(390,.16),i==="level"&&this.tone(900,.2),i==="area"&&this.tone(280,.4),i==="audio-settings"&&this.music(!0)})}init(){try{return this.ctx??(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume(),!0}catch{return!1}}pan(e,t){let i=e-this.world.player.x,s=t-this.world.player.z;return Math.max(-1,Math.min(1,(i*Math.cos(this.world.yaw)-s*Math.sin(this.world.yaw))/8))}tone(e=300,t=.13,i=0){let s=this.state.s.settings;if(!s.sound||!s.master||!this.init())return;let r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=this.ctx.createStereoPanner();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime),r.frequency.exponentialRampToValueAtTime(Math.max(30,e*.55),this.ctx.currentTime+t),a.gain.setValueAtTime(Math.max(.001,s.master*s.sfx*.13),this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+t),o.pan.value=i,r.connect(a).connect(o).connect(this.ctx.destination),r.start(),r.stop(this.ctx.currentTime+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect()}}music(e=!1){let t=this.state.s.settings,i=this.world.arena==="boss"?"boss":this.world.zone;if(!e&&this.lastTheme===i||(this.lastTheme=i,this.musicNodes.forEach(r=>{try{r.stop(),r.disconnect()}catch{}}),this.musicNodes=[],!t.music||!t.master||!this.init()))return;let s=i==="boss"?[65.4,77.78,98]:["dimension","quantum","deep"].includes(i)?[110,130.81,164.81]:i==="factory"?[98,123.47,146.83]:[130.81,164.81,196];this.musicNodes=s.map((r,a)=>{let o=this.ctx.createOscillator(),l=this.ctx.createGain();return o.type="sine",o.frequency.value=r,l.gain.value=t.master*t.musicVolume*.028,o.connect(l).connect(this.ctx.destination),o.start(),o})}update(e){this.music(),this.lastHum+=e,this.lastHum>4&&(this.lastHum=0,this.state.s.settings.sound&&this.state.s.settings.music&&this.world.player.distanceTo({x:0,y:0,z:-1.5})<10&&this.tone(75,.4,this.pan(0,-1.5)))}};function Oh({world:n,state:e,ui:t},i){let s=n.core.constructor,r=[];function a(b,P,G,X,O=7.2,H=6.6){let z=new s;z.userData.plotId=P,z.userData.plotName=G,b.add(z);let J=n.box(z,0,-.15,0,O,.18,H,"#35443d");n.box(z,0,-.035,0,O-.3,.06,H-.3,"#26332e");for(let ne of[-O/2,O/2])n.box(z,ne,.015,0,.09,.12,H,"#829083");n.box(z,0,.015,-H/2,O,.12,.09,"#829083");for(let ne of[-1,1])n.box(z,ne*(O/4+.45),.015,H/2,O/2-.9,.12,.09,"#829083"),n.box(z,ne*.9,.13,H/2,.16,.3,.16,X,!0);n.box(z,0,-.015,H/2+.45,1.65,.06,.9,"#667267");let ie=n.label(z,G.toUpperCase(),0,.3,H/2-.48,O-.6);return ie.material.opacity=.85,r.push({id:P,name:G,parent:b,ground:z,surface:J,width:O,depth:H}),z}for(let b of lt){let P=n.plotGroups[b.id];for(let G of P.children)G!==n.areaGroups[b.id]&&(G.visible=!1)}for(let b of n.scene.children)b.isMesh&&b.geometry===n.geometry.box&&Math.abs(b.position.y+.03)<.001&&(b.visible=!1);for(let b of i){b.x=Math.abs(b.x)>10?Math.sign(b.x)*18:Math.sign(b.x)*6,b.z=b.z>4?10:b.z<-4?-10:0,b.group.position.set(b.x,0,b.z);let P=a(b.group,`department-${b.id}`,b.name,b.accent);P.traverse(G=>{G.isMesh&&(G.userData.interactable=b.record)}),b.plot=P}let o=n.machineGroups.map((b,P)=>{let G=Xt[P],X=(P%5-2)*12,O=22+Math.floor(P/5)*14;n.scene.attach(b),b.position.set(X,0,O),b.children.filter(ne=>ne.isSprite).forEach(ne=>ne.visible=!1);let H=a(b,`generator-${P}`,G.name,"#c7b777",9.3,9),z;b.traverse(ne=>{z||(z=ne.userData?.interactable)}),H.traverse(ne=>{ne.isMesh&&(ne.userData.interactable=z)});let J=n.label(H,"LOCKED PLOT",0,2.4,0,3.8);return{machine:b,plot:H,record:z,i:P,area:G.area,lockedSign:J}}),l=a(n.core,"reactor","Central reactor","#7dbbb1",4.3,5.8),c;n.core.traverse(b=>{c||(c=b.userData?.interactable)}),l.traverse(b=>{b.isMesh&&(b.userData.interactable=c)});let u=new s;n.scene.add(u);for(let b of[-14.4,-5,5,14.4])n.box(u,0,-.16,b,47,.06,1.15,"#657365");for(let b of[-24,-12,12,24])n.box(u,b,-.16,0,1.15,.06,29,"#657365");for(let b of[16,29,42])n.box(u,0,-.16,b,60,.06,1.4,"#657365");for(let b of[-30,-18,-6,6,18,30])n.box(u,b,-.16,29,1.15,.06,26,"#657365");n.box(u,0,-.16,14.2,2,.06,3.7,"#657365"),n.box(u,0,-.16,43,60,.06,1,"#47584b");for(let b=0;b<n.shards.length;b++){let P=lt[Math.floor(b/5)].id,G=o.find(X=>X.area===P);G&&n.shards[b].position.set(G.machine.position.x-3.2+b%5*1.6,.5,G.machine.position.z-3.5)}n.npcs.forEach((b,P)=>{n.scene.attach(b);let G=o[[0,3,2,6][P]||0];b.position.set(G.machine.position.x+3,0,G.machine.position.z+2.5)});function d(){for(let b of lt)n.plotGroups[b.id].userData.sealed.visible=!1;for(let b of o){let P=e.s.areas.includes(b.area);b.machine.visible=!0,b.machine.userData.built.visible=P&&e.s.machines[b.i]>0,b.machine.userData.scaffold.visible=!b.machine.userData.built.visible,b.machine.userData.scaffold.children.filter(G=>G.isSprite).forEach(G=>G.visible=P),b.lockedSign.visible=!P,b.record.action=P?"machine":"locked",b.record.data=P?b.i:b.area,b.record.label=`${Xt[b.i].name} \xB7 ${P?"dedicated generator plot":"locked plot"}`,b.plot.userData.unlocked=P}n.renderer.shadowMap.needsUpdate=!0}let h=n.sync.bind(n);n.sync=()=>{h(),d(),C()},d();let p=()=>Math.max(64,61/(innerWidth/innerHeight)),v=n.teleport.bind(n);n.teleport=b=>{v(b);let P=o.find(G=>G.area===b);b==="lab"?(n.goal.set(0,0,12),n.goalSize=p()):P&&(n.goal.copy(P.machine.position),n.goalSize=22)},n.goal.set(0,0,12),n.target.copy(n.goal),n.size=n.goalSize=p(),n.frame(),n.resize();let M=n.update.bind(n);n.update=b=>{M(b),n.goal.z=Math.max(-45,Math.min(48,n.goal.z))},n.lots=r,n.generatorLots=o;let m=new Map(i.map(b=>[b.id,[b.x,b.z]]));function f(b){let P={};for(let X of i){let O=b?.[X.id];Array.isArray(O)&&O.length===2&&O.every(Number.isFinite)&&Math.abs(O[0])<=24&&O[1]>=-18&&O[1]<=12&&(P[X.id]=O)}let G=i.map(X=>({x:P[X.id]?.[0]??m.get(X.id)[0],z:P[X.id]?.[1]??m.get(X.id)[1],width:7.2,depth:6.6}));G.push({x:0,z:-2,width:4.3,depth:5.8});for(let X=0;X<G.length;X++)for(let O=X+1;O<G.length;O++){let H=G[X],z=G[O];if(Math.abs(H.x-z.x)<(H.width+z.width)/2&&Math.abs(H.z-z.z)<(H.depth+z.depth)/2)return{}}return P}let S=e.validate.bind(e);e.validate=b=>{let P=S(b);return P.plotLayout=f(b.plotLayout),P};try{let b=JSON.parse(localStorage.getItem(wn)||"null");e.s.plotLayout=f(b?.plotLayout)}catch{e.s.plotLayout={}}function C(){for(let b of i){let P=e.s.plotLayout?.[b.id]||m.get(b.id);[b.x,b.z]=P,b.group.position.set(b.x,0,b.z)}n.renderer.shadowMap.needsUpdate=!0}C();let y=!1,T=null,E=t.adminView.bind(t);t.adminView=()=>`<div class="plot-arrange-entry"><button data-action="plotedit">Arrange building plots</button><span>Each building and generator has its own dedicated lot.</span></div>${E()}`;let I=t.action.bind(t);function x(){y=!1,T=null,document.getElementById("plotToolbar")?.remove(),e.save()}t.action=async b=>{if(b.action==="plotedit"){t.close(),y=!0;let P=document.createElement("div");P.id="plotToolbar",P.innerHTML='<span id="plotHint">Select a department, then click clear ground to move its plot.</span><button data-action="plotreset">Reset layout</button><button data-action="plotdone">Done</button>',document.body.append(P);return}if(b.action==="plotdone"){x();return}if(b.action==="plotreset"){e.s.plotLayout={},C(),T=null,e.save();return}return I(b)};let w=t.interact.bind(t);t.interact=b=>{if(y){b.department?(T=b.department,document.getElementById("plotHint").textContent=`Move ${T.name}: click clear ground in the administration district.`):t.notice("Generator plots stay in the production district. Select a department to move.");return}return w(b)},e.on((b,P)=>{var H;if(b!=="groundclick"||!y||!T||!P)return;let G=Math.round(P.x),X=Math.round(P.z);if(Math.abs(G)>24||X<-18||X>12){t.notice("Keep departments inside the administration district.");return}if(r.some(z=>{if(z.parent===T.group)return!1;let J=z.parent.position;return Math.abs(G-J.x)<(7.2+z.width)/2+.6&&Math.abs(X-J.z)<(6.6+z.depth)/2+.6})){t.notice("Leave room between this plot and its neighbours.");return}(H=e.s).plotLayout??(H.plotLayout={}),e.s.plotLayout[T.id]=[G,X],C(),T=null,e.save(),document.getElementById("plotHint").textContent="Plot moved. Select another department, or choose Done."}),document.addEventListener("keydown",b=>{b.code==="Escape"&&y&&x()});let L=t.paint.bind(t);t.paint=()=>{L(),e.fx.automation&&!e.s.machines[0]&&(document.getElementById("objectiveLabel").textContent="YOUR FIRST GENERATOR PLOT",document.getElementById("objectiveText").textContent="Click the Energy collector plot in the generator district, or manage it from the Machine Hall.")}}function Bh(n){if(!n||window.__NOVA_REDESIGN_APPLIED__)return;window.__NOVA_REDESIGN_APPLIED__=!0;let{state:e,world:t,ui:i,nodes:s=[],areas:r=[]}=n,a=R=>document.getElementById(R),o=a("menu"),l=a("menuContent"),c=a("menuTitle"),u=a("worldLabels");document.body.classList.add("department-redesign"),t.hoverRing.material.opacity=0;function d(R){let D=null;return R?.traverse?.(F=>{!D&&F.userData?.interactable&&(D=F.userData.interactable)}),D}let h=new Set(["tree","arcade","research","rebirth","drones","challenges","travel","daily"]);for(let R of t.interactables){let D=d(R);D&&h.has(D.action)&&(R.visible=!1,D.retiredNavigation=!0)}let p=[{id:"workers",page:"workers",name:"WORKER OFFICE",subtitle:"People & assignments",tooltip:"Manage workers and assignments",x:-14,z:8.5,accent:"#d8b75d",kind:"workers"},{id:"mission",page:"missions",name:"MISSION CONTROL",subtitle:"Contracts & objectives",tooltip:"Review contracts and objectives",x:-5,z:8.5,accent:"#d8814f",kind:"mission"},{id:"archive",page:"collection",name:"FOUNDRY ARCHIVE",subtitle:"Collection & discoveries",tooltip:"Browse discoveries and collection",x:5,z:8.5,accent:"#6ea77c",kind:"archive"},{id:"arcade",page:"arcade",name:"ARCADE",subtitle:"Minigames & scores",tooltip:"Play foundry minigames",x:14,z:8.5,accent:"#a071c5",kind:"arcade"},{id:"treasury",page:"treasury",name:"TREASURY",subtitle:"Economy & performance",tooltip:"Review foundry finances",x:-14,z:.5,accent:"#caa45b",kind:"treasury"},{id:"upgrade",page:"tree",name:"UPGRADE LAB",subtitle:"Improve your foundry",tooltip:"Manage the skill tree",x:-6,z:.5,accent:"#57b9b3",kind:"upgrade"},{id:"factory",page:"control",name:"MACHINE HALL",subtitle:"Machines & production",tooltip:"Manage machines and production",x:6,z:.5,accent:"#d79a53",kind:"factory"},{id:"market",page:"market",name:"MARKETPLACE",subtitle:"Drones & specialist goods",tooltip:"Trade for foundry equipment",x:14,z:.5,accent:"#69a990",kind:"market"},{id:"admin",page:"admin",name:"ADMINISTRATION",subtitle:"Records & settings",tooltip:"Open administration systems",x:-14,z:-8.5,accent:"#9ba69c",kind:"admin"},{id:"warehouse",page:"warehouse",name:"WAREHOUSE",subtitle:"Inventory & reserves",tooltip:"Inspect stored resources",x:-5,z:-8.5,accent:"#89989c",kind:"warehouse"},{id:"quantum",page:"rebirth",name:"QUANTUM FACILITY",subtitle:"Rebirth & ascension",tooltip:"Manage prestige progression",x:5,z:-8.5,accent:"#9b73d0",kind:"quantum"},{id:"research",page:"research",name:"RESEARCH CENTRE",subtitle:"New technology",tooltip:"Run research projects",x:14,z:-8.5,accent:"#668fc8",kind:"research"}],v=new Map(p.map(R=>[R.page,R])),M=t.core.constructor;function m(R,D){t.box(R,0,2.42,0,4.25,.13,3.65,D,!0),t.box(R,0,.46,1.84,3.65,.12,.08,D,!0);for(let F of[-1.15,1.15])t.box(R,F,1.35,1.83,.75,.78,.06,"#668b8b",!0)}function f(R,D){let F=D.accent;if(D.kind==="upgrade")t.cylinder(R,0,3.05,0,.18,1.25,"#5f6f69"),t.sphere(R,0,3.68,0,.42,F,!0),t.ring(R,0,3.68,0,.72,F,.35),t.ring(R,0,3.68,0,.94,F,1.25);else if(D.kind==="factory"){for(let Y of[-1.25,1.25])t.cylinder(R,Y,3.05,-.85,.28,1.65,"#59605b"),t.box(R,Y,3.92,-.85,.72,.12,.72,F,!0);t.box(R,0,.9,1.9,2.35,1.05,.12,"#555d58");for(let Y=-2;Y<=2;Y++)t.box(R,Y*.45,.9,1.98,.05,.95,.03,"#252b28")}else if(D.kind==="mission"){t.cylinder(R,0,3.05,-.25,.1,1.45,"#667069");let Y=t.ring(R,0,3.78,-.25,.82,F,.82);Y.rotation.z=.45,t.sphere(R,0,3.78,-.25,.16,F,!0),t.box(R,0,1.1,1.92,2.15,.86,.08,"#704d38")}else if(D.kind==="archive"){t.box(R,0,1.28,1.91,2.7,1.18,.08,"#6b8f81",!0),t.box(R,0,2.85,0,2.9,.24,2.5,"#29312c");for(let Y of[-1.55,1.55])t.box(R,Y,1.3,1.88,.28,1.5,.12,F,!0)}else if(D.kind==="arcade"){t.box(R,0,2.8,1.72,3.15,.52,.14,"#33233f"),t.box(R,0,2.8,1.81,2.45,.18,.05,F,!0);for(let Y of[-1.4,1.4])t.ring(R,Y,1.35,1.91,.42,F,0)}else if(D.kind==="research"){t.cylinder(R,0,2.9,0,.58,.5,"#596c77");for(let Y=0;Y<3;Y++)t.ring(R,0,3.15+Y*.25,0,.72+Y*.14,F,Y*.65);t.sphere(R,0,3.42,0,.28,F,!0)}else if(D.kind==="workers"){t.box(R,0,3.05,0,2.9,.7,2.65,"#2c332d"),t.box(R,0,3.42,1.35,2.1,.18,.12,F,!0);for(let Y of[-1.35,1.35])t.box(R,Y,1.1,1.91,.35,1.6,.08,"#8a7452")}else if(D.kind==="warehouse"){t.box(R,0,1.18,1.92,2.9,1.45,.1,"#727d7a");for(let Y=-2;Y<=2;Y++)t.box(R,Y*.55,1.18,1.99,.05,1.35,.03,"#303733");for(let Y of[-1.45,1.45])t.box(R,Y,.48,-1.35,.82,.82,.82,"#6e5c46"),t.box(R,Y,.91,-1.35,.72,.08,.72,F)}else if(D.kind==="market"){t.box(R,0,2.82,0,4.55,.18,3.95,F,!0);for(let Y of[-1.45,0,1.45])t.box(R,Y,1.05,1.9,1,.85,.12,"#52635b");t.ring(R,0,3.32,0,.65,F,0)}else if(D.kind==="treasury")t.cylinder(R,0,1.25,1.9,1.08,.18,"#7c7562"),t.ring(R,0,1.25,2.02,.82,F,0),t.box(R,0,3.02,0,3.15,.5,2.6,"#262c28"),t.box(R,0,3.31,1.38,2.2,.13,.08,F,!0);else if(D.kind==="quantum"){t.cylinder(R,0,2.95,0,.72,.42,"#555461"),t.sphere(R,0,3.35,0,.58,F,!0);for(let Y=0;Y<3;Y++)t.ring(R,0,3.35,0,.9+Y*.18,F,.4+Y*.65)}else D.kind==="admin"&&(t.box(R,0,3,0,3,.68,2.65,"#2c322e"),t.cylinder(R,0,3.95,-.3,.08,1.3,"#6e7770"),t.box(R,.55,4.35,-.3,1.1,.5,.05,F,!0))}for(let R of p){let D=new M;D.position.set(R.x,0,R.z),t.scene.add(D),t.box(D,0,.08,0,5.1,.18,4.55,"#303732"),t.box(D,0,1.35,0,4.25,2.55,3.65,"#1a211d"),m(D,R.accent),f(D,R);let F=t.ring(D,0,.18,0,2.8,R.accent);F.visible=!1;let Y=t.bind(D,R.page,null,R.name);Y.department=R,R.group=D,R.halo=F,R.record=Y;let se=document.createElement("div");se.className="world-label",se.dataset.department=R.id,se.innerHTML=`<span>${R.name}</span><small>${R.subtitle}</small><em></em>`,u.append(se),R.labelEl=se}function S(){return e.missions().filter(R=>!e.s.quests.claims.includes(R[0])&&(e.s.quests[R[1]][R[2]]||0)>=R[3]).length}function C(){let R=0;for(let D of s)if(!(D.tree!=="main"||(e.s.skills[D.id]||0)>=D.max))try{e.available(D)&&e.s.points>=e.nodeCost(D)&&R++}catch{}return R}function y(R){let D=e.s;if(R.id==="upgrade"){let F=C();return{text:F?`${F} upgrade${F===1?"":"s"} affordable`:`${D.points} skill points available`,attention:F>0}}if(R.id==="factory"){let F=D.machines.reduce((Y,se)=>Y+se,0);return{text:e.fx.automation?`${F} machine levels \xB7 ${e.fmt(e.cps)}/s`:"Automation research required",attention:!1}}if(R.id==="mission"){let F=S();return{text:F?`${F} contract reward${F===1?"":"s"} ready`:"Contracts tracked",attention:F>0}}if(R.id==="archive")return{text:`${D.collected.length} / 50 energy shards`,attention:D.collected.length>=45&&D.collected.length<50};if(R.id==="arcade")return{text:`${D.tokens} arcade tokens`,attention:!1};if(R.id==="research"){if(D.researchJob){let F=Date.now()>=D.researchJob.end;return{text:F?"Research complete!":"Research in progress",attention:F}}return{text:"Research bay idle",attention:!1}}if(R.id==="workers"){let F=(!D.npcClaims.includes("engineer")&&D.lifetime>=1e5?1:0)+(!D.npcClaims.includes("scientist")&&Object.keys(D.skills).length>=12?1:0)+(!D.npcClaims.includes("technician")&&D.machines.reduce((Y,se)=>Y+se,0)>=25?1:0)+(!D.npcClaims.includes("explorer")&&D.discovered.length>=6?1:0);return{text:F?`${F} assignment${F===1?"":"s"} ready`:"Crew assignments",attention:F>0}}if(R.id==="warehouse")return{text:`${e.offlineHours}h reserve \xB7 ${D.collected.length} shards`,attention:!1};if(R.id==="market")return{text:`${D.dust} stardust \xB7 ${D.droneCopies.reduce((F,Y)=>F+Y,0)} drones`,attention:!1};if(R.id==="treasury")return{text:`+${e.fmt(e.cps)}/s \xB7 ${e.fmt(D.energy)} energy`,attention:!1};if(R.id==="quantum"){let F=D.run>=e.rebirthRequirement;return{text:F?`Rebirth ready \xB7 +${e.fmt(e.rebirthGain)} cores`:`${e.fmt(D.run)} / ${e.fmt(e.rebirthRequirement)}`,attention:F}}return{text:`${D.achievements.length} achievements \xB7 settings`,attention:!1}}let T=0;function E(R=.016){T+=R;let D=t.current?.department||null,F=i.opened?i._activeDepartment||v.get(i.page):null;for(let Y of p){let se=D===Y,ae=F===Y,Ge=se?1.045:ae?1.025:1,Ue=e.s.settings.reduced?Ge:Y.group.scale.x+(Ge-Y.group.scale.x)*.22;Y.group.scale.setScalar(Ue),Y.halo.visible=se||ae,Y.labelEl.classList.toggle("hovered",se),Y.labelEl.classList.toggle("selected",ae);let Fe=Y.group.position.clone();Y.group.getWorldPosition(Fe),Fe.y+=4.45,Fe.project(t.camera),Fe.z>-1&&Fe.z<1&&Fe.x>-1.12&&Fe.x<1.12&&Fe.y>-1.12&&Fe.y<1.12&&t.size<78?(Y.labelEl.style.left=`${(Fe.x*.5+.5)*innerWidth}px`,Y.labelEl.style.top=`${(-Fe.y*.5+.5)*innerHeight}px`,Y.labelEl.style.setProperty("--distance-opacity",String(Math.max(.38,1-Math.max(0,t.size-46)/42)))):Y.labelEl.style.setProperty("--distance-opacity","0")}if(T>.3){T=0;for(let Y of p){let se=y(Y),ae=Y.labelEl.querySelector("em");ae.textContent=se.text,Y.labelEl.classList.toggle("attention",se.attention)}}}let I=t.update.bind(t);t.update=function(D){I(D),E(D)};let x=i.nav.bind(i);i.nav=function(){a("menuNav").innerHTML=""},x(),a("menuNav").innerHTML="";let w=i.controlView.bind(i),L=i.missionsView.bind(i),b=i.collectionView.bind(i),P=i.arcadeView.bind(i),G=i.researchView.bind(i),X=i.rebirthView.bind(i),O=i.dronesView.bind(i),H=i.settingsView.bind(i);function z(R,D,F,Y=""){return`<div class="department-intro">
      <div>
        <span class="department-kicker">${R}</span>
        <h2>${D}</h2>
        <p>${F}</p>
      </div>
      ${Y?`<div class="dept-metrics">${Y}</div>`:""}
    </div>`}function J(R,D,F=""){return`<div class="dept-metric"><span>${R}</span><strong>${D}</strong>${F?`<small>${F}</small>`:""}</div>`}i.controlView=function(){let F=t.machineGroups.map(se=>d(se)).filter(se=>se?.action==="machine").sort((se,ae)=>se.data-ae.data).map(se=>{let ae=Number(se.data),Ge=e.s.machines[ae],Ue=t.machineGroups[ae]?.parent,He=Object.entries(t.areaGroups).find(([,Tt])=>Tt===Ue)?.[0]||"lab",$e=r.find(Tt=>Tt.id===He)?.name||He,ot=e.s.areas.includes(He),vt=ot&&Ge>0,_t=ot?vt?"RUNNING":"IDLE":"OFFLINE",yt=e.quote(ae,1),st=e.quote(ae,10),ft=!e.fx.automation||!ot||e.s.energy<yt.cost||yt.n<1,U=!e.fx.automation||!ot||e.s.energy<st.cost||st.n<1;return`<article class="machine-unit">
        <div class="machine-head">
          <div>
            <span class="machine-sector">${$e}</span>
            <h3>${se.label}</h3>
          </div>
          <span class="machine-status state-${_t.toLowerCase()}">${_t}</span>
        </div>
        <div class="machine-output">
          <span>OUTPUT</span>
          <strong>${e.fmt(e.machineRate(ae))}<small>/s</small></strong>
        </div>
        <div class="machine-specs">
          <span>Level <b>${Ge}</b></span>
          <span>Milestone <b>${e.milestone(Ge)}\xD7</b></span>
        </div>
        <div class="machine-actions">
          <button data-action="factoryinspect" data-i="${ae}">Inspect</button>
          <button data-action="machinebuy" data-i="${ae}" data-n="1" ${ft?"disabled":""}>Upgrade \xD71 \xB7 ${e.fmt(yt.cost)} \u03DF</button>
          <button data-action="machinebuy" data-i="${ae}" data-n="10" ${U?"disabled":""}>\xD710 \xB7 ${e.fmt(st.cost)} \u03DF</button>
        </div>
      </article>`}).join(""),Y=J("PRODUCTION",`${e.fmt(e.cps)}/s`)+J("MACHINE LEVELS",e.s.machines.reduce((se,ae)=>se+ae,0))+J("RUN ENERGY",e.fmt(e.s.run));return`<div class="factory-interface">
      ${z("MACHINE HALL","Production floor","Monitor every production unit from one industrial control surface. Individual machines can still be inspected directly in the world.",Y)}
      ${e.fx.automation?"":'<div class="department-alert">Unlock Basic automation in the Upgrade Lab before machines can be built.</div>'}
      <div class="machine-floor">${F}</div>
      <div class="factory-subsystem-title">FACILITY INFRASTRUCTURE</div>
      <div class="infrastructure-grid">${[["Cooling system","+10% manual energy"],["Power grid","+10% passive energy"],["Network system","+1 automatic pulse/sec"],["Storage system","+1h offline reserve"],["Research network","+10% XP gain"]].map(([se,ae],Ge)=>{let Ue=e.s.facility[Ge],Fe=1e3*2**Ue;return`<article class="infrastructure-card"><span>LV ${Ue}</span><h3>${se}</h3><p>${ae} per level.</p><button data-action="facility" data-i="${Ge}" ${e.s.energy<Fe||Ue>=50?"disabled":""}>Upgrade \xB7 ${e.fmt(Fe)} \u03DF</button></article>`}).join("")}</div>
    </div>`},i.missionsView=function(){let D=S(),F=J("REWARDS READY",D)+J("COMPLETED",e.s.stats.quests)+J("STARDUST",e.fmt(e.s.dust));return`<div class="mission-interface">
      ${z("MISSION CONTROL","Contracts & objectives","Track daily and weekly contracts from the control room. Completed work can be claimed here.",F)}
      <div class="mission-supply"><span>DAILY LOGISTICS DROP</span><button data-action="daily">${e.s.daily.date===e.calendar()?"Collected today":"Collect supply"}</button></div>
      <div class="contract-board">${L()}</div>
    </div>`},i.collectionView=function(){let D=J("SHARDS",`${e.s.collected.length}/50`)+J("DISCOVERED SECTORS",`${e.s.discovered.length}/10`)+J("REACTOR SKINS",e.s.skins.length);return`<div class="archive-interface">
      ${z("FOUNDRY ARCHIVE","Discovery catalogue","A quieter gallery for shards, reactor appearances, artefacts and discoveries recovered across the facility.",D)}
      <div class="archive-gallery">${b()}</div>
    </div>`},i.arcadeView=function(){let D=J("TOKENS",e.s.tokens)+J("GAMES PLAYED",e.s.stats.games)+J("WINS",e.s.stats.wins);return`<div class="arcade-interface">
      ${z("ARCADE","Reactor recreation deck","Short skill challenges with scores, tokens and foundry rewards.",D)}
      <div class="arcade-cabinets">${P()}</div>
    </div>`},i.researchView=function(){let D=e.s.researchJob,F=J("ACTIVE PROJECT",D?"RUNNING":"IDLE")+J("PROJECT LEVELS",e.s.research.reduce((Y,se)=>Y+se,0))+J("RESEARCH RESERVE",e.fmt(e.s.energy));return e.s.areas.includes("research")?`<div class="research-interface">
      ${z("RESEARCH CENTRE","Technology projects","Research unlocks durable technological improvements and runs on its own timer.",F)}
      <div class="research-projects">${G()}</div>
    </div>`:`<div class="research-interface">
        ${z("RESEARCH CENTRE","Technology projects","The centre is physically present, but its laboratory network is still offline.",F)}
        <div class="department-lock"><span>RESEARCH NETWORK OFFLINE</span><h3>Open the Research Wing sector</h3><p>Progress through Exploration in the Upgrade Lab and earn enough run energy to bring the research network online.</p></div>
      </div>`},i.rebirthView=function(){let D=J("FOUNDRY VALUE",e.fmt(e.s.run))+J("RESTART REWARD",`+${e.fmt(e.rebirthGain)} cores`)+J("REBIRTHS",e.s.rebirths);return`<div class="quantum-interface">
      ${z("QUANTUM FACILITY","Prestige reactor","Review exactly what a restart changes before committing to a quantum rebirth or later prestige layer.",D)}
      <div class="quantum-core-panel">${X()}</div>
    </div>`},i.workersView=function(){let F=[{id:"engineer",name:"Chief Engineer",role:"Foundry Operations",trait:"Precision Planner",assignment:"Origin Laboratory",value:e.s.lifetime,goal:1e5,objective:"Generate 100K lifetime energy"},{id:"scientist",name:"Dr. Lyra",role:"Research Scientist",trait:"Systems Thinker",assignment:"Research Centre",value:Object.keys(e.s.skills).length,goal:12,objective:"Unlock 12 skill nodes"},{id:"technician",name:"Technician Omi",role:"Machine Technician",trait:"Fast Hands",assignment:"Machine Hall",value:e.s.machines.reduce((Y,se)=>Y+se,0),goal:25,objective:"Own 25 machine levels"},{id:"explorer",name:"Explorer Vega",role:"Survey Specialist",trait:"Pathfinder",assignment:"Field Operations",value:e.s.discovered.length,goal:6,objective:"Discover 6 facility areas"}].map(Y=>{let se=e.s.npcClaims.includes(Y.id),ae=Y.value>=Y.goal;return`<article class="worker-card ${ae&&!se?"ready":""}">
        <div class="worker-avatar">${Y.name.split(" ").map(Ge=>Ge[0]).join("").slice(0,2)}</div>
        <div class="worker-main">
          <span>${Y.role}</span><h3>${Y.name}</h3>
          <div class="worker-tags"><b>${Y.trait}</b><b>${Y.assignment}</b></div>
          <p>${Y.objective}</p>
          <div class="worker-progress"><i style="width:${Math.min(100,Y.value/Y.goal*100)}%"></i></div>
        </div>
        <div class="worker-side">
          <strong>${e.fmt(Math.min(Y.value,Y.goal))} / ${e.fmt(Y.goal)}</strong>
          <button data-action="npcclaim" data-id="${Y.id}" ${se||!ae?"disabled":""}>${se?"Claimed":ae?"Claim reward":"In progress"}</button>
        </div>
      </article>`}).join("");return`<div class="workers-interface">
      ${z("WORKER OFFICE","Crew roster","Review specialist roles, traits, assignments and progression rewards.",J("CREW","4")+J("ASSIGNMENTS COMPLETE",e.s.npcClaims.length))}
      <div class="worker-roster">${F}</div>
    </div>`},i.warehouseView=function(){let D=e.s,F=[["ENERGY RESERVE",e.fmt(D.energy),"Current spendable energy"],["STARDUST",e.fmt(D.dust),"Specialist currency"],["QUANTUM CORES",e.fmt(D.cores),"Prestige resource"],["ARCADE TOKENS",e.fmt(D.tokens),"Recreation exchange"],["ENERGY SHARDS",`${D.collected.length} / 50`,"Recovered discoveries"],["SINGULARITY SHARDS",e.fmt(D.shards),"Ascension resource"],["DRONE COMPONENTS",e.fmt(D.droneCopies.reduce((Y,se)=>Y+se,0)),"Companion inventory"],["REACTOR FINISHES",e.s.skins.length,"Unlocked visual signatures"]];return`<div class="warehouse-interface">
      ${z("WAREHOUSE","Foundry reserves","A scan-friendly view of resources and stored progression items.",J("OFFLINE RESERVE",`${e.offlineHours}h`)+J("STORAGE SYSTEM",`LV ${D.facility[3]}`))}
      <div class="warehouse-capacity"><span>OFFLINE RESERVE CAPACITY</span><strong>${e.offlineHours} HOURS</strong><div><i style="width:${Math.min(100,e.offlineHours/48*100)}%"></i></div></div>
      <div class="warehouse-grid">${F.map(([Y,se,ae])=>`<article class="stock-card"><span>${Y}</span><strong>${se}</strong><small>${ae}</small></article>`).join("")}</div>
    </div>`},i.treasuryView=function(){let D=e.s,F=e.cps,Y=D.lifetime?Math.min(100,D.run/D.lifetime*100):0;return`<div class="treasury-interface">
      ${z("TREASURY","Financial dashboard","A compact operational view of current energy, production and long-term foundry value.",J("NET PRODUCTION",`+${e.fmt(F)}/s`)+J("CURRENT ENERGY",e.fmt(D.energy))+J("LIFETIME VALUE",e.fmt(D.lifetime)))}
      <div class="finance-grid">
        <article class="finance-card featured"><span>NET PRODUCTION</span><strong>+${e.fmt(F)}<small>/s</small></strong><p>Passive production after current upgrades and boosts.</p></article>
        <article class="finance-card"><span>CURRENT RUN</span><strong>${e.fmt(D.run)}</strong><div class="finance-bar"><i style="width:${Y}%"></i></div><small>${Y.toFixed(1)}% of lifetime energy</small></article>
        <article class="finance-card"><span>EXPENSES</span><strong>0<small>/s</small></strong><p>Nova Foundry has no recurring machine upkeep in the current ruleset.</p></article>
        <article class="finance-card"><span>ASSET DEPTH</span><strong>${D.machines.reduce((se,ae)=>se+ae,0)}</strong><p>Total machine levels across ${D.areas.length} active sectors.</p></article>
      </div>
      <div class="treasury-ledger">
        <div><span>Lifetime energy</span><strong>${e.fmt(D.lifetime)}</strong></div>
        <div><span>Run energy</span><strong>${e.fmt(D.run)}</strong></div>
        <div><span>Stardust reserve</span><strong>${e.fmt(D.dust)}</strong></div>
        <div><span>Quantum reserve</span><strong>${e.fmt(D.cores)}</strong></div>
      </div>
    </div>`},i.marketView=function(){let D=e.s.lifetime>=1e3;return`<div class="market-interface">
      ${z("MARKETPLACE","Specialist exchange","Spend Stardust on companion drones and related specialist equipment. Core production resources are never sold automatically.",J("STARDUST",e.fmt(e.s.dust))+J("DRONES OWNED",e.s.droneCopies.reduce((F,Y)=>F+Y,0)))}
      ${D?`<div class="market-ticker"><span>FOUNDRY EXCHANGE</span><b>DRONE COMPONENTS</b><em>AVAILABLE</em></div><div class="market-listings">${O()}</div>`:'<div class="department-lock"><span>MARKET LICENSE PENDING</span><h3>Reach 1K lifetime energy</h3><p>The specialist drone exchange opens once the foundry has produced 1,000 lifetime energy.</p></div>'}
    </div>`},i.adminView=function(){let D=[["SETTINGS","Graphics, audio, controls and save management.","settings","\u2699",!1],["ACHIEVEMENTS",`${e.s.achievements.length} completed achievements.`,"achievements","\u2726",!1],["CHALLENGES",e.s.rebirths?"Optional rule modifiers and challenge runs.":"Available after your first rebirth.","challenges","\u25C7",!e.s.rebirths],["STATISTICS","Lifetime production and progression records.","stats","\u25A5",!1]];return`<div class="admin-interface">
      ${z("ADMINISTRATION","Foundry administration","Secondary systems live here instead of in a permanent \u201CMore\u201D menu.",J("ACHIEVEMENTS",e.s.achievements.length)+J("SECTORS",`${e.s.discovered.length}/10`))}
      <div class="admin-grid">${D.map(([F,Y,se,ae,Ge])=>`<article class="admin-card"><span>${ae}</span><h3>${F}</h3><p>${Y}</p><button data-action="open" data-page="${se}" ${Ge?"disabled":""}>${Ge?"Locked":"Open"}</button></article>`).join("")}</div>
    </div>`},i.settingsView=function(){return H().replace("Use Origin to return to the core and All plots for an overview.","Press Home to return to the Origin core. The world itself is the navigation map.").replace("Keyboard shortcuts: T opens Skills, M opens the Map, Tab opens the menu. Arrow keys pan the map. Home focuses Origin.","Keyboard: Arrow keys pan the map, Home focuses Origin, Esc closes a department, and holding Alt reveals extra building status.")};let ie=i.render.bind(i),ne={tree:["UPGRADE LAB","Skill tree"],control:["MACHINE HALL","Production floor"],missions:["MISSION CONTROL","Contracts & objectives"],collection:["FOUNDRY ARCHIVE","Collection & discoveries"],arcade:["ARCADE","Minigames"],research:["RESEARCH CENTRE","Technology projects"],workers:["WORKER OFFICE","Crew roster"],warehouse:["WAREHOUSE","Inventory & reserves"],market:["MARKETPLACE","Specialist exchange"],treasury:["TREASURY","Economy & performance"],rebirth:["QUANTUM FACILITY","Rebirth & ascension"],admin:["ADMINISTRATION","Administration"],settings:["ADMINISTRATION","Settings"],achievements:["ADMINISTRATION","Achievements"],challenges:["ADMINISTRATION","Challenges"],stats:["ADMINISTRATION","Statistics"],drones:["MARKETPLACE","Companion drones"]};i.render=function(){ie(),o.dataset.page=this.page;let D=ne[this.page];if(D){let F=o.querySelector(".menu-header .eyebrow");F.textContent=D[0],c.textContent=D[1]}if(this.page==="tree"&&this.treeType!=="main"){let F=o.querySelector(".menu-header .eyebrow");this.treeType==="quantum"||this.treeType==="ascension"?(F.textContent="QUANTUM FACILITY",c.textContent=this.treeType==="quantum"?"Quantum research":"Ascension research"):c.textContent="Mastery research"}a("menuNav").innerHTML="",this.page==="collection"&&l.querySelectorAll('[data-page="drones"]').forEach(F=>F.remove())};let me=i.open.bind(i);i.open=function(D="admin"){let F=v.get(D),Y=F&&!this._suppressDepartmentFocus;this._suppressDepartmentFocus=!1,!this.opened&&Y&&(this._worldReturn={x:t.goal.x,z:t.goal.z,size:t.goalSize}),Y&&(this._activeDepartment=F,t.goal.set(F.x,0,F.z),t.goalSize=Math.max(18,Math.min(23,20/Math.max(.8,innerWidth/innerHeight)))),document.body.classList.add("building-ui-open"),me(D)};let be=i.close.bind(i);i.close=function(){let D=this._worldReturn;be(),document.body.classList.remove("building-ui-open"),D&&(t.goal.set(D.x,0,D.z),t.goalSize=D.size),this._worldReturn=null,this._activeDepartment=null};let qe=i.interact.bind(i);i.interact=function(D){D.department&&(this._activeDepartment=D.department,e.emit("sound",D.department.id==="quantum"?420:310),D.department.id==="upgrade"&&(this.treeType="main",this.branch==="cross"&&(this.branch="power"))),qe(D)};let ut=i.action.bind(i);i.action=async function(D){if(D.action==="factoryinspect"){this.machineIndex=Number(D.i),this.showMachine();return}if(D.action==="npcclaim"&&this.page==="workers"){e.npcClaim(D.id),this.render();return}return(D.action==="qtree"||D.action==="atree")&&(this._suppressDepartmentFocus=!0),ut(D)};let Ye=i.paint.bind(i);i.paint=function(){Ye();let D=t.current;D?.department&&(a("interactSub").textContent=D.department.tooltip);let F=e.s;F.stats.clicks>=5&&!e.fx.automation?(a("objectiveLabel").textContent="OPEN THE UPGRADE LAB",a("objectiveText").textContent="Select the Upgrade Lab and unlock Basic automation."):e.fx.automation&&!F.machines[0]&&(a("objectiveLabel").textContent="START THE MACHINE HALL",a("objectiveText").textContent="Select the Machine Hall and build your first Energy collector."),o.dataset.page!==this.page&&(o.dataset.page=this.page)},document.addEventListener("keydown",R=>{(R.code==="AltLeft"||R.code==="AltRight")&&document.body.classList.add("info-mode"),!/INPUT|TEXTAREA|SELECT/.test(R.target.tagName)&&(R.code==="Tab"||R.code==="KeyT"||R.code==="KeyM")&&R.stopImmediatePropagation()},!0),document.addEventListener("keyup",R=>{(R.code==="AltLeft"||R.code==="AltRight")&&document.body.classList.remove("info-mode")},!0),window.addEventListener("blur",()=>document.body.classList.remove("info-mode")),Oh(n,p),E(.31),i.nav(),i.opened&&i.render()}function yg(n){console.error(n);let e=document.createElement("div");e.className="error-panel";let t=document.createElement("h1");t.textContent="The 3D renderer could not start.";let i=document.createElement("p");i.textContent="Open index.html in a browser with WebGL 2 enabled, such as Chrome, Edge or Firefox. Enable browser graphics acceleration if it is disabled. The game runs locally after extracting the whole ZIP.";let s=document.createElement("p");s.textContent=`Details: ${n.message}`,e.append(t,i,s),document.body.append(e)}try{let u=function(d){requestAnimationFrame(u);let h=Math.max(0,(d-r)/1e3);if(r=d,c||(a+=Math.min(h,.5),a<1/n.s.settings.fps))return;let p=Math.min(a,5),v=Math.min(a,.08);a=0,i.started&&(n.tick(p),t.update(Math.min(p,.2)),s.update(v),o+=p,l+=p,o>=5&&(o=0,n.save()),l>=30&&(l=0,n.calendar())),e.update(v),i.update(v)},n=new nr,e=new ao(n,document.getElementById("world")),t=new oo(n,e),i=new lo(n,e,t),s=new co(n,e);e.paused=!0,document.documentElement.style.setProperty("--accent",n.s.settings.accent),document.body.classList.toggle("reduced",n.s.settings.reduced),window.__NOVA={state:n,world:e,activities:t,ui:i,nodes:Rt,areas:lt},Bh(window.__NOVA);let r=performance.now(),a=0,o=0,l=0,c=!1;requestAnimationFrame(u),document.addEventListener("visibilitychange",()=>{if(c=document.hidden,c){n.save(),e.keys={},s.ctx?.suspend();return}n.offline(),n.pendingOffline&&(i.notice(`Offline energy collected: +${n.fmt(n.pendingOffline.amount)}`),n.pendingOffline=null),r=performance.now(),a=0,i.started&&s.ctx?.resume()}),window.addEventListener("pagehide",()=>n.save()),window.addEventListener("beforeunload",()=>n.save()),document.getElementById("world").addEventListener("webglcontextlost",d=>{d.preventDefault(),i.notice("Graphics context lost. Save your progress and reload to restore the world.")}),document.body.dataset.ready="true"}catch(n){yg(n)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
