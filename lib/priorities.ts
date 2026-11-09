import { Task } from "./data";
export type Priority="A"|"B"|"C"|"D";
/** Deterministisch: Pflicht bleibt A; Aufwand zählt nur für die Kapazitätsplanung. */
export const classify=(t:Task):Priority=>t.mandatory?"A":t.importance>=4&&t.urgency>=4?"A":t.importance>=4?"B":t.importance>=3&&t.urgency>=3?"C":"D";
export const weeklyHours=(t:Task)=>t.repeat==="week"?t.hours:t.repeat==="day"?t.hours*7:t.repeat==="month"?t.hours/(52.18/12):t.repeat==="year"?t.hours/52.18:0;
export const plannedWeeklyHours=(tasks:Task[])=>tasks.reduce((sum,t)=>sum+weeklyHours(t),0);
export const formatHours=(hours:number)=>`${hours.toLocaleString("de-DE",{maximumFractionDigits:1})} Std.`;
export function focusPlan(tasks:Task[],available:number){const recurring=tasks.filter(t=>t.active&&t.repeat!=="once");const mandatory=recurring.filter(t=>t.mandatory);const optional=recurring.filter(t=>!t.mandatory).sort((a,b)=>(b.importance*2+b.urgency)-(a.importance*2+a.urgency));let used=plannedWeeklyHours(mandatory);const now=[...mandatory],later:Task[]=[],skip:Task[]=[];optional.forEach(t=>{if(used+weeklyHours(t)<=available){now.push(t);used+=weeklyHours(t)}else if(classify(t)==="A"||classify(t)==="B"||t.importance>=4)later.push(t);else skip.push(t)});return{now,later,skip,mandatoryOverload:used>available};}
