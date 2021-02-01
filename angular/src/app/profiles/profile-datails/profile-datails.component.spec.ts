import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatailsComponent } from './profile-datails.component';

describe('ProfileDatailsComponent', () => {
  let component: ProfileDatailsComponent;
  let fixture: ComponentFixture<ProfileDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
