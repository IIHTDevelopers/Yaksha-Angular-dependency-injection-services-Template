import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { UserProfile } from './model/user-profile.model';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });

    service = TestBed.inject(DataService);  // Get the instance of DataService
  });

  describe('business', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();  // Test if the service is created successfully
    });

    it('should return the initial user profile data', () => {
      const initialProfile: UserProfile = { name: 'John Doe', email: 'john.doe@example.com' };
      const userProfile = service.getUserProfile();
      expect(userProfile).toEqual(initialProfile);  // Check if the initial profile matches the expected data
    });

    it('should update the user profile data', () => {
      const updatedProfile: UserProfile = { name: 'Jane Smith', email: 'jane.smith@example.com' };

      service.updateUserProfile(updatedProfile);  // Update the profile

      const userProfile = service.getUserProfile();  // Get the updated profile
      expect(userProfile.name).toBe('Jane Smith');  // Check if the name is updated
      expect(userProfile.email).toBe('jane.smith@example.com');  // Check if the email is updated
    });
  });
});
