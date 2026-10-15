const documentFile = (filename) => `case-files/${filename}`;
const campaigns = [
 {title:'01 / 时尚审美长视频', note:'BILIBILI · LONG FORM', type:'fashion', goal:'将“老钱风”“版型”等抽象审美概念转化为有判断、有画面、有观看节奏的长视频内容。', role:'独立完成选题研究、口播结构、分镜提示、素材筛选与后期剪辑。', actions:['从流行标签中提炼用户真实问题，明确单条内容的核心观点。','搭建“观点—案例—视觉对照—总结”的口播与画面结构。','通过字幕重点、素材组织与节奏控制，保证复杂信息可被快速理解。'], result:'产出可复用的长视频内容结构与素材组织方法，支持时尚审美类内容稳定交付。', videos:[['老钱风','final/b站/老钱风.mp4'],['平面版型','final/b站/平面版型（无结尾）.mp4'],['Old Money 张陈夷','简历/视频作品/Old money张陈夷.mp4']]},
 {title:'02 / 衣品与女性成长内容', note:'FASHION · WOMEN LIFESTYLE', type:'fashion', goal:'围绕穿搭焦虑、体型表达与日常场景，建立有共情感且可执行的女性向内容表达。', role:'负责内容研究、脚本与分镜梳理、画面需求定义、剪辑及版本适配。', actions:['从身体感受、职场场景与风格焦虑切入，建立用户共鸣。','把资料研究转写为口播结构、分镜提示与可执行的素材清单。','依据反馈完成有/无结尾、修改版与平台版等多版本交付。'], result:'形成女性时尚内容的稳定制作链路，并累计参与 13 个独立内容主题、44 个交付版本。', videos:[['衣品提升指南：无袖','final/衣品/衣品提升指南 无袖.mp4'],['胳膊粗不敢穿无袖？','final/衣品/胳膊粗不敢穿无袖？穿搭核心是“扬长”.mp4'],['乡村爱情：衣品内容终版','final/衣品/乡村爱情 修改 有结尾.mp4']]},
 {title:'03 / 投流广告与性能创意', note:'PAID SOCIAL · CREATIVE ITERATION', type:'ad', goal:'为竖屏投流场景建立“强观点、强包装、强节奏”的信息表达，让卖点在前几秒被清晰接收。', role:'完成投流文案、视觉结构设计、竖屏剪辑与创意版本迭代。', actions:['以前几秒的标题、痛点与明确卖点建立观看理由。','结合大字标题、字幕、拼贴/分屏、案例素材与短促转场强化信息层级。','根据修改反馈与平台素材要求快速调整内容版本。'], result:'完成 3 组投流硬广的文案与剪辑迭代，沉淀可复用的竖屏视觉规范与素材配置。', videos:[['投流广告 8','final/广告/投流广告8.mp4'],['投流广告 7：终版','final/广告/投流广告7(final）.mp4'],['投流广告 2：终版','final/广告/投流广告2(终）.mp4'],['投流广告 7：买卖对比','final/广告/投流广告7(买卖对比）.mp4']]},
 {title:'04 / 影像叙事与视觉实践', note:'VISUAL STORYTELLING · PRODUCTION', type:'archive', goal:'通过短片、氛围影像、美妆与 Vlog 等多种内容形式，验证不同受众语境下的叙事与风格表达。', role:'参与策划、拍摄统筹、文案、镜头表达与后期剪辑等制作环节。', actions:['根据内容类型切换氛围感、视觉系、生活记录与信息型表达。','利用人物、场景、镜头与音乐节奏建立情绪推进。','将创作概念拆解为拍摄与后期可执行的画面方案。'], result:'积累从创意构思到成片制作的跨环节实践，为品牌内容的视觉化表达提供制作基础。', videos:[['Luna 短视频','简历/视频作品/luna短视频.mp4'],['视觉系风格剪辑','简历/视频作品/视觉系风格剪辑.mp4'],['美妆视频','简历/视频作品/美妆视频.mp4'],['氛围视频 01','简历/视频作品/氛围视频1.MP4'],['Vlog 生活视频','简历/视频作品/vlog类生活视频.MP4']]}
];
const videoAssetMap = {
 'final/b站/老钱风.mp4':'video-001.mp4',
 'final/b站/平面版型（无结尾）.mp4':'video-004.mp4',
 '简历/视频作品/Old money张陈夷.mp4':'video-005.mp4',
 'final/衣品/乡村爱情 修改 有结尾.mp4':'video-009.mp4',
 'final/衣品/衣品提升指南 无袖.mp4':'video-010.mp4',
 'final/衣品/胳膊粗不敢穿无袖？穿搭核心是“扬长”.mp4':'video-012.mp4',
 'final/广告/投流广告2(终）.mp4':'video-017.mp4',
 'final/广告/投流广告7(买卖对比）.mp4':'video-019.mp4',
 'final/广告/投流广告7(final）.mp4':'video-020.mp4',
 'final/广告/投流广告8.mp4':'video-022.mp4',
 '简历/视频作品/luna短视频.mp4':'video-028.mp4',
 '简历/视频作品/vlog类生活视频.MP4':'video-030.MP4',
 '简历/视频作品/氛围视频1.MP4':'video-033.MP4',
 '简历/视频作品/美妆视频.mp4':'video-035.mp4',
 '简历/视频作品/视觉系风格剪辑.mp4':'video-036.mp4'
};
const localVideo = (path) => `media-playable/${videoAssetMap[path]}`;
const thumbnail = (path) => `thumbs/${videoAssetMap[path]}.png`;
const docs=[
 {title:'End The Trend：品牌议题传播',meta:'品牌议题 × 社媒内容执行',summary:'围绕“反快时尚 / 去趋势化消费”完成内容主张、TikTok / Instagram / X 账号内容与线下活动传播的整合案例。',file:'end-the-trend-brand-campaign.pdf'},
 {title:'跨文化议题传播：季度内容策划',meta:'内容策划 × 国际传播',summary:'围绕春节、两会、国际妇女节等节点，建立青年交流与情感共鸣双线叙事，并完成栏目内容结构与视觉方向。',file:'cross-cultural-content-strategy.pdf'},
 {title:'YouthPower 海媒平台试运营',meta:'OVERSEAS SOCIAL × PLATFORM STRATEGY',summary:'针对 YouTube 与 X 制定差异化内容策略，以沉浸式中国体验、海外青年观点碰撞与人格化互动搭建内容品牌。',file:'youthpower-overseas-social-plan.pdf'},
 {title:'国际传播账号诊断与优化',meta:'CONTENT AUDIT × PLATFORM OPERATIONS',summary:'从内容结构、平台分发到用户互动提出运营诊断与优化建议，覆盖视频号、抖音、小红书的差异化表达。',file:'international-content-operations-audit.pdf'},
 {title:'Acne Studios：品牌视觉研究',meta:'BRAND RESEARCH × VISUAL LANGUAGE',summary:'以品牌视觉与风格语言为线索完成研究型案例，呈现对时尚品牌调性、内容语境与审美表达的理解。',file:'acne-studios-brand-research.pdf'},
 {title:'Thisway：镜头与分镜设计',meta:'STORYBOARD × VISUAL NARRATIVE',summary:'从画面拆分、镜头调度到转场节奏呈现创作构想，体现把抽象概念转化为可执行拍摄方案的能力。',file:'thisway-storyboard.pdf'},
 {title:'LUNA：微短片制作项目书',meta:'SHORT FILM × PRODUCTION DEVELOPMENT',summary:'包含短片项目介绍与制作资料，作为从故事概念到影像生产全流程参与的项目档案。',file:'luna-short-film-production-book.pdf'}
];
const skillData=[['01','CONTENT STRATEGY','内容策略与选题研究','从用户兴趣、平台语境和账号调性提炼内容主题。不是只找热点，而是判断一个主题能否形成清晰观点、持续表达与具体画面。'],['02','SCRIPT & STORYBOARD','口播脚本与分镜设计','可将资料研究转化为5-8分钟口播结构、分镜提示和素材需求，让文案、画面与后期制作在开始前就对齐。'],['03','VIDEO PRODUCTION','视频全流程制作','熟练使用 Premiere Pro、剪映，覆盖素材组织、节奏剪辑、字幕包装、横竖屏适配及版本迭代，能够独立推进成片交付。'],['04','PERFORMANCE CREATIVE','投流创意与转化表达','围绕竖屏投流建立强标题、强卖点、强节奏的内容表达方式；以首屏注意力、信息层级和视觉包装支撑素材测试。'],['05','VISUAL STORYTELLING','审美内容视觉化','擅长用案例对比、场景设计、人物造型、镜头语言与情绪节奏，把抽象时尚审美转化为可理解、可感受的视觉叙事。'],['06','AIGC WORKFLOW','AI 辅助内容生产','探索 AI 口播、字幕、图像/视频素材生成与自动化合成，用于创意试稿、风格验证及批量制作的效率提升。']];
const campaignsNode=document.querySelector('#campaigns');
const scrollControl=(label)=>`<label class="manual-scroll"><span class="manual-hint"><i aria-hidden="true"></i>手动滑动</span><input class="scroll-range" type="range" min="0" max="100" value="100" step="1" aria-label="手动滑动 ${label}" /><span class="auto-state">LOOP ON</span></label>`;
campaignsNode.innerHTML=campaigns.map((c,ci)=>`<article class="campaign"><div class="campaign-title"><h3>${c.title}</h3><p>${c.note} / ${String(c.videos.length).padStart(2,'0')} FILES</p></div><div class="scroll-module"><div class="horizontal">${c.videos.map((v,i)=>`<div class="card"><div class="card-media media-${c.type}"><img src="${thumbnail(v[1])}" alt="${v[0]} 视频首帧" loading="lazy"><div class="thumb-title"><span>VIDEO ${String(i+1).padStart(2,'0')}</span><b>${v[0]}</b></div><span class="card-code">${String(i+1).padStart(2,'0')}</span><button class="play-button" data-video="${localVideo(v[1])}" aria-label="播放 ${v[0]}">PLAY</button></div><div class="card-body"><h4 class="card-title">${v[0]}</h4><p class="card-meta">${c.note}</p><div class="card-actions"><button class="open-detail" data-campaign="${ci}" data-work="${i}">能力拆解 +</button></div></div></div>`).join('')}</div>${scrollControl(c.title)}</div></article>`).join('');
document.querySelector('#documents').innerHTML=`<div class="scroll-module"><div class="doc-strip">${docs.map((d,i)=>`<article class="doc-card"><p>${String(i+1).padStart(2,'0')} / CASE PDF</p><h3>${d.title}</h3><p>${d.meta}</p><span>${d.summary}</span><button data-doc="${i}">查看案例 PDF ↗</button></article>`).join('')}</div>${scrollControl('策略与项目资料')}</div>`;
document.querySelector('#skill-list').innerHTML=skillData.map((s,i)=>`<article class="skill"><span>${s[0]}</span><small>${s[1]}</small><b>${s[2]}</b><button class="open-skill" type="button" data-skill="${i}" aria-expanded="false" aria-controls="skill-detail-${i}" aria-label="展开 ${s[2]} 的能力说明" title="单击展开，双击收起">+</button><div class="skill-detail" id="skill-detail-${i}" aria-hidden="true"><p>${s[3]}</p></div></article>`).join('');
const videoModal=document.querySelector('.video-modal'), detailModal=document.querySelector('.detail-modal'), documentModal=document.querySelector('.document-modal'), video=videoModal.querySelector('video'), documentPreview=document.querySelector('#document-preview');
const expandSkill=(button)=>{const row=button.closest('.skill');const detail=row?.querySelector('.skill-detail');if(!row||!detail)return;row.classList.add('is-open');button.setAttribute('aria-expanded','true');button.setAttribute('aria-label',`收起 ${skillData[Number(button.dataset.skill)][2]} 的能力说明`);detail.setAttribute('aria-hidden','false')};
const collapseSkill=(button)=>{const row=button.closest('.skill');const detail=row?.querySelector('.skill-detail');if(!row||!detail)return;row.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',`展开 ${skillData[Number(button.dataset.skill)][2]} 的能力说明`);detail.setAttribute('aria-hidden','true')};
document.addEventListener('click',e=>{const play=e.target.closest('[data-video]');if(play){video.pause();video.removeAttribute('src');video.src=play.dataset.video;video.load();videoModal.classList.add('open');videoModal.setAttribute('aria-hidden','false');video.play().catch(()=>{});}const doc=e.target.closest('[data-doc]');if(doc)showDocument(docs[Number(doc.dataset.doc)]);const detail=e.target.closest('.open-detail');if(detail)showDetail(campaigns[detail.dataset.campaign],Number(detail.dataset.work));const skill=e.target.closest('.open-skill');if(skill){e.preventDefault();expandSkill(skill)}if(e.target.closest('.modal-close')||e.target===videoModal||e.target===detailModal||e.target===documentModal)closeAll();});
document.addEventListener('dblclick',e=>{const skill=e.target.closest('.open-skill');if(!skill)return;e.preventDefault();collapseSkill(skill)});
function showDetail(c,workIndex){const work=c.videos[workIndex];document.querySelector('#detail-content').innerHTML=`<p class="type">${c.note} / VIDEO CASE ${String(workIndex+1).padStart(2,'0')}</p><h2>${work[0]}</h2><div class="case-summary"><section><span>01 / 项目目标</span><p>${c.goal}</p></section><section><span>02 / 我的职责</span><p>${c.role}</p></section><section><span>03 / 关键动作</span><ul>${c.actions.map(action=>`<li>${action}</li>`).join('')}</ul></section><section class="case-result"><span>04 / 结果与产出</span><p>${c.result}</p></section></div>`;detailModal.classList.add('open');detailModal.setAttribute('aria-hidden','false')}
function showDocument(doc){const file=documentFile(doc.file);document.querySelector('#document-title').textContent=doc.title;document.querySelector('#document-new-window').href=file;documentPreview.src=`${file}#view=FitH`;documentModal.classList.add('open');documentModal.setAttribute('aria-hidden','false')}
function closeAll(){document.querySelectorAll('.modal').forEach(x=>{x.classList.remove('open');x.setAttribute('aria-hidden','true')});video.pause();video.removeAttribute('src');video.load();documentPreview.removeAttribute('src')}document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;const skill=e.target.closest?.('.open-skill');if(skill&&skill.getAttribute('aria-expanded')==='true'){e.preventDefault();collapseSkill(skill);return}closeAll()});
document.querySelectorAll('.horizontal, .doc-strip').forEach((el)=>{
  let isDragging = false;
  let isPaused = false;
  let isManual = false;
  let startX = 0;
  let startLeft = 0;
  let resumeTimer;
  let sliderPointerId = null;
  const slider = el.closest('.scroll-module')?.querySelector('.scroll-range');
  const control = slider?.closest('.manual-scroll');
  const autoState = control?.querySelector('.auto-state');
  const loopWidth = () => Math.max(0, el.scrollWidth - el.clientWidth);
  const syncSlider = () => {
    if (!slider) return;
    const max = Math.ceil(loopWidth());
    slider.max = String(Math.max(1, max));
    slider.disabled = max === 0;
    if (!isManual) slider.value = String(Math.round(el.scrollLeft));
  };
  const pauseManual = () => {
    isManual = true;
    isPaused = true;
    clearTimeout(resumeTimer);
    control?.classList.add('is-active');
    if (autoState) autoState.textContent = 'PAUSED';
  };
  const resumeManual = () => {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isManual = false;
      isPaused = false;
      control?.classList.remove('is-active');
      if (autoState) autoState.textContent = 'LOOP ON';
      syncSlider();
    }, 320);
  };
  const pauseForFocus = () => {
    if (isManual) return;
    isPaused = true;
    control?.classList.add('is-active');
    if (autoState) autoState.textContent = 'PAUSED';
  };
  const resumeFromFocus = () => {
    if (isManual) return;
    isPaused = false;
    control?.classList.remove('is-active');
    if (autoState) autoState.textContent = 'LOOP ON';
  };
  const resetLoopPosition = () => {
    el.scrollLeft = loopWidth();
    syncSlider();
  };
  requestAnimationFrame(resetLoopPosition);
  const move = () => {
    if (!isDragging && !isPaused && loopWidth() > 0) {
      el.scrollLeft -= 0.32;
      if (el.scrollLeft <= 1) el.scrollLeft = loopWidth();
      syncSlider();
    }
    requestAnimationFrame(move);
  };
  requestAnimationFrame(move);
  el.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button')) return;
    isDragging = true;
    startX = event.clientX;
    startLeft = el.scrollLeft;
    el.setPointerCapture(event.pointerId);
  });
  el.addEventListener('pointermove', (event) => {
    if (isDragging) { el.scrollLeft = startLeft - (event.clientX - startX); syncSlider(); }
  });
  const stopDrag = (event) => {
    isDragging = false;
    if (event && el.hasPointerCapture?.(event.pointerId)) el.releasePointerCapture(event.pointerId);
  };
  el.addEventListener('pointerup', stopDrag);
  el.addEventListener('pointercancel', stopDrag);
  el.addEventListener('scroll', syncSlider, {passive:true});
  el.addEventListener('mouseenter', () => { isPaused = true; });
  el.addEventListener('mouseleave', () => { if (!isManual) isPaused = false; });
  el.addEventListener('focusin', () => { isPaused = true; });
  el.addEventListener('focusout', () => { if (!isManual) isPaused = false; });
  if (slider) {
    slider.addEventListener('input', () => { pauseManual(); el.scrollLeft = Number(slider.value); });
    slider.addEventListener('pointerdown', (event) => {
      pauseManual();
      sliderPointerId = event.pointerId;
      slider.setPointerCapture?.(event.pointerId);
    });
    const endManualPointer = (event) => {
      if (sliderPointerId !== null && slider.hasPointerCapture?.(sliderPointerId)) slider.releasePointerCapture(sliderPointerId);
      sliderPointerId = null;
      resumeManual();
    };
    slider.addEventListener('pointerup', endManualPointer);
    slider.addEventListener('pointercancel', endManualPointer);
    slider.addEventListener('change', resumeManual);
    slider.addEventListener('focus', pauseForFocus);
    slider.addEventListener('blur', () => {
      if (isManual) resumeManual();
      else resumeFromFocus();
    });
    slider.addEventListener('keydown', pauseManual);
    slider.addEventListener('keyup', resumeManual);
  }
  window.addEventListener('resize', syncSlider, {passive:true});
  window.addEventListener('load', resetLoopPosition, {once:true});
});
