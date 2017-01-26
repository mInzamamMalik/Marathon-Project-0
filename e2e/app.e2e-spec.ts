import { CampusRecruitmentSystemPage } from './app.po';

describe('campus-recruitment-system App', function() {
  let page: CampusRecruitmentSystemPage;

  beforeEach(() => {
    page = new CampusRecruitmentSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
