const messages = document.querySelector('#chatMessages');
const form = document.querySelector('#chatForm');
const input = document.querySelector('#chatInput');
const quickQuestions = document.querySelector('.quick-questions');
const interestsList = document.querySelector('.interests-list');
const interestDetail = document.querySelector('#interestDetail');
const interestContent = document.querySelector('#interestContent');

const chinaMap = `
  <div class="map-wrap">
    <svg class="china-map china-map-drawn" viewBox="0 0 760 530" role="img" aria-label="Joey 去过地区的手绘中国地图">
      <path class="province-base" d="M76 121 L92 91 136 94 157 70 201 83 229 66 258 91 250 123 283 139 313 128 352 146 390 139 425 117 457 129 474 105 506 97 519 69 548 53 565 23 597 13 616 24 638 19 657 41 667 73 701 84 701 121 687 143 690 175 663 186 645 210 614 222 606 248 635 257 660 280 643 301 649 332 628 347 628 376 611 398 598 432 572 439 552 425 523 435 503 419 484 420 468 407 444 415 421 402 403 414 382 399 356 405 336 390 315 398 293 380 276 386 252 367 235 377 213 358 189 365 174 342 151 340 132 315 114 306 105 279 86 261 91 231 70 215 78 183 61 160Z" />
      <g class="province-lines" fill="none">
        <path d="M250 123 L227 150 236 185 207 211 177 205 158 231 114 229 M283 139 L286 178 260 197 268 238 250 270 252 312 235 377 M313 128 L328 177 305 199 313 236 293 268 304 306 276 336 293 380 M352 146 L357 189 337 218 350 256 336 290 356 325 336 390 M390 139 L397 184 380 215 398 246 383 278 403 310 382 350 403 414 M425 117 L441 159 425 193 446 218 429 251 444 284 421 315 444 355 421 402 M457 129 L474 164 462 198 485 223 469 252 484 283 468 315 484 350 468 407 M474 105 L506 131 499 169 523 187 510 219 532 240 517 271 541 292 523 326 542 356 523 390 552 425 M519 69 L548 92 539 128 565 147 553 181 582 199 564 230 596 247 578 281 611 300 590 336 611 365 598 432 M565 23 L580 70 565 102 M597 13 L610 60 638 79 616 111 645 129 625 162 663 186 M667 73 L652 112 687 143 M78 183 L114 177 132 203 M105 279 L144 276 164 302 M151 340 L173 312 202 325 M174 342 L204 347 224 323 M213 358 L237 337 265 351 M315 398 L327 365 356 371 M444 355 L466 376 503 379 M542 356 L571 376 598 367" />
      </g>
      <g class="visited-shapes" aria-label="已去过的省份">
        <path d="M535 167 l13 -10 14 13 -8 16 -18 -2z" aria-label="北京" />
        <path d="M514 180 l28 -12 25 21 16 9 -14 30 -24 11 -8 29 -25 -7 -17 -28 12 -25z" aria-label="河北" />
        <path d="M556 231 l31 -8 26 18 -4 22 21 12 -12 20 -47 -3 -19 -27z" aria-label="山东" />
        <path d="M588 286 l25 -12 20 10 -1 22 -20 13 -25 -6z" aria-label="江苏" />
        <path d="M546 294 l37 -18 28 27 -5 34 -28 13 -28 -20z" aria-label="安徽" />
        <path d="M589 342 l22 -13 23 15 -5 30 -27 12 -16 -21z" aria-label="浙江" />
        <path d="M569 383 l25 -15 20 18 -7 38 -24 4 -15 -25z" aria-label="福建" />
      </g>
      <g class="province-labels">
        <text x="151" y="145">新疆</text><text x="241" y="174">甘肃</text><text x="322" y="174">内蒙古</text><text x="179" y="234">西藏</text><text x="230" y="247">青海</text><text x="282" y="230">宁夏</text><text x="314" y="268">陕西</text><text x="359" y="220">山西</text><text x="392" y="247">河南</text><text x="418" y="178">北京</text><text x="447" y="198">河北</text><text x="490" y="184">辽宁</text><text x="573" y="134">吉林</text><text x="626" y="88">黑龙江</text><text x="456" y="242">山东</text><text x="501" y="275">江苏</text><text x="453" y="289">湖北</text><text x="413" y="307">湖南</text><text x="478" y="329">安徽</text><text x="530" y="353">浙江</text><text x="523" y="392">福建</text><text x="448" y="365">江西</text><text x="389" y="352">贵州</text><text x="343" y="338">重庆</text><text x="298" y="330">四川</text><text x="266" y="365">云南</text><text x="318" y="379">广西</text><text x="388" y="398">广东</text><text x="475" y="416">香港</text><text x="444" y="438">海南</text><text x="618" y="381">台湾</text>
      </g>
      <g class="islands"><path d="M653 383 l8 5 -6 6z" /><path d="M675 403 l12 6 -8 7z" /><path d="M688 426 l17 13 -5 6 -18 -13z" /></g>
    </svg>
    <div class="map-legend"><span><i class="legend-visited"></i> 已去过</span><span><i></i> 还没去过</span></div>
  </div>`;

