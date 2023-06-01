import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should give message \' please log in \' ', () => {
    component.giveMessage();
    expect(component.message).toEqual('please log in');
  });

  it('should change isLoggedIn to true', () => {
    component.logIn();
    expect(component.isLoggedIn).toEqual(true);
  });

  it('should give message to welcome on logIn', () => {
    component.logIn();
    component.giveMessage();
    expect(component.message).toEqual('welcome');
  });
  it('should display the correct name', () => {
    const expectedName = 'John Doe';
    component.name = expectedName;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.name');
    expect(element.textContent).toContain(expectedName);
  });
});
