import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        FormBuilder
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const component = fixture.componentInstance;
    component.ngOnInit()
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing!');
  });


  it('form invalid when empty', ()=>{
    const fixture = TestBed.createComponent(AppComponent)
    expect(fixture.componentInstance.userForm.valid).toBeFalsy();
  })

  it('submitting a form emits a user', ()=>{
    const fixture = TestBed.createComponent(AppComponent)
    const component = fixture.componentInstance;
    expect(component.userForm.valid).toBeFalsy();
    component.userForm.controls['firstname'].setValue('Prachi');
    component.userForm.controls['lastname'].setValue('Goyal');
    component.userForm.controls['gender'].setValue("female");
    component.userForm.controls['email'].setValue("test@test.com");
    expect(component.userForm.valid).toBeTruthy();
    let user;
    debugger
    component.loggedInUser.subscribe((value) => user = value)

    component.registerUser();

    // Trigger the login function
    expect(user.firstname).toBe('Prachi')
    expect(user.lastname).toBe('Goyal')
    expect(user.gender).toBe('female')
    expect(user.email).toBe('test@test.com')
  })
});
