/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-sync-scripts */
'use client'
import "./form.css";
import Image from "next/image";
import ActualLogo from "../../../public/assets/img/actcodlogo.png";
import Header from "../components/header/Header";
import BottomShadow from "../components/bottomshadow/BottomShadow"

export default function Form() {

  const mcSignupStyle: React.CSSProperties = {
    background: '#fff',
    clear: 'left',
    font: '14px Helvetica, Arial, sans-serif',
    width: '600px',
  };

    return(
        <main className="flex flex-col items-center justify-center">
            <Header/>
            <BottomShadow/>
        <div className="hero-container flex flex-col items-center justify-center w-[70%]
        h-[500px] rounded-lg low:h-fit low:pb-4">
            <Image src={ActualLogo} className="w-[170px]" alt="actual coding logo"/>
            <h1 className="form-h1">Newsletter</h1>
            <p className="text-blue-dark text-xl">Fique sempre por dentro das tendências, técnologias e informações.</p>
            <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style jsx>
        {`
          #mc_embed_signup {
            background: ${mcSignupStyle.background};
            clear: ${mcSignupStyle.clear};
            font: ${mcSignupStyle.font};
            width: ${mcSignupStyle.width};
          }

          /* Add your additional styles here */
        `}
      </style>
<div id="mc_embed_signup">
<form action="https://app.us14.list-manage.com/subscribe/post?u=30c3682829e7d5c08a04165c3&id=947c70e02c&f_id=00b501e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Inscreva-se</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group"><label htmlFor="mce-EMAIL">Endereço de e-mail <span className="asterisk">*</span></label>
            <input
  type="email"
  name="EMAIL"
  className="required email"
  id="mce-EMAIL"
  required
/></div>
        <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response"></div>
            <div className="response" id="mce-success-response"></div>
        </div>
    <div className="absolute left-[-5000px]" aria-hidden="true">
    <input
                type="text"
                name="b_30c3682829e7d5c08a04165c3_947c70e02c"
                value=""
              />    </div>
        <div className="optionalParent">
            <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                <p className="p_form_mailshimp"><a href="http://eepurl.com/iJoTDk" title="Mailchimp - marketing por e-mail fácil e divertido"><span><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-light.svg" alt="Intuit Mailchimp" /></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script type="text/javascript">
        {`
          (function($) {
            window.frames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';ftypes[0]='email';
            fnames[1]='FNAME';ftypes[1]='text';
            fnames[2]='LNAME';ftypes[2]='text';
            fnames[3]='ADDRESS';ftypes[3]='address';
            fnames[4]='PHONE';ftypes[4]='phone';
            fnames[5]='BIRTHDAY';ftypes[5]='birthday';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);
        `}
      </script></div>
    </div>
        </main>
    );
}