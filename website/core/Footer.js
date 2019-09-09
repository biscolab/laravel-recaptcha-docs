/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro')}>
              Getting Started
            </a>
            <a href="/versions">
              Versions
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={'https://github.com/biscolab/laravel-recaptcha/issues'} target={'_blank'}>
              Issue tracker
            </a>
            <a href={this.docUrl('contributing')} target={'_blank'}>
              Contributing
            </a>
            <a href={'https://github.com/biscolab/laravel-recaptcha/blob/master/LICENSE'} target={'_blank'}>
              License
            </a>
            <a href={'https://packagist.org/packages/biscolab/laravel-recaptcha'} target={'_blank'}>
              Packagist
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a className="github-button" href={this.props.config.repoUrl} aria-label="Star biscolab/laravel-recaptcha on GitHub">Github</a>
            <a href={'https://www.google.com/recaptcha'} target={'_blank'}>
              Official page
            </a>
          </div>
        </section>

        <section className="copyright">
          <a href={'https://www.google.com/recaptcha'} target={'_blank'}>reCAPTCHA is property of Google Inc.</a><br/>
          {this.props.config.title} is distributable under the terms of the <a href="https://github.com/biscolab/laravel-recaptcha/blob/master/LICENSE" target={"_blank"}>MIT license</a><br/>
          {this.props.config.title} is a project of <a href={this.props.config.copyrightUrl} target={"_blank"}>Roberto Belotti</a>
      
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
