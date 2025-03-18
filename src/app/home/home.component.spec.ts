import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DataService } from '../data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
      providers: [DataService]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should display the user profile information from the service', () => {
      const userProfile = dataService.getUserProfile();
      expect(component.userProfile).toEqual(userProfile);
    });
  });
});
