import { Injectable } from '@angular/core';
import { UserProfile } from './model/user-profile.model';  // Import the UserProfile interface

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userProfile: UserProfile = { name: 'John Doe', email: 'john.doe@example.com' };  // Initial data

  constructor() { }

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  updateUserProfile(updatedProfile: UserProfile): void {
    this.userProfile = updatedProfile;  // Update the profile data
  }
}
