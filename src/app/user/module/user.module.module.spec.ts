import { UserModule } from './user.module.module';

describe('User.ModuleModule', () => {
  let userModuleModule: UserModule;

  beforeEach(() => {
    userModuleModule = new UserModule();
  });

  it('should create an instance', () => {
    expect(userModuleModule).toBeTruthy();
  });
});
