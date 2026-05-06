// ehl:fa Reservation Flow Controller
const state = {
  step: 1,
  stylist: null,
  services: [],
  date: null,
  time: null,
  customer: { name_kanji: '', name_kana: '', phone: '', email: '', requests: '' }
};

function showStep(n) {
  document.querySelectorAll('.step-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('step-' + n).classList.remove('hidden');
  state.step = n;
  updateNav(n);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNav(n) {
  document.querySelectorAll('.nav-step').forEach((el, i) => {
    el.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-primary');
    el.classList.add('text-outline-variant');
    if (i + 1 === n) {
      el.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-primary');
      el.classList.remove('text-outline-variant');
    }
  });
  // mobile nav
  document.querySelectorAll('.bnav-item').forEach((el, i) => {
    el.classList.remove('bg-primary-container', 'text-white', 'rounded-full', 'px-5', 'py-2.5');
    el.classList.add('text-outline-variant');
    if (i + 1 === n) {
      el.classList.add('bg-primary-container', 'text-white', 'rounded-full', 'px-5', 'py-2.5');
      el.classList.remove('text-outline-variant');
    }
  });
}

function selectStylist(name, el) {
  state.stylist = name;
  document.querySelectorAll('.stylist-card').forEach(c => {
    c.classList.remove('ring-2', 'ring-primary');
  });
  el.closest('.stylist-card').classList.add('ring-2', 'ring-primary');
}

function toggleService(name, price, el) {
  const idx = state.services.findIndex(s => s.name === name);
  if (idx >= 0) {
    state.services.splice(idx, 1);
    el.closest('.svc-card').classList.remove('border-primary', 'bg-[#ffdbce]/20');
  } else {
    state.services.push({ name, price });
    el.closest('.svc-card').classList.add('border-primary', 'bg-[#ffdbce]/20');
  }
}

function selectTime(day, time, el) {
  state.date = day;
  state.time = time;
  document.querySelectorAll('.time-btn.selected').forEach(b => {
    b.classList.remove('selected', 'bg-primary', 'text-white');
    b.classList.add('bg-white');
  });
  el.classList.add('selected', 'bg-primary', 'text-white');
  el.classList.remove('bg-white');
}

function goToStep(n) {
  if (n === 2 && !state.stylist) { alert('スタイリストを選択してください'); return; }
  if (n === 3 && state.services.length === 0) { alert('メニューを選択してください'); return; }
  if (n === 4 && (!state.date || !state.time)) { alert('日時を選択してください'); return; }
  if (n === 5) {
    state.customer.name_kanji = document.getElementById('name_kanji').value;
    state.customer.name_kana = document.getElementById('name_kana').value;
    state.customer.phone = document.getElementById('phone').value;
    state.customer.email = document.getElementById('email').value;
    state.customer.requests = document.getElementById('requests').value;
    if (!state.customer.name_kanji || !state.customer.phone || !state.customer.email) {
      alert('お名前、電話番号、メールアドレスは必須です'); return;
    }
    renderConfirmation();
  }
  showStep(n);
}

function renderConfirmation() {
  document.getElementById('conf-stylist').textContent = state.stylist;
  document.getElementById('conf-date').textContent = state.date + ' ' + state.time;
  let html = '';
  let total = 0;
  state.services.forEach(s => {
    html += `<div class="flex justify-between py-3"><span class="font-headline text-primary">${s.name}</span><span class="text-primary font-medium">${s.price}</span></div>`;
    total += parseInt(s.price.replace(/[^0-9]/g, ''));
  });
  document.getElementById('conf-services').innerHTML = html;
  document.getElementById('conf-total').textContent = '¥' + total.toLocaleString();
  document.getElementById('conf-name').textContent = state.customer.name_kanji;
  document.getElementById('conf-phone').textContent = state.customer.phone;
  document.getElementById('conf-email').textContent = state.customer.email;
  document.getElementById('conf-requests').textContent = state.customer.requests || '（なし）';
}

function confirmReservation() {
  alert('ご予約ありがとうございます！確認メールをお送りしました。');
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => { showStep(1); });
