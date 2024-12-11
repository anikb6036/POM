import LOGIN from "../../support/page object/login.cy";
import LINK from "../../support/page object/link.cy";
import LOGOUT from "../../support/page object/logout.cy";
import flipkart from "../../support/page object/flipkart.cy";

describe('', () => {


    const login1 = new LOGIN();
    const link1 = new LINK();
    const logout1 = new LOGOUT();
    const Flipkart1 = new flipkart();

    it.skip('', () => {
        login1.EnterUrl();
        login1.loginOrm();
        link1.clickLink('Admin');
        logout1.LogoutClick();
    });

    
    it('', () => {
        Flipkart1.Url();
        Flipkart1.scroll();
    });
});