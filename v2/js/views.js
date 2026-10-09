const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={dispatcher:'Dispatcher',secretary:'Office',management:'Management',technician:'Technician'};
export function roleView(user){
 const role=labels[user.role];
 if(!role)return `<section class="panel"><h1>Access not configured</h1><p>This role does not have a V2 interface yet.</p></section>`;
 const name=[user.first_name,user.last_name].filter(Boolean).join(' ');
 return `<section class="panel"><span class="tag">${escapeHtml(role)} interface</span><h1>Welcome${name?', '+escapeHtml(name):''}</h1><p>Role-based sign-in is working.</p><p class="muted">This is the V2 development screen. Your current Signature Dispatch portal remains unchanged.</p><p class="muted">Next: migrate the Technician interface and shared Work Order/Schedule Block services.</p></section>`;
}
