import React, {PureComponent} from 'react';
import NewsLatter from '../news-latter/newslatter';
import Social from '../social/index';
import List from '../list/list';
import Search from '../search/search';
import './footer.css';

class Footer extends PureComponent {
    state = {

    }

    render() {
        const socialProps = {
            socialList:[{link: 'insta', className: 'insta'},{link: 'fb', className: 'fb'}]
            }
        const menProps = {
            header: "Men",
            items: ['OCA Low', 'OCA High', 'CATIBA Low', 'CATIBA High']
        };
        const womenProps = {
            header: "Women",
            items: ['OCA Low', 'OCA High', 'CATIBA Low', 'CATIBA High']
        };

        const supportProps = {
            header: "Support",
            items: ['FAQ', 'Returns', 'Live Chat']
        }

        const AboutProps = {
            header: "About",
            items: ['Mission', 'Vision', 'Future']
        };

        const storyProps = {
            header: "Pop Up Stores",
            items: ['Find near you', 'Register']
        };

        return(
            <footer className="footer">
                <div className="container-footer">
                    <div className="footer-content">
                        <div className="footer-right-col">
                            <div className="footer-nav-col">
                                <NewsLatter />
                                <Social {...socialProps} />
                            </div>
                            <div className="footer-nav-col desktop-only">
                                <List {...storyProps} />
                                <Search />
                            </div>
                        </div>
                        <div className="footer-left-col">
                            <div className="footer-nav-col">
                                <List {...menProps} />
                            </div>
                            <div className="footer-nav-col">
                                <List {...womenProps} />
                            </div>
                            <div className="footer-nav-col">
                                <List {...supportProps} />
                            </div>    
                            <div className="footer-nav-col">
                                <List {...AboutProps} />
                            </div>
                        </div>
                    </div>
                    <div className="copyright">Copyright © 2019 CARIUMA. All Rights Reserved. <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;