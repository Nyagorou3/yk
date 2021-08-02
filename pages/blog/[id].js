// pages/blog/[id].js
import { client } from "../../libs/client";
import DefaltLeyout  from "../../compornents/templatets/DefaltLeyout";
import styled from 'styled-components'
import Crean from "../../image/common/crean.png";
import { Txtbtnc } from "../../compornents/atoms/btn/Txtbtnc";

import Date from "../../compornents/date";

export default function BlogId({ blog }) {
  return (
    <DefaltLeyout>
    <main>
    <Sinner>
     <Swp>
      <h1>{blog.title}</h1>
      <Date dateString={blog.publishedAt} />
      <div className="b_body"
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <Txtbtnc to="/blog" btntxt="VIEW ALL" />
      </Swp>
      </Sinner>
    </main>
    </DefaltLeyout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};


const Sinner = styled.section`
  position:relative;
  width: 100%;
  margin: 160px auto;
  color: #000;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
  @media screen and (max-width: 768px) {
    margin: 50px auto;
  }
  @media screen and (max-width: 599px) {
    margin: 150px auto 60px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 80%;
    left: 0;
    top: 15%;
    background: rgba(228,221,202,.4);
    z-index: -1;
  }
  &::after  {
    content: '';
    position: absolute;
    width: 100%;
    height: 155px;
    left: 60%;
    top: -85px;
    background: url(${Crean.src}) no-repeat;
    background-size: contain;
    @media screen and (max-width: 768px) {
      background-size: contain;
      height: 110px;
      left: 60%;
      top: -27px;
    }
    @media screen and (max-width: 599px) {
      top: -115px;
      width: 54%;
      left: 35%;
    }
  }

  h2{
    padding-top: 150px;
    position:relative;
    font-size: 60px;
    letter-spacing: .1em;
    margin-bottom: 40px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
    @media screen and (max-width: 599px) {
      padding-top: 85px;
      font-size: 32px;
      margin-bottom: 20px;
    }
    .kazari {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
const Swp = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1279px) {
    width: 90%;
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
    @media screen and (max-width: 599px) {
      font-size: 32px;
    }
  }
  time {
    font-family: futura-pt, sans-serif;
    margin: 15px 0 25px;
    display: block;
  }
  .b_body {
    margin: 45px 0 80px;
    p {
      font-size: 16px;
      @media screen and (max-width: 599px) {
        font-size: 15px;
      }
    }
  }

`
