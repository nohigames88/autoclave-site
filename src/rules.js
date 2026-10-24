// Regras transpostas das classes OrbitalDiscovery e DiscoveryMinigame do projeto Unity.
export const melody=[0,2,1,4,3];
export function sequenceInput(round,index,note){return note===melody[index]?{correct:true,index:index+1,complete:index+1>=3+round}:{correct:false,index:0,complete:false}}
export function waveTarget(round){return {frequency:(round+2)%5,strength:(round+1)%5}}
export function waveStep(state,dt){if(state.won)return;const t=waveTarget(state.round);state.hold=state.frequency===t.frequency&&state.strength===t.strength?state.hold+dt:0;if(state.hold>1.3){state.round++;state.hold=0;state.won=state.round>=3}}
export function orbitState(){return {x:150,y:250,vx:0,vy:0,angle:0,beacons:0,won:false}}
export const beacons=[[320,160],[570,350],[790,190]];
export function orbitStep(s,dt,turn,thrust,brake){if(s.won)return;s.angle+=turn*dt*130;let r=s.angle*Math.PI/180;if(thrust){s.vx+=Math.cos(r)*dt*65;s.vy+=Math.sin(r)*dt*65}let damping=Math.exp(-(brake?3.4:.08)*dt);s.vx*=damping;s.vy*=damping;s.x+=s.vx*dt;s.y+=s.vy*dt;if(s.x<30||s.x>1070||s.y<35||s.y>470){s.x=Math.max(30,Math.min(1070,s.x));s.y=Math.max(35,Math.min(470,s.y));s.vx*=-.35;s.vy*=-.35}if(s.beacons<3&&Math.hypot(s.x-beacons[s.beacons][0],s.y-beacons[s.beacons][1])<40)s.beacons++;if(s.beacons===3&&Math.hypot(s.x-990,s.y-250)<42&&s.vx*s.vx+s.vy*s.vy<225)s.won=true}
