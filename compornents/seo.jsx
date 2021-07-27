import Head from 'next/head';

export default function Seo({ title = "株式会社YK企画 | 京都を基点に関わる全ての人々に便利と快適を提供する", description = "京都を基点に様々なサービスを提供する企画会社です。建築物各種法定検査/ホームインスペクション/電気工事/環境・公害コンサルタント/給排水設備工事/WEB制作関連事業" }) {

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/image/commpn/ogp.jpg`} />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  )
}
