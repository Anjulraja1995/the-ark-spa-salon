const services=[
["Deep Tissue Massage","₹3999 / ₹5999"],["Swedish Massage","₹3499 / ₹4999"],
["Aromatic Relaxation Massage","₹3000 / ₹4499"],["Lomi Lomi Massage","₹3299 / ₹4299"],
["Jet Log Recovery","₹3499 / ₹4999"],["Detox Foot Therapy","₹1499 / ₹2999"],
["Body Polishing & Therapy","₹3599 / ₹5099"],["Balinese Massage","₹3499 / ₹5299"],
["The Ark Spa Signature Massage","₹3499 / ₹4499"],["Couples Massage","₹7499"],
["Thai Herbal Oil Massage","₹4999 / ₹6999"],["Thai Massage","₹3899 / ₹5499"],
["Vietnamese Hot Stone Massage","₹7999 / ₹9999"],["Detox Abdominal Massage","₹2499 / ₹2999"],
["Moroccan Hot Oil Massage","₹3299 / ₹4299"],["Thai Herbal Massage","₹3999 / ₹5999"]
];
const offers=[["Weekend Wellness","Add approved weekend offer here."],["Signature Package","Add approved package details here."],["Festive Offer","Add approved festive offer here."]];
const $=s=>document.querySelector(s);
$("#rates-grid").innerHTML=services.map(x=>`<div class="rate"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("");
$("#service").innerHTML+=services.map(x=>`<option>${x[0]}</option>`).join("");
$("#offers-grid").innerHTML=offers.map(x=>`<article class="card"><div class="icon">✦</div><h3>${x[0]}</h3><p>${x[1]}</p><a href="#booking">Book →</a></article>`).join("");
$("#packages-grid").innerHTML=offers.map(x=>`<article class="card"><h3>${x[0]}</h3><p>${x[1]}</p><a href="#booking">Enquire →</a></article>`).join("");
$(".menu-toggle").addEventListener("click",()=>$(".nav-links").classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>$(".nav-links").classList.remove("open")));
$("#booking-form").addEventListener("submit",e=>{e.preventDefault();const msg=`Hello The Ark Spa & Salon,%0A%0AAppointment Request%0AName: ${encodeURIComponent($("#name").value)}%0AMobile: ${encodeURIComponent($("#phone").value)}%0AService: ${encodeURIComponent($("#service").value)}%0ADate: ${encodeURIComponent($("#date").value)}%0ATime: ${encodeURIComponent($("#time").value)}`;location.href=`https://wa.me/919584885121?text=${msg}`;});