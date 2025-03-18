import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProfileComponent } from './edit-profile.component';
import { DataService } from '../data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('EditProfileComponent', () => {
  let fixture: ComponentFixture<EditProfileComponent>;
  let component: EditProfileComponent;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [DataService]
    });

    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should update the user profile in the service', () => {
      const updatedProfile = { name: 'Jane Doe', email: 'jane.doe@example.com' };
      component.userProfile = updatedProfile;

      component.updateProfile();

      expect(dataService.getUserProfile()).toEqual(updatedProfile);
    });
  });
});
