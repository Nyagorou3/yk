import styled from "styled-components";
import Sec1main from "../../../image/service/sec1.png";
import S1 from "../../../image/service/s1.png";
import S2 from "../../../image/service/s2.png";
import S3 from "../../../image/service/s3.png";
import S4 from "../../../image/service/s4.png";
import S5 from "../../../image/service/s5.png";
import S6 from "../../../image/service/s6.png";

import Crean from "../../../image/common/crean.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Servicesec3 = ()=> {
  return (
    <Sinner>
    <Sul>
    <li id="s1">
    <div className="img_wp">
    <span className="num">
    01
    </span>
    <img src={S1.src} alt="建築物各種法定検査" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Various legal inspections of buildings</span>
    建築物各種法定検査
    </h3>
    <p><span className="bold">建築物環境衛生管理(通称:ビル管法)点検</span><br />
    この法律で規定された特定建築物維持管理権原者(所有者等)は、「空気環境の調整、給水及び排水の管理、清掃、ねずみ、昆虫等の防除その他環境衛生上良好な状態を維持する」ことが求められます。<br />
    管理基準に適合していないと、行政措置や罰金、建築物の使用制限等を求められることがあります。<br /><br />

    該当建築物毎に建築物環境衛生管理技術者(通称:ビル管理士)の資格を持つ者の選任と、多種の点検が必要となります。下に代表的なものを記載しますが、詳細はお問い合わせいただくか、<a href="https://www.mhlw.go.jp/bunya/kenkou/seikatsu-eisei10/" target="_blank" className="bold">こちら</a>をご覧ください。<br /><br />
    </p>
    <p>どこまでを外注されて、どこまで自社で行うべきか、ファシリティ、アメニティマネジメントの観点から助言します。</p>
    <p>
    <span className="bold">1.空気調和設備及び機械換気設備の維持管理</span><br />
空気環境測定、クーリングタワーの点検及び清掃、加湿減湿装置の点検及び清掃<br /><br />
    </p>
    <p>
    <span className="bold">2.飲料水に関する設備の維持管理</span><br />
    貯水槽及び貯湯槽の点検清掃、付帯設備(ポンプ、電極等)の点検、飲料水配管の点検<br /><br />
    </p>
    <p>
    <span className="bold">3.雑用水に関する設備の維持管理</span><br />
    雑用水槽の点検清掃、付帯設備(ポンプ、フロートスイッチ、マンホール等)の点検、雑用水配管の点検<br /><br />
    </p>
    <p>
    <span className="bold">4.排水に関する設備の維持管理</span><br />
    排水槽の点検清掃、付帯設備(ポンプ、フロートスイッチ、マンホール、トラップ等)の点検、排水配管の点検
    </p>

    <p>
    <span className="bold">5.清掃並びに清掃用機械器具等及び廃棄物の処理設備の維持管理</span><br />
    日常清掃、定期清掃、床面清掃(ワックス剥離、ワックス塗布含む)、清掃用機械器具及びその保管庫の点検清掃、廃棄物の貯留設備の点検清掃
    </p>
    <p>
    <span className="bold">6.ねずみ等の防除</span><br />
    害虫(ねずみ、ゴキブリ等)の生息調査及び防除、駆除<br /><br />
    </p>
    <p>
    <span className="bold big">・非構造部材の耐震点検</span><br />
    学校等設置者(所有者等)は非構造部材の耐震対策や劣化状況について定期に点検することとなっています。<br />
    学校保健安全法に基づく定期点検やこの点検は必須資格が定められていないので、学校側で行うことも可能です。<br />
    ただし、建築物の保全及び事故予防の観点から、上の特定建築物定期調査の対象とならない施設については、弊社も含めた専門業者に定期に依頼することをお勧めします。<br /><br />

    尚、文部科学省の管轄する学校等には各種学校の他に幼稚園、認定こども園も含まれます。<br /><br />
    </p>
    <p>
    <span className="bold">・フロン排出抑制法点検</span><br />
    建築物の管理者は設置された業務用エアコン等のすべての機器に３ヶ月ごとの簡易点検を、一定規模以上の機器には１年または３年ごとの有資格者による定期点検をすることを義務付けられています。<br />また、機器毎に点検整備簿の作成、保管も必要です。<br /><br />

    弊社では全ての点検と点検整備簿の作成を行っておりますが、費用の面から簡易点検は可能なら施設側で行うことをお勧めします。<br />
    簡易点検の方法や整備簿の記入方法については、点検時にお伝えします。<br /><br />

    平成27年に新設された点検であり、まだ認知度が低いので、特に定期点検が必要な設備があるか注意が必要です。<br /><br />

    </p>
    <p>
    <span className="bold">・消防設備点検</span><br />
    消防法に定められた点検で、建築物に設置されている消火設備や自動火災報知設備、避難設備等が正しく設置されているか、正常に作動するかを点検し、所管の消防署への定期報告を行うことが義務付けられています。(報告が必要な頻度は用途によって異なります。)<br />
    点検及び報告書の作成、提出までを一連の業務としています。<br /><br />
    </p>
    <p>
    <span className="bold">・防火対象物点検</span><br />
    消防法に定められた点検で、対象となる建築物の防火管理上必要な業務等について点検し、所管の消防署へ年1回報告することが義務付けられています。<br />
具体的には防火管理者の選任や消火、通報、避難訓練の実施状況等の書類上の点検と、カーテンやカーペット等の防炎表示や消防設備、防火設備等の現場点検を行います。<br />
点検及び報告書の作成、提出までを一連の業務としています。
    </p>
    </div>
    </li>
    <li id="s2">
    <div className="img_wp">
    <span className="num">
    02
    </span>
    <img src={S2.src} alt="ホームインスペクション" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Home inspection</span>
    ホームインスペクション
    </h3>
    <p>
    建築物に精通した点検者が第三者的な立場から、また専門家の見地から、住宅の劣化状況、欠陥の有無、改修すべき箇所やその時期、おおよその費用などを見きわめ、アドバイスを行なう業務です。<br />
    住宅の購入前や、保証期間が切れる前、売り出し前にホームインスペクションを行なうことで、建築物の状態を把握することができ、安心した取引を行うことができます。<br />
    海外ではかなり知名度の高い診断業務であり、日本では平成30年から、中古住宅取引の際にホームインスペクションの説明が義務化されています。<br /><br />

    診断方法は、目視にて、屋根、外壁、室内、小屋裏、床下などの劣化状態を診断することを標準仕様としています。<br />
    オプションにて、赤外線カメラや照度計、騒音計、風速計等の機材を使用して、より詳細に診断することも可能です。<br /><br />

    住所、竣工時期、構造、延床面積(不明なら建築面積)を記載の上、お問い合わせいただけましたらすぐに見積いたします。<br />
    日付や曜日、時間の指定がある場合はその旨も併せてお伝えください。<br /><br />

    標準仕様での診断であれば30,000円~60,000円程度です。但し、各種条件により増減する為、正確な金額は見積書によって案内します。
    </p>
    </div>
    </li>
    <li id="s3">
    <div className="img_wp">
    <span className="num">
    03
    </span>
    <img src={S3.src} alt="電気工事" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Electrical construction</span>
    電気工事
    </h3>
    <p>
    戸建住宅から大規模建築物において、換気設備、空調設備、照明設備、小型発電設備、通信設備、音響設備等、各種電気工事を行っております。<br />
    それぞれただ設置、交換するだけではなく設備設計も行っておりますので、安心してお任せいただけます。<br />
    ※特別高圧(7,000V超)の電気設備については、取り扱っておりません。
    </p>
    </div>
    </li>
    <li id="s4">
    <div className="img_wp">
    <span className="num">
    04
    </span>
    <img src={S4.src} alt="環境・公害コンサルタント" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Environmental and pollution consultants</span>
    環境・公害コンサルタント
    </h3>
    <p>
    環境基本法の定める各種管理書類の作成から、公害(大気汚染、水質汚濁、土壌汚染、騒音、振動、地盤沈下及び悪臭)の防止対策の提案、維持管理業務の委託仕様書類の作成、入札補助等、病院や工場等の特定施設の公害対策、近隣苦情解決を総合的にサポートします。
    </p>
    </div>
    </li>
    <li id="s5">
    <div className="img_wp">
    <span className="num">
    05
    </span>
    <img src={S5.src} alt="給排水設備工事" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Water supply and drainage equipment construction</span>
    給排水設備工事
    </h3>
    <p>
    戸建住宅から大規模建築物において、給水設備、排水設備を行っております。<br />
    それぞれただ設置、交換するだけではなく設備設計も行っておりますので、安心してお任せいただけます。
    </p>
    </div>
    </li>
    <li id="s6">
    <div className="img_wp">
    <span className="num">
    06
    </span>
    <img src={S6.src} alt="WEB制作関連事業" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>WEB production related business</span>
    WEB制作関連事業
    </h3>
    <p>
    WEB制作をディレクションから実装までワンストップに行っています。制作実績は令和3年8月時点で100社を超えており、知識と経験、感性を活かした制作が好評いただいております。<br />
    デザイン特化ではなく、最新の技術を駆使した実用的なホームページで集客力アップ、ECの販売強化に繋げます。<br />
    また、名刺やチラシ等の印刷物の制作や宣材写真の撮影も行っています。<br /><br />

    どこまで作り込むか、どのような機能を持たせるかによって費用が大きく変動いたしますので、まずはお問い合わせください。
    </p>
    </div>
    </li>
    </Sul>
    </Sinner>
  );
}