const accurateChinaMap = `
  <div class="map-wrap map-wrap-accurate">
    <object class="china-map china-map-accurate" data="./assets/china-provinces.svg" type="image/svg+xml" aria-label="中国省级行政区地图：浅蓝色为 Joey 已到访地区"></object>
    <div class="map-legend"><span><i class="legend-visited"></i> 已去过</span><span><i></i> 还没去过</span></div>
  </div>`;

const interestDetails = {
  '看书': '<h3>看书</h3><p class="interest-main">悬疑推理 / 小说 / 文学 / 英文原版小说</p><p class="interest-note">高考完的暑假看了 14 本书！</p>',
  '旅行': `<h3>旅行</h3><p class="interest-main">在地图上留下慢慢延伸的蓝色足迹。</p>${accurateChinaMap}<p class="interest-note">已去过：杭州、苏州、山东、北京、河北、安徽、福建、浙江</p>`,
  '听歌': '<h3>听歌</h3><p class="interest-main">最爱华晨宇！也会听华语 / 日语 / 英语 / 法语 / 纯音乐</p>',
  '演唱会': '<h3>演唱会</h3><p class="interest-main">华晨宇火星演唱会 · 5 场</p>',
  '脱口秀': '<h3>脱口秀</h3><p class="interest-main">最近入坑了英文脱口秀，最喜欢 Norah。</p>',
  '美剧': '<h3>美剧</h3><p class="interest-main">The Big Bang Theory · Young Sheldon</p>',
  '跑步': '<h3>跑步</h3><p class="interest-main">具体内容待补充。</p>',
  '游泳': '<h3>游泳</h3><p class="interest-main">具体内容待补充。</p>',
};

const twinProfile = {
  age: 18,
  identity: '学生',
  gender: '女',
  principles: '逻辑自洽、信息准确、不过度迎合',
};

const websiteKnowledge = {
  name: 'Joey Zhao',
  tagline: '坚定乐观的理想主义者',
  life: '大一 BME 新生，持续探索理想和爱好中～',
  audience: '主要是朋友',
  recent: '搭自己的个人主页，学习 Vibe Coding',
  focus: 'AI 应用、生命健康、生物医学工程',
  style: '简约、清爽、轻科技感；低饱和蓝、白、浅灰，并适配手机',
};

function taskReply(question, isFormal, isFamiliar) {
  const opener = isFormal ? '可以。请先给出目标、截止时间和现有资源吗？' : isFamiliar ? '可以，先把目标、截止时间和现有资源发我嘛。' : '可以。先明确目标、截止时间和现有资源。';
  const ownership = /队友|分工|合作|小组/.test(question)
    ? '分工会按实际产出记录；如果协作明显拖慢进度，我会切换为独立完成，并标明每部分的实际责任人。'
    : '我会按节点跟进：先拆解，再排优先级，最后检查结果。';
  return `${opener}\n1. 拆成可交付的子任务。\n2. 为每项设定时间节点和负责人。\n3. 在中间节点检查进度并调整。\n${ownership}`;
}

