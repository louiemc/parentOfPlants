import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import "./Supplies.css";

class Supplies extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1 className="suppliesPageTitle">Supplies We Use and Recommend</h1>

        <div className="suppliesBody">
          <div className="suppliesDiv">
            <a
              href="https://www.thesill.com/products/lava-rocks-plant-supplies?variant=5459434668073&gclid=EAIaIQobChMI0uue_drB4wIVh4rICh2XiQITEAQYASABEgIetvD_BwE"
              target="blank"
            >
              <img
                src="/images/suppliesLavaRock.png"
                alt="lava rocks"
                className="supplyImage"
              />
            </a>
            <p className="supplyTitle">
              Lava rocks are a great tool for any
              plant parent! <br />
              Using lava rock has many advantages! Better soil aeration,
              drainage, water retention, and pH neutral. They are quite porous,
              which means that they will slowly absorb and release water!
            </p>
          </div>

          <div className="suppliesDiv">
            <a href="" target="blank">
              <img src="/images/blankPic.jpg" alt="supply post image" className="supplyImage" />
            </a>
            <p className="supplyTitle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>

          <div className="suppliesDiv">
            <a href="" target="blank">
              <img src="/images/blankPic.jpg" alt="supply post image" className="supplyImage" />
            </a>
            <p className="supplyTitle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
          <div className="suppliesDiv">
            <a href="" target="blank">
              <img src="/images/blankPic.jpg" alt="supply post image" className="supplyImage" />
            </a>
            <p className="supplyTitle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>

          <div className="suppliesDiv">
            <a href="" target="blank">
              <img src="/images/blankPic.jpg" alt="supply post image" className="supplyImage" />
            </a>
            <p className="supplyTitle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>

          <div className="suppliesDiv">
            <a href="" target="blank">
              <img src="/images/blankPic.jpg" alt="supply post image" className="supplyImage" />
            </a>
            <p className="supplyTitle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Supplies;
