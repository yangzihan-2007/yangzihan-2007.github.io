<template>
  <div class="page-wrap">
    <div class="two-col">
      <aside class="card profile-card">
        <div class="avatar">{{ initial }}</div>
        <div class="visitor-badge"><div class="dot"></div>{{ badgeText }}</div>
        <h1 class="name">{{ name }}</h1>
        <div class="tag">{{ tagLine1 }}<br>{{ tagLine2 }}</div>
        <p class="motto">{{ motto1 }}<br>{{ motto2 }}</p>
        <a :href="`mailto:${email}`" class="btn">联系我 →</a>
        <div class="tags-section">
          <h4>极客画像</h4>
          <div class="tags-row">
            <span class="tag-item" v-for="tag in geekTags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </aside>

      <main class="main-col">
        <div class="card hero-card">
          <span class="hero-badge">{{ heroBadge }}</span>
          <p class="hero-pre">Hello, I'm</p>
          <h2 class="hero-name">{{ heroName }}</h2>
          <p class="hero-desc" v-for="(desc, i) in descriptions" :key="i">{{ desc }}</p>
        </div>

        <div class="card-row">
          <a :href="notesLink2" class="card link-card">
            <div class="cover" style="background:linear-gradient(135deg,#f093fb,#f5576c)">
              <span class="cover-tag">LEARNING PATH</span>
              <h3>学习路线</h3>
            </div>
            <div class="card-body"><p>Java全栈学习路线整理，按顺序学习即可直达大厂水平</p></div>
          </a>
          <a :href="notesLink" class="card link-card">
            <div class="cover" style="background:linear-gradient(135deg,#4facfe,#00f2fe)">
              <span class="cover-tag">MY NOTES</span>
              <h3>学习笔记</h3>
            </div>
            <div class="card-body"><p>编程学习笔记与知识点整理，记录成长路上的每一步</p></div>
          </a>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
defineProps({
  initial: { type: String, default: 'Z' },
  badgeText: { type: String, default: '欢迎来访，朋友' },
  name: { type: String, default: '你的名字' },
  tagLine1: { type: String, default: '计算机专业学生' },
  tagLine2: { type: String, default: '全栈开发爱好者' },
  motto1: { type: String, default: '系统架构师 · 版本 2026' },
  motto2: { type: String, default: '代码改变世界' },
  email: { type: String, default: 'your@email.com' },
  geekTags: { type: Array, default: () => ['终身学习者','代码爱好者','开源贡献者','问题解决者'] },
  heroBadge: { type: String, default: '✨ 正在学习成长中' },
  heroName: { type: String, default: 'Your Name' },
  descriptions: { type: Array, default: () => [
    '计算机专业学生 | 全栈开发爱好者 | 技术博客作者。',
    '主攻 Web 开发与算法研究，在编程世界中不断探索与成长。',
    '每一行代码都是进步的脚印，每一个项目都是对热爱的诠释。',
  ]},
  notesLink: { type: String, default: '/studynote/数据结构' },
  notesLink2: { type: String, default: '/studymap/roadmap' },
})
</script>

<style scoped>
.page-wrap {
  position:relative;
  min-height:calc(100vh - var(--vp-nav-height));
  display:flex;
  align-items:flex-start;
  justify-content:center;
  padding:40px 24px;
}
.page-wrap::before {
  content:''; position:fixed; top:-50%; left:-50%; width:200%; height:200%;
  background:
    radial-gradient(ellipse at 20% 50%,rgba(102,126,234,0.08) 0%,transparent 50%),
    radial-gradient(ellipse at 80% 20%,rgba(118,75,162,0.06) 0%,transparent 50%);
  animation:bgMove 20s ease-in-out infinite alternate;
  pointer-events:none;
}
@keyframes bgMove { 0% { transform:translate(0,0); } 100% { transform:translate(-1.5%,-1.5%); } }

.two-col {
  position:relative; z-index:1;
  display:grid;
  grid-template-columns:280px 1fr;
  gap:32px;
  max-width:1120px;
  width:100%;
}

.card {
  background:var(--vp-c-bg-soft);
  border:1px solid var(--vp-c-border);
  border-radius:20px;
  padding:28px;
  color:var(--vp-c-text-1);
  transition:transform .25s,box-shadow .25s;
}
.card:hover { box-shadow:0 8px 32px rgba(0,0,0,0.06); }

