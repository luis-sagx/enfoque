/* ============================================================
   Centro de Mando · render + interacción
   Lee los datos de data.js y los pinta en los contenedores
   declarados en index.html. Sin dependencias, sin build.
   ============================================================ */
(function () {
  'use strict';

  // Tipos de bloque que llevan color de acento en el título.
  var ACCENT = { en: 1, gym: 1, skill: 1, mob: 1 };

  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }

  /* ---------- HORARIO ---------- */
  function renderSchedule() {
    var host = el('scheduleGrid');
    if (!host) return;
    host.innerHTML = SCHEDULE.map(function (day) {
      var rows = day.rows.map(function (r) {
        var accent = ACCENT[r.type] ? ' a-' + r.type : '';
        var note = r.note ? '<span>' + esc(r.note) + '</span>' : '';
        return '<div class="row"><span class="t">' + esc(r.t) + '</span>' +
          '<div class="b2 b-' + r.type + '"></div>' +
          '<div class="act' + accent + '"><b>' + esc(r.title) + '</b>' + note + '</div></div>';
      }).join('');
      return '<div class="card"><div class="dayhead">' + esc(day.day) +
        ' <span class="tag ' + day.tag.cls + '">' + esc(day.tag.label) + '</span></div>' +
        '<div class="tl">' + rows + '</div></div>';
    }).join('');
  }

  /* ---------- ENTRENO ---------- */
  function renderWorkouts() {
    var host = el('workoutsGrid');
    if (!host) return;
    host.innerHTML = WORKOUTS.map(function (w) {
      var rows = w.rows.map(function (r) {
        return '<tr><td><span class="ex">' + esc(r.ex) +
          '<small>' + esc(r.sub) + '</small></span></td>' +
          '<td class="sets">' + esc(r.sets) + '</td>' +
          '<td>' + esc(r.key) + '</td></tr>';
      }).join('');
      return '<div class="card"><div class="dayhead"><span class="tag gym">' + esc(w.tag) +
        '</span> ' + esc(w.title) + '</div>' +
        '<table class="tbl"><thead><tr><th style="width:46%">Ejercicio</th>' +
        '<th>Series</th><th>Clave</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    }).join('');
  }

  /* ---------- NUTRICIÓN ---------- */
  function renderMeals() {
    var host = el('mealsGrid');
    if (!host) return;
    var html = MEALS.map(function (d) {
      var meals = d.meals.map(function (m) {
        return '<div class="meal"><div class="mh">' + esc(m.h) + '</div><p>' + esc(m.p) + '</p></div>';
      }).join('');
      return '<div class="card"><div class="dayhead">' + esc(d.day) +
        ' <span class="tag ' + d.tag.cls + '">' + esc(d.tag.label) + '</span></div>' +
        meals + '<div class="daytot">' + esc(d.total) + '</div></div>';
    }).join('');
    // Las equivalencias quedan como tarjeta estática al final del grid.
    host.insertAdjacentHTML('afterbegin', html);
  }

  /* ---------- INGLÉS · herramientas ---------- */
  function renderTools() {
    var host = el('toolsGrid');
    if (!host) return;
    host.innerHTML = TOOLS.map(function (t) {
      return '<div class="tool"><div class="th"><h4>' + esc(t.name) + '</h4>' +
        '<span class="free ' + t.free.cls + '">' + esc(t.free.label) + '</span></div>' +
        '<p class="tfn"><b>' + esc(t.fn) + '</b></p>' +
        '<p class="twhen"><b>Cuándo</b>' + esc(t.when) + '</p>' +
        '<p class="thow"><b>Cómo</b>' + esc(t.how) + '</p></div>';
    }).join('');
  }

  /* ---------- TABS ---------- */
  function initTabs() {
    var tabs = document.querySelectorAll('.tab'), panels = document.querySelectorAll('.panel');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('show'); });
        t.classList.add('active');
        el(t.dataset.c).classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  /* ---------- PESO ---------- */
  function load(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }

  function initPeso() {
    var START = 60, GOAL = 70, peso = load('cmd_peso', 60);
    function render() {
      var p = Math.max(0, Math.min(100, ((peso - START) / (GOAL - START)) * 100));
      el('bar-peso').style.width = p + '%';
      el('tk-peso').textContent = peso + ' → ' + GOAL + ' kg';
      el('pesoInput').value = peso;
    }
    el('savePeso').addEventListener('click', function () {
      var v = parseFloat(el('pesoInput').value);
      if (!isNaN(v) && v > 30 && v < 150) { peso = v; save('cmd_peso', peso); render(); }
    });
    render();

    var wl = el('weeklabel');
    wl.value = load('cmd_weeklabel', '');
    wl.addEventListener('input', function () { save('cmd_weeklabel', wl.value); });
  }

  /* ---------- HÁBITOS ---------- */
  function initHabits() {
    var days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    var state = load('cmd_habits', {}), tbl = el('htable');
    function key(r, d) { return r + '_' + d; }

    function build() {
      var h = '<thead><tr><th class="hname">Hábito</th>';
      days.forEach(function (d) { h += '<th>' + d + '</th>'; });
      h += '</tr></thead><tbody>';
      HABITS.forEach(function (row, ri) {
        if (row.cat) { h += '<tr class="cat"><td colspan="8">' + esc(row.cat) + '</td></tr>'; return; }
        h += '<tr><td class="hname">' + esc(row.name) + (row.sub ? '<small>' + esc(row.sub) + '</small>' : '') + '</td>';
        for (var di = 0; di < 7; di++) {
          if (row.rest && row.rest[di]) { h += '<td><span class="ck rest"></span></td>'; }
          else { var on = state[key(ri, di)] ? ' on' : ''; h += '<td><span class="ck' + on + '" data-r="' + ri + '" data-d="' + di + '"></span></td>'; }
        }
        h += '</tr>';
      });
      h += '</tbody>'; tbl.innerHTML = h;
      tbl.querySelectorAll('.ck:not(.rest)').forEach(function (c) {
        c.addEventListener('click', function () {
          var k = key(c.dataset.r, c.dataset.d);
          if (state[k]) { delete state[k]; c.classList.remove('on'); } else { state[k] = 1; c.classList.add('on'); }
          save('cmd_habits', state); pct();
        });
      });
    }
    function pct() {
      var total = 0, done = 0;
      HABITS.forEach(function (row, ri) {
        if (row.cat) return;
        for (var di = 0; di < 7; di++) { if (row.rest && row.rest[di]) continue; total++; if (state[key(ri, di)]) done++; }
      });
      var p = total ? Math.round(done / total * 100) : 0;
      el('weekbar').style.width = p + '%';
      el('weekpct').textContent = p + '%';
    }
    el('resetWeek').addEventListener('click', function () {
      if (confirm('¿Borrar todas las marcas de esta semana?')) { state = {}; save('cmd_habits', state); build(); pct(); }
    });
    build(); pct();
  }

  /* ---------- ARRANQUE ---------- */
  renderSchedule();
  renderWorkouts();
  renderMeals();
  renderTools();
  initTabs();
  initPeso();
  initHabits();
})();
