const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

class MyPage extends React.Component {
  render() {
    return (<Container
    padding={['bottom', 'top']}
    background="light"
    className="myCustomClass">
    <MarkdownBlock>
    # Cookies
    </MarkdownBlock>
    <MarkdownBlock>
    To make this site work properly, we sometimes place small data files called cookies on your device. Most big websites do this too.
    </MarkdownBlock>
    <MarkdownBlock>
    ## What are cookies?
    </MarkdownBlock>
    <MarkdownBlock>
    A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
    </MarkdownBlock>
    <MarkdownBlock>
    ## How do we use cookies?
    </MarkdownBlock>
    <MarkdownBlock>
    Adjust this part of the page according to your needs. Explain which cookies you usein plain, jargon-free language. In particular:
    </MarkdownBlock>
    <MarkdownBlock>
    * their purpose and the reason why they are being used, (e.g. to remember users' actions, to identify the user, for online behavioural advertising)
    </MarkdownBlock>
    <MarkdownBlock>
    * if they are essential for the website or a given functionality to work or if they aim to enhance the performance of the website
    </MarkdownBlock>
    <MarkdownBlock>
    * the types of cookies used (e.g. session or permanent, first or third-party)
    </MarkdownBlock>
    <MarkdownBlock>
    * who controls/accesses the cookie-related information (website or third party)
    </MarkdownBlock>
    <MarkdownBlock>
    * that the cookie will not be used for any purpose other than the one stated 
    </MarkdownBlock>
    <MarkdownBlock>
    * how consent can be withdrawn.
    </MarkdownBlock>
    <MarkdownBlock>
    ## Example:
    </MarkdownBlock>
    <MarkdownBlock>
    A number of our pages use cookies to remember:
    </MarkdownBlock>
    <MarkdownBlock>
    * your display preferences, such as contrast colour settings or font size
    </MarkdownBlock>
    <MarkdownBlock>
    * if you have already replied to a survey pop-up that asks you if the content was helpful or not (so you won't be asked again)
    </MarkdownBlock>
    <MarkdownBlock>
    * if you have agreed (or not) to our use of cookies on this site
    </MarkdownBlock>
    <MarkdownBlock>
    Also, some videos embedded in our pages use a cookie to anonymously gather statistics on how you got there and what videos you visited.
    </MarkdownBlock>
    <MarkdownBlock>
    Enabling these cookies is not strictly necessary for the website to work but it will provide you with a better browsing experience. You can delete or block these cookies, but if you do that some features of this site may not work as intended.

    The cookie-related information is not used to identify you personally and the pattern data is fully under our control. These cookies are not used for any purpose other than those described here.
    </MarkdownBlock>
    <MarkdownBlock>
    ## How to control cookies
    </MarkdownBlock>
    <MarkdownBlock>
    You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
    </MarkdownBlock>
</Container>);
  }
}

MyPage.title = 'Cookie policy';
MyPage.description = 'Website Cookie policy';

module.exports = MyPage;