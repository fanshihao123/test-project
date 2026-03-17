import './App.css'

const quickLinks = ['推荐', '歌单', '排行榜', '播客', 'MV', '歌手', '直播']

const playlists = [
  { title: '夜跑节奏控', subtitle: '电子 · 动感 · 提神', plays: '328万' },
  { title: '华语轻松通勤', subtitle: '流行 · 清爽 · 城市感', plays: '196万' },
  { title: '写代码专注 BGM', subtitle: 'Lo-Fi · 纯音 · 稳定输出', plays: '271万' },
  { title: '周末客厅慢放', subtitle: 'R&B · 爵士 · 松弛', plays: '143万' },
]

const charts = [
  { name: '飙升榜', desc: '新歌热度上升最快', top: '1. 逆光飞行 — Aio' },
  { name: '热歌榜', desc: '全站播放最高', top: '1. 今夜有风 — 林一白' },
  { name: '新歌榜', desc: '24h 上新精选', top: '1. 同频宇宙 — Kiko' },
]

const radios = [
  { title: '午后轻电台', detail: '适合专注工作和下午茶的背景声' },
  { title: '城市深夜频道', detail: '安静、微醺、带一点温柔鼓点' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-logo">M</div>
          <div>
            <div className="brand-title">MeloBox</div>
            <div className="brand-subtitle">像 QQ 音乐风格的首页 Demo</div>
          </div>
        </div>
        <nav className="top-nav" aria-label="主导航">
          {quickLinks.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <input className="search-input" placeholder="搜索歌曲 / 歌手 / 歌单" />
          <button className="ghost-button">登录</button>
          <button className="primary-button">开通会员</button>
        </div>
      </header>

      <main className="content">
        <section className="hero-card">
          <div className="hero-copy">
            <span className="hero-badge">今日推荐</span>
            <h1>把喜欢的歌，装进今天。</h1>
            <p>
              一个 React + Vite 搭出来的音乐首页原型，保留熟悉的音乐平台首页节奏：大推荐位、歌单卡片、榜单和电台分区。
            </p>
            <div className="hero-actions">
              <button className="primary-button">立即播放</button>
              <button className="ghost-button">查看歌单</button>
            </div>
          </div>

          <div className="hero-panel">
            <div className="now-playing-card">
              <div className="cover-gradient" />
              <div className="playing-meta">
                <span className="tiny-tag">NOW PLAYING</span>
                <strong>云端漫游</strong>
                <p>Luna Echo · 03:27</p>
              </div>
            </div>
            <div className="mini-stats">
              <div>
                <strong>1,284</strong>
                <span>每日推荐曲库</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>个性化刷新</span>
              </div>
              <div>
                <strong>Hi-Fi</strong>
                <span>沉浸音质</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-header">
            <div>
              <h2>推荐歌单</h2>
              <p>适合首页首屏的卡片流布局</p>
            </div>
            <a href="#more">查看更多</a>
          </div>
          <div className="playlist-grid">
            {playlists.map((item) => (
              <article className="playlist-card" key={item.title}>
                <div className="playlist-cover">
                  <span>{item.plays}</span>
                </div>
                <div className="playlist-body">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-split">
          <div className="section-block chart-block">
            <div className="section-header">
              <div>
                <h2>排行榜</h2>
                <p>三栏结构，适合快速看榜</p>
              </div>
            </div>
            <div className="chart-grid">
              {charts.map((chart) => (
                <article className="chart-card" key={chart.name}>
                  <div className="chart-head">
                    <strong>{chart.name}</strong>
                    <span>{chart.desc}</span>
                  </div>
                  <div className="chart-top-song">{chart.top}</div>
                  <ol>
                    <li>第二时刻 — YU7</li>
                    <li>远方信号 — Momo</li>
                    <li>白昼月光 — Aki</li>
                  </ol>
                </article>
              ))}
            </div>
          </div>

          <div className="section-block radio-block">
            <div className="section-header">
              <div>
                <h2>电台精选</h2>
                <p>右侧补充内容区</p>
              </div>
            </div>
            <div className="radio-list">
              {radios.map((radio) => (
                <article className="radio-card" key={radio.title}>
                  <div className="radio-icon">♫</div>
                  <div>
                    <h3>{radio.title}</h3>
                    <p>{radio.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
