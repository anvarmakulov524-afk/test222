/** Аудио и видео в HTML — урок. Google Apps Script (привязан к Google Таблице).
 *  Ученики: ссылка /exec      Учитель: ссылка /exec?mode=teacher
 *  Данные хранятся в листах «data» (служебный) и «Баллы» (удобная таблица для учителя). */

function doGet(e) {
  const teacher = !!(e && e.parameter && e.parameter.mode === 'teacher');
  const html = HtmlService.createHtmlOutputFromFile('Index').getContent()
    .replace('__TEACHER__', teacher ? 'true' : 'false');
  return HtmlService.createHtmlOutput(html)
    .setTitle(teacher ? 'Аудио и видео в HTML — кабинет учителя' : 'Аудио и видео в HTML — урок')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  let response;
  try {
    const request = JSON.parse(e.postData.contents);
    const args = Array.isArray(request.args) ? request.args : [];
    let value;
    switch (request.fn) {
      case 'auth': value = api_auth(args[0]); break;
      case 'get': value = api_get(args[0]); break;
      case 'list': value = api_list(args[0], args[1]); break;
      case 'set': value = api_set(args[0], args[1], args[2]); break;
      case 'del': value = api_del(args[0], args[1]); break;
      default: throw new Error('Неизвестная операция');
    }
    response = { ok: true, v: value };
  } catch (error) {
    response = { ok: false, e: String(error && error.message || error) };
  }
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

const auth_ = pw => {
  const key = PropertiesService.getScriptProperties().getProperty('TEACHER_KEY');
  return !!key && String(pw || '') === key;
};
function need_(pw) { if (!auth_(pw)) throw new Error('Нет доступа'); }
function sheet_(name, head) {
  const ss = SpreadsheetApp.getActive();
  let s = ss.getSheetByName(name);
  if (!s) { s = ss.insertSheet(name); if (head) { s.appendRow(head); s.setFrozenRows(1); s.getRange(1, 1, 1, head.length).setFontWeight('bold'); } }
  return s;
}
function rowOf_(s, path, col) {
  const n = s.getLastRow(); if (n < 1) return 0;
  const f = s.getRange(1, col, n, 1).createTextFinder(path).matchEntireCell(true).findNext();
  return f ? f.getRow() : 0;
}

function api_auth(pw) { return auth_(pw); }

function api_get(path) {
  const s = sheet_('data', ['path', 'json1', 'json2', 'json3', 'json4', 'json5', 'updated']);
  const r = rowOf_(s, path, 1); if (!r) return null;
  return s.getRange(r, 2, 1, 5).getValues()[0].join('');
}

function api_list(prefix, pw) {
  need_(pw);
  const s = sheet_('data', ['path', 'json1', 'json2', 'json3', 'json4', 'json5', 'updated']);
  const n = s.getLastRow(); if (n < 2) return [];
  return s.getRange(2, 1, n - 1, 6).getValues()
    .filter(v => String(v[0]).indexOf(prefix) === 0)
    .map(v => ({ path: v[0], json: v.slice(1).join('') }));
}

function api_set(path, json, pw) {
  const isStudent = path.indexOf('students/') === 0;
  if (!isStudent) need_(pw);                        // урок меняет только учитель
  if (!/^(students|lesson)\/[\w.\-]+$/.test(path)) throw new Error('bad path');
  if (json.length > 190000) throw new Error('Слишком большой объём');
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const s = sheet_('data', ['path', 'json1', 'json2', 'json3', 'json4', 'json5', 'updated']);
    const parts = []; for (let i = 0; i < 5; i++) parts.push(json.slice(i * 38000, (i + 1) * 38000));
    const row = [path].concat(parts, [new Date()]);
    let r = rowOf_(s, path, 1);
    if (r) s.getRange(r, 1, 1, 7).setValues([row]); else s.appendRow(row);
    if (isStudent) scores_(path, json);
  } finally { lock.releaseLock(); }
  return true;
}

function api_del(path, pw) {
  need_(pw);
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const s = sheet_('data'); const r = rowOf_(s, path, 1); if (r) s.deleteRow(r);
    const b = SpreadsheetApp.getActive().getSheetByName('Баллы');
    if (b) { const k = rowOf_(b, path, 9); if (k) b.deleteRow(k); }
  } finally { lock.releaseLock(); }
  return true;
}

/** Удобная таблица «Баллы» — видна учителю прямо в Google Таблице */
function scores_(path, json) {
  let d; try { d = JSON.parse(json); } catch (e) { return; }
  const b = sheet_('Баллы', ['ФИО', 'Задания', 'Тест, баллы', 'Тест, верно', 'Рефлексия, баллы', 'Настроение', 'Понимание', 'Обновлено', 'ключ']);
  const row = [d.name || '', (d.tasksDone || 0) + '/' + (d.tasksTotal || 0),
    d.testSubmitted ? d.testScore : 'не сдан', d.testSubmitted ? d.testRight + '/' + d.testTotal : '',
    d.reflectionDone ? d.reflectionScore : 'не завершена', d.mood || '', d.und || '', d.updatedAt || '', path];
  const r = rowOf_(b, path, 9);
  if (r) b.getRange(r, 1, 1, 9).setValues([row]); else b.appendRow(row);
}
