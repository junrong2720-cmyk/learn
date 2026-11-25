/* 读懂中医 主程序:路由、页面、搜索、练习 */
(function () {
  'use strict';
  var D = window.L;
  var app = document.getElementById('app');

  /* ---------- 状态 ---------- */
  var KEY = 'tcmlearn-v1';
  var S = (function () {
    var s;
    try { s = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { s = {}; }
    var lq = /[?&]lang=(zh|en|bi)\b/.exec(location.search);
    if (lq) s.lang = lq[1];
    if (!s.lang) s.lang = 'zh';
    s.star = s.star || []; s.wrong = s.wrong || {}; s.read = s.read || {}; s.seen = s.seen || {};
    return s;
  })();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- 文案 ---------- */
  var T = {
    zh: {
      site: '读懂中医', siteSub: '理论 · 中药 · 方剂',
      navL: '理论', navH: '中药', navF: '方剂', navQ: '练习', navMe: '我的',
      searchPh: '搜药名 / 方名 / 拼音 / 功效 / 症状…',
      disclaimer: '⚠️ 科普向,不替代就医。中药与方剂须经执业中医师辨证后使用,本站不提供剂量,请勿自行抓药服用。',
      source: '内容参考《中医基础理论》《中医诊断学》《中药学》《方剂学》全国中医药行业高等教育规划教材及《中华人民共和国药典》。',
      heroT: '读懂中医', heroSub: '从阴阳五行讲到一味药、一首方。用大白话把中医讲明白,也保留教材里的原话,方便对照。',
      chs: '章理论', herbsN: '味中药', formsN: '首方剂',
      path: '学习路线', step: '第', stepU: '步',
      pL: '先懂道理', pLD: '阴阳、五行、五脏、气血……中医怎么看人体、怎么看病。',
      pH: '再认本草', pHD: '每味药的寒热温凉、酸苦甘辛咸,能做什么、要注意什么。',
      pF: '最后读方', pFD: '药怎么组队:君臣佐使,一首方为什么这样配。',
      begin: '从这里开始 →', todayH: '今日一药', todayF: '今日一方', kitchen: '厨房里的中药', kitchenD: '这些既是食物也是药材(药食同源),你家里可能就有。', seeAll: '看全部',
      lIndex: '中医理论', lIndexD: '按顺序读最容易懂。每章先讲大白话,再给出教材术语。',
      read: '已读', markRead: '读完了,标记已读', isRead: '✓ 已读', toc: '本章内容',
      prevCh: '上一章', nextCh: '下一章', chap: '第', chapU: '章',
      lg1: '一 · 基本观念', lg2: '二 · 人体', lg3: '三 · 为什么会生病', lg4: '四 · 怎么看病、怎么治', lg5: '五 · 药与方的规矩',
      hIndex: '中药', hIndexD: '按《中药学》教材的功效分类排列。点进一类,看这类药的共同点和每味药的特点。',
      fIndex: '方剂', fIndexD: '按《方剂学》教材的分类排列。方剂是药的“团队配合”,看懂君臣佐使就看懂了一半。',
      cnt: '味', cntF: '首', filterAll: '全部', fFood: '药食同源', fTox: '有毒', fPreg: '孕妇慎/忌',
      nature: '药性', flavor: '药味', mer: '归经', gx: '功效', use: '怎么用 · 大白话', care: '使用注意', inForms: '出现在这些方剂里',
      latin: '药材拉丁名', cat: '分类',
      tFood: '药食同源', tTox1: '小毒', tTox2: '有毒', tTox3: '大毒', tPreg: '孕妇慎用', tProt: '保护/代用',
      src: '出处', comp: '组成', compNote: '本站只列药物与分工,不列剂量。', gy: '功用', zz: '主治', jie: '方解 · 为什么这样配', sibl: '同类方剂',
      roles: { '君': '君药', '臣': '臣药', '佐': '佐药', '使': '使药', '佐使': '佐使药', '君臣': '君臣药' },
      roleD: { '君': '主帅,针对主要病证', '臣': '副将,帮君药加强作用', '佐': '助手或制约副作用', '使': '引经或调和诸药', '佐使': '佐助兼调和', '君臣': '主药' },
      star: '收藏', starred: '已收藏', prev: '上一个', next: '下一个',
      results: '条结果', noResult: '没有找到。试试药名、方名、拼音(不用声调),或功效、症状关键词如“失眠”“咳嗽”。',
      searchTip: '在上方输入关键词。',
      sH: '中药', sF: '方剂', sL: '理论',
      foodT: '药食同源', foodD: '国家卫生健康委员会公布的“既是食品又是中药材”的物质中,本站收录的品种。能入菜、煲汤、泡茶,但体质不对也会“吃错”。',
      quizTitle: '练习', mode: '题型', scope: '范围', count: '题数', start: '开始',
      mHcat: '这味药属于哪类', mHcatD: '看药名选分类', mHgx: '看功效认药', mHgxD: '读功效,选药名', mHna: '寒热温凉', mHnaD: '这味药是什么药性',
      mFjun: '谁是君药', mFjunD: '看方名选君药', mFgy: '看功用认方', mFgyD: '读功用,选方名', mCard: '闪卡', mCardD: '翻卡自评,不熟的进错题本',
      scAll: '全部', scStar: '我的收藏', scWrong: '错题本',
      qHcatAsk: '属于哪一类?', qHgxAsk: '功效如上,是哪味药?', qHnaAsk: '药性是?', qFjunAsk: '这首方的君药是?', qFgyAsk: '功用如上,是哪首方?',
      right: '答对了', wrongA: '答错了,正确答案:', nextQ: '下一题', finish: '看结果', viewIt: '查看详情',
      flip: '翻面', know: '记住了', dontKnow: '还不熟',
      done: '本组完成', score: '得分', again: '再来一组', back: '返回设置', reviewWrong: '本组做错的',
      notEnough: '这个范围里的题目不够(至少要 4 条)。换个范围试试。',
      me: '我的学习', readN: '已读章节', seenH: '看过的药', seenF: '看过的方', starList: '我的收藏', wrongList: '错题本',
      noStar: '还没有收藏。在药或方的页面点“收藏”即可。', noWrong: '错题本是空的。', practiceWrong: '练错题',
      clearWrong: '清空错题本', clearAll: '清空全部记录', confirmClear: '确定清空吗?此操作不可撤销。', times: '次',
      store: '学习记录只保存在本机浏览器里。', acuLink: '针灸腧穴库', acuLinkD: '十四经 362 穴,配人体图', tizhiLink: '中医体质测试', tizhiLinkD: '国家标准 60 题,测测你是哪种体质',
      more: '相关站点'
    },
    en: {
      site: 'Chinese Medicine Explained', siteSub: 'Theory · Herbs · Formulas',
      navL: 'Theory', navH: 'Herbs', navF: 'Formulas', navQ: 'Practice', navMe: 'My study',
      searchPh: 'Herb, formula, pinyin, action, symptom…',
      disclaimer: '⚠️ Educational only — not medical advice. Herbs and formulas should only be used under a licensed practitioner after proper diagnosis. No doses are given here; please do not self-prescribe.',
      source: 'Based on the national standard Chinese university textbooks (Basic Theory, Diagnostics, Chinese Materia Medica, Formulas) and the Pharmacopoeia of the People’s Republic of China.',
      heroT: 'Chinese Medicine, Explained', heroSub: 'From yin-yang and the five phases to a single herb and a classic formula — in plain words, with the textbook terms kept alongside.',
      chs: 'chapters', herbsN: 'herbs', formsN: 'formulas',
      path: 'Learning path', step: 'Step', stepU: '',
      pL: 'Understand the ideas', pLD: 'Yin-yang, five phases, organs, qi and blood — how Chinese medicine sees the body and illness.',
      pH: 'Meet the herbs', pHD: 'Each herb’s temperature and taste, what it does and what to watch out for.',
      pF: 'Read the formulas', pFD: 'How herbs work as a team — sovereign, minister, assistant, envoy.',
      begin: 'Start here →', todayH: 'Herb of the day', todayF: 'Formula of the day', kitchen: 'Herbs in your kitchen', kitchenD: 'Officially listed as both food and medicine — you may already have some at home.', seeAll: 'See all',
      lIndex: 'Theory', lIndexD: 'Easiest read in order. Each chapter starts in plain words, then gives the textbook terms.',
      read: 'Read', markRead: 'Done — mark as read', isRead: '✓ Read', toc: 'In this chapter',
      prevCh: 'Previous chapter', nextCh: 'Next chapter', chap: 'Chapter', chapU: '',
      lg1: 'I · Core ideas', lg2: 'II · The body', lg3: 'III · Why we get ill', lg4: 'IV · Diagnosis & treatment', lg5: 'V · Rules for herbs & formulas',
      hIndex: 'Herbs', hIndexD: 'Arranged by action, following the standard Chinese Materia Medica textbook. Open a group to see what its herbs share and how each differs.',
      fIndex: 'Formulas', fIndexD: 'Arranged as in the standard Formulas textbook. A formula is herbs working as a team — learn the roles and you are halfway there.',
      cnt: 'herbs', cntF: 'formulas', filterAll: 'All', fFood: 'Food & medicine', fTox: 'Toxic', fPreg: 'Pregnancy caution',
      nature: 'Nature', flavor: 'Taste', mer: 'Channels entered', gx: 'Actions', use: 'In plain words', care: 'Cautions', inForms: 'Used in these formulas',
      latin: 'Pharmaceutical name', cat: 'Category',
      tFood: 'Food & medicine', tTox1: 'Slightly toxic', tTox2: 'Toxic', tTox3: 'Highly toxic', tPreg: 'Pregnancy caution', tProt: 'Protected / substitute',
      src: 'Source', comp: 'Ingredients', compNote: 'Herbs and roles only — no doses are given.', gy: 'Actions', zz: 'Indications', jie: 'Why it works', sibl: 'Related formulas',
      roles: { '君': 'Sovereign', '臣': 'Minister', '佐': 'Assistant', '使': 'Envoy', '佐使': 'Assistant & envoy', '君臣': 'Chief' },
      roleD: { '君': 'leads, targets the main problem', '臣': 'backs up the sovereign', '佐': 'helps or curbs side effects', '使': 'guides or harmonises', '佐使': 'assists and harmonises', '君臣': 'main herbs' },
      star: 'Star', starred: 'Starred', prev: 'Previous', next: 'Next',
      results: 'results', noResult: 'Nothing found. Try a herb or formula name, pinyin without tones, or an action or symptom such as “insomnia” or “cough”.',
      searchTip: 'Type a keyword above.',
      sH: 'Herbs', sF: 'Formulas', sL: 'Theory',
      foodT: 'Food & medicine', foodD: 'Items on China’s official list of substances that are both food and Chinese medicinal. Fine in soups and teas — but the wrong one for your constitution can still disagree with you.',
      quizTitle: 'Practice', mode: 'Question type', scope: 'Scope', count: 'Questions', start: 'Start',
      mHcat: 'Which group?', mHcatD: 'Herb → category', mHgx: 'Herb from actions', mHgxD: 'Read actions, pick the herb', mHna: 'Hot or cold?', mHnaD: 'Herb → nature',
      mFjun: 'Find the sovereign', mFjunD: 'Formula → sovereign herb', mFgy: 'Formula from actions', mFgyD: 'Read actions, pick the formula', mCard: 'Flashcards', mCardD: 'Flip and self-rate',
      scAll: 'All', scStar: 'Starred', scWrong: 'Mistakes',
      qHcatAsk: 'Which group does it belong to?', qHgxAsk: 'Which herb has these actions?', qHnaAsk: 'What is its nature?', qFjunAsk: 'Which is the sovereign herb?', qFgyAsk: 'Which formula has these actions?',
      right: 'Correct', wrongA: 'Not quite — the answer is:', nextQ: 'Next', finish: 'See results', viewIt: 'Open',
      flip: 'Flip', know: 'Got it', dontKnow: 'Not yet',
      done: 'Set complete', score: 'Score', again: 'Another set', back: 'Back to settings', reviewWrong: 'Missed in this set',
      notEnough: 'Not enough items in this scope (need at least 4). Try another scope.',
      me: 'My study', readN: 'Chapters read', seenH: 'Herbs viewed', seenF: 'Formulas viewed', starList: 'Starred', wrongList: 'Mistakes',
      noStar: 'Nothing starred yet. Tap “Star” on any herb or formula page.', noWrong: 'No mistakes recorded.', practiceWrong: 'Practise mistakes',
      clearWrong: 'Clear mistakes', clearAll: 'Clear all records', confirmClear: 'Clear? This cannot be undone.', times: '×',
      store: 'Your study records stay in this browser only.', acuLink: 'Acupoint Library', acuLinkD: '362 points of the 14 meridians, with body maps', tizhiLink: 'Body Constitution Test', tizhiLinkD: 'The standard 60-question test',
      more: 'Sister sites'
    }
  };
  (function fwAll(o) { for (var k in o) { if (typeof o[k] === 'string') o[k] = fw(o[k]); else fwAll(o[k]); } })(T.zh);
  function t(k) { return T[S.lang === 'en' ? 'en' : 'zh'][k]; }
  function te(k) { return T.en[k]; }
  /* 标题类:中+EN 时两行 */
  function th(k) { return S.lang === 'bi' ? T.zh[k] + '<span class="sub-en">' + T.en[k] + '</span>' : t(k); }
  function bi(zh, en) {
    if (S.lang === 'zh' || !en) return zh;
    if (S.lang === 'en') return en;
    return zh + '<span class="sub-en">' + en + '</span>';
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- 药性/归经翻译 ---------- */
  var XW = { 辛: 'pungent', 甘: 'sweet', 苦: 'bitter', 酸: 'sour', 咸: 'salty', 淡: 'bland', 涩: 'astringent', 寒: 'cold', 凉: 'cool', 温: 'warm', 热: 'hot', 平: 'neutral' };
  var GJ = { 肺: 'Lung', 大肠: 'Large Intestine', 胃: 'Stomach', 脾: 'Spleen', 心: 'Heart', 小肠: 'Small Intestine', 膀胱: 'Bladder', 肾: 'Kidney', 心包: 'Pericardium', 三焦: 'Sanjiao', 胆: 'Gallbladder', 肝: 'Liver' };
  function xwEn(tok) {
    var p = '';
    if (tok.charAt(0) === '微') { p = 'slightly '; tok = tok.slice(1); }
    else if (tok.charAt(0) === '大') { p = 'very '; tok = tok.slice(1); }
    else if (tok.charAt(0) === '极') { p = 'extremely '; tok = tok.slice(1); }
    return p + (XW[tok] || tok);
  }
  function xwBi(tok) { return bi(tok, xwEn(tok)); }
  function gjBi(g) { return S.lang === 'en' ? (GJ[g] || g) : (S.lang === 'bi' ? g + ' <i>' + (GJ[g] || '') + '</i>' : g); }
  function naCls(na) { return /寒|凉/.test(na) ? 'n-cold' : /温|热/.test(na) ? 'n-warm' : 'n-neu'; }
  function naBase(na) { var m = na.match(/寒|凉|温|热|平/); return m ? m[0] : '平'; }

  /* ---------- 名称 ---------- */
  function nm(x) {
    if (S.lang === 'en') return { main: x.py, sub: x.en + ' · ' + x.zh };
    if (S.lang === 'bi') return { main: x.zh, sub: x.py + ' · ' + x.en };
    return { main: x.zh, sub: x.py };
  }
  function nmInline(x) {
    var n = nm(x);
    return '<b>' + n.main + '</b>' + (S.lang === 'zh' ? '' : '<span class="zh-s">' + (S.lang === 'en' ? x.en : x.py) + '</span>');
  }
  function url(x) { return x.t === 'h' ? '#/h/i/' + x.id : '#/f/i/' + x.id; }
  function catOf(x) { return (x.t === 'h' ? D.hc : D.fc).filter(function (c) { return c.id === x.c; })[0]; }
  function subOf(x) { return catOf(x).subs[x.s]; }

  function flagChips(h) {
    var out = [];
    h.flags.forEach(function (f) {
      if (f === '食') out.push('<span class="chip c-food">' + t('tFood') + '</span>');
      else if (/^毒/.test(f)) out.push('<span class="chip c-tox">' + t('tTox' + f.slice(1)) + '</span>');
      else if (f === '孕') out.push('<span class="chip c-preg">' + t('tPreg') + '</span>');
      else if (f === '保') out.push('<span class="chip c-prot">' + t('tProt') + '</span>');
    });
    return out.join('');
  }
  function naChip(h) {
    return '<span class="chip ' + naCls(h.na) + '">' + (S.lang === 'en' ? xwEn(h.na) : h.na) + '</span>';
  }

  /* 方中非药库条目(食物、辅料、少用药)的英文 */
  var EXTRA = { 粳米: 'polished rice', 白酒: 'rice wine', 清酒: 'clear rice wine', 黄酒: 'yellow rice wine', 热酒: 'warm wine', 醋: 'vinegar',
    鸡子黄: 'egg yolk', 清茶: 'green tea', 猪脊髓: 'pork spinal cord', 梨皮: 'pear peel', 西瓜翠衣: 'watermelon rind', 碧玉散: 'Jasper Powder (talc, licorice, indigo)',
    寒水石: 'glauberite', 硝石: 'nitre', 青木香: 'aristolochia root (banned; costus substituted)', 玳瑁: 'hawksbill shell (protected)', 海浮石: 'pumice' };

  /* ---------- 反查:药 → 方 ---------- */
  var herbForms = {};
  D.forms.forEach(function (f) {
    f.comp.forEach(function (g) {
      g.hs.forEach(function (n) {
        var h = D.herb(n);
        if (h) { (herbForms[h.id] = herbForms[h.id] || []); if (herbForms[h.id].indexOf(f) < 0) herbForms[h.id].push(f); }
      });
    });
  });

  /* ---------- 理论正文渲染 ---------- */
  function inline(s) {
    return s.replace(/\*\*\*(.+?)\*\*\*/g, '<b><i>$1</i></b>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*([^*\s][^*]*?)\*/g, '<i>$1</i>')
      .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, function (m, href, text) {
        var ext = /^https?:/.test(href);
        return '<a class="lk" href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + text + '</a>';
      })
      .replace(/\[\[h:([^\]]+)\]\]/g, function (m, n) {
        var h = D.herb(n); return h ? '<a class="lk" href="#/h/i/' + h.id + '">' + n + '</a>' : n;
      })
      .replace(/\[\[f:([^\]]+)\]\]/g, function (m, n) {
        var f = D.fByZh[n]; return f ? '<a class="lk" href="#/f/i/' + f.id + '">' + n + '</a>' : n;
      });
  }
  function plain(s) { return String(s || '').replace(/\[\[(?:[hf]:)?([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, a, b) { return b || a; }).replace(/\*\*/g, ''); }
  function fwText(s) {
    return s.split(/(\[\[.*?\]\]|\{\{.*?\}\})/).map(function (seg, i) { return i % 2 ? seg : fw(seg); }).join('');
  }
  function md(src, isZh) {
    if (!src) return '';
    var lines = src.split('\n'), out = [], list = null, tbl = null;
    function flush() {
      if (list) { out.push('<ul class="art-ul">' + list.join('') + '</ul>'); list = null; }
      if (tbl) {
        var h = tbl.shift();
        out.push('<div class="tbl-wrap"><table class="tbl art-tbl"><thead><tr>' + h.map(function (c) { return '<th>' + inline(c) + '</th>'; }).join('') +
          '</tr></thead><tbody>' + tbl.map(function (r) { return '<tr>' + r.map(function (c, i) { return (i ? '<td>' : '<th>') + inline(c) + (i ? '</td>' : '</th>'); }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tbl = null;
      }
    }
    lines.forEach(function (ln) {
      ln = ln.trim();
      if (!ln) { flush(); return; }
      if (ln.charAt(0) === '|') {
        if (list) flush();
        var cells = ln.replace(/^\||\|$/g, '').split('|').map(function (c) { c = c.trim(); return isZh ? fwText(c) : c; });
        (tbl = tbl || []).push(cells); return;
      }
      if (tbl) flush();
      if (isZh) ln = fwText(ln);
      var dg = ln.match(/^\{\{(\w+)\}\}$/);
      if (dg) { flush(); out.push(DIAG[dg[1]] ? DIAG[dg[1]]() : ''); return; }
      if (/^- /.test(ln)) { (list = list || []).push('<li>' + inline(ln.slice(2)) + '</li>'); return; }
      flush();
      if (/^> /.test(ln)) out.push('<p class="tip">' + inline(ln.slice(2)) + '</p>');
      else if (/^### /.test(ln)) out.push('<h4>' + inline(ln.slice(4)) + '</h4>');
      else out.push('<p>' + inline(ln) + '</p>');
    });
    flush();
    return out.join('');
  }

  /* ---------- 示意图 ---------- */
  var DIAG = {
    taiji: function () {
      return '<figure class="diag"><svg viewBox="0 0 220 220" width="200" height="200" aria-label="太极图">' +
        '<circle cx="110" cy="110" r="100" fill="#FFFDF8" stroke="#202A32" stroke-width="2"/>' +
        '<path d="M110 10 A100 100 0 0 1 110 210 A50 50 0 0 1 110 110 A50 50 0 0 0 110 10Z" fill="#202A32"/>' +
        '<circle cx="110" cy="60" r="13" fill="#202A32"/><circle cx="110" cy="160" r="13" fill="#FFFDF8"/></svg>' +
        '<figcaption>' + bi('太极图:黑为阴,白为阳;阴中有阳,阳中有阴,此消彼长。', 'Taiji diagram: dark is yin, light is yang — each holds a seed of the other, one waxes as the other wanes.') + '</figcaption></figure>';
    },
    wuxing: function () {
      var P = [['木', 'Wood', '#4F7356'], ['火', 'Fire', '#B8403F'], ['土', 'Earth', '#9A7432'], ['金', 'Metal', '#7C858B'], ['水', 'Water', '#3E5866']];
      var cx = 160, cy = 155, R = 105, pts = P.map(function (p, i) {
        var a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
      });
      var s = '<figure class="diag"><svg viewBox="0 0 320 300" width="320" height="300" aria-label="五行生克图">' +
        '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#9A7432"/></marker>' +
        '<marker id="ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#7C858B"/></marker></defs>';
      function seg(a, b, cut) {
        var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.sqrt(dx * dx + dy * dy);
        return [a[0] + dx * cut / L, a[1] + dy * cut / L, b[0] - dx * cut / L, b[1] - dy * cut / L];
      }
      for (var i = 0; i < 5; i++) {
        var g = seg(pts[i], pts[(i + 1) % 5], 30);
        s += '<line x1="' + g[0] + '" y1="' + g[1] + '" x2="' + g[2] + '" y2="' + g[3] + '" stroke="#9A7432" stroke-width="2.2" marker-end="url(#ah)"/>';
        var k = seg(pts[i], pts[(i + 2) % 5], 30);
        s += '<line x1="' + k[0] + '" y1="' + k[1] + '" x2="' + k[2] + '" y2="' + k[3] + '" stroke="#7C858B" stroke-width="1.4" stroke-dasharray="5 4" marker-end="url(#ak)"/>';
      }
      pts.forEach(function (p, i) {
        s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="26" fill="' + P[i][2] + '"/>' +
          '<text x="' + p[0] + '" y="' + (p[1] + (S.lang === 'en' ? 4 : 7)) + '" text-anchor="middle" fill="#fff" font-size="' + (S.lang === 'en' ? 12 : 20) + '" font-family="serif" font-weight="700">' + (S.lang === 'en' ? P[i][1] : P[i][0]) + '</text>';
      });
      s += '</svg><figcaption>' + bi('实线箭头 = 相生(木→火→土→金→水→木);虚线箭头 = 相克(木→土→水→火→金→木)。', 'Solid arrows = generating cycle (Wood→Fire→Earth→Metal→Water); dashed arrows = controlling cycle (Wood→Earth→Water→Fire→Metal).') + '</figcaption></figure>';
      return s;
    }
  };

  /* ---------- 通用组件 ---------- */
  function starBtn(key) {
    var on = S.star.indexOf(key) >= 0;
    return '<button class="starbtn' + (on ? ' on' : '') + '" data-star="' + key + '">' + (on ? '★ ' + t('starred') : '☆ ' + t('star')) + '</button>';
  }
  function hRow(h, q) {
    var n = nm(h);
    return '<a class="prow hrow' + (S.seen['h:' + h.id] ? ' seen' : '') + '" href="#/h/i/' + h.id + '">' +
      '<span class="nm"><b>' + hl(n.main, q) + '</b><span class="py-s">' + hl(n.sub, q) + '</span></span>' +
      '<span class="chips">' + naChip(h) + flagChips(h) + '</span>' +
      '<span class="brief">' + hl(S.lang === 'en' ? h.gxEn : h.gx, q) + '</span>' +
      (S.star.indexOf('h:' + h.id) >= 0 ? '<span class="st">★</span>' : '<span></span>') + '</a>';
  }
  function fRow(f, q) {
    var n = nm(f);
    return '<a class="prow frow' + (S.seen['f:' + f.id] ? ' seen' : '') + '" href="#/f/i/' + f.id + '">' +
      '<span class="nm"><b>' + hl(n.main, q) + '</b><span class="py-s">' + hl(n.sub, q) + '</span></span>' +
      '<span class="brief">' + hl(S.lang === 'en' ? f.gxEn : f.gx, q) + '</span>' +
      (S.star.indexOf('f:' + f.id) >= 0 ? '<span class="st">★</span>' : '<span></span>') + '</a>';
  }
  function hl(s, q) {
    if (!q) return s;
    var i = s.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return s;
    return s.slice(0, i) + '<mark>' + s.slice(i, i + q.length) + '</mark>' + s.slice(i + q.length);
  }
  function dayIdx(n, salt) {
    var d = new Date(), k = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate() + (salt || 0);
    return (k * 2654435761 >>> 0) % n;
  }
  function crumb(items) {
    return '<div class="crumb">' + items.map(function (it) { return it[1] ? '<a href="' + it[1] + '">' + it[0] + '</a>' : '<span>' + it[0] + '</span>'; }).join('<span>›</span>') + '</div>';
  }
  function pager(prev, next, lp, ln) {
    return '<div class="pager">' + (prev ? '<a href="' + prev[0] + '">← ' + lp + ' · ' + prev[1] + '</a>' : '<span></span>') +
      (next ? '<a href="' + next[0] + '">' + ln + ' · ' + next[1] + ' →</a>' : '<span></span>') + '</div>';
  }

  /* ---------- 首页 ---------- */
  var THG = [['lg1', 1, 3], ['lg2', 4, 8], ['lg3', 9, 10], ['lg4', 11, 13], ['lg5', 14, 15]];
  function pHome() {
    var h = D.herbs[dayIdx(D.herbs.length)], f = D.forms[dayIdx(D.forms.length, 7)];
    var food = D.herbs.filter(function (x) { return x.flags.indexOf('食') >= 0; });
    var pick = [];
    for (var i = 0; i < 14 && i < food.length; i++) pick.push(food[(dayIdx(food.length, 3) + i * 7) % food.length]);
    pick = pick.filter(function (x, i) { return pick.indexOf(x) === i; });
    var hn = nm(h), fn = nm(f);
    return '<section class="hero home-hero"><span class="hero-seal">医</span><h1>' + t('heroT') + '</h1>' +
      (S.lang === 'bi' ? '<p class="sub-en" style="margin-top:2px">' + te('heroT') + '</p>' : '') +
      '<p>' + bi(T.zh.heroSub, T.en.heroSub) + '</p>' +
      '<div class="hstats"><a href="#/l"><b>' + D.th.length + '</b> ' + t('chs') + '</a><a href="#/h"><b>' + D.herbs.length + '</b> ' + t('herbsN') + '</a><a href="#/f"><b>' + D.forms.length + '</b> ' + t('formsN') + '</a></div></section>' +

      '<section><div class="sec-h"><h2>' + th('path') + '</h2></div><div class="steps">' +
      [['L', '#/l/' + D.th[0].id, D.th.length + ' ' + t('chs')], ['H', '#/h', D.herbs.length + ' ' + t('herbsN')], ['F', '#/f', D.forms.length + ' ' + t('formsN')]].map(function (p, i) {
        return '<a class="stepc st-' + p[0] + '" href="' + p[1] + '"><span class="st-n">' + (S.lang === 'en' ? 'Step ' + (i + 1) : '第' + '一二三'.charAt(i) + '步') + '</span>' +
          '<b>' + th('p' + p[0]) + '</b><span class="st-d">' + bi(T.zh['p' + p[0] + 'D'], T.en['p' + p[0] + 'D']) + '</span><span class="st-c">' + p[2] + ' · ' + t('begin') + '</span></a>';
      }).join('') + '</div></section>' +

      '<section class="duo"><div><div class="sec-h"><h2>' + th('todayH') + '</h2></div>' +
      '<a class="today" href="#/h/i/' + h.id + '"><span class="code">' + bi(subOf(h).zh, subOf(h).en) + '</span><span class="t-name">' + hn.main + '</span><span class="t-py">' + hn.sub + '</span>' +
      '<span class="chips">' + naChip(h) + flagChips(h) + '</span><span class="t-loc">' + bi(plain(h.use), plain(h.useEn)) + '</span></a></div>' +
      '<div><div class="sec-h"><h2>' + th('todayF') + '</h2></div>' +
      '<a class="today" href="#/f/i/' + f.id + '"><span class="code">' + bi(f.src, f.srcEn) + '</span><span class="t-name">' + fn.main + '</span><span class="t-py">' + fn.sub + '</span>' +
      '<span class="t-loc">' + bi(plain(f.jie), plain(f.jieEn)) + '</span></a></div></section>' +

      '<section><div class="sec-h"><h2>' + th('kitchen') + '</h2><a class="btn ghost sm" href="#/food">' + t('seeAll') + ' (' + food.length + ')</a></div>' +
      '<p class="lead-s">' + bi(T.zh.kitchenD, T.en.kitchenD) + '</p><div class="kgrid">' +
      pick.map(function (x) { var n = nm(x); return '<a href="#/h/i/' + x.id + '"><b>' + n.main + '</b><span>' + (S.lang === 'zh' ? x.en : n.sub) + '</span></a>'; }).join('') + '</div></section>' +

      '<section><div class="sec-h"><h2>' + th('more') + '</h2></div><div class="quick qsites">' +
      '<a href="https://junrong2720-cmyk.github.io/acu/' + (S.lang === 'zh' ? '' : '?lang=' + S.lang) + '" target="_blank" rel="noopener"><b>' + th('acuLink') + '</b><span>' + t('acuLinkD') + '</span></a>' +
      '<a href="https://junrong2720-cmyk.github.io/tcmjr/' + (S.lang === 'en' ? 'en.html' : '') + '" target="_blank" rel="noopener"><b>' + th('tizhiLink') + '</b><span>' + t('tizhiLinkD') + '</span></a></div></section>';
  }

  /* ---------- 理论 ---------- */
  function pTheoryIndex() {
    var s = '<div class="sec-h page-h"><h1>' + th('lIndex') + '</h1></div><p class="lead-s">' + bi(T.zh.lIndexD, T.en.lIndexD) + '</p>';
    THG.forEach(function (g) {
      s += '<section><h3 class="grp-h">' + th(g[0]) + '</h3><div class="chgrid">';
      D.th.slice(g[1] - 1, g[2]).forEach(function (c) {
        s += '<a class="chcard' + (S.read[c.id] ? ' done' : '') + '" href="#/l/' + c.id + '"><span class="ch-n">' + (c.n < 10 ? '0' : '') + c.n + '</span>' +
          '<span class="ch-ic">' + c.ic + '</span><b>' + bi(c.zh, c.en) + '</b><span class="ch-d">' + bi(c.lead, c.leadEn) + '</span>' +
          (S.read[c.id] ? '<span class="ch-ok">' + t('isRead') + '</span>' : '') + '</a>';
      });
      s += '</div></section>';
    });
    return s;
  }
  function pChapter(id) {
    var c = D.thById[id];
    if (!c) return pNotFound();
    var i = D.th.indexOf(c), prev = D.th[i - 1], next = D.th[i + 1];
    var zh = S.lang !== 'en', en = S.lang !== 'zh';
    var s = crumb([[t('navL'), '#/l'], [S.lang === 'en' ? c.en : c.zh]]) +
      '<article class="art"><header class="art-h"><span class="ch-n">' + (S.lang === 'en' ? 'Chapter ' + c.n : '第 ' + c.n + ' 章') + '</span>' +
      '<h1><span class="art-ic">' + c.ic + '</span>' + (S.lang === 'en' ? c.en : c.zh) + '</h1>' + (S.lang === 'bi' ? '<p class="sub-en">' + c.en + '</p>' : '') +
      '<p class="art-lead">' + bi(c.lead, c.leadEn) + '</p></header>';
    s += '<nav class="art-toc"><b>' + t('toc') + '</b>' + c.secs.map(function (x, k) { return '<a href="#/l/' + id + '/' + k + '">' + (k + 1) + '. ' + (S.lang === 'en' ? x[1] : x[0]) + '</a>'; }).join('') + '</nav>';
    c.secs.forEach(function (x, k) {
      s += '<section class="art-s" id="s' + k + '"><h2>' + (S.lang === 'en' ? x[1] : x[0]) + (S.lang === 'bi' ? '<span class="sub-en">' + x[1] + '</span>' : '') + '</h2>';
      if (zh) s += '<div class="art-b">' + md(x[2], true) + '</div>';
      if (en) s += '<div class="art-b' + (zh ? ' art-en' : '') + '">' + md(x[3], false) + '</div>';
      s += '</section>';
    });
    s += '<div class="art-f"><button class="btn' + (S.read[id] ? ' ghost' : '') + '" data-read="' + id + '">' + (S.read[id] ? t('isRead') : t('markRead')) + '</button></div></article>';
    s += pager(prev && ['#/l/' + prev.id, S.lang === 'en' ? prev.en : prev.zh], next && ['#/l/' + next.id, S.lang === 'en' ? next.en : next.zh], t('prevCh'), t('nextCh'));
    return s;
  }

  /* ---------- 中药 / 方剂 目录 ---------- */
  function pCatIndex(kind) {
    var cats = kind === 'h' ? D.hc : D.fc;
    var s = '<div class="sec-h page-h"><h1>' + th(kind === 'h' ? 'hIndex' : 'fIndex') + '</h1>' +
      (kind === 'h' ? '<a class="btn ghost sm" href="#/food">' + t('fFood') + '</a>' : '') + '</div>' +
      '<p class="lead-s">' + bi(T.zh[kind === 'h' ? 'hIndexD' : 'fIndexD'], T.en[kind === 'h' ? 'hIndexD' : 'fIndexD']) + '</p><div class="catgrid">';
    cats.forEach(function (c, i) {
      var items = [].concat.apply([], c.subs.map(function (x) { return x.items; }));
      var seen = items.filter(function (x) { return S.seen[kind + ':' + x.id]; }).length;
      s += '<a class="catcard cc' + (i % 6) + '" href="#/' + kind + '/' + c.id + '"><span class="cc-n">' + c.n + ' ' + t(kind === 'h' ? 'cnt' : 'cntF') + '</span>' +
        '<b>' + bi(c.zh, c.en) + '</b><span class="cc-subs">' + c.subs.map(function (x) { return S.lang === 'en' ? x.en : x.zh; }).filter(Boolean).join(' · ') + '</span>' +
        '<span class="bar"><i style="width:' + Math.round(seen / c.n * 100) + '%"></i></span></a>';
    });
    return s + '</div>';
  }
  var catFilter = 'all';
  function pCat(kind, id) {
    var cats = kind === 'h' ? D.hc : D.fc;
    var c = cats.filter(function (x) { return x.id === id; })[0];
    if (!c) return pNotFound();
    var i = cats.indexOf(c), prev = cats[i - 1], next = cats[i + 1];
    var s = crumb([[t(kind === 'h' ? 'navH' : 'navF'), '#/' + kind], [S.lang === 'en' ? c.en : c.zh]]) +
      '<div class="mhead cathead"><div><h1>' + (S.lang === 'en' ? c.en : c.zh) + '</h1>' + (S.lang === 'bi' ? '<p class="m-alt">' + c.en + '</p>' : '') +
      '<p class="m-meta">' + c.n + ' ' + t(kind === 'h' ? 'cnt' : 'cntF') + '</p></div></div>' +
      '<div class="catintro">' + md(S.lang === 'en' ? c.dEn : c.d, S.lang !== 'en') + (S.lang === 'bi' ? '<div class="art-en">' + md(c.dEn, false) + '</div>' : '') + '</div>';
    if (kind === 'h') {
      s += '<div class="mtools"><div class="seg" id="cfilt">' + [['all', 'filterAll'], ['food', 'fFood'], ['tox', 'fTox'], ['preg', 'fPreg']].map(function (f) {
        return '<button data-f="' + f[0] + '" class="' + (catFilter === f[0] ? 'on' : '') + '">' + t(f[1]) + '</button>';
      }).join('') + '</div></div>';
    }
    c.subs.forEach(function (sub) {
      var items = sub.items;
      if (kind === 'h' && catFilter !== 'all') items = items.filter(function (h) {
        return catFilter === 'food' ? h.flags.indexOf('食') >= 0 : catFilter === 'tox' ? h.flags.some(function (f) { return /^毒/.test(f); }) : h.flags.indexOf('孕') >= 0;
      });
      if (!items.length) return;
      s += '<section class="subsec">' + (sub.zh ? '<h3 class="grp-h">' + bi(sub.zh, sub.en) + ' <span class="cnt">' + items.length + '</span></h3>' : '') +
        (sub.d ? '<p class="sub-d">' + bi(fw(sub.d), sub.dEn) + '</p>' : '') +
        '<div class="plist">' + items.map(function (x) { return kind === 'h' ? hRow(x) : fRow(x); }).join('') + '</div></section>';
    });
    s += pager(prev && ['#/' + kind + '/' + prev.id, S.lang === 'en' ? prev.en : prev.zh], next && ['#/' + kind + '/' + next.id, S.lang === 'en' ? next.en : next.zh], t('prev'), t('next'));
    return s;
  }

  /* ---------- 单味药 ---------- */
  function pHerb(id) {
    var h = D.hById[id];
    if (!h) return pNotFound();
    S.seen['h:' + id] = 1; save();
    var c = catOf(h), sub = c.subs[h.s], n = nm(h), i = D.herbs.indexOf(h);
    var prev = D.herbs[i - 1], next = D.herbs[i + 1];
    var fs = herbForms[h.id] || [];
    var s = crumb([[t('navH'), '#/h'], [S.lang === 'en' ? c.en : c.zh, '#/h/' + c.id], [n.main]]) +
      '<div class="point ' + naCls(h.na) + '"><div class="phead"><div class="ph-l"><span class="ph-code">' + bi(sub.zh || c.zh, sub.en || c.en) + '</span>' +
      '<h1>' + n.main + '</h1><div class="ph-py">' + n.sub + '</div>' + (S.lang === 'zh' ? '<div class="ph-en">' + h.en + '</div>' : '') +
      '<div class="ph-la">' + t('latin') + ':<i>' + h.la + '</i></div></div>' + starBtn('h:' + h.id) + '</div>' +
      '<div class="xwrow"><div><h3>' + th('nature') + '</h3><span class="chips big">' + naChip(h) + '</span></div>' +
      '<div><h3>' + th('flavor') + '</h3><span class="chips big">' + h.fl.map(function (f) { return '<span class="chip c-fl">' + xwBi(f) + '</span>'; }).join('') + '</span></div>' +
      '<div><h3>' + th('mer') + '</h3><span class="chips big">' + h.gj.map(function (g) { return '<span class="chip c-gj">' + gjBi(g) + '</span>'; }).join('') + '</span></div>' +
      (h.flags.length ? '<div><h3>&nbsp;</h3><span class="chips big">' + flagChips(h) + '</span></div>' : '') + '</div>' +
      '<div class="blk"><h3>' + th('gx') + '</h3><p class="gx">' + bi(h.gx, h.gxEn) + '</p></div>' +
      '<div class="blk"><h3>' + th('use') + '</h3><p>' + bi(inline(h.use), inline(h.useEn)) + '</p></div>' +
      (h.care ? '<div class="blk warn"><h3>' + th('care') + '</h3><p>' + bi(inline(h.care), inline(h.careEn)) + '</p></div>' : '') +
      (fs.length ? '<div class="blk"><h3>' + th('inForms') + '</h3><div class="flinks">' + fs.map(function (f) { return '<a href="#/f/i/' + f.id + '">' + nmInline(f) + '</a>'; }).join('') + '</div></div>' : '') +
      '</div>';
    s += pager(prev && [url(prev), nm(prev).main], next && [url(next), nm(next).main], t('prev'), t('next'));
    return s;
  }

  /* ---------- 单首方 ---------- */
  function pForm(id) {
    var f = D.fById[id];
    if (!f) return pNotFound();
    S.seen['f:' + id] = 1; save();
    var c = catOf(f), sub = c.subs[f.s], n = nm(f), i = D.forms.indexOf(f);
    var prev = D.forms[i - 1], next = D.forms[i + 1];
    var R = T[S.lang === 'en' ? 'en' : 'zh'];
    var s = crumb([[t('navF'), '#/f'], [S.lang === 'en' ? c.en : c.zh, '#/f/' + c.id], [n.main]]) +
      '<div class="point formp"><div class="phead"><div class="ph-l"><span class="ph-code">' + bi(sub.zh || c.zh, sub.en || c.en) + '</span>' +
      '<h1>' + n.main + '</h1><div class="ph-py">' + n.sub + '</div>' + (S.lang === 'zh' ? '<div class="ph-en">' + f.en + '</div>' : '') +
      '<div class="ph-la">' + t('src') + ':' + bi(f.src, f.srcEn) + '</div></div>' + starBtn('f:' + f.id) + '</div>' +
      '<div class="blk"><h3>' + th('comp') + '</h3><div class="comp">' + f.comp.map(function (g) {
        return '<div class="crole r-' + g.r + '"><div class="cr-h"><b>' + (S.lang === 'bi' ? T.zh.roles[g.r] + ' <small>' + T.en.roles[g.r] + '</small>' : R.roles[g.r] || g.r) + '</b><span>' + (R.roleD[g.r] || '') + '</span></div><div class="cr-hs">' +
          g.hs.map(function (hn) {
            var h = D.herb(hn);
            if (!h) return '<span class="ch-x"><b>' + hn + '</b>' + (S.lang !== 'zh' && EXTRA[hn] ? '<small>' + EXTRA[hn] + '</small>' : '') + '</span>';
            return '<a href="#/h/i/' + h.id + '"><b>' + (S.lang === 'en' ? h.py : hn) + '</b><small>' + (S.lang === 'en' ? h.en : S.lang === 'bi' ? h.py + ' · ' + h.en : h.py) + '</small></a>';
          }).join('') + '</div></div>';
      }).join('') + '</div><p class="fig-note">' + t('compNote') + '</p></div>' +
      '<div class="blk"><h3>' + th('gy') + '</h3><p class="gx">' + bi(f.gx, f.gxEn) + '</p></div>' +
      '<div class="blk"><h3>' + th('zz') + '</h3><p>' + bi(inline(f.zz), inline(f.zzEn)) + '</p></div>' +
      '<div class="blk"><h3>' + th('jie') + '</h3><p>' + bi(inline(f.jie), inline(f.jieEn)) + '</p></div>' +
      (f.care ? '<div class="blk warn"><h3>' + th('care') + '</h3><p>' + bi(inline(f.care), inline(f.careEn)) + '</p></div>' : '') +
      (sub.items.length > 1 ? '<div class="blk"><h3>' + th('sibl') + '</h3><div class="flinks">' + sub.items.filter(function (x) { return x !== f; }).map(function (x) { return '<a href="#/f/i/' + x.id + '">' + nmInline(x) + '</a>'; }).join('') + '</div></div>' : '') +
      '</div>';
    s += pager(prev && [url(prev), nm(prev).main], next && [url(next), nm(next).main], t('prev'), t('next'));
    return s;
  }

  /* ---------- 药食同源 ---------- */
  function pFood() {
    var food = D.herbs.filter(function (x) { return x.flags.indexOf('食') >= 0; });
    return crumb([[t('navH'), '#/h'], [t('foodT')]]) + '<div class="sec-h page-h"><h1>' + th('foodT') + ' <span class="cnt">' + food.length + '</span></h1></div>' +
      '<p class="lead-s">' + bi(T.zh.foodD, T.en.foodD) + '</p><div class="plist">' + food.map(function (h) { return hRow(h); }).join('') + '</div>';
  }

  /* ---------- 搜索 ---------- */
  function norm(s) { return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ''); }
  function pSearch(q) {
    q = (q || '').trim();
    if (!q) return '<p class="empty">' + t('searchTip') + '</p>';
    var nq = norm(q);
    function hit(fields) { return fields.some(function (x) { return x && norm(x).indexOf(nq) >= 0; }); }
    var hs = D.herbs.filter(function (h) { return hit([h.zh, h.alias.join(' '), h.py, h.en, h.la, h.gx, h.gxEn, h.use, h.useEn]); });
    var fs = D.forms.filter(function (f) { return hit([f.zh, f.py, f.en, f.gx, f.gxEn, f.zz, f.zzEn]); });
    var ls = D.th.filter(function (c) { return hit([c.zh, c.en, c.lead, c.leadEn].concat(c.secs.map(function (x) { return x[0] + x[1] + x[2] + x[3]; }))); });
    // 名称命中优先
    function rank(arr) { return arr.sort(function (a, b) { var na = hit([a.zh, a.py, a.en]) ? 0 : 1, nb = hit([b.zh, b.py, b.en]) ? 0 : 1; return na - nb; }); }
    rank(hs); rank(fs);
    var total = hs.length + fs.length + ls.length;
    var s = '<div class="sec-h page-h"><h1>“' + esc(q) + '”</h1><span class="muted">' + total + ' ' + t('results') + '</span></div>';
    if (!total) return s + '<p class="empty">' + t('noResult') + '</p>';
    var hq = /[\u4e00-\u9fff]/.test(q) || !/[\u0300-\u036f]/.test(q) ? q : '';
    if (ls.length) s += '<section><h3 class="grp-h">' + th('sL') + ' <span class="cnt">' + ls.length + '</span></h3><div class="plist">' +
      ls.map(function (c) { return '<a class="prow frow" href="#/l/' + c.id + '"><span class="nm"><b>' + c.ic + ' ' + (S.lang === 'en' ? c.en : c.zh) + '</b></span><span class="brief">' + (S.lang === 'en' ? c.leadEn : c.lead) + '</span><span></span></a>'; }).join('') + '</div></section>';
    if (hs.length) s += '<section><h3 class="grp-h">' + th('sH') + ' <span class="cnt">' + hs.length + '</span></h3><div class="plist">' + hs.slice(0, 120).map(function (h) { return hRow(h, hq); }).join('') + '</div></section>';
    if (fs.length) s += '<section><h3 class="grp-h">' + th('sF') + ' <span class="cnt">' + fs.length + '</span></h3><div class="plist">' + fs.slice(0, 120).map(function (f) { return fRow(f, hq); }).join('') + '</div></section>';
    return s;
  }

  /* ---------- 练习 ---------- */
  var Q = { mode: 'hcat', scope: 'all', n: 10, run: null };
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function poolFor(mode, scope) {
    var isH = /^h|card/.test(mode) && mode !== 'fjun' && mode !== 'fgy';
    var kind = (mode === 'fjun' || mode === 'fgy') ? 'f' : 'h';
    if (mode === 'card') kind = Q.cardKind || 'h';
    var all = kind === 'h' ? D.herbs : D.forms;
    if (scope === 'star') all = all.filter(function (x) { return S.star.indexOf(kind + ':' + x.id) >= 0; });
    else if (scope === 'wrong') all = all.filter(function (x) { return S.wrong[kind + ':' + x.id]; });
    else if (scope !== 'all') all = all.filter(function (x) { return x.c === scope; });
    if (mode === 'fjun') all = all.filter(function (f) { return f.comp[0] && /君/.test(f.comp[0].r) && D.herb(f.comp[0].hs[0]); });
    return all;
  }
  function pQuiz() {
    if (Q.run) return qView();
    var modes = [['hcat', 'mHcat', 'mHcatD'], ['hgx', 'mHgx', 'mHgxD'], ['hna', 'mHna', 'mHnaD'], ['fjun', 'mFjun', 'mFjunD'], ['fgy', 'mFgy', 'mFgyD'], ['card', 'mCard', 'mCardD']];
    var isF = Q.mode === 'fjun' || Q.mode === 'fgy' || (Q.mode === 'card' && Q.cardKind === 'f');
    var cats = isF ? D.fc : D.hc;
    var s = '<div class="sec-h page-h"><h1>' + th('quizTitle') + '</h1></div><div class="qset"><h3>' + t('mode') + '</h3><div class="modes">' +
      modes.map(function (m) { return '<button data-mode="' + m[0] + '" class="' + (Q.mode === m[0] ? 'on' : '') + '"><b>' + t(m[1]) + '</b><span>' + t(m[2]) + '</span></button>'; }).join('') + '</div>' +
      '<div class="qrow">' + (Q.mode === 'card' ? '<label>' + t('navH') + ' / ' + t('navF') + '<select id="qkind"><option value="h"' + (Q.cardKind !== 'f' ? ' selected' : '') + '>' + t('navH') + '</option><option value="f"' + (Q.cardKind === 'f' ? ' selected' : '') + '>' + t('navF') + '</option></select></label>' : '') +
      '<label>' + t('scope') + '<select id="qscope"><option value="all">' + t('scAll') + '</option>' +
      cats.map(function (c) { return '<option value="' + c.id + '"' + (Q.scope === c.id ? ' selected' : '') + '>' + (S.lang === 'en' ? c.en : c.zh) + '</option>'; }).join('') +
      '<option value="star"' + (Q.scope === 'star' ? ' selected' : '') + '>' + t('scStar') + '</option><option value="wrong"' + (Q.scope === 'wrong' ? ' selected' : '') + '>' + t('scWrong') + '</option></select></label>' +
      '<label>' + t('count') + '<select id="qn">' + [10, 20, 30].map(function (k) { return '<option' + (Q.n === k ? ' selected' : '') + '>' + k + '</option>'; }).join('') + '</select></label></div>' +
      '<div id="qwarn" class="warnmsg"></div><button class="btn" id="qgo">' + t('start') + '</button></div>';
    return s;
  }
  function makeQ(x, pool) {
    var m = Q.run.mode, opts, ans;
    if (m === 'hcat') {
      var subs = []; D.hc.forEach(function (c) { c.subs.forEach(function (sb, i) { subs.push({ c: c, s: i, zh: sb.zh || c.zh, en: sb.en || c.en }); }); });
      var right = subs.filter(function (z) { return z.c.id === x.c && z.s === x.s; })[0];
      var others = shuffle(subs.filter(function (z) { return z !== right && z.c.id !== x.c; })).slice(0, 3);
      opts = shuffle([right].concat(others)).map(function (z) { return { html: bi(z.zh, z.en), ok: z === right }; });
    } else if (m === 'hna') {
      var b = naBase(x.na), all = ['寒', '凉', '平', '温', '热'];
      if (b === '寒' || b === '凉') all = ['寒', '平', '温', '热']; // 寒凉同归
      opts = all.map(function (z) { var ok = z === b || (z === '寒' && b === '凉'); return { html: bi(z === '寒' && all.length === 4 ? '寒 / 凉' : z, z === '寒' && all.length === 4 ? 'cold / cool' : XW[z]), ok: ok }; });
    } else if (m === 'fjun') {
      var jun = D.herb(x.comp[0].hs[0]);
      var inF = []; x.comp.forEach(function (g) { g.hs.forEach(function (n) { var h = D.herb(n); if (h) inF.push(h.id); }); });
      var ds = shuffle(D.herbs.filter(function (h) { return inF.indexOf(h.id) < 0; })).slice(0, 1);
      var fromF = shuffle(x.comp.slice(1).reduce(function (a, g) { return a.concat(g.hs); }, []).map(function (n) { return D.herb(n); }).filter(function (h) { return h && h !== jun; }));
      fromF = fromF.filter(function (h, i) { return fromF.indexOf(h) === i; }).slice(0, 2);
      var list = [jun].concat(fromF); while (list.length < 4) { list.push(ds.shift() || shuffle(D.herbs)[0]); }
      opts = shuffle(list).map(function (h) { return { html: '<b>' + nm(h).main + '</b>' + (S.lang !== 'zh' ? '<span class="sub-en">' + h.en + '</span>' : ''), ok: h === jun }; });
    } else {
      var src = pool.length >= 4 ? pool : (m === 'fgy' ? D.forms : D.herbs);
      var same = src.filter(function (z) { return z !== x && z.c === x.c; });
      var rest = src.filter(function (z) { return z !== x && z.c !== x.c; });
      var ds2 = shuffle(same).slice(0, 2).concat(shuffle(rest)).slice(0, 3);
      opts = shuffle([x].concat(ds2)).map(function (z) { return { html: '<b>' + nm(z).main + '</b>' + (S.lang !== 'zh' ? '<span class="sub-en">' + (S.lang === 'en' ? z.en : z.py) + '</span>' : ''), ok: z === x }; });
    }
    return { x: x, opts: opts };
  }
  function qStart() {
    var pool = poolFor(Q.mode, Q.scope);
    if (pool.length < 4 && Q.mode !== 'card' || pool.length < 1) { document.getElementById('qwarn').textContent = t('notEnough'); return; }
    var items = shuffle(pool).slice(0, Q.n);
    Q.run = { mode: Q.mode, kind: (Q.mode === 'fjun' || Q.mode === 'fgy' || (Q.mode === 'card' && Q.cardKind === 'f')) ? 'f' : 'h', items: items, i: 0, ok: 0, miss: [], pool: pool, cur: null, answered: false, flipped: false };
    Q.run.cur = Q.mode === 'card' ? { x: items[0] } : makeQ(items[0], pool);
    render();
  }
  function stem(x) {
    var m = Q.run.mode, n = nm(x);
    if (m === 'hgx') return '<p class="qtext">' + bi(x.gx, x.gxEn) + '</p><p class="qask">' + t('qHgxAsk') + '</p>';
    if (m === 'fgy') return '<p class="qtext">' + bi(x.gx, x.gxEn) + '</p><p class="qask">' + t('qFgyAsk') + '</p>';
    var ask = { hcat: 'qHcatAsk', hna: 'qHnaAsk', fjun: 'qFjunAsk' }[m];
    return '<div class="qbig">' + n.main + '<small>' + n.sub + '</small></div><p class="qask">' + t(ask) + '</p>';
  }
  function revealHtml(x) {
    var n = nm(x);
    if (x.t === 'h') return '<div class="reveal"><div class="rv-h"><b>' + n.main + '</b> <span class="muted">' + n.sub + '</span></div>' +
      '<p><b>' + t('cat') + '</b>' + bi(subOf(x).zh || catOf(x).zh, subOf(x).en || catOf(x).en) + '</p>' +
      '<p><b>' + t('nature') + '</b>' + (S.lang === 'en' ? xwEn(x.na) : x.na) + ' · ' + x.fl.map(xwBi).join(', ') + '</p>' +
      '<p><b>' + t('gx') + '</b>' + bi(x.gx, x.gxEn) + '</p><a href="' + url(x) + '">' + t('viewIt') + ' →</a></div>';
    var R = T[S.lang === 'en' ? 'en' : 'zh'].roles;
    return '<div class="reveal"><div class="rv-h"><b>' + n.main + '</b> <span class="muted">' + n.sub + '</span></div>' +
      '<p><b>' + t('comp') + '</b>' + x.comp.map(function (g) { return (R[g.r] || g.r) + ':' + g.hs.join('、'); }).join(';') + '</p>' +
      '<p><b>' + t('gy') + '</b>' + bi(x.gx, x.gxEn) + '</p><a href="' + url(x) + '">' + t('viewIt') + ' →</a></div>';
  }
  function qView() {
    var r = Q.run;
    if (r.i >= r.items.length) {
      var s = '<div class="done"><h2>' + t('done') + '</h2><div class="score">' + r.ok + '<small> / ' + r.items.length + '</small></div>' +
        '<div class="qact"><button class="btn" id="qagain">' + t('again') + '</button><button class="btn ghost" id="qback">' + t('back') + '</button></div></div>';
      if (r.miss.length) s += '<section><h3 class="grp-h">' + t('reviewWrong') + '</h3><div class="plist">' + r.miss.map(function (x) { return x.t === 'h' ? hRow(x) : fRow(x); }).join('') + '</div></section>';
      return s;
    }
    var x = r.cur.x, pg = '<div class="qprog"><span>' + (r.i + 1) + ' / ' + r.items.length + '</span><span class="bar"><i style="width:' + (r.i / r.items.length * 100) + '%"></i></span><span>✓ ' + r.ok + '</span></div>';
    if (r.mode === 'card') {
      var n = nm(x);
      return pg + '<div class="card"><div class="c-front"><div class="c-name">' + n.main + '</div><div class="c-py">' + n.sub + '</div>' +
        (r.flipped ? '<div class="c-back">' + revealHtml(x) + '</div><div class="qact"><button class="btn" data-card="1">' + t('know') + '</button><button class="btn ghost" data-card="0">' + t('dontKnow') + '</button></div>'
          : '<button class="btn" id="qflip">' + t('flip') + '</button>') + '</div></div>';
    }
    var s2 = pg + '<div class="qbox">' + stem(x) + '<div class="opts">' + r.cur.opts.map(function (o, k) {
      var cls = r.answered ? (o.ok ? 'ok' : (r.pick === k ? 'bad' : '')) : '';
      return '<button data-opt="' + k + '" class="' + cls + '"' + (r.answered ? ' disabled' : '') + '>' + o.html + '</button>';
    }).join('') + '</div>';
    if (r.answered) {
      var good = r.cur.opts[r.pick].ok;
      s2 += '<div class="fb ' + (good ? 'ok' : 'bad') + '">' + (good ? t('right') : t('wrongA')) + '</div>' + revealHtml(x) +
        '<div class="qact"><button class="btn" id="qnext">' + (r.i + 1 >= r.items.length ? t('finish') : t('nextQ')) + '</button></div>';
    }
    return s2 + '</div>';
  }
  function qAdvance() {
    var r = Q.run; r.i++; r.answered = false; r.flipped = false; r.pick = null;
    if (r.i < r.items.length) r.cur = r.mode === 'card' ? { x: r.items[r.i] } : makeQ(r.items[r.i], r.pool);
    render();
  }
  function markWrong(x, bad) {
    var k = x.t + ':' + x.id;
    if (bad) S.wrong[k] = (S.wrong[k] || 0) + 1;
    else if (Q.scope === 'wrong' && S.wrong[k]) delete S.wrong[k];
    save();
  }

  /* ---------- 我的 ---------- */
  function pMe() {
    var readN = Object.keys(S.read).length;
    var sh = Object.keys(S.seen).filter(function (k) { return /^h:/.test(k); }).length, sf = Object.keys(S.seen).filter(function (k) { return /^f:/.test(k); }).length;
    function items(keys) {
      return keys.map(function (k) { var p = k.split(':'); return p[0] === 'h' ? D.hById[p[1]] : D.fById[p[1]]; }).filter(Boolean);
    }
    var st = items(S.star), wr = items(Object.keys(S.wrong));
    var s = '<div class="sec-h page-h"><h1>' + th('me') + '</h1></div><div class="mestat">' +
      '<div><b>' + readN + '<small> / ' + D.th.length + '</small></b><span>' + t('readN') + '</span></div>' +
      '<div><b>' + sh + '<small> / ' + D.herbs.length + '</small></b><span>' + t('seenH') + '</span></div>' +
      '<div><b>' + sf + '<small> / ' + D.forms.length + '</small></b><span>' + t('seenF') + '</span></div></div>' +
      '<section><div class="sec-h"><h2>' + th('starList') + ' <span class="cnt">' + st.length + '</span></h2></div>' +
      (st.length ? '<div class="plist">' + st.map(function (x) { return x.t === 'h' ? hRow(x) : fRow(x); }).join('') + '</div>' : '<p class="empty">' + t('noStar') + '</p>') + '</section>' +
      '<section><div class="sec-h"><h2>' + th('wrongList') + ' <span class="cnt">' + wr.length + '</span></h2>' +
      (wr.length ? '<button class="btn ghost sm" id="mepw">' + t('practiceWrong') + '</button>' : '') + '</div>' +
      (wr.length ? '<div class="plist">' + wr.map(function (x) { return (x.t === 'h' ? hRow(x) : fRow(x)).replace('</a>', '<span class="muted">' + S.wrong[x.t + ':' + x.id] + t('times') + '</span></a>'); }).join('') + '</div>' : '<p class="empty">' + t('noWrong') + '</p>') + '</section>' +
      '<div class="clears"><button class="btn ghost sm" id="clw">' + t('clearWrong') + '</button><button class="btn ghost sm" id="cla">' + t('clearAll') + '</button></div><p class="muted">' + t('store') + '</p>';
    return s;
  }
  function pNotFound() { return '<p class="empty">404 · <a href="#/">' + t('site') + '</a></p>'; }

  /* ---------- 路由 ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, ''), p = h.split('/').map(decodeURIComponent);
    var nav = p[0] || 'home', html, scrollTo = null;
    if (!p[0]) html = pHome();
    else if (p[0] === 'l') { if (p[1]) { html = pChapter(p[1]); if (p[2]) scrollTo = 's' + p[2]; } else html = pTheoryIndex(); }
    else if (p[0] === 'h') html = p[1] === 'i' ? pHerb(p[2]) : p[1] ? pCat('h', p[1]) : pCatIndex('h');
    else if (p[0] === 'f') html = p[1] === 'i' ? pForm(p[2]) : p[1] ? pCat('f', p[1]) : pCatIndex('f');
    else if (p[0] === 'food') { html = pFood(); nav = 'h'; }
    else if (p[0] === 's') html = pSearch(p.slice(1).join('/'));
    else if (p[0] === 'q') html = pQuiz();
    else if (p[0] === 'me') html = pMe();
    else html = pNotFound();
    app.innerHTML = html;
    [].forEach.call(document.querySelectorAll('#nav a'), function (a) { a.classList.toggle('on', a.getAttribute('data-nav') === nav); });
    if (scrollTo) { var el = document.getElementById(scrollTo); if (el) el.scrollIntoView(); }
    else if (!route.keep) window.scrollTo(0, 0);
    route.keep = false;
    if (p[0] !== 's') { var qi = document.getElementById('q'); if (document.activeElement !== qi) qi.value = ''; }
  }
  function render() { route.keep = true; route(); }

  function applyStatic() {
    [].forEach.call(document.querySelectorAll('[data-t]'), function (el) { el.innerHTML = t(el.getAttribute('data-t')); });
    document.getElementById('q').placeholder = t('searchPh');
    [].forEach.call(document.querySelectorAll('#lang button'), function (b) { b.classList.toggle('on', b.getAttribute('data-lang') === S.lang); });
    document.documentElement.lang = S.lang === 'en' ? 'en' : 'zh-CN';
    document.title = S.lang === 'en' ? 'Chinese Medicine Explained · 读懂中医' : '读懂中医 · Chinese Medicine Explained';
  }

  /* ---------- 事件 ---------- */
  document.getElementById('lang').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    S.lang = b.getAttribute('data-lang'); save(); applyStatic(); render();
  });
  var qt;
  document.getElementById('q').addEventListener('input', function (e) {
    clearTimeout(qt); var v = e.target.value;
    qt = setTimeout(function () {
      if (v.trim()) { history.replaceState(null, '', '#/s/' + encodeURIComponent(v.trim())); render(); }
    }, 220);
  });
  document.getElementById('q').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.value.trim()) location.hash = '#/s/' + encodeURIComponent(e.target.value.trim());
  });
  app.addEventListener('click', function (e) {
    var el;
    if ((el = e.target.closest('[data-star]'))) {
      var k = el.getAttribute('data-star'), i = S.star.indexOf(k);
      if (i >= 0) S.star.splice(i, 1); else S.star.unshift(k);
      save(); render(); return;
    }
    if ((el = e.target.closest('[data-read]'))) {
      var id = el.getAttribute('data-read');
      if (S.read[id]) delete S.read[id]; else S.read[id] = 1;
      save(); render(); return;
    }
    if ((el = e.target.closest('#cfilt button'))) { catFilter = el.getAttribute('data-f'); render(); return; }
    if ((el = e.target.closest('[data-mode]'))) {
      var nm2 = el.getAttribute('data-mode'), wasF = Q.mode === 'fjun' || Q.mode === 'fgy';
      var isF = nm2 === 'fjun' || nm2 === 'fgy';
      if (wasF !== isF && Q.scope !== 'star' && Q.scope !== 'wrong') Q.scope = 'all';
      Q.mode = nm2; render(); return;
    }
    if (e.target.id === 'qgo') { qStart(); return; }
    if ((el = e.target.closest('[data-opt]')) && Q.run && !Q.run.answered) {
      var r = Q.run; r.pick = +el.getAttribute('data-opt'); r.answered = true;
      var good = r.cur.opts[r.pick].ok;
      if (good) r.ok++; else r.miss.push(r.cur.x);
      markWrong(r.cur.x, !good); render(); return;
    }
    if (e.target.id === 'qnext') { qAdvance(); return; }
    if (e.target.id === 'qflip') { Q.run.flipped = true; render(); return; }
    if ((el = e.target.closest('[data-card]'))) {
      var ok = el.getAttribute('data-card') === '1';
      if (ok) Q.run.ok++; else Q.run.miss.push(Q.run.cur.x);
      markWrong(Q.run.cur.x, !ok); qAdvance(); return;
    }
    if (e.target.id === 'qagain') { Q.run = null; qStart(); return; }
    if (e.target.id === 'qback') { Q.run = null; render(); return; }
    if (e.target.id === 'mepw') {
      var hasH = Object.keys(S.wrong).some(function (k) { return /^h:/.test(k); });
      Q.mode = 'card'; Q.cardKind = hasH ? 'h' : 'f'; Q.scope = 'wrong'; Q.run = null; location.hash = '#/q'; return;
    }
    if (e.target.id === 'clw') { if (confirm(t('confirmClear'))) { S.wrong = {}; save(); render(); } return; }
    if (e.target.id === 'cla') { if (confirm(t('confirmClear'))) { S.wrong = {}; S.star = []; S.read = {}; S.seen = {}; save(); render(); } return; }
  });
  app.addEventListener('change', function (e) {
    if (e.target.id === 'qscope') Q.scope = e.target.value;
    if (e.target.id === 'qn') Q.n = +e.target.value;
    if (e.target.id === 'qkind') { Q.cardKind = e.target.value; Q.scope = 'all'; render(); }
  });
  window.addEventListener('hashchange', function () { if (!/^#\/q/.test(location.hash)) Q.run = null; route(); });

  applyStatic();
  route();
})();
