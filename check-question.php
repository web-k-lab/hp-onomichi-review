<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>質問ページ - 質問確認</title>
    <link rel="stylesheet" href="color.css" />
    <link rel="stylesheet" href="question.css" />
    <style>
      /* develop section's tempolary setting */
      body > * {
        background-color: #fff;
        color: black;
        border: 1px dotted black;
      }
    </style>
  </head>

  <body>
    <header>
      <p>
        <a href="site-top.html">
          尾大情報共有サイト(仮)
        </a>
      </p>
    </header>
    <!-- プログレスバー -->
    <div class="progress">
      <h2>進行状況</h2>
      <ul>
        <li>1.</li>
        <li>記述</li>
        <li class="darker-blue">2.</li>
        <li>確認</li>
        <li>3.</li>
        <li>投稿</li>
      </ul>
    </div>

    <!-- 質問内容 -->
    <main>
      <p>titile</p>
<?php
    echo $_REQUEST['title']
  ?>
  <p>details</p>
  <?php
    echo $_REQUEST['details']
    ?>
    <p>genre</p>
    <?php
    echo $_REQUEST['genre']
    ?>
    </main>

    <div>
      <label for="acceptPolicy">
        <p>
          <input
            type="checkbox"
            name="acceptPolicy"
            id="acceptPolicy"
            value="true"
          />利用規約に同意します
        </p>
      </label>
      <button type="submit">次へ</button>
    </div>
    <footer>
      <a href="site-top.html">トップページに戻る</a>
      <address>Copyright&copy; 2019 Onomichi University 木村ゼミ</address>
    </footer>

    <script src="question.js"></script>
  </body>
</html>
