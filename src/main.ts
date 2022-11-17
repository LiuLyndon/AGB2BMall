import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/** 
 * [HTML] SEO meta tag
 * https://pjchender.dev/html/html-seo-meta
 * */ 

/** 
 * Meta Title/Meta Description是什麼？
 * https://welly.tw/serp-rank-optimization/what-is-meta-title-and-description
 * 1.Title&Description
 *    Meta Title及Meta Description即是網頁的標題及描述，
 *    就如同我們認識陌生人一般，搜尋引擎第一次認識網頁，必定會先詢問網頁的名字，也就是Meta Title，
 *    而若想再多瞭解網頁的特色，便會請網頁自我介紹，這個部分就是Meta Description。
 *    關於這兩者，我們在下文會有更進一步的介紹。
 * 2.Canonical
 *    基於各種原因，有時即便是同一網頁也會產生相異的網址，就好像張惠妹和阿密特，雖然是同一個人，對外卻有不同的稱呼及樣貌。
 *    然而搜尋引擎會誤將這些網址不同的相同網頁判斷為相異，導致網頁被認定內容重複而遭到排名下降的懲罰。
 *    此時便可在網頁中加入 Canonical Tag，這就好像每個人的身分證字號，無論換了多少造型與身分，都還是會被認定為同一個人。
 *    藉由這種方式，就能避開搜尋引擎錯認的可能性。
 * 3.Charset
 *    Charset Tag能夠指定瀏覽器顯示網頁時採用的字元編碼，目前大多數網頁皆使用 UTF-8編碼。使用錯誤的Charset編碼會讓網頁出現亂碼，令使用者難以辨識內容。
 * 4.Viewport
 *    藉由Viewport Tag，網頁便能依據使用者的裝置顯示相應的尺寸與內容排版，若是此項設定有誤，則可能造成部分裝置的使用者無法正確顯示網頁。
 * 5.Robot
 *    搜尋引擎讀取網頁資訊後，會為網頁進行索引，但若使用Robot Tag，則可以拒絕搜尋引擎的索引，通常用於較特殊的目的或情形。
 *    然而，即便設定了Robot Tag，也只能做為對搜尋引擎的建議，網頁索引仍有機會被呈現於搜尋結果中。
 * 6.Hreflang
 *    如果網頁具備多種語言的內容，則可以設定Hreflang Tag，讓不同地區的使用者能夠獲取對應語言的內容。
 * */