const Sinner = styled.section`
font-family: futura-pt, sans-serif;
width: 100%;
max-width: 1280px;
margin: 200px auto 100px;
text-align: left;
color: #000;
@media screen and (max-width: 1279px) {
  width: 90%;
}
@media screen and (max-width: 768px) {
  margin: 150px auto;
}
@media screen and (max-width: 599px) {
  flex-wrap: wrap;
  margin: 55px auto;
}
`

const Sul = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap:wrap;
    margin-bottom: 85px;
    @media screen and (max-width: 768px) {
    align-items: flex-start;
    }
    @media screen and (max-width: 599px) {
      margin-bottom: 25px;
    }
    .img_wp {
      width: 45%;
      @media screen and (max-width: 599px) {
        width: 100%;
      }
      .num {
        font-size: 24px;
      }
    }
    .txt_wp {
      width: 45%;
      @media screen and (max-width: 768px) {
        margin-top: 45px;
      }
      @media screen and (max-width: 599px) {
        width: 100%;
      }
      h3 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 45px;
        margin-top: 30px;
        font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
        @media screen and (max-width: 768px) {
          font-size: 20px;
          margin-bottom: 20px;
        }
         span {
          font-size: 22px;
          display: block;
          font-family: futura-pt, sans-serif;
          @media screen and (max-width: 768px) {
            font-size: 15px;
          }
        }
      }
      p {
        font-size: 16px;
        letter-spacing: 2px;
        line-height: 1.7;
        font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
        @media screen and (max-width: 599px) {
          font-size: 14px;
        }
      }
    }
  }

`
