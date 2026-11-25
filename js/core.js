/* 读懂中医 · 数据注册
   L.T(章)  理论章节
   L.H(章)  中药章节:每药 [名|别名, 拼音, 英文名, 拉丁药材名, "味,味;性", "归经,归经", 功效, 功效EN, 怎么用, 怎么用EN, 注意, 注意EN, 标记]
            标记:食=药食同源 毒1=小毒 毒2=有毒 毒3=大毒 孕=孕妇慎用/禁用 保=保护/代用品
   L.F(章)  方剂章节:每方 [方名, 拼音, 英文名, "出处|Source", "君:药,药;臣:药;佐:药;使:药", 功用, 功用EN, 主治, 主治EN, 方解, 方解EN, 注意, 注意EN]
   中文字段里的半角 , ; : ( ) 自动转全角。 */
function fw(s) {
  /* [[...]] 链接与 {{...}} 图内不转 */
  return String(s == null ? '' : s).split(/(\[\[.*?\]\]|\{\{.*?\}\})/).map(function (seg, i) {
    return i % 2 ? seg : seg.replace(/,/g, '，').replace(/;/g, '；').replace(/:/g, '：')
      .replace(/\(/g, '（').replace(/\)/g, '）');
  }).join('');
}
function slug(py) {
  return String(py).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}
window.L = {
  th: [], thById: {},
  hc: [], herbs: [], hById: {}, hByZh: {},
  fc: [], forms: [], fById: {}, fByZh: {},
  _uid: function (map, id) { var k = id, n = 2; while (map[k]) k = id + n++; return k; },
  T: function (ch) {
    ch.n = this.th.length + 1;
    this.th.push(ch); this.thById[ch.id] = ch;
  },
  H: function (def) {
    var self = this;
    def.n = 0;
    def.subs.forEach(function (sub, si) {
      sub.items = sub.items.map(function (a) {
        var names = a[0].split('|'), xw = a[4].split(';');
        var h = {
          zh: names[0], alias: names.slice(1), py: a[1], en: a[2], la: a[3],
          fl: xw[0].split(','), na: xw[1] || '', gj: a[5].split(','),
          gx: fw(a[6]), gxEn: a[7], use: fw(a[8]), useEn: a[9], care: fw(a[10]), careEn: a[11] || '',
          flags: (a[12] || '').split(/\s+/).filter(Boolean), c: def.id, s: si, t: 'h'
        };
        h.id = self._uid(self.hById, slug(h.py));
        self.hById[h.id] = h; self.herbs.push(h);
        names.forEach(function (nm) { if (!self.hByZh[nm]) self.hByZh[nm] = h; });
        def.n++;
        return h;
      });
    });
    this.hc.push(def);
  },
  F: function (def) {
    var self = this;
    def.n = 0;
    def.subs.forEach(function (sub, si) {
      sub.items = sub.items.map(function (a) {
        var src = a[3].split('|'), names = a[0].split('|');
        var f = {
          zh: names[0], alias: names.slice(1), py: a[1], en: a[2], src: src[0], srcEn: src[1] || src[0],
          comp: a[4].split(';').map(function (g) {
            var p = g.split(':');
            return { r: p[0], hs: p[1].split(',').map(function (x) { return x.trim(); }) };
          }),
          gx: fw(a[5]), gxEn: a[6], zz: fw(a[7]), zzEn: a[8], jie: fw(a[9]), jieEn: a[10],
          care: fw(a[11]), careEn: a[12] || '', c: def.id, s: si, t: 'f'
        };
        f.id = self._uid(self.fById, slug(f.py));
        self.fById[f.id] = f; self.forms.push(f);
        names.forEach(function (nm) { self.fByZh[nm] = f; });
        def.n++;
        return f;
      });
    });
    this.fc.push(def);
  },
  /* 方中药名的同物异名、教材“附药” → 主条目 */
  ALIAS: {
    '芍药': '白芍', '桂心': '肉桂', '官桂': '肉桂', '干地黄': '生地黄', '蜀椒': '花椒', '川椒': '花椒',
    '胆南星': '天南星', '麦门冬': '麦冬', '橘红': '陈皮', '茯神': '茯苓', '赤茯苓': '茯苓', '胡麻仁': '黑芝麻',
    '龟甲胶': '龟甲', '龟板胶': '龟甲', '鹿角胶': '鹿茸', '鹿角': '鹿茸', '莲须': '莲子', '荷叶': '莲子', '荷梗': '莲子',
    '皂角刺': '皂荚', '枳壳': '枳实', '瓜蒌仁': '瓜蒌', '瓜蒌皮': '瓜蒌', '贝母': '川贝母', '沙参': '北沙参',
    '冬瓜子': '冬瓜皮', '怀牛膝': '牛膝', '川牛膝': '牛膝', '小麦': '浮小麦', '赭石': '代赭石', '苏叶': '紫苏叶', '苏子': '紫苏子'
  },
  herb: function (name) {
    var self = this;
    function look(n) { return self.hByZh[n] || (self.ALIAS[n] && self.hByZh[self.ALIAS[n]]) || null; }
    var h = look(name);
    if (h) return h;
    var a = name.replace(/^(炙|生|炒|酒|制|煨|焦|醋|蜜|盐|麸炒|土炒|煅|炮|清|法|姜|净|鲜)/, '');
    var b = a.replace(/(尾|身|梢|穗|炭)$/, '');
    return (a !== name && look(a)) || (b !== a && look(b)) || null;
  }
};
