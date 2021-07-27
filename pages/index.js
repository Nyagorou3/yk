import styled from 'styled-components'
import  { Mv } from "../compornents/oragenism/top/Mv";
import { TopAbout } from "../compornents/oragenism/top/TopAbout";
import { TopService } from "../compornents/oragenism/top/TopService";
import { TopRecruit } from "../compornents/oragenism/top/TopRecruit";
import { TopContact } from "../compornents/oragenism/top/TopContact";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";

import Kazari1 from "../image/common/kazari1.png";
import Noimg from "../image/common/noimage.png";
import Seckazari from "../image/common/seckazari.png";
import Blog1 from "../image/top/blog1.png";
import Blog2 from "../image/top/blog2.png";
import Blog3 from "../image/top/blog3.png";
import Mou from "../image/common/mou.png";
import { Txtbtn } from "../compornents/atoms/btn/Txtbtn";
import { Txtbtnl } from "../compornents/atoms/btn/Txtbtnl";

import Link from "next/link";
import { client } from "../libs/client";
import Date from "../compornents/date";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home({ blog }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 599,
      settings: {
       slidesToShow: 2,
     }
    }]
  };

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <DefaltLeyout>
    <Mv />
    <TopAbout />
    <TopService />
    <Sinner>
      <Swrap>
      <h2>
      BLOG
      </h2>


    <SblogList>
    <Slider {...settings}>
      {blog.map((blog) => (
        <div className="b_item" key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <a>
            {blog.thum ? (
              <picture>
              <img src={blog.thum.url + "?w=380&h=380&fit=crop"} />
              </picture>
            ) : (
              <img src={Noimg.src} />
              )}
              <Date dateString={blog.publishedAt} />
            <p>{blog.title}</p></a>
          </Link>
        </div>
      ))}
        </Slider>
      </SblogList>

      <Txtbtnl to="/blog" btntxt="VIEW ALL" />
      </Swrap>
    </Sinner>
    <TopRecruit />
    <TopContact />
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
  margin: 200px auto;
  color: #000;
  @media screen and (max-width: 599px) {
    margin: 100px auto;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 60%;
    left: 0;
    top: 5%;
    background: rgba(228,221,202,.4);
    z-index: -1;
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
  margin-left: auto;
  text-align: left;
`
const SblogList = styled.div`
  margin-bottom: 55px;
  width: 100%;
  .b_item {
    &:hover {
      img {
        filter: grayscale(0);
        transition: .5s;
      }
    }
    img {
      width: 100%;
      filter: grayscale(100%);
      transition: .5s;
    }
    time {
      font-size: 15px;
      margin-top: 15px;
      display: block;
    }
    p {
      margin: 5px 0 0;
      font-weight: 600;
      font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
      @media screen and (max-width: 599px) {
        font-size: 14px;
      }
    }
  }
`
