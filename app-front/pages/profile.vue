<template>
  <div>
    <header>
      <nuxt-link to="/">back to TOP</nuxt-link>
      <h1>profile</h1>
    </header>
    <div class="wrapper">
    <div class="intro-card">
      <div class="name">Tatsuya Ichikawa</div>
      <div class="job">Engineer</div>
      <div class="introduction">
        <p>はじめまして。</p>
        <p>33歳からプログラミングを始めて、現在はwebエンジニアをしています。</p>
        <p>プログラミングは良いサービスを作るための道具にすぎないと思っています。</p>
        <p>大切な大切な道具です。</p>
        <p>現在はUI・UXデザインを行う会社で主にフロントエンドを担当していますが、<br>サービス全体を掌握したいため、サーバーサイド、インフラの技術も習得していきたいです。</p>
        </div>
    </div>
    <div class="slill-title">skills</div>
    <div class="skill-wrapper">
      <div class="skill-card card" v-for="skill in skills" :key=skill.name>
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-term">{{ skill.term }}</div>
        <div class="skill-desc">{{ skill.description }}</div>        
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "Ruby on Rails", term: "1 year", description: "TECH::EXPERTというプログラミングスクールで始めて学んだフレームワークです。学習後は受託や個人開発で使用しています。このブログのサーバーサイドもRuby on Railsを使用して作成しています。"},
        { name: "jQuery", term: "1 year", description: "フロントエンドの受託等や個人開発でRuby on Railsと合わせて使用しています。"},
        { name: "HTML・CSS", term: "1 year", description: "33歳で初めてHTMLを知ったところからエンジニア人生が始まりました。SEOまで意識したマークアップ、基本的なインタラクションまでのスタイリングが可能です。"},
        { name: "Vue.js", term: "3month", description: "フロントエンドのフレームワークを学ぶために勉強しています。このブログのフロントエンドはVue.jsのフレームワークであるNuxt.jsを使って作成しています。"},
        { name: "React", term: "2month", description: "流行りと名前の格好良さに飛びついて２度挫折しましたが、勉強会等を通してreduxなどの全体のイメージがついたので今度こそ習得したいと思っています。"},
        { name: "Docker", term: "3month", description: "このブログの開発環境はDockerを使って構築しています。フロント、api、DBの各コンテナをdocker-composeで管理しています。まだまだ勉強が足りませんが、今後はkubernetes等にも手を出すつもりです。"},
      ]
    }
  }
}
</script>

<style scoped>
  header {
    position: relative;
    padding: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
  }

  header > a {
    /* position: absolute;
    top: 35px;
    left: 20px; */
    font-size: 15px;
    color: black;
  }

  header > a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition: color .5s;
}
header > a:hover {
  color: #1F7392;

}

header > a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #1F7392;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform .3s;
  color: #1F7392;
}
header > a:hover::after {
  transform: scale(1, 1);
}

  header > h1 {
    text-align: center;
    font-size: 40px;
  }

  .wrapper {
    padding: 0 25px;
  }

  .card {
    padding: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,.3);
  }

  .intro-card {
    width: 80%;
    margin: 20px auto;
    text-align: center;
    line-height: 30px;
    padding: 50px 20px;
    margin-top: 50px;
  }

  .name {
    margin-bottom: 12px;
    font-size: 28px;
  }

  .job {
    margin-bottom: 22px;
    font-size: 18px;
  }

  .introduction > p {
    margin: 0 auto;
  }

  .skill-wrapper {
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  .skill-card {
    width: 30%;
    min-width: 300px;
    margin: 20px;
    padding: 40px 30px;
  }

  .slill-title {
    position: relative;
    width: 100px;
    text-align: center;
    font-size: 40px;
    margin: 50px auto 30px;
  }

  .slill-title::before,
  .slill-title::after {
    position: absolute;
    top: 20px;
    content: '';
    width: 25px;
    height: 2px;
    background: black;
    border-radius: 10px;
  }
  
  .slill-title::before {
    left: -30px;
  }

  .slill-title::after {
    right: -30px;
  }

  .skill-name {
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
  }

  .skill-term {
    text-align: center;
    margin-bottom: 20px;
  }

  .skill-desc {
    line-height: 25px;
  }

  @media screen and (max-width: 840px) {
    .skill-card {
      width: 40%;
    }
  }

  .page-enter-active, .page-leave-active {
  transition: opacity .5s;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
  }

</style>
