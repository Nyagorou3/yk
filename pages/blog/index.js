import styled from 'styled-components'
import DefaltLeyout  from "../../compornents/templatets/DefaltLeyout";

import { Txtbtn } from "../../compornents/atoms/btn/Txtbtn";
import { Txtbtnl } from "../../compornents/atoms/btn/Txtbtnl";
import Crean from "../../image/common/crean.png";

import Link from "next/link";
import { client } from "../../libs/client";

import Date from "../../compornents/date";

export default function Home({ blog }) {

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <DefaltLeyout>
    <Sinner>
      <Swrap className="mask">
      <h2>
      TODAY&apos;S YK
      </h2>
      <SblogList>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
          <a>
          {blog.thum ? (
            <picture>
            <img src={blog.thum.url + "?w=380&h=380&fit=crop"} />
            </picture>
          ) : (
            <img src={Noimg.src} />
            )}
            <br />
            <Date dateString={blog.publishedAt} />
          <p>{blog.title}</p></a>
          </Link>
        </li>
      ))}
      </SblogList>
      </Swrap>
    </Sinner>
    </DefaltLeyout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};


const Sinner = styled.section`
  position:relative;
  font-family: futura-pt, sans-serif;
  width: 100%;
  margin: 60px auto;
  color: #000;
  @media screen and (max-width: 768px) {
    margin: 50px auto;
  }
  &::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 100%;
    left: 0;
    top: 5%;
    background: rgba(228,221,202,.4);
    z-index: -1;
  }
  &::after  {
    content: '';
    position: absolute;
    width: 100%;
    height: 230px;
    left: 60%;
    top: 0;
    background: url(${Crean.src}) no-repeat;
    @media screen and (max-width: 768px) {
      background-size: contain;
      height: 110px;
      left: 60%;
      top: -27px;
    }
    @media screen and (max-width: 599px) {
      top: 0;
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
    @media screen and (max-width: 768px) {
      padding-top: 85px;
      font-size: 36px;
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

const Swrap = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: left;
  opacity: 0;
  &.is_show {
    opacity: 1;
    transition: 1.5s .8s opacity;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
const SblogList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 55px;
  li {
    width: calc(( 100% - 8%) /3 );
    margin-right: 4%;
    margin-bottom: 40px;
    @media screen and (max-width: 599px) {
      width: calc(( 100% - 12%) /2 );
      margin-right: 6%;
    }
    &:nth-of-type(3n) {
      margin-right:0;
      @media screen and (max-width: 599px) {
        margin-right: 6%;
      }
    }
    &:nth-of-type(2n) {
      @media screen and (max-width: 599px) {
        margin-right: 0;
      }
    }
    img {
      width: 100%;
    }
    time {
      font-size: 15px;
      margin-top: 15px;
      display: block;
      @media screen and (max-width: 599px) {
        font-size: 13px;
      }
    }
    p {
      margin: 5px 0 0;
      font-weight: 600;
      font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
      @media screen and (max-width: 599px) {
        font-size: 14px;
        line-height: 1.6;
      }
    }
  }
`
