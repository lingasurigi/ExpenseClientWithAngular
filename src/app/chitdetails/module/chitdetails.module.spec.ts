import { ChitdetailsModule } from './chitdetails.module';

describe('ChitdetailsModule', () => {
  let chitdetailsModule: ChitdetailsModule;

  beforeEach(() => {
    chitdetailsModule = new ChitdetailsModule();
  });

  it('should create an instance', () => {
    expect(chitdetailsModule).toBeTruthy();
  });
});