.profile-card {
  text-align:center;
  height:fit-content;
  position:sticky;
  top:calc(var(--vp-nav-height) + 40px);
  padding:32px 24px;
}
.avatar {
  width:92px; height:92px; border-radius:50%; margin:0 auto 18px;
  background:linear-gradient(135deg,#667eea,#764ba2);
  display:flex; align-items:center; justify-content:center;
  font-size:34px; font-weight:700; color:#fff; position:relative;
}
.avatar::after {
  content:''; position:absolute; inset:-3px; border-radius:50%;
  background:linear-gradient(135deg,#667eea,#764ba2,#4facfe); z-index:-1;
  opacity:0.4; filter:blur(8px); animation:glow 3s ease-in-out infinite alternate;
}
@keyframes glow { 0% { opacity:0.3;filter:blur(6px); } 100% { opacity:0.6;filter:blur(12px); } }
.visitor-badge { display:inline-flex; align-items:center; gap:6px; background:var(--vp-c-bg-mute); padding:5px 12px; border-radius:20px; font-size:12px; margin-bottom:18px; color:var(--vp-c-brand-1); }
.dot { width:8px; height:8px; border-radius:50%; background:var(--vp-c-brand-1); }
.name { font-size:24px; font-weight:700; margin-bottom:12px; }
.tag { display:inline-block; background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; padding:6px 12px; border-radius:8px; font-size:12px; margin-bottom:18px; line-height:1.5; }
.motto { font-size:12px; color:var(--vp-c-text-2); margin-bottom:24px; line-height:1.8; }
.btn { display:block; padding:11px; background:linear-gradient(135deg,#667eea,#764ba2); border-radius:30px; color:#fff; font-size:13px; font-weight:500; text-decoration:none; transition:all .3s; margin-bottom:24px; }
.btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(102,126,234,0.3); }
.tags-section { border-top:1px solid var(--vp-c-divider); padding-top:20px; }
.tags-section h4 { font-size:11px; color:var(--vp-c-text-3); margin-bottom:12px; font-weight:400; letter-spacing:1px; }
.tags-row { display:flex; flex-wrap:wrap; gap:6px; justify-content:center; }
.tag-item { background:var(--vp-c-bg-mute); border:1px solid var(--vp-c-border); padding:5px 11px; border-radius:10px; font-size:11px; color:var(--vp-c-text-2); }

.main-col { display:flex; flex-direction:column; gap:28px; }
.hero-card { padding:44px 36px; position:relative; overflow:hidden; }
.hero-card::before {
  content:''; position:absolute; top:0; left:0; right:0; bottom:0;
  background:linear-gradient(135deg,rgba(102,126,234,0.06) 0%,rgba(118,75,162,0.06) 100%);
  border-radius:20px; pointer-events:none;
}
.hero-badge { display:inline-block; background:var(--vp-c-bg-mute); color:var(--vp-c-brand-1); padding:5px 12px; border-radius:20px; font-size:11px; margin-bottom:18px; }
.hero-pre { font-size:18px; font-weight:300; margin-bottom:6px; color:var(--vp-c-text-2); }
.hero-name { font-size:42px; font-weight:800; background:linear-gradient(135deg,#667eea,#764ba2,#4facfe); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:16px; line-height:1.2; }
.hero-desc { font-size:14px; line-height:1.8; color:var(--vp-c-text-2); max-width:560px; }
.hero-desc + .hero-desc { margin-top:2px; }

.card-row { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
.link-card { padding:0; cursor:pointer; text-decoration:none; overflow:hidden; }
.link-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(0,0,0,0.1); }
.cover { height:140px; display:flex; align-items:flex-end; padding:18px; position:relative; overflow:hidden; }
.cover::after { content:''; position:absolute; top:-50%; right:-50%; width:100%; height:100%; background:rgba(255,255,255,0.06); transform:rotate(25deg); }
.cover-tag { position:absolute; top:14px; left:16px; font-size:10px; background:rgba(255,255,255,0.15); backdrop-filter:blur(4px); padding:3px 9px; border-radius:8px; color:rgba(255,255,255,0.9); letter-spacing:.5px; }
.cover h3 { font-size:17px; font-weight:700; color:#fff; z-index:1; }
.card-body { padding:18px 22px 22px; }
.card-body p { font-size:13px; color:var(--vp-c-text-2); line-height:1.7; }

@media (max-width:900px) {
  .two-col { grid-template-columns:1fr; gap:24px; }
  .profile-card { position:static; }
}
@media (max-width:640px) {
  .card-row { grid-template-columns:1fr; gap:20px; }
  .hero-name { font-size:32px; }
  .hero-card { padding:32px 24px; }
  .page-wrap { padding:24px 16px; }
}
</style>