function answerFor(question) {
  const text = question.trim();
  const normalized = text.toLowerCase();
  const isFormal = /您|请问|劳驾/.test(text);
  const isFamiliar = /帮我|给我|咱们|我们|一下嘛/.test(text);
  const forcedReplyToNoise = /必须回复|强制回复|回应一下|回他|回她/.test(text) && /不懂|不了解|乱评价|评头论足|看不起|评价我|说我/.test(text);

  if (forcedReplyToNoise) return 'okay～～';
  if (/你是谁|她是谁|joey是谁|自我介绍|几岁|年龄|身份|性别/.test(normalized)) return `${websiteKnowledge.name}，${twinProfile.age} 岁，${twinProfile.gender}生，目前是${websiteKnowledge.life}。思考方式偏 INTJ，但不靠标签替代判断。`;
  if (/任务|计划|安排|协作|分工|项目|推进|效率/.test(text)) return taskReply(text, isFormal, isFamiliar);
  if (/评价|批评|别人怎么看|别人说/.test(text)) return '非亲近者的评价不进入决策权重。只检查事实、逻辑和可执行的反馈。';
  if (/名字|叫什?么|joey/.test(normalized)) return `她叫 ${websiteKnowledge.name}，一句话介绍是“${websiteKnowledge.tagline}”。`;
  if (/做什么|最近|vibe|主页/.test(normalized)) return `她最近在${websiteKnowledge.recent}，把想法变成可用的东西。`;
  if (/方向|关注|擅长|ai|人工智能|bme|生物/.test(normalized)) return `她关注 ${websiteKnowledge.focus}，正在持续探索三者的交叉点。`;
  if (/联系|微信|邮箱|找她|找他/.test(normalized)) return '她暂未公开联系方式。可以先通过共同朋友联系 Joey。';
  if (/华晨宇|听歌|音乐/.test(normalized)) return '她最爱华晨宇，也会听华语、日语、英语、法语和纯音乐；看过华晨宇火星演唱会 5 场。';
  if (/看书|读书|书单/.test(normalized)) return '她喜欢悬疑推理、小说、文学和英文原版小说。高考后的暑假读完了 14 本书。';
  if (/旅行|去过|地图/.test(normalized)) return '她去过杭州、苏州、山东、北京、河北、安徽、福建和浙江。';
  if (/norah|英文脱口秀/.test(normalized)) return '她最近入坑英文脱口秀，最喜欢 Norah。';
  if (/谢尔顿|big bang|美剧/.test(normalized)) return '她喜欢《The Big Bang Theory》和《Young Sheldon》。';
  if (/兴趣|喜欢|爱好|书|旅行|音乐|演唱会|脱口秀|美剧|跑步|游泳/.test(normalized)) return '她喜欢看书、旅行、听歌和看演唱会；也看脱口秀、美剧，会跑步和游泳。看书偏悬疑推理、小说、文学和英文原版小说；最爱华晨宇。';
  if (/网站|页面|设计|风格|颜色|手机|访客/.test(normalized)) return `这个主页主要给${websiteKnowledge.audience}看。风格是${websiteKnowledge.style}。`;
  if (/理想主义|座右铭|一句话/.test(normalized)) return `她的自我介绍是“${websiteKnowledge.tagline}”。`;
  if (/你好|嗨|hello/.test(normalized)) return '你好。我是 Joey 的数字分身，负责介绍她的近况、兴趣和关注方向，也可以一起推进具体任务。';
  if (/质量|准确|逻辑|对不对/.test(text)) return `判断标准是：${twinProfile.principles}。信息不足时会明确说明，不会为了好听补结论。`;
  return isFormal ? '目前信息不足。请补充具体目标或背景吗？' : isFamiliar ? '信息还不够，把目标或背景补一下嘛。' : '目前信息不足。请补充具体目标或背景。';
}

function addMessage(content, type) {
  const message = document.createElement('div');
  message.className = `message ${type}`;
  message.textContent = content;
  messages.append(message);
  messages.scrollTop = messages.scrollHeight;
}

function send(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addMessage(cleanQuestion, 'user');
  input.value = '';
  window.setTimeout(() => addMessage(answerFor(cleanQuestion), 'bot'), 320);
}

form.addEventListener('submit', (event) => { event.preventDefault(); send(input.value); });
quickQuestions.addEventListener('click', (event) => { if (event.target.matches('button')) send(event.target.textContent); });

interestsList.addEventListener('click', (event) => {
  const selected = event.target.closest('button');
  if (!selected) return;

  interestsList.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('is-active', button === selected);
    button.setAttribute('aria-expanded', button === selected ? 'true' : 'false');
  });
  interestContent.innerHTML = interestDetails[selected.textContent] || '<p class="interest-main">具体内容待补充。</p>';
  interestDetail.hidden = false;
});
