import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  return (
    <div class="footer">
        <h2>"Stay inspired with our quote generator,available 24/7"</h2>
        <h2>Contact us for feedback,suggestions and improvements</h2>
        <a style={{padding:"25px"}} href ="//www.https:facebook.com/">
          <FacebookIcon/>
        </a>
        <a style={{padding:"25px"}} href ="https://twitter.com/">
          <TwitterIcon/>
        </a>
        <a  href ="https://gmail.com/">
          <EmailIcon/>
        </a>

    </div>
  )
}

export default Footer