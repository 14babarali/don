import React, { Component } from "react";

export default class Common extends Component {
  render() {
    return (
      <>
        {/* Required meta tags */}

        {/* <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
            /> */}
        <link
          data-optimized={2}
          rel="stylesheet"
          href="https://www.enukesoftware.com/wp-content/litespeed/cssjs/60277.css"
        />

        <style
          id="rocket-lazyload-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.rll-youtube-player{position:relative;padding-bottom:56.23%;height:0;overflow:hidden;max-width:100%;}.rll-youtube-player iframe{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:0 0}.rll-youtube-player img{bottom:0;display:block;left:0;margin:auto;max-width:100%;width:100%;position:absolute;right:0;top:0;border:none;height:auto;cursor:pointer;-webkit-transition:.4s all;-moz-transition:.4s all;transition:.4s all}.rll-youtube-player img:hover{-webkit-filter:brightness(75%)}.rll-youtube-player .play{height:72px;width:72px;left:50%;top:50%;margin-left:-36px;margin-top:-36px;position:absolute;background:url(https://www.enukesoftware.com/wp-content/plugins/rocket-lazy-load/assets/img/youtube.png) no-repeat;cursor:pointer}\n",
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t.no-js img.lazyload { display: none; }\n\t\t\tfigure.wp-block-image img.lazyloading { min-width: 150px; }\n\t\t\t\t\t\t\t.lazyload, .lazyloading { opacity: 0; }\n\t\t\t\t.lazyloaded {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransition: opacity 400ms;\n\t\t\t\t\ttransition-delay: 0ms;\n\t\t\t\t}\n\t\t\t\t\t",
          }}
        />
      </>
    );
  }
}
