//html要素取得
var showTime = document.getElementById("showTime");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var resetButton = document.getElementById("resetButton");

//変数宣言
var startTime = 0;
var stopTime = 0;
var nowTime = 0;
var count;

//クリックイベント時の関数定義
function start(){
  startButton.disabled = true;        //ボタンの活性、非活性
  stopButton.disabled = false;
  resetButton.disabled = false;
  startTime = Date.now();             //スタート時の時刻取得
  count = setInterval(countTime, 10); //時間計測の繰り返し
};

function stop(){
  startButton.disabled = false;       //ボタンの活性、非活性
  stopButton.disabled = true;
  resetButton.disabled = false;
  stopTime = nowTime;                 //ストップ時の時刻取得
  clearInterval(count);               //時間計測停止
};

function reset(){
  startButton.disabled = false;       //ボタンの活性、非活性
  stopButton.disabled = true;
  resetButton.disabled = true;
  clearInterval(count);               //時間計測停止
  showTime.textContent = "0:00:00.00";  //表示時間、変数の初期化
  startTime = 0;
  stopTime = 0;
  nowTime = 0;
};

//繰り返し関数
function countTime(){
  nowTime = Date.now() - startTime + stopTime;                //現時刻取得
  var milliSeconds = nowTime % 1000;                          //時間に変換
  var seconds = Math.floor((nowTime % 60000) / 1000);
  var minutes = Math.floor((nowTime % 3600000) / 60000);
  var hours = Math.floor(nowTime / 3600000);
  milliSeconds = ("00" + milliSeconds).slice(-3, -1);         //桁揃え
  seconds = ("0" + seconds).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  showTime.textContent = hours + ":" + minutes + ":" + seconds +"." + milliSeconds;
} 